---
title: Sync SDK 인터페이스 명세
shortTitle: Sync SDK 레퍼런스
category: 개발자 센터
sort: 3
description: com.empasy.sync.sdk 패키지의 핵심 인터페이스, 모델 클래스 및 RFC 7807 표준 예외 처리 규격
---

# Sync SDK 인터페이스 명세

## 1. 패키지 아키텍처 개요

`com.empasy.sync.sdk`는 SyncSeries 생태계 내 모든 도메인 마이크로서비스와 외부 연동 모듈이 공통으로 사용하는 표준 클라이언트 라이브러리입니다.

```
com.empasy.sync.sdk/
├── core/
│   ├── model/                  # A2A 통신 메시지 및 컨텍스트 모델
│   ├── tool/                   # MCP 도구 등록 및 실행 추상체
│   └── exception/              # 표준 비즈니스 및 통신 예외
├── client/                     # SyncVerse 및 원격 에이전트 RPC 클라이언트
└── saga/                       # 분산 사가 보상 트랜잭션 컨텍스트
```

---

## 2. 핵심 모델 명세

### 1) A2AMessage (에이전트 간 통신 메시지 규격)
에이전트가 다른 에이전트에게 작업을 요청하거나 응답할 때 전달하는 표준 페이로드입니다:

```java
package com.empasy.sync.sdk.core.model;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.Instant;
import java.util.Map;

@Getter
@Builder
@ToString
public class A2AMessage {
    /** 전역 분산 추적 식별자 (OpenTelemetry 호환) */
    private final String traceId;

    /** 발신 에이전트 식별자 (예: sync-insight-planner) */
    private final String senderAgentId;

    /** 수신 에이전트 식별자 (예: sync-boot-engineer) */
    private final String receiverAgentId;

    /** 작업 의도 또는 메서드명 (예: task.execute.code_patch) */
    private final String action;

    /** 전달 데이터 페이로드 (JSON 직렬화 가능한 Map) */
    private final Map<String, Object> payload;

    /** 메시지 생성 시각 */
    @Builder.Default
    private final Instant timestamp = Instant.now();
}
```

### 2) ToolExecutionResult (도구 실행 결과 규격)
MCP 도구 호출 완료 후 반환되는 표준 컨테이너입니다:

```java
package com.empasy.sync.sdk.core.tool;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ToolExecutionResult {
    /** 실행 성공 여부 */
    private final boolean success;

    /** 성공 시 반환 데이터 객체 */
    private final Object data;

    /** 실패 시 에러 코드 (예: ERR_INVALID_PARAMETER) */
    private final String errorCode;

    /** 사람이 판독 가능한 결과 또는 오류 설명 */
    private final String message;

    /** 도구 실행에 소요된 물리 시간 (밀리초) */
    private final long executionDurationMs;
}
```

---

## 3. 표준 예외 처리 및 RFC 7807 규격

SDK 내부에서 발생하는 모든 시스템 및 비즈니스 예외는 IETF RFC 7807 (Problem Details for HTTP APIs) 규격을 엄격히 준수하여 구조화된 JSON 형태로 클라이언트에 전달됩니다.

### 표준 예외 계층 구조
```
SyncException (최상위 추상 예외)
├── A2ACommunicationException   # 네트워크 지연, 서킷 차단 등 통신 실패
├── ToolExecutionException      # 도구 파라미터 불일치 및 실행 중 에러
└── SecurityGuardrailException  # PII 위반, 권한 부족, 인젝션 차단
```

### RFC 7807 표준 오류 응답 예시
```json
{
  "type": "https://doc.empasy.com/errors/invalid-tool-argument",
  "title": "Invalid Tool Argument",
  "status": 400,
  "detail": "파라미터 'orderId'의 형식이 정규식 '^ORD-\\d{4}-\\d{3,}$'과 일치하지 않습니다.",
  "instance": "/api/v1/shop/orders/tools/get_order_status",
  "traceId": "c8a49f7b1e2d3c4a",
  "errorCode": "ERR_INVALID_PARAMETER",
  "timestamp": "2026-10-06T07:15:00Z"
}
```

---

## 4. TypeScript / Node.js SDK 호환 규격

프론트엔드 및 Node.js 기반 마이크로서비스 연동을 위해 동일한 인터페이스가 `@empasy/sync-sdk-common` npm 패키지로 제공됩니다:

```typescript
import { A2AClient, A2AMessage } from '@empasy/sync-sdk-common';

const client = new A2AClient({
  endpoint: 'http://sync-verse-gateway:8080',
  apiKey: process.env.SYNC_API_KEY
});

const msg: A2AMessage = {
  traceId: 'trace-12345',
  senderAgentId: 'client-dashboard',
  receiverAgentId: 'sync-verse-core',
  action: 'query.analytics',
  payload: { metric: 'daily_active_users' }
};

const response = await client.send(msg);
console.log(response.data);
```
