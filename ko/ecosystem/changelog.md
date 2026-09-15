---
title: 릴리스 노트 및 변경 이력 (Changelog)
description: 엠파시 SyncSeries 플랫폼의 버전별 주요 기능 개선, 보안 업데이트 및 아키텍처 결정 기록(ADR)
sort: 70
---

# 엔터프라이즈 릴리스 노트 & 변경 이력

SyncSeries의 버전별 주요 업데이트, 보안 패치, 성능 개선 및 아키텍처 변경 기록(Architecture Decision Records)을 투명하게 안내합니다.

---

## [v2.4.0] - 2026-03-01

### 주요 신규 기능
* **SyncVerse 중앙 관제탑(Control Tower) 고도화**:
  * 멀티 에이전트 협업 MsgHub 기반 A2A(Agent-to-Agent) 이벤트 라우팅 엔진 탑재.
  * Server-Sent Events (SSE) 기반 실시간 원격 관제 스트리밍 지원.
* **3단계 HITL(Human-In-The-Loop) 안전 거버넌스 승인 파이프라인 정식 출시**:
  * `LOW`, `MEDIUM`, `HIGH` 등급별 자동 실행 및 관리자 승인 게이트웨이 구현.
* **RFC 7807 Problem Details 표준 에러 프로토콜 전사 적용**:
  * 가짜 정상(Fake Normalcy) 상태 위장을 원천 차단하고 구조화된 진단 정보 전파.

### 보안 및 컴플라이언스
* 푸터 필수 사업자 공시 정보 완비 및 B2B 엔터프라이즈 서비스 이용약관(`terms.html`) 신설.
* Zero Data Retention (데이터 미학습 보증) 정책 및 보안 백서 통합.
* 시스템 가동률 99.9% SLA 인디케이터 배지 연동.

---

## [v2.3.0] - 2026-02-15

### 주요 개선 사항
* **SyncLLM FinOps 시맨틱 캐시 & PII 마스킹 게이트웨이**:
  * 코사인 유사도 0.95 이상 동일 질의에 대한 Redis 기반 무지연(12ms) 시맨틱 캐싱.
  * 초당 2,500 RPS 처리 가능한 인라인 개인정보(PII) 실시간 난독화 필터 탑재.
* **지능형 가용성 자동 페일오버(Circuit Breaker)**:
  * 원격 LLM 제공사(OpenAI, Anthropic, Bedrock) 연속 3회 장애 감지 시 50ms 이내 보조 백엔드로 무단절 전환.

---

## [v2.2.0] - 2026-01-20

### 주요 개선 사항
* **SyncEta Vision-LLM 4.0 셀렉터 자가 치유(Self-Healing) 엔진**:
  * DOM 변경 감지 시 시각적 바운딩 박스와 텍스트 앵커를 결합한 자가 복구 성공률 98.4% 달성.
  * 비상교육 AIDT E2E 회귀 테스트 시간 4시간에서 45분으로 81% 단축 실증.
* **Playwright 분산 클러스터 멀티 워커 노드 연동**:
  * K8s 환경에서 수백 대의 브라우저 컨테이너를 동시 오케스트레이션하여 병렬 테스트 수행.

---

## [v2.1.0] - 2025-11-10

### 주요 개선 사항
* **SyncBoot Spring Boot 3.3 / Java 21 기반 MSA 프레임워크**:
  * 분산 트랜잭션 일관성을 위한 Orchestrated Saga 패턴 및 보상 트랜잭션 자동 생성.
  * Virtual Threads(Loom) 적용으로 동시 I/O 처리량 300% 향상.
  * AgentScope Java (`io.agentscope:agentscope-harness`) 전사 표준 AI 프레임워크 연동.

---

## [v2.0.0] - 2025-09-01

### 플래그십 상용 릴리스
* **SyncSeries 전사 3-Layer 아키텍처 상용 릴리스**:
  * Layer 1: 거버넌스 및 자율 협업 계층 (SyncVerse, SyncInsight)
  * Layer 2: 도메인 특화 자율 에이전트 계층 (SyncEta, SyncBoot, SyncCMS, SyncCrawl, SyncLLM)
  * Layer 3: 플랫폼 공통 인프라 계층 (DB 3-File 구조, MCP JSON-RPC 버스)
* **엔터프라이즈 온프레미스(Air-Gapped) 폐쇄망 배포 팩 최초 출하**.
