---
title: "Production Deployment & Performance Benchmarks"
description: "Explains container deployment topologies, performance benchmarks, and high-availability configuration guidelines for Docker Compose and Kubernetes in production."
sort: 8
---

# Production Deployment & Performance Benchmarks

This guide describes container deployment configurations and key performance benchmarks for running SyncBoot in production environments.

---

## Performance Benchmark Metrics

Runtime and developer productivity metrics measured in internal test environments:

| Metric | Value & Details | Notes |
| :--- | :--- | :--- |
| **Domain CRUD API & UI Code Generation** | ~3 minutes (one-click generation) | Batch generation of Controller, Service, Mapper, and Vue UI |
| **Single-Instance Read Throughput** | 8,000+ TPS (with HikariCP + Redis cache) | Measured in test environment (8 Core, 16GB RAM) |
| **Average Response Latency (P99 Latency)** | Under 12ms | Based on Redis cache hits |
| **Distributed Server Log Collection & Inspection** | Within 1 minute | MCP tool-based log retrieval |

---

## Docker Compose Unified Deployment (`docker-compose-dev.yml`)

```yaml
services:
  sync-boot-server:
    image: empasy/sync-boot-server:latest
    container_name: sync-boot-server
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - DB_HOST=sync-boot-db
      - REDIS_HOST=sync-boot-redis
      - JAVA_OPTS=-Xms2g -Xmx4g -XX:+UseG1GC
    ports:
      - "8080:8080"
    depends_on:
      - sync-boot-db
      - sync-boot-redis

  sync-boot-admin:
    image: empasy/sync-boot-admin:latest
    container_name: sync-boot-admin
    restart: always
    ports:
      - "3000:80"
    environment:
      - BACKEND_API_URL=http://sync-boot-server:8080

  sync-boot-db:
    image: pgvector/pgvector:pg18
    restart: always
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: syncboot_db
    volumes:
      - postgres_data:/var/lib/postgresql/data

  sync-boot-redis:
    image: redis:7.2-alpine
    restart: always
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

---

## Kubernetes Autoscaling (HPA)

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: sync-boot-server-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: sync-boot-server
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```
