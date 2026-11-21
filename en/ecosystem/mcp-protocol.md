---
title: Standard MCP Protocol Specification (Model Context Protocol)
shortTitle: MCP Protocol
category: Core Standards
sort: 2
description: Model Context Protocol (MCP) JSON-RPC specification, tool contract formats, and standard error codes enforced across all SyncSeries agents
---

# Standard MCP Protocol Specification (Model Context Protocol)

## 1. Overview

All agents in SyncSeries adopt Anthropic's open **Model Context Protocol (MCP)** as their communication interface to ensure interoperability.  
This enables agents to discover tools and securely invoke remote procedures over HTTP/SSE (Server-Sent Events) or standard I/O (`stdio`) channels without being tied to a specific programming language or framework.

---

## 2. Message Envelope Specification

All MCP communications strictly conform to the JSON-RPC 2.0 standard.

### 2.1 Tool Call Request

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

### 2.2 Tool Call Success Response

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Schema and domain entity generation completed successfully."
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

## 3. Standard Error Handling (RFC 7807 Compliant)

Under SyncSeries enterprise policy, error swallowing and fake-normal responses are strictly prohibited. Every failure is returned with an explicit standard error code.

```json
{
  "jsonrpc": "2.0",
  "id": "req-987a-42c1-8d23-01bf8a421e90",
  "error": {
    "code": -32001,
    "message": "HITL Approval Required: Schema generation involves modifying an existing index and requires administrator approval.",
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

### 3.1 Standard Error Code System

| Code | Name | HTTP Mapping | Description |
|:---|:---|:---|:---|
| **-32700** | Parse Error | 400 Bad Request | Invalid JSON syntax |
| **-32600** | Invalid Request | 400 Bad Request | JSON-RPC schema mismatch |
| **-32601** | Method Not Found | 404 Not Found | Invocation of an unregistered tool or endpoint |
| **-32602** | Invalid Params | 422 Unprocessable | Parameter validation failure |
| **-32603** | Internal Error | 500 Internal Error | Unhandled runtime exception inside the agent |
| **-32001** | HITL Approval Required | 403 Forbidden | Destructive action paused awaiting administrator approval gate |
| **-32002** | Token Budget Exceeded | 429 Too Many Req | Blocked due to FinOps daily/monthly token limit exceeded |
| **-32003** | Compensating Tx Triggered | 500 Internal Error | Distributed Saga compensating transaction rollback in progress |

---

## 4. Streaming Protocol (SSE & Progress Events)

For long-running tasks (such as SyncInsight deep research or SyncETA full regression suites), intermediate progress updates are streamed over SSE.

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive

event: progress
data: {"token": "prg-01", "progress": 25, "total": 100, "message": "Multi-source data lake query completed"}

event: progress
data: {"token": "prg-02", "progress": 60, "total": 100, "message": "Cross-validating via roundtable debate"}

event: complete
data: {"token": "prg-03", "progress": 100, "total": 100, "result": {"reportId": "rep-9912"}}
```
