---
title: "Headless REST API Reference | SyncCMS"
description: "Headless REST API endpoint specifications, request/response JSON schemas, HTTP status codes, and RFC 7807 error format for SyncCMS."
head:
  - - meta
    - name: keywords
      content: "REST API, API Reference, Headless API, JSON Schema, cURL, Cache Purge API, RFC 7807, Spring Boot 4.0"
  - - meta
    - property: og:title
      content: "Headless REST API Reference | SyncCMS"
  - - meta
    - property: og:description
      content: "SyncCMS headless REST API endpoint specifications and standard JSON response schemas"
sort: 6
---

# SyncCMS Headless REST API Reference

SyncCMS delivers all content, layouts, and form data through standard RESTful APIs.

---

## Common Request Headers

Include the following HTTP headers when making API requests:

| Header | Required | Description | Example |
| :--- | :--- | :--- | :--- |
| `X-Sync-Site-Key` | Required | Target site or service identifier key | `SITE_MAIN_PORTAL` |
| `Authorization` | Optional | JWT token for protected management and deployment APIs | `Bearer eyJhbGciOi...` |
| `Accept` | Required | Response media type | `application/json` |

---

## 1. Content Retrieval API

### `GET /api/v1/cms/contents/{contentSlug}`

Retrieves the latest published content data and SEO metadata for a specific channel.

#### Request Example (cURL)
```bash
curl -X GET "https://empasy.io/en/solutions/sync-cms.htmlapi/v1/cms/contents/2026-fall-membership" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Accept: application/json"
```

#### Response Example (200 OK)
```json
{
  "success": true,
  "data": {
    "contentId": "CNT_20260901_001",
    "slug": "2026-fall-membership",
    "title": "Fall 2026 New Member Benefits Guide",
    "status": "PUBLISHED",
    "publishedAt": "2026-09-01T09:00:00Z",
    "version": 3,
    "fields": {
      "headline": "Fall 2026 Membership Festival",
      "description": "Receive a welcome coupon pack and instant reward points upon signing up.",
      "bannerUrl": "https://empasy.io/en/solutions/sync-cms.htmlimages/promo2026.webp",
      "ctaText": "View Benefits",
      "ctaLink": "/events/welcome-pack"
    },
    "seo": {
      "metaTitle": "2026 Membership Benefits | Empasy",
      "metaDescription": "Explore new member benefits and promotional event details.",
      "ogImage": "https://empasy.io/en/solutions/sync-cms.htmlimages/og-fall.png"
    }
  }
}
```

---

## 2. Dynamic Form Submission API

### `POST /api/v1/cms/forms/{formKey}/submit`

Validates and stores user-submitted form data collected from web and mobile frontends.

#### Request Example (cURL)
```bash
curl -X POST "https://empasy.io/en/solutions/sync-cms.htmlapi/v1/cms/forms/contact-us/submit" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Content-Type: application/json" \
     -d '{
       "applicantName": "Jane Doe",
       "email": "user@example.com",
       "company": "Empasy Inc.",
       "inquiryType": "ARCHITECTURE_CONSULTING",
       "message": "Requesting a technical review for SyncCMS on-premises integration."
     }'
```

#### Response Example (201 Created)
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

## 3. Global Cache Invalidation API (CDN Purge)

### `POST /api/v1/cms/deploy/purge-cache`

Immediately invalidates the backend distributed cache (Redis) and connected edge CDN caches whenever content is updated.

#### Request Example (cURL)
```bash
curl -X POST "https://empasy.io/en/solutions/sync-cms.htmlapi/v1/cms/deploy/purge-cache" \
     -H "Authorization: Bearer ADMIN_JWT_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "siteKey": "SITE_MAIN_PORTAL",
       "contentSlug": "2026-fall-membership"
     }'
```

---

## 4. Standard Error Response Specification (RFC 7807)

When an error occurs, consistent error details are returned in the RFC 7807 standard `application/problem+json` format:

```json
{
  "type": "https://empasy.io/en/solutions/sync-cms.htmlerrors/content-not-found",
  "title": "Content Not Found",
  "status": 404,
  "detail": "No published content exists for the specified slug ('invalid-slug').",
  "instance": "/api/v1/cms/contents/invalid-slug",
  "timestamp": "2026-09-01T10:20:00Z"
}
```
