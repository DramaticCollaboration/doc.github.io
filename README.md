# Empasy Docs — SyncSeries 공식 기술 문서 포털 (`doc.empasy.com`)

엠파시(Empasy)의 **SyncSeries AI 자율 운영 생태계(Agent-to-Agent)** 공식 기술 문서 및 개발자 가이드 포털 저장소입니다.

- **기술 문서 포털**: [https://doc.empasy.com](https://doc.empasy.com)
- **통합 데모 포털**: [https://sync.empasy.io](https://sync.empasy.io)
- **공식 기업 홈페이지**: [https://empasy.io](https://empasy.io)
- **GitHub Organization**: [https://github.com/DramaticCollaboration/](https://github.com/DramaticCollaboration/)

---

## 1. 문서화 대상 제품군 (4-Tier 자율 에이전트 연합)

| 계층 | 제품 / 모듈 | 설명 | 문서 경로 |
| :--- | :--- | :--- | :--- |
| **Tier 1 (중앙 관제)** | **SyncVerse** | 멀티 에이전트 A2A 중앙 관제탑 및 5-Step Spec Studio 오케스트레이터 | `/syncverse/` |
| **Tier 2 (지능·게이트웨이)** | **SyncInsight** | 엔터프라이즈 의사결정 인텔리전스, 2-Phase Deep Research & Safe NL2SQL | `/syncinsight/` |
| **Tier 2 (지능·게이트웨이)** | **SyncLLM** | 엔터프라이즈 AI 모델 게이트웨이, FinOps 토큰 예산 통제 & 시맨틱 캐시 | `/syncllm/` |
| **Tier 3 (도메인 에이전트)** | **SyncBoot** | Spring Boot 3.5 / Java 25 기반 클린 아키텍처 백엔드 표준 플랫폼 | `/syncboot/` |
| **Tier 3 (도메인 에이전트)** | **SyncCMS** | Nuxt 3 SSR & 멀티에이전트 스웜 기반 AEO/GEO 하이브리드 헤드리스 CMS | `/synccms/` |
| **Tier 3 (도메인 에이전트)** | **SyncShop** | 8대 마이크로서비스 기반 옴니채널 상거래 및 다이내믹 프라이싱 에이전트 | `/syncshop/` |
| **Tier 3 (도메인 에이전트)** | **SyncOps** | 한국형 SI/솔루션 사업운영, 듀얼단가 손익, KOSA 매트릭스, 보증보험·하도급법·연구노트 관제 | `/syncops/` |
| **QA & 수집 도구** | **SyncETA / SyncCrawl** | Vision-LLM 자가치유 E2E 테스트 자동화(`v0.0.44`) 및 적응형 웹 수집 엔진 | `/synceta/`, `/synccrawl/` |
| **Tier 4 (SDK & 공통 모듈)** | **SyncSDK & 6대 공통 모듈** | 멀티 코딩 엔진 SPI(`sync-sdk`) 및 `sync-core`, `sync-module-ai/nl2sql/audit/deploy/rag` | `/sdk/`, `/ecosystem/` |

---

## 2. 로컬 개발 및 빌드 가이드

### 사전 요구사항
- **Node.js**: v20+ 권장
- **패키지 매니저**: `pnpm` (또는 `npm`)

### 의존성 설치
```bash
pnpm install
```

### 로컬 개발 서버 실행 (`http://localhost:5173`)
```bash
pnpm run docs:dev
```

### 프로덕션 정적 사이트 빌드 및 링크 무결성 검증
```bash
pnpm run docs:build
```

### 빌드 결과물 로컬 프리뷰
```bash
pnpm run docs:preview
```

---

## 3. 디렉터리 구조

```text
sites/doc.github.io/
├── .vitepress/
│   ├── config.mts              # VitePress 글로벌 설정, 네비게이션, Canonical URL 변환기
│   ├── sitebar.ts              # 모듈별 사이드바 자동 생성 및 정렬 규칙
│   └── vitepress-pdf.config.ts # PDF 문서 내보내기 설정
├── ko/                         # 한국어 기술 문서 원본 (rewrites를 통해 루트 경로 '/'로 매핑)
│   ├── ecosystem/              # 4-Tier 생태계 개요, MCP 프로토콜, 공유 모듈 & SDK
│   ├── syncverse/              # SyncVerse 중앙 관제탑 문서
│   ├── syncinsight/            # SyncInsight 의사결정 인텔리전스 문서
│   ├── syncllm/                # SyncLLM AI 게이트웨이 & FinOps 문서
│   ├── syncboot/               # SyncBoot 백엔드 프레임워크 문서
│   ├── synccms/                # SyncCMS 하이브리드 헤드리스 CMS 문서
│   ├── syncshop/               # SyncShop 이커머스 MSA 문서
│   ├── syncops/                # SyncOps SI 사업운영 & 손익/컴플라이언스 문서
│   ├── synceta/                # SyncETA 테스트 자동화 문서
│   ├── synccrawl/              # SyncCrawl 웹 데이터 수집 엔진 문서
│   ├── sdk/                    # SyncSDK 및 커스텀 MCP 도구 개발자 가이드
│   ├── methodology/            # 엔터프라이즈 사업 수행 방법론 및 AI-SDLC
│   ├── agile/                  # 스크럼반 및 Git 브랜치 전략 가이드
│   ├── patents/                # 핵심 원천 특허 기술 백서
│   └── infra/                  # 온프레미스 GPU, K8s GitOps 및 재해 복구 가이드
└── public/                     # 정적 자산 (로고, 파비콘, 다운로드용 PDF/템플릿)
```
