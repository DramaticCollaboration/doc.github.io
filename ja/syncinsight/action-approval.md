---
title: "自律アクション承認およびWhat-Ifシミュレーター"
sort: 3
description: "AIが提案したビジネス戦略を事前にシミュレーションし、管理者の承認（HITL）を経て下位エージェント（SyncCMS、SyncShop）へ安全に伝達するアクション実行基盤について説明します。"
head:
  - - meta
    - name: keywords
      content: アクション承認センター, Human-in-the-Loop, HITL, What-Ifシミュレーター, Before vs After, ワークフロービルダー, SyncVerse連携, トランザクションロールバック, Action Dispatcher, ビジネス自動化
  - - meta
    - property: og:title
      content: "SyncInsight 自律アクション承認およびWhat-Ifシミュレーター | Empasy"
  - - meta
    - property: og:description
      content: "提案戦略の事前影響度検証と管理者承認に基づく安全な実行（HITL）パイプライン"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncinsight/action-approval
---

# 自律アクション承認およびWhat-Ifシミュレーター (Action Approval & Simulation)

データ分析の結果を実務へ適用するために、SyncInsightは**実行可能なアクションプランを導出**し、**事前シミュレーション（What-If）**によって検証したうえで、**管理者の承認を経て対象システムへ反映する（HITL Execution）**ワークフローを提供します。

---

## 1. 管理者参加型（HITL）アクション承認センター (SI-009)

運用の安定性を確保するため、SyncInsightは重要なシステム変更時に**管理者承認（Human-in-the-Loop）**の手順を経るように設計されています。

```mermaid
flowchart LR
    A[分析エンジン] -->|アクション提案生成| B["アクション待機キュー<br/>(Pending Actions)"]
    B --> C{管理者による検討および承認}
    C -->|承認 Approve| D[MCPアクションディスパッチャー]
    C -->|"差し戻し / 補完 Reject"| E[フィードバック反映および戦略補正]
    D --> F[SyncVerse連携ゲートウェイ]
    F --> G1[SyncCMSバナー登録]
    F --> G2[SyncShopクーポン作成]
    F --> G3[SyncBootポリシー適用]
```

### 1.1. アクション承認カードの主な検討項目
* **Before vs After 比較**: 現在の設定値と変更後の設定値を並べて比較表示します。
* **リスクレベル (Risk Level)**:
  - `LOW`: 参照処理、単純なUI文言の変更
  - `MEDIUM`: ターゲティングバナーの公開、クーポン作成
  - `HIGH`: 全社価格ポリシーの変更、DBスキーマの修正（複数名による承認が必要）
* **期待効果 (Expected Lift)**: 注文コンバージョン率の変動幅、予想コスト削減額などの定量的な推定値を提示します。
* **ロールバック対応可否 (Rollback Support)**: 実行後に異常が発生した場合、元の状態へ復旧できる補償処理が定義されているかを明示します。

---

## 2. What-Ifシミュレーター (SI-010)

実際のシステムへ反映する前に、主要パラメータを変更して予想される指標の推移を事前にシミュレーションします。

```mermaid
graph TD
    A[変数パラメータ操作] --> B[シミュレーション計算モデル]
    A1["割引率: 10% -> 20%"] --> B
    A2["予算: 500万ウォン -> 800万ウォン"] --> B
    A3["対象群: 全体 -> 特定セグメント"] --> B
    B --> C[予想売上およびマージン曲線の算出]
    C --> D[シナリオ別比較チャートの表示]
```

* **パラメータスライダー**: 割引率、対象母数、プロモーション予算などを調整し、予想推移グラフをリアルタイムで再計算します。
* **シナリオ比較 (Scenario Comparison)**: 基本シナリオ、楽観シナリオ、保守シナリオを1つの画面上で比較検討できます。

---

## 3. ワークフロービルダー (SI-011)

多段階の業務パイプラインをノード（Node）接続方式で構成し、自動化できます。

```mermaid
graph LR
    N1[トラフィック異常検知ノード] --> N2[SyncCrawl競合他社価格収集]
    N2 --> N3[SyncInsight価格調整提案]
    N3 --> N4{管理者検討}
    N4 -->|承認| N5[SyncCMS価格表更新]
    N4 -->|差し戻し| N6[担当者へ通知送信]
```

* **データフロー監視**: ノード間のデータ受け渡し状況を視覚的に確認します。
* **段階別テスト**: 各ノードの入出力データを個別にテストおよびデバッグできます。

---

## 4. 緊急停止およびセーフガード

システム異常発生時にアクション実行を中断し、復旧できる安全管理機能を提供します。

1. **グローバル緊急停止 (Kill Switch)**: 緊急停止機能を有効にすると、待機中のすべての外部連携アクションが一時停止されます。
2. **履歴に基づく復旧 (Revert Action)**: アクション実行履歴画面から復旧機能を実行し、以前の設定状態へ戻すことができます。
3. **負荷ベースの遮断 (Load-based Throttling)**: サーバーリソースの負荷がしきい値を超過した場合、新規アクションリクエストをキューに保留します。
