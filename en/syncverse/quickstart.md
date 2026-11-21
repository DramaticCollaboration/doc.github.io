---
title: "5-Minute Quickstart Guide"
sidebarTitle: "Quickstart"
description: "A hands-on guide to running the SyncVerse central control server locally via Docker Compose, connecting your first MCP agent, and executing natural language directives."
head:
  - - meta
    - name: keywords
      content: SyncVerse Quickstart, quickstart, Docker Compose, tutorial, MCP agent registration, local execution, intent analysis hands-on
  - - meta
    - property: og:title
      content: "SyncVerse 5-Minute Quickstart Guide"
  - - meta
    - property: og:description
      content: "How to run the SyncVerse control tower locally with Docker Compose and configure multi-agent orchestration"
sort: 3
---

# 5-Minute Quickstart Guide

In this tutorial, you will use **Docker Compose** to run the SyncVerse central control server locally, register sample worker agents (`SyncBoot`, `SyncCMS`), and test the natural language intent analysis and execution pipeline.

---

## 1. Prerequisites

- **Docker & Docker Compose**: Docker Desktop 24.0+
- **Java Runtime** (if building from source): JDK 17 or higher
- **Node.js** (for frontend development): Node.js 18.x or higher and pnpm
- **LLM API Key**: OpenAI API Key or an internal Ollama/vLLM endpoint

---

## 2. Run the Local Environment with Docker Compose

Clone the SyncVerse repository and run the bundled Docker Compose script.

```bash
# 1. Navigate to the project directory
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-verse

# 2. Configure environment variables (copy the .env file)
cp .env.example .env

# Set your LLM API key in the .env file (or use local Ollama)
# OPENAI_API_KEY=sk-...
# AGENTSCOPE_MODEL_NAME=gpt-4o-mini

# 3. Start all infrastructure and control server containers
docker compose -f docker-compose-local.yml up -d
```

### Verify Running Containers

```bash
docker compose -f docker-compose-local.yml ps
```

| Service Name | Port (Host) | Role |
| :--- | :--- | :--- |
| `syncverse-server` | `8080` | Spring Boot backend core & MCP orchestrator |
| `syncverse-admin` | `5173` (or `3000`) | Vue 3 control tower admin web console |
| `syncverse-postgres` | `5432` | RDBMS metadata and audit log store |
| `syncverse-redis` | `6379` | Real-time agent state sharing and semantic cache |

---

## 3. Access the Central Control Console

Open `http://localhost:5173` (or your configured port) in your browser.

- **Default Administrator Account**: `admin` / `admin1234!`

Once signed in, the **[AI DLC Unified Command Center]** dashboard opens, where you can monitor the real-time health check status of registered worker agents.

---

## 4. Register and Connect an MCP Agent

Navigate to the **[MCP Tool Registry]** menu in the control tower console to register a domain agent.

```json
{
  "serverName": "syncboot-local",
  "endpoint": "http://syncboot-server:8081/mcp",
  "transport": "HTTP_SSE",
  "capabilities": ["tools", "resources", "prompts"]
}
```

Once registered, SyncVerse queries the agent's available tools (`syncboot_query_schema`, `syncboot_apply_migration`, etc.) and adds them to the catalog.

---

## 5. Hands-On: Test Natural Language Requirement Execution

Open the **[Intent Routing Studio]** menu, enter a natural language prompt, and observe the execution flow.

### Example Input:
```text
"Add a last_login_at column to the user table (tb_user) and update the corresponding entity code"
```

### Verify Execution Results (Pipeline Flow):
1. **Intent Analysis (Intent Router)**:
   - Intent: `CODE_MODIFICATION_WITH_DDL` (Confidence: `0.98`)
   - Target Agents: `SyncSDK Agent`, `SyncBoot Agent`
2. **Code and DDL Generation**:
   - `ALTER TABLE tb_user ADD COLUMN last_login_at TIMESTAMP;`
   - Adds the field to the `User.java` entity
3. **Autonomous QA (SyncETA)**:
   - Automatically runs unit tests in the Stage test environment (all tests pass)
4. **HITL Approval Notification**:
   - Displays the diff in the architect approval console $\rightarrow$ clicking `[Approve]` triggers the deployment pipeline

---

## 6. Next Steps

- Review inter-layer agent communication principles in [4-Tier Autonomous Agent Federation Architecture](./architecture)
- Explore composite requirement decomposition rules in [Intent Routing Engine](./intent-routing)
- Learn about autonomous bug recovery mechanisms in [Self-Healing Pipeline](./self-healing-pipeline)
