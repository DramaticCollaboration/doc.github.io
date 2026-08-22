---
title: "시각적 회귀 검증 및 선택자 자가 치유"
description: "Vision AI 기반 시각적 레이아웃 무결성 검증과 UI 변경 시 깨진 DOM 선택자(Broken Selector)를 탐지하고 복구하는 자가 치유(Self-Healing) 파이프라인을 설명합니다."
head:
  - - meta
    - name: keywords
      content: SyncETA, 시각적 회귀, Visual Regression, 자가 치유, Self-Healing, Broken Selector, Vision AI, Human-in-the-Loop
  - - meta
    - property: og:title
      content: "시각적 회귀 검증 및 선택자 자가 치유 | SyncETA"
  - - meta
    - property: og:description
      content: "Vision AI 레이아웃 검증 및 선택자 자가 치유 파이프라인 가이드입니다."
sort: 900
---

# 시각적 회귀 검증 및 선택자 자가 치유

웹 애플리케이션의 지속적인 배포 환경에서는 DOM 구조의 미세한 변경이나 CSS 레이아웃 어긋남으로 인해 기존 테스트 스크립트가 깨지거나(Flaky Test), 사용자 눈에만 보이는 UI 결함이 발생하기 쉽습니다. 

SyncETA는 **Vision AI 기반 시각 검증**과 **선택자 자가 치유(Self-Healing)** 파이프라인을 통해 이러한 문제를 체계적으로 해결합니다.

---

## 1. Vision AI 기반 시각적 회귀 검증

기존의 단순 픽셀 일치(Pixel-by-Pixel Diff) 방식은 브라우저 폰트 앤티앨리어싱이나 1픽셀 렌더링 오차에도 테스트가 실패하는 한계가 있었습니다. SyncETA는 시각 인지 비전 모델을 결합하여 실제 사용자가 인지하는 수준의 이상 여부를 판별합니다.

```mermaid
graph LR
    A[테스트 실행 스냅샷] --> C[Vision AI 비교 분석기]
    B[기준 스크린샷 Baseline] --> C
    C --> D{시각적 차이 감지}
    D -- 오차 허용 범위 내 --> E[통과 Pass]
    D -- 비정상 UI 변형 발견 --> F[결함 리포트 생성 & 실패 처리]
    F --> F1[1. 컴포넌트 겹침 Overlapping]
    F --> F2[2. 텍스트 잘림 Clipping]
    F --> F3[3. 뷰포트 레이아웃 붕괴]
```

### 주요 시각 검증 항목
1. **컴포넌트 겹침(Overlapping)**: 배너나 팝업 레이어가 결제/장바구니 등 핵심 버튼을 가리는 현상 탐지
2. **텍스트 잘림(Clipping)**: 반응형 화면 전환 시 버튼이나 레이블의 텍스트가 박스 밖으로 넘치거나 잘리는 결함 검출
3. **영역 마스킹(Ignored Regions)**: 현재 시간, 실시간 배너 광고 등 매 실행 시 변경되는 동적 영역을 검증 대상에서 제외

---

## 2. 선택자 자가 치유 파이프라인 (Self-Healing)

프론트엔드 프레임워크 업데이트나 클래스명 난독화(Webpack/Vite Hash)로 인해 기존 식별자(XPath/CSS Selector)가 깨졌을 때, SyncETA는 자동으로 대체 선택자를 탐색하고 복구를 제안합니다.

```mermaid
sequenceDiagram
    autonumber
    participant Playwright as Playwright 실행기
    participant Analyzer as Self-Healing 분석기
    participant Vision as Vision AI
    participant Hub as 관제 콘솔 (SyncVerse / QA)

    Playwright->>Playwright: 기존 Selector(#btn_submit_2a3f) 검색 실패
    Playwright->>Analyzer: 오류 이벤트 및 현재 DOM/스크린샷 전달
    Analyzer->>Vision: 화면 내 대상 컴포넌트 시각적 탐색
    Vision-->>Analyzer: 바운딩 박스(Bounding Box) 좌표 반환
    Analyzer->>Analyzer: 해당 좌표 내 최신 DOM 경로 및 대체 Selector 산출
    Analyzer->>Hub: Broken Selector 알림 + 대체 후보 제안
    alt 자동 승인 정책 (Low Risk)
        Hub-->>Playwright: 임시 보정 Selector 적용 후 테스트 계속 진행
    else 수동 검토 정책 (High Risk)
        Hub-->>QA: 관리자 승인 요청 (Human-in-the-Loop)
    end
```

---

## 3. Human-in-the-Loop 거버넌스

SyncETA는 AI가 테스트 코드를 임의로 변조하여 발생할 수 있는 거짓 양성(False Positive)을 원천 차단하기 위해 **관리자 승인 거버넌스**를 준수합니다.

- **자가 치유 제안 큐(Healing Queue)**: 변경된 UI 요소와 제안된 대체 XPath/Selector를 관리자 화면에 나열합니다.
- **Before/After 비교 뷰**: 이전 선택자가 가리키던 UI와 현재 제안된 UI를 스크린샷으로 대조하여 검토자가 1클릭으로 승인하거나 거절할 수 있습니다.
- **승인 이력 감사(Audit Log)**: 선택자 변경 사유 및 승인자 정보가 시스템에 영구 기록되어 테스트 자산의 무결성을 유지합니다.
