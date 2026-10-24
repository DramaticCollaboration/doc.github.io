---
title: "SyncOps 시스템 아키텍처 및 데이터베이스 설계"
sidebarTitle: "시스템 아키텍처"
description: "SyncOps의 Spring Boot 3.5.16, AgentScope Java 4대 에이전트 스웜(TalentMatcher, RiskGuard, HandoverBriefing, DocInspector) 및 PostgreSQL 17 pgvector 도메인 스키마를 설명합니다."
head:
  - - meta
    - name: keywords
      content: SyncOps 아키텍처, AgentScope Java, PostgreSQL 17, pgvector, ops_project, ops_employee_profile, ops_resource_allocation, ops_surety_bond, ops_subcontract_payment, ops_rnd_research_note
  - - meta
    - property: og:title
      content: "SyncOps 시스템 아키텍처 및 데이터베이스 설계"
  - - meta
    - property: og:description
      content: "듀얼단가 손익 계산 엔진, 하도급법 컴플라이언스 감시기 및 PostgreSQL 17 도메인 데이터 모델 명세"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/logo.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncops/architecture
sort: 2
---

# SyncOps 시스템 아키텍처 및 데이터베이스 설계

`SyncOps`는 **Java 25**, **Spring Boot 3.5.16**, **AgentScope Java (`io.agentscope:agentscope-harness`)**, **PostgreSQL 17 (`pgvector`)**, **Vue 3 + Vben Admin (`@empasy/sync-ops-admin`)** 표준 기술 스택 위에 구축된 엔터프라이즈 PMO 도메인 에이전트 플랫폼입니다.

---

## 1. 내장 자율 에이전트 스웜 (Intra-Agent Swarm) 아키텍처

SyncOps는 단순 CRUD 백오피스를 넘어, 도메인 내부에서 4개의 전문 서브에이전트가 협업하여 인력 배정 최적화, 적자 및 하도급법 위반 감지, 인수인계 브리핑 합성, 연구노트 무결성 검증을 자율 수행합니다.

```mermaid
flowchart TD
    subgraph SyncVerse ["Tier 1: SyncVerse 중앙 오케스트레이터"]
        EventBus["A2A Event Bus (/api/v1/verse/events)"]
        HITL["Multi-Party HITL 승인 결재선"]
    end

    subgraph SyncOpsSwarm ["Tier 3: SyncOps AgentScope Java 에이전트 스웜"]
        TM["TalentMatcher\n(pgvector 스킬 매칭 & 벤치 해소)"]
        RG["RiskGuard\n(듀얼단가 손익 번다운 & 하도급법 감시)"]
        HB["HandoverBriefing\n(원클릭 업무 인수인계 브리핑)"]
        DI["DocInspector\n(KOSA 등급 판정 & 연구노트 SHA-256 검증)"]
    end

    subgraph DomainDB ["PostgreSQL 17 + pgvector (ops_* 도메인 스키마)"]
        Emp[("ops_employee / ops_employee_profile\nops_skill_tag / ops_career_kosa")]
        Proj[("ops_project / ops_assignment\nops_resource_allocation / ops_timesheet")]
        Cont[("ops_contract_client / ops_contract_vendor\nops_guarantee_insurance (ops_surety_bond)\nops_vendor_milestone (ops_subcontract_payment)")]
        Rnd[("ops_research_project\nops_research_note (ops_rnd_research_note)")]
    end

    TM <--> Emp
    RG <--> Proj
    RG <--> Cont
    HB <--> Cont
    DI <--> Emp
    DI <--> Rnd

    RG -->|OPS_RISK_ALERT| EventBus
    TM -->|OPS_BENCH_ALERT| EventBus
    Cont -->|과업변경(CR) & R&D 차출 승인| HITL
```

### 1.1 `TalentMatcher` (인력 매칭 및 유휴 벤치 해소 에이전트)
- 요구되는 KOSA 기술등급(`SPECIAL`, `ADVANCED`, `INTERMEDIATE`, `BEGINNER`) 및 투입 가용 기간으로 1차 하드 필터링을 수행합니다.
- `ops_employee.embedding`(`VECTOR(1536)`)과 요구 기술 스택 간의 코사인 유사도를 계산하고, 발주처 청구단가 대비 회사 실원가(`base_monthly_cost`) 마진 스프레드를 시뮬레이션하여 최적의 유휴(Bench) 인력을 추천합니다.

### 1.2 `RiskGuard` (실시간 손익 번다운 및 하도급법 준수 감시 에이전트)
- 주간 타임시트(`ops_timesheet`) 승인 시 계획 공수(`budgeted_total_mm`) 대비 실투입 공수 소진율을 계산하여 목표 영업이익률 미달 위험을 `ops_ai_risk_log`에 기록합니다.
- 외주 하도급 기성(`ops_vendor_milestone` / `ops_subcontract_payment`)의 **원도급 수령 후 15일 룰** 및 **검수 후 60일 룰** 위반·임박(D-7) 건과 연 15.5% 법정 지연이자를 실시간 감시합니다.

### 1.3 `HandoverBriefing` (퇴사·보직변경 원클릭 인수인계 에이전트)
- 인계자(`predecessor_id`)가 담당하던 모든 고객사·협력사 연락처(`ops_contact`)와 미결 과업(`ops_contact_task`)을 인수자(`successor_id`)에게 단일 트랜잭션으로 이관합니다.
- 최근 업무 협의 히스토리(`ops_contact_interaction`)를 종합하여 후임자를 위한 핵심 인수인계 브리핑 요약문(`ai_summary_briefing`)을 자동 생성합니다.

### 1.4 `DocInspector` (KOSA 경력 및 연구노트 시점인증 검증 에이전트)
- 학력, 국가기술자격, 경력일수를 기반으로 소프트웨어산업진흥법 기준 KOSA 등급을 자동 산출합니다.
- 조특법 제10조 연구개발 세액공제용 전자연구노트(`ops_research_note` / `ops_rnd_research_note`)의 본문·작성자·타임스탬프 기반 **SHA-256 시점인증 해시** 및 Git 커밋 정합성을 검증합니다.

---

## 2. 핵심 비즈니스 엔진 설계

### 2.1 듀얼단가(Dual-Rate) 손익 계산 엔진
수주형 SI 프로젝트의 실시간 공헌이익과 영업이익률은 발주처 계약 청구단가와 고용 형태별 실투입원가를 분리하여 산출됩니다:

\[
\text{Operating Margin (\%)} = \frac{\text{Net Contract Revenue} - \sum (\text{Actual M/M}_i \times \text{Cost Unit Price}_i) - \text{Direct Expenses}}{\text{Net Contract Revenue}} \times 100
\]

- **정직원 (`FULL_TIME`)**: 기본급(`base_salary`) + 고정수당(`fixed_allowance`) + 4대보험 회사부담금(`social_insurance_cost`) + 월 퇴직충당금(`severance_reserve_monthly`)
- **프리랜서 (`FREELANCER`)**: 월 계약단가 (정산 시 사업소득세 3.0% + 지방소득세 0.3% 원천징수 공제)
- **협력사 외주 (`SUBCONTRACT`)**: 하도급 계약(`ops_contract_vendor`) 공급가액 기준 산입
- **직접경비 (`Direct Expenses`)**: 4대 이행보증보험 납부 수수료(`premium_amount`) 및 하자보수 충당부채(`warranty_reserve_amount`)

### 2.2 하도급법 법정 지급기일 결정 알고리즘
하도급거래 공정화에 관한 법률 제6조(선급금) 및 제13조(하도급대금의 지급)에 의거하여 법정 지급기한(`statutory_deadline_date`)을 자동 산정합니다:

```java
LocalDate inspectionLimit = inspectionDate.plusDays(60); // 검수 완료일 + 60일
LocalDate StatutoryDeadline = (clientPaymentReceivedDate != null)
    ? Stream.of(clientPaymentReceivedDate.plusDays(15), inspectionLimit)
            .min(LocalDate::compareTo).get()
    : inspectionLimit;
```

기한 도과 시 지연일수(`delay_days`)에 대해 법정 지연이자율 **연 15.5%**를 일할 계산하여 재무 리스크 대시보드에 즉시 경보합니다.

---

## 3. 핵심 도메인 데이터베이스 스키마 (`db/02_schema_domain.sql`)

SyncOps는 전사 6단계 표준 DB 스크립트 체계(`db/00_extensions.sql` ~ `05_sample_dev.sql`)를 준수하며, 핵심 테이블 구조는 다음과 같습니다.

| 구분 | 물리 테이블명 (카탈로그 별칭) | 주요 컬럼 및 역할 |
| :--- | :--- | :--- |
| **프로젝트 마스터** | `ops_project` | `project_code`, `consortium_type`, `my_share_rate`, `net_contract_amount`, `target_margin_rate`, `budgeted_total_mm`, `warranty_reserve_amount` |
| **인력 프로필 & KOSA** | `ops_employee`<br/>(`ops_employee_profile`),<br/>`ops_career_kosa`, `ops_skill_tag` | `emp_type`(`FULL_TIME`/`FREELANCER`/`SUBCONTRACT`), `kosa_grade`, `base_monthly_cost`, `is_rnd_qualified`, `embedding VECTOR(1536)` |
| **인력 M/M 배정** | `ops_assignment`<br/>(`ops_resource_allocation`),<br/>`ops_timesheet` | `roll_in_date`, `roll_out_date`, `input_rate`(M/M), `billing_unit_price`(청구단가), `cost_unit_price`(투입원가), `billed_kosa_grade`, `work_nature` |
| **4대 보증보험** | `ops_guarantee_insurance`<br/>(`ops_surety_bond`) | `insurance_type`(`BID`/`PERFORMANCE`/`ADVANCE`/`DEFECT`), `policy_no`, `issuer`(`SGI_SEOUL`/`KOSA_COOP`), `guarantee_amount`, `premium_amount`, `end_date` |
| **하도급 기성·정산** | `ops_vendor_milestone`<br/>(`ops_subcontract_payment`),<br/>`ops_contract_vendor`, `ops_invoice` | `inspection_date`, `client_payment_received_date`, `statutory_deadline_date`(15일/60일), `delay_days`, `delay_interest_amount`(연 15.5%) |
| **R&D 전자연구노트** | `ops_research_note`<br/>(`ops_rnd_research_note`),<br/>`ops_research_project` | `research_project_id`, `author_id`, `note_date`, `content_summary`, `git_commit_hashes`, `author_signed_at`, `witness_signed_at`, `tsa_timestamp`(SHA-256 해시) |
| **고객·계약·인수인계** | `ops_client`, `ops_vendor`,<br/>`ops_contact`, `ops_handover_log`,<br/>`ops_official_letter` | 발주처·협력사 마스터, 키맨 연락처(`key_man_score`), 퇴사자 일괄 인수인계 브리핑 로그, 대외 공문 수발신 직인 PDF |

---

## 4. 백엔드 모듈 구조 및 동적 메뉴 라우팅

- **Maven 좌표계**:
  - 루트 부모 POM: `com.empasy.sync.ops:sync-ops-parent`
  - 백엔드 부모 POM: `com.empasy.sync.ops:sync-ops-server-parent`
  - 시스템 코어 모듈: `Server/sync-ops-module-system` (`/api/v1/ops/sys/...`)
  - 비즈니스 도메인 모듈: `Server/sync-ops-module-ops` (`/api/v1/ops/...`)
- **DB 단일 원천 동적 라우팅**:
  - 프론트엔드(`admin/`)는 정적 라우트 하드코딩 없이 `PermissionModeEnum.BACK` 모드로 동작하며, 로그인 시 `/api/v1/ops/sys/permission/getUserPermissionByToken`을 호출하여 `db/04_seed_domain.sql`에 정의된 6대 디렉토리·26개 화면 권한 트리를 동적으로 구성합니다.
