---
title: "AgentScope Java & Model Context Protocol (MCP) 連携"
description: "AgentScope Java（io.agentscope:agentscope-harness）フレームワークと Model Context Protocol（MCP）HTTP SSE エンドポイントを介したツール提供およびシステム連携方式を説明します。"
sort: 7
---

# AgentScope Java & Model Context Protocol (MCP) 連携

SyncBoot は全社標準 AI フレームワークである **AgentScope Java（`io.agentscope:agentscope-harness`）** と **Model Context Protocol（MCP）** インターフェースを内蔵しており、外部オーケストレーターおよびエージェントとの A2A 連携に対応します。

---

## MCP 連携アーキテクチャ

SyncBoot は HTTP Server-Sent Events（SSE）ベースでツール（Tools）およびリソース（Resources）を提供します。

```mermaid
sequenceDiagram
    autonumber
    participant Client as オーケストレーター / AI クライアント
    participant MCP as SyncBoot MCP Server (/api/v1/boot/mcp/sse)
    participant Core as SyncBoot Core / DB / Logs

    Client->>MCP: GET /api/v1/boot/mcp/tools (ツール一覧取得)
    MCP-->>Client: [read_schema, execute_query, fetch_logs, etc.]
    Client->>MCP: POST /api/v1/boot/mcp/call (Tool: syncboot_fetch_server_logs)
    MCP->>Core: クラスターサーバーエラーログ収集
    Core-->>MCP: ログデータ返却
    MCP-->>Client: 結果ペイロード配信
```

---

## 標準提供 MCP ツール仕様

| ツール名称 | 機能説明 | パラメータ | 戻り値形式 |
| :--- | :--- | :--- | :--- |
| `syncboot_read_schema` | 特定ドメインのテーブル構造およびカラムメタデータ取得 | `tableName` (String) | カラム名、データ型、NULL 可否、コメント JSON |
| `syncboot_execute_query` | 認可された範囲内でのドメイン CRUD クエリ実行 | `sql` (String), `params` (Map) | 実行結果レコード一覧（最大 100 件） |
| `syncboot_fetch_server_logs` | 分散サーバーの直近エラーログ収集 | `lines` (Int), `level` (ERROR) | スタックトレーステキスト |
| `syncboot_get_table_list` | 管理対象の全ビジネスドメインテーブル一覧取得 | `tenantId` (String) | テーブル物理名および説明配列 |

---

## Java バックエンド MCP ツール宣言の例 (AgentScope Java)

```java
package com.empasy.sync.boot.mcp;

import io.agentscope.core.tool.Tool;
import io.agentscope.core.tool.ToolParam;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SyncBootMcpTools {

    private final SchemaService schemaService;
    private final LogInspectorService logInspectorService;

    @Tool(description = "指定されたドメインテーブルの DDL およびカラム仕様を取得します。")
    public TableMetaDTO readSchema(
            @ToolParam(description = "取得対象のテーブル物理名（例: tb_order）") String tableName) {
        return schemaService.getTableMetadata(tableName);
    }

    @Tool(description = "分析のために直近のサーバーエラーログを収集します。")
    public String fetchServerLogs(
            @ToolParam(description = "取得するログ行数（デフォルト 100）") int lines) {
        return logInspectorService.getRecentErrorLogs(lines);
    }
}
```
