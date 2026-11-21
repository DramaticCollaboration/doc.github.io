---
title: "4-Tier Autonomous Agent Federation Architecture & A2A Communication"
sidebarTitle: "System Architecture"
description: "Detailed specification of SyncVerse's L1 (Domain Worker), L2 (Central Control Tower), and L3 (Enterprise Strategy) three-layer architecture and standard MCP-based Agent-to-Agent (A2A) communication mechanisms."
head:
  - - meta
    - name: keywords
      content: SyncVerse, Multi-Agent Architecture, 3-Layer, Swarm, A2A, MCP, JSON-RPC, AgentScope Java, Vue Flow, Distributed Orchestration
  - - meta
    - property: og:title
      content: "SyncVerse: 4-Tier Autonomous Agent Federation Architecture & A2A Communication"
  - - meta
    - property: og:description
      content: "Specification of the L1-L2-L3 three-layer agent architecture and standard MCP protocol-based autonomous operations"
sort: 2
---

# 4-Tier Autonomous Agent Federation Architecture & A2A Communication

To systematically operate complex enterprise systems, SyncVerse adopts a **4-Tier Autonomous Agent Federation Architecture** and a **standard MCP (Model Context Protocol)-based Agent-to-Agent (A2A) communication network**.

---

## 1. 4-Tier Autonomous Agent Federation Hierarchy

By cleanly separating responsibilities and permissions across tiers, the architecture prevents single points of failure (SPOF) while ensuring security and execution reliability.

```mermaid
flowchart TD
    subgraph L3 ["Layer 3: Enterprise Strategy & Governance"]
        SyncInsight["SyncInsight Agent (Business Intelligence & Decision-Making)"]
    end

    subgraph L2 ["Layer 2: Central Control Tower (SyncVerse)"]
        Router["01 Intent Router Agent<br/>(Natural Language Intent Analysis)"]
        Orchestrator["02 Swarm Orchestrator Agent<br/>(A2A Task Distribution)"]
        Dispatcher["03 Coding Dispatcher Agent<br/>(SDK Coding Control)"]
        SelfHeal["04 Self-Healing Supervisor<br/>(Log Analysis & Remediation)"]
        FinOps["05 FinOps Gateway Agent<br/>(Cost & Model Optimization)"]
    end

    subgraph L1 ["Layer 1: Domain Worker Agents"]
        SyncBoot["SyncBoot Agent<br/>(Backend Infrastructure/API)"]
        SyncCMS["SyncCMS Agent<br/>(Content/View Rendering)"]
        SyncShop["SyncShop Agent<br/>(E-Commerce/Orders & Payments)"]
        SyncETA["SyncETA Agent<br/>(Autonomous E2E QA Verification)"]
        SyncCrawl["SyncCrawl Agent<br/>(Intelligent Crawler)"]
        SyncSDK["SyncSDK Coding Agent<br/>(Antigravity SWE)"]
    end

    SyncInsight -->|Enterprise KPIs & Strategic Directives| Router
    Router --> Orchestrator
    Orchestrator --> Dispatcher
    Orchestrator --> SelfHeal
    Orchestrator --> FinOps

    Orchestrator <-->|MCP JSON-RPC| SyncBoot
    Orchestrator <-->|MCP JSON-RPC| SyncCMS
    Orchestrator <-->|MCP JSON-RPC| SyncShop
    Orchestrator <-->|MCP JSON-RPC| SyncETA
    Orchestrator <-->|MCP JSON-RPC| SyncCrawl
    Dispatcher <-->|SWE Protocol| SyncSDK
```

### Detailed Responsibilities by Layer

1. **Layer 3: Enterprise Governance & Strategic Decision-Making (Strategic Layer)**
   - **Primary Agent**: `SyncInsight Agent`
   - **Role**: Analyzes enterprise-wide business metrics, traffic shifts, and marketing data to deliver high-level operational strategies and action plans to the Layer 2 Control Tower.

2. **Layer 2: Central Control Tower & Orchestration (Control Tower Layer - SyncVerse)**
   - **Primary Agents**: `Intent Router`, `Swarm Orchestrator`, `Coding Dispatcher`, `Self-Healing Supervisor`, `FinOps Gateway`
   - **Role**: Translates natural language requirements into concrete system action plans, coordinates dependencies as well as sequential/parallel execution across domain worker agents, and manages transactions and costs.

3. **Layer 1: Domain-Specific Worker Agents (Domain Worker Layer)**
   - **Primary Agents**: `SyncBoot`, `SyncCMS`, `SyncShop`, `SyncETA`, `SyncCrawl`, `SyncSDK`
   - **Role**: Directly executes core domain business logic (database CRUD, page rendering, order processing, autonomous QA testing, code modification, etc.).

---

## 2. A2A Communication Protocol (Model Context Protocol)

All inter-agent communication within SyncVerse operates on open standards: **MCP (Model Context Protocol)** and **JSON-RPC 2.0**.

### Communication Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor Architect as System Architect
    participant Verse as SyncVerse (L2 Orchestrator)
    participant SDK as SyncSDK (L1 Coding Agent)
    participant ETA as SyncETA (L1 QA Agent)
    participant Boot as SyncBoot (L1 Backend)

    Architect->>Verse: "Add a badge display field to product details"
    Verse->>Verse: Intent Analysis (Intent Routing: Code Fix)
    Verse->>SDK: tools/call: generate_feature_code (Working Branch)
    SDK-->>Verse: Source code modification & DDL generation complete (Git Diff)
    Verse->>ETA: tools/call: run_regression_test (Stage Environment)
    ETA-->>Verse: QA verification complete (0 Failures, All Passed)
    Verse->>Architect: HITL review request (Code Diff & DDL changes)
    Architect->>Verse: Approve
    Verse->>Boot: tools/call: apply_migration_and_deploy
    Boot-->>Verse: Zero-downtime production deployment complete
    Verse-->>Architect: "Deployment complete and service operating normally"
```

### Standard MCP Request/Response Payload Specification

#### Agent Tool Invocation Request (Request Payload)
```json
{
  "jsonrpc": "2.0",
  "id": "req-syncverse-98213",
  "method": "tools/call",
  "params": {
    "name": "syncboot_apply_migration",
    "arguments": {
      "targetService": "product-service",
      "ddlScript": "ALTER TABLE tb_product ADD COLUMN badge_type VARCHAR(20) DEFAULT 'NONE';",
      "safeMode": true,
      "timeoutSeconds": 30
    }
  }
}
```

#### Agent Execution Result Response (Response Payload)
```json
{
  "jsonrpc": "2.0",
  "id": "req-syncverse-98213",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Migration successfully applied. 0 rows affected. DDL lock released."
      }
    ],
    "isError": false,
    "metadata": {
      "executionTimeMs": 142,
      "affectedTables": ["tb_product"]
    }
  }
}
```

---

## 3. Technology Stack & Runtime Architecture

SyncVerse adopts the following technology stack to support high-volume enterprise traffic and zero-downtime operations.

| Layer | Technology Stack | Purpose |
| :--- | :--- | :--- |
| **Backend Core** | Java 25, Spring Boot 4.0 | Enterprise runtime, Virtual Threads, transaction management |
| **AI Framework** | **AgentScope Java** (`io.agentscope:agentscope-harness`) | Enterprise standard AI framework, multi-agent MsgHub collaboration, ReActAgent autonomous tool execution |
| **Frontend UI** | Vue 3, TypeScript, Vite, **Vue Flow** | Node-edge topology visualization, control tower dashboard |
| **State & Cache** | Redis 7.x (Cluster) | Real-time agent state sharing, semantic caching, distributed locking |
| **Database** | PostgreSQL 18.6 (`pgvector`) | RDBMS data consistency, JSONB audit logs, vector embedding persistence |
| **Infrastructure** | Docker, Kubernetes, GitHub Actions | Containerized isolated execution, CI/CD deployment pipelines |

---

## 4. Role Separation Between Admin Server and MCP Server (Guaranteed 0ms Startup Delay)

Every subproject under SyncSeries strictly separates the responsibilities of its Admin server (serving management UIs) and its MCP server (providing agent collaboration tools).

```mermaid
graph TD
    subgraph AdminRuntime ["Admin Server (sync-*-admin)"]
        UI["Serve Admin UI APIs"]
        Auth["Authentication/Authorization & User Management"]
        Block["self-registration.enabled: false<br/>(Block central registration attempts)"]
    end

    subgraph McpRuntime ["MCP Server (sync-*-mcp-server)"]
        ToolRegistry["Tool Registry (JSON-RPC)"]
        AsyncReg["Asynchronous Self-Registration Client<br/>(CompletableFuture.runAsync)"]
        Timeout["3s Connect/Read Timeout"]
    end

    subgraph CenterTower ["SyncVerse Central Control Tower"]
        RegEndpoint["POST /api/v1/verse/agents/register"]
    end

    AsyncReg -.->|0ms startup delay guaranteed even when offline| RegEndpoint
```

1. **Preemptive Isolation of Admin Server from SyncVerse Dependencies**:
   * Each service's Admin server focuses exclusively on UI rendering and business REST APIs, preventing unnecessary Control Tower registration attempts via `self-registration.enabled: false`.
2. **Asynchronous MCP Server Self-Registration and Timeout**:
   * On MCP server startup, `AgentSelfRegistrationClient` performs registration asynchronously on a background thread via `CompletableFuture.runAsync`.
   * Enforcing a 3-second connect/read timeout based on `SimpleClientHttpRequestFactory` ensures the main process never blocks and starts immediately with 0ms delay even if the SyncVerse Control Tower is down or not yet running.
