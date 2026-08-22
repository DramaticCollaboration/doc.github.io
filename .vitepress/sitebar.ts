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
      match: (name) => ['schema-studio', 'lowcode-generator', 'batch-and-scheduler', 'mcp-and-ai'].includes(name),
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
      match: (name) => ['live-sdk-guide', 'onpremise-ai-security'].includes(name),
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
      group: '크롤링 & RAG',
      match: (name) => ['adaptive-crawling-engine', 'rag-knowledge-pipeline'].includes(name),
    },
    {
      group: '보안 & API',
      match: (name) => ['enterprise-security-governance', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  syncinsight: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '리서치 & 분석',
      match: (name) => ['deep-research', 'nl2sql-and-data'].includes(name),
    },
    {
      group: '거버넌스 & 보안',
      match: (name) => ['action-approval', 'finops-and-security'].includes(name),
    },
  ],
  synceta: [
    {
      group: '시작하기',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '테스트 & 시나리오',
      match: (name) => ['project', 'story', 'scenario-create', 'scenario-run'].includes(name),
    },
    {
      group: '데이터 & 대시보드',
      match: (name) => ['dataset', 'collection', 'dashboard'].includes(name),
    },
    {
      group: 'AI 자동화 & 보안',
      match: (name) => ['self-healing-and-vision', 'mcp-and-cicd', 'account', 'enterprise-security', 'glossary'].includes(name),
    },
  ],
  agile: [
    {
      group: '애자일 프로세스',
      match: (name) => ['index', 'guide', 'activity', 'checklistAndProcedure', 'dailyScrum'].includes(name),
    },
    {
      group: '개발 워크플로우',
      match: (name) => ['gitFlow', 'gitCommitLog', 'createIssue', 'PrinciplesForIssueUsage'].includes(name),
    },
    {
      group: '산정 & 프레임워크',
      match: (name) => ['storyPointGuide', 'xp_scrum_kanban', 'glossaryOfTerms'].includes(name),
    },
  ],
}

// Concise 1-line standard sidebar titles
const DEFAULT_SIDEBAR_SHORT_TITLES: Record<string, Record<string, string>> = {
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
    'enterprise-security': '보안 & 멀티테넌시',
    'production-guide': '운영 배포 가이드',
    h2: '인메모리 H2 모드',
  },
  synccms: {
    index: '개요',
    architecture: '시스템 아키텍처',
    'live-sdk-guide': 'Live SDK 연동',
    'onpremise-ai-security': '온프레미스 AI 보안',
    'integration-governance': '거버넌스 & 권한',
    'api-reference': 'API 레퍼런스',
    'enterprise-faq': '도입 FAQ',
  },
  synccrawl: {
    index: '개요',
    architecture: '시스템 아키텍처',
    'adaptive-crawling-engine': '적응형 크롤링',
    'rag-knowledge-pipeline': 'RAG 지식 파이프라인',
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
    'action-approval': '실행 승인 (HITL)',
    'finops-and-security': 'FinOps & 보안',
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
    'self-healing-and-vision': '자가 치유 & 비전',
    'mcp-and-cicd': 'MCP & CI/CD',
    account: '계정 및 권한',
    'enterprise-security': '엔터프라이즈 보안',
    glossary: '용어 사전',
  },
  agile: {
    index: '개요',
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
    index: '개요',
  },
  logs: {
    index: '개요',
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
    agile: 'Agile',
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