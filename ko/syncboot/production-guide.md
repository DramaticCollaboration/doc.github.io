---
title: 프로덕션 배포 및 성능 지표
description: Docker Compose 및 Kubernetes 기반 프로덕션 배포 구성과 성능 지표 및 고가용성 설정 가이드를 설명합니다.
sort: 8
---

# 프로덕션 배포 및 성능 지표

SyncBoot의 프로덕션 환경 운영을 위한 컨테이너 배포 구성과 주요 성능 지표를 설명합니다.

---

## 성능 테스트 지표

내부 테스트 환경 기준의 런타임 및 개발 생산성 지표입니다.

| 항목 | 수치 및 내용 | 비고 |
| :--- | :--- | :--- |
| **도메인 CRUD API & UI 코드 생성** | 약 3분 내외 (원클릭 생성) | Controller, Service, Mapper, Vue UI 일괄 생성 |
| **단일 인스턴스 조회 Throughput** | 8,000+ TPS (HikariCP + Redis 캐시 적용 시) | 테스트 환경 기준 (8 Core, 16GB RAM) |
| **평균 응답 지연 시간 (P99 Latency)** | 12ms 이하 | Redis 캐시 히트 기준 |
| **분산 서버 로그 수집 및 확인** | 1분 이내 | MCP 도구 기반 로그 조회 |

---

## Docker Compose 통합 배포 구성 (`docker-compose-dev.yml`)

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
    image: pgvector/pgvector:pg17
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

## Kubernetes 오토스케일링 (HPA)

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
