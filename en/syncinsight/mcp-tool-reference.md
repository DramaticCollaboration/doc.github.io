---
title: SyncInsight MCP Tool Reference
shortTitle: MCP Tool Reference
category: "Development & Integration"
sort: 5
description: MCP tool schemas and parameter specifications exposed by the SyncInsight decision intelligence engine to external clients and the control tower (SyncVerse)
---

# SyncInsight MCP Tool Reference

## 1. Overview

SyncInsight exposes four core analytical tools corresponding to the external control tower (SyncVerse) and user prompts through a standard JSON-RPC interface via the Model Context Protocol (MCP).

---

## 2. Detailed Tool Specifications

### 2.1 `syncinsight_run_nl2sql`
Receives natural language queries, safely compiles them into enterprise data warehouse/DB queries, and executes them in read-only mode.

#### Parameter Schema
```json
{
  "name": "syncinsight_run_nl2sql",
  "arguments": {
    "queryPrompt": "Extract the daily payment failure rate trend and top 5 failure reasons over the past 30 days.",
    "targetDatasource": "dw_production_read_replica",
    "explainPlan": true,
    "limit": 100
  }
}
```

#### Response Schema
```json
{
  "sqlQuery": "SELECT DATE(created_at) AS tx_date, COUNT(CASE WHEN status='FAILED' THEN 1 END)*100.0/COUNT(*) AS failure_rate ... GROUP BY DATE(created_at) ORDER BY tx_date DESC;",
  "executionTimeMs": 84,
  "rowCount": 30,
  "data": [
    { "tx_date": "2026-09-14", "failure_rate": 0.42, "top_reason": "PG_TIMEOUT" }
  ],
  "safetyPassed": true
}
```

---

### 2.2 `syncinsight_create_deep_research`
Combines heterogeneous data (internal ledgers, market trends, and customer feedback) to generate multi-perspective deep research reports.

#### Parameter Schema
```json
{
  "name": "syncinsight_create_deep_research",
  "arguments": {
    "topic": "Payment conversion rate and fee optimization analysis for integrating new payment methods (Naver Pay/Toss Pay)",
    "sources": ["INTERNAL_DB", "EXTERNAL_MARKET_FEED", "RAG_KNOWLEDGE"],
    "includeWhatIfSimulation": true
  }
}
```

---

### 2.3 `syncinsight_simulate_action`
Predicts risk levels by running a What-If Simulation before applying a derived business action to production.

#### Parameter Schema
```json
{
  "name": "syncinsight_simulate_action",
  "arguments": {
    "actionId": "action-vip-promo-2026",
    "simulationHorizonDays": 30,
    "variableAdjustments": {
      "discountRatePercent": 5.0,
      "minimumBasketSize": 100000
    }
  }
}
```
