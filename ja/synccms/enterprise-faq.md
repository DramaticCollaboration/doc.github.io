---
title: エンタープライズ運用および技術 FAQ | SyncCMS
description: SyncCMS 導入時によくある技術的な質問（ソースコード提供範囲、ライセンス、インフラ仕様、PostgreSQL インデックス作成）と技術サポートチャネルをご案内します。
head:
  - - meta
    - name: keywords
      content: SyncCMS FAQ, エンタープライズ CMS, ソースコード公開, インフラ仕様, PostgreSQL GIN インデックス, 電子決裁連携, 導入お問い合わせ
  - - meta
    - property: og:title
      content: エンタープライズ運用および技術 FAQ | SyncCMS
  - - meta
    - property: og:description
      content: SyncCMS ライセンス、ソースコード公開範囲、インフラ推奨仕様および PostgreSQL パフォーマンスチューニングガイド
sort: 7
---

# エンタープライズ運用および技術 FAQ

SyncCMS の導入および運用を検討中のエンジニアリングおよびインフラ担当者向けの技術 Q&A とシステム推奨仕様です。

---

## よくある質問 (FAQ)

### Q1. ビジネスソースコードはどの範囲まで提供されますか？
**A. Spring Boot 4.0 コアアプリケーションソースと RDBMS DDL 全体が透明性をもって提供されます。**  
SyncCMS はバイナリ納品方式のブラックボックスソフトウェアではありません。コア Controller、Service ロジックおよび管理 UI（Vue 3）、ユーザー Web（Nuxt 3）のソースコード全体が提供されるため、お客様の開発チームが社内のセキュリティ規定やビジネス要件に合わせて直接機能を修正し、恒久的なデジタル資産として内製化することができます。

### Q2. トラフィックやコンテンツ数が増加した場合、追加ライセンス費用は発生しますか？
**A. 追加ライセンス費用は発生しません。**  
海外製 SaaS 型 CMS（Contentful、Sanity など）とは異なり、API 呼び出し回数、管理者アカウント数、トラフィック量に比例する従量課金はありません。オンプレミスまたはプライベートクラウドへ1回構築した後は、恒久的に運用することができます。

### Q3. 外部インターネットが完全に遮断された社内閉域網でも AI 機能を利用できますか？
**A. 社内オンプレミスインフラを通じて完全にサポートされます。**  
社内 GPU サーバーに vLLM または Ollama を構築してオープンウェイトモデル（Llama-3、EXAONE、Solar など）をデプロイした後、AgentScope Java（`io.agentscope:agentscope-harness`）を介してバックエンドと連携します。外部ネットワークへのデータ流出なしに AI 下書き生成、PII 匿名化、RAG ナレッジ検索を実行できます。

### Q4. 既存の社内グループウェア電子決裁および基幹系 ERP とはどのように連携しますか？
**A. 標準 Webhook およびマルチ DB トランザクションを通じて連携されます。**  
コンテンツ配信前に社内グループウェア API を呼び出して起案を作成し、最終承認 Webhook を受信した際に RDBMS コミット、ERP プロモーションマスタ同期、分散キャッシュ無効化が順次実行されます。

---

## システム推奨インフラ仕様

| コンポーネント | 最小仕様 (開発/テスト) | 推奨仕様 (本番環境 1,000+ RPS) |
| :--- | :--- | :--- |
| **API サーバー (Spring Boot)** | 2 Core CPU, 4GB RAM | 4 Core CPU, 8GB RAM (2台以上のロードバランシング) |
| **JVM オプション** | `-Xms2g -Xmx2g` | `-Xms4g -Xmx4g -XX:+UseG1GC` |
| **データベース (PostgreSQL)** | 2 Core CPU, 4GB RAM | 8 Core CPU, 16GB RAM, SSD ストレージ |
| **キャッシュサーバー (Redis)** | 1 Core CPU, 2GB RAM | 2 Core CPU, 4GB RAM (Sentinel または Cluster) |
| **社内 AI サーバー (任意)** | CPU Only (量子化モデル) | NVIDIA A10G / L40S GPU (vLLM 稼働) |
| **サポートデータベース** | PostgreSQL 18.6+ (`pgvector`, `JSONB`) | PostgreSQL 18.6 (`pgvector/pgvector:pg18` 全社標準) |

---

## PostgreSQL JSONB インデックスチューニングガイド

SyncCMS は柔軟な UI ブロックおよびフォームスキーマ保存のために PostgreSQL の `JSONB` 型を使用します。高速照会のために GIN インデックスを設定します：

```sql
-- UI ブロックデータ照会用 GIN インデックス作成
CREATE INDEX idx_cms_content_fields_gin 
ON tb_cms_content USING gin (fields jsonb_path_ops);

-- 特定フィールド（例：headline）の条件検索速度最適化
CREATE INDEX idx_cms_content_headline 
ON tb_cms_content ((fields->>'headline'));
```

---

## 技術サポートおよび導入相談

SyncCMS に関する詳細な技術検討、PoC 支援、アーキテクチャコンサルティングが必要な場合は、以下のチャネルまでお問い合わせください。

- **技術および導入のお問い合わせ**: `poh@empasy.com`
- **お電話でのお問い合わせ**: `+82-507-1360-8169`
- **運営会社**: 株式会社エムパシー ソリューション開発チーム | Empasy SyncSeries
