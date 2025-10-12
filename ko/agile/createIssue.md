---
title: 이슈 생성 프롬프트
description: Jira를 효율적으로 사용하는 핵심 원칙을 소개합니다. ✅ 이슈 할당 법칙, ✅ 필수 코멘팅 가이드, ✅ 상태 관리 노하우를 통해 프로젝트 투명성과 팀 생산성을 높이는 방법을 확인해 보세요. 팀 협업을 위한 가이드입니다.
head:
  - - meta
    - name: keywords
      content: LLM 프롬프트 생성, 프롬프트 기반 이슈 작성, AI 프롬프트 가이드, 프롬프트 템플릿, AI 기반 개발 지원, 자동화 이슈 생성, LLM 프롬프트 가이드, 샘플 데이터 생성, UI 시나리오 작성, 테스트 자동화 툴, 자동화 테스트 시나리오, QA 효율화, 소프트웨어 온보딩
  - - meta
    - property: og:title
      content: 이슈 생성 프롬프트 사용 가이드
  - - meta
    - property: og:description
      content: 이슈를 효율적으로 생성하는 방법을 단계별로 안내합니다. LLM 프롬프트 활용, 샘플 데이터/시나리오 자동 생성, UI 시나리오 작성까지 포함한 실전 가이드.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/agile/createIssue.html
sort: 7000
---

# 프롬프트

```
Playwright 기반 테스트 자동화 툴의 이슈 관리 시스템에서 새로운 이슈를 생성하려고 합니다.
다음 내용을 바탕으로 **JIRA 티켓 템플릿** 형태로 작성해주세요.

요청 사항:
1. 이슈 **제목(Title)** 생성
2. **JIRA 티켓 템플릿** 형식으로 작성
  - Summary
  - Description
  - Acceptance Criteria
  - Priority
3. 개발 시 참고할 수 있는 **UI 시나리오** 예시 포함

이슈 내용:
{{이슈 내용}}
```

# 샘플

```
Playwright 기반 테스트 자동화 툴의 이슈 관리 시스템에서 새로운 이슈를 생성하려고 합니다.
다음 내용을 바탕으로 **JIRA 티켓 템플릿** 형태로 작성해주세요.

요청 사항:
1. 이슈 **제목(Title)** 생성
2. **JIRA 티켓 템플릿** 형식으로 작성
   - Summary
   - Description
   - Acceptance Criteria
   - Priority
3. 개발 시 참고할 수 있는 **UI 시나리오** 예시 포함

이슈 내용:
 첫 로그인시 Dbeaver와 같은 샘플 데이타 생성 기능 추가
```

# 필요에 따라 결과 수정후 이슈 등록

```
## 📌 JIRA 티켓 예시

**Title**
첫 로그인 시 샘플 데이터 및 샘플 프로젝트/시나리오 자동 생성 기능 추가

**Summary**
신규 사용자가 첫 로그인했을 때 프로젝트가 없으면 샘플 프로젝트와 시나리오를 생성하도록 하여, 툴의 초기 경험을 개선하고 빠른 온보딩을 지원하는 기능 추가

**Description**
현재 Playwright 기반 테스트 자동화 툴에서는 신규 사용자가 첫 로그인 시 프로젝트나 시나리오가 없으면 빈 화면만 표시됩니다.
이를 개선하기 위해 다음 기능을 구현해야 합니다:

1. 첫 로그인 시 프로젝트가 존재하지 않으면 **샘플 생성 여부 확인 팝업** 제공

   * "샘플 프로젝트와 시나리오를 생성하시겠습니까?"
2. 사용자가 동의하면 **샘플 프로젝트와 샘플 시나리오 자동 생성**
3. 생성된 샘플 프로젝트와 시나리오는 UI에서 확인 가능하며 바로 실행 가능

**Acceptance Criteria**

* [ ] 첫 로그인 시 프로젝트가 없는 경우 팝업 표시
* [ ] "예" 선택 시 샘플 프로젝트 및 샘플 시나리오 자동 생성
* [ ] 샘플 프로젝트는 UI의 프로젝트 목록에 표시
* [ ] 샘플 시나리오는 실행 가능하며 정상 동작 확인
* [ ] "아니오" 선택 시 생성하지 않음
* [ ] 해당 로직은 최초 로그인 시점에만 실행

**Priority**
Medium

**Labels**

* playwright
* onboarding
* enhancement

**Expected Benefits**

* 신규 사용자에게 **즉시 실행 가능한 샘플 제공**
* 툴 활용 방법을 **직관적으로 이해** 가능
* 빈 화면 대신 기본 샘플 데이터 제공으로 **UX 향상**

---

## 💻 UI 시나리오 예시

**샘플 프로젝트명:** `Sample Project`

1. **샘플 시나리오 1: 웹 로그인 테스트**

   * Step 1: 브라우저 열기
   * Step 2: URL 이동 (`https://example.com/login`)
   * Step 3: ID 입력 (`test_user`)
   * Step 4: PW 입력 (`password123`)
   * Step 5: 로그인 버튼 클릭
   * Step 6: "로그인 성공" 메시지 확인

2. **샘플 시나리오 2: API 호출 테스트**

   * Step 1: `GET /api/health` 호출
   * Step 2: 응답 상태 코드 200 확인
   * Step 3: 응답 JSON 내 `"status": "ok"` 값 확인

3. **샘플 시나리오 3: 기본 UI 검증 테스트**

   * Step 1: 메인 페이지 이동
   * Step 2: 화면 내 로고 이미지 표시 여부 확인
   * Step 3: 주요 메뉴 버튼 클릭 후 페이지 전환 확인
```
