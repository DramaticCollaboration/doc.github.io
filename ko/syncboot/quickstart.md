---
title: 5분 퀵스타트 가이드
description: Docker Compose를 사용하여 SyncBoot 백엔드 서버, 관리자 콘솔, MCP Server 및 데이터베이스를 로컬 환경에 실행하고 검증합니다.
sort: 1
---

# 5분 퀵스타트 가이드

Docker Compose를 사용하여 로컬 개발 환경에 SyncBoot 서비스를 구동하고, 관리자 콘솔과 MCP API를 테스트하는 절차를 설명합니다.

---

## 시스템 요구사항

SyncBoot 실행을 위한 권장 사양은 다음과 같습니다:

- **Docker & Docker Compose**: Docker 24.0 이상 / Docker Compose v2.20 이상
- **메모리**: 최소 4GB RAM (권장 8GB 이상)
- **네트워크 포트**: `8080` (Spring Boot API), `3000` (Admin Console UI), `3306` (MySQL), `6379` (Redis)

---

## 1. 저장소 복제 및 서비스 실행

터미널에서 아래 명령을 실행하여 SyncBoot 환경을 기동합니다.

```bash
# 1. 저장소 복제
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/SyncBoot

# 2. Docker Compose 실행
docker-compose -f docker-compose-local.yml up -d
```

> [!NOTE]
> 최초 실행 시 데이터베이스 초기화 스크립트(`01. init.sql`, `02. syncboot.sql`, `03. sample.sql`)가 순차적으로 적용되며, 약 30~60초 후 각 컨테이너가 정상 구동 상태로 전환됩니다.

---

## 2. 접속 및 기본 엔드포인트 확인

컨테이너 구동 후 아래 엔드포인트를 통해 각 서비스에 접근할 수 있습니다.

| 서비스 | URL | 인증 정보 | 설명 |
| :--- | :--- | :--- | :--- |
| **Admin Console UI** | `http://localhost:3000` | `admin` / `syncboot123!` | 백엔드 통합 관제 및 관리자 콘솔 |
| **REST API Server** | `http://localhost:8080` | JWT Bearer Token | Spring Boot 3 기반 도메인 비즈니스 서버 |
| **OpenAPI / Swagger**| `http://localhost:8080/swagger-ui/index.html` | - | REST API 인터랙티브 테스트 인터페이스 |
| **MCP Server SSE** | `http://localhost:8080/mcp/sse` | MCP Auth Header | Model Context Protocol SSE 엔드포인트 |

---

## 3. 정상 동작 검증 (Health Check)

### 1) REST API 상태 확인
```bash
curl -X GET http://localhost:8080/actuator/health
```
```json
{
  "status": "UP",
  "components": {
    "db": { "status": "UP", "details": { "database": "MySQL", "validationQuery": "isValid()" } },
    "redis": { "status": "UP", "details": { "version": "7.2.4" } },
    "diskSpace": { "status": "UP" }
  }
}
```

### 2) MCP Server 등록 도구 조회
```bash
curl -X GET http://localhost:8080/mcp/tools
```
```json
{
  "tools": [
    {
      "name": "syncboot_read_schema",
      "description": "지정된 도메인의 테이블 구조 및 컬럼 메타데이터를 조회합니다."
    },
    {
      "name": "syncboot_execute_query",
      "description": "인가된 범위 내에서 도메인 CRUD 쿼리를 실행합니다."
    },
    {
      "name": "syncboot_fetch_server_logs",
      "description": "최근 분산 서버의 에러 로그를 수집합니다."
    }
  ]
}
```

---

## 관련 문서

- [시스템 아키텍처 및 모듈 구성](./architecture)
- [지능형 스키마 스튜디오 & 3-File DB 표준](./schema-studio)
- [로우코드 풀스택 생성기](./lowcode-generator)
