import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

// Predefined module category mapping for intuitive structural hierarchy
const MODULE_CATEGORY_RULES: Record<string, Array<{ group: string; match: (name: string, file: string, sort: number) => boolean }>> = {
  ecosystem: [
    {
      group: '생태계 아키텍처',
      match: (name) => ['index', 'mcp-protocol'].includes(name),
    },
    {
      group: '개발 & 표준',
      match: (name) => ['agentscope-guide', 'e2e-workflow', 'shared-modules-and-sdk'].includes(name),
    },
    {
      group: '엔터프라이즈 거버넌스',
      match: (name) => ['hitl-governance', 'security-and-compliance', 'zero-mock-harness', 'changelog'].includes(name),
    },
  ],
  syncshop: [
    {
      group: '시작하기',
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: '커머스 핵심 운영',
      match: (name) => ['catalog-and-order', 'promotion-and-marketing'].includes(name),
    },
    {
      group: '에이전트 & 거버넌스',
      match: (name) => ['mcp-and-agent', 'enterprise-faq'].includes(name),
    },
  ],
  syncverse: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '핵심 엔진',
      match: (name) => ['intent-routing', 'self-healing-pipeline', 'finops-and-syncllm'].includes(name),
    },
    {
      group: '거버넌스 & 확장',
      match: (name) => ['hitl-governance', 'saga-and-audit', 'mcp-tool-registry', 'enterprise-faq'].includes(name),
    },
  ],
  syncboot: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '핵심 기능 & 개발',
      match: (name) => ['schema-studio', 'lowcode-generator', 'batch-and-scheduler', 'mcp-and-ai', 'agentscope-integration'].includes(name),
    },
    {
      group: '아키텍처 & 패턴',
      match: (name) => ['saga-pattern', 'ddd-clean-architecture'].includes(name),
    },
    {
      group: '운영 & 보안',
      match: (name) => ['enterprise-security', 'production-guide', 'h2'].includes(name),
    },
  ],
  synccms: [
    {
      group: '시작하기',
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: '개발 & 연동',
      match: (name) => ['live-sdk-guide', 'onpremise-ai-security', 'ai-content-workflow'].includes(name),
    },
    {
      group: '거버넌스 & API',
      match: (name) => ['integration-governance', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  synccrawl: [
    {
      group: '시작하기',
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: '수집 엔진 & 콘솔',
      match: (name) => ['adaptive-crawling-engine', 'smart-crawling-console', 'distributed-agent-topology'].includes(name),
    },
    {
      group: '런타임 안정성 & 보안',
      match: (name) => ['session-arbitration', 'abac-data-security', 'anti-bot-and-scaling', 'enterprise-security-governance'].includes(name),
    },
    {
      group: 'RAG 지식 & API',
      match: (name) => ['rag-knowledge-pipeline', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  syncinsight: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '리서치 & 분석',
      match: (name) => ['deep-research', 'nl2sql-and-data', 'roundtable-debate'].includes(name),
    },
    {
      group: '도구 & 거버넌스',
      match: (name) => ['mcp-tool-reference', 'action-approval', 'finops-and-security', 'enterprise-faq'].includes(name),
    },
  ],
  synceta: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '웹 테스트 & 시나리오',
      match: (name) => ['project', 'story', 'scenario-create', 'scenario-run', 'dataset', 'collection', 'dashboard'].includes(name),
    },
    {
      group: '모바일 테스트 엔지니어링',
      match: (name) => ['mobile-testing-architecture', 'mobile-dual-engine', 'mobile-live-mirroring', 'device-farm-scheduler'].includes(name),
    },
    {
      group: 'AI 자동화 & 거버넌스',
      match: (name) => ['self-healing-and-vision', 'mcp-and-cicd', 'account', 'enterprise-security', 'glossary'].includes(name),
    },
  ],
  methodology: [
    {
      group: '사업 및 프로젝트 관리',
      match: (name) => [
        'index',
        'enterprise-project-lifecycle',
        'enterprise-action-items-guide',
        'enterprise-business-documents',
        'enterprise-document-templates',
        'presales-ai-playbook',
      ].includes(name),
    },
    {
      group: 'AI 개발 생명주기 (AI-SDLC)',
      match: (name) => [
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
      group: '애자일 & 스크럼반 운영',
      match: (name) => ['index', 'scrumban', 'guide', 'activity', 'dailyScrum', 'storyPointGuide', 'checklistAndProcedure'].includes(name),
    },
    {
      group: '개발 공학 & 형상관리',
      match: (name) => ['gitFlow', 'gitCommitLog', 'createIssue', 'PrinciplesForIssueUsage'].includes(name),
    },
    {
      group: '프레임워크 & 용어',
      match: (name) => ['xp_scrum_kanban', 'glossaryOfTerms'].includes(name),
    },
  ],
  syncllm: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '핵심 엔진',
      match: (name) => ['routing-and-gateway', 'finops-and-cache'].includes(name),
    },
    {
      group: '개발 & API',
      match: (name) => ['api-reference'].includes(name),
    },
    {
      group: '보안 & 거버넌스',
      match: (name) => ['security-and-pii', 'enterprise-faq'].includes(name),
    },
  ],
  study: [
    {
      group: '연구 자료 개요',
      match: (name) => ['index'].includes(name),
    },
    {
      group: '브라우저 자동화 & 테스트',
      match: (name) => ['playwright-cdp-visual-regression', 'vision-llm-self-healing-algorithm'].includes(name),
    },
    {
      group: '분산 환경 및 런타임',
      match: (name) => ['mcp-jsonrpc-agent-orchestration', 'springboot-virtual-threads-agentscope'].includes(name),
    },
    {
      group: 'AI 모델 및 지식 검색 (RAG)',
      match: (name) => ['rag', 'hybrid-rag-dense-sparse-reranking', 'qwen2vlfinetuning', 'llm-finetuning-degradation-analysis'].includes(name),
    },
  ],
  logs: [
    {
      group: '일지 개요',
      match: (name) => ['index'].includes(name),
    },
    {
      group: 'SyncEta 트러블슈팅',
      match: (name) => ['20260210_electron_webview_memory_leak', '20260218_playwright_dynamic_timeout_stabilization', '20260310_desktop_codesign_notarization_pipeline', '20250827_debugCrash', '20250827_electronDebug'].includes(name),
    },
    {
      group: 'SyncVerse & SyncBoot 아키텍처',
      match: (name) => ['20260225_redis_redlock_sse_saga_orchestration', '20260302_mybatis_metaobject_tenant_context_fix'].includes(name),
    },
  ],
  patents: [
    {
      group: '특허 체계',
      match: (name) => ['index'].includes(name),
    },
    {
      group: '등록 완료 특허',
      match: (name) => ['registered-web-action-recording'].includes(name),
    },
    {
      group: '출원 준비 특허 (우선심사)',
      match: (name) => ['04-semantic-dom-self-healing', '07-four-stage-wizard-build', '21-mobile-gesture-nlp', '22-a2a-telemetry-circuit'].includes(name),
    },
  ],
  infra: [
    {
      group: '인프라 아키텍처',
      match: (name) => ['index'].includes(name),
    },
    {
      group: '폐쇄망 & AI 보안',
      match: (name) => ['onpremise-llm-gpu', 'ai-safety-guardrails'].includes(name),
    },
    {
      group: '운영 & 고가용성',
      match: (name) => ['k8s-gitops-pipeline', 'disaster-recovery'].includes(name),
    },
  ],
  sdk: [
    {
      group: '시작 가이드',
      match: (name) => ['index'].includes(name),
    },
    {
      group: '도구 개발 및 연동',
      match: (name) => ['custom-mcp-tool', 'sync-sdk-reference'].includes(name),
    },
    {
      group: '테스트 및 품질 검증',
      match: (name) => ['zero-mock-testing'].includes(name),
    },
  ],
  guide: [
    {
      group: '운영 안내',
      match: (name) => ['index'].includes(name),
    },
    {
      group: '승인 및 비용 관리',
      match: (name) => ['hitl-approval-operations', 'finops-budget-operations'].includes(name),
    },
  ],
}

// Concise 1-line standard sidebar titles
const DEFAULT_SIDEBAR_SHORT_TITLES: Record<string, Record<string, string>> = {
  ecosystem: {
    index: '생태계 개요',
    'mcp-protocol': 'MCP 프로토콜',
    'agentscope-guide': 'AgentScope 가이드',
    'e2e-workflow': 'E2E 연동 시나리오',
    'hitl-governance': 'HITL & Saga 거버넌스',
    'security-and-compliance': '보안 백서 & 컴플라이언스',
    'shared-modules-and-sdk': '공유 모듈 & SDK',
    'zero-mock-harness': 'Zero-Mock 품질 하네스',
    changelog: '릴리스 노트 (Changelog)',
  },
  syncshop: {
    index: '개요',
    architecture: '시스템 아키텍처',
    'catalog-and-order': '상품 및 주문 관리',
    'promotion-and-marketing': '프로모션 및 마케팅',
    'mcp-and-agent': 'MCP 도구 & A2A 연동',
    'enterprise-faq': '도입 FAQ',
  },
  syncllm: {
    index: '개요',
    quickstart: '빠른 시작',
    architecture: '시스템 아키텍처',
    'routing-and-gateway': '지능형 모델 라우팅',
    'finops-and-cache': 'FinOps & 시맨틱 캐시',
    'security-and-pii': '보안 & PII 마스킹',
    'api-reference': 'API 레퍼런스',
    'enterprise-faq': '도입 FAQ',
  },
  syncverse: {
    index: '개요',
    architecture: '시스템 아키텍처',
    quickstart: '빠른 시작',
    'intent-routing': '인텐트 라우팅',
    'self-healing-pipeline': '자가 치유',
    'finops-and-syncllm': 'LLM 게이트웨이',
    'hitl-governance': 'HITL 승인',
    'saga-and-audit': '분산 트랜잭션',
    'mcp-tool-registry': 'MCP 도구 레지스트리',
    'enterprise-faq': '도입 FAQ',
  },
  syncboot: {
    index: '개요',
    architecture: '시스템 아키텍처',
    quickstart: '빠른 시작',
    'schema-studio': '스키마 스튜디오',
    'lowcode-generator': '로우코드 생성기',
    'batch-and-scheduler': '배치 & 스케줄러',
    'mcp-and-ai': 'MCP & AI 연동',
    'agentscope-integration': 'AgentScope 연동 실무',
    'saga-pattern': 'Saga 분산 트랜잭션',
    'ddd-clean-architecture': 'DDD & 클린 아키텍처',
    'enterprise-security': '보안 & 멀티테넌시',
    'production-guide': '운영 배포 가이드',
    h2: '인메모리 H2 모드',
  },
  synccms: {
    index: '개요',
    architecture: '시스템 아키텍처',
    'live-sdk-guide': 'Live SDK 연동',
    'onpremise-ai-security': '온프레미스 AI 보안',
    'ai-content-workflow': 'AI 콘텐츠 워크플로우',
    'integration-governance': '거버넌스 & 권한',
    'api-reference': 'API 레퍼런스',
    'enterprise-faq': '도입 FAQ',
  },
  synccrawl: {
    index: '개요',
    architecture: '시스템 아키텍처',
    'adaptive-crawling-engine': '적응형 크롤링',
    'smart-crawling-console': '스마트 크롤링 콘솔',
    'distributed-agent-topology': '분산 에이전트 토폴로지',
    'session-arbitration': '세션 중재 & 안정성',
    'abac-data-security': 'ABAC 데이터 보안',
    'rag-knowledge-pipeline': 'RAG 지식 파이프라인',
    'anti-bot-and-scaling': '안티봇 & 분산 스케일링',
    'enterprise-security-governance': '보안 및 거버넌스',
    'api-reference': 'API 레퍼런스',
    'enterprise-faq': '도입 FAQ',
  },
  syncinsight: {
    index: '개요',
    architecture: '시스템 아키텍처',
    quickstart: '빠른 시작',
    'deep-research': '딥 리서치',
    'nl2sql-and-data': 'NL2SQL 데이터 분석',
    'roundtable-debate': '라운드테이블 토론',
    'mcp-tool-reference': 'MCP 도구 레퍼런스',
    'action-approval': '실행 승인 (HITL)',
    'finops-and-security': 'FinOps & 보안',
    'enterprise-faq': '도입 FAQ',
  },
  synceta: {
    index: '개요',
    architecture: '시스템 아키텍처',
    quickstart: '빠른 시작',
    project: '프로젝트 관리',
    story: '스토리 관리',
    'scenario-create': '시나리오 생성',
    'scenario-run': '시나리오 실행',
    dataset: '데이터셋 관리',
    collection: '컬렉션 관리',
    dashboard: '품질 대시보드',
    'mobile-testing-architecture': '모바일 E2E 아키텍처',
    'mobile-dual-engine': '듀얼 자동화 엔진 명세',
    'mobile-live-mirroring': '초저지연 미러링 & 캡처',
    'device-farm-scheduler': '디바이스 팜 스케줄러',
    'self-healing-and-vision': '자가 치유 & 비전',
    'mcp-and-cicd': 'MCP & CI/CD',
    account: '계정 및 권한',
    'enterprise-security': '엔터프라이즈 보안',
    glossary: '용어 사전',
  },
  methodology: {
    index: '방법론 종합 포털 (Overview)',
    'enterprise-project-lifecycle': '사업 전 주기 총괄 (Lifecycle)',
    'enterprise-action-items-guide': '단계별 실행 가이드 (SOP)',
    'enterprise-business-documents': '사업 전 주기 표준 문서 체계',
    'enterprise-document-templates': '표준 문서 양식 다운로드 (122종)',
    'presales-ai-playbook': '사전영업 & 제안 플레이북',
    'ai-driven-development': 'AI 개발 생명주기 (AI-SDLC)',
    'ai-sdlc-01-requirements': '[01단계] 기획 및 요구사항 구체화',
    'ai-sdlc-02-architecture': '[02단계] 명세 우선 아키텍처 설계',
    'ai-sdlc-03-implementation': '[03단계] AI 협업 코딩 및 자율 구현',
    'ai-sdlc-04-testing': '[04단계] 테스트 자동화 & 4단계 치유',
    'ai-sdlc-05-review-deploy': '[05단계] 코드 검토 및 무인 배포',
    'ai-sdlc-prompt-recipes': '상황별 실전 프롬프트 모음집',
  },
  agile: {
    index: '개요 (스크럼반)',
    scrumban: '스크럼반 운영 체계',
    guide: '애자일 가이드',
    activity: '스프린트 활동',
    checklistAndProcedure: '체크리스트 & 절차',
    dailyScrum: '데일리 스크럼',
    gitFlow: 'Git 브랜치 전략',
    gitCommitLog: '커밋 로그 규칙',
    createIssue: '이슈 작성법',
    PrinciplesForIssueUsage: '이슈 원칙',
    storyPointGuide: '스토리 포인트',
    xp_scrum_kanban: '스크럼 vs 칸반',
    glossaryOfTerms: '애자일 용어',
  },
  syncadmin: {
    index: '개요',
  },
  syncapim: {
    index: '개요',
  },
  study: {
    index: '연구 자료 개요',
    'playwright-cdp-visual-regression': 'Playwright & CDP 동기화',
    'vision-llm-self-healing-algorithm': 'Vision-LLM 자가치유 알고리즘',
    'mcp-jsonrpc-agent-orchestration': 'MCP 도구 오케스트레이션',
    'hybrid-rag-dense-sparse-reranking': '하이브리드 RAG & 리랭킹',
    'springboot-virtual-threads-agentscope': '가상 스레드 & AgentScope',
    qwen2vlfinetuning: 'Qwen2-VL 파인튜닝',
    'llm-finetuning-degradation-analysis': '파인튜닝 성능 저하 분석',
    rag: 'RAG 파이프라인 기초',
  },
  logs: {
    index: '작업 일지 개요',
    '20260210_electron_webview_memory_leak': '[SyncEta] Electron 메모리 누수',
    '20260218_playwright_dynamic_timeout_stabilization': '[SyncEta] Playwright 타임아웃 안정화',
    '20260225_redis_redlock_sse_saga_orchestration': '[SyncVerse] Redis Redlock 동기화',
    '20260302_mybatis_metaobject_tenant_context_fix': '[SyncBoot] 멀티테넌트 컨텍스트 픽스',
    '20260310_desktop_codesign_notarization_pipeline': '[SyncEta] 코드 서명 & 공증 파이프라인',
    '20250827_debugCrash': '디버그 크래시 분석',
    '20250827_electronDebug': 'Electron 디버깅 일지',
  },
  patents: {
    index: '특허 체계 개요',
    'registered-web-action-recording': '[등록특허] 웹 레코딩 & 자연어 QA',
    '04-semantic-dom-self-healing': '[04호] 크롤링 셀렉터 자가치유',
    '07-four-stage-wizard-build': '[07호] 4단계 위저드 & 빌드 치유',
    '21-mobile-gesture-nlp': '[21호] 모바일 제스처 & 자연어 QA',
    '22-a2a-telemetry-circuit': '[22호] A2A 서킷 브레이커',
  },
  infra: {
    index: '인프라 개요',
    'onpremise-llm-gpu': '온프레미스 GPU 서빙',
    'ai-safety-guardrails': 'AI 보안 & 가드레일',
    'k8s-gitops-pipeline': 'K8s & GitOps 파이프라인',
    'disaster-recovery': '재해 복구 & DR',
  },
  sdk: {
    index: '개발자 센터 개요',
    'custom-mcp-tool': '커스텀 MCP 도구 개발',
    'sync-sdk-reference': 'Sync SDK 레퍼런스',
    'zero-mock-testing': 'Zero-Mock 테스트 하네스',
  },
  guide: {
    index: '운영 가이드 개요',
    'hitl-approval-operations': '다단계 결재 & 감사',
    'finops-budget-operations': 'FinOps 예산 & 비용 관리',
  },
}

export function generateKrSidebar(dir: string): SidebarItem[] {
  // Calculate the absolute path to the docs directory
  const docsBaseDir = path.resolve(__dirname, '../ko')
  const dirPath = path.resolve(docsBaseDir, dir)

  // Skip directories that don't exist
  if (!fs.existsSync(dirPath)) return []
  const fileList = fs.readdirSync(dirPath).filter((file) => file.endsWith('.md'))

  const dirKey = dir.toLowerCase()
  const shortTitleMap = DEFAULT_SIDEBAR_SHORT_TITLES[dirKey]

  const filesWithMeta: FileMeta[] = fileList.map((file) => {
    const filePath = path.resolve(dirPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter } = matter(fileContent)
    const name = file.replace('.md', '')

    const defaultShortTitle = shortTitleMap ? shortTitleMap[name] : undefined

    let title =
      frontmatter.sidebarTitle ||
      frontmatter.shortTitle ||
      defaultShortTitle ||
      frontmatter.title ||
      formatFilenameAsTitle(name)

    if (name === 'index') {
      title = frontmatter.sidebarTitle || defaultShortTitle || '개요'
    }

    const sort = name === 'index' ? (frontmatter.sort !== undefined ? frontmatter.sort : -1) : (frontmatter.sort || 999)
    const link = name === 'index' ? `/${dir}/` : `/${dir}/${name}`

    return {
      file,
      name,
      title,
      sort,
      group: frontmatter.group || frontmatter.category,
      link,
    }
  })

  // Sort files by sort order
  filesWithMeta.sort((a, b) => a.sort - b.sort)

  // 1. Check if predefined module category rules exist
  const rules = MODULE_CATEGORY_RULES[dirKey]
  if (rules && rules.length > 0) {
    const categorizedItems: SidebarItem[] = []
    const handledNames = new Set<string>()

    for (const rule of rules) {
      const matchedFiles = filesWithMeta.filter((f) => rule.match(f.name, f.file, f.sort) && !handledNames.has(f.name))
      if (matchedFiles.length > 0) {
        matchedFiles.forEach((f) => handledNames.add(f.name))
        categorizedItems.push({
          text: rule.group,
          collapsed: false,
          items: matchedFiles.map((f) => ({
            text: f.title,
            link: f.link,
          })),
        })
      }
    }

    // Remaining files not matched
    const remainingFiles = filesWithMeta.filter((f) => !handledNames.has(f.name))
    if (remainingFiles.length > 0) {
      categorizedItems.push({
        text: '기타 & 추가 자료',
        collapsed: false,
        items: remainingFiles.map((f) => ({
          text: f.title,
          link: f.link,
        })),
      })
    }

    return categorizedItems
  }

  // 2. Check if frontmatter has custom groups
  const hasCustomGroups = filesWithMeta.some((f) => !!f.group)
  if (hasCustomGroups) {
    const groupMap = new Map<string, FileMeta[]>()
    for (const file of filesWithMeta) {
      const g = file.group || '일반'
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

  // 3. Fallback: If 1 to 4 items, single clean group
  if (filesWithMeta.length <= 4) {
    return [
      {
        text: `${formatFilenameAsTitle(dir)} 문서`,
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
      text: `${formatFilenameAsTitle(dir)} 가이드`,
      collapsed: false,
      items: filesWithMeta.map((f) => ({
        text: f.title,
        link: f.link,
      })),
    },
  ]
}

/**
 * Convert the file name of kebab-case or snake_case to a Title Case title
 * @param {string} filename File name (without extension)
 * @returns {string} Converted title
 */
function formatFilenameAsTitle(filename: string): string {
  const customMap: Record<string, string> = {
    syncverse: 'SyncVerse',
    syncboot: 'SyncBoot',
    synccms: 'SyncCMS',
    synccrawl: 'SyncCrawl',
    syncinsight: 'SyncInsight',
    synceta: 'SyncETA',
    syncadmin: 'SyncAdmin',
    syncapim: 'SyncAPIM',
    methodology: '사업 및 개발 방법론',
    agile: '애자일',
    study: 'Study',
    logs: 'Logs',
  }
  if (customMap[filename.toLowerCase()]) {
    return customMap[filename.toLowerCase()]
  }
  return filename
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}