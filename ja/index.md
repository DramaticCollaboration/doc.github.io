---
layout: home
title: "SyncSeries 公式技術ドキュメント・開発者ガイド"

hero:
    name: "エムパシー技術ドキュメント"
    text: "SyncSeries 導入・構成・連携ガイド"
    tagline: "共通基盤（SyncBoot）上に構成された中核4製品と用途別7モジュールの構成、API仕様、運用ガイドをまとめた公式技術ドキュメントです。"
    actions:
      - text: 構成図から探す
        link: "#module-map"
        theme: brand
      - text: 連携構造を見る
        link: /ja/ecosystem/
        theme: alt
      - text: 技術用語集
        link: /ja/glossary/
        theme: alt
      - text: 統合デモポータル ↗
        link: https://sync.empasy.io/ja/
        theme: alt

head:
  - - meta
    - name: keywords
      content: エムパシー技術ドキュメント, Empasy Docs, SyncSeries マニュアル, SyncVerse, SyncETA, SyncBoot, SyncCMS, SyncInsight, SyncLLM, SyncCrawl, SyncAPIM, SyncWatch, SyncShop, SyncOps, API ドキュメント
  - - meta
    - property: og:title
      content: "エムパシー技術ドキュメント (Empasy Docs) — SyncSeries 公式開発・運用ガイド"
  - - meta
    - property: og:description
      content: "Empasy SyncSeries 主力ソリューション4種および業務別拡張モジュールの導入、アーキテクチャ、API連携、運用ガイドを提供します。"
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/

features:
  - title: SyncVerse（主力・コラボレーション・承認管理）
    details: 要件整理、タスク追跡、品質チェック結果の参照、および担当者による段階的な承認フローを一元管理します。
    link: /ja/syncverse/
    linkText: ガイドを見る
  - title: SyncETA（主力・自動テスト）
    details: ノーコードでのデスクトップシナリオ記録、UI変更への自動補正対応、デプロイ前後の画面比較チェックを提供します。
    link: /ja/synceta/
    linkText: ガイドを見る
  - title: SyncBoot（主力・業務システム基盤）
    details: Spring Boot 4.0 と Java 25 ベースの標準バックオフィス構成、組織・権限管理、電子決裁、および監査ログを提供します。
    link: /ja/syncboot/
    linkText: ガイドを見る
  - title: SyncCMS（主力・Webサイト管理）
    details: マルチサイトページの作成、レビュー・承認ワークフロー、検索・アクセシビリティ事前チェック、および多言語ローカライズを支援します。
    link: /ja/synccms/
    linkText: ガイドを見る
  - title: 共通基盤および連携仕様 (Ecosystem)
    details: 各モジュールが単一の共通基盤上で標準 MCP・REST インターフェースにより接続される構成を解説します。
    link: /ja/ecosystem/
    linkText: 構成を見る
  - title: データ・セキュリティ・業務拡張モジュール
    details: SyncInsight、SyncLLM、SyncCrawl、SyncAPIM、SyncWatch、SyncShop、SyncOps の個別ガイドは下記の表からご確認ください。
    link: "#module-map"
    linkText: 全一覧を見る

footer: Copyright © 2026 Empasy Inc. All rights reserved.
---

<div id="solutions"></div>

## 本ドキュメントポータルの役割

> 本サイト（`doc.empasy.com`）は、**開発者およびシステム運用者向けの公式技術マニュアルおよび技術用語の信頼できる唯一の情報源（SSOT）**です。
> 非開発者向けのわかりやすい製品紹介は各製品ホームページ（`*.empasy.io`）および[株式会社エムパシー公式サイト（empasy.io）](https://empasy.io/ja/pages/index.html)で、インストール不要の画面体験は[統合デモポータル（sync.empasy.io）](https://sync.empasy.io/ja/)でご利用いただけます。また、エコシステム全体の標準技術用語は[全社技術用語集（/ja/glossary/）](/ja/glossary/)でご確認いただけます。

---

## 単一の共通基盤とモジュール構成 {#module-map}

SyncSeries は互いに関連性のない11個の個別システムを別々に構築したものではなく、**共通のバックオフィス・認証・監査基盤（`SyncBoot` および共通モジュール）上で、実際の企業プロジェクトで繰り返し必要とされた業務機能をモジュール単位で整理したアーキテクチャ**です。

必要な領域から始めて、後から他のモジュールをつなぐ際も権限体系と共通仕様（REST / MCP）をそのまま使えます。下の構成図から各製品を選ぶとAPIパスと概要を確認でき、`↗`ボタンから該当ガイドへ移動できます。

<SyncArchitectureMap />

### 主力ソリューション 4種

| ソリューション | 役割概要 | ドキュメント |
| :--- | :--- | :--- |
| **SyncVerse** | 要件整理、タスク配分、品質チェック参照、担当者による段階的承認および履歴管理 | [SyncVerse ガイド →](/ja/syncverse/) |
| **SyncETA** | デスクトップシナリオ記録（Windows/macOS）、画面変更補正、デプロイ前後の画面比較テスト | [SyncETA ガイド →](/ja/synceta/) |
| **SyncBoot** | Spring Boot 4.0・Java 25・PostgreSQL 18.6 ベースの社内管理システム標準（権限・電子決裁・監査ログ） | [SyncBoot ガイド →](/ja/syncboot/) |
| **SyncCMS** | マルチサイトコンテンツ作成・レビュー・承認、検索・アクセシビリティ事前チェック、多言語ページ管理 | [SyncCMS ガイド →](/ja/synccms/) |

### 目的別拡張モジュール 7種

| 領域 | ソリューション | 役割概要 | ドキュメント |
| :--- | :--- | :--- | :--- |
| **データ・AI** | **SyncInsight** | 読み取り専用ベースの自然言語データ照会（NL2SQL）、要約レポートおよびデータソース追跡 | [SyncInsight ガイド →](/ja/syncinsight/) |
| **データ・AI** | **SyncLLM** | マルチ AI モデル統合接続、類似質問キャッシング、部門別予算管理および個人情報マスキング処理 | [SyncLLM ガイド →](/ja/syncllm/) |
| **データ・AI** | **SyncCrawl** | 構造変更対応の公開 Web データ収集、ノイズ除去および構造化ドキュメント・ベクトル保存 | [SyncCrawl ガイド →](/ja/synccrawl/) |
| **セキュリティ管理** | **SyncAPIM** | トラフィックベースの未登録 API 識別、OpenAPI 仕様不一致診断、脅威検知および機密情報マスキング | [SyncAPIM ガイド →](/ja/syncapim/) |
| **セキュリティ管理** | **SyncWatch** | 国内外の主要セキュリティ脆弱性情報の収集・正規化、コード点検および API 防御ルールの管理・配信 | [SyncWatch ガイド →](/ja/syncwatch/) |
| **業務・サービス** | **SyncShop** | 8つの独立マイクロサービスベースの EC、最低マージン基準確認による価格調整および旧価格復元 | [SyncShop ガイド →](/ja/syncshop/) |
| **業務・サービス** | **SyncOps** | SI プロジェクト契約単価対比の実投入損益、要員配置ガント、4大保証保険・下請期限および研究ノート管理 | [SyncOps ガイド →](/ja/syncops/) |

---

## 開発標準・プロジェクト方法論・資料室

| 区分 | 内容概要 | リンク |
| :--- | :--- | :--- |
| **全社技術用語集** | MCP、A2A、AgentScope Java、NL2SQL、GraphRAG、HITL、eBPF、FinOps など標準技術用語の定義 | [全社技術用語集 →](/ja/glossary/) |
| **共通モジュールおよび SDK** | 共通コア（`sync-core`）、ドメイン共通モジュール（`sync-module-*`）、連携 SDK ガイド | [開発者センター →](/ja/sdk/) · [共通モジュール →](/ja/ecosystem/shared-modules-and-sdk) |
| **事業全周期方法論** | 提案・分析・設計・実装・テスト・移行の6段階遂行手順および点検基準 | [方法論概要 →](/ja/methodology/) |
| **標準成果物様式（125種）** | 90-8-2 全社標準フォーマットで統一された段階別オフィス文書125種、同期マークダウン14種、規模別 Tailoring プリセット | [標準成果物様式 →](/ja/methodology/enterprise-document-templates) |
| **アジャイルおよび Git 協業** | スクラムバン（Scrumban）運用手順、Git ブランチ戦略、スプリントチェックリスト | [アジャイルガイド →](/ja/agile/) |
| **紹介資料・提案書（PDF）** | 要約パンフレット、統合提案書および製品別個別提案書 PDF 一覧 | [提案書資料室 →](/ja/proposals/) |
| **SyncETA インストーラー** | Windows・macOS デスクトップアプリ公式ダウンロードページ | [SyncETA ダウンロード ↗](https://empasy.io/ja/download_eta.html) |

---

## 主な現場導入事例

株式会社エムパシーのエンジニアリングチームは、教育、流通・家電、モビリティ・セキュリティ、公共・エネルギー分野の企業プロジェクトで培った経験をもとに SyncSeries を発展させてきました。

| 産業分野 | 適用モジュール | 主な実施内容 |
| :--- | :--- | :--- |
| **教育プラットフォーム企業** | **SyncETA** | 同時接続2,000名規模のデジタル教育プラットフォームに自動テスト体制を導入し、定期回帰テスト時間を4時間から約45分に短縮 |
| **流通・家電企業** | **SyncBoot** | 既存の経営管理およびバックオフィス構造を標準基盤とモジュール構成へ刷新し、未使用テーブルを整理してデプロイ周期を月単位から週単位へ短縮 |
| **建材・教育ポータル** | **SyncCMS** | 海外法人別の多言語サイトと大容量コンテンツポータルを単一管理プラットフォームへ統合し、新規国別ページの開設と保守手順を簡素化 |
| **セキュリティ・モビリティ企業** | **SyncAPIM · SyncBoot** | 大容量 API ログの高速検索およびセキュリティ監視環境を構築し、リアルタイムの不正アクセス検知体制を整備 |
