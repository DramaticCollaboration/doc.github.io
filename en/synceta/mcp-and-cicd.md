---
title: "MCP API Protocol and CI/CD Integration Specification"
description: "Describes the Model Context Protocol (MCP) tool specifications, HTTP SSE communication standards, and Jenkins and GitHub Actions pipeline integration methods provided by SyncETA."
head:
  - - meta
    - name: keywords
      content: SyncETA, Model Context Protocol, MCP, CI/CD, GitHub Actions, Jenkins, HTTP SSE, Test Automation API, Playwright MCP
  - - meta
    - property: og:title
      content: "MCP API Protocol and CI/CD Integration Specification | SyncETA"
  - - meta
    - property: og:description
      content: "SyncETA MCP tool schemas and CI/CD pipeline integration guide."
sort: 1000
---

# MCP API Protocol and CI/CD Integration Specification

SyncETA complies with the **Model Context Protocol (MCP)** standard to support secure remote integration with external AI orchestrators (SyncVerse) and enterprise CI/CD pipelines.

---

## 1. Communication Protocol Specification

- **Protocol Standard**: Compliant with Model Context Protocol (MCP) 2024-11-05 specification
- **Transport Layer**: HTTP Server-Sent Events (SSE)
- **Authentication Method**: HTTP Bearer JWT (`role` claim-based access control)
- **Endpoint**: `POST /api/v1/eta/mcp/call`

---

## 2. Core MCP Tools Specification

### `run_playwright` (Scenario Execution)
Executes a specified test scenario or collection in parallel inside Playwright browser containers.

```json
{
  "name": "run_playwright",
  "description": "Executes the specified test scenario in parallel on a specific browser engine.",
  "parameters": {
    "type": "object",
    "properties": {
      "scenario_id": {
        "type": "string",
        "description": "Unique identifier (UUID) of the scenario to execute"
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
        "description": "Identifier of the dataset to apply (optional)"
      }
    },
    "required": ["scenario_id"]
  }
}
```

### `capture_screenshot` (Screen Capture)
Immediately captures and returns a rendered screenshot of a specified URL or specific DOM node.

```json
{
  "name": "capture_screenshot",
  "description": "Captures a screenshot of a specific DOM element or the full page.",
  "parameters": {
    "type": "object",
    "properties": {
      "target_url": { "type": "string", "description": "Target web URL to capture" },
      "selector": { "type": "string", "description": "Specific DOM selector (captures the full page if omitted)" },
      "full_page": { "type": "boolean", "default": false }
    },
    "required": ["target_url"]
  }
}
```

### `get_test_results` (Execution Result Retrieval)
Retrieves step-by-step pass/fail logs, DOM snapshot URLs, and archived MP4 recording video links for an executed test.

```json
{
  "name": "get_test_results",
  "description": "Retrieves test execution results along with video and log URLs.",
  "parameters": {
    "type": "object",
    "properties": {
      "execution_id": { "type": "string", "description": "Unique execution identifier" }
    },
    "required": ["execution_id"]
  }
}
```

---

## 3. CI/CD Pipeline Integration Examples

### GitHub Actions Integration (`.github/workflows/e2e-regression.yml`)

An example configuration that invokes the SyncETA MCP server on Pull Request events to run E2E regression tests and report results.

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
          
          # Abort build on failure
          STATUS=$(echo $RESPONSE | jq -r '.result.status')
          if [ "$STATUS" != "PASS" ]; then
            echo "E2E regression test verification failed"
            exit 1
          fi
```

### Jenkins Pipeline Integration (`Jenkinsfile`)

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
