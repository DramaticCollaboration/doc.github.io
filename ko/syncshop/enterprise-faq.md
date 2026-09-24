---
title: "SyncShop: 엔터프라이즈 자주 묻는 질문 (FAQ)"
sidebarTitle: "자주 묻는 질문"
description: "SyncShop의 Headless 연동, ERP/WMS 통합, 다이내믹 프라이싱 마진 보호 및 대규모 트래픽 오버셀 방지 관련 FAQ"
head:
  - - meta
    - name: keywords
      content: SyncShop, FAQ, ERP 연동, WMS, 역마진 방지, 오버셀, Headless Commerce, 엔터프라이즈
sort: 6
---

# 엔터프라이즈 자주 묻는 질문 (FAQ)

SyncShop 도입 및 운영 시 가장 많이 문의되는 기술 질문과 답변입니다.

---

### Q1. 기존 사내 ERP 또는 WMS(물류창고관리) 시스템과 어떻게 연동하나요?
**A:** SyncShop은 완전한 Headless API 기반 아키텍처로 구축되어 있습니다.
* 표준 RESTful API 및 웹훅(Webhook)을 통해 SAP, 더존 등 기간계 ERP와 상품 마스터, 단가, 실재고 정보를 실시간 양방향 동기화할 수 있습니다.
* 물류 출고 및 운송장 번호 연동은 `sync-shop-admin`의 배치 스케줄러 또는 `manage_orders` MCP 도구를 통해 자동화됩니다.

---

### Q2. 다이내믹 프라이싱으로 가격을 일괄 변경할 때 역마진이 발생할 위험은 없나요?
**A:** 다이내믹 프라이싱 실행 시 내부 **Margin Safeguard Agent**가 1차 방어선 역할을 수행합니다.
* 상품별 마스터에 등록된 매입 원가(Cost Price)와 카테고리별 최소 보장 마진율(예: 15%)을 기준으로 실시간 시뮬레이션을 수행합니다.
* 단 1건이라도 원가 이하 판매 또는 마진율 위반이 발견되면 트랜잭션 실행이 즉시 차단되고 경고 리포트가 관제탑으로 전송됩니다.
* 작업 직전 원본 스냅샷이 자동 생성되므로 이상 발생 시 1초 이내에 직전 가격으로 원복(Rollback)할 수 있습니다.

---

### Q3. 타임세일이나 대규모 기획전 시 동시 접속으로 인한 초과 판매(Overselling)를 어떻게 방지하나요?
**A:** Redis 분산 락 및 원자적(Atomic) 연산을 결합한 2단계 재고 점유 구조를 채택하고 있습니다.
* 고객이 주문서 생성 단계에 진입하는 순간 Redis의 원자적 `DECR` 연산으로 가용 재고를 선점(Lock)합니다.
* 결제가 최종 완료되면 RDBMS의 영속 재고를 차감하며, 지정된 결제 제한 시간(기본 15분) 내 미결제 시 선점 재고가 자동 반환됩니다.
* 이를 통해 수만 명의 동시 결제 요청 상황에서도 물리적 재고를 초과하는 결제 사고를 방지합니다.

---

### Q4. 온프레미스(폐쇄망) 환경에서도 배포가 가능한가요?
**A:** 가능합니다.
* SyncShop의 백엔드(`sync-shop-admin`), 에이전트 서버(`sync-shop-mcp-server`), 프론트엔드(`SyncShop Admin`)는 완전한 독립 컨테이너(Docker Compose / K8s Helm) 형태로 제공됩니다.
* 외부 클라우드 의존성 없이 사내 MariaDB/MySQL 및 사내 LLM 게이트웨이(SyncLLM)와 결합하여 폐쇄망에서도 자율 상거래 기능을 수행할 수 있습니다.
