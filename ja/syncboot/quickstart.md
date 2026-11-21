---
title: 5分クイックスタートガイド
description: Docker Compose を使用して SyncBoot バックエンドサーバー、管理コンソール、MCP Server、およびデータベースをローカル環境に起動して検証します。
sort: 1
---

# 5分クイックスタートガイド

Docker Compose を使用してローカル開発環境に SyncBoot サービスを起動し、管理コンソールと MCP API をテストする手順を説明します。

---

## システム要件

SyncBoot を実行するための推奨スペックは以下のとおりです:

- **Docker & Docker Compose**: Docker 24.0 以上 / Docker Compose v2.20 以上
- **メモリ**: 最小 4GB RAM（推奨 8GB 以上）
- **ネットワークポート**: `8080`（Spring Boot API）、`3000`（Admin Console UI）、`5432`（PostgreSQL 18.6）、`6379`（Redis）

---

## 1. リポジトリのクローンとサービス起動

ターミナルで以下のコマンドを実行し、SyncBoot 環境を起動します。

```bash
# 1. リポジトリのクローン
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/sync-boot

# 2. Docker Compose 実行（全体統合実行時は docker-compose-dev.yml、ローカルインフラ単独実行時は docker-compose-local.yml）
docker compose -f docker-compose-dev.yml up -d
```

> [!NOTE]
> 初回起動時はデータベース初期化 6-File SQL スクリプト（`db/00_extensions.sql ~ 05_sample_dev.sql`）が順次適用され、約 30〜60 秒後に各コンテナが正常稼働状態へ移行します。

---

## 2. 接続および基本エンドポイント確認

コンテナ起動後、以下のエンドポイントから各サービスにアクセスできます。

| サービス | URL | 認証情報 | 説明 |
| :--- | :--- | :--- | :--- |
| **Admin Console UI** | `http://localhost:3000` | `admin` / `syncboot123!` | バックエンド統合管制および管理コンソール |
| **REST API Server** | `http://localhost:8080` | JWT Bearer Token | Spring Boot 4.0 ベースのドメインビジネスサーバー |
| **OpenAPI / Swagger**| `http://localhost:8080/swagger-ui/index.html` | - | REST API インタラクティブテストインターフェース |
| **MCP Server Endpoint** | `http://localhost:8080/api/v1/boot/mcp` | MCP Auth Header | Model Context Protocol 標準エンドポイント |

---

## 3. 正常動作の検証 (Health Check)

### 1) REST API 状態確認
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

### 2) MCP Server 登録ツール照会
```bash
curl -X GET http://localhost:8080/api/v1/boot/mcp/tools
```
```json
{
  "tools": [
    {
      "name": "syncboot_read_schema",
      "description": "指定されたドメインのテーブル構造およびカラムメタデータを照会します。"
    },
    {
      "name": "syncboot_execute_query",
      "description": "認可された範囲内でドメイン CRUD クエリを実行します。"
    },
    {
      "name": "syncboot_fetch_server_logs",
      "description": "最近の分散サーバーのエラーログを収集します。"
    }
  ]
}
```

---

## 関連ドキュメント

- [システムアーキテクチャおよびモジュール構成](./architecture)
- [インテリジェントスキーマスタジオ & 6-File DB 標準](./schema-studio)
- [ローコードフルスタックジェネレーター](./lowcode-generator)
