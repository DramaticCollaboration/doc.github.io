---
title: SyncLLM API Reference
shortTitle: API Reference
category: Development & Integration
sort: 5
description: RESTful API specification for SyncLLM gateway's OpenAI-compatible endpoints, FinOps token management, and routing policies
---

# SyncLLM API Reference

## 1. Overview & Authentication

SyncLLM requires HTTP Bearer token authentication for all endpoints:

```http
Authorization: Bearer <API_KEY>
```

---

## 2. OpenAI-Compatible Inference Endpoints

- **Production Gateway URL**: `https://empasy.io/en/solutions/sync-llm.htmlapi/v1/llm/chat/completions`
- **Local Development Server URL**: `http://localhost:18090/api/v1/llm/chat/completions`

### 2.1 POST `/api/v1/llm/chat/completions`

Receives a client's prompt query, routes it to the optimal upstream model, and returns the result.

#### Request Body

| Field | Type | Required | Default | Description |
|:---|:---|:---|:---|:---|
| `model` | string | Yes | - | Model name (`auto-route`, `fast-track`, `deep-reasoning`, or an actual model name) |
| `messages` | array | Yes | - | Array of conversation history objects (`role`, `content`) |
| `temperature` | float | No | 0.7 | Generation creativity factor (0.0 ~ 2.0) |
| `stream` | boolean | No | false | Whether to enable SSE streaming |
| `max_tokens` | integer | No | null | Maximum number of generated tokens |
| `syncllm_options` | object | No | - | SyncLLM-specific control options (`cacheBypass`, `piiStrict`) |

#### cURL Example (Production & Local)

```bash
# Production endpoint (For local development: http://localhost:18090/api/v1/llm/chat/completions)
curl -X POST https://empasy.io/en/solutions/sync-llm.htmlapi/v1/llm/chat/completions \
  -H "Authorization: Bearer $SYNCLLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "auto-route",
    "messages": [{"role": "user", "content": "Analyze payment error logs"}],
    "syncllm_options": {
      "piiStrict": true,
      "cacheBypass": false
    }
  }'
```

---

### 2.2 POST `/api/v1/llm/embeddings`

Generates text embedding vectors.

```bash
curl -X POST https://empasy.io/en/solutions/sync-llm.htmlapi/v1/llm/embeddings \
  -H "Authorization: Bearer $SYNCLLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "SyncSeries A2A Autonomous Ecosystem"
  }'
```

---

## 3. FinOps Token Budget Management Endpoints

### 3.1 GET `/api/v1/llm/budgets`

Retrieves daily and monthly token usage and remaining budgets for all registered agents/departments.

#### Response Example (200 OK)

```json
{
  "budgets": [
    {
      "agentCode": "SyncBoot",
      "period": "MONTHLY",
      "allocatedUsd": 500.00,
      "currentUsageUsd": 182.40,
      "burnRatePercent": 36.48,
      "alertThresholdPercent": 80.0,
      "status": "HEALTHY"
    },
    {
      "agentCode": "SyncInsight",
      "period": "MONTHLY",
      "allocatedUsd": 1200.00,
      "currentUsageUsd": 984.10,
      "burnRatePercent": 82.01,
      "alertThresholdPercent": 80.0,
      "status": "WARNING_THRESHOLD_EXCEEDED"
    }
  ]
}
```

---

### 3.2 POST `/api/v1/llm/budgets`

Configures the token budget and blocking threshold for a specific agent.

```json
{
  "agentCode": "SyncCMS",
  "monthlyBudgetUsd": 300.00,
  "hardLimitEnabled": true,
  "alertWebhookUrl": "https://hooks.slack.com/services/xxx/yyy/zzz"
}
```
