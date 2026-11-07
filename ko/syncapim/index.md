---
title: "SyncAPIM: AI 자율 API 보안 관제 및 명세 거버넌스 플랫폼"
sidebarTitle: "개요"
description: SyncAPIM은 실시간 API 트래픽 수집, 미등록 섀도우 API 자동 발견, OpenAPI 3.0.1 명세 드리프트 진단, 지능형 웹·API 공격 차단(WAF) 및 민감정보 실시간 마스킹을 제공하는 엔터프라이즈 API 보안·모니터링 에이전트 플랫폼입니다.
head:
  - - meta
    - name: keywords
      content: SyncAPIM, API 모니터링, API 보안, WAF, 섀도우 API 탐지, OpenAPI 3.0 스펙 진단, 개인정보 마스킹, JWT 검증, SQL 인젝션 차단, SSRF 방어, AgentScope Java, PostgreSQL 18.6
  - - meta
    - property: og:title
      content: "SyncAPIM: AI 자율 API 보안 관제 및 명세 거버넌스 플랫폼"
  - - meta
    - property: og:description
      content: SyncAPIM은 실시간 API 트래픽 수집, 미등록 섀도우 API 자동 발견, OpenAPI 3.0.1 명세 드리프트 진단, 지능형 웹·API 공격 차단(WAF) 및 민감정보 실시간 마스킹을 제공합니다.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncapim/
sort: 1
---

# SyncAPIM: AI 자율 API 보안 관제 및 명세 거버넌스 플랫폼

> [!IMPORTANT]
> **SyncSeries 4-Tier API 보안·관제 에이전트 (`SYNC_APIM`)**: `SyncAPIM`은 마이크로서비스 및 레거시 WAS 앞단에서 유통되는 모든 API 트래픽을 실시간 수집하여 **미등록 섀도우 API 자동 카탈로그화**, **OpenAPI 3.0.1 명세 드리프트 진단**, **6대 핵심 웹·API 공격 실시간 차단**, **8대 개인·금융 민감정보 동적 마스킹**을 자율 수행합니다.

## 1. 핵심 아키텍처 및 기술 표준

- **표준 네임스페이스 및 API**: `com.empasy.sync.apim` / Canonical API Prefix `/api/v1/apim/...`
- **성능 격리형 4-JVM 멀티 프로세스 아키텍처**:
  1. `sync-apim-admin` (포트 `18089` / `8080`): 통합 관리 콘솔 REST API, 시계열 통계 배치(`ApimTrafficAggregationService`), `SyncApimAgent` 및 MCP 서버(`/api/v1/apim/mcp`)
  2. `sync-apim-receiver` (포트 `18090` / `8081`, TCP `5044`/`5055`): Java 25 Virtual Threads 기반 초고속 Lumberjack/Packetbeat 패킷 수신 및 Redis Stream(`job_queue`) 프로듀서
  3. `sync-apim-detector` (포트 `18092` / `8090`): Redis Stream 컨슈머 워커, OpenAPI 3.0.1 스키마 자동 추론, 6종 WAF 위협 탐지, 8종 PII 마스킹 및 PostgreSQL 18.6 적재
  4. `sync-apim-gateway` (포트 `18091` / `8083`): DB/Redis 실시간 연동 동적 API 차단 필터(`BlockedApiFilter`) 및 인라인 리버스 프록시 게이트웨이
- **AI 자율 에이전트 프레임워크**: `AgentScope Java` (`io.agentscope:agentscope-harness`) 기반 스펙 드리프트 진단 및 위협 패킷 포렌식 해설
- **PostgreSQL 18.6 단일 고성능 스토리지**: 무거운 외부 OpenSearch 클러스터를 제거하고 PostgreSQL 18.6 `JSONB` + `pg_trgm` GIN 인덱스 기반 시계열 위협·트래픽 이벤트(`wapf_detect_event`) 엔진으로 통합
- **동적 RBAC 메뉴 거버넌스**: Vben Admin `PermissionModeEnum.BACK` 모드와 `sys_permission` 단일 원천 DB를 통해 11개 관제 화면을 역할별로 동적 공급

## 2. 주요 기능 구성

### 2.1 API 모니터링 (`perm-apim-000`)
1. **호스트 관제 (`/waf/host`)**: 보호 대상 API 게이트웨이, WAS, 웹서버 호스트 인벤토리 등록 및 수집 에이전트 연결 상태 관제
2. **API 카탈로그 (`/waf/endpoint`)**: 실트래픽 패킷 분석을 통한 API 엔드포인트 자동 발견, 위험도 점수 산출 및 원클릭 즉시 차단 제어
3. **API 스펙 진단 (`/waf/api_test`)**: OpenAPI 3.0.1 명세서 대비 실제 요청·응답 스키마 불일치(Contract Drift) 및 미승인 섀도우 API 자동 판별
4. **트래픽 통계 (`/waf/api_statistics`)**: 엔드포인트별 시계열 호출량, 호스트별 상위 호출 분포 및 엑셀 내보내기/가져오기 지원
5. **수집 에이전트 (`/waf/agent`)**: 서비스 도메인별 트래픽 수집 에이전트 SHA-256 인증키 발급 및 대상 호스트 매핑 관리

### 2.2 API 보안 방어 (`perm-apim-100`)
1. **위협 탐지 로그 (`/waf/request`)**: SQL Injection, XSS, SSRF, RCE, Directory Traversal, JWT 서명 위변조 등 실시간 위협 패킷 원문 및 차단 여부 포렌식 조회
2. **보안 정책 (`/waf/policy`)**: 인증, 접근제어, 데이터 암호화, 권한 인가, 네트워크 보안, 개인정보 보호, 침입 탐지 등 7대 표준 보안 정책 그룹 운영 (변경 즉시 Redis 캐시 동기화)
3. **탐지 룰 관리 (`/waf/rule`)**: 정규식 시그니처 패턴 및 JWT 무결성 검증 옵션 정의
4. **위협 룰 통계 (`/waf/rule_statistics`)**: 공격 유형 및 심각도 등급별 시계열 탐지 추이 및 상위 공격 룰 차트 분석
5. **민감정보 마스킹 (`/waf/sensitivity`)**: 계좌번호, 이메일, 카드번호, 주민등록번호, 이름, 비밀번호, IP 주소, 전화번호 등 8대 민감정보 실시간 마스킹 규칙 관리
6. **경보 메일 이력 (`/waf/warning_mails`)**: 고위험 공격 차단 및 섀도우 API 발견 시 보안 담당자 경보 발송 이력 추적

## 3. 문서 구성 안내

| 문서명 | 주요 다루는 내용 | 바로가기 |
| :--- | :--- | :--- |
| **4-JVM 아키텍처 & DB 설계** | 4개 독립 JVM 프로세스 분리 구조, Redis Stream 파이프라인, PostgreSQL 18.6 17개 도메인 테이블 상세 명세 | [아키텍처 보기 →](/syncapim/architecture) |
| **WAF 위협 탐지 & PII 마스킹** | 섀도우 API 탐지, OpenAPI 3.0.1 Contract Drift 비교 감사, 6대 공격 탐지 룰 및 8대 민감정보 마스킹 정책 | [보안 거버넌스 보기 →](/syncapim/waf-and-pii-governance) |
| **MCP 도구 & REST API** | `SyncVerse` 관제탑 연동 6대 MCP 도구(`apim_discover_shadow_apis` 등) 및 `/api/v1/apim` REST API 레퍼런스 | [MCP & API 보기 →](/syncapim/mcp-tools) |
| **도입 FAQ** | 온프레미스 폐쇄망 구축, 4-JVM 성능 격리, OpenSearch 대체 아키텍처 등 자주 묻는 질문 | [FAQ 보기 →](/syncapim/enterprise-faq) |
