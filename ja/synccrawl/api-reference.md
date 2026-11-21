---
title: REST API & MCP Tool リファレンス
description: SyncCrawlの中核となる収集ジョブ制御、即時実行、収集データ照会およびModel Context Protocol(MCP)ツール仕様をご案内します。
sort: 6
---

# SyncCrawl REST API & MCP Tool リファレンス

SyncCrawlは、外部システムおよびAIエージェントとの連携のために**標準RESTful API**および**Model Context Protocol (MCP)**インターフェースを提供します。

---

## 認証 (Authentication)

すべてのAPIリクエストは、HTTPヘッダーに有効なJWTトークンを含める必要があります。

```http
Authorization: Bearer <YOUR_ACCESS_TOKEN>
X-Sync-Tenant-Id: TENANT_DEFAULT
Content-Type: application/json
```

---

## 1. クローリングジョブ登録API (Create Crawling Job)

新しい定期または単発のクローリングジョブを登録します。

### `POST /api/v1/crawl/jobs`

#### リクエスト例 (cURL)
```bash
curl -X POST "https://crawl.empasy.com/api/v1/crawl/jobs" \
     -H "Authorization: Bearer ${SYNC_TOKEN}" \
     -H "Content-Type: application/json" \
     -d '{
       "jobName": "金融監督院 報道資料の収集",
       "targetUrl": "https://www.fss.or.kr/fss/bbs/B0000188/list.do",
       "cronExpression": "0 0 9 * * ?",
       "selectors": {
         "listRow": ".board-list tbody tr",
         "title": ".subject a",
         "publishedAt": ".date",
         "link": ".subject a::attr(href)"
       },
       "enableRagSync": true,
       "ragConfig": {
         "targetVectorDb": "PGVECTOR",
         "embeddingModel": "BGE-M3",
         "chunkSize": 500,
         "chunkOverlap": 50
       }
     }'
```

#### レスポンス例 (201 Created)
```json
{
  "code": "SUCCESS",
  "data": {
    "jobId": "JOB_20260823_0042",
    "jobName": "金融監督院 報道資料の収集",
    "status": "SCHEDULED",
    "nextRunAt": "2026-08-24T09:00:00Z",
    "createdAt": "2026-08-23T07:10:00Z"
  }
}
```

---

## 2. クローリング即時実行トリガーAPI (Trigger Job Run)

スケジュールに関係なく、特定のジョブを即時に分散ワーカーへ割り当てて実行します。

### `POST /api/v1/crawl/jobs/{jobId}/trigger`

#### リクエスト例 (cURL)
```bash
curl -X POST "https://crawl.empasy.com/api/v1/crawl/jobs/JOB_20260823_0042/trigger" \
     -H "Authorization: Bearer ${SYNC_TOKEN}"
```

#### レスポンス例 (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "executionId": "EXEC_20260823_9011",
    "jobId": "JOB_20260823_0042",
    "status": "RUNNING",
    "allocatedAgent": "smart-crawling-agent-worker-02",
    "startedAt": "2026-08-23T07:11:05Z"
  }
}
```

---

## 3. 収集データ照会API (Fetch Crawled Data)

実行完了したジョブの収集結果と抽出されたデータを照会します。

### `GET /api/v1/crawl/results/{executionId}`

#### リクエスト例 (cURL)
```bash
curl -X GET "https://crawl.empasy.com/api/v1/crawl/results/EXEC_20260823_9011" \
     -H "Authorization: Bearer ${SYNC_TOKEN}"
```

#### レスポンス例 (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "executionId": "EXEC_20260823_9011",
    "totalCount": 10,
    "elapsedTimeMs": 2450,
    "selfHealingOccurred": false,
    "items": [
      {
        "id": "ITEM_001",
        "title": "2026年下半期 電子金融セキュリティガイドライン改定案内",
        "publishedAt": "2026-08-22",
        "detailUrl": "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=14092",
        "vectorSyncStatus": "INDEXED",
        "vectorId": "VEC_FSS_14092"
      }
    ]
  }
}
```

---

## 4. Model Context Protocol (MCP) ツール仕様

SyncCrawlは、AIエージェント(SyncVerseなど)が自然言語推論中に直接ウェブ収集をツールとして呼び出せるよう、**MCP Tool仕様**を提供します。

### `synccrawl_collect_page`
- **説明**: 指定されたウェブURLにアクセスし、テキストおよびテーブルデータをクレンジングして返却します。
- **パラメータ**:
  ```json
  {
    "url": { "type": "string", "description": "収集対象のURL" },
    "extractSelectors": { "type": "object", "description": "抽出するフィールド別セレクタ (任意)" },
    "waitForSelector": { "type": "string", "description": "レンダリング完了待機用セレクタ" }
  }
  ```

### `synccrawl_query_knowledge`
- **説明**: SyncCrawlナレッジベースに蓄積されたベクトルデータをセマンティック検索し、回答の根拠を返却します。
- **パラメータ**:
  ```json
  {
    "query": { "type": "string", "description": "ユーザーのクエリテキスト" },
    "category": { "type": "string", "description": "フィルタリング対象の知識カテゴリ" },
    "topK": { "type": "number", "default": 5, "description": "返却する類似ドキュメント数" }
  }
  ```
