---
title: "プロダクションデプロイおよび性能指標"
description: "Docker Compose および Kubernetes ベースのプロダクションデプロイ構成と性能指標、高可用性設定ガイドを説明します。"
sort: 8
---

# プロダクションデプロイおよび性能指標

SyncBoot のプロダクション環境運用に向けたコンテナデプロイ構成と主要な性能指標を説明します。

---

## 性能テスト指標

社内テスト環境基準のランタイムおよび開発生産性指標です。

| 項目 | 数値および内容 | 備考 |
| :--- | :--- | :--- |
| **ドメイン CRUD API & UI コード生成** | 約 3 分前後（ワンクリック生成） | Controller、Service、Mapper、Vue UI を一括生成 |
| **単一インスタンス参照 Throughput** | 8,000+ TPS（HikariCP + Redis キャッシュ適用時） | テスト環境基準（8 Core、16GB RAM） |
| **平均レスポンス遅延時間 (P99 Latency)** | 12ms 以下 | Redis キャッシュヒット基準 |
| **分散サーバーログ収集および確認** | 1 分以内 | MCP ツールベースのログ参照 |

---

## Docker Compose 統合デプロイ構成 (`docker-compose-dev.yml`)

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

## Kubernetes オートスケーリング (HPA)

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
