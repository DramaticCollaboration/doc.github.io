---
title: AgentScope Java Standard Development Guide
shortTitle: AgentScope Guide
category: Core Standards
sort: 3
description: "Implementation guide for AgentScope Java (io.agentscope), the enterprise-wide standard framework for SyncSeries Java backends (Spring Boot)"
---

# AgentScope Java Standard Development Guide

## 1. Enterprise Framework Standard Declaration

All Java (Spring Boot)-based subprojects in SyncSeries (SyncVerse, SyncBoot, SyncCMS, SyncShop, SyncCrawl, SyncInsight) adopt **`AgentScope Java` (`io.agentscope:agentscope-harness`)** as the single standard framework when implementing AI agent logic.

### 1.1 Maven Dependency Configuration

```xml
<dependency>
    <groupId>io.agentscope</groupId>
    <artifactId>agentscope-harness</artifactId>
    <version>0.3.1</version>
</dependency>
```

---

## 2. ReActAgent Core Structure and Implementation

`ReActAgent`, the core of AgentScope Java, autonomously executes the Thought, Action (tool execution), and Observation loop.

### 2.1 Agent Bean Definition and Dependency Injection

In accordance with SyncSeries's **Mandatory Lombok Rule**, manual constructor writing is prohibited; apply `@RequiredArgsConstructor` and `private final` fields:

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
                .sysPrompt("An engineering agent specialized in designing enterprise-grade DDD database schemas and Spring Boot entities.")
                .toolBox(schemaToolBox)
                .memory(agentMemory)
                .maxIterations(5)
                .build();

        return agent.run(userPrompt);
    }
}
```

---

## 3. MCP Tool Registration (Tool Annotation)

Tools that an agent can invoke are declared via the `@Tool` annotation, and input argument models must be defined as Lombok DTOs:

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
        description = "Receives table name and primary key column information to generate a standardized PostgreSQL 18.6 DDL script."
    )
    public String generateDdl(
            @ToolParam(description = "DDL generation request model") DdlRequest request) {
        
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

## 4. Multi-Agent Collaboration Using MsgHub

When two or more agents collaborate conversationally, use `MsgHub` to perform message broadcasting and context sharing:

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
            
            hub.broadcast("System", "Starting review for new domain schema: " + proposalPrompt);
            
            // Architect agent proposes the initial draft
            String draft = architectAgent.reply();
            hub.broadcast(architectAgent.getName(), draft);
            
            // Security auditor agent cross-audits PII and indexes
            String auditResult = securityAuditorAgent.reply();
            hub.broadcast(securityAuditorAgent.getName(), auditResult);
            
            log.info("[MsgHub] Collaboration completed successfully.");
        }
    }
}
```

---

## 5. Enterprise Coding Convention Checklist

1. **Lombok Required**: 100% prohibition on writing manual getters/setters and manual constructors.
2. **Structured Logging**: No decorative emojis; maintain structured logging based on SLF4J MDC (`[TraceId: %X{traceId}]`).
3. **Zero-Hardcoding**: Strictly prohibit fake data or hardcoded fallback outputs in production code outside of test code.
