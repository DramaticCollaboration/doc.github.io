---
title: "5분 빠른 시작 가이드 (Quickstart)"
sidebarTitle: "빠른 시작"
description: "로컬 환경에서 Docker Compose를 통해 SyncVerse 중앙 제어 서버를 구동하고, 첫 번째 MCP 에이전트를 연결하여 자연어 지시를 실행하는 실습 가이드입니다."
head:
  - - meta
    - name: keywords
      content: SyncVerse Quickstart, 빠른 시작, Docker Compose, 튜토리얼, MCP 에이전트 등록, 로컬 실행, 의도 분석 실습
  - - meta
    - property: og:title
      content: "SyncVerse 5분 빠른 시작 가이드 (Quickstart)"
  - - meta
    - property: og:description
      content: "Docker Compose를 활용하여 SyncVerse 관제탑을 로컬에 구동하고 멀티 에이전트 오케스트레이션을 구성하는 방법"
sort: 3
---

# 5분 빠른 시작 가이드 (Quickstart)

이 튜토리얼에서는 **Docker Compose**를 사용하여 로컬 환경에 SyncVerse 중앙 제어 서버를 실행하고, 샘플 워커 에이전트(`SyncBoot`, `SyncCMS`)를 등록한 후 자연어 의도 분석 및 실행 파이프라인을 테스트합니다.

---

## 1. 사전 요구사항 (Prerequisites)

- **Docker & Docker Compose**: Docker Desktop 24.0+
- **Java Runtime** (직접 빌드 시): JDK 17 이상
- **Node.js** (프론트엔드 개발 시): Node.js 18.x 이상 및 pnpm
- **LLM API Key**: OpenAI API Key 또는 사내 Ollama/vLLM 엔드포인트

---

## 2. Docker Compose로 로컬 환경 실행

SyncVerse 저장소를 클론하고 번들된 Docker Compose 스크립트를 실행합니다.

```bash
# 1. 프로젝트 디렉토리로 이동
git clone https://github.com/DramaticCollaboration/SyncSeries.git
cd SyncSeries/SyncVerse

# 2. 환경 변수 설정 (.env 파일 복사)
cp .env.example .env

# .env 파일에서 LLM API 키 설정 (또는 로컬 Ollama 사용)
# OPENAI_API_KEY=sk-...
# LANGCHAIN4J_MODEL_NAME=gpt-4o-mini

# 3. 전체 인프라 및 제어 서버 컨테이너 실행
docker compose -f docker-compose-local.yml up -d
```

### 컨테이너 기동 확인

```bash
docker compose -f docker-compose-local.yml ps
```

| 서비스명 | 포트 (Host) | 역할 |
| :--- | :--- | :--- |
| `syncverse-server` | `8080` | Spring Boot 백엔드 코어 & MCP 오케스트레이터 |
| `syncverse-admin` | `5173` (또는 `3000`) | Vue 3 관제탑 관리자 웹 콘솔 |
| `syncverse-postgres`| `5432` | RDBMS 메타데이터 및 감사 로그 저장소 |
| `syncverse-redis` | `6379` | 에이전트 실시간 상태 공유 및 시맨틱 캐시 |

---

## 3. 중앙 제어 콘솔 접속

브라우저에서 `http://localhost:5173` (또는 지정된 포트)로 접속합니다.

- **기본 관리자 계정**: `admin` / `admin1234!`

로그인하면 **[AI DLC 통합 관제탑 (Command Center)]** 대시보드가 표시되며, 등록된 하위 워커 에이전트들의 실시간 헬스체크 상태를 확인할 수 있습니다.

---

## 4. MCP 에이전트 등록 및 연결

관제탑 콘솔의 **[MCP 도구 레지스트리 (MCP Registry)]** 메뉴로 이동하여 도메인 에이전트를 등록합니다.

```json
{
  "serverName": "syncboot-local",
  "endpoint": "http://syncboot-server:8081/mcp",
  "transport": "HTTP_SSE",
  "capabilities": ["tools", "resources", "prompts"]
}
```

등록을 완료하면 SyncVerse가 해당 에이전트의 가용 도구(`syncboot_query_schema`, `syncboot_apply_migration` 등)를 조회하여 카탈로그에 등록합니다.

---

## 5. 실습: 자연어 요구사항 실행 테스트

**[인텐트 라우팅 스튜디오 (Intent Routing Studio)]** 메뉴에서 자연어 프롬프트를 입력하고 실행 흐름을 확인합니다.

### 입력 예제:
```text
"사용자 테이블(tb_user)에 최근 로그인 일시(last_login_at) 컬럼을 추가하고, 관련 엔티티 코드를 수정해줘"
```

### 실행 결과 확인 (파이프라인 진행 흐름):
1. **의도 분석 (Intent Router)**: 
   - 의도: `CODE_MODIFICATION_WITH_DDL` (신뢰도: `0.98`)
   - 타겟 에이전트: `SyncSDK Agent`, `SyncBoot Agent`
2. **코드 및 DDL 생성**:
   - `ALTER TABLE tb_user ADD COLUMN last_login_at TIMESTAMP;`
   - `User.java` 엔티티 필드 추가
3. **무인 QA (SyncETA)**:
   - Stage 테스트 환경에서 단위 테스트 자동 실행 (전체 테스트 통과)
4. **HITL 승인 알림**:
   - 아키텍트 승인 콘솔에 Diff 표시 $\rightarrow$ `[Approve]` 클릭 시 배포 파이프라인 트리거

---

## 6. 다음 단계

- [3-Layer 멀티 에이전트 아키텍처](./architecture)에서 에이전트 계층 간 통신 원리 확인
- [인텐트 라우팅 엔진](./intent-routing)에서 복합 요구사항 분해 규칙 확인
- [자가치유 파이프라인](./self-healing-pipeline)에서 무인 버그 복구 메커니즘 확인