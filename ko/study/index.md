---
title: "엔지니어링 연구 아카이브 (Study)"
description: "SyncSeries 핵심 기술 스택인 Playwright, Vision-LLM, MCP, 하이브리드 RAG, 고성능 Java 런타임에 대한 심층 기술 연구 및 아키텍처 분석 자료집입니다."
head:
  - - meta
    - name: keywords
      content: 기술연구, Playwright CDP, Vision-LLM, 자가치유 알고리즘, MCP 오케스트레이션, 하이브리드 RAG, 가상 스레드, AgentScope, 엠파시
  - - meta
    - property: og:title
      content: "엔지니어링 연구 아카이브 | 엠파시(Empasy)"
  - - meta
    - property: og:description
      content: "실전 엔지니어링 문제 해결을 위한 심층 기술 분석 및 아키텍처 연구 자료입니다."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/study/
sort: 1
---

# 엔지니어링 연구 아카이브 (Study)

본 공간은 엠파시 SyncSeries(SyncEta, SyncVerse, SyncBoot, SyncCrawl 등) 제품군의 기반이 되는 핵심 기술 스택에 대해, 구현 원리와 성능 벤치마크, 아키텍처 설계 패턴을 심층 연구하여 기록하는 기술 아카이브입니다.

---

## 핵심 연구 주제 분류

### 1. 웹 브라우저 자동화 & QA 엔지니어링
- **[Playwright 및 CDP 기반 시각적 회귀 분석과 DOM 동기화](./playwright-cdp-visual-regression)**: Chrome DevTools Protocol을 활용한 렌더링 프레임 캡처 및 네트워크 유휴 상태 동기화 기법 분석.
- **[Vision-LLM 기반 UI 요소 바운딩 박스 추론 및 자가 치유(Self-Healing) 알고리즘](./vision-llm-self-healing-algorithm)**: 화면 시각적 문맥과 좌표를 활용하여 클래스명 변경에 대응하는 회귀 테스트 복구 파이프라인.

### 2. 분산 에이전트 & 프로토콜
- **[Model Context Protocol(MCP) JSON-RPC 사양 분석과 도구 오케스트레이션](./mcp-jsonrpc-agent-orchestration)**: Claude/Playwright 표준 도구 인터페이스와 엔터프라이즈 보안 게이트웨이 설계 패턴.
- **[Java 21 가상 스레드와 AgentScope 기반 비동기 메시징 성능 분석](./springboot-virtual-threads-agentscope)**: Spring Boot 환경에서 블로킹 I/O 극복과 수만 단위 동시 에이전트 통신 처리 벤치마크.

### 3. AI 모델 & 지식 파이프라인
- **[엔터프라이즈 RAG 아키텍처: Sparse + Dense 하이브리드 검색과 Cross-Encoder 리랭킹](./hybrid-rag-dense-sparse-reranking)**: 도메인 특화 검색 정밀도 향상을 위한 BM25와 임베딩 벡터 결합 파이프라인.
- **[Qwen2-VL 멀티모달 모델 파인튜닝 실무](./qwen2vlfinetuning)**: 한국어 웹 UI 화면 컴포넌트 인식을 위한 데이터셋 구성 및 LoRA 튜닝.
- **[LLM 파인튜닝 후 성능 저하 원인 및 해결책 분석](./LLM%20파인튜닝%20후%20성능%20저하%20원인%20및%20해결책%20분석)**: Catastrophic Forgetting 방지 및 정렬 데이터 보정 연구.
- **[RAG 기반 지식 검색 파이프라인 구축](./rag)**: 비정형 데이터 청킹 및 메타데이터 필터링 전략.

---

## 연구 방법론 및 검증 기준

엠파시 엔지니어링 팀은 모든 기술 연구에서 다음 원칙을 준수합니다:
1. **코드 레벨 실증**: 이론적 모델에 그치지 않고 실제 실행 가능한 프로토타입 또는 벤치마크 코드를 작성하여 성능을 검증합니다.
2. **정량적 데이터 제시**: 레이턴시, 메모리 점유율, 처리량(Throughput), 실패율 등 수치화된 지표를 기반으로 기술 채택 여부를 결정합니다.
3. **상용 안정성 검토**: 네트워크 단절, 스레드 고갈, DOM 지연 렌더링 등 에지 케이스에 대한 방어 로직을 포함합니다.

