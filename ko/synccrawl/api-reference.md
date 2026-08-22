---
title: REST API & MCP Tool 레퍼런스
description: SyncCrawl의 핵심 수집 작업 제어, 즉시 실행, 수집 데이터 조회 및 Model Context Protocol(MCP) 도구 명세를 안내합니다.
sort: 6
---

# SyncCrawl REST API & MCP Tool 레퍼런스

SyncCrawl은 외부 시스템 및 AI 에이전트와의 연계를 위해 **표준 RESTful API**와 **Model Context Protocol (MCP)** 인터페이스를 제공합니다.

---

## 인증 (Authentication)

모든 API 요청은 HTTP 헤더에 유효한 JWT 토큰을 포함해야 합니다.

```http
Authorization: Bearer <YOUR_ACCESS_TOKEN>
X-Sync-Tenant-Id: TENANT_DEFAULT
Content-Type: application/json
```

---

## 1. 크롤링 작업 등록 API (Create Crawling Job)

새로운 정기 또는 일회성 크롤링 작업을 등록합니다.

### `POST /api/v1/crawl/jobs`

#### 요청 예시 (cURL)
```bash
curl -X POST "https://crawl.empasy.com/api/v1/crawl/jobs" \
     -H "Authorization: Bearer ${SYNC_TOKEN}" \
     -H "Content-Type: application/json" \
     -d '{
       "jobName": "금융감독원 보도자료 수집",
       "targetUrl": "https://www.fss.or.kr/fss/bbs/B0000188/list.do",
       "cronExpression": "0 0 9 * * ?",
       "selectors": {
         "listRow": ".board-list tbody tr",
         "title": ".subject a",
         "publishedAt": ".date",
         "link": ".subject a::attr(href)"
       },
       "enableRagSync": true,
       "ragConfig": {
         "targetVectorDb": "PGVECTOR",
         "embeddingModel": "BGE-M3",
         "chunkSize": 500,
         "chunkOverlap": 50
       }
     }'
```

#### 응답 예시 (201 Created)
```json
{
  "code": "SUCCESS",
  "data": {
    "jobId": "JOB_20260823_0042",
    "jobName": "금융감독원 보도자료 수집",
    "status": "SCHEDULED",
    "nextRunAt": "2026-08-24T09:00:00Z",
    "createdAt": "2026-08-23T07:10:00Z"
  }
}
```

---

## 2. 크롤링 즉시 실행 트리거 API (Trigger Job Run)

스케줄과 무관하게 특정 작업을 즉시 분산 워커에 할당하여 실행합니다.

### `POST /api/v1/crawl/jobs/{jobId}/trigger`

#### 요청 예시 (cURL)
```bash
curl -X POST "https://crawl.empasy.com/api/v1/crawl/jobs/JOB_20260823_0042/trigger" \
     -H "Authorization: Bearer ${SYNC_TOKEN}"
```

#### 응답 예시 (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "executionId": "EXEC_20260823_9011",
    "jobId": "JOB_20260823_0042",
    "status": "RUNNING",
    "allocatedAgent": "smart-crawling-agent-worker-02",
    "startedAt": "2026-08-23T07:11:05Z"
  }
}
```

---

## 3. 수집 데이터 조회 API (Fetch Crawled Data)

실행 완료된 작업의 수집 결과와 추출된 데이터를 조회합니다.

### `GET /api/v1/crawl/results/{executionId}`

#### 요청 예시 (cURL)
```bash
curl -X GET "https://crawl.empasy.com/api/v1/crawl/results/EXEC_20260823_9011" \
     -H "Authorization: Bearer ${SYNC_TOKEN}"
```

#### 응답 예시 (200 OK)
```json
{
  "code": "SUCCESS",
  "data": {
    "executionId": "EXEC_20260823_9011",
    "totalCount": 10,
    "elapsedTimeMs": 2450,
    "selfHealingOccurred": false,
    "items": [
      {
        "id": "ITEM_001",
        "title": "2026년 하반기 전자금융보안 가이드라인 개정안내",
        "publishedAt": "2026-08-22",
        "detailUrl": "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=14092",
        "vectorSyncStatus": "INDEXED",
        "vectorId": "VEC_FSS_14092"
      }
    ]
  }
}
```

---

## 4. Model Context Protocol (MCP) 도구 명세

SyncCrawl은 AI 에이전트(SyncVerse 등)가 자연어 추론 중 직접 웹 수집을 도구로 호출할 수 있도록 **MCP Tool 규격**을 제공합니다.

### `synccrawl_collect_page`
- **설명**: 지정된 웹 URL을 방문하여 텍스트 및 테이블 데이터를 정제하여 반환합니다.
- **파라미터**:
  ```json
  {
    "url": { "type": "string", "description": "수집할 대상 URL" },
    "extractSelectors": { "type": "object", "description": "추출할 필드별 셀렉터 (선택)" },
    "waitForSelector": { "type": "string", "description": "렌더링 완료 대기용 셀렉터" }
  }
  ```

### `synccrawl_query_knowledge`
- **설명**: SyncCrawl 지식베이스에 축적된 벡터 데이터를 시맨틱 검색하여 답변 근거를 반환합니다.
- **파라미터**:
  ```json
  {
    "query": { "type": "string", "description": "사용자 질의 텍스트" },
    "category": { "type": "string", "description": "필터링할 지식 카테고리" },
    "topK": { "type": "number", "default": 5, "description": "반환할 유사 문서 수" }
  }
  ```
