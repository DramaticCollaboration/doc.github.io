---
title: "프로젝트 및 권한(RBAC) 관리"
description: "테스트 자산을 격리하고 팀원을 초대하여 역할별 권한을 부여하는 SyncETA 프로젝트 관리 가이드입니다."
head:
  - - meta
    - name: keywords
      content: SyncETA, 프로젝트 관리, 역할 기반 권한, RBAC, 멤버 초대, 테스트 자산 관리
  - - meta
    - property: og:title
      content: "프로젝트 및 권한(RBAC) 관리 | SyncETA"
  - - meta
    - property: og:description
      content: "SyncETA 프로젝트 생성, 팀원 초대 및 역할 기반 접근 제어(RBAC) 가이드입니다."
sort: 200
---

# 프로젝트 및 권한(RBAC) 관리

SyncETA에서 **'프로젝트'**는 시나리오, 데이터셋, 실행 이력 및 대시보드 리포트를 독립적으로 격리하는 최상위 운영 단위입니다. 프로젝트 단위로 팀원을 초대하고 역할(Role)에 따른 권한을 세분화하여 부여할 수 있습니다.

---

## 1. 프로젝트 생성

신규 프로젝트는 다음 세 가지 경로를 통해 생성할 수 있습니다.

### 경로 1: 소속 프로젝트가 없는 초기 상태
첫 로그인 시 화면 중앙의 **'새로운 프로젝트'** 버튼을 클릭합니다.

![프로젝트 없음](./image/project/project_none.png)

### 경로 2: 프로젝트 목록 화면에서 생성
프로젝트 목록 좌측 상단의 **'새로운 프로젝트'** 버튼을 클릭합니다.

![프로젝트 목록에서 생성하기](./image/project/project_list.png)

### 경로 3: 작업 대시보드 툴바에서 생성
상단 프로젝트 네비게이션 바의 **'새로운 프로젝트'** 버튼을 클릭합니다.

![프로젝트 대시보드에서 생성하기](./image/project/create_project_in_dashboard.png)

### 프로젝트 정보 입력
프로젝트 이름, 대표 이미지, 프로젝트 설명 및 대상 기본 URL을 입력한 후 생성을 완료합니다.

![프로젝트 생성 폼](./image/project/create_project.png)

---

## 2. 프로젝트 목록 및 전환

우측 상단의 **'프로젝트 닫기'** 또는 전환 아이콘을 클릭하여 소속된 프로젝트 목록을 확인하고 원하는 프로젝트로 이동할 수 있습니다.

![프로젝트 목록 이동](./image/project/goto_project_list.png)
![프로젝트 목록](./image/project/project_list_org.png)

---

## 3. 역할 기반 권한 제어 (RBAC)

프로젝트 보안 및 운영 안정성을 위해 역할(Role)별로 작업 권한을 제어할 수 있습니다.

### 1단계: 역할 생성
프로젝트 설정 ➔ **'역할 관리'** 메뉴로 이동하여 신규 역할을 추가합니다.

![역할 생성으로 이동](./image/project/new_role.png)

### 2단계: 권한 매핑
해당 역할이 수행할 수 있는 권한(시나리오 생성/수정, 실행 권한, 데이터셋 수정, CI/CD API 키 발급 등)을 선택하여 저장합니다.

![역할 생성](./image/project/role_setting.png)

---

## 4. 멤버 초대 및 권한 할당

1. **멤버 초대 화면 이동**: 프로젝트 설정 ➔ **'멤버 관리'** 메뉴에서 **'멤버 초대'** 버튼을 클릭합니다.
   ![멤버 초대 화면으로 이동](./image/project/new_member.png)
2. **초대 대상 지정**: 시스템에 등록된 사용자의 이메일을 검색하여 선택합니다.
   ![멤버 초대](./image/project/vite_member.png)
3. **역할 할당**: 초대한 사용자에게 프로젝트 단위 역할을 부여합니다. (동일 사용자라도 프로젝트별로 서로 다른 역할을 부여받을 수 있습니다.)
   ![멤버 초대](./image/project/set_role_to_member.png)
