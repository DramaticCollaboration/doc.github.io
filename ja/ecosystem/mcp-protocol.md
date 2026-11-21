---
title: 標準 MCP プロトコル仕様 (Model Context Protocol)
shortTitle: MCP プロトコル
category: コア標準
sort: 2
description: SyncSeriesの全エージェントが準拠するModel Context Protocol (MCP) JSON-RPC仕様、ツール規格およびエラーコード標準
---

# 標準 MCP プロトコル仕様 (Model Context Protocol)

## 1. 概要

SyncSeriesのすべてのエージェントは、Anthropicのオープン標準である **Model Context Protocol (MCP)** を通信インターフェースとして採用し、相互運用性を確保しています。  
これにより、特定の言語やフレームワークに依存することなく、HTTP/SSE（Server-Sent Events）または標準入出力（stdio）チャネルを通じてツール（Tool）を探索し、リモートプロシージャを安全に呼び出すことができます。

---

## 2. メッセージエンベロープ規格 (Message Envelope)

すべてのMCP通信は、JSON-RPC 2.0標準に厳密に準拠します。

### 2.1 ツール呼び出しリクエスト (Tool Call Request)

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "method": "tools/call",
  "params": {
    "name": "syncboot_generate_schema",
    "arguments": {
      "domainName": "MembershipGrade",
      "fields": [
        { "name": "gradeCode", "type": "VARCHAR(20)", "nullable": false, "primaryKey": true },
        { "name": "discountRate", "type": "DECIMAL(5,2)", "nullable": false, "defaultValue": "0.00" },
        { "name": "minSpentAmount", "type": "BIGINT", "nullable": false, "defaultValue": "0" }
      ],
      "enableAuditing": true
    },
    "_meta": {
      "traceId": "trace-sv-20260915-0012",
      "callerAgent": "SyncVerse",
      "targetAgent": "SyncBoot",
      "timeoutMs": 30000
    }
  }
}
```

### 2.2 ツール呼び出し成功レスポンス (Tool Call Response)

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "スキーマおよびドメインエンティティの生成が完了しました。"
      },
      {
        "type": "resource",
        "resource": {
          "uri": "schema://syncboot/domain/MembershipGrade",
          "mimeType": "application/sql",
          "text": "CREATE TABLE tb_membership_grade (\n  grade_code VARCHAR(20) PRIMARY KEY,\n  discount_rate DECIMAL(5,2) NOT NULL DEFAULT 0.00,\n  min_spent_amount BIGINT NOT NULL DEFAULT 0,\n  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n);"
        }
      }
    ],
    "isError": false,
    "_meta": {
      "executionTimeMs": 142,
      "tokenUsage": {
        "promptTokens": 320,
        "completionTokens": 180,
        "totalTokens": 500
      }
    }
  }
}
```

---

## 3. 標準エラー処理 (RFC 7807 互換)

SyncSeriesの全社ポリシーに従い、一切のエラーの握りつぶし（swallowing）および偽の正常レスポンスは禁止されています。すべての障害は明確な標準エラーコードとして返却されます。

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "error": {
    "code": -32001,
    "message": "HITL Approval Required: スキーマ生成に既存インデックスの変更が伴うため、管理者の承認が必要です。",
    "data": {
      "type": "https://empasy.io/errors/hitl-approval-required",
      "title": "HITL_APPROVAL_REQUIRED",
      "status": 403,
      "detail": "Index modification detected on table tb_membership_grade",
      "instance": "/tools/call/syncboot_generate_schema",
      "approvalTicketId": "ticket-hitl-88219"
    }
  }
}
```

### 3.1 標準エラーコード体系

| コード | 名称 | HTTPマッピング | 説明 |
|:---|:---|:---|:---|
| **-32700** | Parse Error | 400 Bad Request | JSON構文エラー |
| **-32600** | Invalid Request | 400 Bad Request | JSON-RPCスキーマ不一致 |
| **-32601** | Method Not Found | 404 Not Found | 未登録のツールまたはエンドポイントの呼び出し |
| **-32602** | Invalid Params | 422 Unprocessable | パラメータのバリデーション（Validation）失敗 |
| **-32603** | Internal Error | 500 Internal Error | エージェント内部のランタイム例外発生 |
| **-32001** | HITL Approval Required | 403 Forbidden | 破壊的アクションのため管理者承認ゲートでの待機が必要 |
| **-32002** | Token Budget Exceeded | 429 Too Many Req | FinOps月間・日間トークン上限超過による遮断 |
| **-32003** | Compensating Tx Triggered | 500 Internal Error | Saga分散トランザクションの補償復旧を実行中 |

---

## 4. ストリーミングプロトコル (SSE & Progress Events)

長時間実行されるタスク（例: SyncInsightのディープリサーチ、SyncETAの全数回帰検証）の場合、SSEを通じて中間進捗ステータスを送信します。

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

event: progress
data: {"token": "prg-01", "progress": 25, "total": 100, "message": "マルチソースデータレイクのクエリが完了しました"}

event: progress
data: {"token": "prg-02", "progress": 60, "total": 100, "message": "ラウンドテーブル討論のクロス検証を実行中です"}

event: complete
data: {"token": "prg-03", "progress": 100, "total": 100, "result": {"reportId": "rep-9912"}}
```
