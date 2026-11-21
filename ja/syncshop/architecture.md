---
title: "SyncShop: システムおよびAIエージェントアーキテクチャ"
sidebarTitle: "システムアーキテクチャ"
description: "SyncShopのHeadless分離構造、MSAバックエンド設計、AgentScope JavaベースのエージェントスウォームおよびA2A通信パイプライン仕様"
head:
  - - meta
    - name: keywords
      content: SyncShop, Headless Commerce, AgentScope Java, A2A, MCP, エージェントスウォーム, ダイナミックプライシング, Spring Boot 4.0
sort: 2
---

# システムおよびAIエージェントアーキテクチャ

SyncShopは、フロントエンドとバックエンドの完全な分離を保証する**Headlessアーキテクチャ**と、自律的なコマース運用のための**AgentScope Javaベースのマルチエージェントスウォーム**を採用しています。

---

## 1. 全社システム階層構造

```mermaid
flowchart TD
    subgraph ClientLayer ["フロントエンド表現層 (Headless Clients)"]
        WebAdmin["SyncShop Admin<br/>(Vue 3 + Vite)"]
        MobileApp["Mobile App<br/>(Uni-App / Native)"]
        ThirdParty["外部コマースチャネル<br/>(オープンマーケット / ソーシャルコマース)"]
    end

    subgraph ServiceLayer ["バックエンドビジネスロジック (Core Backend)"]
        AdminServer["sync-shop-admin<br/>(Spring Boot 4.0 / MyBatis)"]
        PMS["商品管理<br/>(PMS Engine)"]
        OMS["注文・配送<br/>(OMS Engine)"]
        SMS["プロモーション<br/>(SMS Engine)"]
        AdminServer --- PMS
        AdminServer --- OMS
        AdminServer --- SMS
    end

    subgraph AgentLayer ["自律コマースエージェント (Commerce Swarm)"]
        McpServer["sync-shop-mcp-server<br/>(AgentScope Java)"]
        PricingAgent["Pricing Optimizer Agent<br/>(価格・マージン最適化)"]
        SafeguardAgent["Margin Safeguard Agent<br/>(逆ザヤの根本防御)"]
        ExecAgent["Snapshot & Exec Agent<br/>(スナップショット保存およびDB反映)"]
        McpServer --- PricingAgent
        McpServer --- SafeguardAgent
        McpServer --- ExecAgent
    end

    subgraph ControlTower ["全社中央管制 (SyncSeries Orchestrator)"]
        SyncVerse["SyncVerse Control Tower<br/>(A2Aメッセージバス & HITL承認)"]
    end

    ClientLayer -->|"RESTful API / JWT"| AdminServer
    SyncVerse <-->|"MCP JSON-RPC / SSE"| McpServer
    McpServer -->|内部サービスバインディング| AdminServer
```

---

## 2. コマース内部エージェントスウォーム (Intra-Agent Commerce Swarm)

SyncShopエージェントサーバーは、単一のLLM呼び出しではなく、細分化された3段階のエージェントスウォーム構造によって安全な自律運用を実行します。

1. **Pricing Optimizer Agent（価格分析エージェント）**:
   * カテゴリ別の在庫回転率、売上推移、競合他社の価格データを分析し、最適な割引率と調整目標価格を算出します。
2. **Margin Safeguard Agent（マージン保護エージェント）**:
   * 算出された価格が商品別の原価（Cost Price）および最低マージン率基準に違反していないかを全数検証します。
   * 逆ザヤのリスクを検知した場合は即座に処理を遮断し、警告事由を記録します。
3. **Snapshot & Execution Agent（スナップショットおよび実行エージェント）**:
   * DB反映の直前に、元の価格状態をスナップショット（`TB_SHOP_PRICE_SNAPSHOT`）として保存します。
   * `pms_product`テーブルにトランザクションを適用し、変更結果を管制塔へ報告します。

---

## 3. ダイナミックプライシングおよび無損失ロールバックシーケンス

```mermaid
sequenceDiagram
    autonumber
    actor Admin as 運用者 / 管制塔
    participant Verse as SyncVerse (L2)
    participant ShopMcp as SyncShop MCP Server
    participant Swarm as Swarm (Safeguard)
    participant DB as PostgreSQL 18.6 (pgvector)

    Admin->>Verse: "冬物アウターカテゴリに10%一括割引を適用"
    Verse->>ShopMcp: tools/call: shop_batch_price_update
    ShopMcp->>Swarm: 価格シミュレーションおよびマージン検証をリクエスト
    Swarm-->>ShopMcp: 検証通過 (マージン異常なし)
    ShopMcp->>DB: 現在の価格状態スナップショットを保存 (snapshot_id 発行)
    ShopMcp->>DB: pms_product 一括価格更新
    ShopMcp-->>Verse: 結果を返却 (変更42件、snapshot_id: SNP-202609-001)

    opt 異常検知時の即時ロールバック
        Admin->>Verse: "価格割引を緊急取り消し (ロールバック)"
        Verse->>ShopMcp: tools/call: shop_batch_price_update (action: ROLLBACK_PRICE)
        ShopMcp->>DB: snapshot_id に基づき元の価格を復元
        ShopMcp-->>Verse: ロールバック完了報告
    end
```

---

## 4. セキュリティおよびトランザクション整合性

* **A2Aインバウンドセキュリティ**: `A2ASessionKeyHolder`による秘密鍵およびインバウンドトークンの検証を通じて、未認可エージェントからの制御リクエストを事前に遮断します。
* **Sagaパターンによる一貫性**: 作業単位ごとに固有の`task_id`を追跡し、連携失敗時には補償トランザクションを通じて直前の一貫性状態を維持します。
* **Zero-Mock原則**: すべてのツール呼び出しはインメモリのダミーデータを排除し、実際の永続データベースと100%連携します。
