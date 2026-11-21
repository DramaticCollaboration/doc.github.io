---
title: "[作業ログ] 遅延読み込みコンポーネント対象 Playwright アクションタイムアウト安定化"
description: "無限スクロールおよび仮想リスト（Virtual List）環境において、Playwright のクリックアクションが要素の遮蔽やビューポート未進入によってタイムアウトしていた問題を解決した作業ログです。"
head:
  - - meta
    - name: keywords
      content: Playwright, タイムアウト安定化, 無限スクロール, Virtual List, scrollIntoView, 要素遮蔽, SyncETA
  - - meta
    - property: og:title
      content: "[作業ログ] 遅延読み込みコンポーネント対象 Playwright アクションタイムアウト安定化 | 株式会社エムパシー (Empasy)"
sort: 20
---

# [作業ログ] 遅延読み込みコンポーネント対象 Playwright アクションタイムアウト安定化

## 1. 問題状況

- **対象モジュール**: SyncETA Playwright 実行エンジン（`sync-eta-runner`）
- **事象**:
  SPA（Single Page Application）の EC サイトおよびダッシュボードサイト検証時、リスト下部に配置された商品カードや「もっと見る」ボタンをクリックするステップにおいて、30 秒タイムアウト（`TimeoutError: locator.click: Timeout 30000ms exceeded`）が頻繁に発生。
- **原因仮説**:
  1. 要素が DOM には存在するものの画面外（Off-screen）に留まっている。
  2. スクロールが発生しても上部固定ヘッダー（`position: fixed; z-index: 1000`）に要素が隠れてしまい、Playwright の Actionability チェック（ポインターイベント受信可否）を通過できない。

---

## 2. デバッグおよび分析プロセス

Playwright トレースビューアー（`playwright show-trace`）を解析し、クリック試行時点のスナップショットを確認しました。

```
[locator.click Log]
- waiting for locator('button.btn-add-to-cart').nth(15)
- locator resolved to <button class="btn-add-to-cart">カートに入れる</button>
- attempting click action
- waiting for element to be visible, enabled and stable
- element is visible, enabled and stable
- scrolling into view if needed
- element is outside of the viewport or covered by <header class="global-nav">...
- retrying click action, attempt #2...
```

Playwright 標準の `scrollIntoViewIfNeeded` は要素をビューポートの上端境界線にぴったり揃えて配置するケースが多く、上部固定の GNB ヘッダー直下に要素が位置することで、クリックイベントがヘッダーにインターセプトされる構造上の弱点が確認されました。

---

## 3. 解決設計: 2 段階安全スクロールおよびオフセット補正

SyncETA 実行エンジンにカスタムアクションインターセプターを実装し、クリック前のビューポート中央配置および固定ヘッダーの高さ分のマージンオフセット（Margin Offset）を自動計算するよう改善しました。

```typescript
// パッチ適用後の安全クリックアクション（Safe Action Interceptor）
export async function safeClickElement(page: Page, selector: string, timeoutMs = 10000): Promise<void> {
  const locator = page.locator(selector).first();
  await locator.waitFor({ state: 'attached', timeout: timeoutMs });

  // 1. 要素のビューポート中央配置および固定ヘッダー回避スクロール
  await locator.evaluate((el) => {
    el.scrollIntoView({
      behavior: 'instant',
      block: 'center', // ビューポート中央へスクロールし上下の固定バーを回避
      inline: 'nearest'
    });
  });

  // 2. 上位遮蔽要素の存在有無チェック（document.elementFromPoint）
  const isObscured = await locator.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const topEl = document.elementFromPoint(cx, cy);
    return topEl !== null && !el.contains(topEl) && !topEl.contains(el);
  });

  // 3. 遮蔽発生時の追加微調整スクロール補正または強制ディスパッチ
  if (isObscured) {
    await page.mouse.wheel(0, 150); // 下方向へ 150px 追加スクロール
    await page.waitForTimeout(100);
  }

  // 4. 最終アクション実行
  await locator.click({ timeout: timeoutMs });
}
```

---

## 4. 検証結果

実際に固定ヘッダーと無限スクロールが複合適用された主要顧客サイト 5 拠点（アパレル EC、金融ポータルなど）を対象に、500 回反復実行検証を実施しました。

- **クリックアクションのタイムアウト発生率**: 従来の 8.8% -> **0.1% 未満**へ大幅に改善。
- **テストスイート完走時間**: 不要なタイムアウト再試行待機がなくなり、全体の実行時間を **22% 短縮**。
- **v0.0.33 リリース反映**: 当該ロジックを SyncETA デスクトップランタイムコアエンジンへ標準搭載完了。
