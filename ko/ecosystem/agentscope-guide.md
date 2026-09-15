---
title: AgentScope Java 표준 개발 가이드
shortTitle: AgentScope 가이드
category: 핵심 표준
sort: 3
description: SyncSeries Java 백엔드(Spring Boot) 전사 표준 프레임워크인 AgentScope Java(io.agentscope) 구현 가이드
---

# AgentScope Java 표준 개발 가이드

## 1. 전사 프레임워크 표준 선언

SyncSeries의 모든 Java(Spring Boot) 기반 하위 프로젝트(SyncVerse, SyncBoot, SyncCMS, SyncShop, SyncCrawl, SyncInsight)는 AI 에이전트 로직 구현 시 **`AgentScope Java` (`io.agentscope:agentscope-harness`)**를 단일 표준 프레임워크로 채택합니다.

### 1.1 Maven 의존성 설정

```xml
<dependency>
    <groupId>io.agentscope</groupId>
    <artifactId>agentscope-harness</artifactId>
    <version>0.3.1</version>
</dependency>
```

---

## 2. ReActAgent 기본 구조 및 구현

AgentScope Java의 핵심인 `ReActAgent`는 Thought(사고), Action(도구 실행), Observation(결과 관측)의 루프를 자율 수행합니다.

### 2.1 에이전트 빈(Bean) 정의 및 의존성 주입

SyncSeries의 **Mandatory Lombok Rule**에 따라 생성자 수동 작성을 금지하고 `@RequiredArgsConstructor`와 `private final`을 적용합니다:

```java
package com.empasy.syncboot.agent;

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
                .sysPrompt("당신은 엔터프라이즈급 DDD 데이터베이스 스키마 및 Spring Boot 엔티티를 전문 설계하는 엔지니어링 에이전트입니다.")
                .toolBox(schemaToolBox)
                .memory(agentMemory)
                .maxIterations(5)
                .build();

        return agent.run(userPrompt);
    }
}
```

---

## 3. MCP 도구 등록 (Tool Annotation)

에이전트가 호출할 수 있는 도구는 `@Tool` 애너테이션을 통해 선언하며, 입력 인자 모델은 반드시 Lombok DTO로 정의합니다:

```java
package com.empasy.syncboot.agent.tools;

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
        description = "테이블 명과 기본키 컬럼 정보를 전달받아 규격화된 MariaDB/MySQL DDL 스크립트를 생성합니다."
    )
    public String generateDdl(
            @ToolParam(description = "DDL 생성 요청 모델") DdlRequest request) {
        
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

## 4. MsgHub를 활용한 멀티 에이전트 협업

두 개 이상의 에이전트가 대화형으로 협력할 때 `MsgHub`를 사용하여 메시지 브로드캐스팅과 컨텍스트 공유를 수행합니다:

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
            
            hub.broadcast("System", "새로운 도메인 스키마 검토를 시작합니다: " + proposalPrompt);
            
            // 아키텍트 에이전트가 초안 발의
            String draft = architectAgent.reply();
            hub.broadcast(architectAgent.getName(), draft);
            
            // 보안 감사 에이전트가 PII/인덱스 교차 감사
            String auditResult = securityAuditorAgent.reply();
            hub.broadcast(securityAuditorAgent.getName(), auditResult);
            
            log.info("[MsgHub] Collaboration completed successfully.");
        }
    }
}
```

---

## 5. 엔터프라이즈 코딩 컨벤션 체크리스트

1. **Lombok 필수**: 수동 Getter/Setter, 수동 생성자 작성 100% 금지.
2. **구조화 로깅**: 이모지 사용 금지, SLF4J MDC(`[TraceId: %X{traceId}]`) 기반 정형 로깅 유지.
3. **Zero-Hardcoding**: 테스트 코드 외 프로덕션 코드에 가짜 데이터/하드코딩된 fallback 출력 엄격 금지.
