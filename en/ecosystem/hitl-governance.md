---
title: HITL Governance & Saga Distributed Transactions
shortTitle: HITL & Saga Governance
category: Governance
sort: 5
description: Three-tier Human-in-the-Loop (HITL) approval levels ensuring system safety and Saga pattern-based distributed transaction compensating recovery principles
---

# HITL Governance & Saga Distributed Transactions

## 1. Enterprise Safety Principles

The greatest risks to guard against in an autonomous AI operating ecosystem are **unforeseen side effects and data corruption**.  
To maximize autonomy while systematically controlling risk, SyncSeries operates **3-Tier HITL Safety Tiers** and the **Saga Compensating Transaction Pattern** as enterprise-wide standards.

---

## 2. 3-Tier HITL Safety Approval Tiers

Every MCP tool invocation is automatically classified into one of three tiers based on its risk level:

```mermaid
flowchart TD
    Req[Agent Action Request] --> Eval{Risk Assessment}
    Eval -->|"Tier 1: Read-Only"| Auto["Tier 1: Autonomous Execution<br/>Queries, Statistics Collection, Virtual Simulation"]
    Eval -->|"Tier 2: Soft Mutation"| Notify["Tier 2: Post-Execution Notification<br/>Draft Saving, Cache Refresh, Staging Deployment"]
    Eval -->|"Tier 3: Hard Mutation"| Gate["Tier 3: Pre-Approval Gate<br/>DB DDL/DML, Billing Policy Changes, Production Deployment"]

    Gate --> AdminDecision{Admin Approval?}
    AdminDecision -->|"Approve"| Exec["Production Execution & WORM Audit Ledger Recording"]
    AdminDecision -->|"Reject"| Rollback[Discard Action & Preserve Original State]
```

| Tier | Risk Level | Example Operations | Approval Policy |
|:---|:---|:---|:---|
| **Tier 1 (Safe)** | Harmless (Read-Only) | Statistics queries, log search, What-If simulations, RAG document lookup | **Zero-Wait Immediate Autonomous Execution** |
| **Tier 2 (Low Risk)** | Minor (Soft Mutation) | Staging content registration, dev server branch creation, temp file cleanup | **Post-Execution Notification** (Slack / Notification Center) |
| **Tier 3 (High Risk)** | Destructive (Hard Mutation) | DB DDL migrations, user privilege escalation, billing/discount policy changes | **Mandatory Pre-Approval by Administrator** (HITL Gate) |

---

## 3. Saga Pattern Distributed Transactions and Compensating Recovery

In a microservices environment, when a partial step fails during a composite workflow spanning multiple domain agents, the **Orchestrated Saga Pattern** is applied to safely revert the system to a consistent state.

```mermaid
sequenceDiagram
    autonumber
    participant SV as SyncVerse (Saga Coordinator)
    participant SB as SyncBoot
    participant SCMS as SyncCMS
    participant SETA as SyncETA

    SV->>SB: Tx 1: Create DB Schema
    SB-->>SV: Success (T1 Committed)
    
    SV->>SCMS: Tx 2: Publish Landing Page
    SCMS-->>SV: Success (T2 Committed)
    
    SV->>SETA: Tx 3: Payment Regression Verification
    SETA-->>SV: Failed! (Error Occurred, T3 Failed)
    
    Note over SV: [Trigger Saga Compensation Pipeline]
    SV->>SCMS: Comp 2: Unpublish Landing Page (C2)
    SCMS-->>SV: Rollback Complete
    
    SV->>SB: Comp 1: DB Schema Rollback Migration (C1)
    SB-->>SV: Rollback Complete
    
    Note over SV: Ensure Eventual Consistency via Saga Compensating Transactions
```

### 3.1 Idempotency Guarantee
- Every compensating action includes an **Idempotency Key** so that system state remains consistent even under network retries or duplicate invocations.
- Failure causes and compensating transaction execution results are transparently recorded in the control tower logs in the `RFC 7807 Problem Details` standard format.
