---
title: "SyncShop: 시스템 및 AI 에이전트 아키텍처"
sidebarTitle: "시스템 아키텍처"
description: "SyncShop의 Headless 분리 구조, MSA 백엔드 설계, AgentScope Java 기반 에이전트 스웜 및 A2A 통신 파이프라인 명세"
head:
  - - meta
    - name: keywords
      content: SyncShop, Headless Commerce, AgentScope Java, A2A, MCP, 에이전트 스웜, 다이내믹 프라이싱, Spring Boot 3
sort: 2
---

# 시스템 및 AI 에이전트 아키텍처

SyncShop은 프론트엔드와 백엔드의 완전한 분리를 보장하는 **Headless 아키텍처**와 자율 상거래 운영을 위한 **AgentScope Java 기반 멀티 에이전트 스웜**을 채택하고 있습니다.

---

## 1. 전사 시스템 계층 구조

```mermaid
flowchart TD
    subgraph ClientLayer ["프론트엔드 표현층 (Headless Clients)"]
        WebAdmin["SyncShop Admin\n(Vue 3 + Vite)"]
        MobileApp["Mobile App\n(Uni-App / Native)"]
        ThirdParty["외부 커머스 채널\n(오픈마켓 / 소셜 커머스)"]
    end

    subgraph ServiceLayer ["백엔드 비즈니스 로직 (Core Backend)"]
        AdminServer["sync-shop-admin\n(Spring Boot 3.3 / MyBatis)"]
        PMS["상품 관리\n(PMS Engine)"]
        OMS["주문/배송\n(OMS Engine)"]
        SMS["프로모션\n(SMS Engine)"]
        AdminServer --- PMS
        AdminServer --- OMS
        AdminServer --- SMS
    end

    subgraph AgentLayer ["자율 상거래 에이전트 (Commerce Swarm)"]
        McpServer["sync-shop-mcp-server\n(AgentScope Java)"]
        PricingAgent["Pricing Optimizer Agent\n(가격/마진 최적화)"]
        SafeguardAgent["Margin Safeguard Agent\n(역마진 원천 방어)"]
        ExecAgent["Snapshot & Exec Agent\n(스냅샷 보존 및 DB 반영)"]
        McpServer --- PricingAgent
        McpServer --- SafeguardAgent
        McpServer --- ExecAgent
    end

    subgraph ControlTower ["전사 중앙 관제 (SyncSeries Orchestrator)"]
        SyncVerse["SyncVerse Control Tower\n(A2A 메시지 버스 & HITL 승인)"]
    end

    ClientLayer -->|RESTful API / JWT| AdminServer
    SyncVerse <-->|MCP JSON-RPC / SSE| McpServer
    McpServer -->|내부 서비스 바인딩| AdminServer
```

---

## 2. 상거래 내부 에이전트 스웜 (Intra-Agent Commerce Swarm)

SyncShop 에이전트 서버는 단일 LLM 호출 대신 세분화된 3단계 에이전트 스웜 구조를 통해 안전한 자율 운영을 수행합니다.

1. **Pricing Optimizer Agent (가격 분석 에이전트)**:
   * 카테고리별 재고 회전율, 매출 추이, 경쟁사 가격 데이터를 분석하여 최적의 할인율과 조정 목표가를 산출합니다.
2. **Margin Safeguard Agent (마진 보호 에이전트)**:
   * 산출된 가격이 상품별 원가(Cost Price) 및 최저 마진율 기준을 위반하지 않는지 전수 검증합니다.
   * 역마진 위험 발견 시 즉시 작업을 차단하고 경고 사유를 기록합니다.
3. **Snapshot & Execution Agent (스냅샷 및 실행 에이전트)**:
   * DB 반영 직전 원본 가격 상태를 스냅샷(`TB_SHOP_PRICE_SNAPSHOT`)으로 보존합니다.
   * `pms_product` 테이블에 트랜잭션을 적용하고 변경 결과를 관제탑에 보고합니다.

---

## 3. 다이내믹 프라이싱 및 무손실 롤백 시퀀스

```mermaid
sequenceDiagram
    autonumber
    actor Admin as 운영자 / 관제탑
    participant Verse as SyncVerse (L2)
    participant ShopMcp as SyncShop MCP Server
    participant Swarm as Swarm (Safeguard)
    participant DB as MariaDB / MySQL

    Admin->>Verse: "겨울 아우터 카테고리 10% 일괄 할인 적용"
    Verse->>ShopMcp: tools/call: shop_batch_price_update
    ShopMcp->>Swarm: 가격 시뮬레이션 및 마진 검증 요청
    Swarm-->>ShopMcp: 검증 통과 (마진 이상 없음)
    ShopMcp->>DB: 현재 가격 상태 스냅샷 저장 (snapshot_id 발급)
    ShopMcp->>DB: pms_product 일괄 가격 업데이트
    ShopMcp-->>Verse: 결과 반환 (변경 42건, snapshot_id: SNP-202609-001)

    opt 이상 감지 시 즉각 롤백
        Admin->>Verse: "가격 할인 긴급 취소 (롤백)"
        Verse->>ShopMcp: tools/call: shop_batch_price_update (action: ROLLBACK_PRICE)
        ShopMcp->>DB: snapshot_id 기반 원본 가격 복원
        ShopMcp-->>Verse: 롤백 완료 보고
    end
```

---

## 4. 보안 및 트랜잭션 무결성

* **A2A 인바운드 보안**: `A2ASessionKeyHolder`를 통한 비밀키 및 인바운드 토큰 검증으로 미인가 에이전트의 제어 요청을 원천 차단합니다.
* **Saga 패턴 일관성**: 작업 단위별 고유 `task_id`를 추적하며, 연동 실패 시 보상 트랜잭션을 통해 이전 일관성 상태를 유지합니다.
* **Zero-Mock 원칙**: 모든 도구 호출은 인메모리 더미 데이터를 배제하고 실제 영속 데이터베이스와 100% 연동됩니다.
