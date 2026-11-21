---
title: HITL ガバナンス & Saga 分散トランザクション
shortTitle: HITL & Saga ガバナンス
category: ガバナンス
sort: 5
description: システムの安全性を保証する Human-in-the-Loop (HITL) 3段階承認ランクと Saga パターンに基づく分散トランザクション補償復旧の仕組み
---

# HITL ガバナンス & Saga 分散トランザクション

## 1. エンタープライズ安全原則

自律運用 AI エコシステムにおいて最も警戒すべきリスクは、**予期せぬ副作用 (Side Effect) とデータ汚染** です。  
SyncSeries は自律性を最大化しつつリスクを体系的に統制するため、**3段階 HITL 安全ランク (Safety Tiers)** と **Saga 補償トランザクションパターン** を全社標準として運用しています。

---

## 2. 3段階 HITL 安全承認ランク (Safety Tiers)

すべての MCP ツール呼び出しは、リスク度合いに応じて 3つのランクへ自動的に分類されます。

```mermaid
flowchart TD
    Req[エージェントアクション要求] --> Eval{リスク評価}
    Eval -->|"Tier 1: Read-Only"| Auto["Tier 1: 完全自律実行<br/>照会、統計収集、仮想シミュレーション"]
    Eval -->|"Tier 2: Soft Mutation"| Notify["Tier 2: 事後通知型実行<br/>一時保存、キャッシュ更新、ステージングデプロイ"]
    Eval -->|"Tier 3: Hard Mutation"| Gate["Tier 3: 事前承認ゲート<br/>DB DDL/DML、決済ポリシー変更、本番デプロイ"]

    Gate --> AdminDecision{管理者承認?}
    AdminDecision -->|"承認 (Approve)"| Exec["本番実行 & WORM 監査台帳記録"]
    AdminDecision -->|"却下 (Reject)"| Rollback[アクション破棄・原状維持]
```

| ランク | リスクレベル | 対象作業の例 | 承認ポリシー |
|:---|:---|:---|:---|
| **Tier 1 (Safe)** | 無害 (Read-Only) | 統計照会、ログ検索、What-If シミュレーション、RAG ドキュメント探索 | **待機なしの即時自律実行 (Zero-Wait)** |
| **Tier 2 (Low Risk)** | 軽微 (Soft Mutation) | ステージングコンテンツ登録、開発サーバーブランチ作成、一時ファイル整理 | **事後通知** (Slack/通知センター) |
| **Tier 3 (High Risk)** | 破壊的 (Hard Mutation) | DB DDL マイグレーション、会員権限昇格、決済/割引ポリシー変更 | **事前管理者承認必須** (HITL Gate) |

---

## 3. Saga パターン分散トランザクションおよび補償 (Compensation) 復旧

マイクロサービス環境において複数のドメインエージェントにまたがる複合処理の途中で一部ステップが失敗した場合、システムを正常な状態へ安全にロールバックするために **Orchestrated Saga パターン** を適用します。

```mermaid
sequenceDiagram
    autonumber
    participant SV as SyncVerse (Saga Coordinator)
    participant SB as SyncBoot
    participant SCMS as SyncCMS
    participant SETA as SyncETA

    SV->>SB: Tx 1: DB スキーマ生成
    SB-->>SV: 成功 (T1 コミット)
    
    SV->>SCMS: Tx 2: ランディングページ公開
    SCMS-->>SV: 成功 (T2 コミット)
    
    SV->>SETA: Tx 3: 決済回帰検証
    SETA-->>SV: 失敗! (障害発生、T3 失敗)
    
    Note over SV: [Saga 補償パイプラインをトリガー]
    SV->>SCMS: Comp 2: ランディングページ非公開化 (C2)
    SCMS-->>SV: ロールバック完了
    
    SV->>SB: Comp 1: DB スキーマロールバックマイグレーション (C1)
    SB-->>SV: ロールバック完了
    
    Note over SV: Saga 補償トランザクションによる結果整合性 (Eventual Consistency) の確保
```

### 3.1 冪等性 (Idempotency) の保証
- すべての補償アクションは **Idempotency Key** を含んでおり、ネットワークリトライや重複呼び出しが発生してもシステム状態に不整合が生じないよう設計されています。
- 失敗原因と補償トランザクションの実行結果は、`RFC 7807 Problem Details` 標準規格で管制ログに透明性をもって記録されます。
