---
title: AgentScope Java 標準開発ガイド
shortTitle: AgentScope ガイド
category: コア標準
sort: 3
description: SyncSeries Java バックエンド (Spring Boot) 全社標準フレームワークである AgentScope Java (io.agentscope) の実装ガイド
---

# AgentScope Java 標準開発ガイド

## 1. 全社フレームワーク標準宣言

SyncSeries のすべての Java (Spring Boot) ベースのサブプロジェクト (SyncVerse, SyncBoot, SyncCMS, SyncShop, SyncCrawl, SyncInsight) は、AI エージェントロジックの実装において **`AgentScope Java` (`io.agentscope:agentscope-harness`)** を単一の標準フレームワークとして採用します。

### 1.1 Maven 依存関係の設定

```xml
<dependency>
    <groupId>io.agentscope</groupId>
    <artifactId>agentscope-harness</artifactId>
    <version>0.3.1</version>
</dependency>
```

---

## 2. ReActAgent の基本構造と実装

AgentScope Java の中核である `ReActAgent` は、Thought (思考)、Action (ツール実行)、Observation (結果観測) のループを自律的に実行します。

### 2.1 エージェント Bean の定義と依存性注入

SyncSeries の **Mandatory Lombok Rule** に従い、コンストラクタの手動記述を禁止し、`@RequiredArgsConstructor` と `private final` を適用します。

```java
package com.empasy.sync.boot.agent;

import io.agentscope.core.ReActAgent;
import io.agentscope.core.memory.Memory;
import io.agentscope.core.tool.ToolBox;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SchemaEngineeringAgent {

    private final ToolBox schemaToolBox;
    private final Memory agentMemory;

    public String executeTask(String userPrompt) {
        log.info("[AgentScope] Initializing ReAct loop for prompt: {}", userPrompt);

        ReActAgent agent = ReActAgent.builder()
                .name("SyncBoot-SchemaEngineer")
                .sysPrompt("エンタープライズ級の DDD データベーススキーマおよび Spring Boot エンティティを専門に設計するエンジニアリングエージェントです。")
                .toolBox(schemaToolBox)
                .memory(agentMemory)
                .maxIterations(5)
                .build();

        return agent.run(userPrompt);
    }
}
```

---

## 3. MCP ツールの登録 (Tool Annotation)

エージェントが呼び出し可能なツールは `@Tool` アノテーションによって宣言し、入力引数モデルは必ず Lombok DTO として定義します。

```java
package com.empasy.sync.boot.agent.tools;

import io.agentscope.core.tool.annotation.Tool;
import io.agentscope.core.tool.annotation.ToolParam;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class DdlGeneratorTool {

    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DdlRequest {
        private String tableName;
        private String primaryKeyColumn;
        private String comment;
    }

    @Tool(
        name = "generate_ddl_script",
        description = "テーブル名と主キーカラム情報を受け取り、標準化された PostgreSQL 18.6 DDL スクリプトを生成します。"
    )
    public String generateDdl(
            @ToolParam(description = "DDL 生成リクエストモデル") DdlRequest request) {
        
        log.info("[Tool:generate_ddl] Generating DDL for table: {}", request.getTableName());
        
        return String.format(
            "CREATE TABLE %s (\n" +
            "  %s BIGINT AUTO_INCREMENT PRIMARY KEY,\n" +
            "  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n" +
            ") COMMENT='%s';",
            request.getTableName(),
            request.getPrimaryKeyColumn(),
            request.getComment()
        );
    }
}
```

---

## 4. MsgHub を活用したマルチエージェント協調

2つ以上のエージェントが対話形式で協調する際は、`MsgHub` を使用してメッセージのブロードキャストとコンテキストの共有を行います。

```java
package com.empasy.syncverse.orchestration;

import io.agentscope.core.Agent;
import io.agentscope.core.msghub.MsgHub;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AgentCollaborationService {

    private final Agent architectAgent;
    private final Agent securityAuditorAgent;

    public void collaborateOnSchema(String proposalPrompt) {
        log.info("[MsgHub] Starting multi-agent design session");

        try (MsgHub hub = MsgHub.builder()
                .participants(architectAgent, securityAuditorAgent)
                .build()) {
            
            hub.broadcast("System", "新しいドメインスキーマのレビューを開始します: " + proposalPrompt);
            
            // アーキテクトエージェントがドラフトを提案
            String draft = architectAgent.reply();
            hub.broadcast(architectAgent.getName(), draft);
            
            // セキュリティ監査エージェントが PII およびインデックスの交差監査を実施
            String auditResult = securityAuditorAgent.reply();
            hub.broadcast(securityAuditorAgent.getName(), auditResult);
            
            log.info("[MsgHub] Collaboration completed successfully.");
        }
    }
}
```

---

## 5. エンタープライズコーディング規約チェックリスト

1. **Lombok 必須**: 手動の Getter/Setter および手動コンストラクタの記述を 100% 禁止します。
2. **構造化ロギング**: 絵文字の使用を禁止し、SLF4J MDC (`[TraceId: %X{traceId}]`) に基づく定型ロギングを維持します。
3. **Zero-Hardcoding**: テストコード以外の本番コードにおけるダミーデータやハードコードされたフォールバック出力を厳格に禁止します。
