---
title: 全社技術用語集 (SyncSeries Technical Glossary)
sidebarTitle: 全社技術用語集
description: 株式会社エムパシー（Empasy）のSyncSeries全社アーキテクチャおよび11製品群で使用する主要技術用語（MCP、A2A、AgentScope Java、NL2SQL、RAG/GraphRAG、pgvector、HITL、eBPF、WAF、RBAC、Zero-Mock、Canonical URL、MSA、Playwright Self-Healing、CVSS/CVE/STIX、FinOps、Semantic Cache）の公式技術定義単一情報源（SSOT）です。
head:
  - - meta
    - name: keywords
      content: 技術用語集, SyncSeries Glossary, MCP, A2A, AgentScope Java, NL2SQL, RAG, GraphRAG, pgvector, HITL, eBPF, WAF, RBAC, Zero-Mock, Canonical URL, MSA, Playwright Self-Healing, CVSS, CVE, STIX, FinOps, Semantic Cache, エムパシー, 株式会社エムパシー, Empasy
  - - meta
    - property: og:title
      content: 全社技術用語集 (SyncSeries Technical Glossary)
  - - meta
    - property: og:description
      content: エムパシー SyncSeries アーキテクチャおよび製品群全般の標準技術用語 公式定義（SSOT）
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/glossary/
sort: 1
---

# 全社技術用語集 (SyncSeries Technical Glossary)

> **文書の位置づけについて**: 本ページは、`doc.empasy.com` が管理する**株式会社エムパシー（Empasy）および SyncSeries 公式技術用語の単一情報源（SSOT）**です。非開発者・導入検討担当者向けの製品紹介については、[エムパシー公式ホームページ（empasy.io）](https://empasy.io/ja/pages/index.html)および[統合デモポータル（sync.empasy.io）](https://sync.empasy.io/ja/)をご参照ください。

---

## クイックインデックス

| 分類 | 収録用語 |
| :--- | :--- |
| **エージェント・オーケストレーション** | [MCP](#mcp) · [A2A](#a2a) · [AgentScope Java](#agentscope-java) · [HITL](#hitl) |
| **データ・検索・LLM 運用** | [NL2SQL](#nl2sql) · [RAG / GraphRAG](#rag-graphrag) · [pgvector](#pgvector) · [FinOps](#finops) · [Semantic Cache](#semantic-cache) |
| **アーキテクチャ・開発標準** | [Canonical URL](#canonical-url) · [MSA](#msa) · [RBAC](#rbac) · [Zero-Mock](#zero-mock) |
| **セキュリティ・品質自動化** | [eBPF](#ebpf) · [WAF](#waf) · [CVSS / CVE / STIX](#cvss-cve-stix) · [Playwright Self-Healing](#playwright-self-healing) |

---

## 1. エージェント・オーケストレーション

### MCP (Model Context Protocol) {#mcp}
* **概要**: AIエージェントと業務システム・ツール間の標準通信規格です。
* **技術定義**: JSON-RPC 2.0をベースとし、LLMおよびエージェントランタイムが外部ツール（Tool）、リソース（Resource）、プロンプト（Prompt）を標準化されたスキーマで探索・呼び出しできるようにするオープンプロトコルです。SyncSeriesのすべてのドメインモジュールは、SSEまたはStreamable HTTPトランスポート層を介して標準MCPツールを公開します。
* **関連ドキュメント**: [標準MCPプロトコル仕様](/ja/ecosystem/mcp-protocol) · [カスタムMCPツール開発](/ja/sdk/custom-mcp-tool) · [SyncVerse MCPレジストリ](/ja/syncverse/mcp-tool-registry)

### A2A (Agent-to-Agent) {#a2a}
* **概要**: 各業務領域を担当するソフトウェアモジュール（エージェント）同士がタスクをやり取りする協調構造です。
* **技術定義**: 中央管制オーケストレーター（`SyncVerse`）が上位のビジネスリクエストを下位のタスク単位（DAG）に分解し、各ドメインエージェント（`SyncBoot`、`SyncCMS`、`SyncShop`、`SyncInsight`、`SyncAPIM`、`SyncWatch`、`SyncOps`、`SyncETA`、`SyncCrawl`、`SyncLLM`）間で非同期メッセージおよびステータスイベントを交換しながら完了まで調停する分散エージェント協調アーキテクチャです。
* **関連ドキュメント**: [SyncSeries エコシステムアーキテクチャ](/ja/ecosystem/) · [モジュール間 E2E 連携シナリオ](/ja/ecosystem/e2e-workflow) · [SyncVerse アーキテクチャ](/ja/syncverse/architecture)

### AgentScope Java {#agentscope-java}
* **概要**: Java（Spring Boot）環境においてAI推論とツール呼び出しを安定して実行するための標準フレームワークです。
* **技術定義**: SyncSeries全社のJava 25・Spring Boot 4.0バックエンドで採用している単一のAIエージェントランタイム（`io.agentscope:agentscope-harness`）です。`ReActAgent`ベースの推論・行動ループ、`MsgHub`ベースのマルチエージェントメッセージブロードキャスト、構造化ツールバインディングを提供し、DBトランザクション（`@Transactional`）と長時間のLLM/MCP I/O境界を明確に分離して運用します。
* **関連ドキュメント**: [AgentScope Java 標準ガイド](/ja/ecosystem/agentscope-guide) · [SyncBoot AgentScope 連携実務](/ja/syncboot/agentscope-integration) · [仮想スレッド & AgentScope 研究](/ja/study/springboot-virtual-threads-agentscope)

### HITL (Human-in-the-Loop) {#hitl}
* **概要**: 重要な変更やデプロイの前に、担当者が直接レビューし承認・却下を行う安全プロセスです。
* **技術定義**: AIエージェントの実行権限をリスク階層（Tier 1: 読み取り専用の自律実行、Tier 2: 事後通知型のソフト変更、Tier 3: 事前承認必須の高リスク変更）に分類し、DBスキーマ（DDL）変更・権限修正・価格ポリシー反映・本番デプロイといった高リスク作業の前に変更Diffと影響度レポートを提示して、複数名による決裁ラインの承認を強制するガバナンス機構です。
* **関連ドキュメント**: [HITL ガバナンス & Saga](/ja/ecosystem/hitl-governance) · [多段階決裁 & 監査運用ガイド](/ja/guide/hitl-approval-operations) · [SyncVerse HITL 承認](/ja/syncverse/hitl-governance)

---

## 2. データ・検索・LLM 運用

### NL2SQL (Natural Language to SQL) {#nl2sql}
* **概要**: 日常的な自然言語による質問を、安全なデータベース照会コマンドへ自動変換する技術です。
* **技術定義**: ユーザーが入力した自然言語クエリをデータベースのメタデータ・スキーマコンテキストと結合し、実行可能なSQL文として生成する技術です。SyncSeries（`sync-module-nl2sql`、`SyncInsight`）は、**Apache Calcite ASTパーサー**を通じて`SELECT`読み取り専用クエリのみを許可し、`INSERT`/`UPDATE`/`DELETE`/`DROP`および許可されていないテーブルへのアクセスを構文木段階で根本的に遮断するとともに、強制`LIMIT`ガードレールを適用します。
* **関連ドキュメント**: [SyncInsight NL2SQL データ分析](/ja/syncinsight/nl2sql-and-data) · [共有モジュール & SDK](/ja/ecosystem/shared-modules-and-sdk)

### RAG / GraphRAG (Retrieval-Augmented Generation) {#rag-graphrag}
* **概要**: AIが推測で回答せず、社内ドキュメントや知識関係を直接検索して根拠に基づき回答する方式です。
* **技術定義**:
  * **RAG**: 外部ドキュメント・マニュアル・Web収集データをチャンキング（Chunking）および埋め込み（Embedding）処理し、ベクトル／キーワードのハイブリッド検索によって関連根拠を先に取得した上でLLMプロンプトに注入し、ハルシネーション（Hallucination）を最小化する検索拡張生成手法です。
  * **GraphRAG**: ドキュメント内のエンティティ（Entity）と関係（Relation）をナレッジグラフ構造として併せて索引化し、単純な類似度検索だけでは結び付けにくい複数ドキュメント間の因果・依存関係を追跡する拡張検索アーキテクチャです。
* **関連ドキュメント**: [SyncCrawl RAG ナレッジパイプライン](/ja/synccrawl/rag-knowledge-pipeline) · [ハイブリッド RAG & リランキング研究](/ja/study/hybrid-rag-dense-sparse-reranking) · [RAG パイプライン基礎](/ja/study/rag)

### pgvector {#pgvector}
* **概要**: 専用のベクトルDBを別途導入することなく、PostgreSQL単体で構造化データとAI意味検索を同時に処理する拡張モジュールです。
* **技術定義**: PostgreSQL 18.6データベース内で高次元実数ベクトル（`vector`）カラムの格納とHNSW / IVFFlat近似最近傍（ANN）類似度検索をネイティブにサポートするオープンソース拡張機能です。SyncSeriesは外部ベクトルストアの二重運用を行わず、PostgreSQL 18.6の単一トランザクション境界内でリレーショナルデータ、全文検索（`pg_trgm`）、ベクトル検索（`pgvector`）を統合管理します。
* **関連ドキュメント**: [SyncBoot PostgreSQL 18.6 ローカル環境](/ja/syncboot/h2) · [SyncCrawl アーキテクチャ](/ja/synccrawl/architecture) · [SyncOps アーキテクチャ](/ja/syncops/architecture)

### FinOps (AI / Cloud Financial Operations) {#finops}
* **概要**: 部署・プロジェクト別のAI利用量とクラウドコストをリアルタイムに集計し、予算上限を統制する管理体系です。
* **技術定義**: マルチLLM（商用APIおよびオンプレミスオープンソースモデル）の呼び出し時に発生する入力・出力トークン数、モデル単価、リクエスト遅延時間をテナント・部署・プロジェクト単位でリアルタイムに計量し、予算しきい値（例: 80%で警告、100%で遮断または軽量モデルへのダウングレード）に応じて自動ポリシーを執行するコストガバナンスフレームワークです。
* **関連ドキュメント**: [SyncLLM FinOps & セマンティックキャッシュ](/ja/syncllm/finops-and-cache) · [FinOps 予算 & コスト運用ガイド](/ja/guide/finops-budget-operations) · [SyncVerse LLM ゲートウェイ](/ja/syncverse/finops-and-syncllm)

### Semantic Cache (セマンティックキャッシュ) {#semantic-cache}
* **概要**: 表現が異なっていても意味が同じ過去の質問を再利用し、AIの応答速度を高めてコストを削減する技術です。
* **技術定義**: 文字列の完全一致（Exact Match）のみに依存する従来のキャッシュとは異なり、ユーザープロンプトの埋め込みベクトル間のコサイン類似度（Cosine Similarity）が設定しきい値（例: 0.95以上）を満たした場合に、Redis/pgvectorキャッシュに保存された検証済みレスポンスを即座に返却することで、重複するLLM推論コストと応答遅延を削減するキャッシング手法です。
* **関連ドキュメント**: [SyncLLM FinOps & セマンティックキャッシュ](/ja/syncllm/finops-and-cache) · [SyncLLM インテリジェントモデルルーティング](/ja/syncllm/routing-and-gateway)

---

## 3. アーキテクチャ・開発標準

### Canonical URL (全社単一標準APIパス) {#canonical-url}
* **概要**: すべてのモジュールのAPIアドレスを一貫した単一のルールで統一し、連携時の混乱をなくすパス標準です。
* **技術定義**: SyncSeries全社のバックエンドコントローラーとフロントエンド呼び出し側が1対1で一致するよう、リソースあたり単一の正規パス（`/api/v1/{product}/{resource}`）のみをマッピングするAPI設計原則です。複数配列マッピングやプロキシパス変換（rewrite）を禁止することで、APIゲートウェイ、ドキュメント、権限認可、セキュリティ検知（`SyncAPIM`）間のパス不一致を根本から排除します。
* **関連ドキュメント**: [SyncBoot システムアーキテクチャ](/ja/syncboot/architecture) · [SyncAPIM アーキテクチャ](/ja/syncapim/architecture)

### MSA (Microservices Architecture) {#msa}
* **概要**: 注文・決済・検索・認証などの業務機能を独立したサービスに分割し、障害の波及を防いで個別に拡張できるようにする構造です。
* **技術定義**: 単一の巨大アプリケーションではなく、ドメイン境界ごとに独立してデプロイ・拡張可能なサービス単位に分離するアーキテクチャです。SyncSeriesでは`SyncShop`（Gateway、Auth、Admin、Portal、Search、Monitor、MBG、MCP Serverなどの独立モジュール構成）および`SyncAPIM`（4-JVM性能分離構造）に適用され、高トラフィック処理性能と障害分離を保証します。
* **関連ドキュメント**: [SyncShop システムアーキテクチャ](/ja/syncshop/architecture) · [SyncAPIM 4-JVM アーキテクチャ](/ja/syncapim/architecture)

### RBAC (Role-Based Access Control) {#rbac}
* **概要**: 職務や役割に応じて、閲覧可能なメニューや実行可能な機能を制御する権限体系です。
* **技術定義**: ユーザーに直接権限を付与せず、ロール（`sys_role`）とメニュー・機能・ボタン権限（`sys_permission`、`sys_role_permission`）をマッピングしてアクセスを制御するセキュリティモデルです。SyncSeries全社のフロントエンドは静的メニューのハードコーディングを行わず、バックエンド認可API（`/api/v1/{product}/sys/permission/getUserPermissionByToken`）から現在ユーザーの認可ツリーのみを動的に受信します。
* **関連ドキュメント**: [SyncBoot セキュリティ & マルチテナンシー](/ja/syncboot/enterprise-security) · [セキュリティホワイトペーパー & コンプライアンス](/ja/ecosystem/security-and-compliance)

### Zero-Mock (実戦連携整合性原則) {#zero-mock}
* **概要**: 偽のデータや暫定レスポンスを用いず、すべての画面と機能が実際のデータベース・サーバーと連携して動作することを検証する品質基準です。
* **技術定義**: 本番コードおよびUIにおけるハードコーディングされたダミー配列、空コレクションの返却、例外を握りつぶした上での偽の成功レスポンス（Fake Normalcy）、プロンプト文字列分岐（Prompt Sniffing）を禁止するエンジニアリング品質規律です。障害発生時はRFC 7807 Problem Detailsに基づく明示的なエラーとして透過的に伝播し、自動化された静的・契約検証スクリプトによって継続的に検査します。
* **関連ドキュメント**: [Zero-Mock 品質ハーネス](/ja/ecosystem/zero-mock-harness) · [Zero-Mock テストハーネスガイド](/ja/sdk/zero-mock-testing)

---

## 4. セキュリティ・品質自動化

### eBPF (Extended Berkeley Packet Filter) {#ebpf}
* **概要**: OSのカーネルレベルで悪性トラフィックを超低遅延で検知・遮断するLinuxセキュリティ技術です。
* **技術定義**: Linuxカーネルのソースを修正したりカーネルモジュールを直接ロードしたりすることなく、サンドボックス検証器を通過したバイトコードをカーネル内のネットワーク・システムコールフック（XDP/TCなど）上で安全に実行する技術です。`SyncAPIM`では、アプリケーションサーバー（WAS）に到達する前のカーネル境界で攻撃元IP・パターンを高速遮断するために活用しています。
* **関連ドキュメント**: [SyncAPIM 概要](/ja/syncapim/) · [SyncAPIM WAF 脅威検知 & PII マスキング](/ja/syncapim/waf-and-pii-governance)

### WAF (Web Application Firewall) {#waf}
* **概要**: SQLインジェクションやクロスサイトスクリプティング（XSS）などのWeb・API攻撃をリアルタイムに検知して遮断するファイアウォールです。
* **技術定義**: HTTP/HTTPSおよびREST/GraphQL APIペイロードをアプリケーション層（L7）で検査し、SQL Injection、XSS、SSRF、Path Traversal、コマンドインジェクション（Command Injection）、認証バイパスなどのWeb脆弱性を悪用する試行を検知・遮断するセキュリティ層です。`SyncAPIM`は構文トークン解析器（`SqlXssLexicalTokenizer`）と`SyncWatch`から配信される仮想パッチルール（`ApimDefensePack`）を組み合わせることで誤検知を低減します。
* **関連ドキュメント**: [SyncAPIM WAF 脅威検知 & PII マスキング](/ja/syncapim/waf-and-pii-governance) · [SyncWatch アーキテクチャ & ルールコンパイラ](/ja/syncwatch/architecture)

### CVSS / CVE / STIX {#cvss-cve-stix}
* **概要**: 世界中のセキュリティ脆弱性の固有番号（CVE）、危険度スコア（CVSS）、脅威情報交換標準（STIX）です。
* **技術定義**:
  * **CVE (Common Vulnerabilities and Exposures)**: 公開されたソフトウェアのセキュリティ脆弱性に付与される国際標準の識別番号（例: `CVE-2026-XXXXX`）です。
  * **CVSS (Common Vulnerability Scoring System)**: 脆弱性の攻撃難易度・影響範囲を0.0〜10.0の数値（Low/Medium/High/Critical）で定量化する危険度評価体系です。
  * **STIX (Structured Threat Information Expression)**: サイバー脅威インテリジェンス（攻撃パターン、侵害指標、対応策）を機械可読なJSON構造で交換するための国際標準（OASIS）です。
* **関連ドキュメント**: [SyncWatch 概要](/ja/syncwatch/) · [SyncWatch Verse & APIM 連携プロトコル](/ja/syncwatch/devsecops-protocol) · [SyncWatch DB スキーマ & API 仕様](/ja/syncwatch/api-and-schema)

### Playwright Self-Healing (テスト自己修復) {#playwright-self-healing}
* **概要**: 画面デザインやボタン配置が変更されても自動テストが停止せず、対象要素を再度見つけ出して検証を継続する技術です。
* **技術定義**: PlaywrightベースのE2Eブラウザ自動化実行中にUI改修によって既存のCSS/XPathセレクタが失敗した際、セマンティックDOM属性・アクセシビリティツリー（ARIA Role/Label）・視覚的画面解析（Vision-LLM）を段階的に組み合わせて変更後の要素を再探索し、セレクタを自動補正する復旧メカニズムです。
* **関連ドキュメント**: [SyncETA 自己修復 & ビジョン](/ja/synceta/self-healing-and-vision) · [Vision-LLM 自己修復アルゴリズム研究](/ja/study/vision-llm-self-healing-algorithm) · [SyncETA 用語辞典](/ja/synceta/glossary)

---

## 追加ドメイン別用語辞典

* **[SyncETA テスト自動化用語辞典](/ja/synceta/glossary)**: ストーリー、シナリオ、データセット、コレクションなどQA自動化専用用語
* **[アジャイルおよび開発工学用語辞典](/ja/agile/glossaryOfTerms)**: スクラムバン、WIP、ベロシティ、DoR/DoD、ストーリーポイントなどの協業プロセス用語
