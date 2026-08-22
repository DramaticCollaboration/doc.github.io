---
title: 엔터프라이즈 운영 및 기술 FAQ | SyncCMS
description: SyncCMS 도입 시 자주 묻는 기술 질문(소스코드 제공 범위, 라이선스, 인프라 사양, PostgreSQL 인덱싱)과 기술 지원 채널을 안내합니다.
head:
  - - meta
    - name: keywords
      content: SyncCMS FAQ, 엔터프라이즈 CMS, 소스코드 공개, 인프라 사양, PostgreSQL GIN 인덱스, 전자결재 연동, 도입 문의
  - - meta
    - property: og:title
      content: 엔터프라이즈 운영 및 기술 FAQ | SyncCMS
  - - meta
    - property: og:description
      content: SyncCMS 라이선스, 소스코드 공개 범위, 인프라 권장 사양 및 PostgreSQL 성능 튜닝 가이드
sort: 7
---

# 엔터프라이즈 운영 및 기술 FAQ

SyncCMS 도입 및 운영을 검토 중인 엔지니어링 및 인프라 담당자를 위한 기술 Q&A와 시스템 권장 사양입니다.

---

## 자주 묻는 질문 (FAQ)

### Q1. 비즈니스 소스코드는 어떤 범위까지 제공되나요?
**A. Spring Boot 3 코어 애플리케이션 소스와 RDBMS DDL 전체가 투명하게 제공됩니다.**  
SyncCMS는 바이너리 납품 방식의 블랙박스 소프트웨어가 아닙니다. 코어 Controller, Service 로직 및 관리자 UI(Vue 3), 사용자 웹(Nuxt 3) 전체 소스코드가 제공되므로, 고객사 개발팀이 사내 보안 규정이나 비즈니스 요구에 맞추어 직접 기능을 수정하고 영구적인 디지털 자산으로 내재화할 수 있습니다.

### Q2. 트래픽이나 콘텐츠 수가 증가하면 추가 라이선스 비용이 발생하나요?
**A. 추가 라이선스 비용이 발생하지 않습니다.**  
외산 SaaS형 CMS(Contentful, Sanity 등)와 달리 API 호출량, 관리자 계정 수, 트래픽에 비례한 종량제 과금이 없습니다. 온프레미스 또는 프라이빗 클라우드에 1회 구축 후 영구적으로 운영할 수 있습니다.

### Q3. 외부 인터넷이 완전 차단된 사내 폐쇄망에서도 AI 기능을 사용할 수 있나요?
**A. 사내 온프레미스 인프라를 통해 완전하게 지원됩니다.**  
사내 GPU 서버에 vLLM 또는 Ollama를 구성하고 오픈 가중치 모델(Llama-3, EXAONE, Solar 등)을 배포한 후, LangChain4j를 통해 백엔드와 연동합니다. 외부 네트워크로의 데이터 유출 없이 AI 초안 생성, PII 비식별화, RAG 지식 검색을 수행할 수 있습니다.

### Q4. 기존 사내 그룹웨어 전자결재 및 기간계 ERP와 어떻게 연동하나요?
**A. 표준 웹훅(Webhook) 및 다중 DB 트랜잭션을 통해 연계됩니다.**  
콘텐츠 배포 전 사내 그룹웨어 API를 호출하여 기안을 생성하고, 최종 승인 웹훅을 수신할 때 RDBMS 커밋, ERP 프로모션 마스터 동기화, 분산 캐시 무효화가 순차적으로 실행됩니다.

---

## 시스템 권장 인프라 사양

| 구성 요소 | 최소 사양 (개발/테스트) | 권장 사양 (운영 환경 1,000+ RPS) |
| :--- | :--- | :--- |
| **API 서버 (Spring Boot)** | 2 Core CPU, 4GB RAM | 4 Core CPU, 8GB RAM (2대 이상 로드밸런싱) |
| **JVM 옵션** | `-Xms2g -Xmx2g` | `-Xms4g -Xmx4g -XX:+UseG1GC` |
| **데이터베이스 (PostgreSQL)** | 2 Core CPU, 4GB RAM | 8 Core CPU, 16GB RAM, SSD 스토리지 |
| **캐시 서버 (Redis)** | 1 Core CPU, 2GB RAM | 2 Core CPU, 4GB RAM (Sentinel 또는 Cluster) |
| **사내 AI 서버 (선택)** | CPU Only (양자화 모델) | NVIDIA A10G / L40S GPU (vLLM 구동) |
| **지원 데이터베이스** | PostgreSQL 14+, Oracle 19c+, MySQL 8.0+ | PostgreSQL 15+ (JSONB 및 GIN 인덱스 권장) |

---

## PostgreSQL JSONB 인덱싱 튜닝 가이드

SyncCMS는 유연한 UI 블록 및 폼 스키마 저장을 위해 PostgreSQL의 `JSONB` 타입을 사용합니다. 고속 조회를 위해 GIN 인덱스를 설정합니다:

```sql
-- UI 블록 데이터 조회를 위한 GIN 인덱스 생성
CREATE INDEX idx_cms_content_fields_gin 
ON tb_cms_content USING gin (fields jsonb_path_ops);

-- 특정 필드(예: headline) 조건 검색 속도 최적화
CREATE INDEX idx_cms_content_headline 
ON tb_cms_content ((fields->>'headline'));
```

---

## 기술 지원 및 도입 상담

SyncCMS에 대한 상세 기술 검토, PoC 지원, 아키텍처 컨설팅이 필요한 경우 아래 채널로 문의해 주시기 바랍니다.

- **기술 및 도입 문의**: `poh@empasy.com`
- **유선 문의**: `0507-1360-8169`
- **운영사**: (주)엠파시 솔루션개발팀 | Empasy SyncSeries
