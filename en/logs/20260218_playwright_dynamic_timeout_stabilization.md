---
title: "[Work Log] Stabilizing Playwright Action Timeouts for Lazy-Loaded Components"
description: "Engineering log documenting the resolution of Playwright click action timeouts caused by element occlusion or off-viewport positioning in infinite scroll and virtual list environments."
head:
  - - meta
    - name: keywords
      content: Playwright, timeout stabilization, infinite scroll, Virtual List, scrollIntoView, element occlusion, SyncETA
  - - meta
    - property: og:title
      content: "[Work Log] Stabilizing Playwright Action Timeouts for Lazy-Loaded Components | Empasy Inc."
sort: 20
---

# [Work Log] Stabilizing Playwright Action Timeouts for Lazy-Loaded Components

## 1. Problem Statement

- **Target Module**: SyncETA Playwright Execution Engine (`sync-eta-runner`)
- **Symptoms**:
  When verifying SPA (Single Page Application) e-commerce storefronts and dashboards, 30-second timeouts (`TimeoutError: locator.click: Timeout 30000ms exceeded`) frequently occurred during steps clicking product cards or "Load More" buttons located near the bottom of lists.
- **Root Cause Hypotheses**:
  1. The element exists in the DOM but remains off-screen.
  2. Even after scrolling, the element is obscured by a fixed top header (`position: fixed; z-index: 1000`), failing Playwright's Actionability check (ability to receive pointer events).

---

## 2. Debugging and Analysis

We inspected snapshots at the moment of the click attempt using the Playwright Trace Viewer (`playwright show-trace`).

```
[locator.click Log]
- waiting for locator('button.btn-add-to-cart').nth(15)
- locator resolved to <button class="btn-add-to-cart">Add to Cart</button>
- attempting click action
- waiting for element to be visible, enabled and stable
- element is visible, enabled and stable
- scrolling into view if needed
- element is outside of the viewport or covered by <header class="global-nav">...
- retrying click action, attempt #2...
```

Playwright's default `scrollIntoViewIfNeeded` often aligns the element flush with the top edge of the viewport, revealing a structural issue where the element sits directly underneath the fixed GNB header, causing click events to be intercepted by the header.

---

## 3. Solution Design: Two-Stage Safe Scroll and Offset Correction

We implemented a custom action interceptor in the SyncETA execution engine to center the element in the viewport before clicking and automatically apply margin offset adjustments for fixed headers.

```typescript
// Patched safe click action (Safe Action Interceptor)
export async function safeClickElement(page: Page, selector: string, timeoutMs = 10000): Promise<void> {
  const locator = page.locator(selector).first();
  await locator.waitFor({ state: 'attached', timeout: timeoutMs });

  // 1. Center the element in the viewport and scroll to avoid fixed headers
  await locator.evaluate((el) => {
    el.scrollIntoView({
      behavior: 'instant',
      block: 'center', // Scroll to the center of the viewport to avoid top/bottom fixed bars
      inline: 'nearest'
    });
  });

  // 2. Check for an overlapping occluding element (document.elementFromPoint)
  const isObscured = await locator.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const topEl = document.elementFromPoint(cx, cy);
    return topEl !== null && !el.contains(topEl) && !topEl.contains(el);
  });

  // 3. Apply fine scroll adjustment if occluded
  if (isObscured) {
    await page.mouse.wheel(0, 150); // Scroll down an additional 150px
    await page.waitForTimeout(100);
  }

  // 4. Perform the final click action
  await locator.click({ timeout: timeoutMs });
}
```

---

## 4. Verification Results

We conducted 500 repeated execution tests across five major customer sites (apparel e-commerce, financial portals, etc.) that combine fixed headers with infinite scrolling.

- **Click Action Timeout Rate**: Reduced significantly from 8.8% to **under 0.1%**.
- **Test Suite Completion Time**: Total execution time **reduced by 22%** by eliminating unnecessary timeout retry waits.
- **Included in v0.0.33 Release**: Shipped as a built-in feature of the SyncETA desktop runtime core engine.
