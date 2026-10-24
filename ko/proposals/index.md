---
title: "SyncSeries 제품 소개서 및 도입 제안서 (PDF 다운로드)"
description: "SyncSeries 통합 제안서 및 10개 전 제품군(SyncVerse, SyncInsight, SyncLLM, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncETA, SyncCrawl, SyncSDK) 개별 소개서·도입제안서 PDF 다운로드 센터"
---

# 제품 소개서 및 도입 제안서 (PDF 다운로드)

사내 품의, 아키텍처 기술 검토, 차세대 SI/DX 사업 제안에 바로 참고하고 첨부할 수 있는 **SyncSeries 공식 제품 소개서 겸 도입 제안서(8페이지 A4 표준 규격)** 모음입니다.

모든 문서는 각 제품의 **도입 배경(현장의 고민) → 해결 방향 → 핵심 기능 → 시스템 아키텍처 → 작동 시나리오 → 도입 효과(Before/After) → 구축 로드맵 → 기술 사양** 순서로 알기 쉽게 구성되어 있습니다.

---

## 1. 통합 마스터 도입 제안서

| 문서명 | 대상 독자 및 주요 내용 | 페이지 | 다운로드 |
| :--- | :--- | :---: | :---: |
| **SyncSeries 통합 도입 제안서**<br>(`SyncSeries_Master_Proposal.pdf`) | **CIO · CTO · PMO · 디지털 전환(DX) 기획팀**<br>• 4-Tier 자율 운영 아키텍처 및 표준 MCP/A2A 연동 구조<br>• 10종 전체 에이전트·솔루션 라인업 한눈에 보기<br>• 4단계 점진적 도입 로드맵 및 운영 안전장치(HITL·롤백) | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncSeries_Master_Proposal.pdf){target="_blank" download="SyncSeries_Master_Proposal.pdf"} |

---

## 2. 오케스트레이션 및 인텔리전스 계층 (Tier 1 & Tier 2)

| 제품명 | 핵심 역할 및 주요 수록 내용 | 페이지 | 다운로드 |
| :--- | :--- | :---: | :---: |
| **SyncVerse**<br>(중앙 관제탑 & 오케스트레이터) | • 전사 도메인 에이전트 통합 지휘 및 A2A 메시지 브로커<br>• AI SyncOps 5-Step Spec Studio 및 코드 영향도 분석<br>• 다자간 순차 결재(Multi-HITL) 및 SI 4대 산출물 자동 생성 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncVerse_Proposal.pdf){target="_blank" download="SyncVerse_Proposal.pdf"} |
| **SyncInsight**<br>(비즈니스 인텔리전스 & 리서치) | • 내외부 데이터를 결합하는 2-Phase Deep Research 파이프라인<br>• 읽기 전용 안전 자연어 SQL 변환(Safe NL2SQL) 및 pgvector 검색<br>• 원인 분석부터 실행 가능한 액션 플랜 카드 도출·위임 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncInsight_Proposal.pdf){target="_blank" download="SyncInsight_Proposal.pdf"} |
| **SyncLLM**<br>(중앙 AI 게이트웨이 & FinOps) | • 추론 난이도 기반 멀티 LLM 동적 라우팅 및 무중단 우회(Fallback)<br>• Redis 시맨틱 캐싱 및 부서·에이전트별 토큰 예산 가드레일<br>• 실시간 개인정보(PII) 및 기밀 키워드 인바운드/아웃바운드 마스킹 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncLLM_Proposal.pdf){target="_blank" download="SyncLLM_Proposal.pdf"} |

---

## 3. 도메인 운영 및 엔지니어링 에이전트 (Tier 3 & Tier 4)

| 제품명 | 핵심 역할 및 주요 수록 내용 | 페이지 | 다운로드 |
| :--- | :--- | :---: | :---: |
| **SyncBoot**<br>(엔터프라이즈 백오피스 표준) | • Spring Boot 3.5 & Java 25 기반 표준 백오피스 프레임워크<br>• DB 단일 원천(`sys_permission`) 동적 메뉴 라우팅 및 RBAC 인가<br>• AES-256 암호화 무중단 런타임 환경설정(`sys_config`) 및 소켓 진단 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncBoot_Proposal.pdf){target="_blank" download="SyncBoot_Proposal.pdf"} |
| **SyncCMS**<br>(자율 콘텐츠 발행 & 웹 품질 감사) | • Copywriter → SEO Reviewer → Publisher 3단계 자율 발행 Swarm<br>• 콘텐츠 갭(Gap) 분석 및 데이터 기반 신규 아티클 주제 추천<br>• SEO · AEO · GEO 생성형 AI 검색 인용 품질 정밀 진단 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncCMS_Proposal.pdf){target="_blank" download="SyncCMS_Proposal.pdf"} |
| **SyncShop**<br>(분산 MSA 이커머스 & 프라이싱) | • Gateway, Auth, Admin, Portal, Search 등 8개 독립 마이크로서비스<br>• 최소 마진율 가드레일 기반 다이내믹 프라이싱 일괄 조정<br>• 인메모리 가격 스냅샷 보존 및 1-Click 즉시 롤백 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncShop_Proposal.pdf){target="_blank" download="SyncShop_Proposal.pdf"} |
| **SyncOps**<br>(한국형 SI 사업운영 & 손익 관제) | • 발주처 계약단가 vs 실투입원가 듀얼단가 실시간 영업이익률 산출<br>• KOSA 기술등급 이력 및 월별 인력 M/M 가동률 히트맵 매트릭스<br>• 4대 보증보험 만기, 하도급법 지급기일 경보, SHA-256 전자연구노트 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncOps_Proposal.pdf){target="_blank" download="SyncOps_Proposal.pdf"} |
| **SyncETA**<br>(자가 치유 E2E 테스트 자동화) | • 마우스 클릭·입력만으로 완성하는 노코드 테스트 시나리오 레코딩<br>• 화면 개편 시 문맥과 시각 정보로 경로를 복구하는 AI Self-Healing<br>• 웹(Playwright) · 모바일(Appium) 통합 검증 및 비주얼 비교 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncETA_Proposal.pdf){target="_blank" download="SyncETA_Proposal.pdf"} |
| **SyncCrawl**<br>(시맨틱 웹 데이터 수집 & RAG) | • 사이트별 복잡한 셀렉터 작성 없이 스키마 정의로 추출하는 시맨틱 파서<br>• Playwright 클러스터 기반 동적 렌더링 및 광고·메뉴 노이즈 제거<br>• 표·구조 보존 마크다운 변환 및 pgvector 시맨틱 청킹 적재 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncCrawl_Proposal.pdf){target="_blank" download="SyncCrawl_Proposal.pdf"} |
| **SyncSDK**<br>(자율 코딩 & 에이전트 개발 키트) | • 요구사항 분석 → 계획 → 패치 → 4-Cycle 빌드 자가 치유 코딩 파이프라인<br>• Spring Boot 애플리케이션을 도메인 에이전트로 전환하는 스타터 키트<br>• 산출물 4종(프로그램 사양서·화면설계서·테이블명세서·단위테스트) 자동 생성 | 8p | [📄 PDF 다운로드](/downloads/proposals/SyncSDK_Proposal.pdf){target="_blank" download="SyncSDK_Proposal.pdf"} |

---

## 4. 라이브 데모 및 데스크톱 체험 안내

* **통합 라이브 데모 포털**: [https://sync.empasy.io](https://sync.empasy.io) 에서 각 제품의 상세 소개와 관리자·사용자 라이브 데모를 바로 체험하실 수 있습니다.
* **SyncETA 데스크톱 앱 다운로드**: [https://empasy.io/ko/download_eta.html](https://empasy.io/ko/download_eta.html) 에서 Windows / macOS 설치 파일을 내려받아 로컬에서 바로 테스트 자동화를 실행하실 수 있습니다.
