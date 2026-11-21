---
title: SyncInsight MCP ツールリファレンス
shortTitle: MCP ツールリファレンス
category: 開発 & 連携
sort: 5
description: SyncInsight の意思決定インテリジェンスエンジンが外部およびコントロールタワー（SyncVerse）に提供する MCP ツールスキーマおよびパラメータ仕様
---

# SyncInsight MCP ツールリファレンス

## 1. 概要

SyncInsight は Model Context Protocol（MCP）を通じて、外部のコントロールタワー（SyncVerse）およびユーザープロンプトに対応する4つの主要分析ツールを標準 JSON-RPC インターフェースとして公開します。

---

## 2. ツール別の詳細仕様

### 2.1 `syncinsight_run_nl2sql`
自然言語クエリを受信し、エンタープライズデータウェアハウス / DB クエリを安全にコンパイルして読み取り専用で実行します。

#### パラメータスキーマ
```json
{
  "name": "syncinsight_run_nl2sql",
  "arguments": {
    "queryPrompt": "過去30日間の日別決済失敗率の推移と失敗理由トップ5を抽出してください。",
    "targetDatasource": "dw_production_read_replica",
    "explainPlan": true,
    "limit": 100
  }
}
```

#### レスポンススキーマ
```json
{
  "sqlQuery": "SELECT DATE(created_at) AS tx_date, COUNT(CASE WHEN status='FAILED' THEN 1 END)*100.0/COUNT(*) AS failure_rate ... GROUP BY DATE(created_at) ORDER BY tx_date DESC;",
  "executionTimeMs": 84,
  "rowCount": 30,
  "data": [
    { "tx_date": "2026-09-14", "failure_rate": 0.42, "top_reason": "PG_TIMEOUT" }
  ],
  "safetyPassed": true
}
```

---

### 2.2 `syncinsight_create_deep_research`
異種データ（内部台帳、市場動向、顧客フィードバック）を組み合わせて、多角的な深層レポートを生成します。

#### パラメータスキーマ
```json
{
  "name": "syncinsight_create_deep_research",
  "arguments": {
    "topic": "新規決済手段（PayPay / 楽天ペイ）連携に伴う決済コンバージョン率および手数料最適化分析",
    "sources": ["INTERNAL_DB", "EXTERNAL_MARKET_FEED", "RAG_KNOWLEDGE"],
    "includeWhatIfSimulation": true
  }
}
```

---

### 2.3 `syncinsight_simulate_action`
導出されたビジネスアクションを本番環境に適用する前に、模擬実行（What-If Simulation）を行ってリスク度を予測します。

#### パラメータスキーマ
```json
{
  "name": "syncinsight_simulate_action",
  "arguments": {
    "actionId": "action-vip-promo-2026",
    "simulationHorizonDays": 30,
    "variableAdjustments": {
      "discountRatePercent": 5.0,
      "minimumBasketSize": 100000
    }
  }
}
```
