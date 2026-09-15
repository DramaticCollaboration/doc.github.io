---
title: SyncInsight 라운드테이블 에이전트 토론
shortTitle: 라운드테이블 토론
category: 핵심 엔진
sort: 6
description: 상반된 관점을 가진 멀티 에이전트 간 비동기 토론을 통해 의사결정 편향을 제거하고 최적의 대안을 수렴하는 알고리즘
---

# SyncInsight 라운드테이블 에이전트 토론

## 1. 다관점 합의 메커니즘 (Roundtable Consensus)

단일 LLM의 분석 결과는 환각(Hallucination)이나 특정 프롬프트 편향(Bias)에 취약할 수 있습니다.  
SyncInsight는 이를 방지하기 위해 상반된 비즈니스 목표를 가진 **복수의 특화 분석 에이전트 간 라운드테이블 토론 파이프라인**을 운영합니다:

```mermaid
flowchart TD
    Prompt[사용자 전략 질의] --> Moderator[조정자 에이전트 (Moderator)]
    
    subgraph Roundtable ["라운드테이블 에이전트 토론장"]
        AgentA["에이전트 A: 성장 & 매출 극대화<br/>(Growth Optimizer)"]
        AgentB["에이전트 B: 리스크 & 마진 방어<br/>(Risk & Margin Guardian)"]
        AgentC["에이전트 C: 고객 경험 & 이탈 방지<br/>(CX & Retention Specialist)"]
    end
    
    Moderator --> Roundtable
    AgentA <--> |교차 논박 및 데이터 제시| AgentB
    AgentB <--> |수수료/비용 검증| AgentC
    AgentC <--> |재구매율 시뮬레이션| AgentA
    
    Roundtable --> Consensus[합의 수렴 (Consensus Score >= 0.88)]
    Consensus --> ActionPlan[최종 균형 액션 플랜 수립]
```

---

## 2. 3단계 토론 수렴 알고리즘

1. **발의 (Hypothesis Proposal)**: 각 에이전트가 고유의 목적 함수에 기반하여 초기 가설과 근거 데이터를 발의합니다.
2. **교차 검증 및 반박 (Cross-Examination)**: 상대 에이전트의 약점(예: "성장률은 높으나 마진이 12% 훼손됨")을 지적하고 대안 파라미터를 역제안합니다.
3. **가중치 합의 점수 산출 (Weighted Consensus Scoring)**: 조정자 에이전트가 합의 점수가 88점 이상에 도달할 때까지 최대 3라운드의 조정안을 제시하여 최적의 파레토 균형점(Pareto Optimal)을 도출합니다.
