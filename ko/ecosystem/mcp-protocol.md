---
title: 표준 MCP 프로토콜 명세 (Model Context Protocol)
shortTitle: MCP 프로토콜
category: 핵심 표준
sort: 2
description: SyncSeries 전 에이전트가 준수하는 Model Context Protocol(MCP) JSON-RPC 명세, 도구 규격 및 에러 코드 표준
---

# 표준 MCP 프로토콜 명세 (Model Context Protocol)

## 1. 개요

SyncSeries의 모든 에이전트는 Anthropic의 오픈 표준인 **Model Context Protocol (MCP)**를 통신 인터페이스로 채택하여 상호 운용성을 확보합니다.  
이를 통해 특정 언어나 프레임워크에 종속되지 않고, HTTP/SSE(Server-Sent Events) 또는 표준 입출력(stdio) 채널을 통해 도구(Tool)를 검색하고 원격 프로시저를 안전하게 호출할 수 있습니다.

---

## 2. 메시지 봉투 구조 (Message Envelope)

모든 MCP 통신은 JSON-RPC 2.0 표준을 엄격히 준수합니다.

### 2.1 도구 호출 요청 (Tool Call Request)

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "method": "tools/call",
  "params": {
    "name": "syncboot_generate_schema",
    "arguments": {
      "domainName": "MembershipGrade",
      "fields": [
        { "name": "gradeCode", "type": "VARCHAR(20)", "nullable": false, "primaryKey": true },
        { "name": "discountRate", "type": "DECIMAL(5,2)", "nullable": false, "defaultValue": "0.00" },
        { "name": "minSpentAmount", "type": "BIGINT", "nullable": false, "defaultValue": "0" }
      ],
      "enableAuditing": true
    },
    "_meta": {
      "traceId": "trace-sv-20260915-0012",
      "callerAgent": "SyncVerse",
      "targetAgent": "SyncBoot",
      "timeoutMs": 30000
    }
  }
}
```

### 2.2 도구 호출 성공 응답 (Tool Call Response)

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "스키마 및 도메인 엔티티 생성이 완료되었습니다."
      },
      {
        "type": "resource",
        "resource": {
          "uri": "schema://syncboot/domain/MembershipGrade",
          "mimeType": "application/sql",
          "text": "CREATE TABLE tb_membership_grade (\n  grade_code VARCHAR(20) PRIMARY KEY,\n  discount_rate DECIMAL(5,2) NOT NULL DEFAULT 0.00,\n  min_spent_amount BIGINT NOT NULL DEFAULT 0,\n  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n);"
        }
      }
    ],
    "isError": false,
    "_meta": {
      "executionTimeMs": 142,
      "tokenUsage": {
        "promptTokens": 320,
        "completionTokens": 180,
        "totalTokens": 500
      }
    }
  }
}
```

---

## 3. 표준 에러 처리 (RFC 7807 호환)

SyncSeries 전사 정책에 따라, 일체의 에러 묵살(swallowing) 및 가짜 정상 응답이 금지됩니다. 모든 장애는 명확한 표준 에러 코드로 반환됩니다.

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "error": {
    "code": -32001,
    "message": "HITL Approval Required: 스키마 생성에 기존 인덱스 변경이 수반되어 관리자 승인이 필요합니다.",
    "data": {
      "type": "https://empasy.io/errors/hitl-approval-required",
      "title": "HITL_APPROVAL_REQUIRED",
      "status": 403,
      "detail": "Index modification detected on table tb_membership_grade",
      "instance": "/tools/call/syncboot_generate_schema",
      "approvalTicketId": "ticket-hitl-88219"
    }
  }
}
```

### 3.1 표준 에러 코드 체계

| 코드 | 명칭 | HTTP 매핑 | 설명 |
|:---|:---|:---|:---|
| **-32700** | Parse Error | 400 Bad Request | JSON 문법 오류 |
| **-32600** | Invalid Request | 400 Bad Request | JSON-RPC 스키마 불일치 |
| **-32601** | Method Not Found | 404 Not Found | 등록되지 않은 도구 또는 엔드포인트 호출 |
| **-32602** | Invalid Params | 422 Unprocessable | 파라미터 유효성 검증(Validation) 실패 |
| **-32603** | Internal Error | 500 Internal Error | 에이전트 내부 런타임 예외 발생 |
| **-32001** | HITL Approval Required | 403 Forbidden | 파괴적 액션으로 관리자 승인 게이트 대기 필요 |
| **-32002** | Token Budget Exceeded | 429 Too Many Req | FinOps 월간/일간 토큰 한도 초과 차단 |
| **-32003** | Compensating Tx Triggered | 500 Internal Error | Saga 분산 트랜잭션 보상 복구 진행 중 |

---

## 4. 스트리밍 프로토콜 (SSE & Progress Events)

장시간 실행되는 태스크(예: SyncInsight의 딥 리서치, SyncETA의 전체 회귀 검증)의 경우 SSE를 통해 중간 진행 상태를 전송합니다.

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

event: progress
data: {"token": "prg-01", "progress": 25, "total": 100, "message": "멀티소스 데이터 레이크 쿼리 완료"}

event: progress
data: {"token": "prg-02", "progress": 60, "total": 100, "message": "라운드테이블 토론 교차 검증 진행 중"}

event: complete
data: {"token": "prg-03", "progress": 100, "total": 100, "result": {"reportId": "rep-9912"}}
```
