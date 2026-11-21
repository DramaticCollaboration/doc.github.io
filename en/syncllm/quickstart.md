---
title: "SyncLLM Quickstart Guide (5-Minute Setup)"
shortTitle: "Quickstart"
category: "Getting Started"
sort: 2
description: "Guide to running the SyncLLM gateway locally with Docker Compose, connecting upstream model providers, and sending your first prompt"
---

# SyncLLM Quickstart Guide (5-Minute Setup)

## 1. Prerequisites

- **Docker & Docker Compose** (v24.0 or later)
- **Git**
- **curl** or an HTTP client tool (such as Postman)

---

## 2. Launch in 5 Minutes with Docker Compose

SyncLLM can be launched immediately as a container bundle with built-in Redis (for semantic caching and rate limiting) and PostgreSQL (for the token ledger and usage auditing).

### 2.1 Clone the Repository and Navigate to the Directory

```bash
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-llm
```

### 2.2 Configure Environment Variables (`.env`)

```bash
cp .env.example .env
```

Set your upstream LLM provider API keys in the `.env` file:

```properties
# SyncLLM Core Config
SERVER_PORT=8080
ADMIN_API_KEY=syncllm-admin-secret-key-2026

# Upstream LLM Providers
OPENAI_API_KEY=sk-proj-xxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxx

# Local SLM (Optional, vLLM or Ollama)
LOCAL_VLLM_BASE_URL=http://host.docker.internal:8000/v1

# Redis Semantic Cache Config
REDIS_HOST=redis
REDIS_PORT=6379
SEMANTIC_CACHE_ENABLED=true
SEMANTIC_CACHE_THRESHOLD=0.92
```

### 2.3 Start Containers

```bash
docker compose up -d
```

Verify the container status:

```bash
docker compose ps
# Status: syncllm-gateway (healthy), redis (healthy), postgres (healthy)
```

---

## 3. Send Your First Prompt and Verify Behavior

SyncLLM provides an **OpenAI-compatible REST API**, allowing you to use existing OpenAI SDKs or standard HTTP requests without modification.

### 3.1 Call Chat Completions via curl

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer syncllm-admin-secret-key-2026" \
  -d '{
    "model": "auto-route",
    "messages": [
      { "role": "system", "content": "You are an enterprise AI assistant." },
      { "role": "user", "content": "Summarize the key points of the SyncSeries 3-tier architecture." }
    ],
    "temperature": 0.2
  }'
```

### 3.2 Inspect the Response (Including SyncLLM Extended Metadata)

```json
{
  "id": "chatcmpl-syncllm-9182a",
  "object": "chat.completion",
  "created": 1773539820,
  "model": "gpt-4o-mini",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "SyncSeries consists of three tiers: (1) a central control plane powered by SyncVerse and SyncInsight, (2) domain execution agents including SyncBoot, SyncCMS, SyncCrawl, and SyncETA, and (3) an infrastructure governance tier anchored by SyncLLM and the audit ledger."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 42,
    "completion_tokens": 68,
    "total_tokens": 110
  },
  "_syncllm_meta": {
    "routedModel": "gpt-4o-mini",
    "routerRule": "RULE_LOW_COMPLEXITY_COST_SAVER",
    "cached": false,
    "piiMasked": false,
    "latencyMs": 485,
    "savedCostUsd": 0.0031
  }
}
```

---

## 4. Test Semantic Cache Hits

Send an identical or semantically similar prompt again to verify a cache hit (response latency < 20ms):

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer syncllm-admin-secret-key-2026" \
  -d '{
    "model": "auto-route",
    "messages": [
      { "role": "user", "content": "Provide a brief summary of the SyncSeries 3-tier architecture." }
    ]
  }'
```

If **`"cached": true`** and **`"latencyMs": 14`** appear in the response metadata, the vector semantic cache is operating properly.
