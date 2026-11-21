---
title: "SyncOps MCP Tools and REST API Reference"
sidebarTitle: "MCP Tools & API"
description: "Reference specification for the four core MCP tools (including ops_analyze_project_profitability) and the /api/v1/ops standard REST APIs exposed by SyncOps to the SyncVerse control tower and external agents."
head:
  - - meta
    - name: keywords
      content: SyncOps MCP, ops_analyze_project_profitability, ops_check_allocation_overload, ops_audit_subcontract_payment, ops_verify_rnd_note_hash, REST API, /api/v1/ops
  - - meta
    - property: og:title
      content: "SyncOps MCP Tools and REST API Reference"
  - - meta
    - property: og:description
      content: "MCP tools and REST API specification for dual-rate P&L auditing, workforce M/M overallocation checks, subcontract payment deadline auditing, and electronic R&D notebook SHA-256 verification"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/logo.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/syncops/mcp-tools
sort: 3
---

# SyncOps MCP Tools and REST API Reference

Following the enterprise single canonical URL standard, `SyncOps` exposes all REST APIs and Model Context Protocol (MCP) endpoints under the **`/api/v1/ops/...`** prefix.

- **Cloud Endpoint**: `https://ops.empasy.io/api/v1/ops`
- **Local Development Ports**: Admin UI `http://localhost:3104` / API Server `http://localhost:18084`

---

## 1. Standard MCP Tools Specification

The SyncVerse central control tower or external AI agents can autonomously invoke the four core business operations tools of SyncOps over the JSON-RPC 2.0-based MCP protocol.

### 1.1 `ops_analyze_project_profitability`
Analyzes dual-rate P&L (contract billing rate vs. actual incurred cost) by project and diagnoses risks of falling short of the target operating margin rate.

- **Input Parameters (Arguments)**:
  ```json
  {
    "projectId": "PRJ-2026-001",
    "includeForecast": true,
    "targetYear": 2026
  }
  ```
- **Example Response Payload**:
  ```json
  {
    "projectId": "PRJ-2026-001",
    "projectName": "Next-Gen Digital Finance Integrated Control Platform Construction",
    "netContractAmount": 1200000000,
    "cumulativeActualCost": 815000000,
    "directGuaranteeFee": 4200000,
    "operatingMarginRate": 24.8,
    "targetMarginRate": 30.0,
    "burnRatePercent": 68.2,
    "riskStatus": "WARNING_MARGIN_DROP",
    "recommendation": "Adding 2 ADVANCED external contractors has lowered the margin rate by 5.2 percentage points compared to the target. We recommend billing a Change Request (CR) or replacing them with available full-time bench engineers."
  }
  ```

### 1.2 `ops_check_allocation_overload`
Queries the monthly M/M utilization matrix of enterprise technical personnel to detect engineers assigned above `1.0 M/M` (100%), and recommends available bench personnel based on `pgvector` skill embeddings.

- **Input Parameters (Arguments)**:
  ```json
  {
    "workYear": 2026,
    "workMonth": 10,
    "requiredKosaGrade": "ADVANCED",
    "requiredSkills": ["Java 25", "Spring Boot", "PostgreSQL"]
  }
  ```
- **Example Response Payload**:
  ```json
  {
    "overloadedEngineers": [],
    "benchCandidates": [
      {
        "employeeId": "EMP-2026-014",
        "name": "Su-seok Kim",
        "kosaGrade": "ADVANCED",
        "currentAllocationMm": 0.0,
        "skillSimilarityScore": 0.96,
        "baseMonthlyCost": 7200000,
        "expectedBillingSpread": 4800000
      }
    ]
  }
  ```

### 1.3 `ops_audit_subcontract_payment`
Audits all payment deadline compliance statuses under Articles 6 and 13 of the Fair Transactions in Subcontracting Act (15 days after prime contract receipt / 60 days after inspection) as well as upcoming expirations across the four major performance guarantee bonds.

- **Input Parameters (Arguments)**:
  ```json
  {
    "checkOverdueOnly": false,
    "warningDaysThreshold": 7
  }
  ```
- **Example Response Payload**:
  ```json
  {
    "auditedMilestones": 18,
    "overdueCount": 0,
    "imminentWithin7DaysCount": 1,
    "alerts": [
      {
        "vendorMilestoneId": "VMS-2026-009",
        "vendorName": "TechSolution Partners Co., Ltd.",
        "stepName": "2nd Interim Milestone Progress Payment",
        "supplyAmount": 85000000,
        "statutoryDeadlineDate": "2026-10-29",
        "daysRemaining": 5,
        "accruedDelayInterest": 0,
        "status": "IMMINENT_D5"
      }
    ]
  }
  ```

### 1.4 `ops_verify_rnd_note_hash`
Verifies the integrity of the body content, author/witness signatures, Git commit hashes, and SHA-256 timestamping authority (`tsa_timestamp`) hash of an electronic R&D notebook (`ops_research_note`) used for R&D tax credits under Article 10 of the Restriction of Special Taxation Act (RSTA).

- **Input Parameters (Arguments)**:
  ```json
  {
    "researchProjectId": "RND-2026-AI-01",
    "noteId": "RNOTE-2026-104"
  }
  ```
- **Example Response Payload**:
  ```json
  {
    "noteId": "RNOTE-2026-104",
    "authorId": "EMP-2026-003",
    "witnessId": "EMP-2026-001",
    "gitCommitHashes": "a1b2c3d4,e5f6a7b8",
    "tsaTimestampHash": "sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "integrityVerified": true,
    "verifiedAt": "2026-10-24T13:50:00Z"
  }
  ```

---

## 2. Core REST API Specification (`/api/v1/ops/...`)

| Functional Area | HTTP Method & Canonical Endpoint | Description |
| :--- | :--- | :--- |
| **Dynamic Menu Authorization** | `GET /api/v1/ops/sys/permission/getUserPermissionByToken` | Retrieves the role-based dynamic menu tree (`sys_permission`) for the current login session |
| **AI Talent Matching** | `POST /api/v1/ops/ai/match-talents` | Performs vector matching of bench personnel based on required KOSA grade and skill set, plus margin simulation |
| **AI Risk Logs** | `GET /api/v1/ops/ai/risk-logs`<br/>`POST /api/v1/ops/ai/risk-logs/{id}/resolve` | Queries and resolves alerts detected by `RiskGuard` for sharp margin drops, M/M overallocation, and imminent subcontract deadlines |
| **Multi-Dimensional P&L Pivot** | `GET /api/v1/ops/analysis/profit-matrix` | Retrieves a dual-rate revenue, cost, and contribution margin matrix by client, project, department, and period |
| **Projects & Assignments** | `GET /api/v1/ops/projects`<br/>`POST /api/v1/ops/assignments` | Manages SI project master records and registers personnel M/M allocation assignments |
| **Timesheet Approval** | `POST /api/v1/ops/timesheets/{id}/approve` | Approves weekly actual effort hours (automatic journal entry to `CLIENT_SI` cost of sales / `CORE_RD` R&D expense) |
| **KOSA Grade Calculation** | `POST /api/v1/ops/kosa/calculate-grade` | Automatically calculates KOSA technical grades based on education, certifications, and recognized career days |
| **Prime/Subcontracts & Bonds** | `GET /api/v1/ops/contracts`<br/>`GET /api/v1/ops/contracts/{id}/compliance-check` | Checks prime/subcontract records, expiration of the four major performance guarantee bonds, and Subcontracting Act compliance |
| **One-Click Handover** | `POST /api/v1/ops/contacts/handover` | Transfers assigned client/partner contacts and pending tasks in bulk, and generates an AI summary briefing |
| **Electronic R&D Notebook** | `POST /api/v1/ops/research/notes` | Registers an electronic R&D notebook for RSTA R&D tax credits and generates a SHA-256 timestamp signature |

---

## 3. cURL Request Examples

### 3.1 AI Optimal Talent Matching Request
```bash
curl -X POST "https://ops.empasy.io/api/v1/ops/ai/match-talents" \
  -H "Authorization: Bearer ${SYNC_OPS_JWT}" \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "PRJ-2026-001",
    "requiredKosaGrade": "ADVANCED",
    "requiredSkills": ["Spring Boot", "Vue 3", "PostgreSQL"],
    "rollInDate": "2026-11-01",
    "rollOutDate": "2027-04-30",
    "proposedBillingUnitPrice": 12500000
  }'
```

### 3.2 Execute One-Click Contact Handover
```bash
curl -X POST "https://ops.empasy.io/api/v1/ops/contacts/handover" \
  -H "Authorization: Bearer ${SYNC_OPS_JWT}" \
  -H "Content-Type: application/json" \
  -d '{
    "predecessorEmployeeId": "EMP-2026-008",
    "successorEmployeeId": "EMP-2026-012",
    "handoverReason": "Succession of client key contact due to PMO lead reassignment for the Next-Gen Finance project"
  }'
```
