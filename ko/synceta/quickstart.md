---
title: "SyncETA 퀵스타트 가이드"
description: "SyncETA 데스크톱 애플리케이션 설치(1분) 또는 Docker 온프레미스 서버 구동을 통해 첫 번째 시나리오를 녹화하고 실행하는 빠른 시작 가이드입니다."
head:
  - - meta
    - name: keywords
      content: SyncETA 퀵스타트, 테스트 자동화 시작하기, 데스크톱 앱 다운로드, Playwright 테스트, 녹화 및 실행, Docker 배포
  - - meta
    - property: og:title
      content: "SyncETA 퀵스타트 가이드 | 엠파시(Empasy)"
  - - meta
    - property: og:description
      content: "데스크톱 앱 설치 또는 Docker 배포를 통해 3분 만에 첫 웹 회귀 테스트를 실행합니다."
sort: 30
---

# SyncETA 퀵스타트 가이드

SyncETA는 두 가지 방식으로 시작할 수 있습니다. 로컬 및 스테이징 환경에서 빠르게 테스트를 체험하고자 하는 경우 **[방법 1: 데스크톱 앱 간편 설치]**를, 팀 단위 중앙 관제 및 CI/CD 연동 서버를 구성하고자 하는 경우 **[방법 2: Docker 기반 온프레미스 구축]**을 선택하십시오.

---

## 방법 1: 데스크톱 앱 간편 설치 (권장 - 1분 시작)

데스크톱 앱은 별도의 서버 구축이나 데이터베이스 설정 없이, 운영체제별 설치 파일 실행만으로 즉시 구동됩니다.

### 1단계: 설치 파일 다운로드
[엠파시 공식 다운로드 페이지(empasy.io)](https://empasy.io/ko/download_eta.html)에서 사용 중인 OS에 맞는 최신 안정화 빌드(v0.0.33)를 내려받습니다.

- **Windows**: `SyncETA Setup 0.0.33.exe` (x64 및 arm64 지원)
- **macOS**: `SyncETA-0.0.33-arm64.dmg` (Apple Silicon M시리즈) 또는 `SyncETA-0.0.33.dmg` (Intel)

### 2단계: 애플리케이션 실행
설치 완료 후 바탕화면 또는 애플리케이션 목록에서 **SyncETA**를 실행합니다. 별도의 로그인이나 외부 네트워크 인증 없이 로컬 모드로 즉시 기동됩니다.

---

## 방법 2: Docker Compose 기반 온프레미스 구축 (엔터프라이즈)

사내 인프라에 SyncETA 중앙 서버 및 Playwright 분산 실행 노드를 배포하는 방식입니다.

```bash
# 저장소 클론 및 디렉토리 이동
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/SyncEta

# 컨테이너 서비스 일괄 실행
docker compose -f docker-compose.dev.yml up -d
```

서비스 기동 후 브라우저에서 `http://localhost:9000`으로 접속하여 웹 콘솔에 접근합니다.

---

## 첫 번째 테스트 시나리오 녹화 및 실행 실습

데스크톱 앱 또는 웹 콘솔 구동 후, 아래 4단계 절차를 통해 첫 회귀 테스트를 생성하고 실행합니다.

### 1단계: 프로젝트 생성 및 기준 URL 등록
1. 좌측 네비게이션에서 **'프로젝트'**를 클릭합니다.
2. 우측 상단의 **'새 프로젝트'** 버튼을 누르고, 프로젝트 이름(예: `커머스 메인 플로우`)과 시작 URL(예: `https://shop.example.com` 또는 `http://localhost:3000`)을 입력합니다.

### 2단계: 사용자 인터랙션 녹화
1. 좌측 메뉴에서 **'시나리오'** ➔ **'새로운 시나리오'**를 선택합니다.
2. 대상 브라우저(Chromium) 및 뷰포트(1920x1080)를 지정한 뒤 **'녹화 시작'**을 클릭합니다.
3. 생성된 브라우저 창에서 사용자 행동을 수행합니다:
   - 검색창 클릭 후 검색어 입력
   - 검색 실행 버튼 클릭
   - 검색 결과 목록에서 특정 항목 클릭
4. 녹화 제어 창에서 **'녹화 종료'**를 누르면 시나리오가 JSON/YAML 포맷으로 자동 정규화되어 저장됩니다.

### 3단계: 검증 조건(Assertion) 등록
1. 저장된 시나리오 편집기에서 검증할 마지막 스텝을 선택합니다.
2. **'검증 조건 추가' ➔ '요소 노출 검증'**을 선택하고, 화면 내의 목표 컴포넌트(예: '상세 정보' 영역 또는 '결제 버튼')를 지정합니다.

### 4단계: Playwright 엔진 무인 실행 및 자가 치유 검증
1. 우측 상단의 **'시나리오 실행'**을 클릭합니다.
2. 실행 모드(헤드리스 또는 일반 브라우저)를 선택한 뒤 **'실행'**을 누릅니다.
3. 실행 완료 후 대시보드에서 스텝별 성공 여부, 소요 시간, 캡처된 스크린샷 및 자가 치유(Self-Healing) 적용 내역을 검토합니다.

---

## 다음 단계

- [시나리오 녹화 및 에디터 상세 가이드](./scenario-create) - 대기 조건, 복구 스크립트 설정
- [자가 치유 & 비전 분석 원리](./self-healing-and-vision) - Vision-LLM 기반 셀렉터 복구 메커니즘
- [데이터셋 관리](./dataset) - Excel을 활용한 대량 파라미터 테스트
- [MCP 프로토콜 및 CI/CD 연동](./mcp-and-cicd) - GitHub Actions 및 Jenkins 파이프라인 연동

