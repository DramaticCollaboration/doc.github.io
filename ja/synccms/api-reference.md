---
title: ヘッドレス REST API リファレンス | SyncCMS
description: SyncCMS のヘッドレス REST API エンドポイント仕様、リクエスト/レスポンス JSON スキーマ、HTTP ステータスコードおよび RFC 7807 エラー規格をご案内します。
head:
  - - meta
    - name: keywords
      content: REST API, API Reference, ヘッドレス API, JSON スキーマ, cURL, キャッシュ無効化 API, RFC 7807, Spring Boot 4.0
  - - meta
    - property: og:title
      content: ヘッドレス REST API リファレンス | SyncCMS
  - - meta
    - property: og:description
      content: SyncCMS ヘッドレス REST API エンドポイント仕様および標準 JSON レスポンススキーマ
sort: 6
---

# SyncCMS ヘッドレス REST API リファレンス

SyncCMS はすべてのコンテンツ、レイアウトおよびフォームデータを標準 RESTful API 形式で提供します。

---

## 共通リクエストヘッダー (Headers)

すべての API リクエスト送信時に、以下の HTTP ヘッダーを含めることができます：

| ヘッダー名 | 必須有無 | 説明 | 例 |
| :--- | :--- | :--- | :--- |
| `X-Sync-Site-Key` | 必須 | 対象サイト/サービス識別キー | `SITE_MAIN_PORTAL` |
| `Authorization` | 任意 | 保護された管理/デプロイ API 呼び出し時の JWT トークン | `Bearer eyJhbGciOi...` |
| `Accept` | 必須 | レスポンスメディアタイプ | `application/json` |

---

## 1. コンテンツ照会 API

### `GET /api/v1/cms/contents/{contentSlug}`

指定されたチャネルに公開（Published）されている最新のコンテンツデータおよび SEO メタデータを照会します。

#### リクエスト例 (cURL)
```bash
curl -X GET "https://cms.empasy.io/api/v1/cms/contents/2026-fall-membership" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Accept: application/json"
```

#### レスポンス例 (200 OK)
```json
{
  "success": true,
  "data": {
    "contentId": "CNT_20260901_001",
    "slug": "2026-fall-membership",
    "title": "2026 下半期新規会員メンバーシップ特典のご案内",
    "status": "PUBLISHED",
    "publishedAt": "2026-09-01T09:00:00Z",
    "version": 3,
    "fields": {
      "headline": "2026 下半期メンバーシップフェスティバル",
      "description": "新規登録時にウェルカムクーポンパックとポイント付与特典を即時提供します。",
      "bannerUrl": "https://cms.empasy.io/images/promo2026.webp",
      "ctaText": "特典を確認する",
      "ctaLink": "/events/welcome-pack"
    },
    "seo": {
      "metaTitle": "2026 メンバーシップ特典 | Empasy",
      "metaDescription": "新規会員特典とイベント情報をご確認ください。",
      "ogImage": "https://cms.empasy.io/images/og-fall.png"
    }
  }
}
```

---

## 2. 動的フォーム送信 API

### `POST /api/v1/cms/forms/{formKey}/submit`

Web/アプリフロントエンドから収集されたユーザー入力フォームデータを保存し、妥当性を検証します。

#### リクエスト例 (cURL)
```bash
curl -X POST "https://cms.empasy.io/api/v1/cms/forms/contact-us/submit" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Content-Type: application/json" \
     -d '{
       "applicantName": "山田 太郎",
       "email": "user@example.com",
       "company": "株式会社エムパシー",
       "inquiryType": "ARCHITECTURE_CONSULTING",
       "message": "SyncCMS オンプレミス連携の技術検討を依頼します。"
     }'
```

#### レスポンス例 (201 Created)
```json
{
  "success": true,
  "data": {
    "submissionId": "SUB_20260901_9812",
    "receivedAt": "2026-09-01T10:15:30Z"
  }
}
```

---

## 3. グローバルキャッシュ無効化 API (CDN Purge)

### `POST /api/v1/cms/deploy/purge-cache`

コンテンツ更新時に、バックエンド分散キャッシュ（Redis）および接続されたエッジ CDN キャッシュを即時に無効化します。

#### リクエスト例 (cURL)
```bash
curl -X POST "https://cms.empasy.io/api/v1/cms/deploy/purge-cache" \
     -H "Authorization: Bearer ADMIN_JWT_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "siteKey": "SITE_MAIN_PORTAL",
       "contentSlug": "2026-fall-membership"
     }'
```

---

## 4. 標準エラーレスポンス規格 (RFC 7807)

エラー発生時には、RFC 7807 標準の `application/problem+json` フォーマットで一貫したエラー情報を返却します：

```json
{
  "type": "https://cms.empasy.io/errors/content-not-found",
  "title": "Content Not Found",
  "status": 404,
  "detail": "指定されたスラッグ（'invalid-slug'）に該当する公開済みコンテンツが存在しません。",
  "instance": "/api/v1/cms/contents/invalid-slug",
  "timestamp": "2026-09-01T10:20:00Z"
}
```
