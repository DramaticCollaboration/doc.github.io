---
title: "AI-SDLC 상황별 실전 프롬프트 레시피북 (치트시트)"
description: 기획, 아키텍처, 백엔드, 프론트엔드, QA, 트러블슈팅, 코드 리뷰까지 개발 현장에서 복사해서 바로 쓰는 완성형 프롬프트 레시피북입니다.
head:
  - - meta
    - name: keywords
      content: AI 프롬프트, 프롬프트 엔지니어링, 코딩 프롬프트, Spring Boot, Vue 3, DDL, 단위테스트, 트러블슈팅, AI-SDLC, 치트시트
  - - meta
    - property: og:title
      content: "AI-SDLC 상황별 실전 프롬프트 레시피북 (치트시트)"
  - - meta
    - property: og:description
      content: 실무 개발 전 단계에서 즉시 복사해 사용하는 완성형 프롬프트 치트시트
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/agile/ai-sdlc-prompt-recipes.html
sort: 106
---

# 📖 AI-SDLC 상황별 실전 프롬프트 레시피북 (Cheat Sheet)

> **활용 가이드:** 본 레시피북은 기획, 설계, 코딩, 테스트, 트러블슈팅, 배포에 이르는 전 개발 단계에서 **`{{변수}}` 부분만 프로젝트 상황에 맞게 변경하여 복사·붙여넣기로 즉시 사용**할 수 있도록 최적화된 프롬프트 모음집입니다.

---

## 📑 카테고리별 빠른 이동

* [1. 기획 & 비즈니스 분석 (PO / PM)](#1-기획--비즈니스-분석-po--pm)
* [2. 아키텍처 & DB 설계 (Architect / DBA)](#2-아키텍처--db-설계-architect--dba)
* [3. 백엔드 Java Spring Boot (Backend Dev)](#3-백엔드-java-spring-boot-backend-dev)
* [4. 프론트엔드 Vue 3 & BasicModal (Frontend Dev)](#4-프론트엔드-vue-3--basicmodal-frontend-dev)
* [5. 테스트 & QA 엔지니어링 (QA Specialist)](#5-테스트--qa-엔지니어링-qa-specialist)
* [6. 에러 해결 & 자가 치유 (Troubleshooting & AutoRepair)](#6-에러-해결--자가-치유-troubleshooting--autorepair)
* [7. 코드 리뷰 & 배포 요약 (Reviewer & DevOps)](#7-코드-리뷰--배포-요약-reviewer--devops)

---

## 1. 기획 & 비즈니스 분석 (PO / PM)

### 🍳 Recipe 1.1: 엣지 케이스 선제 도출 프롬프트
```markdown
[Role] 10년 차 IT 서비스 수석 PO이자 비즈니스 분석가
[Feature] {{기능명, 예: 장바구니 쿠폰 적용 기능}}
[Description] {{기능에 대한 기본 설명 2~3줄}}

[Instructions]
이 기능 개발에 착수하기 전, 기획 단계에서 사전에 결정해야 할 기술적·비즈니스적 예외 상황 5가지를 질문 형식으로 뽑아주세요.
1. 결제/취소/환불 시나리오
2. 최소 주문금액 및 최대 할인금액 경계값
3. 유효기간 만료 및 다중 기기 중복 적용 시도
4. 타 할인(포인트, 제휴카드)과의 중복 적용 규칙
```

### 🍳 Recipe 1.2: Given-When-Then 인수 조건(Acceptance Criteria) 생성
```markdown
[Role] BDD(Behavior-Driven Development) 분석 전문가
[Context]
- 기능: {{기능명}}
- 확정된 정책: {{결정된 정책 내용}}

[Task]
QA 테스트가 가능한 Acceptance Criteria를 Given-When-Then 형식으로 작성하세요.
- 시나리오 1: 정상 경로 (Happy Path)
- 시나리오 2: 입력값 유효성 검증 실패 (Validation Error)
- 시나리오 3: 잔액/재고 부족 또는 비즈니스 한도 초과
- 시나리오 4: 네트워크 타임아웃 또는 동시 요청 충돌
```

---

## 2. 아키텍처 & DB 설계 (Architect / DBA)

### 🍳 Recipe 2.1: PostgreSQL 17 6단계 표준 DDL 생성
```markdown
[Role] 수석 데이터베이스 아키텍트
[Database] PostgreSQL 17
[Target Domain] {{도메인명, 예: shop_coupon}}
[Requirements] {{기능 명세서 내용}}

[Constraints]
1. 테이블명은 소문자 스네이크 케이스({{도메인_엔티티}})로 작성하세요.
2. 기본키 id는 BIGINT(BIGSERIAL)로 설정하세요.
3. 감사 컬럼(created_at, updated_at, created_by, updated_by, del_flag)을 포함하세요.
4. 자주 조회되는 컬럼에 대해 명시적 INDEX를 부여하세요.
5. [절대금지] ON CONFLICT DO NOTHING/UPDATE 등 충돌 회피 구문을 사용하지 마세요. 고유성이 보장된 순수 CREATE TABLE 및 INSERT 구문으로만 작성하세요.

[Output]
- Mermaid ERD 다이어그램
- 02_schema_domain.sql DDL 스크립트 (테이블, 인덱스, COMMENT)
```

### 🍳 Recipe 2.2: Canonical REST API 명세 및 OpenAPI 3.0 YAML
```markdown
[Role] RESTful API 설계 전문가
[Target Resource] {{엔드포인트 경로, 예: /api/v1/shop/cart/coupon}}
[Data Model] {{관련 테이블 컬럼 정보}}

[Constraints]
1. 단일 매핑 원칙: 오직 하나의 고유 Canonical URL만 부여하세요. 복수 URL 매핑 금지.
2. Prefix는 반드시 `/api/v1/{product}/{resource}`를 준수하세요.
3. 공통 응답 포맷(CommonResult<T>: code, message, result, timestamp)을 적용하세요.

[Output]
1. API 엔드포인트 목록 표 (Method, URL, 설명, 인가권한)
2. 성공(200) 및 실패(400, 404, 409, 500) JSON 응답 예시
3. OpenAPI 3.0 YAML 조각
```

---

## 3. 백엔드 Java Spring Boot (Backend Dev)

### 🍳 Recipe 3.1: Lombok & Canonical Spring Service 구현
```markdown
[Role] 시니어 Spring Boot 개발자
[Tech Stack] Java 21, Spring Boot 3.x, PostgreSQL 17
[Task] {{구현할 기능, 예: 쿠폰 적용 비즈니스 로직}}
[Spec] {{확정된 DDL 및 API 명세}}

[Constraints]
1. Project Lombok 필수 적용:
   - @Autowired 필드 주입 금지 ➔ private final 필드 + @RequiredArgsConstructor 생성자 주입
   - 로깅은 @Slf4j 필수 사용
   - DTO에 @Getter, @Builder, @NoArgsConstructor, @AllArgsConstructor 필수 적용
2. Controller 매핑은 단일 Canonical URL(`/api/v1/...`)만 사용하세요.
3. 읽기 전용 메서드는 @Transactional(readOnly = true), 변경 메서드는 @Transactional을 적용하세요.
4. [Zero-Mock] 더미 리턴(return null 등)을 금지하고 실제 DB Mapper/Repository 연동 코드를 완성하세요.
```

---

## 4. 프론트엔드 Vue 3 & BasicModal (Frontend Dev)

### 🍳 Recipe 4.1: BasicModal 독립 팝업 컴포넌트 생성
```markdown
[Role] Vue 3 / TypeScript 프론트엔드 전문가
[Task] {{모달 기능 설명, 예: 보유 쿠폰 선택 및 적용 모달}}
[Target Backend API] {{백엔드 API URL 및 Request/Response JSON}}

[Constraints]
1. 프레임워크 표준 모달인 BasicModal(import { BasicModal } from '/@/components/Modal')을 사용하세요.
2. 페이지 뷰에 인라인 작성 금지 ➔ components/CouponApplyModal.vue로 독립 분리하세요.
3. 모달 내부에 충분한 패딩(p-4)을 부여하세요.
4. 최소 30줄 이상의 실질적 시각 UI(테이블, 선택 라디오, 할인 금액 미리보기, 로딩 스피너)를 포함하세요.
5. interface Props 및 Emits(open, success, confirm)를 명확히 선언하세요.
```

---

## 5. 테스트 & QA 엔지니어링 (QA Specialist)

### 🍳 Recipe 5.1: JUnit 5 가혹한 엣지 케이스 단위 테스트
```markdown
[Role] 시니어 QA 엔지니어
[Target Code]
{{테스트 대상 Service 또는 Controller 코드}}
[Acceptance Criteria]
{{Given-When-Then 인수 조건}}

[Constraints]
1. 정상 케이스 외에 최소 3개 이상의 비정상 엣지 케이스를 개별 @Test로 작성하세요:
   - 만료 시도, 잔액 부족 시도, 중복 동시 호출 시도
2. AssertJ(assertThat, assertThatThrownBy)를 사용하여 단언문을 작성하세요.
3. no-assertion 테스트는 금지하며 각 테스트마다 2개 이상의 상태 검증을 수행하세요.
4. @DisplayName에 한글로 테스트 목적을 명확히 기재하세요.
```

---

## 6. 에러 해결 & 자가 치유 (Troubleshooting & AutoRepair)

### 🍳 Recipe 6.1: Maven 컴파일 & 테스트 에러 자가 치유 (autoRepairCode)
```markdown
[Role] 자가 치유(Self-Healing) 전문 디버깅 에이전트
[Context] 빌드 중 컴파일/테스트 에러가 발생했습니다.
[Error Stack Trace]
{{에러 로그 전문 붙여넣기}}

[Failed File Content]
{{오류가 발생한 소스코드 전문}}

[Instructions]
1. 원인 분석: 에러 원인을 2줄 이내로 명확히 분석하세요.
2. 부작용 검토: 수정 시 발생 가능한 사이드 이펙트를 검토하세요.
3. 코드 교체: 해당 파일 전체를 완벽한 Drop-in 교체 형태로 제시하세요.
   - [중요] 기존 비즈니스 검증문(if문)을 지우거나 완화하지 마세요.
   - [중요] TODO나 빈 메서드로 얼버무리지 마세요.
```

### 🍳 Recipe 6.2: N+1 쿼리 및 성능 병목 최적화
```markdown
[Role] 데이터베이스 쿼리 튜닝 전문가
[Context] 서비스 운영 중 특정 API에서 슬로우 쿼리(N+1 문제)가 발견되었습니다.
[Slow Code or Query Log]
{{MyBatis 매퍼 XML 또는 JPA 엔티티/리포지토리 코드}}

[Instructions]
1. N+1 문제가 발생하는 지점을 짚어내고 원인을 설명하세요.
2. Fetch Join 또는 Batch Size 설정, 서브쿼리 조인 중 가장 적합한 튜닝 쿼리를 제시하세요.
3. 튜닝 전/후의 예상 쿼리 실행 횟수와 성능 차이를 비교해 주세요.
```

---

## 7. 코드 리뷰 & 배포 요약 (Reviewer & DevOps)

### 🍳 Recipe 7.1: Git Diff 기반 PR 본문 마크다운 자동 생성
```markdown
[Role] 릴리즈 엔지니어링 테크니컬 라이터
[Git Diff Summary]
{{git diff main...feat/xxx 내용}}

[Instructions]
아래 섹션으로 구성된 GitHub PR 본문 마크다운을 작성하세요:
1. 📌 작업 배경 및 목적 (Jira 티켓 번호 포함)
2. 🛠️ 주요 변경 사항 (백엔드, 프론트엔드, DB 스키마)
3. ⚠️ 위험도 평가 및 Breaking Change 유무
4. ✅ 4-Cycle 회귀 검증 통과 결과 요약
```

### 🍳 Recipe 7.2: 시니어 아키텍트 심층 코드 리뷰 피드백
```markdown
[Role] 20년 차 수석 시스템 아키텍트이자 보안 감사관
[PR Source Code]
{{리뷰 대상 변경 코드}}

[Review Points]
1. 동시성 결함 및 트랜잭션 경계 설정 여부
2. 보안 취약점(SQL 인젝션, 민감정보 노출, 인가 누락)
3. 전사 표준 준수(Lombok 필수, Canonical URL, BasicModal 분리)
4. 코드 가독성 및 단일 책임 원칙(SRP)

[Output]
라인별 구체적인 Before / After 개선 피드백 코드 및 종합 판정(LGTM / Request Changes).
```
