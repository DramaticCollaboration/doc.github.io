---
title: SyncVerse & SyncAPIM 연동 프로토콜 (VerseAuditPack & ApimDefensePack)
description: SyncWatch가 컴파일한 VerseAuditPack과 ApimDefensePack을 SyncVerse 및 SyncAPIM에 배포하고 적용 피드백을 수집하는 표준 프로토콜 명세입니다.
sidebarTitle: Verse & APIM 연동 프로토콜
sort: 3
---

# SyncVerse & SyncAPIM 보안 팩 연동 프로토콜

`SyncWatch`는 컴파일 및 샌드박스 검증이 완료된 보안 룰을 **`VerseAuditPack`**(코드·의존성·모의해킹 점검용)과 **`ApimDefensePack`**(런타임 게이트웨이 방어용) 표준 페이로드로 패키징하여 `SyncVerse` 및 `SyncAPIM`으로 실시간 배포합니다.

---

## 1. `VerseAuditPack` 연동 규격 (`SyncWatch` → `SyncVerse`)

`SyncVerse`는 수신한 `VerseAuditPack`을 사용하여 관리 중인 전사 Git 저장소에 대해 **SCA(의존성 감사)**, **SAST(정적 코드 감사)**, **DAST(동적 모의해킹 프로브)** 3채널 보안 진단을 수행합니다.

### 1.1 수신 엔드포인트 및 MCP 도구
* **SyncVerse 수신 REST API**: `POST /api/v1/verse/quality/security/audit-pack`
* **SyncWatch 발신 REST API**: `POST /api/v1/watch/dispatches/broadcast` (`targetSystem: "SYNC_VERSE"`)

### 1.2 `VerseAuditPack` JSON 페이로드 예시
```json
{
  "packId": "vap-20261118-001",
  "advisoryId": "adv-cve-2026-41892",
  "externalId": "CVE-2026-41892",
  "severity": "CRITICAL",
  "cvssScore": 9.8,
  "rules": [
    {
      "ruleId": "vrule-sca-001",
      "checkChannel": "SCA_DEPENDENCY",
      "ecosystem": "MAVEN",
      "packageName": "org.apache.commons:commons-configuration2",
      "vulnerableVersionRange": "[2.0, 2.10.1)",
      "patchedVersion": "2.10.1",
      "sastPatternRegex": "InterpolatorSpecification\\.builder\\(\\)|ConfigurationInterpolator\\.fromSpecification",
      "dastProbeMethod": "POST",
      "dastProbePath": "/api/v1/*/config/preview",
      "dastProbePayload": "{\"expr\":\"${script:javascript:java.lang.Runtime.getRuntime()}\"}",
      "remediationGuideMd": "`pom.xml`의 `commons-configuration2` 버전을 `2.10.1` 이상으로 상향하고 동적 스크립트 보간(Interpolation) 접두사를 비활성화하십시오.",
      "targetAgentCode": "ALL_REPOS"
    }
  ]
}
```

---

## 2. `ApimDefensePack` 연동 규격 (`SyncWatch` → `SyncAPIM`)

`SyncAPIM`은 수신한 `ApimDefensePack`을 인메모리 핫스왑 레지스트리에 즉시 적재하고, **`SqlXssLexicalTokenizer`**(구문 토큰 지문 분석기) 및 **`SandboxedDefenseEvaluator`**(Restricted SpEL 기반 핀셋 가상 패치 평가기)를 통해 애플리케이션 재시작 없이 제로데이 공격을 실시간 차단합니다.

### 2.1 수신 엔드포인트 및 MCP 도구
* **SyncAPIM 수신 REST API**: `POST /api/v1/apim/waf/defense-pack/apply`
* **SyncAPIM 수신 MCP 도구**: `apim_receive_watch_defense_pack`
* **SyncWatch 발신 REST API**: `POST /api/v1/watch/dispatches/broadcast` (`targetSystem: "SYNC_APIM"`)

### 2.2 `ApimDefensePack` JSON 페이로드 예시
```json
{
  "packId": "adp-20261118-001",
  "advisoryId": "adv-cve-2026-41892",
  "externalId": "CVE-2026-41892",
  "severity": "CRITICAL",
  "rules": [
    {
      "ruleId": "arule-sqli-union-001",
      "ruleName": "SQLi Union-Select & Tautology Lexical Defense",
      "attackCategory": "SQLI",
      "mitreTactic": "T1190",
      "targetLocations": "URI,QUERY,BODY",
      "targetMethod": "ANY",
      "targetPath": "/api/v1/*",
      "grammarFingerprint": "sUE|s&1|;k",
      "detectionRegex": "(?i)(\\bunion\\b\\s+\\bselect\\b|\\bor\\b\\s+['\"]?\\d+['\"]?\\s*=\\s*['\"]?\\d+)",
      "defenseExpression": "hasFingerprint('sUE') or hasFingerprint('s&1') or matchesRegex(payload, '(?i)union\\s+select')",
      "sandboxVerified": true,
      "tpRate": 100.0,
      "fpRate": 0.0
    }
  ]
}
```

---

## 3. 구문 토큰 지문 분석기(`SqlXssLexicalTokenizer`)와 핀셋 가상 패치 결합 원리

`SyncAPIM`은 기존의 부동소수점 해시/의사 벡터 방식 대신, 결정론적 어휘 토큰 분석기인 **`SqlXssLexicalTokenizer`**와 **`SandboxedDefenseEvaluator`**를 결합하여 동작합니다.

1. **다중 인코딩 해제 (3-Round Multi-Layer Decoding)**:
   - 공격자가 우회를 위해 적용한 이중·삼중 URL 인코딩(`%2527`), HTML 엔티티(`&#x3c;`), 유니코드 이스케이프(`\u003c`), SQL 인라인 주석(`/*!50000UNION*/`)을 최대 3라운드까지 반복 정규화합니다.
2. **구문 토큰 지문 추출 (`SqlXssLexicalTokenizer`)**:
   - 입력 문자열을 어휘 토큰(`s` 문자열, `1` 숫자, `&` 논리 연산자, `U` UNION, `E` SELECT, `;` 구문 종료, `k` 위험 키워드, `f(n)` 함수 호출, `x_script` 스크립트 태그, `x_event_handler` 이벤트 핸들러 등)으로 변환하여 `0.05ms` 이내에 구조적 공격 지문(`grammarFingerprint`)을 생성합니다.
3. **핀셋 가상 패치 (`SandboxedDefenseEvaluator`)**:
   - `SyncWatch`가 배포한 `ApimDefensePack`의 타깃 경로(`target_path`), HTTP 메소드(`target_method`), 검사 위치(`target_locations`)가 일치할 때만 격리된 `SimpleEvaluationContext`(타입 참조·리플렉션·런타임 명령 실행 원천 차단)에서 방어 표현식을 평가합니다.
4. **커널 eBPF 실시간 차단**:
   - 위협으로 판정된 패킷은 L7 게이트웨이에서 즉시 `403 Forbidden`으로 차단됨과 동시에, 반복 공격원 IP는 커널 eBPF(XDP/TC) 블랙리스트 맵에 등록되어 네트워크 인터페이스 수준에서 초저지연 드롭됩니다.
