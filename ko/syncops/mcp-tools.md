---
title: "SyncOps MCP 도구 및 REST API 레퍼런스"
sidebarTitle: "MCP 도구 & API"
description: "SyncOps가 SyncVerse 관제탑 및 외부 에이전트에 제공하는 4대 핵심 MCP 도구(ops_analyze_project_profitability 등)와 /api/v1/ops 표준 REST API 명세입니다."
head:
  - - meta
    - name: keywords
      content: SyncOps MCP, ops_analyze_project_profitability, ops_check_allocation_overload, ops_audit_subcontract_payment, ops_verify_rnd_note_hash, REST API, /api/v1/ops
  - - meta
    - property: og:title
      content: "SyncOps MCP 도구 및 REST API 레퍼런스"
  - - meta
    - property: og:description
      content: "듀얼단가 손익 감사, 인력 M/M 초과배정 점검, 하도급 지급기일 감사, 전자연구노트 SHA-256 검증 MCP 도구 및 REST API 명세"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/logo.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncops/mcp-tools
sort: 3
---

# SyncOps MCP 도구 및 REST API 레퍼런스

`SyncOps`는 전사 단일 Canonical URL 표준에 따라 모든 REST API와 Model Context Protocol(MCP) 엔드포인트를 **`/api/v1/ops/...`** 접두사로 제공합니다.

- **클라우드 엔드포인트**: `https://ops.empasy.io/api/v1/ops`
- **로컬 개발 포트**: Admin UI `http://localhost:3104` / API Server `http://localhost:18084`

---

## 1. 표준 MCP 도구 (MCP Tools) 명세

SyncVerse 중앙 관제탑 또는 외부 AI 에이전트는 JSON-RPC 2.0 기반 MCP 프로토콜을 통해 SyncOps의 4대 핵심 사업운영 도구를 자율 호출할 수 있습니다.

### 1.1 `ops_analyze_project_profitability`
프로젝트별 계약단가 대 실투입원가 듀얼 손익을 분석하고 목표 영업이익률 미달 위험을 진단합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "projectId": "PRJ-2026-001",
    "includeForecast": true,
    "targetYear": 2026
  }
  ```
- **반환 페이로드 예시**:
  ```json
  {
    "projectId": "PRJ-2026-001",
    "projectName": "차세대 디지털 금융 통합 관제 플랫폼 구축",
    "netContractAmount": 1200000000,
    "cumulativeActualCost": 815000000,
    "directGuaranteeFee": 4200000,
    "operatingMarginRate": 24.8,
    "targetMarginRate": 30.0,
    "burnRatePercent": 68.2,
    "riskStatus": "WARNING_MARGIN_DROP",
    "recommendation": "고급(ADVANCED) 외주 인력 2명의 추가 투입으로 마진율이 목표 대비 5.2%p 하락했습니다. 과업변경(CR) 청구 또는 유휴 정직원 교체를 권장합니다."
  }
  ```

### 1.2 `ops_check_allocation_overload`
전사 기술 인력의 월별 M/M 가동률 매트릭스를 조회하여 `1.0 M/M`(100%) 초과 배정 인력을 검출하고, `pgvector` 스킬 임베딩 기반으로 투입 가능한 유휴(Bench) 인력을 추천합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "workYear": 2026,
    "workMonth": 10,
    "requiredKosaGrade": "ADVANCED",
    "requiredSkills": ["Java 25", "Spring Boot", "PostgreSQL"]
  }
  ```
- **반환 페이로드 예시**:
  ```json
  {
    "overloadedEngineers": [],
    "benchCandidates": [
      {
        "employeeId": "EMP-2026-014",
        "name": "김수석",
        "kosaGrade": "ADVANCED",
        "currentAllocationMm": 0.0,
        "skillSimilarityScore": 0.96,
        "baseMonthlyCost": 7200000,
        "expectedBillingSpread": 4800000
      }
    ]
  }
  ```

### 1.3 `ops_audit_subcontract_payment`
하도급법 제6조·제13조(원도급 수령 후 15일 / 검수 후 60일) 지급기일 준수 현황과 4대 이행보증보험 만기 도래 건을 전수 감사합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "checkOverdueOnly": false,
    "warningDaysThreshold": 7
  }
  ```
- **반환 페이로드 예시**:
  ```json
  {
    "auditedMilestones": 18,
    "overdueCount": 0,
    "imminentWithin7DaysCount": 1,
    "alerts": [
      {
        "vendorMilestoneId": "VMS-2026-009",
        "vendorName": "(주)테크솔루션파트너스",
        "stepName": "2차 중도금 기성",
        "supplyAmount": 85000000,
        "statutoryDeadlineDate": "2026-10-29",
        "daysRemaining": 5,
        "accruedDelayInterest": 0,
        "status": "IMMINENT_D5"
      }
    ]
  }
  ```

### 1.4 `ops_verify_rnd_note_hash`
조특법 제10조 연구개발 세액공제용 전자연구노트(`ops_research_note`)의 본문, 작성자·확인자 서명, Git 커밋 해시 및 SHA-256 시점인증(`tsa_timestamp`) 해시의 무결성을 검증합니다.

- **입력 파라미터 (Arguments)**:
  ```json
  {
    "researchProjectId": "RND-2026-AI-01",
    "noteId": "RNOTE-2026-104"
  }
  ```
- **반환 페이로드 예시**:
  ```json
  {
    "noteId": "RNOTE-2026-104",
    "authorId": "EMP-2026-003",
    "witnessId": "EMP-2026-001",
    "gitCommitHashes": "a1b2c3d4,e5f6a7b8",
    "tsaTimestampHash": "sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    "integrityVerified": true,
    "verifiedAt": "2026-10-24T13:50:00Z"
  }
  ```

---

## 2. 핵심 REST API 명세 (`/api/v1/ops/...`)

| 기능 영역 | HTTP Method & Canonical Endpoint | 설명 |
| :--- | :--- | :--- |
| **동적 메뉴 인가** | `GET /api/v1/ops/sys/permission/getUserPermissionByToken` | 현재 로그인 세션의 역할별 동적 메뉴 트리(`sys_permission`) 조회 |
| **AI 인력 매칭** | `POST /api/v1/ops/ai/match-talents` | 요구 KOSA 등급·스킬셋 기반 유휴(Bench) 인력 벡터 매칭 및 마진 시뮬레이션 |
| **AI 리스크 로그** | `GET /api/v1/ops/ai/risk-logs`<br/>`POST /api/v1/ops/ai/risk-logs/{id}/resolve` | `RiskGuard`가 감지한 마진 급락·공수 초과·하도급 기일 임박 경보 조회 및 조치 처리 |
| **다차원 손익 피벗** | `GET /api/v1/ops/analysis/profit-matrix` | 고객사·프로젝트·부서·기간별 듀얼단가 매출·원가·공헌이익 매트릭스 조회 |
| **프로젝트 및 배정** | `GET /api/v1/ops/projects`<br/>`POST /api/v1/ops/assignments` | SI 프로젝트 마스터 관리 및 인력 M/M 투입 배정 등록 |
| **타임시트 승인** | `POST /api/v1/ops/timesheets/{id}/approve` | 주간 실투입 공수 승인 (`CLIENT_SI` 매출원가 / `CORE_RD` 연구개발비 자동 분개) |
| **KOSA 등급 산출** | `POST /api/v1/ops/kosa/calculate-grade` | 학력·자격증·인정경력일수 기반 KOSA 기술등급 자동 산정 |
| **원·하도급 & 보증** | `GET /api/v1/ops/contracts`<br/>`GET /api/v1/ops/contracts/{id}/compliance-check` | 원·하도급 계약, 4대 이행보증보험 만기 및 하도급법 준수 상태 점검 |
| **원클릭 인수인계** | `POST /api/v1/ops/contacts/handover` | 담당 고객사·협력사 연락처 및 미결 과업 일괄 승계 + AI 요약 브리핑 생성 |
| **전자연구노트** | `POST /api/v1/ops/research/notes` | 조특법 R&D 세액공제용 전자연구노트 등록 및 SHA-256 시점인증 서명 생성 |

---

## 3. cURL 호출 예시

### 3.1 AI 최적 인력 매칭 요청
```bash
curl -X POST "https://ops.empasy.io/api/v1/ops/ai/match-talents" \
  -H "Authorization: Bearer ${SYNC_OPS_JWT}" \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "PRJ-2026-001",
    "requiredKosaGrade": "ADVANCED",
    "requiredSkills": ["Spring Boot", "Vue 3", "PostgreSQL"],
    "rollInDate": "2026-11-01",
    "rollOutDate": "2027-04-30",
    "proposedBillingUnitPrice": 12500000
  }'
```

### 3.2 원클릭 담당자 업무 인수인계 실행
```bash
curl -X POST "https://ops.empasy.io/api/v1/ops/contacts/handover" \
  -H "Authorization: Bearer ${SYNC_OPS_JWT}" \
  -H "Content-Type: application/json" \
  -d '{
    "predecessorEmployeeId": "EMP-2026-008",
    "successorEmployeeId": "EMP-2026-012",
    "handoverReason": "차세대 금융 PMO 총괄 보직 변경에 따른 발주처 키맨 승계"
  }'
```
