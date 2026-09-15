---
title: "엔지니어링 작업 일지 및 포스트모텀 (Logs)"
description: "SyncSeries 제품군 개발, 배포, 운영 과정에서 발생한 기술적 난제, 장애 원인 분석(RCA), 메모리 튜닝 및 성능 최적화 실무 기록 아카이브입니다."
head:
  - - meta
    - name: keywords
      content: 작업로그, 포스트모텀, Post-Mortem, 트러블슈팅, 메모리 누수, Electron, Playwright, Redis 분산락, MyBatis-Plus, 코드사이닝, 엠파시
  - - meta
    - property: og:title
      content: "엔지니어링 작업 일지 및 포스트모텀 | 엠파시(Empasy)"
  - - meta
    - property: og:description
      content: "실제 프로덕션 장애 분석 및 엔지니어링 문제 해결 과정을 가감 없이 기록한 기술 일지입니다."
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/logs/
sort: 1
---

# 엔지니어링 작업 일지 및 포스트모텀 (Logs)

본 공간은 엠파시 엔지니어링 팀이 실제 프로덕션 환경 및 릴리즈 빌드 과정에서 마주한 **기술적 장애, 메모리 누수, 동시성 병목, 빌드 서명 오류**의 근본 원인(Root Cause)을 추적하고 해결한 실무 엔지니어링 일지입니다.

단순한 작업 일람을 넘어, **재현 환경 ➔ 근본 원인 분석(RCA) ➔ 해결책 검증 ➔ 재발 방지 대책**의 표준 포스트모텀(Post-Mortem) 양식으로 체계화되어 있습니다.

---

## 작업 일지 및 포스트모텀 목록

### 1. SyncEta (데스크톱 앱 & QA 엔진)
- **[2026-02-10: Electron 멀티 웹뷰 DOM 스냅샷 메모리 누수 분석 및 해결](./20260210_electron_webview_memory_leak)**: 50개 이상 연속 시나리오 녹화 시 렌더러 프로세스 V8 힙 고갈 원인 규명 및 메모리 해제 최적화.
- **[2026-02-18: 지연 로딩 컴포넌트 대상 Playwright 액션 타임아웃 안정화](./20260218_playwright_dynamic_timeout_stabilization)**: 무한 스크롤 및 지연 마운트 환경에서의 가상 스크롤 앵커 대기 메커니즘 개선.
- **[2026-03-10: Windows Authenticode 서명 및 Apple Notarization 무인 배포 구축](./20260310_desktop_codesign_notarization_pipeline)**: GitHub Actions 러너 기반의 EV 인증서 코드 사이닝 및 macOS 게이트키퍼 통과 파이프라인.
- **[2025-08-27: 데스크톱 디버그 크래시 분석](./20250827_debugCrash)**: 네이티브 브라우저 바인딩 충돌 분석.
- **[2025-08-27: Electron 개발 환경 디버깅 일지](./20250827_electronDebug)**: 핫 리로딩 시 메인 프로세스 IPC 리스너 중복 등록 제거.

### 2. SyncVerse & SyncBoot (관제탑 & MSA 백엔드)
- **[2026-02-25: Redis Redlock 및 SSE 기반 멀티 에이전트 트랜잭션 동기화 장애 복구](./20260225_redis_redlock_sse_saga_orchestration)**: 네트워크 파티션 발생 시 분산 락 타임아웃 갱신 실패 및 Saga 롤백 동기화 이슈 해결.
- **[2026-03-02: 멀티테넌시 환경 MyBatis-Plus 비동기 스레드 테넌트 ID 유실 버그 픽스](./20260302_mybatis_metaobject_tenant_context_fix)**: `ThreadLocal` 기반 테넌트 컨텍스트가 가상 스레드 풀에서 전파되지 않는 문제에 대한 `ScopedValue` 대체 픽스.

---

## 엔지니어링 포스트모텀 작성 원칙

1. **비난 없는 사후 검토 (Blameless Post-Mortem)**: 시스템 구조와 프로세스 취약점에 집중하여 실패를 조직적 자산으로 전환합니다.
2. **정확한 메트릭 기반 기록**: 장애 발생 시점(T0), 인지 시점(T1), 완화 시점(T2), 완전 해결 시점(T3)의 타임라인을 명시합니다.
3. **코드 레벨 변경점 명시**: 패치 전/후의 소스 코드 Diff를 포함하여 후속 엔지니어가 즉시 참조할 수 있도록 합니다.

