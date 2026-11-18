---
title: SyncWatch DB 스키마 및 REST/MCP API 명세
description: SyncWatch의 PostgreSQL 18.6 기반 6대 도메인 테이블(watch_*)과 /api/v1/watch/* 표준 REST API 및 MCP 도구 명세입니다.
sidebarTitle: DB 스키마 & API 명세
sort: 4
---

# SyncWatch DB 스키마 및 표준 REST/MCP API 명세

`SyncWatch`는 전사 6-File SSOT 데이터베이스 표준(`sync-watch/db/00_extensions.sql` ~ `05_sample_dev.sql`)과 `/api/v1/watch/*` 단일 URL 매핑 원칙을 준수합니다.

---

## 1. 6대 핵심 도메인 테이블 (`watch_*`)

`sync-watch/db/02_schema_domain.sql`에 정의된 6대 도메인 테이블은 외부 위협 수집부터 정규화, 듀얼 룰 컴파일, 샌드박스 검증, 전사 배포 이력까지 전 주기를 관리합니다.

| 순번 | 테이블명 | 역할 및 주요 컬럼 |
| :---: | :--- | :--- |
| **1** | **`watch_feed_source`** | **외부 보안 피드 출처 마스터**<br>• PK: `uuid` / UK: `provider_code`<br>• 주요 컬럼: `provider_name`, `site_url`, `feed_url`, `feed_format` (`REST_JSON`, `YAML_NUCLEI` 등), `source_channel`, `auth_type`, `sync_interval_min`, `auto_compile_rule`, `auto_broadcast`, `enabled`, `last_sync_time`, `last_sync_status`, `last_sync_count`, `total_ingested_count` |
| **2** | **`watch_security_advisory`** | **정규화된 보안 이슈 원장**<br>• PK: `advisory_id`<br>• 주요 컬럼: `source_channel`, `feed_provider`, `external_id` (CVE/GHSA/KISA 번호), `cwe_id`, `mitre_code`, `title`, `severity` (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`), `cvss_score`, `exploit_status`, `affected_ecosystem`, `affected_packages`, `vulnerable_version_range`, `patched_version`, `summary_text`, `raw_payload_json` (`jsonb`), `matched_asset_count`, `matched_repo_count`, `compile_status` |
| **3** | **`watch_verse_audit_rule`** | **SyncVerse 공급용 보안 점검 룰 (`VerseAuditPack`)**<br>• PK: `rule_id` / FK: `advisory_id`<br>• 주요 컬럼: `external_id`, `rule_title`, `severity`, `check_channel` (`SCA_DEPENDENCY`, `SAST_CODE`, `DAST_PENTEST`), `ecosystem`, `package_name`, `vulnerable_version_range`, `patched_version`, `sast_pattern_regex`, `dast_probe_method`, `dast_probe_path`, `dast_probe_payload`, `remediation_guide_md`, `target_agent_code`, `verified`, `dispatch_status` |
| **4** | **`watch_apim_defense_rule`** | **SyncAPIM 공급용 공격 패턴 룰 (`ApimDefensePack`)**<br>• PK: `rule_id` / FK: `advisory_id`<br>• 주요 컬럼: `external_id`, `rule_name`, `attack_category` (`SQLI`, `XSS`, `SSRF`, `RCE`, `PATH_TRAVERSAL`), `mitre_tactic`, `severity`, `target_locations` (`HEADER,URI,QUERY,BODY`), `target_method`, `target_path`, `detection_regex`, `defense_expression`, `grammar_fingerprint`, `positive_samples_json`, `negative_samples_json`, `sandbox_verified`, `tp_rate`, `fp_rate`, `dispatch_status` |
| **5** | **`watch_dispatch_history`** | **전사 배포 및 적용 피드백 원장**<br>• PK: `dispatch_id` / FK: `advisory_id`<br>• 주요 컬럼: `target_system` (`SYNC_VERSE`, `SYNC_APIM`), `rule_id`, `target_endpoint_url`, `dispatch_mode` (`PUSH_BROADCAST`, `PULL_SYNC`), `dispatch_status`, `response_summary`, `dispatched_by`, `dispatched_time`, `feedback_time` |
| **6** | **`watch_collection_job_log`** | **수집 배치 및 진단 문서 업로드 실행 로그**<br>• PK: `job_id`<br>• 주요 컬럼: `provider_code`, `job_type` (`FEED_SYNC`, `DOC_UPLOAD`, `RULE_COMPILE`), `fetched_count`, `new_advisory_count`, `compiled_verse_rules`, `compiled_apim_rules`, `duration_ms`, `status`, `log_detail`, `executed_time` |

---

## 2. 표준 REST API 명세 (`/api/v1/watch/*`)

| 도메인 분류 | HTTP Method & Canonical URL | 설명 |
| :--- | :--- | :--- |
| **관측 대시보드** | `GET /api/v1/watch/overview` | 수집 피드 가동 현황, 심각도별 보안 어드바이저리 통계, 듀얼 룰 컴파일·배포 지표 조회 |
| **피드 출처 관리** | `GET /api/v1/watch/feeds/list`<br>`GET /api/v1/watch/feeds/active`<br>`POST /api/v1/watch/feeds/add`<br>`PUT /api/v1/watch/feeds/edit`<br>`POST /api/v1/watch/feeds/test`<br>`POST /api/v1/watch/feeds/sync` | 글로벌 보안 피드 출처 목록 조회·등록, 5단계 SSRF 가드 기반 연결 진단 및 즉시 동기화 실행 |
| **보안 어드바이저리** | `GET /api/v1/watch/advisories/list`<br>`GET /api/v1/watch/advisories/detail`<br>`POST /api/v1/watch/advisories/register`<br>`POST /api/v1/watch/advisories/upload`<br>`POST /api/v1/watch/advisories/compile`<br>`POST /api/v1/watch/advisories/match-sbom` | 정규화된 보안 이슈 원장 검색, 보안 진단 문서·번들 업로드 파싱, 듀얼 룰 컴파일 및 전사 SBOM 의존성 교차 매칭 |
| **듀얼 룰 & 샌드박스** | `GET /api/v1/watch/verse-rules/list`<br>`PUT /api/v1/watch/verse-rules/edit`<br>`GET /api/v1/watch/apim-rules/list`<br>`PUT /api/v1/watch/apim-rules/edit`<br>`POST /api/v1/watch/apim-rules/verify-sandbox` | `VerseAuditPack` 점검 룰 및 `ApimDefensePack` 방어 룰 조회·편집, Positive/Negative 샘플 기반 샌드박스 검증 |
| **보안 팩 & 전사 배포** | `GET /api/v1/watch/packs/verse`<br>`GET /api/v1/watch/packs/apim`<br>`POST /api/v1/watch/dispatch/broadcast`<br>`POST /api/v1/watch/dispatch/feedback`<br>`GET /api/v1/watch/dispatches/list`<br>`GET /api/v1/watch/dispatches/jobs` | `SyncVerse` 및 `SyncAPIM`용 보안 팩 조회(Pull), 실시간 브로드캐스트 배포(Push), 적용 피드백 수신 및 작업 로그 조회 |
| **MCP 서버 & 메뉴 인가** | `GET /api/v1/watch/mcp/tools`<br>`POST /api/v1/watch/mcp`<br>`GET /api/v1/watch/sys/permission/getUserPermissionByToken` | JSON-RPC 2.0 MCP 도구 목록·실행 및 현재 인증 사용자의 역할(`role_admin`, `role_secops`) 동적 메뉴 트리 반환 |

---

## 3. MCP (Model Context Protocol) 노출 도구 명세 (`/api/v1/watch/mcp`)

`SyncWatch`는 타 에이전트(`SyncVerse`, `SyncAPIM`, `SyncInsight`)가 A2A 프로토콜로 위협 인텔리전스를 즉시 조회하거나 룰 컴파일·배포를 트리거할 수 있도록 표준 MCP 도구를 노출합니다.

| MCP 도구명 | 주요 파라미터 | 기능 설명 |
| :--- | :--- | :--- |
| **`watch_sync_security_feeds`** | `providerCode` (선택) | 외부 보안 피드(OSV, GHSA, NVD, CISA KEV, Nuclei, OWASP, MITRE, KISA) 동기화 및 정규화 실행 |
| **`watch_compile_dual_rules`** | `advisoryId` | 단일 보안 이슈로부터 `SyncVerse` 점검 룰(`VerseAuditPack`) 및 `SyncAPIM` 공격 패턴(`ApimDefensePack`)을 동시 컴파일하고 샌드박스 검증 실행 |
| **`watch_dispatch_to_verse_and_apim`** | `advisoryId`, `targetSystem` | 검증 완료된 보안 점검 룰 및 WAF 가상 패치 룰을 `SyncVerse`와 `SyncAPIM`으로 즉시 브로드캐스트 배포 |
| **`watch_match_enterprise_sbom`** | `ecosystem` (선택) | 전사 마이크로서비스 SBOM 패키지와 취약점 원장을 교차 매칭하여 영향 자산·리포지토리 산출 |
| **`delegate_intent`** | `intent`, `instruction` | A2A 자연어 보안 인텔리전스 수집·컴파일·전사 배포 위임 실행 |
