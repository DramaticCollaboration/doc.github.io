---
title: "MCP API プロトコルおよび CI/CD 連携仕様"
description: "SyncETA が提供する Model Context Protocol (MCP) ツール仕様、HTTP SSE 通信仕様、および Jenkins・GitHub Actions パイプラインとの連携方法を説明します。"
head:
  - - meta
    - name: keywords
      content: "SyncETA, Model Context Protocol, MCP, CI/CD, GitHub Actions, Jenkins, HTTP SSE, テスト自動化 API, Playwright MCP"
  - - meta
    - property: og:title
      content: "MCP API プロトコルおよび CI/CD 連携仕様 | SyncETA"
  - - meta
    - property: og:description
      content: "SyncETA MCP ツールスキーマおよび CI/CD パイプライン連携ガイドです。"
sort: 1000
---

# MCP API プロトコルおよび CI/CD 連携仕様

SyncETA は **Model Context Protocol (MCP)** 標準に準拠しており、外部の AI オーケストレーター（SyncVerse）および社内の CI/CD パイプラインとの安全なリモート連携をサポートします。

---

## 1. 通信プロトコル仕様

- **プロトコル標準**: Model Context Protocol (MCP) 2024-11-05 仕様準拠
- **トランスポート層**: HTTP Server-Sent Events (SSE)
- **認証方式**: HTTP Bearer JWT（`role` クレームベースのアクセス制御）
- **エンドポイント**: `POST /api/v1/eta/mcp/call`

---

## 2. 主要 MCP ツール（Tools）仕様

### `run_playwright`（シナリオ実行）
指定されたテストシナリオまたはコレクションを Playwright ブラウザコンテナで並列実行します。

```json
{
  "name": "run_playwright",
  "description": "指定されたテストシナリオを特定のブラウザエンジンで並列実行します。",
  "parameters": {
    "type": "object",
    "properties": {
      "scenario_id": {
        "type": "string",
        "description": "実行するシナリオの一意識別子（UUID）"
      },
      "browser_type": {
        "type": "string",
        "enum": ["chromium", "firefox", "webkit"],
        "default": "chromium"
      },
      "headless": {
        "type": "boolean",
        "default": true
      },
      "viewport": {
        "type": "object",
        "properties": {
          "width": { "type": "integer", "default": 1920 },
          "height": { "type": "integer", "default": 1080 }
        }
      },
      "dataset_id": {
        "type": "string",
        "description": "適用するデータセット識別子（任意）"
      }
    },
    "required": ["scenario_id"]
  }
}
```

### `capture_screenshot`（画面キャプチャ）
指定された URL または特定の DOM ノードのレンダリングスクリーンショットを即座にキャプチャして返却します。

```json
{
  "name": "capture_screenshot",
  "description": "特定の DOM 要素またはページ全体のスクリーンショットをキャプチャします。",
  "parameters": {
    "type": "object",
    "properties": {
      "target_url": { "type": "string", "description": "キャプチャ対象となる Web URL" },
      "selector": { "type": "string", "description": "特定の DOM セレクター（省略時はページ全体）" },
      "full_page": { "type": "boolean", "default": false }
    },
    "required": ["target_url"]
  }
}
```

### `get_test_results`（実行結果照会）
実行されたテストのステップ別合格／失敗ログ、DOM スナップショット URL、アーカイブされた MP4 録画映像リンクを照会します。

```json
{
  "name": "get_test_results",
  "description": "テスト実行結果とビデオ、ログ URL を照会します。",
  "parameters": {
    "type": "object",
    "properties": {
      "execution_id": { "type": "string", "description": "実行一意識別子" }
    },
    "required": ["execution_id"]
  }
}
```

---

## 3. CI/CD パイプライン連携例

### GitHub Actions 連携（`.github/workflows/e2e-regression.yml`）

Pull Request 作成時に SyncETA MCP サーバーを呼び出して E2E 回帰テストを実行し、結果を PR コメントとしてレポートする構成例です。

```yaml
name: SyncETA E2E Regression Suite

on:
  pull_request:
    branches: [ main, develop ]

jobs:
  run-synceta-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Trigger SyncETA Regression Tests via MCP
        id: synceta
        env:
          SYNCETA_API_KEY: ${{ secrets.SYNCETA_API_KEY }}
          SYNCETA_HOST: "https://synceta-api.company.internal"
        run: |
          RESPONSE=$(curl -s -X POST "$SYNCETA_HOST/api/v1/eta/mcp/call" \
            -H "Authorization: Bearer $SYNCETA_API_KEY" \
            -H "Content-Type: application/json" \
            -d '{
              "name": "run_playwright",
              "arguments": {
                "scenario_id": "scen_order_checkout_v2",
                "browser_type": "chromium",
                "headless": true
              }
            }')
          echo "SyncETA Execution Response: $RESPONSE"
          
          # 失敗時はビルドを中断処理
          STATUS=$(echo $RESPONSE | jq -r '.result.status')
          if [ "$STATUS" != "PASS" ]; then
            echo "E2E 回帰テスト検証に失敗しました"
            exit 1
          fi
```

### Jenkins パイプライン連携（`Jenkinsfile`）

```groovy
pipeline {
    agent any
    environment {
        SYNCETA_KEY = credentials('synceta-api-token')
        SYNCETA_ENDPOINT = 'https://synceta-api.company.internal/api/v1/eta/mcp/call'
    }
    stages {
        stage('E2E Regression Testing') {
            steps {
                script {
                    def response = httpRequest(
                        httpMode: 'POST',
                        url: "${SYNCETA_ENDPOINT}",
                        customHeaders: [[name: 'Authorization', value: "Bearer ${SYNCETA_KEY}"]],
                        contentType: 'APPLICATION_JSON',
                        requestBody: '{"name": "run_playwright", "arguments": {"scenario_id": "scen_regression_suite", "browser_type": "chromium"}}'
                    )
                    echo "SyncETA Response: ${response.content}"
                }
            }
        }
    }
}
```
