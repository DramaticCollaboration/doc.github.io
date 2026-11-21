---
title: "Engineering Research Archive (Study)"
description: "An in-depth technical research and architecture analysis collection covering the core SyncSeries technology stack: Playwright, Vision-LLM, MCP, Hybrid RAG, and high-performance Java runtimes."
head:
  - - meta
    - name: keywords
      content: Technical Research, Playwright CDP, Vision-LLM, Self-Healing Algorithm, MCP Orchestration, Hybrid RAG, Virtual Threads, AgentScope, Empasy
  - - meta
    - property: og:title
      content: "Engineering Research Archive | Empasy"
  - - meta
    - property: og:description
      content: "In-depth technical analysis and architecture research materials for solving real-world engineering challenges."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/study/
sort: 1
---

# Engineering Research Archive (Study)

This archive documents in-depth research on implementation principles, performance benchmarks, and architecture design patterns for the core technology stack powering Empasy SyncSeries products (SyncETA, SyncVerse, SyncBoot, SyncCrawl, and more).

---

## Core Research Categories

### 1. Web Browser Automation & QA Engineering
- **[Visual Regression Analysis and DOM Synchronization Based on Playwright and CDP](./playwright-cdp-visual-regression)**: Analysis of rendering frame capture and network-idle synchronization techniques using the Chrome DevTools Protocol.
- **[Vision-LLM-Based UI Element Bounding Box Inference and Self-Healing Algorithms](./vision-llm-self-healing-algorithm)**: A regression test recovery pipeline that leverages visual screen context and coordinates to adapt to CSS class name changes.

### 2. Distributed Agents & Protocols
- **[Model Context Protocol (MCP) JSON-RPC Specification Analysis and Tool Orchestration](./mcp-jsonrpc-agent-orchestration)**: Analysis of the Claude/Playwright standard tool interface and enterprise security gateway design patterns.
- **[Asynchronous Messaging Performance Analysis Based on Java 25 Virtual Threads and AgentScope](./springboot-virtual-threads-agentscope)**: Benchmarks on overcoming blocking I/O and handling tens of thousands of concurrent agent communications in Spring Boot environments.

### 3. AI Models & Knowledge Pipelines
- **[Enterprise RAG Architecture: Sparse + Dense Hybrid Search and Cross-Encoder Reranking](./hybrid-rag-dense-sparse-reranking)**: A pipeline combining BM25 and embedding vectors to improve domain-specific retrieval precision.
- **[Practical Fine-Tuning of the Llama-3.2-Vision Multimodal Model](./vision-llm-finetuning)**: Dataset construction and LoRA tuning for Korean web UI screen component recognition.
- **[Root Causes and Mitigation Strategies for Post-Fine-Tuning LLM Performance Degradation](./llm-finetuning-degradation-analysis)**: Research on preventing Catastrophic Forgetting and calibrating alignment data.
- **[Building a RAG-Based Knowledge Retrieval Pipeline](./rag)**: Unstructured data chunking and metadata filtering strategies.

---

## Research Methodology and Validation Criteria

The Empasy engineering team adheres to the following principles across all technical research:
1. **Code-Level Empirical Validation**: Rather than stopping at theoretical models, we build executable prototypes or benchmark code to verify performance.
2. **Quantitative Evidence**: Technology adoption decisions are driven by quantified metrics including latency, memory footprint, throughput, and failure rate.
3. **Production Resilience Review**: Defensive logic is evaluated against edge cases such as network disconnections, thread exhaustion, and delayed DOM rendering.

---

## Product Suite Mapping by Research Topic

| Research Document | Key Technical Keywords | Production Products Applied |
| :--- | :--- | :--- |
| **Playwright & CDP Synchronization** | CDP Frame Capture, Network Idle, Layout Shift | `SyncETA`, `SyncCrawl`, `sync-module-audit` |
| **Vision-LLM Self-Healing Algorithm** | Bounding Box Inference, Semantic DOM Anchor, Self-Healing | `SyncETA`, `SyncCrawl` |
| **MCP JSON-RPC Orchestration** | JSON-RPC 2.0, HTTP SSE, A2A Tool Discovery | `SyncVerse`, Enterprise 11-Agent MCP Servers |
| **Virtual Threads & AgentScope** | JDK 25 Virtual Threads, `ReentrantLock`, `MsgHub` | `sync-core`, `sync-module-ai`, Enterprise Backends |
| **Hybrid RAG & Reranking** | `PostgreSQL 18.6 pgvector` HNSW, `pg_trgm`, Cross-Encoder | `sync-module-rag`, `SyncInsight`, `SyncCrawl` |
| **Vision-LLM Fine-Tuning & Degradation Analysis** | Llama-3.2-Vision, LoRA, Catastrophic Forgetting Prevention | `SyncETA`, `SyncLLM` On-Premises Models |
