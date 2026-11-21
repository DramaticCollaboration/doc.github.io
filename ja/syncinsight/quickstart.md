---
title: "クイックスタートおよび API ガイド"
sort: 6
description: "Docker Compose を活用した SyncInsight ローカルインスタンスの起動、分析レポート生成プロセス、REST API および MCP ツール連携方法について説明します。"
head:
  - - meta
    - name: keywords
      content: SyncInsight Quickstart, クイックスタート, Docker Compose, ディープリサーチチュートリアル, REST API, cURL, MCP 設定, Claude Desktop, Cursor, エンタープライズ導入
  - - meta
    - property: og:title
      content: "SyncInsight クイックスタートおよび API ガイド | Empasy"
  - - meta
    - property: og:description
      content: "Docker Compose によるローカル環境構築と初回分析レポート実行ガイド"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncinsight/quickstart
---

# クイックスタートおよび API ガイド (Quickstart & API Reference)

本ガイドでは、Docker Compose を使用して **SyncInsight** のローカルインスタンスを起動し、分析タスクを実行し、REST API および MCP ツールを連携する手順を説明します。

---

## 1. 事前準備事項

* Docker Engine 24.0+ および Docker Compose v2.20+
* 4GB 以上のメモリ空間
* （任意）OpenAI API Key または社内ローカル LLM エンドポイント URL

---

## 2. Docker Compose によるローカル環境起動

### 2.1. リポジトリのクローンおよび環境設定
```bash
# 1. リポジトリのクローンおよびディレクトリ移動
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-insight

# 2. 環境設定ファイルのコピー
cp .env.example .env
```

`.env` ファイルに AI API キーおよびデータベース設定を入力します。
```dotenv
# .env
SERVER_PORT=8084
SPRING_PROFILES_ACTIVE=local

# PostgreSQL & PgVector
DB_HOST=syncinsight-postgres
DB_PORT=5432
DB_NAME=syncinsight
DB_USER=syncinsight
DB_PASSWORD=syncinsight_secret

# AI Engine (AgentScope Java - io.agentscope:agentscope-harness)
OPENAI_API_KEY=sk-proj-your-api-key-here
LLM_MODEL_NAME=gpt-4o
```

### 2.2. コンテナの起動
```bash
docker compose -f docker-compose-dev.yml up -d
```

起動が完了したら、ブラウザで以下のアドレスにアクセスします。
* **Insight UI (ダッシュボード)**: `http://localhost:3101` (初期アカウント: `admin` / `123456`)
* **Insight API Swagger**: `http://localhost:8084/swagger-ui.html` (Canonical API Prefix: `/api/v1/insight/...`)

---

## 3. 分析タスク実行例 (UI)

1. ブラウザで `http://localhost:3101` にアクセスし、ログイン（`admin` / `123456`）します。
2. 左側メニューから **[DeepResearch キャンバス (SI-005)]** を選択します。
3. 分析テーマを入力します。
   > *"直近の決済離脱要因を分析し、コンバージョン率改善のためのプロモーション施策を提案してください。"*
4. 右側の **思考プロセス (Chain of Thought)** エリアでデータ照会および仮説検証のステップを確認できます。
5. 作成が完了したレポート下部の **[アクション提案カード]** をレビューし、必要に応じて承認処理を実行します。

---

## 4. 主要 REST API 仕様 (cURL 例)

### 4.1. 分析タスク登録（非同期）
```bash
curl -X POST "http://localhost:8084/api/v1/insight/jobs" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{
       "prompt": "下半期の市場トレンドおよび競合他社のプロモーション分析",
       "requesterId": "admin"
     }'
```

**レスポンス例 (202 Accepted)**:
```json
{
  "code": 200,
  "message": "分析タスクが正常に受け付けられました。",
  "data": {
    "jobId": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    "status": "PENDING",
    "createdAt": "2026-08-23T07:20:00Z"
  }
}
```

### 4.2. 提案アクション承認処理
```bash
curl -X POST "http://localhost:8084/api/v1/insight/actions/b1eebc99-9c0b-4ef8-bb6d-6bb9bd380b22/approve" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{
       "reviewedBy": "admin",
       "comment": "レビュー完了、プロモーション適用を実施"
     }'
```

---

## 5. Model Context Protocol (MCP) 連携設定

外部 MCP クライアント（Claude Desktop、Cursor など）から SyncInsight の分析ツールを連携できます。

`claude_desktop_config.json` 設定例:
```json
{
  "mcpServers": {
    "syncinsight": {
      "command": "docker",
      "args": [
        "exec",
        "-i",
        "syncinsight-gateway",
        "java",
        "-jar",
        "/app/sync-mcp-server.jar"
      ]
    }
  }
}
```
連携後、MCP クライアントを通じて SyncInsight の指標照会およびシミュレーションツールを直接呼び出すことができます。
