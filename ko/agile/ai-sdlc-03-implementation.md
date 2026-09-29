---
title: "[03단계] AI 협업 코딩 및 자율 구현 가이드"
description: 선행 확정된 명세를 바탕으로 AI 페어 프로그래밍 도구와 자율 코딩 에이전트를 활용하여 안전하고 일관된 코드를 구현하는 실무 가이드입니다.
head:
  - - meta
    - name: keywords
      content: SyncVerse, AI 코딩, 페어 프로그래밍, 자율 코딩, Spring Boot, Vue 3, BasicModal, Lombok, 개발 가이드
  - - meta
    - property: og:title
      content: "[03단계] AI 협업 코딩 및 자율 구현 가이드"
  - - meta
    - property: og:description
      content: AI 페어 코딩과 자율 구현을 실무에 적용하는 개발자 가이드
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/agile/ai-sdlc-03-implementation.html
sort: 103
---

# [03단계] AI 협업 코딩 및 자율 구현 실무 가이드

> **단계 요약:** 선행 확정된 데이터 스키마와 API 명세를 바탕으로, **수정 대상 파일 범위를 지정**하여 불필요한 코드 변경을 예방하고, 사내 아키텍처 규칙(Lombok 적용, 모달 팝업 컴포넌트 분리, 동적 메뉴 연동)을 준수하며 코드를 구현합니다.

---

## 1. 단계 목적 및 대상

* **주요 담당자**: 백엔드 개발자, 프론트엔드 개발자, 풀스택 엔지니어
* **협업 대상**: 시스템 아키텍트, 코드 검토자
* **예상 소요 시간**: 단위 기능당 1~2시간 내외
* **활용 도구**: SyncVerse 코딩 에이전트, IDE(Cursor, IntelliJ IDEA, VS Code), 로컬 인프라 환경

---

## 2. 시작 전 점검 사항 (시작 기준)

본 단계를 시작하기 전에 아래 사항을 확인합니다:
- [02단계] 스펙 퍼스트 아키텍처(DDL 및 API 명세) 검토가 완료되었는가?
- 신규 작업 브랜치(`feat/xxx`)가 생성되었는가?
- 수정해야 할 파일 목록(`focusFiles`)이 식별되었는가?
- 로컬 개발용 인프라(`docker-compose-local.yml` 등)가 정상 구동 중인가?

---

## 3. 실무 수행 4단계 절차

```mermaid
flowchart LR
    C1["1단계: 수정 파일 범위 지정<br/>(작업 대상 격리)"] --> C2["2단계: 백엔드 계층 구현<br/>(Controller~Service~Mapper)"]
    C2 --> C3["3단계: 프론트 컴포넌트 분리<br/>(BasicModal & 화면 View)"]
    C3 --> C4["4단계: 로컬 실연동 검증<br/>(실제 DB 연동 확인)"]
```

### 1단계: 수정 파일 범위 지정 (작업 대상 격리)
AI에게 프로젝트 전체를 제한 없이 수정하도록 맡기면 의도치 않은 파일이 바뀌는 문제가 생길 수 있습니다. 이번 기능 구현에 필요한 파일 목록(`focusFiles`)을 명시하여 작업 범위를 한정합니다.
* 예시: `CouponController.java`, `CouponService.java`, `CouponRepository.java`, `CouponApplyModal.vue`

### 2단계: 백엔드 계층별 구현
1. **데이터 접근 계층 (Repository / Mapper)**: 데이터베이스 쿼리 메서드 작성.
2. **비즈니스 계층 (Service)**: 유효성 검증(만료, 잔액 부족, 중복 방지) 및 트랜잭션(`@Transactional`) 처리.
3. **컨트롤러 계층 (Controller)**: `@RequiredArgsConstructor` 생성자 주입 및 표준 단일 URL 매핑.

### 3단계: 프론트엔드 컴포넌트 분리 구현
1. **API 호출 모듈**: 백엔드 표준 URL을 호출하는 통신 함수 작성.
2. **모달 팝업 컴포넌트 분리**: 페이지 뷰 파일 안에 모달 코드를 인라인으로 길게 작성하지 않고, 독립 파일(`components/CouponApplyModal.vue`)로 분리합니다.
3. **동적 메뉴 등록**: 라우트를 소스코드에 하드코딩하지 않고 데이터베이스 권한 테이블(`sys_permission`)을 통해 관리합니다.

### 4단계: 로컬 실연동 검증
가짜 더미 데이터(하드코딩된 리스트나 빈 값 반환) 대신, 로컬 데이터베이스와 백엔드, 프론트엔드가 실제로 연결되어 정상적으로 데이터를 주고받는지 확인합니다.

---

## 4. 실무 프롬프트 예시 (복사하여 사용)

### 프롬프트 1: Spring Boot 비즈니스 로직 및 트랜잭션 서비스 구현
```markdown
[역할] 엔터프라이즈 Spring Boot 개발자
[맥락]
- 기술 환경: Java 21, Spring Boot 3.x, PostgreSQL 17
- 구현 대상: {{도메인명, 예: 쿠폰 적용 서비스}}
- 선행 확정 명세:
{{02단계에서 확정된 DDL 및 API 명세서 내용}}

[작성 규칙]
1. Lombok 애너테이션 적용:
   - @Autowired 필드 주입을 지양하고, private final 필드와 @RequiredArgsConstructor 생성자 주입을 사용해 주세요.
   - 로깅은 @Slf4j를 사용해 주세요.
2. 비즈니스 로직 작성 시:
   - 단순 조회는 @Transactional(readOnly = true), 데이터 변경 메서드는 @Transactional을 적용해 주세요.
   - 조건 불만족 시 적절한 비즈니스 예외(ServiceException)를 발생시켜 주세요.
   - NullPointerException 예방을 위해 입력값 유효성을 철저히 점검해 주세요.
3. 임시 더미 리턴(return null 등) 대신 실제 데이터 접근 계층을 호출하는 완전한 코드로 작성해 주세요.

[출력 형식]
1. CouponServiceImpl.java 소스코드
2. 핵심 검증 로직에 대한 설명
```

---

### 프롬프트 2: Vue 3 및 모달 팝업 독립 컴포넌트 분리 구현
```markdown
[역할] Vue 3 및 TypeScript 프론트엔드 개발자
[맥락] 위 백엔드 API와 연동하는 쿠폰 선택 팝업 모달을 작성합니다.

[작성 규칙]
1. 프레임워크 표준 모달인 BasicModal을 사용해 주세요.
2. 모달 마크업을 부모 화면에 인라인으로 넣지 말고, 독립 파일(components/CouponApplyModal.vue)로 분리해 주세요.
3. 화면 요소가 테두리에 밀착되지 않도록 내부 패딩(p-4)을 충분히 부여해 주세요.
4. 단순 빈 화면이 아닌 테이블, 라디오 선택, 할인 금액 미리보기 등 실질적인 시각 요소를 포함해 주세요.
5. TypeScript 인터페이스(Props, Emits)를 명확히 정의해 주세요.

[출력 형식]
- components/CouponApplyModal.vue 전체 소스코드
- 부모 화면에서 모달을 열고 닫는 연결 예시 코드
```

---

### 프롬프트 3: IDE 설정 규칙 예시 (.cursorrules)
```markdown
# 프로젝트 루트의 .cursorrules 파일에 설정하여 기본 코딩 규칙을 자동 안내합니다:

당신은 프로젝트의 개발 표준을 준수하는 에이전트입니다.
아래 코딩 규칙을 지켜주세요:
1. Java:
   - DTO, Entity, Service에 Lombok을 적용합니다 (@Getter, @Builder, @RequiredArgsConstructor).
   - Controller 매핑은 단일 표준 URL인 `/api/v1/{domain}/{resource}` 형식을 사용합니다.
   - 임시 더미 리턴(return null 등)을 지양하고 실제 로직을 연결합니다.
2. Vue 3:
   - 모달 팝업은 components/<Name>Modal.vue로 독립 분리하여 작성합니다.
   - 정적 라우트 하드코딩 대신 DB 기반 동적 메뉴 연동을 고려합니다.
```

---

## 5. 자주 발생하는 실수 및 유의 사항

| 실수 유형 | 흔한 문제점 | 권장 대응 방안 |
| :--- | :--- | :--- |
| **임시 더미 데이터 방치** | 빠른 구현을 위해 `return new ArrayList<>()`만 남겨두고 넘어감 | 실제 데이터베이스 매퍼 및 리포지토리 연동 코드가 완성되었는지 점검합니다. |
| **모달 인라인 작성** | 부모 화면 파일 아래에 모달 코드를 길게 작성하여 코드 가독성 저하 | 모달을 별도 파일(`components/XxxModal.vue`)로 분리하여 단일 책임을 유지합니다. |
| **지정 외 파일 수정** | 작업 범위를 지정하지 않아 관련 없는 설정 파일까지 임의로 수정 | `focusFiles`로 수정 대상 파일을 사전에 한정하여 변경 범위를 통제합니다. |

---

## 6. 단계 완료 점검 체크리스트 (종료 기준)

다음 단계인 **[04단계: 테스트 및 자동 수정]**으로 넘어가기 위해 아래 항목을 확인합니다:
- [ ] DTO, 서비스, 컨트롤러에 Lombok 및 생성자 주입이 적용되었는가?
- [ ] 모달 팝업이 독립 컴포넌트로 분리되었는가?
- [ ] 로컬 실행 시 프론트엔드와 백엔드가 실제 데이터베이스와 정상 연동되는가?
- [ ] 지정한 수정 대상 파일 외에 다른 파일이 변경되지 않았는가? (`git status` 확인)
