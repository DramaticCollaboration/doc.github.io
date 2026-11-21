---
title: "SyncAPIM WAF 脅威検知、仕様ドリフト監査および PII マスキングガバナンス"
sidebarTitle: "WAF 脅威検知 & PII マスキング"
description: "SyncAPIM の未登録シャドウ API 自動検出、OpenAPI 3.0.1 Contract Drift 比較監査、6つの Web・API 攻撃検知ルールおよび8種類の機密情報リアルタイムマスキング体系について説明します。"
head:
  - - meta
    - name: keywords
      content: SyncAPIM WAF, シャドウ API, OpenAPI Contract Drift, SQL Injection, XSS, SSRF, RCE, JWT 検証, 個人情報マスキング
  - - meta
    - property: og:title
      content: "SyncAPIM WAF 脅威検知、仕様ドリフト監査および PII マスキングガバナンス"
  - - meta
    - property: og:description
      content: "実トラフィックベースの OpenAPI 3.0.1 仕様自動推論、Contract Drift 監査および6つの攻撃・8種類の機密情報保護体系"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncapim/waf-and-pii-governance
sort: 3
---

# SyncAPIM WAF 脅威検知、仕様ドリフト監査および PII マスキングガバナンス

`SyncAPIM` は、単なるシグネチャファイアウォールを超え、**構文トークンフィンガープリント分析器 (`SqlXssLexicalTokenizer`)**、**`SyncWatch` 連携リアルタイム攻撃パターン検知・ピンポイント仮想パッチ (`SandboxedDefenseEvaluator`)**、**カーネル eBPF 遮断**、**API インベントリ可視性確保 (Shadow API Discovery)**、**設計仕様に対する実トラフィック整合性検証 (Contract Drift Audit)**、**個人・金融機密情報の漏洩防止 (PII Masking)** を単一パイプラインとして提供します。

---

## 0. 構文トークンフィンガープリント分析器 (`SqlXssLexicalTokenizer`) + `SyncWatch` ピンポイント仮想パッチ + カーネル eBPF 遮断

1. **構文トークンフィンガープリント分析器 (`SqlXssLexicalTokenizer`)**:
   - 従来の不正確なハッシュベースの擬似ベクトル方式を全面的に排除し、3段階の多重デコード（URL、HTML エンティティ、Unicode エスケープ、SQL インラインコメント解除）の後、語彙トークンシーケンスフィンガープリント（`s&1`、`sUE`、`;k`、`f(n)`、`x_script`、`x_event_handler` など）を `0.05ms` 以内に決定論的に抽出し、亜種 SQLi および XSS 回避攻撃を検知します。
2. **`SyncWatch` 連携リアルタイム攻撃パターン検知およびピンポイント仮想パッチ (`ApimDefensePack` & `SandboxedDefenseEvaluator`)**:
   - 全社セキュリティ観測所である [`SyncWatch`](/ja/syncwatch/) がグローバル脅威フィード（NVD CVE、CISA KEV、OSV.dev、GitHub GHSA、Nuclei、OWASP CRS、KISA）を収集し、コンパイル・検証した **`ApimDefensePack`** をリアルタイムで受信します。
   - `SandboxedDefenseEvaluator`（`SimpleEvaluationContext` ベースの隔離評価器）が構文トークンフィンガープリント、ターゲット位置別正規表現（`HEADER`、`URI`、`QUERY`、`BODY`）、Restricted SpEL 式を組み合わせて評価し、サーバー再起動なしで特定エンドポイントにピンポイント仮想パッチを即時適用します。
3. **カーネル eBPF 超低遅延遮断**:
   - 高リスクの侵害試行が確認された攻撃元 IP および異常パケットは、L7 ゲートウェイ遮断と同時にカーネル eBPF (XDP/TC) レイヤーで即時ドロップし、バックエンドリソースの枯渇を未然に防止します。

---

## 1. 未登録シャドウ API 自動検出および OpenAPI 3.0.1 推論

1. **実トラフィックベースのエンドポイントカタログ自動生成**:
   - `sync-apim-detector` の `DetectionRuleServiceImpl` は、受信した HTTP パケットの `host`、`method`、`path` の組み合わせを分析し、未登録エンドポイントを `wapf_api_endpoint` および `wapf_api_endpoint_detail` に自動登録します。
   - リクエストクエリ文字列、リクエストボディ (JSON)、レスポンスボディ (JSON) のすべてのフィールドを再帰的に解析し、`wapf_data_field` にデータ型と JSONPath（`$.data.accountNo` など）を記録します。
2. **OpenAPI 3.0.1 仕様のリアルタイム合成および Contract Drift 比較監査**:
   - 観測された入出力フィールドをもとに、標準 OpenAPI 3.0.1 JSON 仕様（`wapf_open_api_spec`）を自動合成します。
   - `POST /api/v1/apim/spec/audit` (`WapfOpenApiSpecServiceImpl.auditContractDrift`) 呼び出し時、設計仕様（`designSpec`）と実トラフィック仕様を比較し、次の3種類のドリフトを判別します。
     - **`UNDOCUMENTED_RESPONSE_FIELD`**: 設計仕様に定義されていない内部フィールドや機密フィールドが実際の API レスポンスとして露出している場合
     - **`MISSING_REQUIRED_PARAM`**: 設計上必須のリクエストパラメータが欠落したまま呼び出されている場合
     - **`SHADOW_ENDPOINT`**: 承認された API 仕様書に存在しない未登録のデバッグ・レガシーエンドポイントが呼び出されている場合

---

## 2. 6つの標準 Web・API 脅威検知ルール (`wapf_rule`)

`db/04_seed_domain.sql` に標準搭載された6つのコア脅威検知ルールは、リクエスト URL、ヘッダー、クエリ、ボディ全体を対象にリアルタイム正規表現マッチングおよび JWT 構造検証を実行します。

| ルール ID | 脅威検知ルール名称 | 重大度 | 主な検知パターンおよび防御対象 |
| :--- | :--- | :---: | :--- |
| `rule_apim_001` | **SQL インジェクション攻撃検知** | `4` (Critical) | `UNION SELECT`、`OR 1=1`、`DROP TABLE`、`SLEEP()`、`WAITFOR DELAY` などの DB 操作構文 |
| `rule_apim_002` | **クロスサイトスクリプティング検知** | `3` (High) | `<script>`、`javascript:`、`onerror=`、`onload=` などの悪性スクリプト挿入 |
| `rule_apim_003` | **サーバーサイドリクエストフォージェリ検知** | `4` (Critical) | `169.254.169.254`（クラウドメタデータ）、`localhost`、`127.0.0.1`、`file://`、`gopher://` 内部ネットワーク探索 |
| `rule_apim_004` | **リモートコマンド実行攻撃検知** | `4` (Critical) | `; cat /etc/passwd`、`\| bash`、`` `whoami` ``、`cmd.exe`、`powershell` などの OS コマンドインジェクション |
| `rule_apim_005` | **ディレクトリトラバーサル検知** | `3` (High) | `../`、`..\\`、`/etc/passwd`、`win.ini`、URL エンコードされた上位パス回避アクセス |
| `rule_apim_006` | **JWT トークン整合性および署名検証** | `4` (Critical) | `alg: "none"` 署名回避攻撃、期限切れトークン（`exp` 超過）、異常ペイロード構造改ざん |

---

## 3. 7つのセキュリティポリシーグループ (`wapf_policy`) およびリアルタイム Redis キャッシュ同期

管理コンソール（`/waf/policy`）でセキュリティポリシーやルールマッピングを変更すると、`WapfPolicyServiceImpl.syncPolicyRuleCache()` が即時実行されて Redis（`wapf:policy:rules`）を更新し、`sync-apim-detector` を再起動することなくリアルタイム検知パイプラインへ即座に反映されます。

- **`pol_apim_001` (認証セキュリティポリシー)**: デフォルト（`basic=true`）グローバル保護ポリシー
- **`pol_apim_002` (アクセス制御ポリシー)**: 管理者および内部精算 API アクセス統制
- **`pol_apim_003` (データ暗号化ポリシー)**: 金融・決済区間の転送データ保護
- **`pol_apim_004` (権限認可ポリシー)**: BOLA/IDOR オブジェクトレベル権限検証
- **`pol_apim_005` (ネットワークセキュリティポリシー)**: 外部コールバックおよび Webhook SSRF 防御
- **`pol_apim_006` (個人情報保護ポリシー)**: 顧客マイデータ照会 API 集中監視
- **`pol_apim_007` (侵入検知ポリシー)**: 高リスク RCE・SQLi ペイロード即時遮断

---

## 4. 8種類の個人・金融機密情報 (PII) リアルタイムマスキング (`wapf_sensitivity`)

API リクエストおよびレスポンスに含まれる個人情報がログや外部レスポンスへ平文のまま露出しないよう、8種類の機密情報正規表現をリアルタイムでスキャンしてマスキング（`***`）処理し、該当フィールドを `wapf_data_field.sensitivity_uuid` に自動タグ付けします。

| 識別子 | 機密情報項目 | 重大度 | 検知対象フォーマット概要 |
| :--- | :--- | :---: | :--- |
| `sens_apim_001` | **口座番号** | `3` (High) | 市中銀行口座番号フォーマット（`\d{3,4}-\d{2,6}-\d{4,6}`） |
| `sens_apim_002` | **メールアドレス** | `2` (Medium) | 標準メールアドレスフォーマット |
| `sens_apim_003` | **カード番号** | `4` (Critical) | 16桁のクレジット・デビットカード番号（`\d{4}-\d{4}-\d{4}-\d{4}`） |
| `sens_apim_004` | **住民登録番号** | `4` (Critical) | 13桁の住民登録番号および外国人登録番号（`\d{6}-[1-4]\d{6}`） |
| `sens_apim_005` | **氏名** | `2` (Medium) | JSON フィールド内の氏名識別パターン |
| `sens_apim_006` | **パスワード** | `4` (Critical) | `password`、`passwd`、`pwd`、`secret` キー・バリュー平文露出 |
| `sens_apim_007` | **IP アドレス** | `2` (Medium) | 内部ネットワークおよびクライアント IPv4 アドレスフォーマット |
| `sens_apim_008` | **電話番号** | `3` (High) | 携帯電話および一般電話番号（`01[016789]-\d{3,4}-\d{4}`） |
