---
title: SyncInsight MCP 도구 레퍼런스
shortTitle: MCP 도구 레퍼런스
category: 개발 & 연동
sort: 5
description: SyncInsight 의사결정 인텔리전스 엔진이 외부 및 관제탑(SyncVerse)에 제공하는 MCP 도구 스키마 및 파라미터 규격
---

# SyncInsight MCP 도구 레퍼런스

## 1. 개요

SyncInsight는 Model Context Protocol(MCP)을 통해 외부 관제탑(SyncVerse) 및 사용자 프롬프트에 대응하는 4대 핵심 분석 도구를 표준 JSON-RPC 인터페이스로 노출합니다.

---

## 2. 도구별 세부 명세

### 2.1 `syncinsight_run_nl2sql`
자연어 질의를 수신하여 엔터프라이즈 데이터 웨어하우스/DB 쿼리를 안전하게 컴파일하고 읽기 전용으로 실행합니다.

#### 파라미터 스키마
```json
{
  "name": "syncinsight_run_nl2sql",
  "arguments": {
    "queryPrompt": "지난 30일간 일별 결제 실패율 추이와 실패 사유 상위 5개를 추출해줘.",
    "targetDatasource": "dw_production_read_replica",
    "explainPlan": true,
    "limit": 100
  }
}
```

#### 응답 스키마
```json
{
  "sqlQuery": "SELECT DATE(created_at) AS tx_date, COUNT(CASE WHEN status='FAILED' THEN 1 END)*100.0/COUNT(*) AS failure_rate ... GROUP BY DATE(created_at) ORDER BY tx_date DESC;",
  "executionTimeMs": 84,
  "rowCount": 30,
  "data": [
    { "tx_date": "2026-09-14", "failure_rate": 0.42, "top_reason": "PG_TIMEOUT" }
  ],
  "safetyPassed": true
}
```

---

### 2.2 `syncinsight_create_deep_research`
이기종 데이터(내부 원장, 시장 동향, 고객 피드백)를 결합하여 다관점 심층 보고서를 생성합니다.

#### 파라미터 스키마
```json
{
  "name": "syncinsight_create_deep_research",
  "arguments": {
    "topic": "신규 결제 수단(네이버페이/토스페이) 연동에 따른 결제 전환율 및 수수료 최적화 분석",
    "sources": ["INTERNAL_DB", "EXTERNAL_MARKET_FEED", "RAG_KNOWLEDGE"],
    "includeWhatIfSimulation": true
  }
}
```

---

### 2.3 `syncinsight_simulate_action`
도출된 비즈니스 액션을 프로덕션에 적용하기 전에 모의 실행(What-If Simulation)하여 위험도를 예측합니다.

#### 파라미터 스키마
```json
{
  "name": "syncinsight_simulate_action",
  "arguments": {
    "actionId": "action-vip-promo-2026",
    "simulationHorizonDays": 30,
    "variableAdjustments": {
      "discountRatePercent": 5.0,
      "minimumBasketSize": 100000
    }
  }
}
```
