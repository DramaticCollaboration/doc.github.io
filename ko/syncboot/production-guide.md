---
title: 프로덕션 배포 및 성능 지표
description: Docker Compose 및 Kubernetes 기반 프로덕션 배포 구성과 성능 지표 및 고가용성 설정 가이드를 설명합니다.
sort: 8
---

# 프로덕션 배포 및 성능 지표

SyncBoot의 프로덕션 환경 운영을 위한 컨테이너 배포 구성과 주요 성능 지표를 설명합니다.

---

## 성능 테스트 지표 (Benchmark Data)

내부 테스트 환경 기준의 런타임 및 개발 생산성 지표입니다.

| 항목 | 수치 및 내용 | 비고 |
| :--- | :--- | :--- |
| **도메인 CRUD API & UI 코드 생성** | 약 3분 내외 (원클릭 생성) | Controller, Service, Mapper, Vue UI 일괄 생성 |
| **단일 인스턴스 조회 Throughput** | 8,000+ TPS (HikariCP + Redis 캐시 적용 시) | 테스트 환경 기준 (8 Core, 16GB RAM) |
| **평균 응답 지연 시간 (P99 Latency)** | 12ms 이하 | Redis 캐시 히트 기준 |
| **분산 서버 로그 수집 및 확인** | 1분 이내 | MCP 도구 기반 로그 조회 |

---

## Docker Compose 배포 구성

```yaml
version: '3.8'

services:
  syncboot-server:
    image: empasy/syncboot-server:latest
    container_name: syncboot-server
    restart: always
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_HOST=syncboot-mysql
      - REDIS_HOST=syncboot-redis
      - JAVA_OPTS=-Xms2g -Xmx4g -XX:+UseG1GC
    ports:
      - "8080:8080"
    depends_on:
      - syncboot-mysql
      - syncboot-redis

  syncboot-admin:
    image: empasy/syncboot-admin:latest
    container_name: syncboot-admin
    restart: always
    ports:
      - "3000:80"
    environment:
      - BACKEND_API_URL=http://syncboot-server:8080

  syncboot-mysql:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${DB_ROOT_PASSWORD}
      MYSQL_DATABASE: syncboot_db
    volumes:
      - mysql_data:/var/lib/mysql

  syncboot-redis:
    image: redis:7.2-alpine
    restart: always
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis_data:/data

volumes:
  mysql_data:
  redis_data:
```

---

## Kubernetes 오토스케일링 (HPA)

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: syncboot-server-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: syncboot-server
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
