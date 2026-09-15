---
title: "[작업 일지] 지연 로딩 컴포넌트 대상 Playwright 액션 타임아웃 안정화"
description: "무한 스크롤 및 가상 리스트(Virtual List) 환경에서 Playwright 클릭 액션이 요소 가림 또는 뷰포트 미진입으로 인해 타임아웃되던 문제를 해결한 작업 일지입니다."
head:
  - - meta
    - name: keywords
      content: Playwright, 타임아웃 안정화, 무한 스크롤, Virtual List, scrollIntoView, 요소 가림, SyncETA
  - - meta
    - property: og:title
      content: "[작업 일지] 지연 로딩 컴포넌트 대상 Playwright 액션 타임아웃 안정화 | 엠파시(Empasy)"
sort: 20
---

# [작업 일지] 지연 로딩 컴포넌트 대상 Playwright 액션 타임아웃 안정화

## 1. 문제 상황

- **대상 모듈**: SyncEta Playwright 실행 엔진 (`sync-eta-runner`)
- **이슈 현상**:
  SPA(Single Page Application) 쇼핑몰 및 대시보드 사이트 검증 시, 리스트 하단에 위치한 상품 카드나 '더보기' 버튼을 클릭하는 스텝에서 30초 타임아웃(`TimeoutError: locator.click: Timeout 30000ms exceeded`)이 빈번하게 발생.
- **원인 가설**:
  1. 요소가 DOM에는 존재하나 화면 밖(Off-screen)에 머물러 있음.
  2. 스크롤이 발생하더라도 상단 고정 헤더(`position: fixed; z-index: 1000`)에 요소가 가려져 Playwright의 Actionability 검사(포인터 이벤트 수신 가능 여부)를 통과하지 못함.

---

## 2. 디버깅 및 분석 과정

Playwright 트레이스 뷰어(`playwright show-trace`)를 분석하여 클릭 시도 시점의 스냅샷을 확인했습니다.

```
[locator.click Log]
- waiting for locator('button.btn-add-to-cart').nth(15)
-   locator resolved to <button class="btn-add-to-cart">담기</button>
- attempting click action
-   waiting for element to be visible, enabled and stable
-   element is visible, enabled and stable
-   scrolling into view if needed
-   element is outside of the viewport or covered by <header class="global-nav">...
- retrying click action, attempt #2...
```

Playwright의 기본 `scrollIntoViewIfNeeded`는 요소를 뷰포트의 상단 경계선에 정확히 정렬시키는 경우가 많아, 상단에 고정된 GNB 헤더 바로 아래에 요소가 위치하면서 클릭 이벤트가 헤더에 인터셉트되는 구조적 취약점이 확인되었습니다.

---

## 3. 해결 설계: 2단계 안전 스크롤 및 옵셋 보정

SyncEta 실행 엔진에 커스텀 액션 인터셉터를 구현하여, 클릭 전 뷰포트 중앙 배치 및 고정 헤더 높이만큼의 마진 옵셋(Margin Offset)을 자동으로 계산하도록 개선했습니다.

```typescript
// 패치된 안전 클릭 액션 (Safe Action Interceptor)
export async function safeClickElement(page: Page, selector: string, timeoutMs = 10000): Promise<void> {
  const locator = page.locator(selector).first();
  await locator.waitFor({ state: 'attached', timeout: timeoutMs });

  // 1. 요소의 뷰포트 중앙 배치 및 고정 헤더 회피 스크롤
  await locator.evaluate((el) => {
    el.scrollIntoView({
      behavior: 'instant',
      block: 'center', // 뷰포트 정중앙으로 스크롤하여 상/하단 고정바 회피
      inline: 'nearest'
    });
  });

  // 2. 상위 가림 요소 존재 여부 검사 (document.elementFromPoint)
  const isObscured = await locator.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const topEl = document.elementFromPoint(cx, cy);
    return topEl !== null && !el.contains(topEl) && !topEl.contains(el);
  });

  // 3. 가림 발생 시 추가 미세 스크롤 보정 또는 강제 디스패치
  if (isObscured) {
    await page.mouse.wheel(0, 150); // 아래로 150px 추가 스크롤
    await page.waitForTimeout(100);
  }

  // 4. 최종 액션 수행
  await locator.click({ timeout: timeoutMs });
}
```

---

## 4. 검증 결과

실제 고정 헤더와 무한 스크롤이 복합 적용된 5개 주요 고객사 사이트(의류 커머스, 금융 포털 등)를 대상으로 500회 반복 실행 검증을 진행했습니다.

- **클릭 액션 타임아웃 발생률**: 기존 8.8% ➔ **0.1% 미만**으로 대폭 개선.
- **테스트 스위트 완주 시간**: 불필요한 타임아웃 재시도 대기가 사라져 전체 실행 시간 **22% 단축**.
- **v0.0.33 릴리즈 반영**: 해당 로직을 SyncEta 데스크톱 런타임 코어 엔진에 기본 탑재 완료.
