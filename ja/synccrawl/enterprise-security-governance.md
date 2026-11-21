---
title: エンタープライズセキュリティ & 閉域網ガバナンス
description: SSRF防御、社内閉域網（Air-Gapped）デプロイ、Private LLM連携、きめ細かいRBACおよび監査証跡を提供するSyncCrawlのセキュリティアーキテクチャを説明します。
sort: 5
---

# エンタープライズセキュリティ & 閉域網ガバナンス

企業のインフラ環境で Web クローラーを運用する際に求められるセキュリティ要件とコンプライアンス要件を満たすための、SyncCrawl のセキュリティアーキテクチャを紹介します。

---

## SSRF (Server-Side Request Forgery) 防御構造

Web クローラーは外部 URL にアクセスしてデータを収集するため、未承認のリクエストや悪意のある内部 IP へのアクセス試行からシステムを保護する必要があります。

SyncCrawl は、独自開発の URL 検証モジュールである **`BrowserNavigateUrlValidator`** を通じて多層遮断ポリシーを適用します。

```mermaid
graph TD
    REQ["クローリング URL リクエスト入力"] --> VAL{"BrowserNavigateUrlValidator"}
    
    VAL -->|"1. Loopback ブロック"| DROP1["127.0.0.1 / localhost ブロック"]
    VAL -->|"2. プライベートネットワーク IP ブロック"| DROP2["10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 ブロック"]
    VAL -->|"3. クラウドメタデータブロック"| DROP3["169.254.169.254 AWS/Azure メタデータブロック"]
    VAL -->|"4. 非標準プロトコルブロック"| DROP4["file://, gopher://, ftp:// ブロック"]
    VAL -->|"5. DNS Rebinding 検証"| DROP5["名前解決された実際の IP 帯域の二次検証"]
    
    VAL -->|"すべてのセキュリティ検証を通過"| PERMIT["安全な外部Webサイトのブラウジングを許可"]
```

### 主な SSRF 防御ポリシー
- **ループバックおよびプライベートネットワークの遮断**: `localhost`、`127.0.0.1`、RFC 1918 プライベート IP 帯域へのアクセスを事前に遮断します。
- **クラウドインスタンスメタデータの保護**: AWS/Azure/GCP のメタデータエンドポイント（`169.254.169.254`）へのアクセスを制限します。
- **DNS Rebinding 防御**: ドメイン名解決後に確認された実際の宛先 IP がプライベートネットワーク帯域でないかを、接続直前に二重で検証します。
- **プロトコル制限**: `http://` および `https://` 以外の非標準スキーム（`file://`、`jar://`、`dict://`）を排除します。

---

## 社内閉域網 (Air-Gapped) インフラのサポート

外部インターネットから隔離されたオンプレミスの閉域網環境においても、SyncCrawl は独立して動作できます。

```mermaid
graph TD
    subgraph "社内オンプレミス閉域網 (Air-Gapped Network)"
        CONSOLE["smart-crawling-console"]
        SERVER["smart-crawling-server"]
        AGENT["smart-crawling-agent"]
        
        subgraph "社内 AI インフラ"
            VLLM["社内 Private LLM - vLLM / Ollama"]
            EMB["社内埋め込みモデル - BGE-M3"]
            VDB[("社内 pgvector / Milvus")]
        end
        
        CONSOLE --> SERVER
        SERVER --> AGENT
        SERVER --> VLLM & EMB & VDB
    end
    
    OUTSIDE(("外部インターネット / DMZ プロキシ"))
    AGENT -.->|"セキュアフォワードプロキシ経由で収集"| OUTSIDE
```

- **社内 Private LLM 連携**: 外部 SaaS API を呼び出すことなく、社内サーバーに構築された `vLLM`、`Ollama`、`LocalAI` と連携して外部へのデータ漏洩リスクを低減します。
- **セキュアプロキシ連携**: 外部サイトの収集が必要な場合、DMZ 内の認可されたフォワードプロキシ（Forward Proxy）を経由してのみトラフィックを送信します。
- **Air-Gapped ビルドのサポート**: 社内閉域網レジストリ（Harbor、Nexus）からコンテナイメージおよびパッケージを供給できるように構成されています。

---

## 多層 RBAC および実行監査追跡 (Audit Trail)

すべてのクローリングジョブと収集データの閲覧は、ロールベースアクセス制御と監査ログによって管理されます。

### 1. ロールベースアクセス制御 (RBAC)
- **クローリングエンジニア (Admin)**: シナリオ作成、スケジューリング登録、セレクタルールセット管理
- **業務アナリスト (Analyst)**: データ照会、RAG 検索テスト、結果レポートのダウンロード
- **セキュリティ管理者 (Auditor)**: クローリングアクセス履歴、IP アクセスログ、セキュリティポリシーのモニタリング

### 2. 実行監査ログの記録
収集ジョブが実行される際、以下の情報がデータベースに保管されます。
- 実行ジョブ ID およびリクエスト元アカウント/IP
- 対象 URL および最終到達 URL（リダイレクト追跡）
- 収集時刻、所要時間、HTTP レスポンスコード
- 収集されたファイルおよび HTML の SHA-256 ハッシュ値と保存パス
- セレクタ復旧（Self-Healing）発生の有無および変更前後のセレクタ差分（Diff）
