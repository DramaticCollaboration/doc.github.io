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
      group: '시작하기 & 아키텍처',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '핵심 지능형 엔진',
      match: (name) => ['intent-routing', 'self-healing-pipeline', 'finops-and-syncllm'].includes(name),
    },
    {
      group: '엔터프라이즈 거버넌스 & 확장',
      match: (name) => ['hitl-governance', 'saga-and-audit', 'mcp-tool-registry', 'enterprise-faq'].includes(name),
    },
  ],
  syncboot: [
    {
      group: '시작하기 & 아키텍처',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '핵심 기능 & 개발 도구',
      match: (name) => ['schema-studio', 'lowcode-generator', 'batch-and-scheduler', 'mcp-and-ai'].includes(name),
    },
    {
      group: '운영 & 엔터프라이즈',
      match: (name) => ['enterprise-security', 'production-guide', 'h2'].includes(name),
    },
  ],
  synccms: [
    {
      group: '시작하기 & 아키텍처',
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: '개발 & 연동 가이드',
      match: (name) => ['live-sdk-guide', 'onpremise-ai-security'].includes(name),
    },
    {
      group: '거버넌스 & 레퍼런스',
      match: (name) => ['integration-governance', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  synccrawl: [
    {
      group: '시작하기 & 아키텍처',
      match: (name) => ['index', 'architecture'].includes(name),
    },
    {
      group: '핵심 크롤링 & RAG 파이프라인',
      match: (name) => ['adaptive-crawling-engine', 'rag-knowledge-pipeline'].includes(name),
    },
    {
      group: '보안 & 레퍼런스',
      match: (name) => ['enterprise-security-governance', 'api-reference', 'enterprise-faq'].includes(name),
    },
  ],
  syncinsight: [
    {
      group: '시작하기 & 아키텍처',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '딥 리서치 & 데이터 분석',
      match: (name) => ['deep-research', 'nl2sql-and-data'].includes(name),
    },
    {
      group: '거버넌스 & 보안',
      match: (name) => ['action-approval', 'finops-and-security'].includes(name),
    },
  ],
  synceta: [
    {
      group: '시작하기 & 아키텍처',
      match: (name) => ['index', 'quickstart', 'architecture'].includes(name),
    },
    {
      group: '테스트 & 시나리오 관리',
      match: (name) => ['project', 'story', 'scenario-create', 'scenario-run'].includes(name),
    },
    {
      group: '데이터셋 & 대시보드',
      match: (name) => ['dataset', 'collection', 'dashboard'].includes(name),
    },
    {
      group: 'AI 자동화 & 엔터프라이즈',
      match: (name) => ['self-healing-and-vision', 'mcp-and-cicd', 'account', 'enterprise-security', 'glossary'].includes(name),
    },
  ],
  agile: [
    {
      group: '애자일 프로세스 & 가이드',
      match: (name) => ['index', 'guide', 'activity', 'checklistAndProcedure', 'dailyScrum'].includes(name),
    },
    {
      group: '개발 워크플로우 & 규칙',
      match: (name) => ['gitFlow', 'gitCommitLog', 'createIssue', 'PrinciplesForIssueUsage'].includes(name),
    },
    {
      group: '산정 & 프레임워크',
      match: (name) => ['storyPointGuide', 'xp_scrum_kanban', 'glossaryOfTerms'].includes(name),
    },
  ],
}

export function generateKrSidebar(dir: string): SidebarItem[] {
  // Calculate the absolute path to the docs directory
  const docsBaseDir = path.resolve(__dirname, '../ko')
  const dirPath = path.resolve(docsBaseDir, dir)

  // Skip directories that don't exist
  if (!fs.existsSync(dirPath)) return []
  const fileList = fs.readdirSync(dirPath).filter((file) => file.endsWith('.md'))

  const filesWithMeta: FileMeta[] = fileList.map((file) => {
    const filePath = path.resolve(dirPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter } = matter(fileContent)
    const name = file.replace('.md', '')

    let title = frontmatter.sidebarTitle || frontmatter.shortTitle || frontmatter.title || formatFilenameAsTitle(name)
    if (name === 'index') {
      title = frontmatter.sidebarTitle || `${formatFilenameAsTitle(dir)} 개요`
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
  const rules = MODULE_CATEGORY_RULES[dir.toLowerCase()]
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