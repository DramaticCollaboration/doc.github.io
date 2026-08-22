---
title: 헤드리스 REST API 레퍼런스 | SyncCMS
description: SyncCMS의 헤드리스 REST API 엔드포인트 명세, 요청/응답 JSON 스키마, HTTP 상태 코드 및 RFC 7807 에러 규격을 안내합니다.
head:
  - - meta
    - name: keywords
      content: REST API, API Reference, 헤드리스 API, JSON 스키마, cURL, 캐시 무효화 API, RFC 7807, Spring Boot 3
  - - meta
    - property: og:title
      content: 헤드리스 REST API 레퍼런스 | SyncCMS
  - - meta
    - property: og:description
      content: SyncCMS 헤드리스 REST API 엔드포인트 명세 및 표준 JSON 응답 스키마
sort: 6
---

# SyncCMS 헤드리스 REST API 레퍼런스

SyncCMS는 모든 콘텐츠, 레이아웃 및 폼 데이터를 표준 RESTful API 형태로 제공합니다.

---

## 공통 요청 헤더 (Headers)

모든 API 요청 시 아래의 HTTP 헤더를 포함할 수 있습니다:

| 헤더명 | 필수 여부 | 설명 | 예시 |
| :--- | :--- | :--- | :--- |
| `X-Sync-Site-Key` | 필수 | 대상 사이트/서비스 식별 키 | `SITE_MAIN_PORTAL` |
| `Authorization` | 선택 | 보호된 관리/배포 API 호출 시 JWT 토큰 | `Bearer eyJhbGciOi...` |
| `Accept` | 필수 | 응답 미디어 타입 | `application/json` |

---

## 1. 콘텐츠 조회 API

### `GET /api/v1/contents/{contentSlug}`

특정 채널에 발행(Published)된 최신 콘텐츠 데이터 및 SEO 메타데이터를 조회합니다.

#### 요청 예시 (cURL)
```bash
curl -X GET "https://cms.empasy.com/api/v1/contents/2026-fall-membership" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Accept: application/json"
```

#### 응답 예시 (200 OK)
```json
{
  "success": true,
  "data": {
    "contentId": "CNT_20260901_001",
    "slug": "2026-fall-membership",
    "title": "2026 하반기 신규 회원 멤버십 혜택 안내",
    "status": "PUBLISHED",
    "publishedAt": "2026-09-01T09:00:00Z",
    "version": 3,
    "fields": {
      "headline": "2026 하반기 멤버십 페스티벌",
      "description": "신규 가입 시 웰컴 쿠폰팩과 포인트 적립 혜택을 즉시 제공합니다.",
      "bannerUrl": "https://cdn.empasy.com/images/promo2026.webp",
      "ctaText": "혜택 확인하기",
      "ctaLink": "/events/welcome-pack"
    },
    "seo": {
      "metaTitle": "2026 멤버십 혜택 | Empasy",
      "metaDescription": "신규 회원 혜택과 이벤트 정보를 확인하세요.",
      "ogImage": "https://cdn.empasy.com/images/og-fall.png"
    }
  }
}
```

---

## 2. 동적 폼 제출 API

### `POST /api/v1/forms/{formKey}/submit`

웹/앱 프론트엔드에서 수집된 사용자 입력 폼 데이터를 저장하고 유효성을 검증합니다.

#### 요청 예시 (cURL)
```bash
curl -X POST "https://cms.empasy.com/api/v1/forms/contact-us/submit" \
     -H "X-Sync-Site-Key: SITE_MAIN_PORTAL" \
     -H "Content-Type: application/json" \
     -d '{
       "applicantName": "홍길동",
       "email": "user@example.com",
       "company": "엠파시",
       "inquiryType": "ARCHITECTURE_CONSULTING",
       "message": "SyncCMS 온프레미스 연동 기술 검토를 요청합니다."
     }'
```

#### 응답 예시 (201 Created)
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

## 3. 글로벌 캐시 무효화 API (CDN Purge)

### `POST /api/v1/deploy/purge-cache`

콘텐츠 갱신 시 백엔드 분산 캐시(Redis) 및 연결된 엣지 CDN 캐시를 즉시 무효화합니다.

#### 요청 예시 (cURL)
```bash
curl -X POST "https://cms.empasy.com/api/v1/deploy/purge-cache" \
     -H "Authorization: Bearer ADMIN_JWT_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "siteKey": "SITE_MAIN_PORTAL",
       "contentSlug": "2026-fall-membership"
     }'
```

---

## 4. 표준 에러 응답 규격 (RFC 7807)

오류 발생 시 RFC 7807 표준 `application/problem+json` 포맷으로 일관된 에러 정보를 반환합니다:

```json
{
  "type": "https://cms.empasy.com/errors/content-not-found",
  "title": "Content Not Found",
  "status": 404,
  "detail": "지정된 슬러그('invalid-slug')에 해당하는 발행된 콘텐츠가 존재하지 않습니다.",
  "instance": "/api/v1/contents/invalid-slug",
  "timestamp": "2026-09-01T10:20:00Z"
}
```
