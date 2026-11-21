---
title: "SyncVerse & SyncAPIM Integration Protocol (VerseAuditPack & ApimDefensePack)"
description: "Standard protocol specification for SyncWatch to dispatch compiled VerseAuditPack and ApimDefensePack payloads to SyncVerse and SyncAPIM and collect enforcement feedback."
sidebarTitle: Verse & APIM Integration Protocol
sort: 3
---

# SyncVerse & SyncAPIM Security Pack Integration Protocol

`SyncWatch` packages security rules—compiled from **8 global threat feeds (OSV.dev, GitHub GHSA, NVD CVE, CISA KEV, Nuclei, OWASP CRS, MITRE ATT&CK, KISA)** and diagnostic documents and verified in its sandbox—into **`VerseAuditPack`** (for code, dependency, and penetration-test audits) and **`ApimDefensePack`** (for runtime gateway defense) standard payloads, dispatching them in real time to `SyncVerse` and `SyncAPIM`.

---

## 1. `VerseAuditPack` Integration Specification (`SyncWatch` → `SyncVerse`)

`SyncVerse` uses the received `VerseAuditPack` to run 3-channel security diagnostics—**SCA (Dependency Audit)**, **SAST (Static Code Audit)**, and **DAST (Dynamic Penetration Test Probes)**—across all managed enterprise Git repositories.

### 1.1 Receiving Endpoints and MCP Tools
* **SyncVerse Receiving REST API**: `POST /api/v1/verse/quality/security/audit-pack`
* **SyncWatch Dispatching REST API**: `POST /api/v1/watch/dispatches/broadcast` (`targetSystem: "SYNC_VERSE"`)

### 1.2 `VerseAuditPack` JSON Payload Example
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
      "remediationGuideMd": "Upgrade `commons-configuration2` in `pom.xml` to `2.10.1` or higher and disable dynamic script interpolation prefixes.",
      "targetAgentCode": "ALL_REPOS"
    }
  ]
}
```

---

## 2. `ApimDefensePack` Integration Specification (`SyncWatch` → `SyncAPIM`)

`SyncAPIM` immediately loads the received `ApimDefensePack` into its in-memory hot-swap registry and blocks zero-day attacks in real time without restarting applications, powered by **`SqlXssLexicalTokenizer`** (a lexical token fingerprint analyzer) and **`SandboxedDefenseEvaluator`** (a Restricted SpEL-based pinpoint virtual-patch evaluator).

### 2.1 Receiving Endpoints and MCP Tools
* **SyncAPIM Receiving REST API**: `POST /api/v1/apim/waf/defense-pack/apply`
* **SyncAPIM Receiving MCP Tool**: `apim_receive_watch_defense_pack`
* **SyncWatch Dispatching REST API**: `POST /api/v1/watch/dispatches/broadcast` (`targetSystem: "SYNC_APIM"`)

### 2.2 `ApimDefensePack` JSON Payload Example
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

## 3. How the Lexical Token Fingerprint Analyzer (`SqlXssLexicalTokenizer`) Combines with Pinpoint Virtual Patching

Instead of conventional floating-point hash or pseudo-vector approaches, `SyncAPIM` operates by combining the deterministic lexical token analyzer **`SqlXssLexicalTokenizer`** with **`SandboxedDefenseEvaluator`**:

1. **Multi-Layer Decoding (3-Round Multi-Layer Decoding)**:
   - Iteratively normalizes obfuscation techniques used by attackers to evade inspection—such as double/triple URL encoding (`%2527`), HTML entities (`&#x3c;`), Unicode escapes (`\u003c`), and SQL inline comments (`/*!50000UNION*/`)—for up to 3 rounds.
2. **Grammar Token Fingerprint Extraction (`SqlXssLexicalTokenizer`)**:
   - Converts the input string into lexical tokens (`s` string, `1` number, `&` logical operator, `U` UNION, `E` SELECT, `;` statement terminator, `k` dangerous keyword, `f(n)` function call, `x_script` script tag, `x_event_handler` event handler, etc.) to generate a structural attack fingerprint (`grammarFingerprint`) within `0.05ms`.
3. **Pinpoint Virtual Patching (`SandboxedDefenseEvaluator`)**:
   - Only when the target path (`target_path`), HTTP method (`target_method`), and inspection location (`target_locations`) of an `ApimDefensePack` rule dispatched by `SyncWatch` match the request, evaluates the defense expression inside an isolated `SimpleEvaluationContext` (with type references, reflection, and runtime command execution pre-blocked).
4. **Real-Time Kernel eBPF Blocking**:
   - Packets classified as threats are immediately blocked with `403 Forbidden` at the L7 gateway, while repeat attacker IPs are registered in the kernel eBPF (XDP/TC) blacklist map for ultra-low-latency packet drops at the network interface level.
