---
title: "REST API & MCP Tool Reference"
description: "Reference guide for SyncCrawl's core crawling job management, immediate execution triggers, crawled data retrieval, and Model Context Protocol (MCP) tool specifications."
sort: 6
---

# SyncCrawl REST API & MCP Tool Reference

SyncCrawl provides a **standard RESTful API** and **Model Context Protocol (MCP)** interface for seamless integration with external systems and AI agents.

---

## Authentication

All API requests must include a valid JWT token in the HTTP headers.

```http
Authorization: Bearer <YOUR_ACCESS_TOKEN>
X-Sync-Tenant-Id: TENANT_DEFAULT
Content-Type: application/json
```

---

## 1. Create Crawling Job API

Registers a new scheduled or one-off crawling job.

### `POST /api/v1/crawl/jobs`

#### Request Example (cURL)
```bash
curl -X POST "https://crawl.empasy.com/api/v1/crawl/jobs" \
     -H "Authorization: Bearer ${SYNC_TOKEN}" \
     -H "Content-Type: application/json" \
     -d '{
       "jobName": "FSS Press Release Collection",
       "targetUrl": "https://www.fss.or.kr/fss/bbs/B0000188/list.do",
       "cronExpression": "0 0 9 * * ?",
       "selectors": {
         "listRow": ".board-list tbody tr",
         "title": ".subject a",
         "publishedAt": ".date",
         "link": ".subject a::attr(href)"
       },
       "enableRagSync": true,
       "ragConfig": {
         "targetVectorDb": "PGVECTOR",
         "embeddingModel": "BGE-M3",
         "chunkSize": 500,
         "chunkOverlap": 50
       }
     }'
```

#### Response Example (201 Created)
```json
{
  "code": "SUCCESS",
  "data": {
    "jobId": "JOB_20260823_0042",
    "jobName": "FSS Press Release Collection",
    "status": "SCHEDULED",
    "nextRunAt": "2026-08-24T09:00:00Z",
    "createdAt": "2026-08-23T07:10:00Z"
  }
}
```

---

## 2. Trigger Job Run API

Immediately dispatches a specific job to a distributed worker regardless of its schedule.

### `POST /api/v1/crawl/jobs/{jobId}/trigger`

#### Request Example (cURL)
```bash
curl -X POST "https://crawl.empasy.com/api/v1/crawl/jobs/JOB_20260823_0042/trigger" \
     -H "Authorization: Bearer ${SYNC_TOKEN}"
```

#### Response Example (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "executionId": "EXEC_20260823_9011",
    "jobId": "JOB_20260823_0042",
    "status": "RUNNING",
    "allocatedAgent": "smart-crawling-agent-worker-02",
    "startedAt": "2026-08-23T07:11:05Z"
  }
}
```

---

## 3. Fetch Crawled Data API

Retrieves the execution summary and extracted records for a completed job run.

### `GET /api/v1/crawl/results/{executionId}`

#### Request Example (cURL)
```bash
curl -X GET "https://crawl.empasy.com/api/v1/crawl/results/EXEC_20260823_9011" \
     -H "Authorization: Bearer ${SYNC_TOKEN}"
```

#### Response Example (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "executionId": "EXEC_20260823_9011",
    "totalCount": 10,
    "elapsedTimeMs": 2450,
    "selfHealingOccurred": false,
    "items": [
      {
        "id": "ITEM_001",
        "title": "2H 2026 Electronic Financial Security Guidelines Revision Notice",
        "publishedAt": "2026-08-22",
        "detailUrl": "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=14092",
        "vectorSyncStatus": "INDEXED",
        "vectorId": "VEC_FSS_14092"
      }
    ]
  }
}
```

---

## 4. Model Context Protocol (MCP) Tool Specifications

SyncCrawl exposes standardized **MCP Tool specifications** so AI agents (such as SyncVerse) can invoke web collection directly during natural-language reasoning.

### `synccrawl_collect_page`
- **Description**: Visits the specified web URL and returns sanitized text and table data.
- **Parameters**:
  ```json
  {
    "url": { "type": "string", "description": "Target URL to collect" },
    "extractSelectors": { "type": "object", "description": "Per-field extraction selectors (optional)" },
    "waitForSelector": { "type": "string", "description": "Selector to wait for rendering completion" }
  }
  ```

### `synccrawl_query_knowledge`
- **Description**: Performs semantic search over vector data accumulated in the SyncCrawl knowledge base and returns grounded evidence.
- **Parameters**:
  ```json
  {
    "query": { "type": "string", "description": "User query text" },
    "category": { "type": "string", "description": "Knowledge category to filter by" },
    "topK": { "type": "number", "default": 5, "description": "Number of similar documents to return" }
  }
  ```
