---
title: システムアーキテクチャおよび Clean Architecture | SyncCMS
description: SyncCMS のエンタープライズ Clean Architecture 4階層構成と Spring Boot 4.0、AgentScope Java、Nuxt 3 技術スタックおよびデータ処理パイプラインについて説明します。
head:
  - - meta
    - name: keywords
      content: SyncCMS アーキテクチャ, Clean Architecture, Spring Boot 4.0, AgentScope Java, Nuxt 3, Vue 3, PostgreSQL JSONB, Redis, Quartz, オンプレミス AI
  - - meta
    - property: og:title
      content: システムアーキテクチャおよび Clean Architecture | SyncCMS
  - - meta
    - property: og:description
      content: エンタープライズ Clean Architecture 4階層構成と Spring Boot 4.0、AgentScope Java、Nuxt 3 技術スタック
sort: 2
---

# SyncCMS システムアーキテクチャ

SyncCMS は大規模トラフィックの処理とエンタープライズ環境における拡張性を保証するため、**Clean Architecture 4階層構造** で設計されています。

---

## 4階層アーキテクチャダイアグラム

```mermaid
graph TD
    subgraph "1. プレゼンテーションおよびサービス配信層 (Presentation Layer)"
        UI1["ユーザー Web ポータル (Nuxt 3 / Vue 3 SSR)"]
        UI2["管理コンソール (Vue 3 / Vite)"]
        UI3["モバイルアプリおよび外部チャネル (iOS / Android / Next.js)"]
        UI4["Sync-Live-SDK インラインエディタ"]
    end

    subgraph "2. API ゲートウェイおよびセキュリティ認証層 (Security Layer)"
        GW["REST API Controller & Rate Limiter"]
        SSO["JWT ステートレス認証 & 社内 SSO 連携"]
        RBAC["多階層 RBAC きめ細かな権限制御"]
        AUDIT["改ざん防止監査ログエンジン"]
    end

    subgraph "3. コアフレームワーク層 (Core Layer)"
        CTRL["ビジネスサービスロジック (Spring Boot 4.0)"]
        AS["AgentScope Java AI オーケストレーションエンジン"]
        ENG["スナップショットバージョン管理およびロールバックエンジン"]
        SCHED["Quartz ベース動的スケジューラ"]
    end

    subgraph "4. データおよびインフラ層 (Data & Infra Layer)"
        RDB[("RDBMS (PostgreSQL 18.6 JSONB / pgvector)")]
        VEC[("Vector DB (PGVector 社内ナレッジベース)")]
        CACHE[("Redis 分散キャッシュ & Edge CDN")]
        LLM["社内オンプレミス LLM (vLLM / Ollama)"]
    end

    UI1 & UI2 & UI3 & UI4 --> GW
    GW --> SSO & RBAC & AUDIT
    SSO & RBAC --> CTRL
    CTRL --> AS & ENG & SCHED
    CTRL --> RDB
    AS --> VEC & LLM
    ENG --> CACHE
```

---

## 階層別詳細技術仕様

### 1. プレゼンテーションおよびサービス配信層 (Presentation Layer)
- **ユーザー Web (Nuxt 3)**: SSR（Server-Side Rendering）ベースでバックエンド API から受け取ったコンポーネントツリーをサーバー側で事前レンダリングし、初期ロード速度と検索エンジン最適化（SEO）を実現します。
- **管理コンソール (Vue 3 / Vite)**: TypeScript と Ant Design をベースに、メニュー管理、UI ブロックレイアウトビルダー、Quartz スケジューラ監視コンソールを提供します。
- **Sync-Live-SDK**: 実際の運用画面上で直接コンテンツを選択して編集できるフロントエンド軽量 SDK です。

### 2. API ゲートウェイおよびセキュリティ認証層 (Security Layer)
- **ステートレス (Stateless) JWT 認証**: 分散サーバー環境においてセッション同期のオーバーヘッドなしに高速処理をサポートします。
- **多階層 RBAC (Role-Based Access Control)**: システム管理者、サイト運用者、コンテンツ作成者、決裁承認者などの役割に応じて、メニューおよび API エンドポイントへのアクセス権限を制御します。
- **監査ロギング (Audit Logging)**: コンテンツの作成、修正、決裁承認、デプロイ、ロールバックなどすべての変更履歴を、ユーザー ID、IP、変更 diff とともに保存します。

### 3. コアフレームワーク層 (Core Layer)
- **Spring Boot 4.0 & Java 25**: 全社標準の Java フレームワークをベースに、安定したトランザクション処理とモジュラーな拡張をサポートします。
- **AgentScope Java AI エンジン (`io.agentscope:agentscope-harness`)**: Java 環境において、オンプレミス LLM 連携、ReActAgent 自律ツール実行、RAG（検索拡張生成）ナレッジベース検索を単一パイプラインで実行します。
- **スナップショットロールバックエンジン**: デプロイ時点のコンテンツ状態をバージョン別スナップショットとして保存し、有事の際には即時のロールバックを実行します。
- **Quartz スケジューラ**: 定期バッチジョブおよび予約公開をリアルタイムで制御します。

### 4. データおよびインフラ層 (Data & Infra Layer)
- **PostgreSQL JSONB ストレージ**: 非定型 UI ブロックデータおよび動的フォームフィールドを JSONB 構造で格納し、GIN インデックスにより高速な照会を保証します。
- **Redis 分散キャッシュ**: 頻繁に呼び出されるヘッドレスコンテンツをキャッシュすることでバックエンド DB の負荷を分散し、レスポンス遅延を最小化します。
- **社内オンプレミス AI インフラ**: 閉域網環境において vLLM または Ollama を通じてオープンウェイトモデルを稼働させます。

---

## 動的ページレンダリングパイプライン

SyncCMS の画面構成は固定のテンプレートファイルではなく、データベースの JSON 構造を通じて柔軟に生成およびレンダリングされます。

```mermaid
sequenceDiagram
    autonumber
    participant Client as ユーザーブラウザ
    participant Nuxt as Nuxt 3 (SSR Server)
    participant API as Spring Boot 4.0 API
    participant DB as PostgreSQL (JSONB)

    Client->>Nuxt: ページリクエスト (GET /events/summer)
    Nuxt->>API: コンテンツおよびレイアウト照会 API リクエスト
    API->>DB: JSONB レイアウトデータ照会
    DB-->>API: UI ブロックメタデータ返却
    API-->>Nuxt: 標準 JSON レスポンス返却
    Nuxt->>Nuxt: Vue 動的コンポーネントレンダリング (SSR)
    Nuxt-->>Client: 完成した HTML/CSS/JS ストリーム応答
```
