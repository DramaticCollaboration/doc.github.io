---
title: "SyncAPIM MCP ツールおよび REST API リファレンス"
sidebarTitle: "MCP ツール & REST API"
description: "SyncAPIM が SyncVerse 中央管制塔および外部エージェントに提供する6つの標準 MCP ツール（apim_discover_shadow_apis など）と /api/v1/apim REST API 仕様です。"
head:
  - - meta
    - name: keywords
      content: SyncAPIM MCP, apim_discover_shadow_apis, apim_analyze_threat_events, apim_scan_pii_exposure, apim_manage_security_policy, apim_export_openapi_spec, /api/v1/apim
  - - meta
    - property: og:title
      content: "SyncAPIM MCP ツールおよび REST API リファレンス"
  - - meta
    - property: og:description
      content: "シャドウ API 検知、脅威イベント分析、PII 露出スキャン、セキュリティポリシー制御、OpenAPI 3.0.1 ドリフト監査 MCP ツールおよび REST API 仕様"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncapim/mcp-tools
sort: 4
---

# SyncAPIM MCP ツールおよび REST API リファレンス

`SyncAPIM` は、全社単一 Canonical URL 標準に基づき、すべての REST API および Model Context Protocol (MCP) エンドポイントを **`/api/v1/apim/...`** プレフィックスで提供します。

- **クラウドエンドポイント**: `https://apim.empasy.com/api/v1/apim`（デモポータル: `https://apim-admin.empasy.io/api/v1/apim`）
- **ローカル開発ポート**:
  - Admin UI: `http://localhost:3119` (`http://apim.localhost`)
  - Homepage: `http://localhost:5190` (`http://apim-home.localhost`)
  - JVM #1 (`sync-apim-admin`): `http://localhost:18089`
  - JVM #2 (`sync-apim-receiver`): `http://localhost:18090` (TCP `5044` / `5055`)
  - JVM #3 (`sync-apim-detector`): `http://localhost:18092`
  - JVM #4 (`sync-apim-gateway`): `http://localhost:18091` (`http://apim-gw.localhost`)

---

## 1. 標準 MCP ツール (MCP Tools) 仕様 (`/api/v1/apim/mcp`)

`SyncVerse` 中央管制塔、`SyncETA` QA エージェント、`SyncInsight` 分析エージェントは、JSON-RPC 2.0 ベースの MCP エンドポイント（`POST /api/v1/apim/mcp`、`GET /api/v1/apim/mcp/sse`）を通じて `SyncAPIM` の6つのセキュリティ・ガバナンスツールを自律的に呼び出します。

### 1.1 `apim_discover_shadow_apis`
未登録（Shadow）API エンドポイント、重複パス、および高リスク（`risk_score >= minRiskScore`）API 一覧を検知します。

- **入力パラメータ (Arguments)**:
  ```json
  {
    "host": "api.empasy.com",
    "minRiskScore": 50
  }
  ```
- **返却ペイロード例**:
  ```json
  {
    "tool": "apim_discover_shadow_apis",
    "totalEndpoints": 10,
    "matchedHighRiskCount": 3,
    "shadowOrDriftedSpecCount": 2,
    "duplicateEndpointCount": 1
  }
  ```

### 1.2 `apim_analyze_threat_events`
PostgreSQL 18.6 `wapf_detect_event` 時系列テーブルから SQLi、XSS、SSRF、RCE、JWT 改ざん脅威検知イベントを取得し、攻撃種別ごとの統計を分析します。

- **入力パラメータ (Arguments)**:
  ```json
  {
    "host": "api.empasy.com",
    "threatCode": "SQLI",
    "limit": 20
  }
  ```

### 1.3 `apim_scan_pii_exposure`
API リクエスト・レスポンスデータフィールド（`wapf_data_field`）およびパケットから、住民登録番号、カード番号、口座番号など8種類の機密情報（PII）露出状況をスキャンします。

- **入力パラメータ (Arguments)**:
  ```json
  {
    "endpointUuid": "ep_apim_004"
  }
  ```

### 1.4 `apim_manage_security_policy`
特定の API エンドポイントの遮断状態（`block_status`: `1` 遮断 / `0` 解除）を即時変更するか、WAF セキュリティポリシーをマッピングして Redis キャッシュを同期します。

- **入力パラメータ (Arguments)**:
  ```json
  {
    "action": "BLOCK_ENDPOINT",
    "endpointUuid": "ep_apim_008",
    "blockStatus": "1"
  }
  ```

### 1.5 `apim_export_openapi_spec`
実トラフィックに基づいて自動推論された OpenAPI 3.0.1 JSON 仕様を抽出し、設計仕様に対する Contract Drift 監査結果を返却します。

- **入力パラメータ (Arguments)**:
  ```json
  {
    "endpointUuid": "ep_apim_001",
    "designSpec": "{\"openapi\":\"3.0.1\",\"paths\":{\"/api/v1/shop/orders\":{\"post\":{}}}}"
  }
  ```

### 1.6 `apim_receive_watch_defense_pack`
[`SyncWatch`](/ja/syncwatch/) がコンパイルおよび独自サンドボックス検証を完了したランタイム攻撃パターン防御パック（`ApimDefensePack`）を受信し、`SqlXssLexicalTokenizer` フィンガープリントマッチャーおよび `SandboxedDefenseEvaluator` に無停止ホットスワップで適用します。

### 1.7 `agent_execute_task`
`SyncVerse` 管制塔が委任した自然言語セキュリティ監査・遮断タスクを、`AgentScope Java` `ReActAgent` ループで自律遂行します。

---

## 2. 4-JVM コア REST API 仕様 (`/api/v1/apim/...`)

| 担当 JVM | 機能領域 | HTTP Method & Canonical Endpoint | 説明 |
| :--- | :--- | :--- | :--- |
| **`sync-apim-admin`** | **動的メニュー認可** | `GET /api/v1/apim/sys/permission/getUserPermissionByToken` | ログインユーザーのロール別動的メニューツリー（`sys_permission`）を返却 |
| **`sync-apim-admin`** | **API カタログ** | `GET /api/v1/apim/endpoint/list`<br>`GET /api/v1/apim/endpoint/detail`<br>`POST /api/v1/apim/endpoint/add`<br>`PUT /api/v1/apim/endpoint/edit` | API エンドポイント一覧、データフィールド詳細、パスマージおよび遮断状態（`blockStatus`）制御 |
| **`sync-apim-admin`** | **OpenAPI 仕様 & 監査** | `GET /api/v1/apim/spec/list`<br>`GET /api/v1/apim/spec/download`<br>`POST /api/v1/apim/spec/audit` | OpenAPI 3.0.1 仕様の参照・ダウンロードおよび Contract Drift 比較監査の実行 |
| **`sync-apim-admin`** | **脅威検知イベント** | `GET /api/v1/apim/event/list`<br>`GET /api/v1/apim/event/interval/count`<br>`GET /api/v1/apim/event/interval/registry/count` | PostgreSQL `wapf_detect_event` ベースのリアルタイム脅威パケット参照および時系列集計 |
| **`sync-apim-admin`** | **セキュリティポリシー & ルール** | `GET /api/v1/apim/policy/list`<br>`POST /api/v1/apim/policy/add`<br>`GET /api/v1/apim/rule/list`<br>`GET /api/v1/apim/rule/stat` | 7つのセキュリティポリシーおよび6つの脅威検知ルール CRUD、攻撃種別・重大度別統計の参照 |
| **`sync-apim-admin`** | **機密情報 & 警報** | `GET /api/v1/apim/sensitivity/list`<br>`GET /api/v1/apim/mail/list`<br>`POST /api/v1/apim/mail/send` | 8種類の PII マスキング正規表現管理およびセキュリティ警報メール送信 |
| **`sync-apim-receiver`** | **パケット収集** | `POST /api/v1/apim/receiver/ingest`<br>`GET /api/v1/apim/receiver/status` | HTTP テレメトリパケット受信（Redis Stream `job_queue` 格納）およびコレクター状態参照 |
| **`sync-apim-detector`** | **リアルタイム検知ワーカー** | `POST /api/v1/apim/detector/inspect`<br>`POST /api/v1/apim/detector/rules/reload`<br>`GET /api/v1/apim/detector/status` | パケット即時精密検査、検知ルール・機密情報キャッシュ強制リロードおよびワーカー状態確認 |
| **`sync-apim-gateway`** | **インライン遮断ゲートウェイ** | `GET /api/v1/apim/gateway/blocked`<br>`POST /api/v1/apim/gateway/block`<br>`POST /api/v1/apim/gateway/unblock` | リアルタイム遮断エンドポイント一覧参照およびランタイム即時遮断/解除 |

---

## 3. cURL 呼び出し例

### 3.1 MCP ツール呼び出し (`apim_discover_shadow_apis`)
```bash
curl -X POST "http://localhost:18089/api/v1/apim/mcp" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": "req-apim-01",
    "method": "tools/call",
    "params": {
      "name": "apim_discover_shadow_apis",
      "arguments": {
        "minRiskScore": 50
      }
    }
  }'
```

### 3.2 設計仕様に対する実トラフィック Contract Drift 監査の実行
```bash
curl -X POST "http://localhost:18089/api/v1/apim/spec/audit" \
  -H "Content-Type: application/json" \
  -d '{
    "uuid": "spec_apim_003"
  }'
```
