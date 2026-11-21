---
title: "5分クイックスタートガイド (Quickstart)"
sidebarTitle: "クイックスタート"
description: "ローカル環境で Docker Compose を通じて SyncVerse 中央制御サーバーを起動し、最初の MCP エージェントを接続して自然言語指示を実行するハンズオンガイドです。"
head:
  - - meta
    - name: keywords
      content: SyncVerse Quickstart, クイックスタート, Docker Compose, チュートリアル, MCP エージェント登録, ローカル実行, 意図分析ハンズオン
  - - meta
    - property: og:title
      content: "SyncVerse 5分クイックスタートガイド (Quickstart)"
  - - meta
    - property: og:description
      content: "Docker Compose を活用して SyncVerse コントロールタワーをローカルに起動し、マルチエージェントオーケストレーションを構成する方法"
sort: 3
---

# 5分クイックスタートガイド (Quickstart)

このチュートリアルでは、**Docker Compose** を使用してローカル環境に SyncVerse 中央制御サーバーを起動し、サンプルワーカーエージェント (`SyncBoot`, `SyncCMS`) を登録したうえで、自然言語の意図分析および実行パイプラインをテストします。

---

## 1. 前提条件 (Prerequisites)

- **Docker & Docker Compose**: Docker Desktop 24.0+
- **Java Runtime** (直接ビルド時): JDK 17 以上
- **Node.js** (フロントエンド開発時): Node.js 18.x 以上および pnpm
- **LLM API Key**: OpenAI API Key または社内 Ollama/vLLM エンドポイント

---

## 2. Docker Compose によるローカル環境の起動

SyncVerse リポジトリをクローンし、同梱の Docker Compose スクリプトを実行します。

```bash
# 1. プロジェクトディレクトリへ移動
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-verse

# 2. 環境変数の設定 (.env ファイルのコピー)
cp .env.example .env

# .env ファイルで LLM API キーを設定 (またはローカル Ollama を使用)
# OPENAI_API_KEY=sk-...
# AGENTSCOPE_MODEL_NAME=gpt-4o-mini

# 3. インフラおよび制御サーバーコンテナ全体の起動
docker compose -f docker-compose-local.yml up -d
```

### コンテナ起動確認

```bash
docker compose -f docker-compose-local.yml ps
```

| サービス名 | ポート (Host) | 役割 |
| :--- | :--- | :--- |
| `syncverse-server` | `8080` | Spring Boot バックエンドコア & MCP オーケストレーター |
| `syncverse-admin` | `5173` (または `3000`) | Vue 3 コントロールタワー管理 Web コンソール |
| `syncverse-postgres`| `5432` | RDBMS メタデータおよび監査ログストア |
| `syncverse-redis` | `6379` | エージェントリアルタイム状態共有およびセマンティックキャッシュ |

---

## 3. 中央制御コンソールへの接続

ブラウザから `http://localhost:5173` (または指定されたポート) にアクセスします。

- **デフォルト管理者アカウント**: `admin` / `admin1234!`

ログインすると、**[AI DLC 統合コントロールタワー (Command Center)]** ダッシュボードが表示され、登録済みの下位ワーカーエージェントのリアルタイムヘルスチェック状態を確認できます。

---

## 4. MCP エージェントの登録および接続

コントロールタワーコンソールの **[MCP ツールレジストリ (MCP Registry)]** メニューへ移動し、ドメインエージェントを登録します。

```json
{
  "serverName": "syncboot-local",
  "endpoint": "http://syncboot-server:8081/mcp",
  "transport": "HTTP_SSE",
  "capabilities": ["tools", "resources", "prompts"]
}
```

登録が完了すると、SyncVerse が該当エージェントの利用可能なツール (`syncboot_query_schema`, `syncboot_apply_migration` など) を照会してカタログに登録します。

---

## 5. ハンズオン: 自然言語要件の実行テスト

**[インテントルーティングスタジオ (Intent Routing Studio)]** メニューで自然言語プロンプトを入力し、実行フローを確認します。

### 入力例:
```text
"ユーザーテーブル (tb_user) に最終ログイン日時 (last_login_at) カラムを追加し、関連エンティティコードを修正して"
```

### 実行結果の確認 (パイプライン進行フロー):
1. **意図分析 (Intent Router)**:
   - 意図: `CODE_MODIFICATION_WITH_DDL` (信頼度: `0.98`)
   - ターゲットエージェント: `SyncSDK Agent`, `SyncBoot Agent`
2. **コードおよび DDL 生成**:
   - `ALTER TABLE tb_user ADD COLUMN last_login_at TIMESTAMP;`
   - `User.java` エンティティフィールド追加
3. **無人 QA (SyncETA)**:
   - Stage テスト環境で単体テストを自動実行 (全テスト合格)
4. **HITL 承認通知**:
   - アーキテクト承認コンソールに Diff を表示 $\rightarrow$ `[Approve]` クリック時にデプロイパイプラインをトリガー

---

## 6. 次のステップ

- [4-Tier 自律エージェント連合アーキテクチャ](./architecture) でエージェント階層間の通信原理を確認
- [インテントルーティングエンジン](./intent-routing) で複合要件の分解ルールを確認
- [自己修復パイプライン](./self-healing-pipeline) で無人バグ復旧メカニズムを確認
