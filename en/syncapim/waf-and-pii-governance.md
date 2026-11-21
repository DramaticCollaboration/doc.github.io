---
title: "SyncAPIM WAF Threat Detection, Spec Drift Audit, and PII Masking Governance"
sidebarTitle: "WAF Threat Detection & PII Masking"
description: "Explains SyncAPIM's automatic discovery of unregistered shadow APIs, OpenAPI 3.0.1 Contract Drift comparison audits, 6 web and API attack detection rules, and real-time masking system for 8 sensitive PII categories."
head:
  - - meta
    - name: keywords
      content: SyncAPIM WAF, Shadow API, OpenAPI Contract Drift, SQL Injection, XSS, SSRF, RCE, JWT Verification, PII Masking
  - - meta
    - property: og:title
      content: "SyncAPIM WAF Threat Detection, Spec Drift Audit, and PII Masking Governance"
  - - meta
    - property: og:description
      content: "Real-time traffic-based OpenAPI 3.0.1 spec inference, Contract Drift auditing, and protection system against 6 attack types and 8 PII categories"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/syncapim/waf-and-pii-governance
sort: 3
---

# SyncAPIM WAF Threat Detection, Spec Drift Audit, and PII Masking Governance

Going beyond simple signature-based firewalls, `SyncAPIM` provides a unified pipeline combining a **lexical token fingerprint analyzer (`SqlXssLexicalTokenizer`)**, **real-time attack pattern detection and surgical virtual patching integrated with `SyncWatch` (`SandboxedDefenseEvaluator`)**, **kernel eBPF blocking**, **API inventory visibility (Shadow API Discovery)**, **live-traffic consistency verification against design specifications (Contract Drift Audit)**, and **personal and financial sensitive data leak prevention (PII Masking)**.

---

## 0. Lexical Token Fingerprint Analyzer (`SqlXssLexicalTokenizer`) + `SyncWatch` Surgical Virtual Patching + Kernel eBPF Blocking

1. **Lexical Token Fingerprint Analyzer (`SqlXssLexicalTokenizer`)**:
   - Completely eliminates inaccurate hash-based pseudo-vector approaches and deterministically extracts lexical token sequence fingerprints (`s&1`, `sUE`, `;k`, `f(n)`, `x_script`, `x_event_handler`, etc.) within `0.05ms` after 3-stage multi-decoding (URL, HTML entity, Unicode escape, and SQL inline comment stripping) to detect variant SQLi and XSS evasion attacks.
2. **Real-Time Attack Pattern Detection and Surgical Virtual Patching Integrated with `SyncWatch` (`ApimDefensePack` & `SandboxedDefenseEvaluator`)**:
   - Receives in real time the **`ApimDefensePack`** compiled and verified by the enterprise security observatory [`SyncWatch`](/en/syncwatch/) from global threat feeds (NVD CVE, CISA KEV, OSV.dev, GitHub GHSA, Nuclei, OWASP CRS, KISA).
   - `SandboxedDefenseEvaluator` (an isolated evaluator built on `SimpleEvaluationContext`) evaluates lexical token fingerprints, target-location regexes (`HEADER`, `URI`, `QUERY`, `BODY`), and Restricted SpEL expressions together to apply surgical virtual patches to specific endpoints immediately without restarting servers.
3. **Kernel eBPF Ultra-Low-Latency Blocking**:
   - Source IPs and anomalous packets confirmed as high-risk intrusion attempts are dropped immediately at the kernel eBPF (XDP/TC) layer in parallel with L7 gateway blocking, proactively preventing backend resource exhaustion.

---

## 1. Automatic Discovery of Unregistered Shadow APIs and OpenAPI 3.0.1 Inference

1. **Automatic Live-Traffic-Based Endpoint Catalog Generation**:
   - `DetectionRuleServiceImpl` in `sync-apim-detector` analyzes the `host`, `method`, and `path` combinations of ingested HTTP packets and automatically registers unregistered endpoints into `wapf_api_endpoint` and `wapf_api_endpoint_detail`.
   - It recursively parses every field in request query strings, request bodies (JSON), and response bodies (JSON) to record data types and JSONPath expressions (such as `$.data.accountNo`) in `wapf_data_field`.
2. **Real-Time OpenAPI 3.0.1 Spec Synthesis and Contract Drift Comparison Audit**:
   - Automatically synthesizes a standard OpenAPI 3.0.1 JSON specification (`wapf_open_api_spec`) based on observed input and output fields.
   - When `POST /api/v1/apim/spec/audit` (`WapfOpenApiSpecServiceImpl.auditContractDrift`) is invoked, it compares the design specification (`designSpec`) against the live-traffic specification to identify the following three drift types:
     - **`UNDOCUMENTED_RESPONSE_FIELD`**: Internal or sensitive fields not defined in the design specification are exposed in actual API responses
     - **`MISSING_REQUIRED_PARAM`**: Requests are invoked with parameters marked as required in the design specification omitted
     - **`SHADOW_ENDPOINT`**: Unregistered debug or legacy endpoints that do not exist in the approved API specification are invoked

---

## 2. 6 Standard Web and API Threat Detection Rules (`wapf_rule`)

Preloaded in `db/04_seed_domain.sql`, the 6 core threat detection rules perform real-time regular expression matching and JWT structure validation across the entire request URL, headers, query, and body.

| Rule ID | Threat Detection Rule Name | Severity | Key Detection Patterns and Protection Targets |
| :--- | :--- | :---: | :--- |
| `rule_apim_001` | **SQL Injection Attack Detection** | `4` (Critical) | Database manipulation syntax such as `UNION SELECT`, `OR 1=1`, `DROP TABLE`, `SLEEP()`, `WAITFOR DELAY` |
| `rule_apim_002` | **Cross-Site Scripting Detection** | `3` (High) | Malicious script injection such as `<script>`, `javascript:`, `onerror=`, `onload=` |
| `rule_apim_003` | **Server-Side Request Forgery Detection** | `4` (Critical) | Internal network probing such as `169.254.169.254` (cloud metadata), `localhost`, `127.0.0.1`, `file://`, `gopher://` |
| `rule_apim_004` | **Remote Command Execution Attack Detection** | `4` (Critical) | OS command injection such as `; cat /etc/passwd`, `\| bash`, `` `whoami` ``, `cmd.exe`, `powershell` |
| `rule_apim_005` | **Directory Traversal Detection** | `3` (High) | Parent path bypass access such as `../`, `..\\`, `/etc/passwd`, `win.ini`, and URL-encoded variants |
| `rule_apim_006` | **JWT Token Integrity and Signature Verification** | `4` (Critical) | `alg: "none"` signature bypass attacks, expired tokens (`exp` exceeded), and malformed payload structure tampering |

---

## 3. 7 Security Policy Groups (`wapf_policy`) and Real-Time Redis Cache Synchronization

When security policies or rule mappings are modified in the admin console (`/waf/policy`), `WapfPolicyServiceImpl.syncPolicyRuleCache()` executes immediately to refresh Redis (`wapf:policy:rules`), taking effect in the real-time detection pipeline without restarting `sync-apim-detector`.

- **`pol_apim_001` (Authentication Security Policy)**: Default (`basic=true`) global protection policy
- **`pol_apim_002` (Access Control Policy)**: Access control for administrator and internal settlement APIs
- **`pol_apim_003` (Data Encryption Policy)**: Protection for data in transit across financial and payment segments
- **`pol_apim_004` (Authorization Policy)**: BOLA/IDOR object-level authorization verification
- **`pol_apim_005` (Network Security Policy)**: SSRF defense for external callbacks and webhooks
- **`pol_apim_006` (Privacy Protection Policy)**: Intensive monitoring of customer MyData query APIs
- **`pol_apim_007` (Intrusion Detection Policy)**: Immediate blocking of high-risk RCE and SQLi payloads

---

## 4. Real-Time Masking for 8 Personal and Financial PII Categories (`wapf_sensitivity`)

To prevent personal data in API requests and responses from being exposed in plaintext in logs or external responses, 8 PII regular expressions are scanned in real time, masked (`***`), and automatically tagged on the corresponding field in `wapf_data_field.sensitivity_uuid`.

| Identifier | Sensitive Data Item | Severity | Target Format Summary |
| :--- | :--- | :---: | :--- |
| `sens_apim_001` | **Bank Account Number** | `3` (High) | Commercial bank account number format (`\d{3,4}-\d{2,6}-\d{4,6}`) |
| `sens_apim_002` | **Email** | `2` (Medium) | Standard email address format |
| `sens_apim_003` | **Card Number** | `4` (Critical) | 16-digit credit/debit card number (`\d{4}-\d{4}-\d{4}-\d{4}`) |
| `sens_apim_004` | **Resident Registration Number** | `4` (Critical) | 13-digit Korean Resident Registration Number and Alien Registration Number (`\d{6}-[1-4]\d{6}`) |
| `sens_apim_005` | **Name** | `2` (Medium) | Personal name identification pattern within JSON fields |
| `sens_apim_006` | **Password** | `4` (Critical) | Plaintext key-value exposure of `password`, `passwd`, `pwd`, `secret` |
| `sens_apim_007` | **IP Address** | `2` (Medium) | Internal network and client IPv4 address format |
| `sens_apim_008` | **Phone Number** | `3` (High) | Mobile and landline phone numbers (`01[016789]-\d{3,4}-\d{4}`) |
