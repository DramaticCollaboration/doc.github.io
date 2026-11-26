---
layout: home
title: "SyncSeries 공식 기술 문서 및 개발자 가이드"

hero:
    name: "엠파시 기술 문서"
    text: "SyncSeries 설치 · 구조 · 연동 가이드"
    tagline: "공통 기반(SyncBoot) 위 핵심 4종과 확장 7종 모듈의 아키텍처, API 규격, 운영 가이드 공식 문서입니다."
    actions:
      - text: 연동 구조 보기
        link: /ecosystem/
        theme: brand
      - text: 전사 기술 용어집
        link: /glossary/
        theme: alt
      - text: 통합 데모 포털 ↗
        link: https://demo.empasy.io/
        theme: alt

head:
  - - meta
    - name: keywords
      content: 엠파시 기술 문서, Empasy Docs, SyncSeries 매뉴얼, SyncVerse, SyncETA, SyncBoot, SyncCMS, SyncInsight, SyncLLM, SyncCrawl, SyncAPIM, SyncWatch, SyncShop, SyncOps, API 문서
  - - meta
    - property: og:title
      content: "엠파시 기술 문서 (Empasy Docs) — SyncSeries 공식 개발 및 운영 가이드"
  - - meta
    - property: og:description
      content: "엠파시 SyncSeries 주력 솔루션 4종과 업무별 확장 모듈의 설치, 아키텍처, API 연동 및 운영 가이드를 제공합니다."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/

footer: Copyright © 2026 Empasy Inc. All rights reserved.
---

<div id="solutions"></div>

## 본 문서 포털의 역할

> 본 사이트(`doc.empasy.com`)는 **개발자와 시스템 운영자를 위한 공식 기술 매뉴얼 및 기술 용어 원천(SSOT)**입니다.
> 비개발자를 위한 쉬운 제품 소개는 [엠파시 공식 홈페이지(empasy.io)](https://empasy.io/)의 제품별 소개 페이지에서, 설치 없는 화면 체험은 [통합 데모 포털(demo.empasy.io)](https://demo.empasy.io/)에서 이용하실 수 있으며, 생태계 전반의 표준 기술 용어는 [전사 기술 용어집(/glossary/)](/glossary/)에서 확인하실 수 있습니다.

---

## 하나의 공통 기반과 모듈 목록

SyncSeries는 서로 무관한 11개의 개별 시스템을 별도로 만든 것이 아니라, **공통 백오피스·인증·감사 기반(`SyncBoot` 및 공통 모듈) 위에서 실제 기업 프로젝트에 반복적으로 필요했던 업무 기능을 모듈 단위로 정리한 구조**입니다.

필요한 영역 하나만 먼저 도입해 쓰다가, 나중에 다른 모듈을 연결할 때도 같은 권한 체계와 표준 연동 규격(REST / MCP)을 그대로 사용할 수 있습니다. 상단 구성도에서 각 모듈을 눌러 API 경로와 연동 관계를 바로 확인하거나 아래 목록에서 문서로 이동할 수 있습니다.

### 주력 솔루션 4종

| 솔루션 | 역할 요약 | 문서 |
| :--- | :--- | :--- |
| **SyncVerse** | 요구사항 정리, 작업 배분, 품질 점검 조회, 담당자 단계별 승인 및 이력 관리 | [SyncVerse 가이드 →](/syncverse/) |
| **SyncETA** | 데스크톱 시나리오 기록(Windows/macOS), 화면 변경 보정, 배포 전후 화면 비교 테스트 | [SyncETA 가이드 →](/synceta/) |
| **SyncBoot** | Spring Boot 4.0 · Java 25 · PostgreSQL 18.6 기반 사내 관리 시스템 표준(권한·전자결재·감사 로그) | [SyncBoot 가이드 →](/syncboot/) |
| **SyncCMS** | 멀티사이트 콘텐츠 작성·검수·승인, 검색·접근성 사전 점검, 다국어 페이지 관리 | [SyncCMS 가이드 →](/synccms/) |

### 목적별 확장 모듈 7종

| 영역 | 솔루션 | 역할 요약 | 문서 |
| :--- | :--- | :--- | :--- |
| **데이터 · AI** | **SyncInsight** | 읽기 전용 기반 일상 언어 데이터 조회(NL2SQL), 요약 리포트 및 데이터 출처 추적 | [SyncInsight 가이드 →](/syncinsight/) |
| **데이터 · AI** | **SyncLLM** | 멀티 AI 모델 통합 연결, 유사 질문 캐싱, 부서별 예산 관리 및 개인정보 가림 처리 | [SyncLLM 가이드 →](/syncllm/) |
| **데이터 · AI** | **SyncCrawl** | 구조 변경 대응 공개 웹 데이터 수집, 노이즈 제거 및 정형 문서·벡터 저장 | [SyncCrawl 가이드 →](/synccrawl/) |
| **보안 관리** | **SyncAPIM** | 트래픽 기반 미등록 API 식별, OpenAPI 명세 불일치 진단, 위협 탐지 및 민감정보 가림 | [SyncAPIM 가이드 →](/syncapim/) |
| **보안 관리** | **SyncWatch** | 국내외 주요 보안 취약점 공지 수집·정규화, 코드 점검 및 API 방어 규칙 관리·배포 | [SyncWatch 가이드 →](/syncwatch/) |
| **업무 · 서비스** | **SyncShop** | 8개 독립 마이크로서비스 기반 이커머스, 최소 마진 기준 확인 가격 조정 및 이전 가격 복원 | [SyncShop 가이드 →](/syncshop/) |
| **업무 · 서비스** | **SyncOps** | SI 프로젝트 계약 단가 대비 실투입 손익, 인력 배정 간트, 4대 보증보험·하도급 기한 및 연구노트 관리 | [SyncOps 가이드 →](/syncops/) |

---

## 개발 표준 · 프로젝트 방법론 · 자료실

| 구분 | 내용 요약 | 링크 |
| :--- | :--- | :--- |
| **전사 기술 용어집** | MCP, A2A, AgentScope Java, NL2SQL, GraphRAG, HITL, eBPF, FinOps 등 표준 기술 용어 정의 | [전사 기술 용어집 →](/glossary/) |
| **공통 모듈 및 SDK** | 공통 코어(`sync-core`), 도메인 공통 모듈(`sync-module-*`), 연동 SDK 가이드 | [개발자 센터 →](/sdk/) · [공통 모듈 →](/ecosystem/shared-modules-and-sdk) |
| **사업 전 주기 방법론** | 제안·분석·설계·구현·테스트·이관 6단계 수행 절차 및 점검 기준 | [방법론 개요 →](/methodology/) |
| **표준 산출물 양식 (125종)** | 90-8-2 전사 표준 포맷으로 통일된 단계별 오피스 125종, 동기화 마크다운 14종, 규모별 Tailoring 프리셋 | [표준 산출물 양식 →](/methodology/enterprise-document-templates) |
| **애자일 및 Git 협업** | 스크럼반(Scrumban) 운영 절차, Git 브랜치 전략, 스프린트 점검표 | [애자일 가이드 →](/agile/) |
| **소개서 · 제안서 (PDF)** | 요약 브로셔, 통합 제안서 및 제품별 개별 제안서 PDF 모음 | [제안서 자료실 →](/proposals/) |
| **SyncETA 설치 파일** | Windows · macOS 데스크톱 앱 공식 다운로드 페이지 | [SyncETA 다운로드 ↗](https://empasy.io/ko/download_eta.html) |

---

## 주요 현장 적용 사례

엠파시 엔지니어링 팀은 교육, 유통·가전, 모빌리티·보안, 공공·에너지 분야의 기업 프로젝트에서 축적한 경험을 바탕으로 SyncSeries를 발전시켜 왔습니다.

| 산업군 | 적용 모듈 | 주요 수행 내용 |
| :--- | :--- | :--- |
| **교육 플랫폼 기업** | **SyncETA** | 동시 접속 2,000명 규모의 디지털 교육 플랫폼에 자동 테스트 체계를 적용해 정기 회귀 점검 시간을 4시간에서 45분 내외로 단축 |
| **유통 · 가전 기업** | **SyncBoot** | 기존 경영관리 및 백오피스 구조를 표준 기반과 모듈 구조로 개편하고, 미사용 테이블을 정비해 배포 주기를 월 단위에서 주 단위로 단축 |
| **건자재 · 교육 포털** | **SyncCMS** | 해외 법인별 다국어 사이트와 대용량 콘텐츠 포털을 단일 관리 플랫폼으로 통합해 신규 국가 페이지 개설과 유지보수 절차를 단순화 |
| **보안 · 모빌리티 기업** | **SyncAPIM · SyncBoot** | 대용량 API 로그 고속 검색 및 보안 모니터링 환경을 구축해 실시간 이상 접근 파악 체계 정비 |
