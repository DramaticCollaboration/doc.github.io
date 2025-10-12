---
title: Git Flow
description: 팀 협업을 위한 Git Flow 완전 가이드. 브랜치 구조, 커밋 메시지 규칙, 릴리즈 및 핫픽스 관리 방법을 단계별로 쉽게 설명합니다.
head:
  - - meta
    - name: keywords
      content: git flow, git flow 가이드, git 브랜치 전략, feature branch, develop branch, release branch, hotfix branch, git commit 메시지, git 협업, git workflow
  - - meta
    - property: og:title
      content: 스크럼반
  - - meta
    - property: og:description
      content: 팀 협업을 위한 Git Flow 완전 가이드. 브랜치 구조, 커밋 메시지 규칙, 릴리즈 및 핫픽스 관리 방법을 단계별로 쉽게 설명합니다.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/agile/activity.html
sort: 4000
---

# 🚀 Git Flow 가이드

## 1. Git Flow란?

- **협업을 위한 Git 브랜치 전략**
- 기능 개발, 버그 수정, 배포를 구조적으로 관리할 수 있음
- 장점:

  - 역할별 브랜치로 혼동 최소화
  - 안정적인 배포 프로세스
  - 팀 단위 협업에 적합

---

## 2. 브랜치 종류

Git Flow는 크게 5가지 주요 브랜치를 사용합니다.

1. **main (master)**

- 프로덕션(실서비스)에 배포되는 안정적인 코드
- 항상 배포 가능한 상태 유지

2. **develop**

- 다음 버전 개발을 위한 통합 브랜치
- 모든 기능(feature)과 버그 수정이 merge되는 중심 브랜치

3. **feature/**

- 새로운 기능 개발용 브랜치
- `develop`에서 분기 → 개발 완료 후 다시 `develop`으로 merge
- 네이밍 예시:

  - `feature/login-api`
  - `feature/ui-redesign`

4. **release/**

- 배포 준비용 브랜치
- `develop`에서 분기 → QA/테스트 후 버그 수정 → `main`과 `develop` 모두에 merge
- 네이밍 예시:

  - `release/1.2.0`

5. **hotfix/**

- 프로덕션에서 긴급 버그 수정용
- `main`에서 분기 → 수정 후 `main`과 `develop`에 merge
- 네이밍 예시:

  - `hotfix/1.2.1`

---

## 3. Git Flow 브랜치 흐름

```
main -----------●------------------●------------------->
                ↑                  ↑
                │                  │
       release/1.2.0        hotfix/1.2.1
                ↑
develop ----●---●---●---●---●---●---●----------------->
             ↑   ↑
             │   │
feature/login   feature/payment
```

---

## 4. Git Flow 작업 순서

### (1) 새로운 기능 개발

```bash
git checkout develop
git checkout -b feature/기능명
# 코드 작업 후
git add .
git commit -m "feat: 기능 설명"
git checkout develop
git merge --no-ff feature/기능명
git branch -d feature/기능명
```

### (2) 배포 준비

```bash
git checkout develop
git checkout -b release/1.2.0
# QA / 버그 수정
git commit -m "fix: release QA 버그 수정"
git checkout main
git merge --no-ff release/1.2.0
git tag -a 1.2.0 -m "Release 1.2.0"
git checkout develop
git merge --no-ff release/1.2.0
git branch -d release/1.2.0
```

### (3) 긴급 버그 수정

```bash
git checkout main
git checkout -b hotfix/1.2.1
# 버그 수정
git commit -m "fix: 긴급 버그 수정"
git checkout main
git merge --no-ff hotfix/1.2.1
git tag -a 1.2.1 -m "Hotfix 1.2.1"
git checkout develop
git merge --no-ff hotfix/1.2.1
git branch -d hotfix/1.2.1
```

---

## 5. 커밋 메시지 컨벤션 (추천: Angular 스타일)

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (세미콜론, 포맷 등)
- `refactor`: 리팩토링 (기능 변화 없음)
- `test`: 테스트 코드 관련
- `chore`: 빌드/도구 설정 변경

예시:

```
feat(auth): 로그인 API 구현
fix(ui): 모바일 화면에서 버튼 깨짐 수정
```

---

## 6. Git Flow 협업 체크리스트

✅ 모든 기능은 `feature/` 브랜치에서 시작한다
✅ `develop` 브랜치에는 직접 커밋하지 않고 merge만 한다
✅ 배포는 반드시 `release/` 브랜치를 통해 진행한다
✅ 긴급 수정은 `hotfix/` 브랜치로 바로 처리한다
✅ merge 시 `--no-ff` 옵션을 사용해 브랜치 히스토리 유지한다
✅ 커밋 메시지는 컨벤션을 따른다
