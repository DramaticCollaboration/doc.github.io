---
title: 전사 기술 용어집 (SyncSeries Technical Glossary)
sidebarTitle: 전사 기술 용어집
description: 엠파시(Empasy) SyncSeries 전사 아키텍처와 11종 제품군에서 사용하는 핵심 기술 용어(MCP, A2A, AgentScope Java, NL2SQL, RAG/GraphRAG, pgvector, HITL, eBPF, WAF, RBAC, Zero-Mock, Canonical URL, MSA, Playwright Self-Healing, CVSS/CVE/STIX, FinOps, Semantic Cache)의 공식 기술 정의 원천(SSOT)입니다.
head:
  - - meta
    - name: keywords
      content: 기술 용어집, SyncSeries Glossary, MCP, A2A, AgentScope Java, NL2SQL, RAG, GraphRAG, pgvector, HITL, eBPF, WAF, RBAC, Zero-Mock, Canonical URL, MSA, Playwright Self-Healing, CVSS, CVE, STIX, FinOps, Semantic Cache, 엠파시, Empasy
  - - meta
    - property: og:title
      content: 전사 기술 용어집 (SyncSeries Technical Glossary)
  - - meta
    - property: og:description
      content: 엠파시 SyncSeries 아키텍처 및 제품군 전반의 표준 기술 용어 공식 정의(SSOT)
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/glossary/
sort: 1
---

# 전사 기술 용어집 (SyncSeries Technical Glossary)

> **문서 성격 안내**: 본 페이지는 `doc.empasy.com`이 관리하는 **엠파시(Empasy) 및 SyncSeries 공식 기술 용어 단일 원천(SSOT)**입니다. 비개발자·도입 검토 담당자용 제품 소개는 [엠파시 공식 홈페이지(empasy.io)](https://empasy.io/) 및 [통합 데모 포털(demo.empasy.io)](https://demo.empasy.io/)을 참고하시기 바랍니다.

---

## 빠른 색인

| 분류 | 포함 용어 |
| :--- | :--- |
| **에이전트 · 오케스트레이션** | [MCP](#mcp) · [A2A](#a2a) · [AgentScope Java](#agentscope-java) · [HITL](#hitl) |
| **데이터 · 검색 · LLM 운영** | [NL2SQL](#nl2sql) · [RAG / GraphRAG](#rag-graphrag) · [pgvector](#pgvector) · [FinOps](#finops) · [Semantic Cache](#semantic-cache) |
| **아키텍처 · 개발 표준** | [Canonical URL](#canonical-url) · [MSA](#msa) · [RBAC](#rbac) · [Zero-Mock](#zero-mock) |
| **보안 · 품질 자동화** | [eBPF](#ebpf) · [WAF](#waf) · [CVSS / CVE / STIX](#cvss-cve-stix) · [Playwright Self-Healing](#playwright-self-healing) |

---

## 1. 에이전트 · 오케스트레이션

### MCP (Model Context Protocol) {#mcp}
* **쉬운 요약**: AI 에이전트와 업무 시스템·도구 사이의 표준 통신 규격입니다.
* **기술 정의**: JSON-RPC 2.0 기반으로 LLM 및 에이전트 런타임이 외부 도구(Tool), 리소스(Resource), 프롬프트(Prompt)를 표준화된 스키마로 탐색·호출할 수 있게 하는 개방형 프로토콜입니다. SyncSeries의 모든 도메인 모듈은 SSE 또는 Streamable HTTP 전송 계층으로 표준 MCP 도구를 노출합니다.
* **관련 문서**: [표준 MCP 프로토콜 명세](/ecosystem/mcp-protocol) · [커스텀 MCP 도구 개발](/sdk/custom-mcp-tool) · [SyncVerse MCP 레지스트리](/syncverse/mcp-tool-registry)

### A2A (Agent-to-Agent) {#a2a}
* **쉬운 요약**: 각 업무 영역을 담당하는 소프트웨어 모듈(에이전트)들이 작업을 주고받는 협업 구조입니다.
* **기술 정의**: 중앙 관제 오케스트레이터(`SyncVerse`)가 상위 비즈니스 요청을 하위 작업 단위(DAG)로 분해하고, 각 도메인 에이전트(`SyncBoot`, `SyncCMS`, `SyncShop`, `SyncInsight`, `SyncAPIM`, `SyncWatch`, `SyncOps`, `SyncETA`, `SyncCrawl`, `SyncLLM`) 간에 비동기 메시지 및 상태 이벤트를 교환하며 완료까지 조율하는 분산 에이전트 협업 아키텍처입니다.
* **관련 문서**: [SyncSeries 생태계 아키텍처](/ecosystem/) · [모듈 간 E2E 연동 시나리오](/ecosystem/e2e-workflow) · [SyncVerse 아키텍처](/syncverse/architecture)

### AgentScope Java {#agentscope-java}
* **쉬운 요약**: Java(Spring Boot) 환경에서 AI 추론과 도구 호출을 안정적으로 실행하는 표준 프레임워크입니다.
* **기술 정의**: SyncSeries 전사 Java 25 · Spring Boot 4.0 백엔드에서 채택한 단일 AI 에이전트 런타임(`io.agentscope:agentscope-harness`)입니다. `ReActAgent` 기반 추론-행동 루프, `MsgHub` 기반 멀티 에이전트 메시지 브로드캐스트, 구조화 도구 바인딩을 제공하며, DB 트랜잭션(`@Transactional`)과 장시간 LLM/MCP I/O 경계를 명확히 분리하여 운영합니다.
* **관련 문서**: [AgentScope Java 표준 가이드](/ecosystem/agentscope-guide) · [SyncBoot AgentScope 연동 실무](/syncboot/agentscope-integration) · [가상 스레드 & AgentScope 연구](/study/springboot-virtual-threads-agentscope)

### HITL (Human-in-the-Loop) {#hitl}
* **쉬운 요약**: 중요한 변경이나 배포 전 담당자가 직접 검토하고 승인·반려하는 안전 절차입니다.
* **기술 정의**: AI 에이전트의 실행 권한을 위험도 계층(Tier 1 읽기 전용 자율 실행, Tier 2 사후 통보형 소프트 변경, Tier 3 사전 승인 필수 고위험 변경)으로 분류하고, DB 스키마(DDL) 변경·권한 수정·가격 정책 반영·상용 배포 같은 고위험 작업 전에 변경 Diff와 영향도 리포트를 제시하여 다자간 결재선 승인을 강제하는 거버넌스 메커니즘입니다.
* **관련 문서**: [HITL 거버넌스 & Saga](/ecosystem/hitl-governance) · [다단계 결재 & 감사 운영 가이드](/guide/hitl-approval-operations) · [SyncVerse HITL 승인](/syncverse/hitl-governance)

---

## 2. 데이터 · 검색 · LLM 운영

### NL2SQL (Natural Language to SQL) {#nl2sql}
* **쉬운 요약**: 일상적인 한국어 질문을 안전한 데이터베이스 조회 명령으로 자동 변환하는 기술입니다.
* **기술 정의**: 사용자가 입력한 자연어 질의를 데이터베이스 메타데이터·스키마 컨텍스트와 결합해 실행 가능한 SQL 문으로 생성하는 기술입니다. SyncSeries(`sync-module-nl2sql`, `SyncInsight`)는 **Apache Calcite AST 파서**를 통해 `SELECT` 읽기 전용 질의만 허용하고 `INSERT`/`UPDATE`/`DELETE`/`DROP` 및 허용되지 않은 테이블 접근을 구문 트리 단계에서 원천 차단하며, 강제 `LIMIT` 가드레일을 적용합니다.
* **관련 문서**: [SyncInsight NL2SQL 데이터 분석](/syncinsight/nl2sql-and-data) · [공유 모듈 & SDK](/ecosystem/shared-modules-and-sdk)

### RAG / GraphRAG (Retrieval-Augmented Generation) {#rag-graphrag}
* **쉬운 요약**: AI가 추측하지 않고 사내 문서와 지식 관계를 직접 찾아 근거 기반으로 답변하는 방식입니다.
* **기술 정의**:
  * **RAG**: 외부 문서·매뉴얼·웹 수집 데이터를 청킹(Chunking) 및 임베딩하여 벡터/키워드 하이브리드 검색으로 관련 근거를 먼저 조회한 뒤 LLM 프롬프트에 주입해 환각(Hallucination)을 최소화하는 검색 증강 생성 기법입니다.
  * **GraphRAG**: 문서 내 개체(Entity)와 관계(Relation)를 지식 그래프 구조로 함께 색인하여, 단순 유사도 검색만으로 연결하기 어려운 다중 문서 간 인과·의존 관계를 추적하는 확장 검색 아키텍처입니다.
* **관련 문서**: [SyncCrawl RAG 지식 파이프라인](/synccrawl/rag-knowledge-pipeline) · [하이브리드 RAG & 리랭킹 연구](/study/hybrid-rag-dense-sparse-reranking) · [RAG 파이프라인 기초](/study/rag)

### pgvector {#pgvector}
* **쉬운 요약**: 별도 전용 벡터 DB 없이 PostgreSQL 하나로 정형 데이터와 AI 의미 검색을 함께 처리하는 확장 모듈입니다.
* **기술 정의**: PostgreSQL 18.6 데이터베이스 내에서 고차원 실수 벡터(`vector`) 컬럼 저장과 HNSW / IVFFlat 근사 최근접 이웃(ANN) 유사도 검색을 네이티브로 지원하는 오픈소스 확장입니다. SyncSeries는 별도의 외부 벡터 저장소 이중 운영 없이 PostgreSQL 18.6 단일 트랜잭션 경계 안에서 관계형 데이터, 전문 검색(`pg_trgm`), 벡터 검색(`pgvector`)을 통합 관리합니다.
* **관련 문서**: [SyncBoot PostgreSQL 18.6 로컬 환경](/syncboot/h2) · [SyncCrawl 아키텍처](/synccrawl/architecture) · [SyncOps 아키텍처](/syncops/architecture)

### FinOps (AI / Cloud Financial Operations) {#finops}
* **쉬운 요약**: 부서·프로젝트별 AI 사용량과 클라우드 비용을 실시간 집계하고 예산 한도를 통제하는 관리 체계입니다.
* **기술 정의**: 멀티 LLM(상용 API 및 온프레미스 오픈소스 모델) 호출 시 발생하는 입력·출력 토큰 수, 모델 단가, 요청 지연 시간을 테넌트·부서·프로젝트 단위로 실시간 계량하고, 예산 임계치(예: 80% 경고, 100% 차단 또는 경량 모델 다운그레이드)에 따라 자동 정책을 집행하는 비용 거버넌스 프레임워크입니다.
* **관련 문서**: [SyncLLM FinOps & 시맨틱 캐시](/syncllm/finops-and-cache) · [FinOps 예산 & 비용 운영 가이드](/guide/finops-budget-operations) · [SyncVerse LLM 게이트웨이](/syncverse/finops-and-syncllm)

### Semantic Cache (시맨틱 캐시) {#semantic-cache}
* **쉬운 요약**: 표현이 달라도 의미가 같은 이전 질문을 재사용해 AI 응답 속도를 높이고 비용을 줄이는 기술입니다.
* **기술 정의**: 문자열 완전 일치(Exact Match)에만 의존하는 전통적 캐시와 달리, 사용자 프롬프트의 임베딩 벡터 간 코사인 유사도(Cosine Similarity)가 설정 임계치(예: 0.95 이상)를 충족할 때 Redis/pgvector 캐시에 저장된 검증 응답을 즉시 반환하여 중복 LLM 추론 비용과 응답 지연을 줄이는 캐싱 기법입니다.
* **관련 문서**: [SyncLLM FinOps & 시맨틱 캐시](/syncllm/finops-and-cache) · [SyncLLM 지능형 모델 라우팅](/syncllm/routing-and-gateway)

---

## 3. 아키텍처 · 개발 표준

### Canonical URL (전사 단일 표준 API 경로) {#canonical-url}
* **쉬운 요약**: 모든 모듈의 API 주소를 하나의 일관된 규칙으로 통일해 연동 혼선을 없앤 경로 표준입니다.
* **기술 정의**: SyncSeries 전사 백엔드 컨트롤러와 프론트엔드 호출부가 1:1로 일치하도록 리소스당 단 하나의 정규 경로(`/api/v1/{product}/{resource}`)만 매핑하는 API 설계 원칙입니다. 다중 배열 매핑이나 프록시 경로 변형(rewrite)을 금지하여 API 게이트웨이, 문서화, 권한 인가, 보안 탐지(`SyncAPIM`) 간 경로 불일치를 원천 제거합니다.
* **관련 문서**: [SyncBoot 시스템 아키텍처](/syncboot/architecture) · [SyncAPIM 아키텍처](/syncapim/architecture)

### MSA (Microservices Architecture) {#msa}
* **쉬운 요약**: 주문·결제·검색·인증 등 업무 기능을 독립 서비스로 나누어 장애 전파를 막고 개별 확장하는 구조입니다.
* **기술 정의**: 단일 거대 애플리케이션 대신 도메인 경계별로 독립 배포·확장 가능한 서비스 단위로 분리하는 아키텍처입니다. SyncSeries에서는 `SyncShop`(Gateway, Auth, Admin, Portal, Search, Monitor, MBG, MCP Server 등 독립 모듈 구성)과 `SyncAPIM`(4-JVM 성능 격리 구조)에 적용되어 고트래픽 처리량과 장애 격리를 보장합니다.
* **관련 문서**: [SyncShop 시스템 아키텍처](/syncshop/architecture) · [SyncAPIM 4-JVM 아키텍처](/syncapim/architecture)

### RBAC (Role-Based Access Control) {#rbac}
* **쉬운 요약**: 직무와 역할에 따라 볼 수 있는 메뉴와 실행할 수 있는 기능을 통제하는 권한 체계입니다.
* **기술 정의**: 사용자에게 직접 권한을 부여하지 않고 역할(`sys_role`)과 메뉴·기능·버튼 권한(`sys_permission`, `sys_role_permission`)을 매핑하여 접근을 통제하는 보안 모델입니다. SyncSeries 전사 프론트엔드는 정적 메뉴 하드코딩 없이 백엔드 인가 API(`/api/v1/{product}/sys/permission/getUserPermissionByToken`)에서 현재 사용자의 인가 트리만 동적으로 수신합니다.
* **관련 문서**: [SyncBoot 보안 & 멀티테넌시](/syncboot/enterprise-security) · [보안 백서 & 컴플라이언스](/ecosystem/security-and-compliance)

### Zero-Mock (실전 연동 무결성 원칙) {#zero-mock}
* **쉬운 요약**: 가짜 데이터나 임시 응답 없이 모든 화면과 기능이 실제 데이터베이스·서버와 연동되도록 검증하는 품질 기준입니다.
* **기술 정의**: 프로덕션 코드와 UI에 하드코딩된 더미 배열, 빈 컬렉션 반환, 예외 묵살 후 가짜 성공 응답(Fake Normalcy), 프롬프트 문자열 분기(Prompt Sniffing)를 금지하는 엔지니어링 품질 규율입니다. 장애 발생 시 RFC 7807 Problem Details 기반의 명시적 오류로 투명하게 전파하며, 자동화된 정적·계약 검증 스크립트로 지속 검사합니다.
* **관련 문서**: [Zero-Mock 품질 하네스](/ecosystem/zero-mock-harness) · [Zero-Mock 테스트 하네스 가이드](/sdk/zero-mock-testing)

---

## 4. 보안 · 품질 자동화

### eBPF (Extended Berkeley Packet Filter) {#ebpf}
* **쉬운 요약**: 운영체제 커널 수준에서 악성 트래픽을 초저지연으로 탐지·차단하는 리눅스 보안 기술입니다.
* **기술 정의**: 리눅스 커널 소스를 수정하거나 커널 모듈을 직접 적재하지 않고도 샌드박스 검증기를 통과한 바이트코드를 커널 내 네트워크·시스템콜 후크(XDP/TC 등)에 안전하게 실행하는 기술입니다. `SyncAPIM`에서는 애플리케이션 서버(WAS)에 도달하기 전 커널 경계에서 공격 IP·패턴을 고속 차단하는 데 활용합니다.
* **관련 문서**: [SyncAPIM 개요](/syncapim/) · [SyncAPIM WAF 위협 탐지 & PII 마스킹](/syncapim/waf-and-pii-governance)

### WAF (Web Application Firewall) {#waf}
* **쉬운 요약**: SQL 인젝션, 크로스사이트 스크립팅(XSS) 등 웹·API 공격을 실시간 탐지하고 차단하는 방화벽입니다.
* **기술 정의**: HTTP/HTTPS 및 REST/GraphQL API 페이로드를 애플리케이션 계층(L7)에서 검사하여 SQL Injection, XSS, SSRF, Path Traversal, 명령어 주입(Command Injection), 인증 우회 등 웹 취약점 악용 시도를 탐지·차단하는 보안 계층입니다. `SyncAPIM`은 구문 토큰 분석기(`SqlXssLexicalTokenizer`)와 `SyncWatch`에서 배포된 가상 패치 규칙(`ApimDefensePack`)을 결합해 오탐을 줄입니다.
* **관련 문서**: [SyncAPIM WAF 위협 탐지 & PII 마스킹](/syncapim/waf-and-pii-governance) · [SyncWatch 아키텍처 & 룰 컴파일러](/syncwatch/architecture)

### CVSS / CVE / STIX {#cvss-cve-stix}
* **쉬운 요약**: 전 세계 보안 취약점의 고유 번호(CVE), 위험도 점수(CVSS), 위협 정보 교환 표준(STIX)입니다.
* **기술 정의**:
  * **CVE (Common Vulnerabilities and Exposures)**: 공개된 소프트웨어 보안 취약점에 부여되는 국제 표준 식별 번호(예: `CVE-2026-XXXXX`)입니다.
  * **CVSS (Common Vulnerability Scoring System)**: 취약점의 공격 난이도·영향 범위를 0.0~10.0 수치(Low/Medium/High/Critical)로 정량화하는 위험도 평가 체계입니다.
  * **STIX (Structured Threat Information Expression)**: 사이버 위협 인텔리전스(공격 패턴, 침해 지표, 대응 방안)를 기계 판독 가능한 JSON 구조로 교환하는 국제 표준(OASIS)입니다.
* **관련 문서**: [SyncWatch 개요](/syncwatch/) · [SyncWatch Verse & APIM 연동 프로토콜](/syncwatch/devsecops-protocol) · [SyncWatch DB 스키마 & API 명세](/syncwatch/api-and-schema)

### Playwright Self-Healing (테스트 자가 치유) {#playwright-self-healing}
* **쉬운 요약**: 화면 디자인이나 버튼 위치가 바뀌어도 자동 테스트가 멈추지 않고 대상을 다시 찾아 검증을 이어가는 기술입니다.
* **기술 정의**: Playwright 기반 E2E 브라우저 자동화 실행 중 UI 개편으로 기존 CSS/XPath 셀렉터가 실패했을 때, 시맨틱 DOM 속성·접근성 트리(ARIA Role/Label)·시각적 화면 분석(Vision-LLM)을 단계적으로 결합해 변경된 요소를 재탐색하고 셀렉터를 자동 보정하는 복구 메커니즘입니다.
* **관련 문서**: [SyncETA 자가 치유 & 비전](/synceta/self-healing-and-vision) · [Vision-LLM 자가치유 알고리즘 연구](/study/vision-llm-self-healing-algorithm) · [SyncETA 용어 사전](/synceta/glossary)

---

## 추가 도메인별 용어 사전

* **[SyncETA 테스트 자동화 용어 사전](/synceta/glossary)**: 스토리, 시나리오, 데이터셋, 컬렉션 등 QA 자동화 전용 용어
* **[애자일 및 개발 공학 용어 사전](/agile/glossaryOfTerms)**: 스크럼반, WIP, 벨로시티, DoR/DoD, 스토리 포인트 등 협업 프로세스 용어
