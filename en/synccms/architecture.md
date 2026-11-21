---
title: "System Architecture & Clean Architecture | SyncCMS"
description: "Explains SyncCMS's 4-layer enterprise Clean Architecture, Spring Boot 4.0, AgentScope Java, and Nuxt 3 technology stack, and data processing pipeline."
head:
  - - meta
    - name: keywords
      content: "SyncCMS Architecture, Clean Architecture, Spring Boot 4.0, AgentScope Java, Nuxt 3, Vue 3, PostgreSQL JSONB, Redis, Quartz, On-Premises AI"
  - - meta
    - property: og:title
      content: "System Architecture & Clean Architecture | SyncCMS"
  - - meta
    - property: og:description
      content: "Enterprise 4-layer Clean Architecture with Spring Boot 4.0, AgentScope Java, and Nuxt 3 technology stack"
sort: 2
---

# SyncCMS System Architecture

SyncCMS is designed on a **4-layer Clean Architecture** to guarantee high-throughput traffic handling and enterprise-grade scalability.

---

## 4-Layer Architecture Diagram

```mermaid
graph TD
    subgraph "1. Presentation & Service Delivery Layer"
        UI1["User Web Portal (Nuxt 3 / Vue 3 SSR)"]
        UI2["Admin Console (Vue 3 / Vite)"]
        UI3["Mobile Apps & External Channels (iOS / Android / Next.js)"]
        UI4["Sync-Live-SDK Inline Editor"]
    end

    subgraph "2. API Gateway & Security Authentication Layer"
        GW["REST API Controller & Rate Limiter"]
        SSO["Stateless JWT Auth & Enterprise SSO Integration"]
        RBAC["Multi-Tier Fine-Grained RBAC Access Control"]
        AUDIT["Tamper-Evident Audit Log Engine"]
    end

    subgraph "3. Core Framework Layer"
        CTRL["Business Service Logic (Spring Boot 4.0)"]
        AS["AgentScope Java AI Orchestration Engine"]
        ENG["Snapshot Versioning & Rollback Engine"]
        SCHED["Quartz-Based Dynamic Scheduler"]
    end

    subgraph "4. Data & Infrastructure Layer"
        RDB[("RDBMS (PostgreSQL 18.6 JSONB / pgvector)")]
        VEC[("Vector DB (PGVector Enterprise Knowledge Base)")]
        CACHE[("Redis Distributed Cache & Edge CDN")]
        LLM["On-Premises Enterprise LLM (vLLM / Ollama)"]
    end

    UI1 & UI2 & UI3 & UI4 --> GW
    GW --> SSO & RBAC & AUDIT
    SSO & RBAC --> CTRL
    CTRL --> AS & ENG & SCHED
    CTRL --> RDB
    AS --> VEC & LLM
    ENG --> CACHE
```

---

## Detailed Layer Specifications

### 1. Presentation & Service Delivery Layer
- **User Web Portal (Nuxt 3)**: Uses Server-Side Rendering (SSR) to pre-render component trees received from backend APIs on the server, achieving fast initial load times and strong Search Engine Optimization (SEO).
- **Admin Console (Vue 3 / Vite)**: Built on TypeScript and Ant Design to provide menu management, a UI block layout builder, and a Quartz scheduler monitoring console.
- **Sync-Live-SDK**: A lightweight frontend SDK that enables selecting and editing content directly on the live production screen.

### 2. API Gateway & Security Authentication Layer
- **Stateless JWT Authentication**: Supports high-speed processing in distributed server environments without session synchronization overhead.
- **Multi-Tier RBAC (Role-Based Access Control)**: Enforces granular menu and API endpoint permissions by role, including system administrators, site operators, content authors, and approvers.
- **Audit Logging**: Records every lifecycle event—content creation, modification, approval, deployment, and rollback—alongside user ID, IP address, and change diffs.

### 3. Core Framework Layer
- **Spring Boot 4.0 & Java 25**: Built on the enterprise standard Java framework to support reliable transaction management and modular extensibility.
- **AgentScope Java AI Engine (`io.agentscope:agentscope-harness`)**: Executes on-premises LLM integration, autonomous `ReActAgent` tool invocation, and RAG (Retrieval-Augmented Generation) knowledge base queries in a single Java pipeline.
- **Snapshot Rollback Engine**: Persists versioned snapshots of content state at deployment time to enable instant rollback during incidents.
- **Quartz Scheduler**: Controls scheduled batch jobs and timed content publishing in real time.

### 4. Data & Infrastructure Layer
- **PostgreSQL JSONB Storage**: Stores unstructured UI block data and dynamic form fields in `JSONB` format, guaranteeing high-speed queries via GIN indexes.
- **Redis Distributed Cache**: Caches frequently requested headless content to distribute backend database load and minimize response latency.
- **On-Premises Enterprise AI Infrastructure**: Runs open-weight models via vLLM or Ollama inside air-gapped or private networks.

---

## Dynamic Page Rendering Pipeline

SyncCMS screen layouts are dynamically constructed and rendered from database JSON structures rather than rigid static template files.

```mermaid
sequenceDiagram
    autonumber
    participant Client as User Browser
    participant Nuxt as Nuxt 3 (SSR Server)
    participant API as Spring Boot 4.0 API
    participant DB as PostgreSQL (JSONB)

    Client->>Nuxt: Page request (GET /events/summer)
    Nuxt->>API: Content and layout lookup API request
    API->>DB: Query JSONB layout data
    DB-->>API: Return UI block metadata
    API-->>Nuxt: Return standard JSON response
    Nuxt->>Nuxt: Render dynamic Vue components (SSR)
    Nuxt-->>Client: Respond with rendered HTML/CSS/JS stream
```
