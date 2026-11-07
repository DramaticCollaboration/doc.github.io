---
title: "SyncAPIM WAF 위협 탐지, 스펙 드리프트 감사 및 PII 마스킹 거버넌스"
sidebarTitle: "WAF 위협 탐지 & PII 마스킹"
description: "SyncAPIM의 미등록 섀도우 API 자동 발견, OpenAPI 3.0.1 Contract Drift 비교 감사, 6대 웹·API 공격 탐지 룰 및 8대 민감정보 실시간 마스킹 체계를 설명합니다."
head:
  - - meta
    - name: keywords
      content: SyncAPIM WAF, 섀도우 API, OpenAPI Contract Drift, SQL Injection, XSS, SSRF, RCE, JWT 검증, 개인정보 마스킹
  - - meta
    - property: og:title
      content: "SyncAPIM WAF 위협 탐지, 스펙 드리프트 감사 및 PII 마스킹 거버넌스"
  - - meta
    - property: og:description
      content: "실시간 트래픽 기반 OpenAPI 3.0.1 명세 자동 추론, Contract Drift 감사 및 6대 공격·8대 민감정보 보호 체계"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/syncapim/waf-and-pii-governance
sort: 3
---

# SyncAPIM WAF 위협 탐지, 스펙 드리프트 감사 및 PII 마스킹 거버넌스

`SyncAPIM`은 단순 시그니처 방화벽을 넘어 **API 인벤토리 가시성 확보(Shadow API Discovery)**, **설계 명세 대비 실트래픽 정합성 검증(Contract Drift Audit)**, **실시간 웹·API 공격 차단(WAF)**, **개인·금융 민감정보 유출 방지(PII Masking)**의 4단계 보안 거버넌스를 단일 파이프라인으로 제공합니다.

---

## 1. 미등록 섀도우 API 자동 발견 및 OpenAPI 3.0.1 추론

1. **실트래픽 기반 엔드포인트 카탈로그 자동 생성**:
   - `sync-apim-detector`의 `DetectionRuleServiceImpl`은 수신된 HTTP 패킷의 `host`, `method`, `path` 조합을 분석하여 미등록 엔드포인트를 `wapf_api_endpoint` 및 `wapf_api_endpoint_detail`에 자동 등록합니다.
   - 요청 쿼리스트링, 요청 본문(JSON), 응답 본문(JSON)의 모든 필드를 재귀적으로 파싱하여 `wapf_data_field`에 데이터 타입과 JSONPath(`$.data.accountNo` 등)를 기록합니다.
2. **OpenAPI 3.0.1 명세 실시간 합성 및 Contract Drift 비교 감사**:
   - 관찰된 입출력 필드를 바탕으로 표준 OpenAPI 3.0.1 JSON 명세(`wapf_open_api_spec`)를 자동 합성합니다.
   - `POST /api/v1/apim/spec/audit` (`WapfOpenApiSpecServiceImpl.auditContractDrift`) 호출 시 설계 스펙(`designSpec`)과 실트래픽 스펙을 비교하여 다음 3가지 드리프트를 판별합니다:
     - **`UNDOCUMENTED_RESPONSE_FIELD`**: 설계 명세에 정의되지 않은 내부 필드나 민감 필드가 실제 API 응답으로 노출된 경우
     - **`MISSING_REQUIRED_PARAM`**: 설계상 필수인 요청 파라미터가 누락된 채 호출되는 경우
     - **`SHADOW_ENDPOINT`**: 승인된 API 명세서에 존재하지 않는 미등록 디버그·레거시 엔드포인트가 호출되는 경우

---

## 2. 6대 표준 웹·API 위협 탐지 룰 (`wapf_rule`)

`db/04_seed_domain.sql`에 기본 탑재된 6대 핵심 위협 탐지 룰은 요청 URL, 헤더, 쿼리, 바디 전체를 대상으로 실시간 정규식 매칭 및 JWT 구조 검증을 수행합니다.

| 룰 ID | 위협 탐지 룰 명칭 | 심각도 | 주요 탐지 패턴 및 방어 대상 |
| :--- | :--- | :---: | :--- |
| `rule_apim_001` | **SQL 인젝션 공격 탐지** | `4` (Critical) | `UNION SELECT`, `OR 1=1`, `DROP TABLE`, `SLEEP()`, `WAITFOR DELAY` 등 DB 조작 구문 |
| `rule_apim_002` | **크로스 사이트 스크립팅 탐지** | `3` (High) | `<script>`, `javascript:`, `onerror=`, `onload=` 등 악성 스크립트 삽입 |
| `rule_apim_003` | **서버 사이드 요청 위조 탐지** | `4` (Critical) | `169.254.169.254`(클라우드 메타데이터), `localhost`, `127.0.0.1`, `file://`, `gopher://` 내부망 탐색 |
| `rule_apim_004` | **원격 명령어 실행 공격 탐지** | `4` (Critical) | `; cat /etc/passwd`, `\| bash`, `` `whoami` ``, `cmd.exe`, `powershell` 등 OS 명령어 주입 |
| `rule_apim_005` | **디렉터리 트래버설 탐지** | `3` (High) | `../`, `..\\`, `/etc/passwd`, `win.ini`, URL 인코딩된 상위 경로 우회 접근 |
| `rule_apim_006` | **JWT 토큰 무결성 및 서명 검증** | `4` (Critical) | `alg: "none"` 서명 우회 공격, 만료 토큰(`exp` 도과), 비정상 페이로드 구조 변조 |

---

## 3. 7대 보안 정책 그룹 (`wapf_policy`) 및 실시간 Redis 캐시 동기화

관리 콘솔(`/waf/policy`)에서 보안 정책이나 룰 매핑을 변경하면 `WapfPolicyServiceImpl.syncPolicyRuleCache()`가 즉시 실행되어 Redis(`wapf:policy:rules`)를 갱신하며, `sync-apim-detector`를 재시작하지 않아도 실시간 탐지 파이프라인에 즉시 반영됩니다.

- **`pol_apim_001` (인증 보안 정책)**: 기본(`basic=true`) 글로벌 보호 정책
- **`pol_apim_002` (접근 제어 정책)**: 관리자 및 내부 정산 API 접근 통제
- **`pol_apim_003` (데이터 암호화 정책)**: 금융·결제 구간 전송 데이터 보호
- **`pol_apim_004` (권한 인가 정책)**: BOLA/IDOR 객체 수준 권한 검증
- **`pol_apim_005` (네트워크 보안 정책)**: 외부 콜백 및 웹훅 SSRF 방어
- **`pol_apim_006` (개인정보 보호 정책)**: 고객 마이데이터 조회 API 집중 감시
- **`pol_apim_007` (침입 탐지 정책)**: 고위험 RCE·SQLi 페이로드 즉시 차단

---

## 4. 8대 개인·금융 민감정보(PII) 실시간 마스킹 (`wapf_sensitivity`)

API 요청 및 응답에 포함된 개인정보가 로그나 외부 응답으로 평문 노출되지 않도록 8대 민감정보 정규식을 실시간 스캔하여 마스킹(`***`) 처리하고, 해당 필드를 `wapf_data_field.sensitivity_uuid`에 자동 태깅합니다.

| 식별자 | 민감정보 항목 | 심각도 | 탐지 대상 포맷 요약 |
| :--- | :--- | :---: | :--- |
| `sens_apim_001` | **계좌번호** | `3` (High) | 시중은행 계좌번호 포맷 (`\d{3,4}-\d{2,6}-\d{4,6}`) |
| `sens_apim_002` | **이메일** | `2` (Medium) | 표준 이메일 주소 포맷 |
| `sens_apim_003` | **카드번호** | `4` (Critical) | 16자리 신용·체크카드 번호 (`\d{4}-\d{4}-\d{4}-\d{4}`) |
| `sens_apim_004` | **주민등록번호** | `4` (Critical) | 13자리 주민등록번호 및 외국인등록번호 (`\d{6}-[1-4]\d{6}`) |
| `sens_apim_005` | **이름** | `2` (Medium) | JSON 필드 내 성명 식별 패턴 |
| `sens_apim_006` | **비밀번호** | `4` (Critical) | `password`, `passwd`, `pwd`, `secret` 키-값 평문 노출 |
| `sens_apim_007` | **IP 주소** | `2` (Medium) | 내부망 및 클라이언트 IPv4 주소 포맷 |
| `sens_apim_008` | **전화번호** | `3` (High) | 휴대전화 및 일반 전화번호 (`01[016789]-\d{3,4}-\d{4}`) |
