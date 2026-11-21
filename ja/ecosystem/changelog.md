---
title: リリースノートおよび変更履歴 (Changelog)
description: 株式会社エムパシー SyncSeries プラットフォームのバージョン別主要機能改善、セキュリティアップデート、およびアーキテクチャ決定記録 (ADR)
sort: 70
---

# エンタープライズ リリースノート & 変更履歴

SyncSeries のバージョン別主要アップデート、セキュリティパッチ、パフォーマンス改善、およびアーキテクチャ決定記録 (Architecture Decision Records) を透明性をもってご案内します。

---

## [v2.6.0] - 2026-09-24

### 主な新機能およびガバナンス刷新
* **SyncVerse 作業承認 (Governance) コントロールタワーの全面刷新**:
  * 新規大分類 `作業承認` (`/governance`) を新設：承認待ち (HITL 決裁)、要件仕様 (スペックスタジオ)、コードレビュー (ブランチ/PR)、スキーマ管理 (DB ガバナンス)、コード点検 (品質監査) の5大専用ビューを完備。
  * 12個のエージェントメニューをインフラ中心の6個に集約・スリム化し、2〜5文字の短縮された実務用語に統一。
* **Admin / MCP サーバーの役割分離および非同期起動 0ms 遅延の安定化**:
  * Admin サーバーの不要な SyncVerse 自動登録を遮断 (`self-registration.enabled: false`) し、UI 起動の独立性を確保。
  * MCP サーバー専用の `AgentSelfRegistrationClient` における非同期 (`runAsync`) および 3秒タイムアウトの強制により、中央コントロールタワーがオフラインの場合でも起動 0ms 遅延を保証。
* **Zero-Mock および 4-Cycle 品質検証プロトコルの全社確立**:
  * 全社コアエージェントおよび共通モジュール全域から Mock/Stub データを完全排除 (`verify-zero-mock.ps1` 100% 合格)。
  * 偽の正常 (Fake Normalcy) 状態への偽装を根本的に禁止し、RFC 7807 Problem Details 標準エラー体系へ一元化。
* **SyncCMS オーサリングツールおよび Web コンポーネントの高度化**:
  * Tiptap シャドウエディターにマルチデバイス (Desktop, Tablet, Mobile) 対応のレスポンシブプレビューを搭載。
  * リアルタイムインライン SEO 分析パネル (`SeoAnalysisPanel.vue`) およびコマンドパレット (`CommandPaletteModal.vue`) に対応。

---

## [v2.5.0] - 2026-06-15

### 主な新機能
* **SyncShop EC 自律運用ソリューションの公式リリース**:
  * Headless eCommerce 分離アーキテクチャ (PMS, OMS, SMS, UMS) およびモバイルアプリをローンチ。
  * リアルタイム DB 連携ダイナミックプライシングおよび無損失スナップショットロールバック (`shop_batch_price_update`) エンジン。
  * 3段階コマースエージェントスウォーム (Pricing Optimizer, Margin Safeguard, Executor) を搭載。
* **全社 8大共通ビジネスモジュール (`sync-module-*`) および SyncSDK の構築**:
  * `sync-core`: Java 25 仮想スレッド (Virtual Threads) 環境における Carrier Pinning 防止 (`ReentrantLock`)。
  * `sync-module-ai`: `AgentScope Java` (`io.agentscope:agentscope-harness`) を全社標準 AI フレームワークとして一元化。
  * `sync-module-deploy`: Jenkins、GitHub Actions、ArgoCD パイプライン連携および K8s Pod 管制。
  * `sync-module-issue`: ユニバーサルイシュートラッカー (GitHub, GitLab, Jira, Linear, Redmine) およびポートフォリオカンバンボード。
  * `sync-module-rag`: Tri-Hybrid RAG ナレッジ検索ハブ (Dense+Sparse+Reranker) およびインシデントランブック。
  * `sync-module-notification`、`sync-module-nl2sql`、`sync-module-audit` の統合パッケージング。
  * `SyncSDK`: Antigravity / OpenSwe SWE エージェント SDK 連携および Mock-Free 本番保証。

---

## [v2.4.0] - 2026-03-01

### 主な新機能
* **SyncVerse 中央コントロールタワー (Control Tower) の高度化**:
  * マルチエージェント協調 MsgHub ベースの A2A (Agent-to-Agent) イベントルーティングエンジンを搭載。
  * Server-Sent Events (SSE) ベースのリアルタイム遠隔管制ストリーミングに対応。
* **3段階 HITL (Human-In-The-Loop) 安全ガバナンス承認パイプラインの正式リリース**:
  * `LOW`、`MEDIUM`、`HIGH` ランク別の自動実行および管理者承認ゲートウェイを実装。
* **RFC 7807 Problem Details 標準エラープロトコルの全社適用**:
  * 偽の正常 (Fake Normalcy) 状態への偽装を事前に遮断し、構造化された診断情報を伝播。

### セキュリティおよびコンプライアンス
* フッター必須の事業者開示情報を完備し、B2B エンタープライズサービス利用規約 (`terms.html`) を新設。
* Zero Data Retention (データ非学習保証) ポリシーおよびセキュリティホワイトペーパーを統合。
* システム稼働率 99.9% SLA インジケーターバッジを連携。

---

## [v2.3.0] - 2026-02-15

### 主な改善事項
* **SyncLLM FinOps セマンティックキャッシュ & PII マスキングゲートウェイ**:
  * コサイン類似度 0.95 以上の同一クエリに対する Redis ベースのゼロ遅延 (12ms) セマンティックキャッシング。
  * 秒間 2,500 RPS を処理可能なインライン個人情報 (PII) リアルタイム難読化フィルタを搭載。
* **インテリジェント可用性自動フェイルオーバー (Circuit Breaker)**:
  * 外部 LLM プロバイダー (OpenAI, Anthropic, Bedrock) で連続 3回の障害を検知した場合、50ms 以内にサブバックエンドへ無停止切り替え。

---

## [v2.2.0] - 2026-01-20

### 主な改善事項
* **SyncETA Vision-LLM 4.0 セレクター自己修復 (Self-Healing) エンジン**:
  * DOM 変更検知時に視覚的バウンディングボックスとテキストアンカーを組み合わせた自己修復成功率 98.4% を達成。
  * EdTech グローバル AIDT E2E 回帰テスト時間を 4時間から 45分へ 81% 短縮した実績を実証。
* **Playwright 分散クラスター マルチワーカーノード連携**:
  * K8s 環境で数百台のブラウザコンテナを同時オーケストレーションし、並列テストを実行。

---

## [v2.1.0] - 2025-11-10

### 主な改善事項
* **SyncBoot Spring Boot 4.0 / Java 25 ベース MSA フレームワーク**:
  * 分散トランザクション一貫性のための Orchestrated Saga パターンおよび補償トランザクション自動生成。
  * Virtual Threads (Loom) の適用により同時 I/O スループットが 300% 向上。
  * AgentScope Java (`io.agentscope:agentscope-harness`) 全社標準 AI フレームワーク連携。

---

## [v2.0.0] - 2025-09-01

### フラッグシップ商用リリース
* **SyncSeries 全社 3-Layer アーキテクチャ商用リリース**:
  * Layer 1: ガバナンスおよび自律協調レイヤー (SyncVerse, SyncInsight)
  * Layer 2: ドメイン特化型自律エージェントレイヤー (SyncETA, SyncBoot, SyncCMS, SyncCrawl, SyncLLM)
  * Layer 3: プラットフォーム共通インフラレイヤー (6-File SQL (db/00_extensions.sql ~ 05_sample_dev.sql) 構造、MCP JSON-RPC バス)
* **エンタープライズ オンプレミス (Air-Gapped) 閉域網デプロイパックの初出荷**。
