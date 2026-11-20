---
title: "SyncShop: 지능형 커머스 운영 플랫폼 개요"
description: "비즈니스 민첩성과 옴니채널 확장을 지원하는 Headless eCommerce 및 자율 상거래 운영 플랫폼입니다. Spring Boot 4.0, Vue 3, AgentScope Java, MCP 연동을 지원합니다."
head:
  - - meta
    - name: keywords
      content: SyncShop, Headless eCommerce, 커머스 에이전트, Spring Boot 4.0, AgentScope Java, MCP, 다이내믹 프라이싱, 주문 라이프사이클, 옴니채널
  - - meta
    - property: og:title
      content: "SyncShop: 지능형 커머스 운영 플랫폼 개요"
  - - meta
    - property: og:description
      content: 옴니채널 확장과 자율 운영을 지원하는 차세대 Headless eCommerce 플랫폼 명세
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncshop/
sort: 1
---

# SyncShop: 지능형 커머스 운영 플랫폼 개요

> **비개발자 · 도입 검토 안내**: 쉬운 제품 소개는 [SyncShop 제품 홈페이지(shop.empasy.io)](https://shop.empasy.io/){target="_blank" rel="noopener"}에서, 설치 없는 화면 체험은 [통합 데모 포털](https://sync.empasy.io/products/sync-shop#demo){target="_blank" rel="noopener"}에서 이용하실 수 있으며, 소개서·제안서 PDF는 [제안서 자료실](/proposals/)에서 내려받으실 수 있습니다.

SyncShop은 비즈니스 유연성과 채널 확장성을 위해 백엔드 상거래 로직과 프론트엔드 표현층을 분리한 **Headless eCommerce** 플랫폼입니다.

모든 핵심 기능을 RESTful API 및 표준 MCP(Model Context Protocol) 도구로 제공하여 웹, 모바일 앱, 키오스크, 소셜 커머스 등 다양한 고객 접점을 통합 제어하며, Spring Boot 4.0 기반 MSA 구조와 AgentScope Java 에이전트 하네스를 통해 자율 상거래 운영을 지원합니다.

---

## 4대 핵심 기능 영역

```mermaid
graph LR
    A["SyncShop 4대 핵심 영역"] --> B["1. 카탈로그 관리 (PMS)"]
    A --> C["2. 주문 및 물류 관제 (OMS)"]
    A --> D["3. 프로모션 & 마케팅 (SMS)"]
    A --> E["4. 커머스 에이전트 & MCP"]

    B -.-> B1["계층형 카테고리, SKU, 재고 잠금"]
    C -.-> C1["주문 전주기 추적, 반품/환불 자동화"]
    D -.-> D1["지능형 쿠폰, 타임세일, 동적 배너"]
    E -.-> E1["다이내믹 프라이싱, A2A 자율 연동"]
```

1. **상품 카탈로그 관리 (PMS - Product Management System)**:
   * 무제한 뎁스의 계층형 카테고리와 브랜드 자산 관리.
   * 색상, 사이즈, 용량 등 옵션 조합별 SKU 단가 및 재고 분리 제어.
   * 실시간 재고 잠금(Lock) 및 저재고 알림을 통한 품절 및 과다 재고 방지.

2. **주문 및 물류 관제 (OMS - Order Management System)**:
   * 결제 대기부터 발송 준비, 배송 중, 수취 완료까지 전 상태 추적.
   * 반품 및 환불 신청 심사 프로세스 표준화.
   * 다중 배송지 및 복수 물류 발송 센터 통합 관리.

3. **프로모션 및 마케팅 (SMS - Sales Management System)**:
   * 조건부 타깃 발급 쿠폰(가입, 등급, 특정 상품군) 엔진.
   * 특정 시간대 한정 수량 특가 타임세일(Flash Sale) 세션 운영.
   * 메인 디스플레이 추천 브랜드 및 전략 상품 진열 순서 제어.

4. **자율 상거래 에이전트 및 MCP 연동 (Commerce Agent & MCP)**:
   * `shop_batch_price_update` 기반 실시간 DB 다이내믹 프라이싱 및 스냅샷 원복.
   * `manage_product_catalog`, `manage_orders`를 통한 재고 및 주문 상태 자율 제어.
   * AgentScope Java 기반 에이전트 스웜 및 SyncVerse 중앙 관제탑과의 A2A 협업.

---

## 솔루션 구성 요약

| 영역 | 구성 요소 | 주요 기술 스택 | 설명 |
|:---|:---|:---|:---|
| **백엔드 서버** | `sync-shop-admin` | Java 25, Spring Boot 4.0, MyBatis | RESTful 커머스 API, 트랜잭션 및 보안(JWT, RBAC) |
| **에이전트 서버** | `sync-shop-mcp-server` | AgentScope Java, Spring Web, MCP SDK | A2A 도구 제공, 다이내믹 프라이싱, 비동기 관제 연동 |
| **관리자 UI** | `SyncShop Admin` | Vue 3, Vite, TypeScript, Ant Design Vue | 상거래 종합 운영 대시보드 및 백오피스 관제 화면 |
| **모바일/클라이언트** | `SyncShop App` | Vue / Uni-App | 옴니채널 모바일 커머스 프론트엔드 |

---

## 실제 구동 화면 및 핵심 워크플로우

### 1. 옴니채널 매출, 주문, 재고 및 에이전트 관제 대시보드
9대 분산 마이크로서비스의 실시간 매출, 주문 처리율, 가용 재고 및 다이내믹 프라이싱 에이전트 상태를 한눈에 관제합니다.

![SyncShop 옴니채널 상거래 통합 대시보드](/images/screenshots/sync-shop/screen_01.png)

### 2. 다계층 상품 카탈로그, 재고 잠금 및 다이내믹 프라이싱
계층형 카테고리·브랜드 자산과 옵션별 SKU 재고 잠금을 제어하며, 최소 마진율 가드레일 내에서 다이내믹 프라이싱을 실행합니다.

![SyncShop PMS 상품 카탈로그 및 다이내믹 프라이싱](/images/screenshots/sync-shop/screen_02.png)

### 3. 주문 전주기 라이프사이클 추적 및 클레임·정산 자동화
결제 대기부터 물류 발송, 배송 완료, 반품·환불 심사에 이르는 주문 전주기를 실시간 추적하고 이상 주문을 자동 감지합니다.

![SyncShop OMS 주문 및 물류 관제](/images/screenshots/sync-shop/screen_03.png)

### 4. 타임세일·타깃 쿠폰 프로모션 및 가격 스냅샷 1-Click 복원
시간대별 한정 수량 타임세일과 조건부 쿠폰 캠페인을 운영하고, 가격 일괄 조정 전후의 스냅샷을 비교하여 1-Click으로 즉시 원복합니다.

![SyncShop SMS 타임세일 및 프로모션 관리](/images/screenshots/sync-shop/screen_04.png)

---

## 주요 문서 바로가기

* [시스템 아키텍처 및 에이전트 스웜](/syncshop/architecture)
* [상품 및 주문 물류 운영](/syncshop/catalog-and-order)
* [프로모션, 쿠폰 및 기획전](/syncshop/promotion-and-marketing)
* [MCP 도구 및 A2A 오케스트레이션](/syncshop/mcp-and-agent)
* [자주 묻는 질문 (FAQ)](/syncshop/enterprise-faq)
