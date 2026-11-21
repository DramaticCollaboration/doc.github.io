---
title: "SyncLLM クイックスタートガイド（5分クイックスタート）"
shortTitle: クイックスタート
category: はじめに
sort: 2
description: "Docker Compose ベースの SyncLLM ゲートウェイのローカル起動、仮想モデルプロバイダー連携、および初回プロンプト送信ガイド"
---

# SyncLLM クイックスタートガイド（5分クイックスタート）

## 1. 事前準備

- **Docker & Docker Compose**（v24.0 以上）
- **Git**
- **curl** または HTTP クライアントツール（Postman など）

---

## 2. Docker Compose で 5 分で起動する

SyncLLM は、Redis（セマンティックキャッシュおよびレートリミット用）と PostgreSQL（トークン台帳および使用量監査用）が組み込まれたコンテナバンドルとして即座に実行できます。

### 2.1 リポジトリのクローンおよびディレクトリ移動

```bash
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-llm
```

### 2.2 環境変数の設定（`.env`）

```bash
cp .env.example .env
```

`.env` ファイルにアップストリーム LLM プロバイダーの API キーを設定します:

```properties
# SyncLLM Core Config
SERVER_PORT=8080
ADMIN_API_KEY=syncllm-admin-secret-key-2026

# Upstream LLM Providers
OPENAI_API_KEY=sk-proj-xxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxx

# Local SLM (Optional, vLLM or Ollama)
LOCAL_VLLM_BASE_URL=http://host.docker.internal:8000/v1

# Redis Semantic Cache Config
REDIS_HOST=redis
REDIS_PORT=6379
SEMANTIC_CACHE_ENABLED=true
SEMANTIC_CACHE_THRESHOLD=0.92
```

### 2.3 コンテナの起動

```bash
docker compose up -d
```

起動状態を確認します:

```bash
docker compose ps
# ステータス: syncllm-gateway (healthy), redis (healthy), postgres (healthy)
```

---

## 3. 初回プロンプト送信および動作検証

SyncLLM は **OpenAI 互換 REST API** を提供しているため、既存の OpenAI SDK や HTTP リクエストをそのまま利用できます。

### 3.1 curl を用いた Chat Completion 呼び出し

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer syncllm-admin-secret-key-2026" \
  -d '{
    "model": "auto-route",
    "messages": [
      { "role": "system", "content": "You are an enterprise AI assistant." },
      { "role": "user", "content": "SyncSeriesの3層アーキテクチャの要点のみを要約してください。" }
    ],
    "temperature": 0.2
  }'
```

### 3.2 レスポンス確認（SyncLLM 拡張メタデータを含む）

```json
{
  "id": "chatcmpl-syncllm-9182a",
  "object": "chat.completion",
  "created": 1773539820,
  "model": "gpt-4o-mini",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "SyncSeriesは、(1) SyncVerseおよびSyncInsightを中心とした中央コントロールタワー、(2) SyncBoot/SyncCMS/SyncCrawl/SyncETAを中心としたドメイン実行エージェント、(3) SyncLLMおよび監査台帳を中心としたインフラガバナンスの3層で構成されています。"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 42,
    "completion_tokens": 68,
    "total_tokens": 110
  },
  "_syncllm_meta": {
    "routedModel": "gpt-4o-mini",
    "routerRule": "RULE_LOW_COMPLEXITY_COST_SAVER",
    "cached": false,
    "piiMasked": false,
    "latencyMs": 485,
    "savedCostUsd": 0.0031
  }
}
```

---

## 4. セマンティックキャッシュ（Semantic Cache）ヒットテスト

同一または意味的に類似したプロンプトを再度送信し、キャッシュヒット（応答速度 < 20ms）を確認します:

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer syncllm-admin-secret-key-2026" \
  -d '{
    "model": "auto-route",
    "messages": [
      { "role": "user", "content": "SyncSeriesの3層アーキテクチャ構成を要約して説明してください。" }
    ]
  }'
```

レスポンスヘッダーおよびメタデータで **`"cached": true`**、**`"latencyMs": 14`** が返却されれば、ベクトルセマンティックキャッシュが正常に動作しています。
