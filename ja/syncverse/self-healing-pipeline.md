---
title: "自己修復パイプライン（Self-Healing Pipeline）"
sidebarTitle: "自己修復"
description: "SyncETAの無人QAテストで不具合が検出された際、クラスターサーバーログを収集・分析し、コーディングエージェントがコードを自動修正して検証する自己修復（Self-Healing）ループについて説明します。"
head:
  - - meta
    - name: keywords
      content: SyncVerse, 自己修復, Self-Healing, SyncETA, Antigravity SDK, 分散ログ分析, 無人デバッグ, リグレッションテスト, サーキットブレーカー
  - - meta
    - property: og:title
      content: "SyncVerse: 自己修復パイプライン（Self-Healing Pipeline）"
  - - meta
    - property: og:description
      content: "テスト失敗時にクラスターログを収集してコードを修正する自動化された自己修復ループ"
sort: 5
---

# 自己修復パイプライン（Self-Healing Pipeline）

従来のソフトウェア開発では、QAフェーズで不具合が検出されると、**[開発者の呼び出し $\rightarrow$ ログの手動収集 $\rightarrow$ ローカルデバッグ $\rightarrow$ コードの再修正 $\rightarrow$ 再ビルド $\rightarrow$ 再デプロイ]**へと続く手順が必要でした。

SyncVerseの**自己修復パイプライン（Self-Healing Pipeline）**は、このプロセスをエージェント間のA2A連携によって自動化し、処理時間を大幅に短縮します。

---

## 1. 自己修復の4段階ループ（The Self-Healing Loop）

```mermaid
sequenceDiagram
    autonumber
    participant SDK as SyncSDK (コーディングエージェント)
    participant ETA as SyncETA (QAエージェント)
    participant Log as Kubernetes/Docker Cluster Log
    participant Heal as Self-Healing Supervisor
    participant HITL as アーキテクト承認コンソール

    SDK->>ETA: 作業ブランチのコードビルドおよびStage環境へのデプロイ完了
    ETA->>ETA: E2E機能およびAPIリグレッションテスト実行
    ETA-->>Heal: テスト失敗検知 (HTTP 500: NullPointerException)
    Note over Heal: 自己修復ループ起動 (Loop 1/3)
    Heal->>Log: 失敗時点のクラスター分散ログおよびスタックトレース収集
    Log-->>Heal: エラーログペイロード返却
    Heal->>SDK: [エラー原因 + スタックトレース + コード位置] を伝達し再修正を指示
    SDK->>SDK: コードパッチ生成 (Null-Safe防御ロジック追加)
    SDK->>ETA: パッチ適用済みコードの再デプロイおよびリグレッション再実行
    ETA-->>Heal: QA検証完了 (0 Failures, All Passed)
    Heal->>HITL: 自己修復タイムラインレポートおよび最終承認リクエスト
```

---

## 2. 詳細な動作メカニズム

### 1) 不具合の検知および異常兆候の捕捉（SyncETA）
SyncETAエージェントがStage環境にデプロイされたアプリケーションを対象に、API単体テストおよびUIシナリオE2Eテストを実行します。アサーション（Assertion）の失敗またはHTTP 5xx応答が検知されると、直ちに`Self-Healing Supervisor`エージェントへ障害イベントを発行します。

### 2) クラスター分散ログの自動収集（Log Harvester）
`Self-Healing Supervisor`は、コンテナクラスター（Docker/Kubernetes/Spring Boot Logback）からエラーが発生したトランザクションID（Trace-Id）に関連するすべてのログを抽出します。

```json
{
  "traceId": "trace-77a8-4c12-9901",
  "errorType": "java.lang.NullPointerException",
  "exceptionMessage": "Cannot invoke \"String.trim()\" because \"userCoupon.getCouponCode()\" is null",
  "culpritClass": "com.empasy.syncshop.service.CouponService",
  "culpritLine": 142,
  "stackTraceSnippet": "at com.empasy.syncshop.service.CouponService.applyCoupon(CouponService.java:142)..."
}
```

### 3) 原因分析およびSDKによるコード再修正（SyncSDK）
コーディングエージェントは、元のソースコード、失敗したテストケース、および収集されたログのスタックトレースを統合してバグの原因を分析し、防御コードを作成します。

```diff
// CouponService.java 修正例
- if (userCoupon.getCouponCode().trim().isEmpty()) {
+ if (userCoupon.getCouponCode() == null || userCoupon.getCouponCode().trim().isEmpty()) {
      throw new BusinessException(ErrorCode.INVALID_COUPON_CODE);
  }
```

### 4) 回帰検証および安全終了
修正されたコードを再度ビルドしてSyncETAへ渡します。SyncETAは失敗したテストだけでなくリグレッションテストスイート全体を再実行し、他の機能に副作用（Side-effect）がないことを検証します。

---

## 3. 無限ループ防止および安全装置（Safety Rails）

自己修復プロセスが繰り返されてトークンやサーバーリソースが不必要に消費されるのを防ぐため、以下のポリシーを適用します。

- **最大リトライ回数（Max Retry Limit）**: デフォルトで**最大3回**に制限。3回以内に解決されない場合は直ちにサーキットブレーカーが作動し、担当開発者へエスカレーションされます。
- **サーキットブレーカー（Circuit Breaker）**: 同一のエラーが2回連続して同じパターンで修正に失敗した場合、直ちに作業を中断します。
- **監査タイムラインの可視化**: 自己修復が発生した全プロセス（ログ $\rightarrow$ Diff $\rightarrow$ テスト結果）を管理者画面にタイムライン形式で詳細に記録します。
