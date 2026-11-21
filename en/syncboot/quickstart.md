---
title: 5-Minute Quickstart Guide
description: Launch and verify the SyncBoot backend server, Admin Console, MCP Server, and database locally using Docker Compose.
sort: 1
---

# 5-Minute Quickstart Guide

This guide explains how to start SyncBoot services in a local development environment using Docker Compose and test the Admin Console and MCP API.

---

## System Requirements

The recommended specifications for running SyncBoot are as follows:

- **Docker & Docker Compose**: Docker 24.0 or higher / Docker Compose v2.20 or higher
- **Memory**: Minimum 4GB RAM (8GB or higher recommended)
- **Network Ports**: `8080` (Spring Boot API), `3000` (Admin Console UI), `5432` (PostgreSQL 18.6), `6379` (Redis)

---

## 1. Clone the Repository and Start Services

Run the commands below in your terminal to start the SyncBoot environment.

```bash
# 1. Clone the repository
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-boot

# 2. Run Docker Compose (use docker-compose-dev.yml for full integrated stack, or docker-compose-local.yml for local infrastructure only)
docker compose -f docker-compose-dev.yml up -d
```

> [!NOTE]
> On initial startup, the 6-File database initialization SQL scripts (`db/00_extensions.sql ~ 05_sample_dev.sql`) are applied sequentially, and all containers transition to a healthy running state after approximately 30 to 60 seconds.

---

## 2. Access and Verify Default Endpoints

Once the containers are running, you can access each service through the endpoints below.

| Service | URL | Credentials | Description |
| :--- | :--- | :--- | :--- |
| **Admin Console UI** | `http://localhost:3000` | `admin` / `syncboot123!` | Integrated backend monitoring and Admin Console |
| **REST API Server** | `http://localhost:8080` | JWT Bearer Token | Spring Boot 4.0-based domain business server |
| **OpenAPI / Swagger** | `http://localhost:8080/swagger-ui/index.html` | - | Interactive REST API testing interface |
| **MCP Server Endpoint** | `http://localhost:8080/api/v1/boot/mcp` | MCP Auth Header | Model Context Protocol standard endpoint |

---

## 3. Verify Operational Health (Health Check)

### 1) Check REST API Status
```bash
curl -X GET http://localhost:8080/actuator/health
```
```json
{
  "status": "UP",
  "components": {
    "db": { "status": "UP", "details": { "database": "PostgreSQL", "validationQuery": "isValid()" } },
    "redis": { "status": "UP", "details": { "version": "7.2.4" } },
    "diskSpace": { "status": "UP" }
  }
}
```

### 2) Query Registered MCP Server Tools
```bash
curl -X GET http://localhost:8080/api/v1/boot/mcp/tools
```
```json
{
  "tools": [
    {
      "name": "syncboot_read_schema",
      "description": "Retrieve table structures and column metadata for the specified domain."
    },
    {
      "name": "syncboot_execute_query",
      "description": "Execute domain CRUD queries within the authorized scope."
    },
    {
      "name": "syncboot_fetch_server_logs",
      "description": "Collect recent error logs from distributed servers."
    }
  ]
}
```

---

## Related Documentation

- [System Architecture and Module Structure](./architecture)
- [Intelligent Schema Studio & 6-File DB Standard](./schema-studio)
- [Low-Code Full-Stack Generator](./lowcode-generator)
