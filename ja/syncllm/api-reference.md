---
title: SyncLLM API リファレンス
shortTitle: API リファレンス
category: 開発・連携
sort: 5
description: SyncLLM ゲートウェイの OpenAI 互換エンドポイント、FinOps トークン管理、およびルーティングポリシーに関する RESTful API 仕様
---

# SyncLLM API リファレンス

## 1. 概要と認証

SyncLLM はすべてのエンドポイントに対して HTTP Bearer トークン認証を要求します:

```http
Authorization: Bearer <API_KEY>
```

---

## 2. OpenAI 互換推論エンドポイント

- **本番ゲートウェイ URL**: `https://llm.empasy.io/api/v1/llm/chat/completions`
- **ローカル開発サーバー URL**: `http://localhost:18090/api/v1/llm/chat/completions`

### 2.1 POST `/api/v1/llm/chat/completions`

クライアントのプロンプトクエリを受信し、最適なアップストリームモデルへルーティングして結果を返却します。

#### リクエストボディ (Request Body)

| フィールド | 型 | 必須 | デフォルト値 | 説明 |
|:---|:---|:---|:---|:---|
| `model` | string | Yes | - | モデル名 (`auto-route`, `fast-track`, `deep-reasoning`, または実際のモデル名) |
| `messages` | array | Yes | - | 会話履歴オブジェクト配列 (`role`, `content`) |
| `temperature` | float | No | 0.7 | 生成の創造性係数 (0.0 ~ 2.0) |
| `stream` | boolean | No | false | SSE ストリーミングの有効化有無 |
| `max_tokens` | integer | No | null | 最大生成トークン数 |
| `syncllm_options` | object | No | - | SyncLLM 専用制御オプション (`cacheBypass`, `piiStrict`) |

#### cURL サンプル (本番およびローカル)

```bash
# 本番エンドポイント ( ローカル開発時: http://localhost:18090/api/v1/llm/chat/completions )
curl -X POST https://llm.empasy.io/api/v1/llm/chat/completions \
  -H "Authorization: Bearer $SYNCLLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "auto-route",
    "messages": [{"role": "user", "content": "決済エラーログの分析"}],
    "syncllm_options": {
      "piiStrict": true,
      "cacheBypass": false
    }
  }'
```

---

### 2.2 POST `/api/v1/llm/embeddings`

テキストの埋め込みベクトルを生成します。

```bash
curl -X POST https://llm.empasy.io/api/v1/llm/embeddings \
  -H "Authorization: Bearer $SYNCLLM_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "SyncSeries A2A Autonomous Ecosystem"
  }'
```

---

## 3. FinOps トークン予算管理エンドポイント

### 3.1 GET `/api/v1/llm/budgets`

登録されているすべてのエージェント／部門別の日次および月次トークン使用量と残余予算を取得します。

#### レスポンス例 (200 OK)

```json
{
  "budgets": [
    {
      "agentCode": "SyncBoot",
      "period": "MONTHLY",
      "allocatedUsd": 500.00,
      "currentUsageUsd": 182.40,
      "burnRatePercent": 36.48,
      "alertThresholdPercent": 80.0,
      "status": "HEALTHY"
    },
    {
      "agentCode": "SyncInsight",
      "period": "MONTHLY",
      "allocatedUsd": 1200.00,
      "currentUsageUsd": 984.10,
      "burnRatePercent": 82.01,
      "alertThresholdPercent": 80.0,
      "status": "WARNING_THRESHOLD_EXCEEDED"
    }
  ]
}
```

---

### 3.2 POST `/api/v1/llm/budgets`

特定のエージェントに対するトークン予算および遮断しきい値を設定します。

```json
{
  "agentCode": "SyncCMS",
  "monthlyBudgetUsd": 300.00,
  "hardLimitEnabled": true,
  "alertWebhookUrl": "https://hooks.slack.com/services/xxx/yyy/zzz"
}
```
