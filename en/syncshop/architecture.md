---
title: "SyncShop: System and AI Agent Architecture"
sidebarTitle: "System Architecture"
description: "Specification for SyncShop's decoupled Headless architecture, MSA backend design, AgentScope Java-based agent swarm, and A2A communication pipeline"
head:
  - - meta
    - name: keywords
      content: SyncShop, Headless Commerce, AgentScope Java, A2A, MCP, Agent Swarm, Dynamic Pricing, Spring Boot 4.0
sort: 2
---

# System and AI Agent Architecture

SyncShop adopts a **Headless architecture** that guarantees complete decoupling between the frontend and backend, along with an **AgentScope Java-based multi-agent swarm** for autonomous commerce operations.

---

## 1. Enterprise System Layer Architecture

```mermaid
flowchart TD
    subgraph ClientLayer ["Frontend Presentation Layer (Headless Clients)"]
        WebAdmin["SyncShop Admin<br/>(Vue 3 + Vite)"]
        MobileApp["Mobile App<br/>(Uni-App / Native)"]
        ThirdParty["External Commerce Channels<br/>(Open Marketplaces / Social Commerce)"]
    end

    subgraph ServiceLayer ["Backend Business Logic (Core Backend)"]
        AdminServer["sync-shop-admin<br/>(Spring Boot 4.0 / MyBatis)"]
        PMS["Product Management<br/>(PMS Engine)"]
        OMS["Order & Shipping<br/>(OMS Engine)"]
        SMS["Promotions<br/>(SMS Engine)"]
        AdminServer --- PMS
        AdminServer --- OMS
        AdminServer --- SMS
    end

    subgraph AgentLayer ["Autonomous Commerce Agents (Commerce Swarm)"]
        McpServer["sync-shop-mcp-server<br/>(AgentScope Java)"]
        PricingAgent["Pricing Optimizer Agent<br/>(Price & Margin Optimization)"]
        SafeguardAgent["Margin Safeguard Agent<br/>(Negative-Margin Prevention)"]
        ExecAgent["Snapshot & Exec Agent<br/>(Snapshot Preservation & DB Commit)"]
        McpServer --- PricingAgent
        McpServer --- SafeguardAgent
        McpServer --- ExecAgent
    end

    subgraph ControlTower ["Enterprise Central Control (SyncSeries Orchestrator)"]
        SyncVerse["SyncVerse Control Tower<br/>(A2A Message Bus & HITL Approval)"]
    end

    ClientLayer -->|"RESTful API / JWT"| AdminServer
    SyncVerse <-->|"MCP JSON-RPC / SSE"| McpServer
    McpServer -->|Internal Service Binding| AdminServer
```

---

## 2. Intra-Agent Commerce Swarm

Instead of relying on a single LLM call, the SyncShop agent server executes safe autonomous operations through a granular, three-stage agent swarm architecture.

1. **Pricing Optimizer Agent**:
   * Analyzes inventory turnover by category, sales trends, and competitor pricing data to calculate optimal discount rates and target adjusted prices.
2. **Margin Safeguard Agent**:
   * Exhaustively validates every calculated price to ensure it does not violate each product's cost price or minimum margin rate thresholds.
   * Immediately blocks execution and logs the rejection reason if a negative-margin risk is detected.
3. **Snapshot & Execution Agent**:
   * Preserves the original price state as a snapshot (`TB_SHOP_PRICE_SNAPSHOT`) immediately before database updates.
   * Applies transactions to the `pms_product` table and reports the change results back to the control tower.

---

## 3. Dynamic Pricing and Lossless Rollback Sequence

```mermaid
sequenceDiagram
    autonumber
    actor Admin as Operator / Control Tower
    participant Verse as SyncVerse (L2)
    participant ShopMcp as SyncShop MCP Server
    participant Swarm as Swarm (Safeguard)
    participant DB as PostgreSQL 18.6 (pgvector)

    Admin->>Verse: "Apply a 10% batch discount to the Winter Outerwear category"
    Verse->>ShopMcp: tools/call: shop_batch_price_update
    ShopMcp->>Swarm: Request price simulation and margin validation
    Swarm-->>ShopMcp: Validation passed (margin within limits)
    ShopMcp->>DB: Save current price state snapshot (issue snapshot_id)
    ShopMcp->>DB: Batch update prices in pms_product
    ShopMcp-->>Verse: Return result (42 items updated, snapshot_id: SNP-202609-001)

    opt Immediate rollback upon anomaly detection
        Admin->>Verse: "Emergency cancel price discount (rollback)"
        Verse->>ShopMcp: tools/call: shop_batch_price_update (action: ROLLBACK_PRICE)
        ShopMcp->>DB: Restore original prices using snapshot_id
        ShopMcp-->>Verse: Report rollback completion
    end
```

---

## 4. Security and Transaction Integrity

* **A2A Inbound Security**: Validates secret keys and inbound tokens via `A2ASessionKeyHolder` to prevent control requests from unauthorized agents before execution.
* **Saga Pattern Consistency**: Tracks a unique `task_id` per unit of work and preserves prior consistent state through compensating transactions if an integration step fails.
* **Zero-Mock Principle**: All tool calls exclude in-memory dummy data and integrate 100% with the live persistent database.
