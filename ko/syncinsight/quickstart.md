---
title: "빠른 시작 및 API 가이드"
sort: 6
description: "Docker Compose를 활용한 SyncInsight 로컬 인스턴스 실행, 분석 보고서 생성 과정, REST API 및 MCP 도구 연동 방법을 설명합니다."
head:
  - - meta
    - name: keywords
      content: SyncInsight Quickstart, 빠른 시작, Docker Compose, 딥 리서치 튜토리얼, REST API, cURL, MCP 설정, Claude Desktop, Cursor, 엔터프라이즈 설치
  - - meta
    - property: og:title
      content: "SyncInsight 빠른 시작 및 API 가이드 | Empasy"
  - - meta
    - property: og:description
      content: "Docker Compose를 통한 로컬 환경 구성과 첫 분석 보고서 실행 가이드"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncinsight/quickstart
---

# 빠른 시작 및 API 가이드 (Quickstart & API Reference)

이 가이드는 Docker Compose를 사용하여 **SyncInsight** 로컬 인스턴스를 실행하고, 분석 작업을 수행하며, REST API 및 MCP 도구를 연동하는 과정을 설명합니다.

---

## 1. 사전 준비사항

* Docker Engine 24.0+ 및 Docker Compose v2.20+
* 4GB 이상의 메모리 공간
* (선택) OpenAI API Key 또는 사내 로컬 LLM 엔드포인트 URL

---

## 2. Docker Compose로 로컬 환경 실행

### 2.1. 저장소 클론 및 환경 설정
```bash
# 1. 저장소 클론 및 디렉토리 이동
git clone https://github.com/DramaticCollaboration/SyncInsight.git
cd SyncInsight

# 2. 환경 설정 파일 복사
cp .env.example .env
```

`.env` 파일에 AI API 키 및 데이터베이스 설정을 입력합니다:
```dotenv
# .env
SERVER_PORT=8084
SPRING_PROFILES_ACTIVE=local

# PostgreSQL & PgVector
DB_HOST=syncinsight-postgres
DB_PORT=5432
DB_NAME=syncinsight
DB_USER=syncinsight
DB_PASSWORD=syncinsight_secret

# AI Engine (LangChain4j)
OPENAI_API_KEY=sk-proj-your-api-key-here
LLM_MODEL_NAME=gpt-4o
```

### 2.2. 컨테이너 실행
```bash
docker compose -f docker-compose-local.yml up -d
```

실행이 완료되면 브라우저에서 아래 주소로 접속합니다:
* **Insight UI (대시보드)**: `http://localhost:3000` (기본 계정: `admin@syncverse.local` / `admin1234`)
* **Insight API Swagger**: `http://localhost:8084/swagger-ui.html`

---

## 3. 분석 작업 실행 예시 (UI)

1. 브라우저에서 `http://localhost:3000` 접속 후 로그인합니다.
2. 좌측 메뉴에서 **[DeepResearch 캔버스 (SI-005)]**를 선택합니다.
3. 분석 주제를 입력합니다:
   > *"최근 결제 이탈 요인을 분석하고 전환율 개선을 위한 프로모션 방안을 제안해줘."*
4. 우측 **사고 과정(Chain of Thought)** 영역에서 데이터 조회 및 가설 검증 단계를 확인할 수 있습니다.
5. 작성이 완료된 보고서 하단에서 **[액션 제안 카드]**를 검토하고 필요 시 승인 처리를 진행합니다.

---

## 4. 주요 REST API 명세 (cURL 예시)

### 4.1. 분석 작업 등록 (비동기)
```bash
curl -X POST "http://localhost:8084/api/v1/insight/jobs" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{
       "prompt": "하반기 시장 트렌드 및 경쟁사 프로모션 분석",
       "requesterId": "admin@syncverse.local"
     }'
```

**응답 예시 (202 Accepted)**:
```json
{
  "code": 200,
  "message": "분석 작업이 성공적으로 접수되었습니다.",
  "data": {
    "jobId": "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    "status": "PENDING",
    "createdAt": "2026-08-23T07:20:00Z"
  }
}
```

### 4.2. 제안 액션 승인 처리
```bash
curl -X POST "http://localhost:8084/api/v1/insight/actions/b1eebc99-9c0b-4ef8-bb6d-6bb9bd380b22/approve" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{
       "reviewedBy": "admin@syncverse.local",
       "comment": "검토 완료, 프로모션 적용 진행"
     }'
```

---

## 5. Model Context Protocol (MCP) 연동 설정

외부 MCP 클라이언트(Claude Desktop, Cursor 등)에서 SyncInsight의 분석 도구를 연동할 수 있습니다.

`claude_desktop_config.json` 설정 예시:
```json
{
  "mcpServers": {
    "syncinsight": {
      "command": "docker",
      "args": [
        "exec",
        "-i",
        "syncinsight-gateway",
        "java",
        "-jar",
        "/app/sync-mcp-server.jar"
      ]
    }
  }
}
```
연동 후 MCP 클라이언트를 통해 SyncInsight의 지표 조회 및 시뮬레이션 도구를 직접 호출할 수 있습니다.
