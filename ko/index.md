---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: "Sync Series 공식 기술 문서 및 개발자 가이드"

hero:
    name: "엠파시 기술 문서 (Empasy Docs)"
    text: "Sync Series 아키텍처 및 개발 가이드"
    tagline: "AI 에이전트 자율 운영 생태계 Sync Series의 설치, 아키텍처, API/MCP 연동 및 운영 매뉴얼을 안내합니다."
    actions:
      - text: 솔루션 가이드 시작하기
        link: /syncverse/
        theme: brand
      - text: 소개서 · 제안서 PDF
        link: /proposals/
        theme: alt
      - text: 통합 데모 포털 (sync.empasy.io) ↗
        link: https://sync.empasy.io
        theme: alt

head:
  - - meta
    - name: keywords
      content: 엠파시 기술 문서, Empasy Docs, Sync Series 매뉴얼, SyncVerse 가이드, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncLLM, SyncAPIM, SyncWatch, MCP API 명세, 개발자 문서
  - - meta
    - property: og:title
      content: "엠파시 기술 문서 (Empasy Docs) - Sync Series 공식 아키텍처 및 개발 가이드"
  - - meta
    - property: og:description
      content: "엠파시 Sync Series(SyncVerse, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncLLM, SyncAPIM, SyncWatch) 공식 기술 문서 및 개발자 가이드 포털입니다."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/

features:
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
    title: 플랫폼 연동 구조 (Ecosystem)
    details: 표준 MCP 프로토콜 기반의 서비스 간 연동 규격과 4-Tier 자율 에이전트 연합 아키텍처를 안내합니다.
    link: /ecosystem/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="m7 7 3 3"/><path d="m14 14 3 3"/><path d="m14 10 3-3"/><path d="m7 17 3-3"/></svg>'
    title: SyncVerse (통합 관제 & Spec Studio)
    details: 멀티 에이전트 중앙 오케스트레이션, 5단계 스펙 스튜디오 및 다중 코딩 엔진을 통합 관제합니다.
    link: /syncverse/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
    title: SyncInsight (데이터 분석 및 모니터링)
    details: 내외부 데이터를 실시간 통합 분석하고 자연어 질의로 실행 가능한 의사결정 지표를 도출합니다.
    link: /syncinsight/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
    title: SyncETA (테스트 자동화)
    details: 노코드 GUI 테스트 녹화 및 비전 기반 셀렉터 자가치유를 제공하며 데스크톱 앱(v0.0.58)을 지원합니다.
    link: /synceta/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
    title: SyncBoot (백엔드 프레임워크)
    details: Spring Boot 3.5 기반 클린 아키텍처, 스키마 스튜디오 및 동적 권한 관리를 제공하는 백엔드 표준입니다.
    link: /syncboot/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
    title: SyncCMS (콘텐츠 관리 시스템)
    details: Nuxt 3 SSR 렌더링과 3단계 에이전트 협업 기반으로 검색·AI 답변 품질을 높이는 헤드리스 CMS입니다.
    link: /synccms/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>'
    title: SyncShop (이커머스 운영 솔루션)
    details: 9대 마이크로서비스 기반 옴니채널 상품·주문·재고 관리 및 마진 보호 다이내믹 프라이싱을 제공합니다.
    link: /syncshop/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
    title: SyncOps (SI 사업운영 및 손익 관제)
    details: 계약단가 대 실원가 실시간 손익, 기술등급 인력 배치, 보증보험·하도급법 및 전자연구노트를 통합 관리합니다.
    link: /syncops/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>'
    title: SyncCrawl (적응형 웹 수집 엔진)
    details: 웹 구조 변경에 스스로 적응하여 정형 마크다운 지식과 고신뢰 RAG 벡터 데이터를 실시간 공급합니다.
    link: /synccrawl/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>'
    title: SyncLLM (AI 모델 게이트웨이 & FinOps)
    details: 질문 난이도별 멀티 모델 라우팅, 시맨틱 캐싱, 실시간 토큰 예산 통제 및 개인정보 마스킹을 수행합니다.
    link: /syncllm/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    title: SyncAPIM (API 모니터링 및 보안 관제)
    details: 실시간 트래픽 기반 미등록 섀도우 API 탐지, 스펙 드리프트 진단, 무중단 가상 패치 및 민감정보를 보호합니다.
    link: /syncapim/
    linkText: 문서 보기 →
  - icon:
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>'
    title: SyncWatch (전사 보안 위협 관측 및 룰 컴파일러)
    details: 8대 글로벌 위협 피드와 진단 문서를 수집·정규화하여 코드 감사 룰과 런타임 방어 룰을 실시간 컴파일·배포합니다.
    link: /syncwatch/
    linkText: 문서 보기 →

footer: Copyright © 2026 Empasy Inc. All rights reserved.
---

<div id="solutions"></div>

## 핵심 안내 및 리소스 바로가기

### 프로젝트 방법론 및 엔지니어링 표준
| 구분 | 주요 내용 및 특징 | 문서 링크 |
|:---|:---|:---|
| **사업 전 주기 방법론** | 제안부터 최종 검수까지 6단계 라이프사이클 및 단계별 실행 절차 | [방법론 개요 →](/methodology/) |
| **표준 산출물 양식** | 요구사항정의서, WBS, 테스트시나리오 등 실무 서식 양식 다운로드 | [표준 산출물 양식 →](/methodology/enterprise-document-templates) |
| **AI 개발 주기 (AI-SDLC)** | 명세 우선 아키텍처 설계부터 4단계 자가치유 검증까지의 AI 협업 절차 | [AI-SDLC 가이드 →](/methodology/ai-driven-development) |
| **애자일 및 Git Flow** | 스크럼반(Scrumban) 운영, Git 브랜치 전략, 일일 스크럼 실무 프로세스 | [애자일 가이드 →](/agile/) |
| **제품별 소개서·도입제안서 (PDF)** | 요약 브로셔(4p), 통합 도입 제안서(8p) 및 12개 전 제품군(SyncVerse~SyncSDK) 개별 제안서 다운로드 | [전체 제안서 다운로드 센터 →](/proposals/) · [요약 브로셔 PDF](/downloads/proposals/SyncSeries_Brochure_v1.0.pdf) · [통합 제안서 PDF](/downloads/proposals/SyncSeries_Master_Proposal.pdf) |

---

## 개요 및 핵심 비전

> **공식 홈페이지 안내**: 본 사이트(`doc.empasy.com`)는 **Sync Series 기술 문서 및 개발자 가이드 포털**입니다. 기업 소개, 솔루션 도입 문의 및 데스크톱 앱 다운로드는 **[엠파시 공식 홈페이지 (https://empasy.io)](https://empasy.io/)**를 방문해 주시기 바랍니다.

엠파시(Empasy)는 **"Empathic Synergy (공감 시너지)"**라는 핵심 가치를 바탕으로, 기획부터 개발·검증·배포·운영까지의 전 주기를 유기적으로 연결하는 **Sync Series** 자율 운영 에이전트 제품군을 제공합니다.

* **Boon to Business by Agility**: 시장 변화에 즉각 대응할 수 있도록 소프트웨어 기획부터 운영까지의 전 주기를 민첩하게 연결합니다.
* **살아 있는 소프트웨어 (Living Software)**: 시스템 스스로 상태를 진단하고 결함을 자가 치유(Self-Healing)하며 진화하는 생태계를 구축합니다.
* **AI DLC (AI Development Life Cycle)**: 표준 협업 프로토콜(A2A & MCP)과 인간 승인 거버넌스(HITL)를 결합하여 안전성과 엔지니어링 생산성을 동시에 확보합니다.

---

## Sync Series 4-Tier 솔루션 아키텍처 한눈에 보기 {#solutions-detail}

Sync Series는 역할과 책임에 따라 분리된 **4-Tier 아키텍처(11대 엔터프라이즈 AI 에이전트 + SyncSDK 및 6대 공통 모듈)**로 구성됩니다.

| 계층 구분 | 솔루션 | 핵심 역할 (한 줄 요약) | 가이드 바로가기 |
| :--- | :--- | :--- | :--- |
| **Tier 1 (중앙 관제)** | **SyncVerse** | 멀티 에이전트 A2A 오케스트레이션, 5-Step Spec Studio 및 다자간 HITL 결재 관제탑 | [SyncVerse 가이드 →](/syncverse/) |
| **Tier 2 (지능 · 보안)** | **SyncInsight** | 2단계 심층 리서치, 읽기 전용 Safe NL2SQL 및 What-If 시뮬레이션 의사결정 플랫폼 | [SyncInsight 가이드 →](/syncinsight/) |
| **Tier 2 (지능 · 보안)** | **SyncLLM** | 난이도 기반 멀티 LLM 라우팅, 시맨틱 캐싱, 부서별 FinOps 예산 및 PII 마스킹 게이트웨이 | [SyncLLM 가이드 →](/syncllm/) |
| **Tier 2 (지능 · 보안)** | **SyncAPIM** | 4-JVM 성능 격리 기반 미등록 섀도우 API 탐지, OpenAPI 스펙 감사 및 런타임 가상 패치 | [SyncAPIM 가이드 →](/syncapim/) |
| **Tier 2 (지능 · 보안)** | **SyncWatch** | 8대 글로벌 위협 피드 수집·정규화 및 코드 감사·런타임 방어 듀얼 보안 룰 컴파일러 | [SyncWatch 가이드 →](/syncwatch/) |
| **Tier 3 (도메인 운영)** | **SyncBoot** | Spring Boot 3.5 & Java 25 기반 백오피스 표준, Schema Studio 및 DB 동적 권한 관리 | [SyncBoot 가이드 →](/syncboot/) |
| **Tier 3 (도메인 운영)** | **SyncCMS** | Nuxt 3 SSR 고속 렌더링, 3단계 저작 에이전트 스웜 및 SEO·AEO·GEO 품질 감사 CMS | [SyncCMS 가이드 →](/synccms/) |
| **Tier 3 (도메인 운영)** | **SyncShop** | 9대 독립 마이크로서비스 이커머스, 재고 잠금 및 스냅샷 복원 기반 다이내믹 프라이싱 | [SyncShop 가이드 →](/syncshop/) |
| **Tier 3 (도메인 운영)** | **SyncOps** | 한국형 SI 듀얼단가 실시간 손익, KOSA 인력 가동률, 4대 보증·하도급법·전자연구노트 관제 | [SyncOps 가이드 →](/syncops/) |
| **QA & 데이터 수집** | **SyncETA** | 노코드 브라우저·모바일 테스트 녹화 및 비전 기반 셀렉터 자가치유 E2E 품질 검증(`v0.0.58`) | [SyncETA 가이드 →](/synceta/) |
| **QA & 데이터 수집** | **SyncCrawl** | 시맨틱 DOM 자가치유 웹 데이터 수집 및 Tri-Hybrid RAG 마크다운·벡터 지식 파이프라인 | [SyncCrawl 가이드 →](/synccrawl/) |
| **Tier 4 (SDK & 기반)** | **SyncSDK & 공통 모듈** | 15대 다중 코딩 에이전트 핫스왑 SPI(`sync-sdk`) 및 6대 전사 공통 모듈(`sync-core`, `sync-module-*`) | [개발자 센터 →](/sdk/) · [생태계 구조 →](/ecosystem/) |

---

## 주요 고객 성공 사례 및 정량적 성과 지표

엠파시는 대기업, 금융, 교육, 공공 등 다양한 산업군의 핵심 비즈니스 시스템에 Sync Series를 성공적으로 적용하여 검증된 성과를 입증했습니다.

| 고객사 및 프로젝트 | 적용 솔루션 | 핵심 정량 성과 및 지표 | 비즈니스 혁신 가치 |
| :--- | :--- | :--- | :--- |
| **에듀테크 글로벌 AIDT** | **SyncETA** | • **테스트 작성 생산성 80% 향상** (기존 Appium 4시간 -> 자연어 기반 0.8시간)<br>• **회귀 테스트 자동화 커버리지 대폭 확대**로 운영 효율 30% 향상<br>• 리팩토링 및 릴리즈 시 **장애율 0.1% 이하 안정화 유지**<br>• **OS 동시 실행 성공률 95%**, UI 파편화 검출 정확도 90% 달성 | 대규모 코드 변경에도 휴먼 에러를 최소화하고 상시 안정적인 서비스 품질 확보 |
| **메가마트 & 스마트케어가전**<br>(MIS 재구축 & BO 개편) | **SyncBoot** | • **신규 기능 배포 속도 2배 이상 향상** (월 단위 -> 주/일 단위 릴리즈 전환)<br>• 표준 플랫폼 기반 개발 공수 및 현대화 비용 **최대 20% 절감**<br>• 학사 및 관리 업무 프로세스 중복 **30% 이상 절감**<br>• 380개 현행 테이블 중 실사용 230개(60%) 사전 분석/클렌징 완료 | 마이크로서비스 전환 및 복합 데이터 마이그레이션 리스크 해소 |
| **리빙스페이스 & 미래교육원**<br>(글로벌 포털 & T셀파) | **SyncCMS** | • **글로벌 다국어 사이트 단일 플랫폼 통합** (해외 법인별 독립 사이트 신속 개설)<br>• 템플릿 I18n 엔진으로 **신규 국가 사이트 오픈 기간 획기적 단축**<br>• 일일 수백만 PV 및 수십만 교육 콘텐츠 트래픽 상황에서 **무중단 안정성 달성** | 벤더 종속 없는 유연한 커스터마이징 및 대규모 트래픽 안정 운영 |
| **글로벌일렉트로닉스 & 퍼스트모빌리티** | **SyncETA** | • 엔터프라이즈 B2B 포털 UI 검증 및 분산 환경 로그 수집 자동화 | 무인 CI/CD 회귀 검증 체계 구축 |
| **코어시큐리티** | **SyncAPIM** | • 대규모 보안 API 라이프사이클 관리 및 고가용성 게이트웨이 구축 | API 보안 거버넌스 확립 |

---

## 결론: 비즈니스 민첩성을 위한 신뢰할 수 있는 파트너

엠파시의 **Sync Series**는 단순한 독립 도구의 나열이 아닌, **"소프트웨어 전 생애주기(AI DLC)의 자율 운영"**이라는 뚜렷한 아키텍처 철학 위에 구축되었습니다. 검증된 엔지니어링 역량과 정량적으로 입증된 프로젝트 구축 성과를 바탕으로, 급변하는 디지털 환경에서 고객사의 비즈니스 민첩성과 기술 경쟁력을 든든하게 뒷받침합니다.
