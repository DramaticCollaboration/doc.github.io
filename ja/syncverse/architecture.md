---
title: "4-Tier自律エージェント連携アーキテクチャおよびA2A通信"
sidebarTitle: "システムアーキテクチャ"
description: "SyncVerseのL1（ドメインワーカー）、L2（中央コントロールタワー）、L3（全社意思決定）の階層構造と、標準MCPベースのAgent-to-Agent（A2A）通信メカニズムを詳細に解説します。"
head:
  - - meta
    - name: keywords
      content: SyncVerse, マルチエージェントアーキテクチャ, 3-Layer, Swarm, A2A, MCP, JSON-RPC, AgentScope Java, Vue Flow, 分散オーケストレーション
  - - meta
    - property: og:title
      content: "SyncVerse: 4-Tier自律エージェント連携アーキテクチャおよびA2A通信"
  - - meta
    - property: og:description
      content: "L1-L2-L3階層型エージェント構造と標準MCPプロトコルに基づく自律運用アーキテクチャ仕様"
sort: 2
---

# 4-Tier自律エージェント連携アーキテクチャおよびA2A通信

SyncVerseは、複雑なエンタープライズシステムを体系的に運用するため、**4-Tier自律エージェント連携アーキテクチャ**と**標準MCP（Model Context Protocol）ベースのAgent-to-Agent（A2A）通信網**を採用しています。

---

## 1. 4-Tier自律エージェント連携の階層構造

エージェント間の責任と権限を各階層で明確に分離することで、単一障害点（SPOF）を防止し、セキュリティと実行の信頼性を確保します。

```mermaid
flowchart TD
    subgraph L3 ["Layer 3: Enterprise Strategy & Governance (全社意思決定)"]
        SyncInsight["SyncInsight Agent (ビジネスインテリジェンス＆意思決定)"]
    end

    subgraph L2 ["Layer 2: Central Control Tower (中央制御 - SyncVerse)"]
        Router["01 Intent Router Agent<br/>(自然言語意図分析)"]
        Orchestrator["02 Swarm Orchestrator Agent<br/>(A2Aタスク分散)"]
        Dispatcher["03 Coding Dispatcher Agent<br/>(SDKコーディング制御)"]
        SelfHeal["04 Self-Healing Supervisor<br/>(ログ分析＆自己修復)"]
        FinOps["05 FinOps Gateway Agent<br/>(コスト＆モデル最適化)"]
    end

    subgraph L1 ["Layer 1: Domain Worker Agents (下位ドメインワーカー)"]
        SyncBoot["SyncBoot Agent<br/>(バックエンドインフラ/API)"]
        SyncCMS["SyncCMS Agent<br/>(コンテンツ/ビューレンダリング)"]
        SyncShop["SyncShop Agent<br/>(EC/注文決済)"]
        SyncETA["SyncETA Agent<br/>(無人E2E QA検証)"]
        SyncCrawl["SyncCrawl Agent<br/>(インテリジェントクローラー)"]
        SyncSDK["SyncSDK Coding Agent<br/>(Antigravity SWE)"]
    end

    SyncInsight -->|全社KPIおよび戦略的指示| Router
    Router --> Orchestrator
    Orchestrator --> Dispatcher
    Orchestrator --> SelfHeal
    Orchestrator --> FinOps

    Orchestrator <-->|"MCP REST/SSE"| SyncBoot
    Orchestrator <-->|"MCP REST/SSE"| SyncCMS
    Orchestrator <-->|"MCP REST/SSE"| SyncShop
    Orchestrator <-->|"MCP REST/SSE"| SyncETA
    Orchestrator <-->|"MCP REST/SSE"| SyncCrawl
    Dispatcher <-->|SWE Protocol| SyncSDK
```

### 階層別の詳細ロール

1. **Layer 3: 全社ガバナンスおよび戦略的意思決定（Strategic Layer）**
   - **主要エージェント**: `SyncInsight Agent`
   - **役割**: 全社ビジネスメトリクス、トラフィック変化、マーケティングデータを分析し、上位レベルの運用戦略およびアクションプランをLayer 2コントロールタワーへ伝達します。

2. **Layer 2: 中央コントロールタワーおよびオーケストレーション（Control Tower Layer - SyncVerse）**
   - **主要エージェント**: `Intent Router`, `Swarm Orchestrator`, `Coding Dispatcher`, `Self-Healing Supervisor`, `FinOps Gateway`
   - **役割**: 自然言語の要件を具体的なシステムアクションプランへ変換し、下位ワーカーエージェント間の依存関係や順次・並列作業を調整するとともに、トランザクションとコストを管理します。

3. **Layer 1: ドメイン特化ワーカーエージェント（Domain Worker Layer）**
   - **主要エージェント**: `SyncBoot`, `SyncCMS`, `SyncShop`, `SyncETA`, `SyncCrawl`, `SyncSDK`
   - **役割**: 各ドメインのコアビジネスロジック（DB CRUD、ページレンダリング、注文処理、無人QAテスト、コード修正など）を直接実行します。

---

## 2. A2A通信プロトコル（Model Context Protocol）

SyncVerse内のすべてのエージェント間通信は、標準の**REST API (`/api/v1/*`)**および**MCP（Model Context Protocol）SSE**ストリーミング仕様に基づいて動作します。

### 通信シーケンス図

```mermaid
sequenceDiagram
    autonumber
    actor Architect as システムアーキテクト
    participant Verse as SyncVerse (L2 Orchestrator)
    participant SDK as SyncSDK (L1 Coding Agent)
    participant ETA as SyncETA (L1 QA Agent)
    participant Boot as SyncBoot (L1 Backend)

    Architect->>Verse: "商品詳細にバッジ表示フィールドを追加してください"
    Verse->>Verse: 意図分析 (Intent Routing: Code Fix)
    Verse->>SDK: tools/call: generate_feature_code (作業ブランチ)
    SDK-->>Verse: ソースコード修正およびDDL生成完了 (Git Diff)
    Verse->>ETA: tools/call: run_regression_test (Stage環境)
    ETA-->>Verse: QA検証完了 (0 Failures, All Passed)
    Verse->>Architect: HITLレビュー依頼 (コードDiff＆DDL変更案)
    Architect->>Verse: 承認 (Approve)
    Verse->>Boot: tools/call: apply_migration_and_deploy
    Boot-->>Verse: 無停止本番デプロイ完了
    Verse-->>Architect: "デプロイ完了、サービス正常稼働中"
```

### 標準MCPリクエスト/レスポンスペイロード仕様

#### エージェントツール呼び出しリクエスト（Request Payload）
```json
{
  "jsonrpc": "2.0",
  "id": "req-syncverse-98213",
  "method": "tools/call",
  "params": {
    "name": "syncboot_apply_migration",
    "arguments": {
      "targetService": "product-service",
      "ddlScript": "ALTER TABLE tb_product ADD COLUMN badge_type VARCHAR(20) DEFAULT 'NONE';",
      "safeMode": true,
      "timeoutSeconds": 30
    }
  }
}
```

#### エージェント実行結果レスポンス（Response Payload）
```json
{
  "jsonrpc": "2.0",
  "id": "req-syncverse-98213",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Migration successfully applied. 0 rows affected. DDL lock released."
      }
    ],
    "isError": false,
    "metadata": {
      "executionTimeMs": 142,
      "affectedTables": ["tb_product"]
    }
  }
}
```

---

## 3. 技術スタックおよびランタイムアーキテクチャ

SyncVerseは、エンタープライズ環境の大規模トラフィックと無停止運用を支援するため、以下の技術スタックを採用しています。

| 階層 | 技術スタック | 導入目的 |
| :--- | :--- | :--- |
| **Backend Core** | Java 25, Spring Boot 4.0 | エンタープライズランタイム、仮想スレッド（Virtual Threads）、トランザクション管理 |
| **AI Framework** | **AgentScope Java** (`io.agentscope:agentscope-harness`) | 全社標準AIフレームワーク、マルチエージェント協調MsgHub、ReActAgent自律Tool実行 |
| **Frontend UI** | Vue 3, TypeScript, Vite, **Vue Flow** | ノード・エッジのトポロジー可視化、管制ダッシュボード |
| **State & Cache** | Redis 7.x (Cluster) | エージェントリアルタイム状態共有、セマンティックキャッシング、分散ロック |
| **Database** | PostgreSQL 18.6 (`pgvector`) | RDBMSデータ整合性、JSONB監査ログおよびベクトル埋め込みの永続化 |
| **Infrastructure** | Docker, Kubernetes, GitHub Actions | コンテナベースの隔離実行、CI/CDデプロイパイプライン |

---

## 4. AdminサーバーおよびMCPサーバーの役割分離（0ms起動遅延の保証）

SyncSeries配下のすべてのサブプロジェクトは、管理画面を担当するAdminサーバーと、エージェント協調ツールを提供するMCPサーバーの責務を厳密に分離して運用します。

```mermaid
graph TD
    subgraph AdminRuntime ["Adminサーバー (sync-*-admin)"]
        UI["管理画面API提供"]
        Auth["認証/認可およびユーザー管理"]
        Block["self-registration.enabled: false<br/>(中央登録試行の遮断)"]
    end

    subgraph McpRuntime ["MCPサーバー (sync-*-mcp-server)"]
        ToolRegistry["ツールレジストリ (REST / MCP SSE)"]
        AsyncReg["非同期自己登録クライアント<br/>(CompletableFuture.runAsync)"]
        Timeout["3秒 Connect/Read タイムアウト"]
    end

    subgraph CenterTower ["SyncVerse 中央コントロールタワー"]
        RegEndpoint["POST /api/v1/verse/agents/register"]
    end

    AsyncReg -.->|オフライン時でも起動遅延0msを保証| RegEndpoint
```

1. **AdminサーバーのSyncVerse依存性の事前遮断**:
   * 各サービスのAdminサーバーは画面レンダリングおよびビジネスREST APIの提供に専念し、`self-registration.enabled: false` 設定によって不要なコントロールタワー登録試行を遮断します。
2. **MCPサーバーの非同期自己登録およびタイムアウト**:
   * MCPサーバー起動時に `AgentSelfRegistrationClient` が `CompletableFuture.runAsync` バックグラウンドスレッドで登録処理を実行します。
   * `SimpleClientHttpRequestFactory` ベースの3秒接続/読み取りタイムアウトを強制することで、SyncVerseコントロールタワーが停止中または未起動の場合でもメインプロセスをブロックせず、0ms遅延で即座に起動します。
