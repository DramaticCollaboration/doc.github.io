import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type DocLocale = 'ko' | 'en' | 'ja'

export interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

interface FileMeta {
  file: string
  name: string
  title: string
  sort: number
  group?: string
  link: string
}

interface LocalizedLabel {
  ko: string
  en: string
  ja: string
}

interface CategoryRule {
  group: LocalizedLabel
  match: (name: string, file: string, sort: number) => boolean
}

const SIDEBAR_SECTIONS = [
  'glossary',
  'patents',
  'infra',
  'sdk',
  'guide',
  'methodology',
  'agile',
  'ecosystem',
  'syncverse',
  'syncinsight',
  'synccrawl',
  'synccms',
  'syncshop',
  'syncops',
  'syncllm',
  'synceta',
  'syncboot',
  'syncadmin',
  'syncapim',
  'syncwatch',
  'proposals',
  'logs',
  'study',
] as const

const FALLBACK_LABELS: Record<
  DocLocale,
  {
    overview: string
    misc: string
    general: string
    docsSuffix: string
    guideSuffix: string
  }
> = {
  ko: {
    overview: '개요',
    misc: '기타 & 추가 자료',
    general: '일반',
    docsSuffix: '문서',
    guideSuffix: '가이드',
  },
  en: {
    overview: 'Overview',
    misc: 'Additional Resources',
    general: 'General',
    docsSuffix: 'Docs',
    guideSuffix: 'Guide',
  },
  ja: {
    overview: '概要',
    misc: 'その他・補足資料',
    general: '一般',
    docsSuffix: 'ドキュメント',
    guideSuffix: 'ガイド',
  },
}

// Predefined module category mapping for intuitive structural hierarchy
const MODULE_CATEGORY_RULES: Record<string, CategoryRule[]> = {
  ecosystem: [
    {
      group: { ko: '생태계 아키텍처', en: 'Ecosystem Architecture', ja: 'エコシステム構成' },
      match: (name) => ['index', 'mcp-protocol'].includes(name),
    },
    {
      group: { ko: '개발 & 표준', en: 'Development & Standards', ja: '開発・標準' },
      match: (name) => ['agentscope-guide', 'e2e-workflow', 'shared-modules-and-sdk'].includes(name),
    },
    {
      group: { ko: '엔터프라이즈 거버넌스', en: 'Enterprise Governance', ja: 'エンタープライズ統制' },
      match: (name) => ['hitl-governance', 'security-and-compliance', 'zero-mock-harness', 'changelog'].includes(name),
    },
  ],
  syncshop: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: { ko: '커머스 핵심 운영', en: 'Core Commerce Operations', ja: 'ECコア運用' },
      match: (name) => ['catalog-and-order', 'promotion-and-marketing'].includes(name),
    },
    {
      group: { ko: '에이전트 & 거버넌스', en: 'Agents & Governance', ja: 'エージェント・統制' },
      match: (name) => ['mcp-and-agent', 'enterprise-faq'].includes(name),
    },
  ],
  syncapim: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: { ko: 'API 보안 & 거버넌스', en: 'API Security & Governance', ja: 'APIセキュリティ・統制' },
      match: (name) => ['waf-and-pii-governance'].includes(name),
    },
    {
      group: { ko: '에이전트 & API', en: 'Agents & API', ja: 'エージェント・API' },
      match: (name) => ['mcp-tools', 'enterprise-faq'].includes(name),
    },
  ],
  syncwatch: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: { ko: '자율 DevSecOps 연동 & API', en: 'Autonomous DevSecOps & API', ja: '自律DevSecOps連携・API' },
      match: (name) => ['devsecops-protocol', 'api-and-schema'].includes(name),
    },
  ],
  syncops: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: { ko: '에이전트 & API', en: 'Agents & API', ja: 'エージェント・API' },
      match: (name) => ['mcp-tools'].includes(name),
    },
  ],
  syncverse: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: { ko: '핵심 엔진', en: 'Core Engine', ja: 'コアエンジン' },
      match: (name) => ['intent-routing', 'self-healing-pipeline', 'finops-and-syncllm'].includes(name),
    },
    {
      group: { ko: '거버넌스 & 확장', en: 'Governance & Extensions', ja: '統制・拡張' },
      match: (name) => ['hitl-governance', 'saga-and-audit', 'mcp-tool-registry', 'enterprise-faq'].includes(name),
    },
  ],
  syncboot: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: { ko: '핵심 기능 & 개발', en: 'Core Features & Development', ja: '主要機能・開発' },
      match: (name) => ['schema-studio', 'lowcode-generator', 'batch-and-scheduler', 'mcp-and-ai', 'agentscope-integration'].includes(name),
    },
    {
      group: { ko: '아키텍처 & 패턴', en: 'Architecture & Patterns', ja: 'アーキテクチャ・パターン' },
      match: (name) => ['saga-pattern', 'ddd-clean-architecture'].includes(name),
    },
    {
      group: { ko: '운영 & 보안', en: 'Operations & Security', ja: '運用・セキュリティ' },
      match: (name) => ['enterprise-security', 'production-guide', 'h2'].includes(name),
    },
  ],
  synccms: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: { ko: '개발 & 연동', en: 'Development & Integration', ja: '開発・連携' },
      match: (name) => ['live-sdk-guide', 'onpremise-ai-security', 'ai-content-workflow'].includes(name),
    },
    {
      group: { ko: '거버넌스 & API', en: 'Governance & API', ja: '統制・API' },
      match: (name) => ['integration-governance', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  synccrawl: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: { ko: '수집 엔진 & 콘솔', en: 'Crawling Engine & Console', ja: '収集エンジン・コンソール' },
      match: (name) => ['adaptive-crawling-engine', 'smart-crawling-console', 'distributed-agent-topology'].includes(name),
    },
    {
      group: { ko: '런타임 안정성 & 보안', en: 'Runtime Stability & Security', ja: '実行安定性・セキュリティ' },
      match: (name) => ['session-arbitration', 'abac-data-security', 'anti-bot-and-scaling', 'enterprise-security-governance'].includes(name),
    },
    {
      group: { ko: 'RAG 지식 & API', en: 'RAG Knowledge & API', ja: 'RAGナレッジ・API' },
      match: (name) => ['rag-knowledge-pipeline', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  syncinsight: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: { ko: '리서치 & 분석', en: 'Research & Analytics', ja: 'リサーチ・分析' },
      match: (name) => ['deep-research', 'nl2sql-and-data', 'roundtable-debate'].includes(name),
    },
    {
      group: { ko: '도구 & 거버넌스', en: 'Tools & Governance', ja: 'ツール・統制' },
      match: (name) => ['mcp-tool-reference', 'action-approval', 'finops-and-security', 'enterprise-faq'].includes(name),
    },
  ],
  synceta: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: { ko: '웹 테스트 & 시나리오', en: 'Web Testing & Scenarios', ja: 'Webテスト・シナリオ' },
      match: (name) => ['project', 'story', 'scenario-create', 'scenario-run', 'dataset', 'collection', 'dashboard'].includes(name),
    },
    {
      group: { ko: '모바일 테스트 엔지니어링', en: 'Mobile Test Engineering', ja: 'モバイルテスト設計' },
      match: (name) => ['mobile-testing-architecture', 'mobile-dual-engine', 'mobile-live-mirroring', 'device-farm-scheduler'].includes(name),
    },
    {
      group: { ko: 'AI 자동화 & 거버넌스', en: 'AI Automation & Governance', ja: 'AI自動化・統制' },
      match: (name) => ['self-healing-and-vision', 'mcp-and-cicd', 'account', 'enterprise-security', 'glossary'].includes(name),
    },
  ],
  methodology: [
    {
      group: { ko: '사업 및 프로젝트 관리', en: 'Enterprise Project Management', ja: '事業・プロジェクト管理' },
      match: (name) =>
        [
          'index',
          'enterprise-project-lifecycle',
          'enterprise-action-items-guide',
          'enterprise-business-documents',
          'enterprise-document-templates',
          'presales-ai-playbook',
        ].includes(name),
    },
    {
      group: { ko: 'AI 개발 생명주기 (AI-SDLC)', en: 'AI Development Lifecycle (AI-SDLC)', ja: 'AI開発ライフサイクル (AI-SDLC)' },
      match: (name) =>
        [
          'ai-driven-development',
          'ai-sdlc-01-requirements',
          'ai-sdlc-02-architecture',
          'ai-sdlc-03-implementation',
          'ai-sdlc-04-testing',
          'ai-sdlc-05-review-deploy',
          'ai-sdlc-prompt-recipes',
        ].includes(name),
    },
  ],
  agile: [
    {
      group: { ko: '애자일 & 스크럼반 운영', en: 'Agile & Scrumban Operations', ja: 'アジャイル・スクラムバン運用' },
      match: (name) => ['index', 'scrumban', 'guide', 'activity', 'dailyScrum', 'storyPointGuide', 'checklistAndProcedure'].includes(name),
    },
    {
      group: { ko: '개발 공학 & 형상관리', en: 'Engineering & Configuration', ja: '開発工学・構成管理' },
      match: (name) => ['gitFlow', 'gitCommitLog', 'createIssue', 'PrinciplesForIssueUsage'].includes(name),
    },
    {
      group: { ko: '프레임워크 & 용어', en: 'Frameworks & Terminology', ja: 'フレームワーク・用語' },
      match: (name) => ['xp_scrum_kanban', 'glossaryOfTerms'].includes(name),
    },
  ],
  syncllm: [
    {
      group: { ko: '시작하기', en: 'Getting Started', ja: 'はじめに' },
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: { ko: '핵심 엔진', en: 'Core Engine', ja: 'コアエンジン' },
      match: (name) => ['routing-and-gateway', 'finops-and-cache'].includes(name),
    },
    {
      group: { ko: '개발 & API', en: 'Development & API', ja: '開発・API' },
      match: (name) => ['api-reference'].includes(name),
    },
    {
      group: { ko: '보안 & 거버넌스', en: 'Security & Governance', ja: 'セキュリティ・統制' },
      match: (name) => ['security-and-pii', 'enterprise-faq'].includes(name),
    },
  ],
  study: [
    {
      group: { ko: '연구 자료 개요', en: 'Research Overview', ja: '研究資料概要' },
      match: (name) => ['index'].includes(name),
    },
    {
      group: { ko: '브라우저 자동화 & 테스트', en: 'Browser Automation & Testing', ja: 'ブラウザ自動化・テスト' },
      match: (name) => ['playwright-cdp-visual-regression', 'vision-llm-self-healing-algorithm'].includes(name),
    },
    {
      group: { ko: '분산 환경 및 런타임', en: 'Distributed Systems & Runtime', ja: '分散環境・ランタイム' },
      match: (name) => ['mcp-jsonrpc-agent-orchestration', 'springboot-virtual-threads-agentscope'].includes(name),
    },
    {
      group: { ko: 'AI 모델 및 지식 검색 (RAG)', en: 'AI Models & Retrieval (RAG)', ja: 'AIモデル・知識検索 (RAG)' },
      match: (name) => ['rag', 'hybrid-rag-dense-sparse-reranking', 'vision-llm-finetuning', 'llm-finetuning-degradation-analysis'].includes(name),
    },
  ],
  logs: [
    {
      group: { ko: '일지 개요', en: 'Logs Overview', ja: '作業記録概要' },
      match: (name) => ['index'].includes(name),
    },
    {
      group: { ko: 'SyncETA 트러블슈팅', en: 'SyncETA Troubleshooting', ja: 'SyncETA トラブルシューティング' },
      match: (name) =>
        [
          '20260210_electron_webview_memory_leak',
          '20260218_playwright_dynamic_timeout_stabilization',
          '20260310_desktop_codesign_notarization_pipeline',
          '20250827_debugCrash',
          '20250827_electronDebug',
        ].includes(name),
    },
    {
      group: { ko: 'SyncVerse & SyncBoot 아키텍처', en: 'SyncVerse & SyncBoot Architecture', ja: 'SyncVerse・SyncBoot アーキテクチャ' },
      match: (name) => ['20260225_redis_redlock_sse_saga_orchestration', '20260302_mybatis_metaobject_tenant_context_fix'].includes(name),
    },
  ],
  patents: [
    {
      group: { ko: '특허 체계', en: 'Patent Portfolio', ja: '特許体系' },
      match: (name) => ['index'].includes(name),
    },
    {
      group: { ko: '등록 완료 특허', en: 'Granted Patents', ja: '登録済み特許' },
      match: (name) => ['registered-web-action-recording'].includes(name),
    },
    {
      group: { ko: '출원 준비 특허 (우선심사)', en: 'Pending Patents (Expedited)', ja: '出願準備特許（優先審査）' },
      match: (name) => ['04-semantic-dom-self-healing', '07-four-stage-wizard-build', '21-mobile-gesture-nlp', '22-a2a-telemetry-circuit'].includes(name),
    },
  ],
  infra: [
    {
      group: { ko: '인프라 아키텍처', en: 'Infrastructure Architecture', ja: 'インフラ構成' },
      match: (name) => ['index'].includes(name),
    },
    {
      group: { ko: '폐쇄망 & AI 보안', en: 'Air-Gapped & AI Security', ja: '閉域網・AIセキュリティ' },
      match: (name) => ['onpremise-llm-gpu', 'ai-safety-guardrails'].includes(name),
    },
    {
      group: { ko: '운영 & 고가용성', en: 'Operations & High Availability', ja: '運用・高可用性' },
      match: (name) => ['k8s-gitops-pipeline', 'disaster-recovery'].includes(name),
    },
  ],
  sdk: [
    {
      group: { ko: '시작 가이드', en: 'Getting Started', ja: 'スタートガイド' },
      match: (name) => ['index'].includes(name),
    },
    {
      group: { ko: '도구 개발 및 연동', en: 'Tool Development & Integration', ja: 'ツール開発・連携' },
      match: (name) => ['custom-mcp-tool', 'sync-sdk-reference'].includes(name),
    },
    {
      group: { ko: '테스트 및 품질 검증', en: 'Testing & Quality Verification', ja: 'テスト・品質検証' },
      match: (name) => ['zero-mock-testing'].includes(name),
    },
  ],
  guide: [
    {
      group: { ko: '운영 안내', en: 'Operations Overview', ja: '運用ガイド' },
      match: (name) => ['index'].includes(name),
    },
    {
      group: { ko: '승인 및 비용 관리', en: 'Approvals & Cost Governance', ja: '承認・コスト管理' },
      match: (name) => ['hitl-approval-operations', 'finops-budget-operations'].includes(name),
    },
  ],
  proposals: [
    {
      group: { ko: '제품 소개서 및 도입 제안서', en: 'Product Brochures & Proposals', ja: '製品紹介書・導入提案書' },
      match: (name) => ['index'].includes(name),
    },
  ],
  glossary: [
    {
      group: { ko: '표준 기술 용어 원천 (SSOT)', en: 'Technical Glossary (SSOT)', ja: '標準技術用語集 (SSOT)' },
      match: (name) => ['index'].includes(name),
    },
  ],
}

// Concise 1-line standard sidebar titles per locale
const DEFAULT_SIDEBAR_SHORT_TITLES: Record<string, Record<string, LocalizedLabel>> = {
  ecosystem: {
    index: { ko: '생태계 개요', en: 'Ecosystem Overview', ja: 'エコシステム概要' },
    'mcp-protocol': { ko: 'MCP 프로토콜', en: 'MCP Protocol', ja: 'MCP プロトコル' },
    'agentscope-guide': { ko: 'AgentScope 가이드', en: 'AgentScope Guide', ja: 'AgentScope ガイド' },
    'e2e-workflow': { ko: 'E2E 연동 시나리오', en: 'E2E Integration Scenarios', ja: 'E2E連携シナリオ' },
    'hitl-governance': { ko: 'HITL & Saga 거버넌스', en: 'HITL & Saga Governance', ja: 'HITL・Saga ガバナンス' },
    'security-and-compliance': { ko: '보안 백서 & 컴플라이언스', en: 'Security & Compliance', ja: 'セキュリティ・法令準拠' },
    'shared-modules-and-sdk': { ko: '공유 모듈 & SDK', en: 'Shared Modules & SDK', ja: '共通モジュール・SDK' },
    'zero-mock-harness': { ko: 'Zero-Mock 품질 하네스', en: 'Zero-Mock Quality Harness', ja: 'Zero-Mock 品質ハーネス' },
    changelog: { ko: '릴리스 노트 (Changelog)', en: 'Release Notes', ja: 'リリースノート' },
  },
  syncshop: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    'catalog-and-order': { ko: '상품 및 주문 관리', en: 'Catalog & Orders', ja: '商品・注文管理' },
    'promotion-and-marketing': { ko: '프로모션 및 마케팅', en: 'Promotions & Marketing', ja: 'プロモーション・販促' },
    'mcp-and-agent': { ko: 'MCP 도구 & A2A 연동', en: 'MCP Tools & A2A', ja: 'MCPツール・A2A連携' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  syncops: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    'mcp-tools': { ko: 'MCP 도구 & API', en: 'MCP Tools & API', ja: 'MCPツール・API' },
  },
  syncllm: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    quickstart: { ko: '빠른 시작', en: 'Quickstart', ja: 'クイックスタート' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    'routing-and-gateway': { ko: '지능형 모델 라우팅', en: 'Intelligent Model Routing', ja: 'モデルルーティング' },
    'finops-and-cache': { ko: 'FinOps & 시맨틱 캐시', en: 'FinOps & Semantic Cache', ja: 'FinOps・セマンティックキャッシュ' },
    'security-and-pii': { ko: '보안 & PII 마스킹', en: 'Security & PII Masking', ja: 'セキュリティ・PIIマスク' },
    'api-reference': { ko: 'API 레퍼런스', en: 'API Reference', ja: 'APIリファレンス' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  syncverse: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    quickstart: { ko: '빠른 시작', en: 'Quickstart', ja: 'クイックスタート' },
    'intent-routing': { ko: '인텐트 라우팅', en: 'Intent Routing', ja: 'インテントルーティング' },
    'self-healing-pipeline': { ko: '자가 치유', en: 'Self-Healing Pipeline', ja: '自己修復パイプライン' },
    'finops-and-syncllm': { ko: 'LLM 게이트웨이', en: 'LLM Gateway & FinOps', ja: 'LLMゲートウェイ連携' },
    'hitl-governance': { ko: 'HITL 승인', en: 'HITL Approvals', ja: 'HITL承認' },
    'saga-and-audit': { ko: '분산 트랜잭션', en: 'Saga & Audit Trail', ja: '分散トランザクション・監査' },
    'mcp-tool-registry': { ko: 'MCP 도구 레지스트리', en: 'MCP Tool Registry', ja: 'MCPツールレジストリ' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  syncboot: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    quickstart: { ko: '빠른 시작', en: 'Quickstart', ja: 'クイックスタート' },
    'schema-studio': { ko: '스키마 스튜디오', en: 'Schema Studio', ja: 'スキーマスタジオ' },
    'lowcode-generator': { ko: '로우코드 생성기', en: 'Low-Code Generator', ja: 'ローコード生成' },
    'batch-and-scheduler': { ko: '배치 & 스케줄러', en: 'Batch & Scheduler', ja: 'バッチ・スケジューラ' },
    'mcp-and-ai': { ko: 'MCP & AI 연동', en: 'MCP & AI Integration', ja: 'MCP・AI連携' },
    'agentscope-integration': { ko: 'AgentScope 연동 실무', en: 'AgentScope Integration', ja: 'AgentScope連携実践' },
    'saga-pattern': { ko: 'Saga 분산 트랜잭션', en: 'Saga Transactions', ja: 'Saga分散トランザクション' },
    'ddd-clean-architecture': { ko: 'DDD & 클린 아키텍처', en: 'DDD & Clean Architecture', ja: 'DDD・クリーンアーキテクチャ' },
    'enterprise-security': { ko: '보안 & 멀티테넌시', en: 'Security & Multi-Tenancy', ja: 'セキュリティ・マルチテナント' },
    'production-guide': { ko: '운영 배포 가이드', en: 'Production Deployment', ja: '本番運用ガイド' },
    h2: { ko: 'PostgreSQL 18.6 로컬 환경', en: 'Local PostgreSQL 18.6 Setup', ja: 'PostgreSQL 18.6 ローカル構築' },
  },
  synccms: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    'live-sdk-guide': { ko: 'Live SDK 연동', en: 'Live SDK Integration', ja: 'Live SDK連携' },
    'onpremise-ai-security': { ko: '온프레미스 AI 보안', en: 'On-Premise AI Security', ja: 'オンプレミスAIセキュリティ' },
    'ai-content-workflow': { ko: 'AI 콘텐츠 워크플로우', en: 'AI Content Workflow', ja: 'AIコンテンツワークフロー' },
    'integration-governance': { ko: '거버넌스 & 권한', en: 'Governance & Permissions', ja: '統制・権限管理' },
    'api-reference': { ko: 'API 레퍼런스', en: 'API Reference', ja: 'APIリファレンス' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  synccrawl: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    'adaptive-crawling-engine': { ko: '적응형 크롤링', en: 'Adaptive Crawling Engine', ja: '適応型クロールエンジン' },
    'smart-crawling-console': { ko: '스마트 크롤링 콘솔', en: 'Smart Crawling Console', ja: 'スマートクロールコンソール' },
    'distributed-agent-topology': { ko: '분산 에이전트 토폴로지', en: 'Distributed Agent Topology', ja: '分散エージェント構成' },
    'session-arbitration': { ko: '세션 중재 & 안정성', en: 'Session Arbitration', ja: 'セッション調停・安定性' },
    'abac-data-security': { ko: 'ABAC 데이터 보안', en: 'ABAC Data Security', ja: 'ABACデータセキュリティ' },
    'rag-knowledge-pipeline': { ko: 'RAG 지식 파이프라인', en: 'RAG Knowledge Pipeline', ja: 'RAGナレッジパイプライン' },
    'anti-bot-and-scaling': { ko: '안티봇 & 분산 스케일링', en: 'Anti-Bot & Scaling', ja: 'ボット対策・分散拡張' },
    'enterprise-security-governance': { ko: '보안 및 거버넌스', en: 'Security & Governance', ja: 'セキュリティ・統制' },
    'api-reference': { ko: 'API 레퍼런스', en: 'API Reference', ja: 'APIリファレンス' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  syncinsight: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    quickstart: { ko: '빠른 시작', en: 'Quickstart', ja: 'クイックスタート' },
    'deep-research': { ko: '딥 리서치', en: 'Deep Research', ja: 'ディープリサーチ' },
    'nl2sql-and-data': { ko: 'NL2SQL 데이터 분석', en: 'NL2SQL Data Analytics', ja: 'NL2SQLデータ分析' },
    'roundtable-debate': { ko: '라운드테이블 토론', en: 'Roundtable Debate', ja: 'ラウンドテーブル討論' },
    'mcp-tool-reference': { ko: 'MCP 도구 레퍼런스', en: 'MCP Tool Reference', ja: 'MCPツールリファレンス' },
    'action-approval': { ko: '실행 승인 (HITL)', en: 'Action Approval (HITL)', ja: '実行承認 (HITL)' },
    'finops-and-security': { ko: 'FinOps & 보안', en: 'FinOps & Security', ja: 'FinOps・セキュリティ' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  synceta: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '시스템 아키텍처', en: 'System Architecture', ja: 'システム構成' },
    quickstart: { ko: '빠른 시작', en: 'Quickstart', ja: 'クイックスタート' },
    project: { ko: '프로젝트 관리', en: 'Project Management', ja: 'プロジェクト管理' },
    story: { ko: '스토리 관리', en: 'Story Management', ja: 'ストーリー管理' },
    'scenario-create': { ko: '시나리오 생성', en: 'Scenario Authoring', ja: 'シナリオ作成' },
    'scenario-run': { ko: '시나리오 실행', en: 'Scenario Execution', ja: 'シナリオ実行' },
    dataset: { ko: '데이터셋 관리', en: 'Dataset Management', ja: 'データセット管理' },
    collection: { ko: '컬렉션 관리', en: 'Collection Management', ja: 'コレクション管理' },
    dashboard: { ko: '품질 대시보드', en: 'Quality Dashboard', ja: '品質ダッシュボード' },
    'mobile-testing-architecture': { ko: '모바일 E2E 아키텍처', en: 'Mobile E2E Architecture', ja: 'モバイルE2E構成' },
    'mobile-dual-engine': { ko: '듀얼 자동화 엔진 명세', en: 'Dual Automation Engine', ja: 'デュアル自動化エンジン' },
    'mobile-live-mirroring': { ko: '초저지연 미러링 & 캡처', en: 'Low-Latency Mirroring', ja: '超低遅延ミラーリング' },
    'device-farm-scheduler': { ko: '디바이스 팜 스케줄러', en: 'Device Farm Scheduler', ja: 'デバイスファーム制御' },
    'self-healing-and-vision': { ko: '자가 치유 & 비전', en: 'Self-Healing & Vision', ja: '自己修復・ビジョン' },
    'mcp-and-cicd': { ko: 'MCP & CI/CD', en: 'MCP & CI/CD', ja: 'MCP・CI/CD連携' },
    account: { ko: '계정 및 권한', en: 'Accounts & Roles', ja: 'アカウント・権限' },
    'enterprise-security': { ko: '엔터프라이즈 보안', en: 'Enterprise Security', ja: 'エンタープライズセキュリティ' },
    glossary: { ko: '용어 사전', en: 'Glossary', ja: '用語集' },
  },
  methodology: {
    index: { ko: '방법론 종합 포털 (Overview)', en: 'Methodology Overview', ja: '方法論ポータル概要' },
    'enterprise-project-lifecycle': { ko: '사업 전 주기 총괄 (Phase 0~5)', en: 'Project Lifecycle (Phase 0-5)', ja: '事業全周期 (Phase 0-5)' },
    'enterprise-action-items-guide': { ko: '단계별 실행 가이드 (45개 SOP)', en: 'Execution SOP Guide (45 SOPs)', ja: '段階別実行ガイド (45 SOP)' },
    'enterprise-business-documents': { ko: '사업 전 주기 표준 문서 체계', en: 'Standard Deliverable System', ja: '標準成果物ドキュメント体系' },
    'enterprise-document-templates': { ko: '표준 문서 양식 다운로드 (125종)', en: 'Template Downloads (125 Forms)', ja: '標準様式ダウンロード (125種)' },
    'presales-ai-playbook': { ko: '사전영업 & 제안 플레이북', en: 'Pre-Sales & Proposal Playbook', ja: 'プリセールス・提案ガイド' },
    'ai-driven-development': { ko: 'AI 개발 생명주기 (AI-SDLC)', en: 'AI Development Lifecycle', ja: 'AI開発ライフサイクル (AI-SDLC)' },
    'ai-sdlc-01-requirements': { ko: '[01단계] 기획 및 요구사항 구체화', en: '[Phase 1] Planning & Requirements', ja: '[第1段階] 企画・要件定義' },
    'ai-sdlc-02-architecture': { ko: '[02단계] 명세 우선 아키텍처 설계', en: '[Phase 2] Spec-First Architecture', ja: '[第2段階] 仕様優先設計' },
    'ai-sdlc-03-implementation': { ko: '[03단계] AI 협업 코딩 및 자율 구현', en: '[Phase 3] AI Collaborative Coding', ja: '[第3段階] AI協業実装' },
    'ai-sdlc-04-testing': { ko: '[04단계] 4-Cycle Zero-Mock 검증', en: '[Phase 4] 4-Cycle Zero-Mock QA', ja: '[第4段階] 4-Cycle Zero-Mock検証' },
    'ai-sdlc-05-review-deploy': { ko: '[05단계] 코드 검토 및 무인 배포', en: '[Phase 5] Review & Deployment', ja: '[第5段階] レビュー・自動配備' },
    'ai-sdlc-prompt-recipes': { ko: '상황별 실전 프롬프트 모음집', en: 'Practical Prompt Recipes', ja: '実戦プロンプト集' },
  },
  agile: {
    index: { ko: '개요 (스크럼반)', en: 'Overview (Scrumban)', ja: '概要 (スクラムバン)' },
    scrumban: { ko: '스크럼반 운영 체계', en: 'Scrumban Operations', ja: 'スクラムバン運用体系' },
    guide: { ko: '애자일 가이드', en: 'Agile Guide', ja: 'アジャイルガイド' },
    activity: { ko: '스프린트 활동', en: 'Sprint Activities', ja: 'スプリント活動' },
    checklistAndProcedure: { ko: '체크리스트 & 절차', en: 'Checklists & Procedures', ja: 'チェックリスト・手順' },
    dailyScrum: { ko: '데일리 스크럼', en: 'Daily Scrum', ja: 'デイリースクラム' },
    gitFlow: { ko: 'Git 브랜치 전략', en: 'Git Branching Strategy', ja: 'Gitブランチ戦略' },
    gitCommitLog: { ko: '커밋 로그 규칙', en: 'Commit Message Rules', ja: 'コミットログ規約' },
    createIssue: { ko: '이슈 작성법', en: 'Issue Authoring Guide', ja: '課題作成ガイド' },
    PrinciplesForIssueUsage: { ko: '이슈 원칙', en: 'Issue Usage Principles', ja: '課題運用原則' },
    storyPointGuide: { ko: '스토리 포인트', en: 'Story Points Guide', ja: 'ストーリーポイント' },
    xp_scrum_kanban: { ko: '스크럼 vs 칸반', en: 'XP vs Scrum vs Kanban', ja: 'XP・スクラム・カンバン比較' },
    glossaryOfTerms: { ko: '애자일 용어', en: 'Agile Glossary', ja: 'アジャイル用語集' },
  },
  syncadmin: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
  },
  syncapim: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '4-JVM 아키텍처 & DB 설계', en: '4-JVM Architecture & DB', ja: '4-JVM構成・DB設計' },
    'waf-and-pii-governance': { ko: 'WAF 위협 탐지 & PII 마스킹', en: 'WAF Detection & PII Masking', ja: 'WAF脅威検知・PIIマスク' },
    'mcp-tools': { ko: 'MCP 도구 & REST API', en: 'MCP Tools & REST API', ja: 'MCPツール・REST API' },
    'enterprise-faq': { ko: '도입 FAQ', en: 'Enterprise FAQ', ja: '導入FAQ' },
  },
  syncwatch: {
    index: { ko: '개요', en: 'Overview', ja: '概要' },
    architecture: { ko: '아키텍처 & 룰 컴파일러', en: 'Architecture & Rule Compiler', ja: '構成・ルールコンパイラ' },
    'devsecops-protocol': { ko: 'Verse & APIM 연동 프로토콜', en: 'Verse & APIM Protocol', ja: 'Verse・APIM連携規約' },
    'api-and-schema': { ko: 'DB 스키마 & API 명세', en: 'DB Schema & API Spec', ja: 'DBスキーマ・API仕様' },
  },
  study: {
    index: { ko: '연구 자료 개요', en: 'Research Overview', ja: '研究資料概要' },
    'playwright-cdp-visual-regression': { ko: 'Playwright & CDP 동기화', en: 'Playwright & CDP Sync', ja: 'Playwright・CDP同期' },
    'vision-llm-self-healing-algorithm': { ko: 'Vision-LLM 자가치유 알고리즘', en: 'Vision-LLM Self-Healing', ja: 'Vision-LLM自己修復アルゴリズム' },
    'mcp-jsonrpc-agent-orchestration': { ko: 'MCP 도구 오케스트레이션', en: 'MCP Tool Orchestration', ja: 'MCPツールオーケストレーション' },
    'hybrid-rag-dense-sparse-reranking': { ko: '하이브리드 RAG & 리랭킹', en: 'Hybrid RAG & Reranking', ja: 'ハイブリッドRAG・リランキング' },
    'springboot-virtual-threads-agentscope': { ko: '가상 스레드 & AgentScope', en: 'Virtual Threads & AgentScope', ja: '仮想スレッド・AgentScope' },
    'vision-llm-finetuning': { ko: 'Llama-3.2-Vision 파인튜닝', en: 'Llama-3.2-Vision Fine-Tuning', ja: 'Llama-3.2-Vision ファインチューニング' },
    'llm-finetuning-degradation-analysis': { ko: '파인튜닝 성능 저하 분석', en: 'Fine-Tuning Degradation Study', ja: 'ファインチューニング劣化分析' },
    rag: { ko: 'RAG 파이프라인 기초', en: 'RAG Pipeline Fundamentals', ja: 'RAGパイプライン基礎' },
  },
  logs: {
    index: { ko: '작업 일지 개요', en: 'Engineering Logs Overview', ja: 'エンジニアリング日誌概要' },
    '20260210_electron_webview_memory_leak': { ko: '[SyncETA] Electron 메모리 누수', en: '[SyncETA] Electron Memory Leak', ja: '[SyncETA] Electronメモリリーク' },
    '20260218_playwright_dynamic_timeout_stabilization': { ko: '[SyncETA] Playwright 타임아웃 안정화', en: '[SyncETA] Playwright Timeout Tuning', ja: '[SyncETA] Playwrightタイムアウト安定化' },
    '20260225_redis_redlock_sse_saga_orchestration': { ko: '[SyncVerse] Redis Redlock 동기화', en: '[SyncVerse] Redis Redlock Sync', ja: '[SyncVerse] Redis Redlock同期' },
    '20260302_mybatis_metaobject_tenant_context_fix': { ko: '[SyncBoot] 멀티테넌트 컨텍스트 픽스', en: '[SyncBoot] Multi-Tenant Context Fix', ja: '[SyncBoot] マルチテナント修正' },
    '20260310_desktop_codesign_notarization_pipeline': { ko: '[SyncETA] 코드 서명 & 공증 파이프라인', en: '[SyncETA] Code Signing & Notarization', ja: '[SyncETA] コード署名・公証パイプライン' },
    '20250827_debugCrash': { ko: '디버그 크래시 분석', en: 'Debug Crash Analysis', ja: 'デバッグクラッシュ分析' },
    '20250827_electronDebug': { ko: 'Electron 디버깅 일지', en: 'Electron Debugging Log', ja: 'Electronデバッグ記録' },
  },
  patents: {
    index: { ko: '특허 체계 개요', en: 'Patent Portfolio Overview', ja: '特許ポートフォリオ概要' },
    'registered-web-action-recording': { ko: '[등록특허] 웹 레코딩 & 자연어 QA', en: '[Granted] Web Recording & NLP QA', ja: '[登録特許] Web録画・自然言語QA' },
    '04-semantic-dom-self-healing': { ko: '[04호] 크롤링 셀렉터 자가치유', en: '[No. 04] Semantic DOM Self-Healing', ja: '[第04号] セマンティックDOM自己修復' },
    '07-four-stage-wizard-build': { ko: '[07호] 4단계 위저드 & 빌드 치유', en: '[No. 07] 4-Stage Wizard & Build Healing', ja: '[第07号] 4段階ウィザード・ビルド修復' },
    '21-mobile-gesture-nlp': { ko: '[21호] 모바일 제스처 & 자연어 QA', en: '[No. 21] Mobile Gesture & NLP QA', ja: '[第21号] モバイル操作・自然言語QA' },
    '22-a2a-telemetry-circuit': { ko: '[22호] A2A 서킷 브레이커', en: '[No. 22] A2A Telemetry Circuit Breaker', ja: '[第22号] A2Aサーキットブレーカー' },
  },
  infra: {
    index: { ko: '인프라 개요', en: 'Infrastructure Overview', ja: 'インフラ概要' },
    'onpremise-llm-gpu': { ko: '온프레미스 GPU 서빙', en: 'On-Premise GPU Serving', ja: 'オンプレミスGPUサービング' },
    'ai-safety-guardrails': { ko: 'AI 보안 & 가드레일', en: 'AI Safety & Guardrails', ja: 'AIセキュリティ・ガードレール' },
    'k8s-gitops-pipeline': { ko: 'K8s & GitOps 파이프라인', en: 'K8s & GitOps Pipeline', ja: 'K8s・GitOpsパイプライン' },
    'disaster-recovery': { ko: '재해 복구 & DR', en: 'Disaster Recovery (DR)', ja: '災害復旧 (DR)' },
  },
  sdk: {
    index: { ko: '개발자 센터 개요', en: 'Developer Center Overview', ja: '開発者センター概要' },
    'custom-mcp-tool': { ko: '커스텀 MCP 도구 개발', en: 'Custom MCP Tool Development', ja: 'カスタムMCPツール開発' },
    'sync-sdk-reference': { ko: 'Sync SDK 레퍼런스', en: 'SyncSDK Reference', ja: 'SyncSDK リファレンス' },
    'zero-mock-testing': { ko: 'Zero-Mock 테스트 하네스', en: 'Zero-Mock Test Harness', ja: 'Zero-Mock テストハーネス' },
  },
  guide: {
    index: { ko: '운영 가이드 개요', en: 'Operations Guide Overview', ja: '運用ガイド概要' },
    'hitl-approval-operations': { ko: '다단계 결재 & 감사', en: 'Multi-Step Approvals & Audit', ja: '多段階承認・監査運用' },
    'finops-budget-operations': { ko: 'FinOps 예산 & 비용 관리', en: 'FinOps Budget Operations', ja: 'FinOps予算・コスト管理' },
  },
  proposals: {
    index: { ko: '전체 제안서 PDF 다운로드', en: 'All Proposal PDFs', ja: '製品紹介書・提案書PDF' },
  },
  glossary: {
    index: { ko: '전사 기술 용어집 (Glossary)', en: 'Enterprise Technical Glossary', ja: '全社技術用語集 (Glossary)' },
  },
}

const CUSTOM_SECTION_TITLES: Record<string, LocalizedLabel> = {
  syncverse: { ko: 'SyncVerse', en: 'SyncVerse', ja: 'SyncVerse' },
  syncboot: { ko: 'SyncBoot', en: 'SyncBoot', ja: 'SyncBoot' },
  synccms: { ko: 'SyncCMS', en: 'SyncCMS', ja: 'SyncCMS' },
  synccrawl: { ko: 'SyncCrawl', en: 'SyncCrawl', ja: 'SyncCrawl' },
  syncinsight: { ko: 'SyncInsight', en: 'SyncInsight', ja: 'SyncInsight' },
  syncops: { ko: 'SyncOps', en: 'SyncOps', ja: 'SyncOps' },
  synceta: { ko: 'SyncETA', en: 'SyncETA', ja: 'SyncETA' },
  syncadmin: { ko: 'SyncAdmin', en: 'SyncAdmin', ja: 'SyncAdmin' },
  syncapim: { ko: 'SyncAPIM', en: 'SyncAPIM', ja: 'SyncAPIM' },
  syncwatch: { ko: 'SyncWatch', en: 'SyncWatch', ja: 'SyncWatch' },
  syncllm: { ko: 'SyncLLM', en: 'SyncLLM', ja: 'SyncLLM' },
  syncshop: { ko: 'SyncShop', en: 'SyncShop', ja: 'SyncShop' },
  sdk: { ko: 'SyncSDK', en: 'SyncSDK', ja: 'SyncSDK' },
  ecosystem: { ko: '플랫폼 연동 구조', en: 'Platform Ecosystem', ja: 'プラットフォーム連携構造' },
  infra: { ko: '인프라 및 보안', en: 'Infrastructure & Security', ja: 'インフラ・セキュリティ' },
  patents: { ko: '특허 포트폴리오', en: 'Patent Portfolio', ja: '特許ポートフォリオ' },
  guide: { ko: '운영 가이드', en: 'Operations Guide', ja: '運用ガイド' },
  proposals: { ko: '소개서 및 도입 제안서', en: 'Brochures & Proposals', ja: '製品紹介書・導入提案書' },
  glossary: { ko: '전사 기술 용어집', en: 'Technical Glossary', ja: '全社技術用語集' },
  methodology: { ko: '사업 및 개발 방법론', en: 'Delivery Methodology', ja: '事業・開発方法論' },
  agile: { ko: '애자일', en: 'Agile', ja: 'アジャイル' },
  study: { ko: 'Study', en: 'Research Notes', ja: '研究資料' },
  logs: { ko: 'Logs', en: 'Engineering Logs', ja: 'エンジニアリング日誌' },
}

export function generateSidebar(locale: DocLocale, dir: string): SidebarItem[] {
  const docsBaseDir = path.resolve(__dirname, '..', locale)
  const dirPath = path.resolve(docsBaseDir, dir)
  const fallback = FALLBACK_LABELS[locale]
  const routePrefix = locale === 'ko' ? '' : `/${locale}`

  if (!fs.existsSync(dirPath)) return []
  const fileList = fs.readdirSync(dirPath).filter((file) => file.endsWith('.md'))

  const dirKey = dir.toLowerCase()
  const shortTitleMap = DEFAULT_SIDEBAR_SHORT_TITLES[dirKey]

  const filesWithMeta: FileMeta[] = fileList.map((file) => {
    const filePath = path.resolve(dirPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter } = matter(fileContent)
    const name = file.replace('.md', '')

    const defaultShortTitle = shortTitleMap?.[name]?.[locale]

    let title =
      frontmatter.sidebarTitle ||
      frontmatter.shortTitle ||
      defaultShortTitle ||
      frontmatter.title ||
      formatFilenameAsTitle(name, locale)

    if (name === 'index') {
      title = frontmatter.sidebarTitle || defaultShortTitle || fallback.overview
    }

    const sort = name === 'index' ? (frontmatter.sort !== undefined ? frontmatter.sort : -1) : frontmatter.sort || 999
    const link = name === 'index' ? `${routePrefix}/${dir}/` : `${routePrefix}/${dir}/${name}`

    return {
      file,
      name,
      title,
      sort,
      group: frontmatter.group || frontmatter.category,
      link,
    }
  })

  filesWithMeta.sort((a, b) => a.sort - b.sort)

  // 1. Predefined module category rules
  const rules = MODULE_CATEGORY_RULES[dirKey]
  if (rules && rules.length > 0) {
    const categorizedItems: SidebarItem[] = []
    const handledNames = new Set<string>()

    for (const rule of rules) {
      const matchedFiles = filesWithMeta.filter((f) => rule.match(f.name, f.file, f.sort) && !handledNames.has(f.name))
      if (matchedFiles.length > 0) {
        matchedFiles.forEach((f) => handledNames.add(f.name))
        categorizedItems.push({
          text: rule.group[locale],
          collapsed: false,
          items: matchedFiles.map((f) => ({
            text: f.title,
            link: f.link,
          })),
        })
      }
    }

    const remainingFiles = filesWithMeta.filter((f) => !handledNames.has(f.name))
    if (remainingFiles.length > 0) {
      categorizedItems.push({
        text: fallback.misc,
        collapsed: false,
        items: remainingFiles.map((f) => ({
          text: f.title,
          link: f.link,
        })),
      })
    }

    return categorizedItems
  }

  // 2. Frontmatter custom groups
  const hasCustomGroups = filesWithMeta.some((f) => !!f.group)
  if (hasCustomGroups) {
    const groupMap = new Map<string, FileMeta[]>()
    for (const file of filesWithMeta) {
      const g = file.group || fallback.general
      if (!groupMap.has(g)) groupMap.set(g, [])
      groupMap.get(g)!.push(file)
    }

    return Array.from(groupMap.entries()).map(([groupName, groupFiles]) => ({
      text: groupName,
      collapsed: false,
      items: groupFiles.map((f) => ({
        text: f.title,
        link: f.link,
      })),
    }))
  }

  // 3. Fallback: small section
  if (filesWithMeta.length <= 4) {
    return [
      {
        text: `${formatFilenameAsTitle(dir, locale)} ${fallback.docsSuffix}`,
        collapsed: false,
        items: filesWithMeta.map((f) => ({
          text: f.title,
          link: f.link,
        })),
      },
    ]
  }

  // 4. Default grouped list
  return [
    {
      text: `${formatFilenameAsTitle(dir, locale)} ${fallback.guideSuffix}`,
      collapsed: false,
      items: filesWithMeta.map((f) => ({
        text: f.title,
        link: f.link,
      })),
    },
  ]
}

export function buildLocaleSidebar(locale: DocLocale): Record<string, SidebarItem[]> {
  const prefix = locale === 'ko' ? '' : `/${locale}`
  const sidebar: Record<string, SidebarItem[]> = {}
  for (const section of SIDEBAR_SECTIONS) {
    sidebar[`${prefix}/${section}/`] = generateSidebar(locale, section)
  }
  return sidebar
}

export function generateKrSidebar(dir: string): SidebarItem[] {
  return generateSidebar('ko', dir)
}

function formatFilenameAsTitle(filename: string, locale: DocLocale = 'ko'): string {
  const custom = CUSTOM_SECTION_TITLES[filename.toLowerCase()]
  if (custom) {
    return custom[locale]
  }
  return filename
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
