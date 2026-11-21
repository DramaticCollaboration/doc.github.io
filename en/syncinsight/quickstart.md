---
title: "Quickstart and API Guide"
sort: 6
description: "Explains how to run a local SyncInsight instance using Docker Compose, generate analytical reports, and integrate REST APIs and MCP tools."
head:
  - - meta
    - name: keywords
      content: SyncInsight Quickstart, Docker Compose, Deep Research Tutorial, REST API, cURL, MCP Setup, Claude Desktop, Cursor, Enterprise Installation
  - - meta
    - property: og:title
      content: "SyncInsight Quickstart and API Guide | Empasy"
  - - meta
    - property: og:description
      content: "Guide to setting up a local environment with Docker Compose and running your first analytical report"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/syncinsight/quickstart
---

# Quickstart and API Guide (Quickstart & API Reference)

This guide explains how to launch a local **SyncInsight** instance using Docker Compose, run analytical jobs, and integrate REST APIs and MCP tools.

---

## 1. Prerequisites

* Docker Engine 24.0+ and Docker Compose v2.20+
* At least 4 GB of available memory
* (Optional) OpenAI API Key or an internal local LLM endpoint URL

---

## 2. Running the Local Environment with Docker Compose

### 2.1. Clone Repository and Configure Environment
```bash
# 1. Clone the repository and navigate to the directory
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-insight

# 2. Copy the environment configuration file
cp .env.example .env
```

Enter your AI API key and database configuration in the `.env` file:
```dotenv
# .env
SERVER_PORT=8084
SPRING_PROFILES_ACTIVE=local

# PostgreSQL & PgVector
DB_HOST=syncinsight-postgres
DB_PORT=5432
DB_NAME=syncinsight
DB_USER=syncinsight
DB_PASSWORD=syncinsight_secret

# AI Engine (AgentScope Java - io.agentscope:agentscope-harness)
OPENAI_API_KEY=sk-proj-your-api-key-here
LLM_MODEL_NAME=gpt-4o
```

### 2.2. Launch Containers
```bash
docker compose -f docker-compose-dev.yml up -d
```

Once startup is complete, open the following URLs in your browser:
* **Insight UI (Dashboard)**: `http://localhost:3101` (Default account: `admin` / `123456`)
* **Insight API Swagger**: `http://localhost:8084/swagger-ui.html` (Canonical API Prefix: `/api/v1/insight/...`)

---

## 3. Running an Analysis Job Example (UI)

1. Open `http://localhost:3101` in your browser and sign in (`admin` / `123456`).
2. Select **[DeepResearch Canvas (SI-005)]** from the left menu.
3. Enter the analysis topic:
   > *"Analyze recent checkout drop-off factors and propose promotional strategies to improve conversion rates."*
4. Observe the data retrieval and hypothesis verification steps in the **Chain of Thought** panel on the right.
5. At the bottom of the completed report, review the **[Action Proposal Card]** and process approval if needed.

---

## 4. Key REST API Specifications (cURL Examples)

### 4.1. Register Analysis Job (Asynchronous)
```bash
curl -X POST "http://localhost:8084/api/v1/insight/jobs" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{
       "prompt": "Analyze H2 market trends and competitor promotions",
       "requesterId": "admin"
     }'
```

**Example Response (202 Accepted)**:
```json
{
  "code": 200,
  "message": "Analysis job has been successfully accepted.",
  "data": {
    "jobId": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    "status": "PENDING",
    "createdAt": "2026-08-23T07:20:00Z"
  }
}
```

### 4.2. Approve Proposed Action
```bash
curl -X POST "http://localhost:8084/api/v1/insight/actions/b1eebc99-9c0b-4ef8-bb6d-6bb9bd380b22/approve" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{
       "reviewedBy": "admin",
       "comment": "Review completed; proceeding with promotion rollout"
     }'
```

---

## 5. Model Context Protocol (MCP) Integration Setup

You can integrate SyncInsight's analytical tools from external MCP clients (such as Claude Desktop and Cursor).

Example `claude_desktop_config.json` configuration:
```json
{
  "mcpServers": {
    "syncinsight": {
      "command": "docker",
      "args": [
        "exec",
        "-i",
        "syncinsight-gateway",
        "java",
        "-jar",
        "/app/sync-mcp-server.jar"
      ]
    }
  }
}
```
Once connected, you can invoke SyncInsight's metric query and simulation tools directly through your MCP client.
