---
title: "SyncAPIM MCP 도구 및 REST API 레퍼런스"
sidebarTitle: "MCP 도구 & REST API"
description: "SyncAPIM이 SyncVerse 중앙 관제탑 및 외부 에이전트에 제공하는 6대 표준 MCP 도구(apim_discover_shadow_apis 등)와 /api/v1/apim REST API 명세입니다."
head:
  - - meta
    - name: keywords
      content: SyncAPIM MCP, apim_discover_shadow_apis, apim_analyze_threat_events, apim_scan_pii_exposure, apim_manage_security_policy, apim_export_openapi_spec, /api/v1/apim
  - - meta
    - property: og:title
      content: "SyncAPIM MCP 도구 및 REST API 레퍼런스"
  - - meta
    - property: og:description
      content: "섀도우 API 탐지, 위협 이벤트 분석, PII 노출 스캔, 보안 정책 제어, OpenAPI 3.0.1 드리프트 감사 MCP 도구 및 REST API 명세"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncapim/mcp-tools
sort: 4
---

# SyncAPIM MCP 도구 및 REST API 레퍼런스

`SyncAPIM`은 전사 단일 Canonical URL 표준에 따라 모든 REST API와 Model Context Protocol(MCP) 엔드포인트를 **`/api/v1/apim/...`** 접두사로 제공합니다.

- **클라우드 엔드포인트**: `https://apim.empasy.com/api/v1/apim` (데모 포털: `https://apim-admin.empasy.io/api/v1/apim`)
- **로컬 개발 포트**:
  - Admin UI: `http://localhost:3119` (`http://apim.localhost`)
  - Homepage: `http://localhost:5190` (`http://apim-home.localhost`)
  - JVM #1 (`sync-apim-admin`): `http://localhost:18089`
  - JVM #2 (`sync-apim-receiver`): `http://localhost:18090` (TCP `5044` / `5055`)
  - JVM #3 (`sync-apim-detector`): `http://localhost:18092`
  - JVM #4 (`sync-apim-gateway`): `http://localhost:18091` (`http://apim-gw.localhost`)

---

## 1. 표준 MCP 도구 (MCP Tools) 명세 (`/api/v1/apim/mcp`)

`SyncVerse` 중앙 관제탑, `SyncETA` QA 에이전트, `SyncInsight` 분석 에이전트는 JSON-RPC 2.0 기반 MCP 엔드포인트(`POST /api/v1/apim/mcp`, `GET /api/v1/apim/mcp/sse`)를 통해 `SyncAPIM`의 6대 보안·거버넌스 도구를 자율 호출합니다.

### 1.1 `apim_discover_shadow_apis`
미등록(Shadow) API 엔드포인트, 중복 경로 및 고위험(`risk_score >= minRiskScore`) API 목록을 탐지합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "host": "api.empasy.com",
    "minRiskScore": 50
  }
  ```
- **반환 페이로드 예시**:
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
PostgreSQL 18.6 `wapf_detect_event` 시계열 테이블에서 SQLi, XSS, SSRF, RCE, JWT 위변조 위협 탐지 이벤트를 조회하고 공격 유형별 통계를 분석합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "host": "api.empasy.com",
    "threatCode": "SQLI",
    "limit": 20
  }
  ```

### 1.3 `apim_scan_pii_exposure`
API 요청·응답 데이터 필드(`wapf_data_field`) 및 패킷에서 주민등록번호, 카드번호, 계좌번호 등 8대 민감정보 노출 현황을 스캔합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "endpointUuid": "ep_apim_004"
  }
  ```

### 1.4 `apim_manage_security_policy`
특정 API 엔드포인트의 차단 상태(`block_status`: `1` 차단 / `0` 해제)를 즉시 변경하거나 WAF 보안 정책을 매핑하고 Redis 캐시를 동기화합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "action": "BLOCK_ENDPOINT",
    "endpointUuid": "ep_apim_008",
    "blockStatus": "1"
  }
  ```

### 1.5 `apim_export_openapi_spec`
실트래픽 기반으로 자동 추론된 OpenAPI 3.0.1 JSON 명세를 추출하고 설계 명세 대비 Contract Drift 감사 결과를 반환합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "endpointUuid": "ep_apim_001",
    "designSpec": "{\"openapi\":\"3.0.1\",\"paths\":{\"/api/v1/shop/orders\":{\"post\":{}}}}"
  }
  ```

### 1.6 `agent_execute_task`
`SyncVerse` 관제탑이 위임한 자연어 보안 감사·차단 태스크를 `AgentScope Java` `ReActAgent` 루프로 자율 수행합니다.

---

## 2. 4-JVM 핵심 REST API 명세 (`/api/v1/apim/...`)

| 담당 JVM | 기능 영역 | HTTP Method & Canonical Endpoint | 설명 |
| :--- | :--- | :--- | :--- |
| **`sync-apim-admin`** | **동적 메뉴 인가** | `GET /api/v1/apim/sys/permission/getUserPermissionByToken` | 로그인 사용자의 역할별 동적 메뉴 트리(`sys_permission`) 반환 |
| **`sync-apim-admin`** | **API 카탈로그** | `GET /api/v1/apim/endpoint/list`<br>`GET /api/v1/apim/endpoint/detail`<br>`POST /api/v1/apim/endpoint/add`<br>`PUT /api/v1/apim/endpoint/edit` | API 엔드포인트 목록, 데이터 필드 상세, 경로 병합 및 차단 상태(`blockStatus`) 제어 |
| **`sync-apim-admin`** | **OpenAPI 스펙 & 감사** | `GET /api/v1/apim/spec/list`<br>`GET /api/v1/apim/spec/download`<br>`POST /api/v1/apim/spec/audit` | OpenAPI 3.0.1 명세 조회·다운로드 및 Contract Drift 비교 감사 실행 |
| **`sync-apim-admin`** | **위협 탐지 이벤트** | `GET /api/v1/apim/event/list`<br>`GET /api/v1/apim/event/interval/count`<br>`GET /api/v1/apim/event/interval/registry/count` | PostgreSQL `wapf_detect_event` 기반 실시간 위협 패킷 조회 및 시계열 집계 |
| **`sync-apim-admin`** | **보안 정책 & 룰** | `GET /api/v1/apim/policy/list`<br>`POST /api/v1/apim/policy/add`<br>`GET /api/v1/apim/rule/list`<br>`GET /api/v1/apim/rule/stat` | 7대 보안 정책 및 6대 위협 탐지 룰 CRUD, 공격 유형별·심각도별 통계 조회 |
| **`sync-apim-admin`** | **민감정보 & 경보** | `GET /api/v1/apim/sensitivity/list`<br>`GET /api/v1/apim/mail/list`<br>`POST /api/v1/apim/mail/send` | 8대 PII 마스킹 정규식 관리 및 보안 경보 이메일 발송 |
| **`sync-apim-receiver`** | **패킷 수집** | `POST /api/v1/apim/receiver/ingest`<br>`GET /api/v1/apim/receiver/status` | HTTP 텔레메트리 패킷 수신(Redis Stream `job_queue` 적재) 및 수집기 상태 조회 |
| **`sync-apim-detector`** | **실시간 탐지 워커** | `POST /api/v1/apim/detector/inspect`<br>`POST /api/v1/apim/detector/rules/reload`<br>`GET /api/v1/apim/detector/status` | 패킷 즉시 정밀 검사, 탐지 룰·민감정보 캐시 강제 리로드 및 워커 상태 확인 |
| **`sync-apim-gateway`** | **인라인 차단 게이트웨이** | `GET /api/v1/apim/gateway/blocked`<br>`POST /api/v1/apim/gateway/block`<br>`POST /api/v1/apim/gateway/unblock` | 실시간 차단 엔드포인트 목록 조회 및 런타임 즉시 차단/해제 |

---

## 3. cURL 호출 예시

### 3.1 MCP 도구 호출 (`apim_discover_shadow_apis`)
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

### 3.2 설계 명세 대비 실트래픽 Contract Drift 감사 실행
```bash
curl -X POST "http://localhost:18089/api/v1/apim/spec/audit" \
  -H "Content-Type: application/json" \
  -d '{
    "uuid": "spec_apim_003"
  }'
```
