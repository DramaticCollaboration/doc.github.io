---
title: "エンタープライズセキュリティ & PII 個人情報保護"
sidebarTitle: "セキュリティ & PII マスキング"
description: "機密性の高い個人情報（PII）の事前マスキング、プロンプトインジェクション防御、および企業コンプライアンス遵守のためのセキュリティガードレールについて解説します。"
head:
  - - meta
    - name: keywords
      content: PII マスキング, エンタープライズセキュリティ, プロンプトインジェクション, 個人情報保護, AI ガードレール, コンプライアンス, セキュリティガバナンス
  - - meta
    - property: og:title
      content: "エンタープライズセキュリティ & PII 個人情報保護"
  - - meta
    - property: og:description
      content: "クラウドモデルへの送信前に住民登録番号、カード番号、社内機密を根本からマスキングするエンタープライズセキュリティエンジン"
  - - meta
    - property: og:url
      content: https://doc.empasy.com/ja/syncllm/security-and-pii
sort: 5
---

# エンタープライズセキュリティ & PII 個人情報保護

企業環境において外部パブリック LLM を活用する際の最重要課題は、**顧客の個人情報（PII）および社内機密情報の漏洩防止** です。

SyncLLM は、すべてのデータパケットが外部ネットワークへ送信される前に、ゲートウェイレベルで強力なインラインセキュリティフィルターを適用します。

---

## 1. リアルタイム PII 自動マスキングパイプライン

```mermaid
flowchart LR
    RawInput["ユーザー元のプロンプト
'山田太郎 900101-1234567 の決済をキャンセルして'"]
    
    subgraph Gateway ["SyncLLM Inline Guard"]
        Detector["Regex + NER PII 検知器"]
        Vault["一時セキュリティトークン保管庫 (TTL 300s)"]
        Masker["マスキング置換モジュール"]
    end
    
    ExternalLLM["外部パブリック LLM
'山田太郎 [PII_RRN_01] の決済をキャンセルして'"]
    
    RawInput --> Detector
    Detector --> Vault
    Detector --> Masker --> ExternalLLM
```

### 主な検知およびマスキング対象
- **個人識別情報**: 住民登録番号（マイナンバー等）、外国人登録番号、パスポート番号、運転免許証番号。
- **金融情報**: クレジットカード・デビットカード番号、銀行口座番号。
- **連絡先情報**: 携帯電話番号、一般電話番号、メールアドレス。
- **システム認証キー**: AWS Access Key、OpenAI API Key、DB Connection String、社内 JWT Token。

---

## 2. プロンプトインジェクション & 情報窃取防御（Prompt Defense）

悪意のあるユーザーがシステムプロンプトを窃取したり（Jailbreak）、エージェントの権限を不正利用しようとするパターンを検知します。
- **インジェクションヒューリスティック検知**: `Ignore previous instructions`、`System prompt bypass` などの既知のインジェクションシグネチャを事前に遮断します。
- **監査および追跡可能性（Full Audit Trail）**: すべての遮断イベントと API アクセス履歴はセキュリティ運用チーム（SIEM）へリアルタイムに転送され、即座の対応を支援します。
