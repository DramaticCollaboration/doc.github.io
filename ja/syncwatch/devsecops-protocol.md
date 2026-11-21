---
title: "SyncVerse & SyncAPIM連携プロトコル (VerseAuditPack & ApimDefensePack)"
description: "SyncWatchがコンパイルしたVerseAuditPackとApimDefensePackをSyncVerseおよびSyncAPIMに配信し、適用フィードバックを収集する標準プロトコル仕様です。"
sidebarTitle: Verse & APIM連携プロトコル
sort: 3
---

# SyncVerse & SyncAPIMセキュリティパック連携プロトコル

`SyncWatch`は、**8大グローバル脅威フィード（OSV.dev、GitHub GHSA、NVD CVE、CISA KEV、Nuclei、OWASP CRS、MITRE ATT&CK、KISA）**および診断ドキュメントからコンパイル・サンドボックス検証が完了したセキュリティルールを、**`VerseAuditPack`**（コード・依存関係・ペネトレーションテスト点検用）と**`ApimDefensePack`**（ランタイムゲートウェイ防御用）の標準ペイロードとしてパッケージ化し、`SyncVerse`および`SyncAPIM`へリアルタイム配信します。

---

## 1. `VerseAuditPack`連携仕様（`SyncWatch` → `SyncVerse`）

`SyncVerse`は、受信した`VerseAuditPack`を使用して管理下の全社Gitリポジトリに対し、**SCA（依存関係監査）**、**SAST（静的コード監査）**、**DAST（動的ペネトレーションテストプローブ）**の3チャネルによるセキュリティ診断を実行します。

### 1.1 受信エンドポイントおよびMCPツール
* **SyncVerse受信REST API**: `POST /api/v1/verse/quality/security/audit-pack`
* **SyncWatch送信REST API**: `POST /api/v1/watch/dispatches/broadcast` (`targetSystem: "SYNC_VERSE"`)

### 1.2 `VerseAuditPack` JSONペイロード例
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
      "remediationGuideMd": "`pom.xml`の`commons-configuration2`バージョンを`2.10.1`以上に引き上げ、動的スクリプト補間（Interpolation）プレフィックスを無効化してください。",
      "targetAgentCode": "ALL_REPOS"
    }
  ]
}
```

---

## 2. `ApimDefensePack`連携仕様（`SyncWatch` → `SyncAPIM`）

`SyncAPIM`は、受信した`ApimDefensePack`をインメモリホットスワップレジストリに即座にロードし、**`SqlXssLexicalTokenizer`**（構文トークン指紋分析器）および**`SandboxedDefenseEvaluator`**（Restricted SpELベースのピンセット仮想パッチ評価器）を通じて、アプリケーションを再起動することなくゼロデイ攻撃をリアルタイムで遮断します。

### 2.1 受信エンドポイントおよびMCPツール
* **SyncAPIM受信REST API**: `POST /api/v1/apim/waf/defense-pack/apply`
* **SyncAPIM受信MCPツール**: `apim_receive_watch_defense_pack`
* **SyncWatch送信REST API**: `POST /api/v1/watch/dispatches/broadcast` (`targetSystem: "SYNC_APIM"`)

### 2.2 `ApimDefensePack` JSONペイロード例
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

## 3. 構文トークン指紋分析器（`SqlXssLexicalTokenizer`）とピンセット仮想パッチの結合原理

`SyncAPIM`は、従来の浮動小数点ハッシュ／疑似ベクトル方式の代わりに、決定論的字句トークン分析器である**`SqlXssLexicalTokenizer`**と**`SandboxedDefenseEvaluator`**を組み合わせて動作します。

1. **多層デコード（3-Round Multi-Layer Decoding）**:
   - 攻撃者が検知回避のために適用した二重・三重URLエンコーディング（`%2527`）、HTMLエンティティ（`&#x3c;`）、Unicodeエスケープ（`\u003c`）、SQLインラインコメント（`/*!50000UNION*/`）を最大3ラウンドまで反復的に正規化します。
2. **構文トークン指紋抽出（`SqlXssLexicalTokenizer`）**:
   - 入力文字列を字句トークン（`s` 文字列、`1` 数値、`&` 論理演算子、`U` UNION、`E` SELECT、`;` 構文終端、`k` 危険キーワード、`f(n)` 関数呼び出し、`x_script` スクリプトタグ、`x_event_handler` イベントハンドラーなど）へ変換し、`0.05ms`以内に構造的攻撃指紋（`grammarFingerprint`）を生成します。
3. **ピンセット仮想パッチ（`SandboxedDefenseEvaluator`）**:
   - `SyncWatch`が配信した`ApimDefensePack`のターゲットパス（`target_path`）、HTTPメソッド（`target_method`）、検査位置（`target_locations`）が一致した場合にのみ、隔離された`SimpleEvaluationContext`（型参照・リフレクション・ランタイムコマンド実行を事前遮断）上で防御表現式を評価します。
4. **カーネルeBPFリアルタイム遮断**:
   - 脅威と判定されたパケットはL7ゲートウェイで即座に`403 Forbidden`として遮断されると同時に、反復攻撃元のIPはカーネルeBPF（XDP/TC）ブラックリストマップに登録され、ネットワークインターフェースレベルで超低遅延ドロップされます。
