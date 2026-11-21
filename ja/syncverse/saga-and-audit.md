---
title: "Saga分散トランザクション & 全社監査証跡"
sidebarTitle: "分散トランザクション"
description: "マルチエージェントとマイクロサービスにまたがる複合処理の原子性を保証するSaga分散トランザクションオーケストレーションおよび補償ロールバック、全社A2A通信の全数監査証跡（Audit Trail）システムについて説明します。"
head:
  - - meta
    - name: keywords
      content: SyncVerse, Saga Pattern, 分散トランザクション, 補償トランザクション, ロールバック, Audit Trail, 監査証跡, コンプライアンス, 状態永続化
  - - meta
    - property: og:title
      content: "SyncVerse: Saga分散トランザクション & 全社監査証跡"
  - - meta
    - property: og:description
      content: "マルチシステム間のデータ整合性を体系的に保証する分散Sagaトランザクションとコンプライアンス監査証跡"
sort: 8
---

# Saga分散トランザクション & 全社監査証跡

マルチエージェント環境では、1つのユーザー指示が複数のシステム（`SyncBoot`、`SyncCMS`、`SyncShop`など）のAPIを連続して呼び出します。このとき、中間ステップでエラーが発生すると**一部のシステムにのみデータが反映され、データの不整合（Data Inconsistency）が発生する**可能性があります。

SyncVerseは、**Sagaオーケストレーションパターン**と**全数監査証跡（Audit Trail）**によってシステムのデータ整合性とコンプライアンスの信頼性を管理します。

---

## 1. Saga分散トランザクションおよび補償ロールバックメカニズム

SyncVerseの中央オーケストレーターは、作業チェーンを段階的なトランザクションとして定義し、各ステップに対応する**補償トランザクション（Compensating Transaction）**を事前に登録します。

```mermaid
sequenceDiagram
    autonumber
    participant Verse as SyncVerse Saga Coordinator
    participant CMS as SyncCMS (コンテンツ)
    participant Shop as SyncShop (商品)
    participant Pay as 決済ゲートウェイ

    Note over Verse: トランザクション開始 (Tx-9941)
    Verse->>CMS: 1. プロモーションページ登録 (成功)
    CMS-->>Verse: OK (PageId: 101)
    Verse->>Shop: 2. プロモーション特価商品登録 (成功)
    Shop-->>Verse: OK (ItemId: 505)
    Verse->>Pay: 3. 決済割引ルール連携 (失敗: Timeout)
    Pay-->>Verse: Error (504 Gateway Timeout)

    Note over Verse: 障害検知時に補償トランザクション (ロールバック) を起動
    Verse->>Shop: 4. [補償] 商品登録取消 (ItemId: 505 削除)
    Shop-->>Verse: Rollback OK
    Verse->>CMS: 5. [補償] プロモーションページ無効化
    CMS-->>Verse: Rollback OK
    Note over Verse: システム原状回復完了およびエラーレポート発行
```

---

## 2. 作業状態（State）の永続化と障害復旧

オーケストレーション中にサーバーが不意に再起動したりネットワークが切断されたりしても作業状態が失われないよう、**Redis ClusterおよびPostgreSQL**にトランザクションスナップショットを永続化します。

- **State Machineの永続化**: `PENDING` $\rightarrow$ `EXECUTING` $\rightarrow$ `COMPENSATED` $\rightarrow$ `COMMITTED`
- **冪等性（Idempotency）の保証**: すべてのエージェントツール呼び出しに一意の`Idempotency-Key`を付与し、重複実行を防止
- **タイムアウト & サーキットブレーカー**: 個別ツール呼び出しの遅延時に自動タイムアウト処理を行い、ロールバック経路へ遷移

---

## 3. 全社A2A監査証跡（Audit Trail & Compliance）

セキュリティ規制の遵守に向けて、システム内で発生したすべてのアクティビティを監査ログとして記録します。

```json
{
  "auditId": "audit-20260823-0091",
  "timestamp": "2026-08-23T07:15:00Z",
  "actor": {
    "type": "USER",
    "userId": "architect_kim",
    "ipAddress": "10.0.12.44"
  },
  "action": "HITL_APPROVE_DEPLOYMENT",
  "targetService": "syncboot-product-api",
  "changes": {
    "commitHash": "a7b8c9d",
    "ddlExecuted": "ALTER TABLE tb_product ADD COLUMN discount_rate NUMERIC(5,2);",
    "approverOtpVerified": true
  },
  "subAgentTraces": [
    {
      "agent": "IntentRouterAgent",
      "model": "gpt-4o-mini",
      "tokensUsed": 340
    },
    {
      "agent": "SyncSDKCodingAgent",
      "model": "claude-3-5-sonnet",
      "tokensUsed": 2150
    }
  ]
}
```

### 監査コンソールで照会可能な情報：
1. **指示者および承認者の情報・IP**: どのユーザーが作業を指示し、本番デプロイを承認したか
2. **エージェント別のプロンプトおよびツール呼び出し全数記録**: エージェントがどのような判断を下し、どのようなパラメーターでツールを実行したか
3. **トークン消費量および所要時間**: 各ステップ別のコストおよびレイテンシ
