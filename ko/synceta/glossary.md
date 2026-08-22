---
title: "기술 용어 사전"
description: "SyncETA 플랫폼의 핵심 개념, 레코드, 시나리오, 컬렉션, 스토리, MCP, Self-Healing 등 주요 기술 용어를 정의합니다."
head:
  - - meta
    - name: keywords
      content: SyncETA, 기술 용어, 레코드, 시나리오, 컬렉션, 스토리, 데이터셋, MCP, Self-Healing, Visual Regression
  - - meta
    - property: og:title
      content: "기술 용어 사전 | SyncETA"
  - - meta
    - property: og:description
      content: "SyncETA 플랫폼의 주요 용어 및 개념 정의입니다."
sort: 1200
---

# 기술 용어 사전

SyncETA 플랫폼에서 사용되는 핵심 개념과 기술 용어에 대한 정의입니다.

---

### Record (레코드)
사용자의 브라우저 이벤트 및 DOM 정보를 기록하는 최소 실행 단위입니다. 클릭, 키보드 입력, 스크롤, 탭 전환 등 사용자의 조작을 URL, XPath, CSS Selector, 태그 속성 정보와 함께 실시간으로 캡처하여 저장합니다.

### Scenario (시나리오)
일련의 레코드들을 특정 비즈니스 흐름(예: 로그인, 상품 검색, 결제 등)에 맞추어 순차적으로 구성한 기본 테스트 케이스 단위입니다. 대기 조건, 검증 조건, 실패 복구 스크립트를 포함할 수 있습니다.

### Collection (컬렉션)
여러 개의 독립된 시나리오들을 그룹화하여 하나의 테스트 스위트 단위로 순차 또는 병렬 실행하는 묶음 실행 기능입니다.

### Story (스토리)
플로우차트(Flowchart) 캔버스 인터페이스를 통해 여러 시나리오를 조건부로 연결하고, 단일 브라우저 세션에서 세션 상태(쿠키, 로그인)를 유지하며 연속 실행하는 상위 통합 워크플로우입니다.

### Data Set (데이터셋)
시나리오에 정의된 입력 변수에 매핑할 테스트 데이터를 스프레드시트(Key-Value) 형태로 관리하는 기능입니다. Excel 파일 Import/Export를 지원하여 Data-Driven Testing을 수행합니다.

### Playwright MCP
Model Context Protocol(MCP) 표준을 준수하여 Playwright 브라우저 인스턴스를 원격으로 제어하는 분산 테스트 실행 엔진입니다. Chromium, Firefox, WebKit 멀티 브라우저 병렬 구동을 지원합니다.

### Visual Regression AI (시각적 회귀 분석)
픽셀 단위 단순 비교의 한계를 극복하기 위해 비전 모델을 활용하여 화면 내 컴포넌트 겹침(Overlapping), 텍스트 잘림(Clipping), 레이아웃 깨짐 현상을 사용자 인지 관점에서 분석하는 기능입니다.

### Self-Healing (자가 치유)
웹 애플리케이션의 배포로 인해 기존 DOM 식별자(XPath/CSS Selector)가 변경되었을 때, 비전 모델과 DOM 트리를 분석하여 새로운 대체 선택자 후보를 산출하고 승인 큐에 전달하는 기능입니다.

### Human-in-the-Loop 거버넌스
AI가 생성한 테스트 케이스나 자가 치유 선택자를 시스템에 자동 반영하기 전, QA 엔지니어 및 관리자의 명시적 검토와 승인을 거치도록 하는 품질 관리 원칙입니다.

### Air-Gapped / On-Premise 배포
외부 인터넷 통신이 차단된 사내 폐쇄망 환경에서도 로컬 오픈소스 Vision/LLM 엔진(vLLM 등)과 결합하여 독립적으로 구동 가능한 엔터프라이즈 배포 방식입니다.
