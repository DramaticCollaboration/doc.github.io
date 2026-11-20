---
title: 자연어 기반 웹 크롤링 및 RAG 지식 구축 플랫폼 | SyncCrawl
description: 자연어 명령으로 웹 데이터를 수집하고 RAG 지식 기반을 구축합니다. 구조 변경에 유연하게 대응하며, 신뢰도 높은 질의응답을 제공하는 웹 수집 솔루션입니다.
head:
  - - meta
    - name: keywords
      content: 웹 크롤링 솔루션, 지능형 크롤링, 크롤링 자동화, 통합 크롤링 시스템, 웹 데이터 수집, B2B 지식 솔루션, 리서치 자동화, RAG (검색 증강 생성), LLM 환각 방지, 시맨틱 검색, 맥락 기반 질의응답, AI 에이전트, 벡터 저장소 연동, 임베딩 생성, 한국어 최적화, 자연어 명령 크롤링, 적응형 크롤링, 동적 웹 크롤링, AgentScope Java, Playwright MCP
  - - meta
    - property: og:title
      content: 자연어 기반 웹 크롤링 및 RAG 지식 구축 플랫폼 | SyncCrawl
  - - meta
    - property: og:description
      content: 자연어 명령으로 웹 데이터를 수집하고 RAG 지식 기반을 구축합니다.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/synccrawl/
sort: 1
---

# SyncCrawl™: 웹 크롤링 및 RAG 지식 구축 플랫폼

> **제품 소개서 및 라이브 데모**: [SyncCrawl_Proposal.pdf (12p)](/downloads/proposals/SyncCrawl_Proposal.pdf){target="_blank" download="SyncCrawl_Proposal.pdf"} · [SyncCrawl 라이브 데모 체험](https://sync.empasy.io/products/sync-crawl#demo){target="_blank" rel="noopener"} · [제품 공식 페이지](https://empasy.io/ko/solutions/sync-crawl.html){target="_blank" rel="noopener"} · [전체 제안서 모음](/proposals/)

SyncCrawl™은 데이터 수집과 자연어 처리(NLP), **Playwright MCP 기반 브라우저 자동화**, 그리고 **RAG(검색 증강 생성) 지식 파이프라인**을 연계한 기업용 웹 수집 플랫폼입니다.

수집 대상 웹사이트의 UI 및 DOM 구조가 변경되었을 때 맥락을 분석하여 셀렉터를 재구성(Self-Healing)하며, 수집된 비정형 웹 데이터를 정제·임베딩하여 기업 내 벡터 지식 저장소로 변환합니다.

---

## 주요 기능 및 구성

웹사이트 개편에 따른 수집 파이프라인 중단 문제를 줄이고, 수집 데이터의 벡터 인덱싱 과정을 일원화합니다.

```mermaid
graph LR
    A[자연어 수집 지시<br/>Natural Language] --> B[에이전트 오케스트레이션<br/>AgentScope Java + MCP]
    B --> C[웹 브라우징<br/>Playwright Self-Healing]
    C --> D[정제 및 분할<br/>Document Pipeline]
    D --> E[지식베이스 연동<br/>Vector DB / RAG QA]
```

### 1. 적응형 크롤링 (Self-Healing Crawling)
- **자연어 명령 해석**: "주요 기관 공지사항 최근 10건 및 본문 내용 수집"과 같은 비즈니스 질의 형태로 크롤링 작업을 등록합니다.
- **적응형 셀렉터 복구**: 사이트 개편으로 CSS/XPath 셀렉터가 변경되어도 DOM 구조와 텍스트 문맥을 분석하여 데이터를 재탐색합니다.

### 2. RAG 지식 파이프라인 (Knowledge Base)
- **문맥 보존 분할**: HTML 태그 구조를 파싱하여 문맥을 유지한 채 시맨틱 청크(Chunk)로 분할합니다.
- **다국어 및 한국어 임베딩**: 한국어 및 업무 도메인 용어 처리에 적합한 임베딩 모델을 지원합니다.
- **벡터 데이터베이스 연동**: PGVector, Milvus, Qdrant, Weaviate 등 주요 벡터 데이터베이스와 연동하여 실시간 인덱싱을 지원합니다.

### 3. 분산 런타임 및 보안 구성 (Production Architecture)
- **분산 마이크로서비스**: `Server`, `Agent`, `Scenario-Agent`, `Console` 4개 독립 컨테이너로 구성되어 대규모 수집 작업의 확장을 지원합니다.
- **SSRF 방어 메커니즘**: 내부 네트워크 접근 및 비인가 리다이렉트를 검증하는 URL 검증기(`BrowserNavigateUrlValidator`)를 내장하고 있습니다.
- **폐쇄망(Air-Gapped) 지원**: 외부 인터넷 연결이 제한된 온프레미스 환경에서도 사내 Private LLM(vLLM, Ollama)과 연동하여 동작합니다.

---

## 기술 사양 요약

| 구분 | 지원 기술 및 사양 |
| :--- | :--- |
| **코어 백엔드** | Java 25, Spring Boot 4.0, AgentScope Java (`io.agentscope:agentscope-harness:2.0.2`), 6-File DB SSOT Standard (`db/00_extensions.sql` ~ `05_sample_dev.sql`) |
| **브라우저 자동화** | Playwright MCP, Headless Chromium, 분산 Worker |
| **스토리지 및 캐시** | PostgreSQL 18.6, Redis, MinIO / S3 오브젝트 스토리지 |
| **벡터 데이터베이스** | PostgreSQL 18.6 `pgvector`, Milvus, Qdrant, Weaviate |
| **운영 콘솔** | Vue 3, Vite, TypeScript, Quasar Design System |
| **배포 인프라** | Docker Multi-Arch (amd64/arm64), Kubernetes(AKS), Air-Gapped Runner |

---

## 실제 구동 화면 및 핵심 워크플로우

### 1. 적응형 웹 수집 파이프라인 및 워커 클러스터 관제 대시보드
분산 브라우저 워커의 실시간 수집 처리량, DOM 셀렉터 자가치유 성공률, RAG 벡터 인덱싱 진행 현황을 통합 관제합니다.

![SyncCrawl 웹 수집 파이프라인 관제 대시보드](/images/screenshots/sync-crawl/screen_01.png)

### 2. 자연어 기반 수집 대상 사이트 등록 및 셀렉터 자가치유 설정
복잡한 CSS/XPath 작성 없이 자연어 수집 목표와 추출 스키마를 정의하고, 웹사이트 개편 시 시맨틱 DOM 추론 기반 자동 복구 정책을 구성합니다.

![SyncCrawl 수집 대상 사이트 및 시나리오 관리](/images/screenshots/sync-crawl/screen_02.png)

### 3. 정제 마크다운 추출 결과 프리뷰 및 RAG 벡터 인덱싱
광고·네비게이션 노이즈가 제거된 구조화 마크다운 문서와 PostgreSQL 18.6 `pgvector` 시맨틱 청크 임베딩 적재 결과를 실시간 검증합니다.

![SyncCrawl 수집 데이터 및 마크다운 정제 결과](/images/screenshots/sync-crawl/screen_03.png)

### 4. 수집 허용 정책 점검 · 저작권 위험도 및 개인정보 비식별화 감사
수집 작업별 `robots.txt` 허용 정책, 대기 시간, 저작권 위험 등급 및 이메일·전화번호 등 개인정보 비식별화 완료 여부를 전수 감사합니다.

![SyncCrawl 수집 규정 점검 및 개인정보 비식별화 감사](/images/screenshots/sync-crawl/screen_04.png)

---

- [시스템 아키텍처 & Clean Architecture](./architecture.md): 4계층 분산 아키텍처와 컴포넌트별 상호작용
- [적응형 크롤링 & AI 자율 복구 엔진](./adaptive-crawling-engine.md): Playwright MCP 연동 및 셀렉터 복구 동작 원리
- [스마트 크롤링 콘솔 가이드](./smart-crawling-console.md): Vue 3 + Vite 기반 운영 콘솔 아키텍처 및 실시간 세션 관제
- [3계층 분산 에이전트 토폴로지](./distributed-agent-topology.md): 서버, 브라우저 워커, AI 추론 워커 구성 및 쿠버네티스 배포
- [동시 세션 중재 및 안정성 가이드](./session-arbitration.md): 다중 로그인 세션 충돌 방지 및 백색 화면 오탐 제거
- [속성 기반 접근 제어 (ABAC) & 데이터 보안](./abac-data-security.md): 주체/자원/환경 3단계 정책 평가 및 토큰 감사 체계
- [RAG 지식 구축 & 벡터 저장소 연동](./rag-knowledge-pipeline.md): 데이터 정제, 청킹, 임베딩 및 Vector DB 파이프라인
- [엔터프라이즈 보안 & 폐쇄망 거버넌스](./enterprise-security-governance.md): SSRF 차단, Air-Gapped 배포 및 RBAC 감사 추적
- [REST API & MCP Tool 레퍼런스](./api-reference.md): 작업 제어, 쿼리, 결과 조회를 위한 API 명세
- [엔터프라이즈 FAQ & 도입 가이드](./enterprise-faq.md): 사이트 차단 대응, 스케일링 및 주요 질의응답

### 핵심 원천 특허
- [출원 준비 특허 제04호](../patents/04-semantic-dom-self-healing.md): 시맨틱 DOM 추론 및 비전 기반 웹 크롤링 셀렉터 자가치유 기술 백서