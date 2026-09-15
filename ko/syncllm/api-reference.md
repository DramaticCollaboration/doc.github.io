---
title: SyncLLM API 레퍼런스
shortTitle: API 레퍼런스
category: 개발 & 연동
sort: 5
description: SyncLLM 게이트웨이의 OpenAI 호환 엔드포인트 및 FinOps 토큰 관리, 라우팅 정책 RESTful API 명세
---

# SyncLLM API 레퍼런스

## 1. 개요 및 인증

SyncLLM은 모든 엔드포인트에 대해 HTTP Bearer 토큰 인증을 요구합니다:

```http
Authorization: Bearer <API_KEY>
```

---

## 2. OpenAI 호환 추론 엔드포인트

### 2.1 POST `/v1/chat/completions`

클라이언트의 프롬프트 질의를 수신하여 최적의 업스트림 모델로 라우팅하고 결과를 반환합니다.

#### 요청 본문 (Request Body)

| 필드 | 타입 | 필수 | 기본값 | 설명 |
|:---|:---|:---|:---|:---|
| `model` | string | Yes | - | 모델 명 (`auto-route`, `fast-track`, `deep-reasoning` 또는 실제 모델명) |
| `messages` | array | Yes | - | 대화 히스토리 객체 배열 (`role`, `content`) |
| `temperature` | float | No | 0.7 | 생성 창의성 계수 (0.0 ~ 2.0) |
| `stream` | boolean | No | false | SSE 스트리밍 여부 |
| `max_tokens` | integer | No | null | 최대 생성 토큰 수 |
| `syncllm_options` | object | No | - | SyncLLM 전용 제어 옵션 (`cacheBypass`, `piiStrict`) |

#### cURL 예제

```bash
curl -X POST https://api.syncllm.empasy.io/v1/chat/completions \
  -H "Authorization: Bearer $SYNCLLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "auto-route",
    "messages": [{"role": "user", "content": "결제 오류 로그 분석"}],
    "syncllm_options": {
      "piiStrict": true,
      "cacheBypass": false
    }
  }'
```

---

### 2.2 POST `/v1/embeddings`

텍스트 임베딩 벡터를 생성합니다.

```bash
curl -X POST https://api.syncllm.empasy.io/v1/embeddings \
  -H "Authorization: Bearer $SYNCLLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "SyncSeries A2A Autonomous Ecosystem"
  }'
```

---

## 3. FinOps 토큰 예산 관리 엔드포인트

### 3.1 GET `/admin/v1/budgets`

등록된 모든 에이전트/부서별 일간 및 월간 토큰 사용량과 잔여 예산을 조회합니다.

#### 응답 예시 (200 OK)

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

### 3.2 POST `/admin/v1/budgets`

특정 에이전트에 대한 토큰 예산 및 차단 임계치를 설정합니다.

```json
{
  "agentCode": "SyncCMS",
  "monthlyBudgetUsd": 300.00,
  "hardLimitEnabled": true,
  "alertWebhookUrl": "https://hooks.slack.com/services/xxx/yyy/zzz"
}
```
