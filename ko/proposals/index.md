---
title: "SyncSeries 제품 소개서 및 도입 제안서 (PDF 다운로드)"
description: "SyncSeries 통합 제안서 및 12개 전 제품군(SyncVerse, SyncInsight, SyncLLM, SyncAPIM, SyncWatch, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncETA, SyncCrawl, SyncSDK) 개별 소개서·도입제안서 PDF 다운로드 센터"
---

# 제품 소개서 및 도입 제안서 (PDF 다운로드)

사내 품의, 아키텍처 기술 검토, 차세대 SI/DX 사업 제안에 바로 참고하고 첨부할 수 있는 **SyncSeries 공식 요약 브로셔(4페이지) 및 제품별 도입 제안서(8페이지 A4 표준 규격)** 모음입니다.

8페이지 도입 제안서는 각 제품의 **도입 배경(현장의 고민) → 해결 방향 → 핵심 기능 & 권장 서버 사양 → 시스템 아키텍처 → 주요 화면 구성 & 작동 시나리오 → 도입 효과(Before/After) → 구축 로드맵 → 기술 사양** 순서로 알기 쉽게 구성되어 있습니다.

---

## 1. 통합 브로셔 및 마스터 도입 제안서

| 문서명 | 대상 독자 및 주요 내용 | 페이지 | 다운로드 |
| :--- | :--- | :---: | :---: |
| **SyncSeries 통합 요약 브로셔**<br>(`SyncSeries_Brochure_v1.0.pdf`) | **경영진 · 현업 부서장 · 빠른 개요 파악용**<br>• 왜 지금 SyncSeries인가? (현장의 고민과 해결 방식)<br>• 4-Tier 아키텍처 및 12대 제품군 핵심 역할 한눈에 보기<br>• 3단계 운영 안전장치(사전 비교·승인·1-Click 복원) 및 도입 방식 | 4p | [브로셔 다운로드](/downloads/proposals/SyncSeries_Brochure_v1.0.pdf){target="_blank" download="SyncSeries_Brochure_v1.0.pdf"} |
| **SyncSeries 통합 도입 제안서**<br>(`SyncSeries_Master_Proposal.pdf`) | **CIO · CTO · PMO · 디지털 전환(DX) 기획팀**<br>• 4-Tier 운영 아키텍처 및 표준 MCP/A2A 연동 구조 상세<br>• 12종 전체 에이전트·솔루션 라인업 및 공통 권장 서버 사양<br>• 4단계 점진적 도입 로드맵, Before/After 정량 효과, 거버넌스 체계 | 8p | [제안서 다운로드](/downloads/proposals/SyncSeries_Master_Proposal.pdf){target="_blank" download="SyncSeries_Master_Proposal.pdf"} |

---

## 2. 오케스트레이션, 인텔리전스 및 보안 관측 계층 (Tier 1 & Tier 2)

| 제품명 | 핵심 역할 및 주요 수록 내용 | 페이지 | 다운로드 |
| :--- | :--- | :---: | :---: |
| **SyncVerse**<br>(통합 관제 & 오케스트레이터) | • 전사 도메인 에이전트 작업 조율 및 표준 A2A 메시지 브로커<br>• AI SyncOps 5단계 스펙 스튜디오 및 코드 영향도 분석<br>• 단계별 승인(Multi-HITL) 및 SI 4대 산출물 자동 생성 | 8p | [PDF 다운로드](/downloads/proposals/SyncVerse_Proposal.pdf){target="_blank" download="SyncVerse_Proposal.pdf"} |
| **SyncInsight**<br>(비즈니스 인텔리전스 & 리서치) | • 사내 DB와 외부 웹 지식을 결합하는 2단계 심층 리서치<br>• 읽기 전용 자연어 SQL 변환(Safe NL2SQL) 및 pgvector 검색<br>• 원인 분석부터 실행 가능한 후속 조치 카드 제안·연동 | 8p | [PDF 다운로드](/downloads/proposals/SyncInsight_Proposal.pdf){target="_blank" download="SyncInsight_Proposal.pdf"} |
| **SyncLLM**<br>(중앙 AI 게이트웨이 & FinOps) | • 질문 난이도 기반 멀티 LLM 자동 선택 및 장애 시 자동 우회(Fallback)<br>• Redis 의미 기반 캐싱 및 부서·에이전트별 토큰 예산 관리<br>• 실시간 개인정보(PII) 및 기밀 키워드 입출력 마스킹 | 8p | [PDF 다운로드](/downloads/proposals/SyncLLM_Proposal.pdf){target="_blank" download="SyncLLM_Proposal.pdf"} |
| **SyncAPIM**<br>(AI 자율 API 보안 관제 & 거버넌스) | • 4-JVM 성능 격리 기반 미등록 섀도우 API 자동 발견 및 OpenAPI 3.0.1 스펙 드리프트 진단<br>• 구문 토큰 지문 분석기(`SqlXssLexicalTokenizer`) 및 `SyncWatch` 연동 실시간 가상 패치<br>• 커널 eBPF 차단 및 8대 개인·금융 민감정보 동적 마스킹 | 8p | [PDF 다운로드](/downloads/proposals/SyncAPIM_Proposal.pdf){target="_blank" download="SyncAPIM_Proposal.pdf"} |
| **SyncWatch**<br>(전사 보안 위협 관측 & 듀얼 룰 컴파일러) | • 8대 글로벌 위협 피드(OSV.dev, GitHub GHSA, NVD CVE, CISA KEV, Nuclei, OWASP CRS, MITRE ATT&CK, KISA) 수집·정규화<br>• `SyncVerse`(`VerseAuditPack`) 및 `SyncAPIM`(`ApimDefensePack`) 듀얼 보안 룰 실시간 컴파일<br>• Positive/Negative 샘플 기반 자체 샌드박스 무오탐(TP 100%, FP 0%) 검증 및 전사 브로드캐스트 | 8p | [PDF 다운로드](/downloads/proposals/SyncWatch_Proposal.pdf){target="_blank" download="SyncWatch_Proposal.pdf"} |

---

## 3. 도메인 운영 및 엔지니어링 에이전트 (Tier 3 & Tier 4)

| 제품명 | 핵심 역할 및 주요 수록 내용 | 페이지 | 다운로드 |
| :--- | :--- | :---: | :---: |
| **SyncBoot**<br>(엔터프라이즈 백오피스 표준) | • Spring Boot 3.5 & Java 25 기반 표준 백오피스 프레임워크<br>• DB 단일 원천(`sys_permission`) 동적 메뉴 라우팅 및 권한 관리<br>• AES-256 암호화 실시간 환경설정(`sys_config`) 및 서버 연결 진단 | 8p | [PDF 다운로드](/downloads/proposals/SyncBoot_Proposal.pdf){target="_blank" download="SyncBoot_Proposal.pdf"} |
| **SyncCMS**<br>(콘텐츠 자동 발행 & 웹 품질 진단) | • 초안 작성 → SEO 검토 → 발행 3단계 에이전트 협업 워크플로우<br>• 콘텐츠 공백(Gap) 분석 및 데이터 기반 신규 아티클 주제 추천<br>• SEO · AEO · GEO 검색 및 AI 답변 인용 품질 진단 | 8p | [PDF 다운로드](/downloads/proposals/SyncCMS_Proposal.pdf){target="_blank" download="SyncCMS_Proposal.pdf"} |
| **SyncShop**<br>(분산 MSA 이커머스 & 프라이싱) | • Gateway, Auth, Admin, Portal, Search, Monitor, MBG, MCP Server, Common 등 9대 독립 마이크로서비스<br>• 최소 마진율 기준을 지키는 다이내믹 프라이싱 일괄 조정<br>• 변경 전 가격 스냅샷 보관 및 1-Click 즉시 복원 | 8p | [PDF 다운로드](/downloads/proposals/SyncShop_Proposal.pdf){target="_blank" download="SyncShop_Proposal.pdf"} |
| **SyncOps**<br>(한국형 SI 사업운영 & 손익 관리) | • 발주처 계약단가 vs 실투입원가 비교 실시간 영업이익률 산출<br>• KOSA 기술등급 이력 및 월별 인력 M/M 가동률 히트맵 매트릭스<br>• 4대 보증보험 만기, 하도급법 지급기일 알림, SHA-256 전자연구노트 | 8p | [PDF 다운로드](/downloads/proposals/SyncOps_Proposal.pdf){target="_blank" download="SyncOps_Proposal.pdf"} |
| **SyncETA**<br>(자가 치유 E2E 테스트 자동화) | • 마우스 클릭·입력만으로 만드는 노코드 테스트 시나리오 레코딩<br>• 화면 개편 시 문맥과 시각 정보로 셀렉터를 보정하는 AI Self-Healing<br>• 웹(Playwright) · 모바일(Appium) 통합 검증 및 화면 비교 | 8p | [PDF 다운로드](/downloads/proposals/SyncETA_Proposal.pdf){target="_blank" download="SyncETA_Proposal.pdf"} |
| **SyncCrawl**<br>(웹 데이터 수집 & RAG 파이프라인) | • 복잡한 셀렉터 작성 없이 스키마 정의로 추출하는 의미 기반 파서<br>• Playwright 클러스터 기반 동적 렌더링 및 광고·메뉴 노이즈 제거<br>• 표·구조 보존 마크다운 변환 및 pgvector 문맥 단위 적재 | 8p | [PDF 다운로드](/downloads/proposals/SyncCrawl_Proposal.pdf){target="_blank" download="SyncCrawl_Proposal.pdf"} |
| **SyncSDK**<br>(코딩 보조 & 에이전트 개발 키트) | • 요구사항 분석 → 계획 → 코드 작성 → 4단계 빌드 검증 파이프라인<br>• Spring Boot 애플리케이션을 도메인 에이전트로 연결하는 스타터 키트<br>• 산출물 4종(프로그램 사양서·화면설계서·테이블명세서·단위테스트) 자동 생성 | 8p | [PDF 다운로드](/downloads/proposals/SyncSDK_Proposal.pdf){target="_blank" download="SyncSDK_Proposal.pdf"} |

---

## 4. 도입 검토 단계별 추천 문서 가이드

기업의 도입 목적과 의사결정 단계에 따라 아래 문서를 조합하여 활용하시면 품의 및 기술 검토 시간을 단축할 수 있습니다.

| 검토 단계 및 목적 | 추천 다운로드 문서 조합 | 주요 활용 포인트 |
| :--- | :--- | :--- |
| **1단계: 경영진 초기 보고 및 DX 과제 발의** | `SyncSeries_Brochure_v1.0.pdf` (4p)<br>+ `SyncSeries_Master_Proposal.pdf` (8p) | 4-Tier 자율 에이전트 연합 비전, 3단계 안전장치(HITL·스냅샷 롤백), 단계별 도입 로드맵 및 정량 ROI 제시 |
| **2단계: 전사 AI 거버넌스 및 보안성 심의** | `SyncVerse_Proposal.pdf`<br>+ `SyncLLM_Proposal.pdf`<br>+ `SyncAPIM_Proposal.pdf`<br>+ `SyncWatch_Proposal.pdf` | 망분리 온프레미스 구축, PII 실시간 마스킹, 미등록 섀도우 API 차단, 8대 위협 피드 기반 무중단 가상 패치 체계 입증 |
| **3단계: 도메인별 SI/솔루션 차세대 구축** | `SyncBoot_Proposal.pdf`<br>+ `SyncCMS_Proposal.pdf`<br>+ `SyncShop_Proposal.pdf`<br>+ `SyncOps_Proposal.pdf` | Java 25 / Spring Boot 3.5 표준 프레임워크 자산화, Nuxt 3 SSR 헤드리스 CMS, 9대 MSA 커머스, 한국형 SI 듀얼단가 손익·하도급법 관제 |
| **4단계: QA 자동화 및 RAG 지식 파이프라인** | `SyncETA_Proposal.pdf`<br>+ `SyncCrawl_Proposal.pdf`<br>+ `SyncInsight_Proposal.pdf`<br>+ `SyncSDK_Proposal.pdf` | Vision-LLM 셀렉터 자가치유 테스트, 적응형 웹 수집 및 `PostgreSQL 18.6 pgvector` Tri-Hybrid RAG, Safe NL2SQL 의사결정 지원 |

---

## 5. 라이브 데모 및 데스크톱 체험 안내

* **통합 라이브 데모 포털**: [https://sync.empasy.io](https://sync.empasy.io) 에서 각 제품의 상세 소개와 관리자·사용자 라이브 데모를 바로 체험하실 수 있습니다.
* **SyncETA 데스크톱 앱 다운로드**: [https://empasy.io/ko/download_eta.html](https://empasy.io/ko/download_eta.html) 에서 Windows / macOS 설치 파일을 내려받아 로컬에서 바로 테스트 자동화를 실행하실 수 있습니다.
