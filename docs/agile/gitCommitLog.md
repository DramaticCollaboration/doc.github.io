---
title: 커밋 메세지
description: 효율적인 Git 커밋 메시지 작성법 완전 가이드. feat, fix, refactor 등 타입별 규칙, 커밋 제목·본문 작성법과 실전 예시까지.
head:
  - - meta
    - name: keywords
      content: git commit, git commit 메시지, git 커밋 규칙, git 커밋 컨벤션, commit message guide, commit convention, git 협업, git 브랜치 전략, feat, fix, refactor
  - - meta
    - property: og:title
      content: 스크럼반
  - - meta
    - property: og:description
      content: git commit, git commit 메시지, git 커밋 규칙, git 커밋 컨벤션, commit message guide, commit convention, git 협업, git 브랜치 전략, feat, fix, refactor
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/agile/activity.html
sort: 5000
---

## git 커밋 메세지 작성

## 🔎 요약 (TL;DR)

- **형식**: `<type>(scope): <subject>`
- **제목(Subject)**: 명령형, **50자 이내**, 끝에 마침표 X
- **본문(Body)**: _무엇을_ + **왜** 했는지 (필요할 때만, 줄폭 \~72자)
- **꼬리말(Footer)**: 이슈 연결 `Closes #123`, 큰 변경은 `BREAKING CHANGE:`
- **타입(Conventional Commits)**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`
- **원칙**: 한 커밋 = 한 목적, “해결은 코드가 말하고 동기는 본문이 말한다”

---

## 📘 자세한 설명

## 1) 메시지 구조

```
<type>(옵션:scope): <subject>

본문(선택) — 무엇과 왜를 설명, 72자 내로 줄바꿈
필요하면 목록/항목화

꼬리말(선택) — 이슈/브레이킹 체인지/공동작업자 등
```

### 예시

```
feat(auth): 구글 소셜 로그인 추가

OAuth 2.0 기반으로 구글 계정으로 로그인/가입을 지원합니다.
기존 이메일 기반 가입 전환율이 낮아 대안 경로를 제공합니다.

Closes #52
```

---

## 2) 제목(Subject) 작성 규칙

- **명령형 동사**로 시작: “Add”, “Fix”, “Refactor” / 한국어면 “추가”, “수정”처럼 **행위**가 드러나게.
- **50자 이내**, **마침표( . ) 금지**, **불필요한 수식어 금지**.
- **Scope**는 좁고 명확하게: `auth`, `api`, `signup`, `ci`, `deps` 등.

**좋은 예**

- `fix(api): 회원가입 중복 이메일 검사 추가`
- `refactor(search): 인덱스 전략 변경으로 응답 시간 개선`
- `docs: 설치 가이드에 Docker 사용법 추가`

**나쁜 예**

- `update stuff`
- `fix`
- `final commit`, `temp`, `WIP`

---

## 3) 본문(Body) — _무엇 + 왜_

- **무엇을** 바꿨는지 요약 + **왜** 필요한지 배경/의도/대안 비교.
- “어떻게”는 과도하게 설명하지 않되, **중요한 의사결정/트레이드오프**는 남기기.
- 버그 수정이면 **재현 조건 → 원인 → 해결 방식** 순서가 좋음.
- 줄폭 **\~72자**로 자동 줄바꿈(가독성/CLI 뷰 고려).

**본문 예시(버그 수정)**

```
비동기 검증 중 중복 요청이 발생하면 마지막 응답이 이전 결과로 덮이는 문제를
debounce 처리와 취소 토큰을 통해 방지했습니다.

재현: 느린 네트워크에서 입력창에 빠르게 타이핑 시 상태 불일치 발생.
원인: 이전 요청 취소 미구현.
해결: AbortController로 이전 요청 취소 + debounce(300ms) 적용.
```

---

## 4) 꼬리말(Footer)

- **이슈 연결**: `Closes #123` / `Fixes JIRA-456`
- **브레이킹 체인지**: `BREAKING CHANGE:`로 시작해 **무엇이 깨졌고** **마이그레이션 방법** 명시
- **공동 작업자**: `Co-authored-by: 이름 <email>`
- **참고**: `Refs #789`, `See also: ...`

**브레이킹 예시**

```
BREAKING CHANGE: 회원 테이블에 unique index(email) 추가.
기존 중복 데이터는 마이그레이션 스크립트로 정리 필요.
```

---

## 5) 타입(Conventional Commits) 빠른 가이드

- `feat`: 사용자에게 보이는 **새 기능**
- `fix`: **버그 수정**
- `docs`: 문서/가이드 변경
- `style`: 포맷/공백/세미콜론 등 **로직 무관**
- `refactor`: 리팩토링(동작 동일)
- `test`: 테스트 추가/수정
- `chore`: 빌드/도구/패키지 작업(코드 영향 적음)
- `build`: 빌드 시스템/의존성
- `ci`: CI 설정/스크립트

> 팀에서 **필수 타입만 좁게** 쓰면 일관성이 올라갑니다. (예: `feat|fix|refactor|docs|test|chore`)

---

## 6) 상황별 샘플

\*\* 기능 추가 \*\*

```
feat(search): 추천 키워드 API 추가

검색 전환율 향상을 위해 서버 측 추천 키워드를 제공합니다.
AB 테스트 그룹 B에만 노출되며 2주간 수집 후 평가 예정.

Closes #410
```

\*\* 버그 수정 \*\*

```
fix(cart): 할인 코드가 중복 적용되던 문제 수정

할인 정책 우선순위 계산 시 누락된 조건으로 인해
특정 시나리오에서 두 번 적용되었습니다.

Fixes #612
```

\*\* 리팩토링 \*\*

```
refactor(core): 의존성 주입으로 모듈 결합도 낮춤

싱글톤 전역 접근을 제거하고 DI 컨테이너로 교체했습니다.
테스트 가능성과 확장성을 위해 인터페이스를 도입했습니다.
```

\*\* 문서 \*\*

```
docs(readme): 로컬 개발 환경 설정 절차 보완

Node 버전 제약과 .env 샘플 파일 설명을 추가했습니다.
```

\*\* 설정/의존성 \*\*

```
chore(deps): lodash 4.17.21로 보안 업데이트

GHSA-... 취약점 패치 포함.
Refs #702
```

---

## 7) 팀 운영 팁

- **언어 통일**(한글/영문), **시제 통일**(명령형) 합의.
- **한 커밋 = 한 목적**(리뷰/리버트 용이). 코드는 작게, 커밋은 자주.
- **PR 제목 = 대표 커밋 제목** 관례로 맞추면 changelog 품질↑
- **이슈-브랜치-커밋 연결 규칙**: `feature/JIRA-123-auth-social-login` → 커밋 `feat(auth): ... (Closes JIRA-123)`

---

## 8) 안티패턴(피하기)

- `WIP` 남발, “update/fix” 같은 **의미 없는 제목**
- **여러 논리를 한 커밋**에 섞기(포맷+리팩토링+기능)
- 커밋 메시지에 **코드 덤프/긴 로그** 붙이기
- **본문 없이** 맥락 상실(특히 버그 수정)

---

## 9) 자동화(선택)

- **Commit Template**(로컬): `git config --global commit.template ~/.gitmessage.txt`

```txt
# <type>(scope): <subject>
#
# Body: what + why (wrap ~72)
#
# Footer: Closes #, BREAKING CHANGE:, Co-authored-by:
```

- **commitlint + husky**로 규칙 강제(예: Node 리포지터리)
  `package.json` 예시:

```json
{
  "devDependencies": {
    "@commitlint/cli": "^19",
    "@commitlint/config-conventional": "^19",
    "husky": "^9"
  },
  "commitlint": { "extends": ["@commitlint/config-conventional"] },
  "scripts": {
    "prepare": "husky install"
  }
}
```

셋업:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```
