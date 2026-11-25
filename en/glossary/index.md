---
title: SyncSeries Technical Glossary
sidebarTitle: Technical Glossary
description: Official Single Source of Truth (SSOT) definitions for core technical terms used across the Empasy SyncSeries enterprise architecture and its 11-product suite (MCP, A2A, AgentScope Java, NL2SQL, RAG/GraphRAG, pgvector, HITL, eBPF, WAF, RBAC, Zero-Mock, Canonical URL, MSA, Playwright Self-Healing, CVSS/CVE/STIX, FinOps, and Semantic Cache).
head:
  - - meta
    - name: keywords
      content: Technical Glossary, SyncSeries Glossary, MCP, A2A, AgentScope Java, NL2SQL, RAG, GraphRAG, pgvector, HITL, eBPF, WAF, RBAC, Zero-Mock, Canonical URL, MSA, Playwright Self-Healing, CVSS, CVE, STIX, FinOps, Semantic Cache, Empasy
  - - meta
    - property: og:title
      content: SyncSeries Technical Glossary
  - - meta
    - property: og:description
      content: Official Single Source of Truth (SSOT) definitions for standard technical terms across the Empasy SyncSeries architecture and product suite
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/glossary/
sort: 1
---

# SyncSeries Technical Glossary

> **Document Scope**: This page is the **official Single Source of Truth (SSOT) for Empasy and SyncSeries technical terminology** maintained by `doc.empasy.com`. For non-technical or procurement-oriented product overviews, please refer to the [Empasy Official Website (empasy.io)](https://empasy.io/en/pages/index.html) and the [Unified Demo Portal (demo.empasy.io)](https://demo.empasy.io/en/).

---

## Quick Index

| Category | Included Terms |
| :--- | :--- |
| **Agents & Orchestration** | [MCP](#mcp) · [A2A](#a2a) · [AgentScope Java](#agentscope-java) · [HITL](#hitl) |
| **Data, Search & LLM Operations** | [NL2SQL](#nl2sql) · [RAG / GraphRAG](#rag-graphrag) · [pgvector](#pgvector) · [FinOps](#finops) · [Semantic Cache](#semantic-cache) |
| **Architecture & Development Standards** | [Canonical URL](#canonical-url) · [MSA](#msa) · [RBAC](#rbac) · [Zero-Mock](#zero-mock) |
| **Security & Quality Automation** | [eBPF](#ebpf) · [WAF](#waf) · [CVSS / CVE / STIX](#cvss-cve-stix) · [Playwright Self-Healing](#playwright-self-healing) |

---

## 1. Agents & Orchestration

### MCP (Model Context Protocol) {#mcp}
* **Quick Summary**: A standard communication protocol between AI agents and enterprise systems or tools.
* **Technical Definition**: An open protocol based on JSON-RPC 2.0 that enables LLMs and agent runtimes to discover and invoke external Tools, Resources, and Prompts using standardized schemas. Every domain module in SyncSeries exposes standard MCP tools over SSE or Streamable HTTP transport layers.
* **Related Documentation**: [Standard MCP Protocol Specification](/en/ecosystem/mcp-protocol) · [Custom MCP Tool Development](/en/sdk/custom-mcp-tool) · [SyncVerse MCP Registry](/en/syncverse/mcp-tool-registry)

### A2A (Agent-to-Agent) {#a2a}
* **Quick Summary**: A collaborative architecture in which software modules (agents) responsible for distinct business domains exchange and coordinate tasks.
* **Technical Definition**: A distributed agent collaboration architecture where the central orchestrator (`SyncVerse`) decomposes high-level business requests into subtask units (DAGs) and coordinates completion by exchanging asynchronous messages and state events across domain agents (`SyncBoot`, `SyncCMS`, `SyncShop`, `SyncInsight`, `SyncAPIM`, `SyncWatch`, `SyncOps`, `SyncETA`, `SyncCrawl`, and `SyncLLM`).
* **Related Documentation**: [SyncSeries Ecosystem Architecture](/en/ecosystem/) · [Cross-Module E2E Integration Scenarios](/en/ecosystem/e2e-workflow) · [SyncVerse Architecture](/en/syncverse/architecture)

### AgentScope Java {#agentscope-java}
* **Quick Summary**: The standard framework for reliably executing AI reasoning and tool invocations in Java (Spring Boot) environments.
* **Technical Definition**: The single standard AI agent runtime (`io.agentscope:agentscope-harness`) adopted across SyncSeries Java 25 and Spring Boot 4.0 backends. It provides `ReActAgent`-based reasoning-action loops, `MsgHub`-based multi-agent message broadcasting, and structured tool binding while strictly separating database transaction boundaries (`@Transactional`) from long-running LLM and MCP I/O calls.
* **Related Documentation**: [AgentScope Java Standard Guide](/en/ecosystem/agentscope-guide) · [SyncBoot AgentScope Integration in Practice](/en/syncboot/agentscope-integration) · [Virtual Threads & AgentScope Study](/en/study/springboot-virtual-threads-agentscope)

### HITL (Human-in-the-Loop) {#hitl}
* **Quick Summary**: A safety workflow requiring an authorized reviewer to inspect and approve or reject critical changes before execution or deployment.
* **Technical Definition**: A governance mechanism that classifies AI agent execution privileges into risk tiers (Tier 1 read-only autonomous execution, Tier 2 post-notified soft changes, and Tier 3 pre-approved high-risk changes) and enforces multi-party approval chains with change diffs and impact reports prior to high-risk operations such as database schema (DDL) modifications, permission updates, pricing policy changes, or production deployments.
* **Related Documentation**: [HITL Governance & Saga](/en/ecosystem/hitl-governance) · [Multi-Stage Approval & Audit Operations Guide](/en/guide/hitl-approval-operations) · [SyncVerse HITL Approval](/en/syncverse/hitl-governance)

---

## 2. Data, Search & LLM Operations

### NL2SQL (Natural Language to SQL) {#nl2sql}
* **Quick Summary**: A technology that automatically translates everyday natural-language questions into safe database queries.
* **Technical Definition**: A capability that combines user natural-language queries with database metadata and schema context to generate executable SQL statements. SyncSeries (`sync-module-nl2sql`, `SyncInsight`) uses the **Apache Calcite AST parser** to permit read-only `SELECT` queries exclusively, block `INSERT`, `UPDATE`, `DELETE`, `DROP`, and unauthorized table access at the syntax-tree level, and enforce mandatory `LIMIT` guardrails.
* **Related Documentation**: [SyncInsight NL2SQL Data Analytics](/en/syncinsight/nl2sql-and-data) · [Shared Modules & SDK](/en/ecosystem/shared-modules-and-sdk)

### RAG / GraphRAG (Retrieval-Augmented Generation) {#rag-graphrag}
* **Quick Summary**: An approach where AI retrieves internal documents and knowledge relationships directly to generate grounded answers instead of guessing.
* **Technical Definition**:
  * **RAG**: A retrieval-augmented generation technique that chunks and embeds external documents, manuals, and crawled web data, retrieves relevant evidence via hybrid vector/keyword search, and injects it into the LLM prompt to minimize hallucinations.
  * **GraphRAG**: An extended retrieval architecture that indexes entities and relations within documents as a knowledge graph, tracing causal and dependency relationships across multiple documents that simple similarity search alone cannot connect.
* **Related Documentation**: [SyncCrawl RAG Knowledge Pipeline](/en/synccrawl/rag-knowledge-pipeline) · [Hybrid RAG & Reranking Study](/en/study/hybrid-rag-dense-sparse-reranking) · [RAG Pipeline Fundamentals](/en/study/rag)

### pgvector {#pgvector}
* **Quick Summary**: A PostgreSQL extension that handles both structured relational data and AI semantic search in a single database without a separate dedicated vector DB.
* **Technical Definition**: An open-source extension that natively supports storing high-dimensional floating-point vector (`vector`) columns and performing HNSW / IVFFlat approximate nearest neighbor (ANN) similarity searches inside PostgreSQL 18.6. SyncSeries manages relational data, full-text search (`pg_trgm`), and vector search (`pgvector`) within a single PostgreSQL 18.6 transaction boundary without operating redundant external vector stores.
* **Related Documentation**: [SyncBoot PostgreSQL 18.6 Local Environment](/en/syncboot/h2) · [SyncCrawl Architecture](/en/synccrawl/architecture) · [SyncOps Architecture](/en/syncops/architecture)

### FinOps (AI / Cloud Financial Operations) {#finops}
* **Quick Summary**: A management system that tracks AI usage and cloud costs by department and project in real time and enforces budget limits.
* **Technical Definition**: A cost governance framework that meters input/output token counts, model unit prices, and request latencies across multi-LLM invocations (commercial APIs and on-premises open-source models) by tenant, department, and project in real time, and enforces automated policies at budget thresholds (such as 80% alerts, 100% hard blocks, or downgrading to lightweight models).
* **Related Documentation**: [SyncLLM FinOps & Semantic Cache](/en/syncllm/finops-and-cache) · [FinOps Budget & Cost Operations Guide](/en/guide/finops-budget-operations) · [SyncVerse LLM Gateway](/en/syncverse/finops-and-syncllm)

### Semantic Cache {#semantic-cache}
* **Quick Summary**: A caching technique that speeds up AI responses and reduces costs by reusing previous answers to questions with the same meaning, even when phrased differently.
* **Technical Definition**: Unlike traditional caches that rely strictly on exact string matching, a semantic cache computes the cosine similarity between embedding vectors of user prompts and, when a configured threshold (e.g., 0.95 or higher) is met, immediately returns a verified response stored in Redis/pgvector, reducing redundant LLM inference costs and response latency.
* **Related Documentation**: [SyncLLM FinOps & Semantic Cache](/en/syncllm/finops-and-cache) · [SyncLLM Intelligent Model Routing](/en/syncllm/routing-and-gateway)

---

## 3. Architecture & Development Standards

### Canonical URL (Enterprise Single Standard API Path) {#canonical-url}
* **Quick Summary**: A path standard that unifies API addresses across all modules under one consistent convention to eliminate integration ambiguity.
* **Technical Definition**: An API design principle that maps exactly one canonical path (`/api/v1/{product}/{resource}`) per resource so SyncSeries backend controllers and frontend callers match 1:1. By prohibiting multi-path array mappings and proxy path rewrites, it eliminates route mismatches across the API gateway, documentation, authorization, and security detection (`SyncAPIM`).
* **Related Documentation**: [SyncBoot System Architecture](/en/syncboot/architecture) · [SyncAPIM Architecture](/en/syncapim/architecture)

### MSA (Microservices Architecture) {#msa}
* **Quick Summary**: An architecture that splits business capabilities such as orders, payments, search, and authentication into independent services to isolate failures and scale each independently.
* **Technical Definition**: An architectural style that decomposes a large monolithic application into independently deployable and scalable services aligned with domain boundaries. In SyncSeries, it is applied to `SyncShop` (composed of independent modules including Gateway, Auth, Admin, Portal, Search, Monitor, MBG, and MCP Server) and `SyncAPIM` (4-JVM performance isolation architecture) to ensure high throughput and fault isolation.
* **Related Documentation**: [SyncShop System Architecture](/en/syncshop/architecture) · [SyncAPIM 4-JVM Architecture](/en/syncapim/architecture)

### RBAC (Role-Based Access Control) {#rbac}
* **Quick Summary**: An authorization system that controls which menus users can view and which actions they can execute based on their job function and role.
* **Technical Definition**: A security model that controls access by mapping roles (`sys_role`) to menu, feature, and button permissions (`sys_permission`, `sys_role_permission`) rather than assigning permissions directly to individual users. SyncSeries frontends prohibit static menu hardcoding and dynamically fetch only the current user's authorized permission tree from the backend authorization API (`/api/v1/{product}/sys/permission/getUserPermissionByToken`).
* **Related Documentation**: [SyncBoot Security & Multi-Tenancy](/en/syncboot/enterprise-security) · [Security Whitepaper & Compliance](/en/ecosystem/security-and-compliance)

### Zero-Mock (Live Integration Integrity Standard) {#zero-mock}
* **Quick Summary**: A quality standard that verifies every screen and feature integrates with real databases and servers, without fake data or placeholder responses.
* **Technical Definition**: An engineering quality discipline that prohibits hardcoded dummy arrays, empty collection returns, exception suppression returning fake success responses (Fake Normalcy), and prompt string branching (Prompt Sniffing) in production code and UIs. Failures must propagate transparently as explicit errors based on RFC 7807 Problem Details and are continuously verified via automated static and contract verification scripts.
* **Related Documentation**: [Zero-Mock Quality Harness](/en/ecosystem/zero-mock-harness) · [Zero-Mock Test Harness Guide](/en/sdk/zero-mock-testing)

---

## 4. Security & Quality Automation

### eBPF (Extended Berkeley Packet Filter) {#ebpf}
* **Quick Summary**: A Linux security technology that detects and blocks malicious traffic at the operating system kernel level with ultra-low latency.
* **Technical Definition**: A technology that safely executes sandbox-verified bytecode on Linux kernel network and system-call hooks (such as XDP and TC) without modifying kernel source code or loading custom kernel modules directly. `SyncAPIM` uses eBPF to block attacking IPs and malicious patterns at the kernel boundary at high speed before traffic reaches the application server (WAS).
* **Related Documentation**: [SyncAPIM Overview](/en/syncapim/) · [SyncAPIM WAF Threat Detection & PII Masking](/en/syncapim/waf-and-pii-governance)

### WAF (Web Application Firewall) {#waf}
* **Quick Summary**: A firewall that detects and blocks web and API attacks—such as SQL injection and cross-site scripting (XSS)—in real time.
* **Technical Definition**: A security layer that inspects HTTP/HTTPS and REST/GraphQL API payloads at the application layer (L7) to detect and block exploit attempts including SQL Injection, XSS, SSRF, Path Traversal, Command Injection, and authentication bypass. `SyncAPIM` reduces false positives by combining a lexical syntax tokenizer (`SqlXssLexicalTokenizer`) with virtual patch rules (`ApimDefensePack`) distributed by `SyncWatch`.
* **Related Documentation**: [SyncAPIM WAF Threat Detection & PII Masking](/en/syncapim/waf-and-pii-governance) · [SyncWatch Architecture & Rule Compiler](/en/syncwatch/architecture)

### CVSS / CVE / STIX {#cvss-cve-stix}
* **Quick Summary**: Global standards for security vulnerability identifiers (CVE), severity scores (CVSS), and threat intelligence exchange (STIX).
* **Technical Definition**:
  * **CVE (Common Vulnerabilities and Exposures)**: An international standard identifier assigned to publicly disclosed software security vulnerabilities (e.g., `CVE-2026-XXXXX`).
  * **CVSS (Common Vulnerability Scoring System)**: A severity scoring system that quantifies exploit complexity and impact scope on a scale from 0.0 to 10.0 (Low, Medium, High, Critical).
  * **STIX (Structured Threat Information Expression)**: An international standard (OASIS) for exchanging cyber threat intelligence (attack patterns, indicators of compromise, and mitigations) in a machine-readable JSON structure.
* **Related Documentation**: [SyncWatch Overview](/en/syncwatch/) · [SyncWatch Verse & APIM Integration Protocol](/en/syncwatch/devsecops-protocol) · [SyncWatch DB Schema & API Specification](/en/syncwatch/api-and-schema)

### Playwright Self-Healing {#playwright-self-healing}
* **Quick Summary**: A technology that keeps automated tests running without breaking when UI layouts or button positions change by re-locating target elements automatically.
* **Technical Definition**: A recovery mechanism during Playwright-based E2E browser automation that, when existing CSS or XPath selectors fail due to UI changes, progressively combines semantic DOM attributes, the accessibility tree (ARIA Role/Label), and visual screen analysis (Vision-LLM) to re-discover modified elements and automatically repair selectors.
* **Related Documentation**: [SyncETA Self-Healing & Vision](/en/synceta/self-healing-and-vision) · [Vision-LLM Self-Healing Algorithm Study](/en/study/vision-llm-self-healing-algorithm) · [SyncETA Glossary](/en/synceta/glossary)

---

## Additional Domain Glossaries

* **[SyncETA Test Automation Glossary](/en/synceta/glossary)**: QA automation terms including stories, scenarios, datasets, and collections
* **[Agile & Software Engineering Glossary](/en/agile/glossaryOfTerms)**: Collaboration process terms including Scrumban, WIP, velocity, DoR/DoD, and story points
