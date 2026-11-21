---
title: Sync SDK Interface Reference
shortTitle: Sync SDK Reference
category: Developer Center
sort: 3
description: Core interfaces, model classes, and RFC 7807 standard exception handling specifications in the com.empasy.sync.sdk package
---

# Sync SDK Interface Reference

## 1. Package Architecture Overview

`com.empasy.sync.sdk` is the standard client library shared across all domain microservices and external integration modules within the SyncSeries ecosystem.

```
com.empasy.sync.sdk/
├── core/
│   ├── model/                  # A2A communication message and context models
│   ├── tool/                   # MCP tool registration and execution abstractions
│   └── exception/              # Standard business and communication exceptions
├── client/                     # SyncVerse and remote agent RPC client
└── saga/                       # Distributed Saga compensating transaction context
```

---

## 2. Core Model Specifications

### 1) `A2AMessage` (Agent-to-Agent Communication Message Specification)
Standard payload transmitted when an agent requests work from or responds to another agent:

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
    /** Global distributed trace identifier (OpenTelemetry compatible) */
    private final String traceId;

    /** Sender agent identifier (e.g., sync-insight-planner) */
    private final String senderAgentId;

    /** Receiver agent identifier (e.g., sync-boot-engineer) */
    private final String receiverAgentId;

    /** Task intent or method name (e.g., task.execute.code_patch) */
    private final String action;

    /** Data payload (JSON-serializable Map) */
    private final Map<String, Object> payload;

    /** Message creation timestamp */
    @Builder.Default
    private final Instant timestamp = Instant.now();
}
```

### 2) `ToolExecutionResult` (Tool Execution Result Specification)
Standard container returned upon completion of an MCP tool invocation:

```java
package com.empasy.sync.sdk.core.tool;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ToolExecutionResult {
    /** Execution success flag */
    private final boolean success;

    /** Returned data object on success */
    private final Object data;

    /** Error code on failure (e.g., ERR_INVALID_PARAMETER) */
    private final String errorCode;

    /** Human-readable result or error description */
    private final String message;

    /** Elapsed wall-clock time for tool execution (milliseconds) */
    private final long executionDurationMs;
}
```

---

## 3. Standard Exception Handling and RFC 7807 Specification

All system and business exceptions thrown within the SDK strictly adhere to the IETF RFC 7807 (Problem Details for HTTP APIs) specification and are delivered to clients as structured JSON.

### Standard Exception Hierarchy
```
SyncException (Top-level abstract exception)
├── A2ACommunicationException   # Communication failure such as network latency or circuit breaker trip
├── ToolExecutionException      # Tool parameter mismatch or runtime execution error
└── SecurityGuardrailException  # PII violation, insufficient permissions, or injection blocked
```

### RFC 7807 Standard Error Response Example
```json
{
  "type": "https://doc.empasy.com/errors/invalid-tool-argument",
  "title": "Invalid Tool Argument",
  "status": 400,
  "detail": "Parameter 'orderId' does not match the regex '^ORD-\\d{4}-\\d{3,}$'.",
  "instance": "/api/v1/shop/orders/tools/get_order_status",
  "traceId": "c8a49f7b1e2d3c4a",
  "errorCode": "ERR_INVALID_PARAMETER",
  "timestamp": "2026-10-06T07:15:00Z"
}
```

---

## 4. TypeScript / Node.js SDK Compatibility Specification

For frontend and Node.js-based microservice integration, the equivalent interfaces are provided via the `@empasy/sync-sdk-common` npm package:

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

## 5. Coding Agent Standard SPI (`ICodingAgentClient` & 15 `CodingAgentType` Engines)

`sync-sdk-common` provides the `ICodingAgentClient` SPI and `CodingAgentType` enum to connect `SyncVerse`'s 5-Step Spec Studio with 15 autonomous coding agent engines through a unified interface.

### 15 Coding Agent Engines (`CodingAgentType`)
The default inference model for every coding agent is dynamically resolved at runtime from the `sys_config` database table via `SystemConfigHolder.getValue("sync.sdk.agent.default-model.<code_lower>", defaultModel)`:

| Engine Code (`CodingAgentType`) | Implementation Class | Protocol / Execution Mode | Default Model Config Key (`sys_config`) |
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
