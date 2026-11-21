---
title: "SyncAdmin: AI連携に最適化されたVue 3バックオフィスフレームワーク"
description: Vue 3、Vite、TypeScriptをベースに構築されたインテリジェントな管理ダッシュボードテンプレートです。AIエージェントのモニタリング、動的なデータ可視化、きめ細かな権限制御を通じて、エンタープライズシステムの構築を支援します。
head:
  - - meta
    - name: keywords
      content: SyncAdmin, Vue 3, Vite, TypeScript, 管理システムテンプレート, バックオフィス開発, 管理ダッシュボード, フロントエンド開発, AIダッシュボード, エンタープライズシステム, Pinia, 多言語対応, 権限制御, テーマカスタマイズ, UIフレームワーク, ERPシステム, CRMシステム, データ可視化, エムパシー, SyncSeries
  - - meta
    - property: og:title
      content: "SyncAdmin: AI連携に最適化されたVue 3バックオフィスフレームワーク"
  - - meta
    - property: og:description
      content: Vue 3、Vite、TypeScriptをベースに構築されたインテリジェントな管理ダッシュボードテンプレートです。
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncadmin/
order: 1
dir:
  order: 3
---

# SyncAdmin: インテリジェント・バックオフィスシステム向けフロントエンド標準（アーカイブ）

> [!NOTE]
> **全社フロントエンド標準の統合に関するご案内**: `SyncAdmin`の設計資産およびコンポーネント体系は、現在SyncSeries 11大エンタープライズ製品群（`SyncVerse`、`SyncInsight`、`SyncLLM`、`SyncAPIM`、`SyncWatch`、`SyncBoot`、`SyncCMS`、`SyncShop`、`SyncOps`、`SyncETA`、`SyncCrawl`）の**`admin/`（Vue 3 + Vben Admin + DB単一ソース動的ルーティング）**標準フロントエンドアーキテクチャとして全面的に組み込まれました。

SyncAdminは、Vue 3、Vite、TypeScriptをベースに設計されたエンタープライズ管理システム向けフロントエンド標準です。単なるデータCRUDインターフェースにとどまらず、SyncSeriesの11大AIエージェント（`SyncVerse`、`SyncInsight`、`SyncLLM`、`SyncAPIM`、`SyncWatch`、`SyncBoot`、`SyncCMS`、`SyncShop`、`SyncOps`、`SyncETA`、`SyncCrawl`）と有機的に連携し、システムの状態をモニタリングして制御できるインテリジェントなダッシュボード環境を提供します。

## 1. AIフレンドリーなフロントエンドアーキテクチャ

モダンなWeb技術スタックをベースに、データ駆動型の意思決定とAIモデル連携に最適化された構造を備えています。

- **モダンな技術スタック**: Vue 3（Composition API）、Vite、Piniaをベースとした高速かつ軽量なレンダリング性能により、大量のログデータやAI分析結果を遅延なく画面に表示します。
- **動的UI構成**: データ構造が変更された場合やAIエージェントが新しい形式の分析結果を返却した場合でも、柔軟に応答してレイアウトを構成できる再利用可能なコンポーネントを内蔵しています。
- **モノレポベースの管理**: PnpmおよびTurboRepoを活用し、大規模プロジェクトや複数のAIサービスが統合された複雑なシステムのコードを効率的に管理します。

## 2. コア運用・管理機能

エンタープライズ環境で必須となる管理機能を標準搭載し、開発スピードを向上させます。

- **インテリジェントな権限制御およびDB動的ルーティング**: 単なるページアクセス制御にとどまらず、データベース（`sys_permission`、`sys_role_permission`）を単一ソース（Single Source of Truth）とする`PermissionModeEnum.BACK`動的ルーティングおよびボタン単位のきめ細かな権限管理（RBAC）を標準サポートしています。
- **Zero-Mock実データ連携**: ハードコードされたダミーデータを使用せず、バックエンドの全社標準Canonical URL（`/api/v1/{product}/...`）と1対1で透過的に連携し、高水準な標準コンポーネント（`BasicTable`、`BasicModal`、`BasicForm`、`BasicDrawer`）を通じて一貫性のあるエンタープライズUIを提供します。
- **多言語およびテーマ対応**: 国際化（i18n）モジュールを通じて多言語環境を標準サポートしており、企業のブランドガイドラインに合わせたテーマカスタマイズやダークモードをシームレスに提供します。

## 3. 導入および活用領域

SyncAdminは社内システムの構築に必要なすべてのUI資産を統合して提供するため、多様なB2Bソリューションの基盤となります。

- **統合管制ダッシュボード**: AIエージェントの活動ログ、ステータス、データ収集状況をリアルタイムに可視化する管制センターとしての役割を担います。
- **エンタープライズコアソリューション**: ERP、CRM、人事管理など、複雑なビジネスロジックや多数の入力フォームを必要とするシステムの開発期間を大幅に短縮します。
- **データ分析画面**: 多様なUIフレームワーク（Ant Design Vueなど）およびチャートライブラリをサポートしており、データを直感的に把握できるレポート画面を容易に構成できます。

---

## 4. 全社11大製品群フロントエンド（`admin/`）標準マッピング状況

現在、`SyncAdmin`アーキテクチャが組み込まれている11大エンタープライズ製品群のフロントエンドパッケージおよび動的権限APIマッピング仕様は以下のとおりです。

| 製品群 | フロントエンドパッケージ名（`package.json`） | ルーティングモード | 動的メニュー・権限認可Canonical API |
| :--- | :--- | :---: | :--- |
| **SyncVerse** | `@empasy/sync-verse-admin` | `BACK` | `/api/v1/verse/sys/permission/getUserPermissionByToken` |
| **SyncInsight** | `@empasy/sync-insight-admin` | `BACK` | `/api/v1/insight/sys/permission/getUserPermissionByToken` |
| **SyncLLM** | `@empasy/sync-llm-admin` | `BACK` | `/api/v1/llm/sys/permission/getUserPermissionByToken` |
| **SyncAPIM** | `@empasy/sync-apim-admin` | `BACK` | `/api/v1/apim/sys/permission/getUserPermissionByToken` |
| **SyncWatch** | `@empasy/sync-watch-admin` | `BACK` | `/api/v1/watch/sys/permission/getUserPermissionByToken` |
| **SyncBoot** | `@empasy/sync-boot-admin` | `BACK` | `/api/v1/boot/sys/permission/getUserPermissionByToken` |
| **SyncCMS** | `@empasy/sync-cms-admin` | `BACK` | `/api/v1/cms/sys/permission/getUserPermissionByToken` |
| **SyncShop** | `@empasy/sync-shop-admin` | `BACK` | `/api/v1/shop/sys/permission/getUserPermissionByToken` |
| **SyncOps** | `@empasy/sync-ops-admin` | `BACK` | `/api/v1/ops/sys/permission/getUserPermissionByToken` |
| **SyncETA** | `@empasy/sync-eta-admin` | `BACK` | `/api/v1/eta/sys/permission/getUserPermissionByToken` |
| **SyncCrawl** | `@empasy/sync-crawl-admin` | `BACK` | `/api/v1/crawl/sys/permission/getUserPermissionByToken` |
