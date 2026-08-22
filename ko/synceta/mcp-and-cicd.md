---
title: "MCP API 프로토콜 및 CI/CD 연동 규격"
description: "SyncETA가 제공하는 Model Context Protocol (MCP) 도구 사양, HTTP SSE 통신 규격 및 Jenkins, GitHub Actions 파이프라인 연동 방법을 설명합니다."
head:
  - - meta
    - name: keywords
      content: SyncETA, Model Context Protocol, MCP, CI/CD, GitHub Actions, Jenkins, HTTP SSE, 테스트 자동화 API, Playwright MCP
  - - meta
    - property: og:title
      content: "MCP API 프로토콜 및 CI/CD 연동 규격 | SyncETA"
  - - meta
    - property: og:description
      content: "SyncETA MCP 도구 스키마 및 CI/CD 파이프라인 연동 가이드입니다."
sort: 1000
---

# MCP API 프로토콜 및 CI/CD 연동 규격

SyncETA는 **Model Context Protocol (MCP)** 표준을 준수하여 외부 AI 오케스트레이터(SyncVerse) 및 사내 CI/CD 파이프라인과의 안전한 원격 연동을 지원합니다.

---

## 1. 통신 프로토콜 사양

- **프로토콜 표준**: Model Context Protocol (MCP) 2024-11-05 사양 준수
- **전송 계층**: HTTP Server-Sent Events (SSE)
- **인증 방식**: HTTP Bearer JWT (`role` 클레임 기반 접근 제어)
- **엔드포인트**: `POST /mcp/v1/tools/call`

---

## 2. 핵심 MCP 도구(Tools) 명세

### `run_playwright` (시나리오 실행)
지정된 테스트 시나리오 또는 컬렉션을 Playwright 브라우저 컨테이너에서 병렬 실행합니다.

```json
{
  "name": "run_playwright",
  "description": "지정된 테스트 시나리오를 특정 브라우저 엔진에서 병렬 실행합니다.",
  "parameters": {
    "type": "object",
    "properties": {
      "scenario_id": {
        "type": "string",
        "description": "실행할 시나리오의 고유 식별자(UUID)"
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
        "description": "적용할 데이터셋 식별자 (선택 사항)"
      }
    },
    "required": ["scenario_id"]
  }
}
```

### `capture_screenshot` (화면 캡처)
지정된 URL 또는 특정 DOM 노드의 렌더링 스크린샷을 즉시 캡처하여 반환합니다.

```json
{
  "name": "capture_screenshot",
  "description": "특정 DOM 요소 또는 전체 페이지 스크린샷을 캡처합니다.",
  "parameters": {
    "type": "object",
    "properties": {
      "target_url": { "type": "string", "description": "캡처할 대상 웹 URL" },
      "selector": { "type": "string", "description": "특정 DOM 선택자 (생략 시 전체 페이지)" },
      "full_page": { "type": "boolean", "default": false }
    },
    "required": ["target_url"]
  }
}
```

### `get_test_results` (실행 결과 조회)
실행된 테스트의 단계별 통과/실패 로그, DOM 스냅샷 URL, 아카이빙된 MP4 녹화 영상 링크를 조회합니다.

```json
{
  "name": "get_test_results",
  "description": "테스트 실행 결과와 비디오, 로그 URL을 조회합니다.",
  "parameters": {
    "type": "object",
    "properties": {
      "execution_id": { "type": "string", "description": "실행 고유 식별자" }
    },
    "required": ["execution_id"]
  }
}
```

---

## 3. CI/CD 파이프라인 연동 예제

### GitHub Actions 연동 (`.github/workflows/e2e-regression.yml`)

Pull Request 발생 시 SyncETA MCP 서버를 호출하여 E2E 회귀 테스트를 수행하고 결과를 PR 코멘트로 리포트하는 구성 예제입니다.

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
          RESPONSE=$(curl -s -X POST "$SYNCETA_HOST/mcp/v1/tools/call" \
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
          
          # 실패 시 빌드 중단 처리
          STATUS=$(echo $RESPONSE | jq -r '.result.status')
          if [ "$STATUS" != "PASS" ]; then
            echo "E2E 회귀 테스트 검증 실패"
            exit 1
          fi
```

### Jenkins 파이프라인 연동 (`Jenkinsfile`)

```groovy
pipeline {
    agent any
    environment {
        SYNCETA_KEY = credentials('synceta-api-token')
        SYNCETA_ENDPOINT = 'https://synceta-api.company.internal/mcp/v1/tools/call'
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
