---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "엠파시 제품 가이드"
    text: "Boon to business by agility."
    tagline: "'변화에 최적화된 솔루션', Sync Series로 비즈니스 민첩성(Agility)을 극대화합니다."
    actions:
      - text: 시작하기
        link: /syncverse/
        type: primary
      - text: 모든 제품 보기
        link: '#sync-series-제품군'
        type: secondary

head:
  - - meta
    - name: keywords
      content: 엠파시, Empasy, Sync Series, SyncVerse, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncLLM, AI 오케스트레이션, 멀티 에이전트, AI 관제, FinOps, 마이크로서비스 아키텍처, MSA, Headless Commerce, 소프트웨어 개발, 솔루션, 디지털 혁신, 비즈니스 민첩성, 개발 플랫폼, 백엔드, 프론트엔드, 콘텐츠 관리 시스템, CMS, 자동화 테스트, QA, 품질 보증, CI/CD, DevOps, Java, Spring Boot, Vue 3, TypeScript
  - - meta
    - property: og:title
      content: "엠파시 Sync Series: 디지털 혁신을 위한 자율 운영 AI 에이전트 생태계"
  - - meta
    - property: og:description
      content: "엠파시는 SyncVerse, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncLLM으로 구성된 Sync Series를 통해 비즈니스 민첩성과 AI 자율 운영을 지원합니다."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/

features:
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="m7 7 3 3"/><path d="m14 14 3 3"/><path d="m14 10 3-3"/><path d="m7 17 3-3"/></svg>'
    title: SyncVerse (AI 오케스트레이션)
    details: 분산된 도메인 에이전트들이 표준 MCP로 협업하여 시스템 자율 운영을 수행하는 LLM 네이티브 중앙 제어 플랫폼
    link: /syncverse/
    linkText: SyncVerse 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
    title: SyncInsight (지능형 관제 & 분석)
    details: 에이전트 생태계 데이터를 실시간 수집·분석하고 자연어 질의(NLQ)로 비즈니스 인사이트를 도출하는 관제 센터
    link: /syncinsight/
    linkText: SyncInsight 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
    title: SyncETA (AI E2E 테스트 자동화)
    details: 코드리스 GUI 테스트 및 AI Vision 자가치유 파이프라인 제공. 1분 만에 설치 가능한 데스크톱 앱(v0.0.33) 배포 중
    link: /synceta/
    linkText: SyncETA 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
    title: SyncBoot (마이크로서비스 백엔드)
    details: Spring Boot 기반 Clean Architecture & DDD와 AI Schema Studio 로우코드 생성기를 제공하는 개발 플랫폼
    link: /syncboot/
    linkText: SyncBoot 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
    title: SyncCMS (AI 콘텐츠 관리 시스템)
    details: 비전문가도 직관적으로 콘텐츠를 관리하고 Live SDK와 온프레미스 AI 보안을 통해 확장하는 차세대 CMS
    link: /synccms/
    linkText: SyncCMS 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
    title: SyncShop (Headless 이커머스)
    details: 옴니채널 상거래 관리, 다이내믹 프라이싱, 실시간 재고 잠금 및 자율 커머스 에이전트 스웜 솔루션
    link: /syncshop/
    linkText: SyncShop 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>'
    title: SyncCrawl (적응형 크롤링 & RAG)
    details: 웹 구조 변경에 자율 대응하고 실시간 지식 파이프라인을 구축하여 고신뢰 RAG 답변을 제공하는 수집 엔진
    link: /synccrawl/
    linkText: SyncCrawl 문서 바로가기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>'
    title: SyncLLM (AI 게이트웨이 & FinOps)
    details: 멀티 LLM 지능형 라우팅, 실시간 토큰 비용 통제(FinOps), 시맨틱 캐싱 및 엔터프라이즈 PII 마스킹 통합 게이트웨이
    link: /syncllm/
    linkText: SyncLLM 문서 바로가기 →

footer: Copyright © 2026 Empasy Inc. All rights reserved.
---

## 엠파시 Sync Series 문서 바로가기

### 전사 AI 자율 운영 생태계 (Ecosystem)
| 가이드 | 주요 역할 및 핵심 내용 | 문서 링크 |
|:---|:---|:---|
| **AI 생태계 아키텍처** | 3-Layer 전사 아키텍처, A2A 협업 비전 및 라이프사이클 | [생태계 개요 →](/ecosystem/) |
| **표준 MCP 프로토콜** | Model Context Protocol JSON-RPC 도구 호출 규격 및 에러 표준 | [MCP 프로토콜 →](/ecosystem/mcp-protocol) |
| **AgentScope Java 가이드** | Spring Boot 백엔드 AgentScope Java(io.agentscope) 연동 표준 | [AgentScope 가이드 →](/ecosystem/agentscope-guide) |
| **E2E 연동 시나리오** | 기획부터 스키마/API 생성, CMS 배포, E2E 회귀 테스트 실무 | [E2E 시나리오 →](/ecosystem/e2e-workflow) |
| **HITL & Saga 거버넌스** | 3단계 관리자 승인 게이트 및 분산 보상 트랜잭션 롤백 원리 | [HITL & Saga →](/ecosystem/hitl-governance) |
| **공유 모듈 & SDK** | 8대 공통 비즈니스 모듈(sync-module-*) 및 AI 코딩 엔지니어링 SDK | [공유 모듈 & SDK →](/ecosystem/shared-modules-and-sdk) |
| **Zero-Mock 품질 하네스** | Mock 전면 금지, RFC 7807 표준 에러 처리 및 4-Cycle 검증 체계 | [품질 하네스 →](/ecosystem/zero-mock-harness) |

### 핵심 플래그십 AI 에이전트
| 솔루션 | 주요 역할 및 핵심 가치 | 문서 링크 |
|:---|:---|:---|
| **SyncVerse** | 멀티 에이전트 A2A 자율 운영 오케스트레이션 & 관제탑 | [SyncVerse 시작하기 →](/syncverse/) |
| **SyncInsight** | 딥 리서치, 실시간 스트리밍 분석 & NL2SQL 데이터 관제 | [SyncInsight 시작하기 →](/syncinsight/) |
| **SyncETA** | 무인 CI/CD 회귀 검증 & Vision 기반 E2E 테스트 자동화 | [SyncETA 시작하기 →](/synceta/) |
| **SyncCrawl** | 적응형 자율 크롤링 & RAG 지식 기반 파이프라인 | [SyncCrawl 시작하기 →](/synccrawl/) |
| **SyncBoot** | Java / Spring Boot 기반 고속 MSA 개발 플랫폼 & 로우코드 | [SyncBoot 시작하기 →](/syncboot/) |
| **SyncCMS** | 직관적인 콘텐츠 관리, Live SDK & 온프레미스 AI 보안 CMS | [SyncCMS 시작하기 →](/synccms/) |
| **SyncShop** | Headless 옴니채널 상거래, 다이내믹 프라이싱 & 커머스 에이전트 스웜 | [SyncShop 시작하기 →](/syncshop/) |
| **SyncLLM** | 엔터프라이즈 AI 게이트웨이, FinOps 비용 통제 & PII 마스킹 | [SyncLLM 시작하기 →](/syncllm/) |

### 아카이브 및 개발 리소스
| 도구 / 리소스 | 주요 역할 및 내용 | 문서 링크 |
|:---|:---|:---|
| **SyncAdmin** | Vue 3, Vite & TypeScript 기반 엔터프라이즈 관리 시스템 템플릿 | [SyncAdmin 시작하기 →](/syncadmin/) |
| **SyncAPIM** | 엔터프라이즈 API 라이프사이클 통합 관리 & 보안 게이트웨이 | [SyncAPIM 시작하기 →](/syncapim/) |
| **Agile Guide** | 스크럼반(Scrumban) 기반 엠파시 애자일 개발 방법론 | [Agile 가이드 →](/agile/) |
| **Study & Logs** | AI 파인튜닝, RAG 연구 및 개발 디버깅 작업 기록 | [Study](/study/) · [Logs](/logs/) |

## 개요

엠파시(Empasy)는 **"Empathic Synergy (공감 시너지)"**라는 핵심 가치를 바탕으로 빠르게 변화하는 비즈니스 환경에 민첩하게 대응하기 위한 차세대 소프트웨어 및 AI 에이전트 솔루션을 제공하는 기업입니다. 솔루션 기반의 SI(시스템 통합) 및 엔터프라이즈 DX 사업을 선도하며, **"변화에 최적화된 솔루션(Boon to Business by Agility)"**을 최고 가치로 내세우는 **Sync Series** 제품군을 통해 기업의 비즈니스 민첩성과 자율 운영을 지원합니다.

---

## 엠파시의 핵심 가치 및 비전

엠파시의 사명인 **"EmpaSy"**는 깊은 공감과 협업을 통해 탁월한 시너지를 창출하는 **"Empathic Synergy"**를 의미합니다. 이는 고객의 비즈니스 페인포인트를 깊이 이해하고 기술적 동반자로서 공동의 목표를 달성하겠다는 철학을 담고 있습니다.

* **Boon to Business by Agility**: 소프트웨어는 현대 비즈니스의 심장이며, 시장 변화에 즉각 대응하기 위해서는 기획부터 배포·운영까지의 전 주기가 민첩하게 연결되어야 합니다.
* **살아 있는 소프트웨어 (Living Software)**: 고정된 레거시 시스템을 넘어, 시스템 스스로 상태를 진단하고 코드를 자가 치유(Self-Healing)하며 진화하는 차세대 소프트웨어 생태계를 구축합니다.
* **AI DLC (AI Development Life Cycle)**: 멀티 에이전트 간 표준 협업 프로토콜(A2A & MCP)을 기반으로 휴먼 에러를 최소화하고 엔지니어링 생산성을 향상시킵니다.

---

## Sync Series 제품군

엠파시의 Sync Series는 소프트웨어 수명 주기 전반에 걸쳐 속도, 품질, 유연성을 지원하는 엔터프라이즈 AI 에이전트 및 프레임워크 라인업입니다.

### SyncVerse: 멀티 에이전트 A2A 자율 오케스트레이션
* **개요**: 개별 분산 소프트웨어 모듈과 도메인 에이전트들을 표준 MCP 기반으로 통합 제어하는 LLM 네이티브 중앙 관제탑입니다.
* **핵심 기능**: 자연어 의도 기반 지능형 라우팅(Intent Routing), Swarm 에이전트 작업 조율, FinOps 토큰 비용 통제, 1-Click HITL(Human-in-the-Loop) 거버넌스.
* **도입 효과**: 요구사항 분석부터 자율 코딩, 무인 QA, 배포 및 감사까지 6-Step AI DLC 라이프사이클을 단일 파이프라인으로 연결합니다.

### SyncInsight: 엔터프라이즈 의사결정 인텔리전스 & 관제
* **개요**: 시스템 내외부 데이터를 실시간 수집·분석하여 비즈니스 의사결정과 장애 선제 대응을 지원하는 AI 관제 플랫폼입니다.
* **핵심 기능**: 실시간 분산 데이터 스트리밍 분석, Anomaly Detection(이상 징후 자율 탐지), 자연어 기반 맞춤형 데이터 분석(NL2SQL & NLQ), Context-Aware RAG.
* **도입 효과**: 복잡한 SQL 작성이나 대시보드 설계 없이 자연어 질의만으로 비즈니스 인사이트를 도출하고 실행 가능한 대안을 검토합니다.

### SyncETA: Vision-LLM 기반 E2E 테스트 자동화
* **개요**: 웹 및 모바일 환경에서 DOM 변경에 취약한 기존 스크립트 기반 테스트의 한계를 극복하는 AI 자가복구(Self-Healing) 테스트 플랫폼입니다.
* **핵심 기능**: Vision-LLM 화면 요소 시각적 재식별, 엑셀(Excel) 테스트케이스 직결 자동 실행, L1~L5 계층별 심층 품질 검증, CI/CD 무인 회귀 테스트 파이프라인.
* **도입 효과**: UI 릴리즈 시 발생하는 셀렉터 장애를 런타임에 안정적으로 자가 복구하며, 반복 회귀 테스트 비용을 절감합니다.

### SyncCrawl: 적응형 자율 크롤링 & RAG 지식 파이프라인
* **개요**: 웹 페이지의 구조 변경에 능동적으로 적응하여 엔터프라이즈 RAG 파이프라인을 위한 고품질 정형 데이터를 수집하는 엔진입니다.
* **핵심 기능**: DOM 구조 변화 자동 보정, 지능형 프록시 순환 및 브라우저 프로파일링(안티봇 우회), 고신뢰 JSON 스키마 자동 추출, 벡터 DB 실시간 동기화.
* **도입 효과**: 사이트 개편 시 발생하는 크롤러 오류를 방지하고 지속 가능한 AI 지식 자산을 구축합니다.

### SyncBoot: 클라우드 네이티브 Java MSA 고속 개발 플랫폼
* **개요**: Spring Boot 기반 Clean Architecture와 Domain-Driven Design(DDD)을 적용한 엔터프라이즈 마이크로서비스 개발 프레임워크입니다.
* **핵심 기능**: Schema Studio 로우코드 생성기(DDL, 엔티티, CRUD REST API 자동 생성), Saga 패턴 기반 분산 보상 트랜잭션 관리, Sentinel/Seata/SkyWalking 풀스택 통합.
* **도입 효과**: 기초 CRUD 및 권한 관리 구축 공수를 줄여 비즈니스 핵심 도메인 로직 구현에 집중할 수 있는 환경을 제공합니다.

### SyncCMS: 개발 지향형 차세대 콘텐츠 관리 시스템
* **개요**: 마케터와 운영자의 직관적인 콘텐츠 퍼블리싱과 개발자의 유연한 확장을 동시에 지원하는 Spring Boot 기반 CMS입니다.
* **핵심 기능**: FreeMarker 템플릿 엔진 기반 고속 렌더링, Live SDK 연동, 템플릿 기반 I18n 글로벌 다국어 자동 동기화, 온프레미스 AI 보안 가드레일.
* **도입 효과**: 벤더 종속성을 탈피하여 엔터프라이즈 요구사항에 맞춘 유연한 사이트 구축 및 대규모 트래픽 처리를 안정적으로 지원합니다.

### SyncShop: Headless 옴니채널 상거래 및 자율 운영 에이전트
* **개요**: 프론트엔드 표현층과 백엔드 상거래 로직을 분리하여 웹, 모바일, 키오스크 등 모든 고객 접점에 신속히 대응하는 차세대 Headless eCommerce 플랫폼입니다.
* **핵심 기능**: 다계층 카탈로그 및 동적 SKU 재고 잠금(Inventory Lock), 지능형 쿠폰 및 플래시딜 타임세일 엔진, 실시간 DB 기반 다이내믹 프라이싱 및 무손실 스냅샷 롤백(`shop_batch_price_update`), 3단계 에이전트 스웜(Pricing Optimizer, Margin Safeguard, Executor).
* **도입 효과**: 옴니채널 출시 속도를 대폭 단축하고, 마진 안전가드 기반 무인 다이내믹 프라이싱으로 상거래 운영 공수와 마진 누수를 방지합니다.

### SyncLLM: 엔터프라이즈 AI 게이트웨이 & FinOps 비용 최적화
* **개요**: 사내 분산된 멀티 LLM API 호출을 단일 진입점으로 통합 제어하고 토큰 비용을 체계적으로 최적화하는 게이트웨이입니다.
* **핵심 기능**: 복잡도 기반 지능형 모델 라우팅, 코사인 유사도(\(\ge 0.95\)) 기반 시맨틱 캐싱, 부서별 실시간 토큰 예산(FinOps) 통제, PII 개인정보 자동 마스킹.
* **도입 효과**: 중복 호출 제거를 통해 AI 토큰 비용을 대폭 절감하고, 민감 정보 유출 위험을 사전에 방어하여 신뢰할 수 있는 기업용 AI 활용 환경을 지원합니다.

### SyncAdmin: 엔터프라이즈 백오피스 UI 템플릿
* **개요**: Vue 3, Vite, TypeScript 기반으로 설계된 모던 엔터프라이즈 관리자 대시보드 프레임워크입니다.
* **핵심 기능**: 역할 기반 동적 라우팅 및 버튼 단위 세분화 권한 제어, Ant Design Vue 호환, Pnpm/TurboRepo 모노레포 아키텍처.

### SyncAPIM: 엔터프라이즈 API 라이프사이클 게이트웨이
* **개요**: 대규모 트래픽 환경에서 API 보안, 라우팅, 모니터링, 과금을 통합 관리하는 API 게이트웨이 솔루션입니다.
* **핵심 기능**: OAuth 2.0 / JWT 기반 다층 보안, 실시간 트래픽 쓰로틀링(Rate Limiting), API 성능 모니터링.

---

## 주요 고객 성공 사례 및 정량적 성과 지표

엠파시는 대기업, 금융, 교육, 공공 등 다양한 산업군의 핵심 비즈니스 시스템에 Sync Series를 성공적으로 적용하여 검증된 성과를 입증했습니다.

| 고객사 및 프로젝트 | 적용 솔루션 | 핵심 정량 성과 및 지표 | 비즈니스 혁신 가치 |
| :--- | :--- | :--- | :--- |
| **비상교육 AIDT** | **SyncETA** | • **테스트 작성 생산성 80% 향상** (기존 Appium 4시간 ➔ 자연어 기반 0.8시간)<br>• **회귀 테스트 자동화 커버리지 대폭 확대**로 운영 효율 30% 향상<br>• 리팩토링 및 릴리즈 시 **장애율 0.1% 이하 안정화 유지**<br>• **OS 동시 실행 성공률 95%**, UI 파편화 검출 정확도 90% 달성 | 대규모 코드 변경에도 휴먼 에러를 최소화하고 상시 안정적인 서비스 품질 확보 |
| **홈플러스 & SK매직**<br>(MIS 재구축 & BO 개편) | **SyncBoot** | • **신규 기능 배포 속도 2배 이상 향상** (월 단위 ➔ 주/일 단위 릴리즈 전환)<br>• 표준 플랫폼 기반 개발 공수 및 현대화 비용 **최대 20% 절감**<br>• 학사 및 관리 업무 프로세스 중복 **30% 이상 절감**<br>• 380개 현행 테이블 중 실사용 230개(60%) 사전 분석/클렌징 완료 | 마이크로서비스 전환 및 복합 데이터 마이그레이션 리스크 해소 |
| **LX하우시스 & 천재교육**<br>(글로벌 포털 & T셀파) | **SyncCMS** | • **글로벌 다국어 사이트 단일 플랫폼 통합** (해외 법인별 독립 사이트 신속 개설)<br>• 템플릿 I18n 엔진으로 **신규 국가 사이트 오픈 기간 획기적 단축**<br>• 일일 수백만 PV 및 수십만 교육 콘텐츠 트래픽 상황에서 **무중단 안정성 달성** | 벤더 종속 없는 유연한 커스터마이징 및 대규모 트래픽 안정 운영 |
| **LG전자 & 현대자동차** | **SyncETA** | • 엔터프라이즈 B2B 포털 UI 검증 및 분산 환경 로그 수집 자동화 | 무인 CI/CD 회귀 검증 체계 구축 |
| **펜타시큐리티** | **SyncAPIM** | • 대규모 보안 API 라이프사이클 관리 및 고가용성 게이트웨이 구축 | API 보안 거버넌스 확립 |

---

## 결론: 비즈니스 민첩성을 위한 신뢰할 수 있는 파트너

엠파시의 **Sync Series**는 단순한 독립 도구의 나열이 아닌, **"소프트웨어 전 생애주기(AI DLC)의 자율 운영"**이라는 뚜렷한 아키텍처 철학 위에 구축되었습니다. 검증된 엔지니어링 역량과 정량적으로 입증된 프로젝트 구축 성과를 바탕으로, 급변하는 디지털 환경에서 고객사의 비즈니스 민첩성과 기술 경쟁력을 든든하게 뒷받침합니다.
