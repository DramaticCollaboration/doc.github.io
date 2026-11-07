---
title: "SyncAPIM 엔터프라이즈 도입 FAQ"
sidebarTitle: "도입 FAQ"
description: "SyncAPIM 도입 시 자주 묻는 질문(4-JVM 프로세스 분리 이유, OpenSearch 없는 PostgreSQL 18.6 단일 스토리지 성능, 기존 시스템 무중단 연동, 온프레미스 폐쇄망 지원)에 대한 답변입니다."
head:
  - - meta
    - name: keywords
      content: SyncAPIM FAQ, API 보안 도입, 4-JVM, PostgreSQL 18.6, 온프레미스 WAF, 섀도우 API
  - - meta
    - property: og:title
      content: "SyncAPIM 엔터프라이즈 도입 FAQ"
  - - meta
    - property: og:description
      content: "SyncAPIM 아키텍처, 성능 격리, 스토리지 단일화 및 기존 서비스 연동에 관한 자주 묻는 질문"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncapim/enterprise-faq
sort: 5
---

# SyncAPIM 엔터프라이즈 도입 FAQ

### Q1. 왜 단일 서버가 아닌 4개의 개별 JVM(`admin`, `receiver`, `detector`, `gateway`)으로 분리되어 있나요?
API 보안 관제 솔루션은 초당 수천 건 이상의 네트워크 패킷을 수신(`receiver`)하고, 다수의 정규식과 JSON 스키마 추론(`detector`)을 수행해야 합니다. 만약 패킷 수신·탐지 엔진과 관리자 UI 백엔드(`admin`) 또는 인라인 게이트웨이(`gateway`)가 동일한 JVM 힙과 CPU 스레드 풀을 공유하면, 대량 공격 트래픽 유입 시 관리 콘솔 응답이 멈추거나 게이트웨이 지연이 발생할 수 있습니다.
따라서 `SyncAPIM`은 **공통 도메인 모듈(`sync-apim-common`)은 공유하되 런타임 프로세스는 4개 JVM으로 분리**하여 각 구간의 성능을 독립적으로 보장하고 개별 스케일아웃(Scale-Out)이 가능하도록 설계되었습니다.

### Q2. 별도의 무거운 OpenSearch/Elasticsearch 클러스터 없이 대용량 패킷 로그 검색이 가능한가요?
네, 가능합니다. 기존 레거시 환경에서는 패킷 이벤트를 위해 별도의 OpenSearch 클러스터(최소 수 GB~수십 GB JVM 힙 필요)를 중복 운영해야 했으나, `SyncAPIM`은 **PostgreSQL 18.6의 `JSONB` 컬럼과 `pg_trgm` GIN 인덱스**를 결합한 `wapf_detect_event` 단일 테이블 구조를 채택했습니다. 이를 통해 공격 페이로드 부분 문자열 검색, 위협 코드 필터링, 시계열 집계를 단일 RDBMS 위에서 빠르게 처리하면서도 인프라 구축·유지보수 비용을 크게 절감합니다.

### Q3. 운영 중인 기존 레거시 WAS나 마이크로서비스를 수정하지 않고도 적용할 수 있나요?
네, 두 가지 무중단 방식을 모두 지원합니다:
1. **비침투 미러링 모드 (Out-of-Band)**: 보호 대상 서버의 네트워크 인터페이스에 경량 수집 에이전트(Packetbeat/Filebeat)를 설치하거나 앞단 로드밸런서에서 `sync-apim-receiver`(TCP `5044`/`5055` 또는 HTTP `18090`)로 트래픽을 미러링하면, 운영 서비스에 지연 영향(Latency Impact 0ms) 없이 섀도우 API 발견과 위협 탐지를 즉시 시작할 수 있습니다.
2. **인라인 차단 게이트웨이 모드 (In-Line)**: 고위험 엔드포인트의 실시간 차단(`403 Forbidden`)이 필요한 경우 `sync-apim-gateway`(`18091`)를 앞단에 배치하여 관리 콘솔에서 원클릭으로 차단 정책을 즉시 집행할 수 있습니다.

### Q4. 외부 인터넷이 완전히 차단된 폐쇄망(Air-Gapped) 환경에서도 AI 보안 분석이 동작하나요?
네, 동작합니다. `SyncAPIM`의 핵심 패킷 수집, OpenAPI 3.0.1 스펙 추론, Contract Drift 비교 감사, 6대 WAF 정규식/JWT 위협 탐지 및 8대 PII 마스킹 엔진은 외부 LLM 연결 없이도 **결정론적(Deterministic) 알고리즘으로 100% 자체 동작**합니다. 또한 위협 포렌식 요약 브리핑은 사내 구축형 `SyncLLM`(vLLM/Ollama 연동)을 통해 폐쇄망 내부에서 안전하게 생성됩니다.
