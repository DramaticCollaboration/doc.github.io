---
title: 헤드리스 REST API 레퍼런스
description: SyncCMS의 주요 헤드리스 REST API 엔드포인트와 표준 JSON 응답 스키마 규격을 안내합니다.
sort: 6
---

# SyncCMS 헤드리스 REST API 레퍼런스

SyncCMS는 모든 콘텐츠와 메타데이터를 표준 RESTful API 형태로 제공합니다.

---

## 1. 콘텐츠 조회 API (Content Fetch)

### `GET /api/v1/contents/{contentSlug}`

특정 채널에 발행된 최신 콘텐츠 데이터를 조회합니다.

#### 요청 예시 (cURL)
```bash
curl -X GET "https://cms.empasy.com/api/v1/contents/2026-summer-promo" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Accept: application/json"
```

#### 응답 예시 (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "contentId": "CNT_20260822_001",
    "slug": "2026-summer-promo",
    "title": "올여름 가장 특별한 2배 포인트 적립 페스티벌",
    "status": "PUBLISHED",
    "publishedAt": "2026-08-22T14:00:00Z",
    "fields": {
      "headline": "올여름 가장 특별한 2배 포인트 적립 페스티벌",
      "subDescription": "신규 회원 가입 시 웰컴 쿠폰팩 즉시 지급",
      "bannerImageUrl": "https://cdn.empasy.com/images/promo2026.webp",
      "ctaText": "쿠폰팩 받기",
      "ctaLink": "/events/welcome-pack"
    },
    "seo": {
      "metaTitle": "2026 하반기 프로모션 총정리 | Empasy Portal",
      "metaDescription": "올여름 2배 포인트 적립 혜택과 웰컴 쿠폰팩을 확인하세요.",
      "ogImage": "https://cdn.empasy.com/images/og-promo.png"
    }
  }
}
```

---

## 2. 글로벌 캐시 무효화 API (CDN Purge)

### `POST /api/v1/deploy/purge-cache`

연결된 모든 헤드리스 프론트엔드 및 엣지 CDN 캐시를 즉시 무효화합니다.

```bash
curl -X POST "https://cms.empasy.com/api/v1/deploy/purge-cache" \
     -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "siteKey": "SITE_MAIN_PORTAL",
       "contentSlug": "2026-summer-promo"
     }'
```
