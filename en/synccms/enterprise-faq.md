---
title: "Enterprise Operations & Technical FAQ | SyncCMS"
description: "Frequently asked technical questions for adopting SyncCMS (source code scope, licensing, infrastructure specs, PostgreSQL indexing) and technical support channels."
head:
  - - meta
    - name: keywords
      content: "SyncCMS FAQ, Enterprise CMS, Source Code Disclosure, Infrastructure Specs, PostgreSQL GIN Index, Groupware Approval Integration, Adoption Inquiry"
  - - meta
    - property: og:title
      content: "Enterprise Operations & Technical FAQ | SyncCMS"
  - - meta
    - property: og:description
      content: "SyncCMS licensing, source code delivery scope, recommended infrastructure specs, and PostgreSQL performance tuning guide"
sort: 7
---

# Enterprise Operations & Technical FAQ

Technical Q&A and recommended system specifications for engineering and infrastructure teams evaluating or operating SyncCMS.

---

## Frequently Asked Questions (FAQ)

### Q1. What scope of business source code is provided?
**A. The entire Spring Boot 4.0 core application source code and all RDBMS DDL scripts are transparently provided.**  
SyncCMS is not black-box software delivered only as compiled binaries. Because full source code is provided for core controllers, service logic, the Admin UI (Vue 3), and the User Web Portal (Nuxt 3), your internal engineering team can customize features to match corporate security policies or business needs and internalize the system as a permanent digital asset.

### Q2. Are there additional licensing fees if traffic or content volume increases?
**A. No additional licensing fees apply.**  
Unlike third-party SaaS CMS platforms (such as Contentful or Sanity), there is no metered billing tied to API call volume, admin seat counts, or bandwidth traffic. Once deployed on-premises or in your private cloud, you can operate it perpetually without usage-based surcharges.

### Q3. Can AI features run in an air-gapped internal network with no external internet access?
**A. Yes, full functionality is supported through on-premises infrastructure.**  
Deploy open-weight models (such as Llama-3, EXAONE, or Solar) on internal GPU servers using vLLM or Ollama, and connect them to the backend via AgentScope Java (`io.agentscope:agentscope-harness`). AI draft generation, PII de-identification, and RAG knowledge retrieval run entirely inside your network with zero external data leakage.

### Q4. How does SyncCMS integrate with existing corporate groupware approvals and core ERP systems?
**A. Integration is handled via standard webhooks and coordinated database transactions.**  
Prior to content deployment, SyncCMS invokes your corporate groupware API to initiate an approval draft; upon receiving the final approval webhook, it sequentially executes the RDBMS commit, ERP promotion master synchronization, and distributed cache invalidation.

---

## Recommended System Infrastructure Specifications

| Component | Minimum Spec (Dev / Test) | Recommended Spec (Production 1,000+ RPS) |
| :--- | :--- | :--- |
| **API Server (Spring Boot)** | 2 Core CPU, 4GB RAM | 4 Core CPU, 8GB RAM (2+ nodes behind load balancer) |
| **JVM Options** | `-Xms2g -Xmx2g` | `-Xms4g -Xmx4g -XX:+UseG1GC` |
| **Database (PostgreSQL)** | 2 Core CPU, 4GB RAM | 8 Core CPU, 16GB RAM, SSD storage |
| **Cache Server (Redis)** | 1 Core CPU, 2GB RAM | 2 Core CPU, 4GB RAM (Sentinel or Cluster) |
| **Internal AI Server (Optional)** | CPU Only (quantized models) | NVIDIA A10G / L40S GPU (running vLLM) |
| **Supported Database** | PostgreSQL 18.6+ (`pgvector`, `JSONB`) | PostgreSQL 18.6 (`pgvector/pgvector:pg18` enterprise standard) |

---

## PostgreSQL JSONB Indexing Tuning Guide

SyncCMS uses PostgreSQL's `JSONB` data type to store flexible UI blocks and dynamic form schemas. Configure GIN and expression indexes for high-speed querying:

```sql
-- Create GIN index for querying UI block data
CREATE INDEX idx_cms_content_fields_gin 
ON tb_cms_content USING gin (fields jsonb_path_ops);

-- Optimize conditional search performance for a specific field (e.g., headline)
CREATE INDEX idx_cms_content_headline 
ON tb_cms_content ((fields->>'headline'));
```

---

## Technical Support & Adoption Consultation

If you require a detailed technical review, PoC support, or architecture consulting for SyncCMS, please contact us through the channels below.

- **Technical & Sales Inquiries**: `poh@empasy.com`
- **Phone**: `+82-507-1360-8169`
- **Operator**: Empasy Inc. Solution Development Team | Empasy SyncSeries
