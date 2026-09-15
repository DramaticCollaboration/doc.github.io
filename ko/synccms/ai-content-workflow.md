---
title: SyncCMS AI 콘텐츠 라이프사이클 파이프라인
shortTitle: AI 콘텐츠 워크플로우
category: 핵심 워크플로우
sort: 5
description: AI 초안 생성부터 사실 검증, PII 마스킹, HITL 관리자 승인 및 헤드리스 다채널 배포까지의 콘텐츠 라이프사이클
---

# SyncCMS AI 콘텐츠 라이프사이클 파이프라인

## 1. 개요

SyncCMS는 단순한 문서 저장소를 넘어, 비정형 데이터와 사내 지식을 바탕으로 마케팅 블로그, 제품 릴리스 노트, 정책 공지사항을 생성하고 검증하는 **지능형 콘텐츠 파이프라인**을 제공합니다.

```mermaid
flowchart LR
    Ideation[기획 및 원천 지식] --> Draft[AI 초안 생성<br/>(SyncLLM 인라인 검사)]
    Draft --> Guardrail[가드레일 검증<br/>(사실관계/PII 필터링)]
    Guardrail --> HITL[관리자 검토 & 승인]
    HITL --> Publish[다채널 헤드리스 퍼블리싱<br/>(Web, Mobile, App)]
```

---

## 2. 4단계 콘텐츠 라이프사이클

1. **AI 초안 자동 생성 (Drafting)**:
   - SyncBoot의 신규 API 배포나 비즈니스 이벤트 발생 시, 해당 메타데이터를 참조하여 기술 블로그 및 공지 초안을 자동 빌드합니다.
2. **신뢰성 가드레일 (Fact-Check & PII Filter)**:
   - 생성된 본문에 포함된 기술 명세, 버전 번호, 링크의 유효성을 정적 분석하고, 개인 식별 정보(PII)의 외부 노출 여부를 전수 검사합니다.
3. **관리자 승인 게이트 (HITL Review)**:
   - 시각적 Rich Text 에디터에서 원클릭으로 수정 사항을 검토하고 승인 여부를 결정합니다.
4. **글로벌 CDN 퍼블리싱 (Omnichannel Delivery)**:
   - 승인 즉시 정적 웹 사이트, 모바일 앱 API, 기술 문서 사이트로 실시간 웹훅(Webhook) 동기화가 완료됩니다.
