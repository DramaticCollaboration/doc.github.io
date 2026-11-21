---
title: "SyncAPIM MCP Tools and REST API Reference"
sidebarTitle: "MCP Tools & REST API"
description: "Specification of the 6 standard MCP tools (including apim_discover_shadow_apis) and /api/v1/apim REST APIs provided by SyncAPIM to the SyncVerse central control tower and external agents."
head:
  - - meta
    - name: keywords
      content: SyncAPIM MCP, apim_discover_shadow_apis, apim_analyze_threat_events, apim_scan_pii_exposure, apim_manage_security_policy, apim_export_openapi_spec, /api/v1/apim
  - - meta
    - property: og:title
      content: "SyncAPIM MCP Tools and REST API Reference"
  - - meta
    - property: og:description
      content: "MCP tools and REST API specification for shadow API discovery, threat event analysis, PII exposure scanning, security policy control, and OpenAPI 3.0.1 drift auditing"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/syncapim/mcp-tools
sort: 4
---

# SyncAPIM MCP Tools and REST API Reference

In accordance with the enterprise-wide single Canonical URL standard, `SyncAPIM` provides all REST API and Model Context Protocol (MCP) endpoints under the **`/api/v1/apim/...`** prefix.

- **Cloud Endpoint**: `https://apim.empasy.com/api/v1/apim` (Demo Portal: `https://apim-admin.empasy.io/api/v1/apim`)
- **Local Development Ports**:
  - Admin UI: `http://localhost:3119` (`http://apim.localhost`)
  - Homepage: `http://localhost:5190` (`http://apim-home.localhost`)
  - JVM #1 (`sync-apim-admin`): `http://localhost:18089`
  - JVM #2 (`sync-apim-receiver`): `http://localhost:18090` (TCP `5044` / `5055`)
  - JVM #3 (`sync-apim-detector`): `http://localhost:18092`
  - JVM #4 (`sync-apim-gateway`): `http://localhost:18091` (`http://apim-gw.localhost`)

---

## 1. Standard MCP Tools Specification (`/api/v1/apim/mcp`)

The `SyncVerse` central control tower, `SyncETA` QA agent, and `SyncInsight` analytics agent autonomously invoke `SyncAPIM`'s 6 core security and governance tools via the JSON-RPC 2.0-based MCP endpoints (`POST /api/v1/apim/mcp`, `GET /api/v1/apim/mcp/sse`).

### 1.1 `apim_discover_shadow_apis`
Detects unregistered (Shadow) API endpoints, duplicate paths, and high-risk (`risk_score >= minRiskScore`) APIs.

- **Input Parameters (Arguments)**:
  ```json
  {
    "host": "api.empasy.com",
    "minRiskScore": 50
  }
  ```
- **Example Return Payload**:
  ```json
  {
    "tool": "apim_discover_shadow_apis",
    "totalEndpoints": 10,
    "matchedHighRiskCount": 3,
    "shadowOrDriftedSpecCount": 2,
    "duplicateEndpointCount": 1
  }
  ```

### 1.2 `apim_analyze_threat_events`
Queries SQLi, XSS, SSRF, RCE, and JWT tampering threat detection events from the PostgreSQL 18.6 `wapf_detect_event` time-series table and analyzes statistics by attack type.

- **Input Parameters (Arguments)**:
  ```json
  {
    "host": "api.empasy.com",
    "threatCode": "SQLI",
    "limit": 20
  }
  ```

### 1.3 `apim_scan_pii_exposure`
Scans API request/response data fields (`wapf_data_field`) and packets for exposure of 8 categories of sensitive information, including resident registration numbers, card numbers, and bank account numbers.

- **Input Parameters (Arguments)**:
  ```json
  {
    "endpointUuid": "ep_apim_004"
  }
  ```

### 1.4 `apim_manage_security_policy`
Immediately modifies the block status (`block_status`: `1` block / `0` unblock) of a specific API endpoint or maps WAF security policies and synchronizes the Redis cache.

- **Input Parameters (Arguments)**:
  ```json
  {
    "action": "BLOCK_ENDPOINT",
    "endpointUuid": "ep_apim_008",
    "blockStatus": "1"
  }
  ```

### 1.5 `apim_export_openapi_spec`
Extracts the OpenAPI 3.0.1 JSON specification automatically inferred from live traffic and returns Contract Drift audit results compared against the design specification.

- **Input Parameters (Arguments)**:
  ```json
  {
    "endpointUuid": "ep_apim_001",
    "designSpec": "{\"openapi\":\"3.0.1\",\"paths\":{\"/api/v1/shop/orders\":{\"post\":{}}}}"
  }
  ```

### 1.6 `apim_receive_watch_defense_pack`
Receives runtime attack pattern defense packs (`ApimDefensePack`) compiled and sandbox-verified by [`SyncWatch`](/en/syncwatch/), and applies them with zero-downtime hot-swapping to the `SqlXssLexicalTokenizer` fingerprint matcher and `SandboxedDefenseEvaluator`.

### 1.7 `agent_execute_task`
Autonomously executes natural-language security audit and blocking tasks delegated by the `SyncVerse` control tower using the `AgentScope Java` `ReActAgent` loop.

---

## 2. 4-JVM Core REST API Specification (`/api/v1/apim/...`)

| Responsible JVM | Functional Area | HTTP Method & Canonical Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **`sync-apim-admin`** | **Dynamic Menu Authorization** | `GET /api/v1/apim/sys/permission/getUserPermissionByToken` | Returns the role-based dynamic menu tree (`sys_permission`) for the authenticated user |
| **`sync-apim-admin`** | **API Catalog** | `GET /api/v1/apim/endpoint/list`<br>`GET /api/v1/apim/endpoint/detail`<br>`POST /api/v1/apim/endpoint/add`<br>`PUT /api/v1/apim/endpoint/edit` | API endpoint listing, data field details, path merging, and block status (`blockStatus`) control |
| **`sync-apim-admin`** | **OpenAPI Spec & Audit** | `GET /api/v1/apim/spec/list`<br>`GET /api/v1/apim/spec/download`<br>`POST /api/v1/apim/spec/audit` | OpenAPI 3.0.1 spec retrieval/download and Contract Drift comparison audit execution |
| **`sync-apim-admin`** | **Threat Detection Events** | `GET /api/v1/apim/event/list`<br>`GET /api/v1/apim/event/interval/count`<br>`GET /api/v1/apim/event/interval/registry/count` | Real-time threat packet queries and time-series aggregation based on PostgreSQL `wapf_detect_event` |
| **`sync-apim-admin`** | **Security Policies & Rules** | `GET /api/v1/apim/policy/list`<br>`POST /api/v1/apim/policy/add`<br>`GET /api/v1/apim/rule/list`<br>`GET /api/v1/apim/rule/stat` | CRUD for 7 security policies and 6 threat detection rules; statistics by attack type and severity |
| **`sync-apim-admin`** | **PII & Alerts** | `GET /api/v1/apim/sensitivity/list`<br>`GET /api/v1/apim/mail/list`<br>`POST /api/v1/apim/mail/send` | Management of 8 PII masking regexes and dispatch of security alert emails |
| **`sync-apim-receiver`** | **Packet Ingestion** | `POST /api/v1/apim/receiver/ingest`<br>`GET /api/v1/apim/receiver/status` | HTTP telemetry packet ingestion (queued to Redis Stream `job_queue`) and receiver status lookup |
| **`sync-apim-detector`** | **Real-Time Detection Worker** | `POST /api/v1/apim/detector/inspect`<br>`POST /api/v1/apim/detector/rules/reload`<br>`GET /api/v1/apim/detector/status` | Immediate deep packet inspection, forced reload of detection rules and PII cache, and worker status check |
| **`sync-apim-gateway`** | **Inline Blocking Gateway** | `GET /api/v1/apim/gateway/blocked`<br>`POST /api/v1/apim/gateway/block`<br>`POST /api/v1/apim/gateway/unblock` | Live blocked endpoint listing and immediate runtime block/unblock control |

---

## 3. cURL Invocation Examples

### 3.1 Invoking an MCP Tool (`apim_discover_shadow_apis`)
```bash
curl -X POST "http://localhost:18089/api/v1/apim/mcp" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": "req-apim-01",
    "method": "tools/call",
    "params": {
      "name": "apim_discover_shadow_apis",
      "arguments": {
        "minRiskScore": 50
      }
    }
  }'
```

### 3.2 Executing a Live-Traffic Contract Drift Audit Against a Design Specification
```bash
curl -X POST "http://localhost:18089/api/v1/apim/spec/audit" \
  -H "Content-Type: application/json" \
  -d '{
    "uuid": "spec_apim_003"
  }'
```
