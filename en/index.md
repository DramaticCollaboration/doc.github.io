---
layout: home
title: "SyncSeries Official Technical Documentation & Developer Guide"

hero:
    name: "Empasy Technical Docs"
    text: "SyncSeries Installation · Architecture · Integration Guide"
    tagline: "Official architecture, API specifications, and operations guides for 4 core products and 7 domain modules built on SyncBoot."
    actions:
      - text: Integration Architecture
        link: /en/ecosystem/
        theme: brand
      - text: Technical Glossary
        link: /en/glossary/
        theme: alt
      - text: Unified Demo Portal ↗
        link: https://demo.empasy.io/en/
        theme: alt

head:
  - - meta
    - name: keywords
      content: "Empasy Technical Docs, Empasy Docs, SyncSeries Manual, SyncVerse, SyncETA, SyncBoot, SyncCMS, SyncInsight, SyncLLM, SyncCrawl, SyncAPIM, SyncWatch, SyncShop, SyncOps, API Documentation"
  - - meta
    - property: og:title
      content: "Empasy Technical Docs (Empasy Docs) — Official SyncSeries Development & Operations Guide"
  - - meta
    - property: og:description
      content: "Installation, architecture, API integration, and operations guides for Empasy SyncSeries' four core solutions and domain-specific extension modules."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/

footer: Copyright © 2026 Empasy Inc. All rights reserved.
---

<div id="solutions"></div>

## Role of This Documentation Portal

> This site (`doc.empasy.com`) serves as the **official technical manual and Single Source of Truth (SSOT) for technical terminology for developers and system operators**.
> For non-technical product overviews, visit the product pages on the [Empasy Official Website (empasy.io)](https://empasy.io/en/pages/index.html). For zero-install interactive previews, visit the [Unified Demo Portal (demo.empasy.io)](https://demo.empasy.io/en/). Standard terminology across the ecosystem is documented in the [Enterprise Technical Glossary (/en/glossary/)](/en/glossary/).

---

## Single Shared Foundation and Module Directory

Rather than building 11 disconnected systems, SyncSeries **organizes enterprise capabilities repeatedly required across real-world projects into modular components built on a unified back-office, authentication, and audit foundation (`SyncBoot` and shared modules)**.

You can start with one module and connect others later while reusing the same permission model and REST / MCP interfaces. Use the interactive architecture map above to inspect API prefixes and related modules, or jump directly to each guide below.

### 4 Core Solutions

| Solution | Role Summary | Documentation |
| :--- | :--- | :--- |
| **SyncVerse** | Requirements structuring, task allocation, quality check tracking, multi-stage stakeholder approvals, and history management | [SyncVerse Guide →](/en/syncverse/) |
| **SyncETA** | Desktop scenario recording (Windows/macOS), UI change compensation, and pre/post-deployment visual regression testing | [SyncETA Guide →](/en/synceta/) |
| **SyncBoot** | Enterprise management system standard built on Spring Boot 4.0, Java 25, and PostgreSQL 18.6 (RBAC, electronic approvals, audit logs) | [SyncBoot Guide →](/en/syncboot/) |
| **SyncCMS** | Multi-site content authoring, review and approval, SEO and accessibility pre-checks, and multilingual page management | [SyncCMS Guide →](/en/synccms/) |

### 7 Domain-Specific Extension Modules

| Domain | Solution | Role Summary | Documentation |
| :--- | :--- | :--- | :--- |
| **Data · AI** | **SyncInsight** | Read-only natural language data querying (NL2SQL), summary reports, and data lineage tracking | [SyncInsight Guide →](/en/syncinsight/) |
| **Data · AI** | **SyncLLM** | Unified multi-model AI gateway, semantic similarity caching, departmental budget controls, and PII masking | [SyncLLM Guide →](/en/syncllm/) |
| **Data · AI** | **SyncCrawl** | Structure-resilient public web data collection, noise filtering, and structured document/vector storage | [SyncCrawl Guide →](/en/synccrawl/) |
| **Security** | **SyncAPIM** | Traffic-based shadow API discovery, OpenAPI spec drift detection, threat detection, and sensitive data masking | [SyncAPIM Guide →](/en/syncapim/) |
| **Security** | **SyncWatch** | Domestic and international security advisory collection and normalization, code inspection, and API defense rule management/deployment | [SyncWatch Guide →](/en/syncwatch/) |
| **Business · Service** | **SyncShop** | E-commerce platform built on 8 independent microservices, minimum-margin price adjustments, and price rollback | [SyncShop Guide →](/en/syncshop/) |
| **Business · Service** | **SyncOps** | SI project contract rate vs. actual cost P&L, resource allocation Gantt charts, 4 major surety bond & subcontracting deadlines, and R&D log management | [SyncOps Guide →](/en/syncops/) |

---

## Development Standards · Project Methodology · Resources

| Category | Summary | Link |
| :--- | :--- | :--- |
| **Enterprise Technical Glossary** | Definitions of standard technical terms including MCP, A2A, AgentScope Java, NL2SQL, GraphRAG, HITL, eBPF, and FinOps | [Enterprise Technical Glossary →](/en/glossary/) |
| **Shared Modules & SDK** | Guides for the shared core (`sync-core`), domain shared modules (`sync-module-*`), and integration SDKs | [Developer Center →](/en/sdk/) · [Shared Modules →](/en/ecosystem/shared-modules-and-sdk) |
| **Full-Lifecycle Methodology** | 6-phase execution procedures and inspection criteria covering Proposal, Analysis, Design, Implementation, Testing, and Transition | [Methodology Overview →](/en/methodology/) |
| **Standard Deliverable Templates (125)** | 125 phase-based Office templates unified under the 90-8-2 enterprise standard format, 14 synchronized Markdown specs, and scale-based Tailoring presets | [Standard Deliverable Templates →](/en/methodology/enterprise-document-templates) |
| **Agile & Git Collaboration** | Scrumban operating procedures, Git branching strategies, and sprint checklists | [Agile Guide →](/en/agile/) |
| **Brochures · Proposals (PDF)** | Collection of summary brochures, integrated proposals, and individual product proposal PDFs | [Proposals Repository →](/en/proposals/) |
| **SyncETA Installer** | Official download page for Windows and macOS desktop applications | [Download SyncETA ↗](https://empasy.io/en/download_eta.html) |

---

## Key Field Implementations

The Empasy engineering team has evolved SyncSeries based on hands-on experience delivering enterprise projects across education, retail and home appliances, mobility and security, and public and energy sectors.

| Industry | Applied Modules | Key Implementation Details |
| :--- | :--- | :--- |
| **Education Platform Enterprise** | **SyncETA** | Applied automated testing across a digital education platform supporting 2,000 concurrent users, reducing scheduled regression verification time from 4 hours to approximately 45 minutes |
| **Retail · Home Appliances Enterprise** | **SyncBoot** | Re-architected legacy business management and back-office systems onto a standardized modular foundation and cleaned up unused tables, shortening deployment cycles from monthly to weekly |
| **Building Materials · Education Portals** | **SyncCMS** | Consolidated regional multilingual websites for overseas subsidiaries and high-volume content portals into a single management platform, simplifying new country site launches and maintenance workflows |
| **Security · Mobility Enterprise** | **SyncAPIM · SyncBoot** | Built a high-speed search and security monitoring environment for high-volume API logs, establishing a real-time anomaly access detection system |
