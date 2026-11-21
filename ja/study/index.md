---
title: "エンジニアリング研究アーカイブ (Study)"
description: "SyncSeriesの主要技術スタックであるPlaywright、Vision-LLM、MCP、ハイブリッドRAG、高性能Javaランタイムに関する深層技術研究およびアーキテクチャ分析資料集です。"
head:
  - - meta
    - name: keywords
      content: 技術研究, Playwright CDP, Vision-LLM, 自己修復アルゴリズム, MCPオーケストレーション, ハイブリッドRAG, 仮想スレッド, AgentScope, 株式会社エムパシー
  - - meta
    - property: og:title
      content: "エンジニアリング研究アーカイブ | 株式会社エムパシー (Empasy)"
  - - meta
    - property: og:description
      content: "実践的なエンジニアリング課題解決のための深層技術分析およびアーキテクチャ研究資料です。"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/study/
sort: 1
---

# エンジニアリング研究アーカイブ (Study)

本スペースは、株式会社エムパシー（Empasy）のSyncSeries（SyncETA、SyncVerse、SyncBoot、SyncCrawlなど）製品群の基盤となる主要技術スタックについて、実装原理や性能ベンチマーク、アーキテクチャ設計パターンを深く研究し記録する技術アーカイブです。

---

## 主要研究テーマの分類

### 1. Webブラウザ自動化 & QAエンジニアリング
- **[PlaywrightおよびCDPベースの視覚的回帰分析とDOM同期](./playwright-cdp-visual-regression)**：Chrome DevTools Protocolを活用したレンダリングフレームキャプチャおよびネットワークアイドル状態の同期手法の分析。
- **[Vision-LLMベースのUI要素バウンディングボックス推論および自己修復（Self-Healing）アルゴリズム](./vision-llm-self-healing-algorithm)**：画面の視覚的コンテキストと座標を活用し、クラス名の変更に対応する回帰テスト復旧パイプライン。

### 2. 分散エージェント & プロトコル
- **[Model Context Protocol (MCP) JSON-RPC仕様分析とツールオーケストレーション](./mcp-jsonrpc-agent-orchestration)**：Claude/Playwright標準ツールインターフェースおよびエンタープライズセキュリティゲートウェイの設計パターン。
- **[Java 25仮想スレッドとAgentScopeベースの非同期メッセージング性能分析](./springboot-virtual-threads-agentscope)**：Spring Boot環境におけるブロッキングI/Oの克服と、数万単位の同時エージェント通信処理ベンチマーク。

### 3. AIモデル & ナレッジパイプライン
- **[エンタープライズRAGアーキテクチャ：Sparse + Denseハイブリッド検索とCross-Encoderリランキング](./hybrid-rag-dense-sparse-reranking)**：ドメイン特化検索の精度向上のためのBM25と埋め込みベクトルの結合パイプライン。
- **[Llama-3.2-Visionマルチモーダルモデル ファインチューニング実践](./vision-llm-finetuning)**：韓国語Web UI画面コンポーネント認識のためのデータセット構築およびLoRAチューニング。
- **[LLMファインチューニング後の性能劣化要因および解決策の分析](./llm-finetuning-degradation-analysis)**：Catastrophic Forgettingの防止およびアライメントデータの補正研究。
- **[RAGベースのナレッジ検索パイプライン構築](./rag)**：非構造化データのチャンキングおよびメタデータフィルタリング戦略。

---

## 研究方法論および検証基準

株式会社エムパシーのエンジニアリングチームは、すべての技術研究において以下の原則を遵守しています。
1. **コードレベルの実証**：理論的モデルにとどまらず、実際に実行可能なプロトタイプまたはベンチマークコードを作成して性能を検証します。
2. **定量的データの提示**：レイテンシ、メモリ占有率、スループット（Throughput）、失敗率などの数値化された指標に基づいて技術採用の可否を決定します。
3. **商用安定性の検討**：ネットワーク断絶、スレッド枯渇、DOM遅延レンダリングなどのエッジケースに対する防御ロジックを組み込みます。

---

## 研究テーマ別の適用製品群マッピング

| 研究ドキュメント | 主要技術キーワード | 商用適用製品群 |
| :--- | :--- | :--- |
| **Playwright & CDP同期** | CDP Frame Capture, Network Idle, Layout Shift | `SyncETA`, `SyncCrawl`, `sync-module-audit` |
| **Vision-LLM自己修復アルゴリズム** | バウンディングボックス推論, セマンティックDOMアンカー, Self-Healing | `SyncETA`, `SyncCrawl` |
| **MCP JSON-RPCオーケストレーション** | JSON-RPC 2.0, HTTP SSE, A2A Tool Discovery | `SyncVerse`, 全社11大エージェントMCPサーバー |
| **仮想スレッド & AgentScope** | JDK 25 Virtual Threads, `ReentrantLock`, `MsgHub` | `sync-core`, `sync-module-ai`, 全社バックエンド |
| **ハイブリッドRAG & リランキング** | `PostgreSQL 18.6 pgvector` HNSW, `pg_trgm`, Cross-Encoder | `sync-module-rag`, `SyncInsight`, `SyncCrawl` |
| **Vision-LLMファインチューニング & 劣化分析** | Llama-3.2-Vision, LoRA, Catastrophic Forgetting防止 | `SyncETA`, `SyncLLM` オンプレミスモデル |
