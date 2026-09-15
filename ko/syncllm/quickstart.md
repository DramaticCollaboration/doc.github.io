---
title: SyncLLM 빠른 시작 가이드 (5분 퀵스타트)
shortTitle: 빠른 시작
category: 시작하기
sort: 2
description: Docker Compose 기반 SyncLLM 게이트웨이 로컬 실행 및 가상 모델 공급자 연동, 첫 프롬프트 전송 가이드
---

# SyncLLM 빠른 시작 가이드 (5분 퀵스타트)

## 1. 사전 준비 사항

- **Docker & Docker Compose** (v24.0 이상)
- **Git**
- **curl** 또는 HTTP 클라이언트 도구 (Postman 등)

---

## 2. Docker Compose로 5분 만에 기동하기

SyncLLM은 Redis(시맨틱 캐시 및 레이트 리밋용)와 PostgreSQL(토큰 원장 및 사용량 감사용)이 내장된 컨테이너 번들로 즉시 실행할 수 있습니다.

### 2.1 저장소 복제 및 디렉토리 이동

```bash
git clone https://github.com/DramaticCollaboration/SyncLLM.git
cd SyncLLM/docker
```

### 2.2 환경 변수 설정 (`.env`)

```bash
cp .env.example .env
```

`.env` 파일에 업스트림 LLM 공급자 API 키를 설정합니다:

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

### 2.3 컨테이너 시작

```bash
docker compose up -d
```

기동 상태를 확인합니다:

```bash
docker compose ps
# 상태: syncllm-gateway (healthy), redis (healthy), postgres (healthy)
```

---

## 3. 첫 프롬프트 전송 및 동작 검증

SyncLLM은 **OpenAI 호환 REST API**를 제공하므로, 기존 OpenAI SDK나 HTTP 요청을 그대로 사용할 수 있습니다.

### 3.1 curl을 통한 Chat Completion 호출

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer syncllm-admin-secret-key-2026" \
  -d '{
    "model": "auto-route",
    "messages": [
      { "role": "system", "content": "You are an enterprise AI assistant." },
      { "role": "user", "content": "SyncSeries의 3계층 아키텍처에 대해 핵심만 요약해줘." }
    ],
    "temperature": 0.2
  }'
```

### 3.2 응답 확인 (SyncLLM 확장 메타데이터 포함)

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
        "content": "SyncSeries는 (1) SyncVerse/SyncInsight 중심의 중앙 관제탑, (2) SyncBoot/SyncCMS/SyncCrawl/SyncETA 중심의 도메인 실행 에이전트, (3) SyncLLM과 감사 원장 중심의 인프라 거버넌스 3계층으로 구성됩니다."
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

## 4. 시맨틱 캐시(Semantic Cache) 히트 테스트

동일하거나 의미론적으로 유사한 프롬프트를 다시 전송하여 캐시 히트(응답 속도 < 20ms)를 확인합니다:

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer syncllm-admin-secret-key-2026" \
  -d '{
    "model": "auto-route",
    "messages": [
      { "role": "user", "content": "SyncSeries 3계층 아키텍처 구조를 요약 설명해줘." }
    ]
  }'
```

응답 헤더 및 메타데이터에서 **`"cached": true`**, **`"latencyMs": 14`**가 반환되면 정상적으로 벡터 시맨틱 캐시가 동작하는 것입니다.
