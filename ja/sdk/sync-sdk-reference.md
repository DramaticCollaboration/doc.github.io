---
title: Sync SDK インターフェース仕様
shortTitle: Sync SDK リファレンス
category: 開発者センター
sort: 3
description: com.empasy.sync.sdk パッケージの主要インターフェース、モデルクラス、および RFC 7807 標準例外処理仕様
---

# Sync SDK インターフェース仕様

## 1. パッケージアーキテクチャ概要

`com.empasy.sync.sdk` は、SyncSeries エコシステム内のすべてのドメインマイクロサービスと外部連携モジュールが共通で使用する標準クライアントライブラリです。

```
com.empasy.sync.sdk/
├── core/
│   ├── model/                  # A2A 通信メッセージおよびコンテキストモデル
│   ├── tool/                   # MCP ツール登録および実行抽象化
│   └── exception/              # 標準ビジネスおよび通信例外
├── client/                     # SyncVerse およびリモートエージェント RPC クライアント
└── saga/                       # 分散サーガ補償トランザクションコンテキスト
```

---

## 2. 主要モデル仕様

### 1) A2AMessage (エージェント間通信メッセージ仕様)
エージェントが他のエージェントへ作業を要求または応答する際に伝達する標準ペイロードです:

```java
package com.empasy.sync.sdk.core.model;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.Instant;
import java.util.Map;

@Getter
@Builder
@ToString
public class A2AMessage {
    /** グローバル分散トレース識別子 (OpenTelemetry 互換) */
    private final String traceId;

    /** 送信元エージェント識別子 (例: sync-insight-planner) */
    private final String senderAgentId;

    /** 送信先エージェント識別子 (例: sync-boot-engineer) */
    private final String receiverAgentId;

    /** 作業意図またはメソッド名 (例: task.execute.code_patch) */
    private final String action;

    /** 伝達データペイロード (JSON シリアライズ可能な Map) */
    private final Map<String, Object> payload;

    /** メッセージ生成日時 */
    @Builder.Default
    private final Instant timestamp = Instant.now();
}
```

### 2) ToolExecutionResult (ツール実行結果仕様)
MCP ツール呼び出し完了後に返却される標準コンテナです:

```java
package com.empasy.sync.sdk.core.tool;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ToolExecutionResult {
    /** 実行成功可否 */
    private final boolean success;

    /** 成功時の返却データオブジェクト */
    private final Object data;

    /** 失敗時のエラーコード (例: ERR_INVALID_PARAMETER) */
    private final String errorCode;

    /** 人間が判読可能な結果またはエラー説明 */
    private final String message;

    /** ツール実行に要した物理時間 (ミリ秒) */
    private final long executionDurationMs;
}
```

---

## 3. 標準例外処理および RFC 7807 仕様

SDK 内部で発生するすべてのシステム例外およびビジネス例外は、IETF RFC 7807 (Problem Details for HTTP APIs) 仕様に厳密に準拠し、構造化された JSON 形式でクライアントに伝達されます。

### 標準例外階層構造
```
SyncException (最上位抽象例外)
├── A2ACommunicationException   # ネットワーク遅延、サーキット遮断などの通信失敗
├── ToolExecutionException      # ツールパラメータ不一致および実行時エラー
└── SecurityGuardrailException  # PII 違反、権限不足、インジェクション遮断
```

### RFC 7807 標準エラーレスポンス例
```json
{
  "type": "https://doc.empasy.com/errors/invalid-tool-argument",
  "title": "Invalid Tool Argument",
  "status": 400,
  "detail": "パラメータ 'orderId' の形式が正規表現 '^ORD-\\d{4}-\\d{3,}$' と一致しません。",
  "instance": "/api/v1/shop/orders/tools/get_order_status",
  "traceId": "c8a49f7b1e2d3c4a",
  "errorCode": "ERR_INVALID_PARAMETER",
  "timestamp": "2026-10-06T07:15:00Z"
}
```

---

## 4. TypeScript / Node.js SDK 互換仕様

フロントエンドおよび Node.js ベースのマイクロサービス連携向けに、同一のインターフェースが `@empasy/sync-sdk-common` npm パッケージとして提供されています:

```typescript
import { A2AClient, A2AMessage } from '@empasy/sync-sdk-common';

const client = new A2AClient({
  endpoint: 'http://sync-verse-gateway:8080',
  apiKey: process.env.SYNC_API_KEY
});

const msg: A2AMessage = {
  traceId: 'trace-12345',
  senderAgentId: 'client-dashboard',
  receiverAgentId: 'sync-verse-core',
  action: 'query.analytics',
  payload: { metric: 'daily_active_users' }
};

const response = await client.send(msg);
console.log(response.data);
```

---

## 5. コーディングエージェント標準 SPI (`ICodingAgentClient` & `CodingAgentType` 15 種)

`sync-sdk-common` は、`SyncVerse` の 5-Step Spec Studio と 15 種の自律コーディングエージェントエンジンを単一インターフェースで接続する `ICodingAgentClient` SPI および `CodingAgentType` 列挙型を提供しています。

### 15 種のコーディングエージェントエンジン (`CodingAgentType`)
すべてのコーディングエージェントのデフォルト推論モデルは、`SystemConfigHolder.getValue("sync.sdk.agent.default-model.<code_lower>", defaultModel)` を通じて DB `sys_config` テーブルからランタイム時に動的に照会されます:

| エンジンコード (`CodingAgentType`) | 実装クラス | プロトコル / 実行方式 | デフォルトモデル設定キー (`sys_config`) |
| :--- | :--- | :--- | :--- |
| `ANTIGRAVITY` | `AntigravitySdkClient` | Local Harness gRPC/CLI (`agy`) | `sync.sdk.agent.default-model.antigravity` |
| `CLAUDE_CODE` | `ClaudeCodeSdkClient` | Anthropic Claude Code CLI (`claude`) | `sync.sdk.agent.default-model.claude_code` |
| `GITHUB_COPILOT` | `GitHubCopilotSdkClient` | GitHub Copilot Agent CLI (`gh copilot`) | `sync.sdk.agent.default-model.github_copilot` |
| `CODEX_CLI` | `CodexCliSdkClient` | OpenAI Codex CLI (`codex`) | `sync.sdk.agent.default-model.codex_cli` |
| `GEMINI_CLI` | `GeminiCliSdkClient` | Google Gemini CLI (`gemini`) | `sync.sdk.agent.default-model.gemini_cli` |
| `CURSOR_CLI` | `CursorCliSdkClient` | Cursor Agent CLI (`cursor`) | `sync.sdk.agent.default-model.cursor_cli` |
| `OPENHANDS` | `OpenHandsSdkClient` | OpenHands Headless / REST | `sync.sdk.agent.default-model.openhands` |
| `CONTINUE` | `ContinueSdkClient` | Continue CLI (`cn`) | `sync.sdk.agent.default-model.continue` |
| `AIDER` | `AiderSdkClient` | Aider CLI (`aider`) | `sync.sdk.agent.default-model.aider` |
| `OPENSWE` | `OpenSweSdkClient` | OpenSWE Docker / REST | `sync.sdk.agent.default-model.openswe` |
| `GOOSE` | `GooseSdkClient` | Block Goose CLI (`goose`) | `sync.sdk.agent.default-model.goose` |
| `MINI_SWE` | `MiniSweSdkClient` | Mini-SWE-Agent CLI | `sync.sdk.agent.default-model.mini_swe` |
| `CLINE` | `ClineSdkClient` | Cline Autonomous CLI (`cline`) | `sync.sdk.agent.default-model.cline` |
| `KIRO` | `KiroSdkClient` | AWS Kiro Spec Agent (`kiro`) | `sync.sdk.agent.default-model.kiro` |
| `EIGENT` | `EigentSdkClient` | Eigent Multi-Agent CLI | `sync.sdk.agent.default-model.eigent` |
