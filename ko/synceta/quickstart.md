---
title: "5분 퀵스타트 가이드"
description: "SyncETA 로컬 환경 구동, 첫 번째 시나리오 녹화, Playwright 기반 테스트 실행 및 결과 확인까지 5분 만에 완료하는 실습 가이드입니다."
head:
  - - meta
    - name: keywords
      content: SyncETA 퀵스타트, 테스트 자동화 시작하기, Playwright 테스트, 녹화 및 실행, Docker 배포
  - - meta
    - property: og:title
      content: "5분 퀵스타트 가이드 | SyncETA"
  - - meta
    - property: og:description
      content: "SyncETA를 사용하여 5분 만에 첫 번째 테스트 시나리오를 녹화하고 실행하는 방법을 안내합니다."
sort: 30
---

# 5분 퀵스타트 가이드

본 가이드는 SyncETA를 로컬 또는 개발 환경에 구동하고, 대상 웹사이트에 대한 첫 번째 테스트 시나리오를 녹화하여 실행하는 전체 과정을 안내합니다.

---

## 1. 사전 요구사항 확인

- **운영체제**: Windows 10/11, macOS (Apple Silicon/Intel), Linux (Ubuntu 20.04+)
- **필수 런타임**: Node.js 20+ 또는 Docker Compose
- **권장 브라우저**: Google Chrome 최신 버전

---

## 2. 시스템 구동 (Docker Compose 기준)

아래 명령어를 통해 SyncETA 코어 서버, MCP 서비스 및 데이터베이스를 한 번에 구동합니다.

```bash
# 저장소 클론 및 디렉토리 이동
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/SyncEta

# 컨테이너 서비스 일괄 실행
docker compose -f docker-compose.dev.yml up -d
```

서비스가 정상적으로 기동되면 브라우저에서 `http://localhost:9000`으로 접속하여 SyncETA 콘솔에 로그인합니다.

---

## 3. 첫 번째 시나리오 녹화 및 실행 (4단계 실습)

### 1단계: 프로젝트 생성 및 대상 URL 지정
1. 대시보드 좌측 메뉴에서 **'프로젝트'**를 클릭합니다.
2. 우측 상단의 **'새로운 프로젝트'**를 선택하고, 프로젝트 이름(예: `쇼핑몰 E2E 검증`)과 기준 URL(예: `https://shop.example.com`)을 입력합니다.

### 2단계: 브라우저 녹화 시작
1. 좌측 메뉴에서 **'시나리오'** ➔ **'새로운 시나리오'**를 클릭합니다.
2. 녹화 브라우저(Chrome)와 뷰포트 크기(1920x1080)를 선택한 후 **'녹화 시작'** 버튼을 누릅니다.
3. 생성된 브라우저 창에서 다음 동작을 수행합니다:
   - 검색창 클릭 후 검색어(`무선 키보드`) 입력
   - 검색 버튼 클릭
   - 검색 결과 목록에서 첫 번째 상품 클릭
4. 녹화 창 상단의 **'녹화 종료'**를 클릭하여 시나리오를 저장합니다.

### 3단계: 검증 조건(Assertion) 추가
1. 저장된 시나리오 목록에서 방금 생성한 시나리오를 엽니다.
2. 마지막 상품 상세 페이지 이동 스텝을 우클릭하고 **'검증 조건 추가' ➔ '요소 노출 검증'**을 선택합니다.
3. 화면상의 **'장바구니 담기'** 버튼 요소를 클릭하여 검증 대상으로 등록합니다.

### 4단계: Playwright MCP로 테스트 실행
1. 우측 상단의 **'시나리오 실행'** 버튼을 클릭합니다.
2. 실행 옵션에서 **'헤드리스 모드(Headless)'** 및 **'비디오 저장(Save Video)'**을 체크하고 **'실행'**을 누릅니다.
3. 실행이 완료되면 **'대시보드'** 메뉴로 이동하여 실행 소요 시간, 각 스텝별 통과 상태 및 녹화된 비디오(MP4)를 확인합니다.

---

## 다음 단계

- [시나리오 녹화 및 에디터 상세 가이드](./scenario-create) - 대기 조건, 복구 스크립트 설정
- [데이터셋 관리](./dataset) - Excel을 활용한 대량 파라미터 테스트
- [MCP 프로토콜 및 CI/CD 연동](./mcp-and-cicd) - GitHub Actions 및 Jenkins 파이프라인 연동
