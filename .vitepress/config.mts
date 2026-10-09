import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

import { generateKrSidebar } from "./sitebar";

const GITHUB_URL = "https://github.com/DramaticCollaboration/";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
  base: process.env.BASE_URL || "/",
  lang: "ko-KR",
  title: "살아 있는 소프트웨어는 엠파시가 만듭니다",
  description: "엠파시 Sync Series 공식 기술 문서 - AI 에이전트 기반 UI 테스트 자동화(SyncETA), 마이크로서비스 프레임워크(SyncBoot), 콘텐츠 관리(SyncCMS) 및 전사 관제탑(SyncVerse) 통합 가이드",

  rewrites: {
    "ko/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    // Site icon
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],

    // SEO-related
    ['meta', { name: 'author', content: '엠파시' }], // 作者信息
    [
      'meta',
      { name: 'keywords', content: '엠파시, Empasy, Sync Series, SyncVerse, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncLLM, AI 에이전트, AI 오케스트레이션, FinOps' },
    ], //

    // PWA-related
    ['meta', { name: 'theme-color', content: '#3eaf7c' }], // Accent color
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }], // iOS Safari Fullscreen
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }], // iOS Safari Status bar style

    [
      'meta',
      { name: 'naver-site-verification', content: '3102a764f7ad54fe27ab3083cd0a7b0f647be4c7' },
    ],

    ['link', { rel: 'apple-touch-icon', href: '/images/icons/apple-touch-icon.png' }], // Apple Touch Icon

    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ], // Safari Pinned Tab Icon
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/mstile-150x150.png',
      },
    ], // Windows Tile Icon
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }], // Windows Tile 背景色

    // Add other ones that are needed <head> tags eg Google Analytics Etc
    // ['script', { src: 'https://example.com/script.js' }],
    // Import the corresponding link
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-6BNPM5TX7C', async: true }],
    [
      'script',
      {},
      ` window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-6BNPM5TX7C'); `,
    ],
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPMTVVXN');`,
    ],
    [
      'script',
      {},
      `navigator.serviceWorker.getRegistrations().then(registrations => {      for (const registration of registrations) {         registration.unregister();       }     }); `,
    ],
  ],
  sitemap: {
    hostname: 'https://doc.empasy.com/',
    transformItems: (items) => {
      // items.push(...[{url: '/synceta/'}, {url: '/syncboot/'}, {url: '/agile/'}, {url: '/logs/'}, {url: '/study/'}]);
      return items.filter( (element) => !element.url.includes('README') ).map((element) => ( {
          url: element.url,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString()
      }));
    }
  },
  ignoreDeadLinks: [
    (url) => {
      return url.toLowerCase().includes('dataset_form.xlsx') || url.includes('/templates/')
    }
  ],
  transformPageData(pageData) {
    const canonicalUrl = `https://doc.empasy.com/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')
    
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Docs",
    logo: { light: '/images/logo.svg', dark: '/images/logo-dark.svg' }, // Navigation bar logo

    nav: [
      { text: "홈", link: "/" },
      {
        text: '제품 안내 (Sync Series)',
        activeMatch: "^/(syncverse|syncinsight|synceta|synccrawl|syncboot|synccms|syncshop|syncllm|syncadmin|syncapim)/",
        items: [
          {
            text: '관제 및 테스트',
            items: [
              { link: "/syncverse/", text: 'SyncVerse (통합 관제 센터)' },
              { link: "/syncinsight/", text: 'SyncInsight (데이터 분석 및 모니터링)' },
              { link: "/synceta/", text: 'SyncETA (테스트 자동화)' },
            ]
          },
          {
            text: '업무 도메인 솔루션',
            items: [
              { link: "/syncshop/", text: 'SyncShop (이커머스 운영)' },
              { link: "/synccms/", text: 'SyncCMS (콘텐츠 관리)' },
              { link: "/synccrawl/", text: 'SyncCrawl (웹 데이터 수집)' },
            ]
          },
          {
            text: '개발 플랫폼 및 게이트웨이',
            items: [
              { link: "/syncboot/", text: 'SyncBoot (백엔드 프레임워크)' },
              { link: "/syncllm/", text: 'SyncLLM (AI 모델 게이트웨이)' },
            ]
          },
          {
            text: '아카이브',
            items: [
              { link: "/syncadmin/", text: '[아카이브] SyncAdmin' },
              { link: "/syncapim/", text: '[아카이브] SyncAPIM' }
            ]
          }
        ]
      },
      {
        text: '기술 및 아키텍처',
        activeMatch: "^/(ecosystem|patents|infra)/",
        items: [
          {
            text: '전체 구조 및 표준 규격',
            items: [
              { link: "/ecosystem/", text: '플랫폼 연동 구조 개요' },
              { link: "/ecosystem/mcp-protocol", text: '표준 도구 호출 규격 (MCP)' },
              { link: "/ecosystem/e2e-workflow", text: '서비스 간 연동 시나리오' },
            ]
          },
          {
            text: '특허 기술 및 인프라',
            items: [
              { link: "/patents/", text: '특허 기술 안내 (5건)' },
              { link: "/infra/", text: '서버 인프라 및 보안 체계' },
            ]
          }
        ]
      },
      {
        text: '개발자 센터',
        activeMatch: "^/(sdk|guide)/",
        items: [
          {
            text: 'SDK 활용 및 도구 개발',
            items: [
              { link: "/sdk/", text: '개발 시작 가이드' },
              { link: "/sdk/custom-mcp-tool", text: '커스텀 도구 개발 (MCP)' },
              { link: "/ecosystem/agentscope-guide", text: 'AgentScope Java 연동 방법' },
              { link: "/sdk/sync-sdk-reference", text: 'SDK 인터페이스 명세' },
            ]
          },
          {
            text: '테스트 및 운영 관리',
            items: [
              { link: "/sdk/zero-mock-testing", text: '실환경 기반 테스트 가이드' },
              { link: "/ecosystem/shared-modules-and-sdk", text: '공통 비즈니스 모듈' },
              { link: "/guide/", text: '승인 및 비용 운영 가이드' },
            ]
          }
        ]
      },
      {
        text: '프로젝트 방법론',
        activeMatch: "^/(methodology|agile)/",
        items: [
          {
            text: '사업 진행 단계별 가이드',
            items: [
              { link: "/methodology/", text: '방법론 개요' },
              { link: "/methodology/enterprise-project-lifecycle", text: '사업 전 주기 6단계 절차' },
              { link: "/methodology/enterprise-document-templates", text: '표준 산출물 양식 모음' },
              { link: "/methodology/enterprise-action-items-guide", text: '단계별 주요 점검 사항' },
            ]
          },
          {
            text: 'AI 협업 개발 절차 (AI-SDLC)',
            items: [
              { link: "/methodology/ai-driven-development", text: 'AI 개발 주기 개요' },
              { link: "/methodology/ai-sdlc-prompt-recipes", text: '상황별 실무 프롬프트 모음' },
            ]
          },
          {
            text: '애자일 및 협업 방식',
            items: [
              { link: "/agile/", text: '스크럼반 운영 방식' },
              { link: "/agile/gitFlow", text: 'Git 브랜치 운영 전략' },
              { link: "/agile/checklistAndProcedure", text: '스프린트 점검표 및 절차' },
            ]
          }
        ]
      },
      {
        text: '기술 자료',
        activeMatch: "^/(study|logs)/",
        items: [
          {
            text: '연구 및 문제 해결',
            items: [
              { link: "/study/", text: '기술 연구 자료 (Study)' },
              { link: "/logs/", text: '작업 및 장애 조치 일지 (Logs)' },
            ]
          },
          {
            text: '소개서 및 다운로드',
            items: [
              {
                text: '사업 소개서 (PDF)',
                link: '/downloads/SyncSeries_Business_Proposal_v1.0.pdf',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              {
                text: '솔루션 안내서 (PDF)',
                link: '/downloads/SyncSeries_Brochure_v1.0.pdf',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              {
                text: 'SyncETA 설치 프로그램',
                link: 'https://empasy.io/ko/download_eta.html',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              {
                text: '엠파시 공식 홈페이지',
                link: 'https://empasy.io',
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
        '/patents/': generateKrSidebar('patents'),
        '/infra/': generateKrSidebar('infra'),
        '/sdk/': generateKrSidebar('sdk'),
        '/guide/': generateKrSidebar('guide'),
        '/methodology/': generateKrSidebar('methodology'),
        '/agile/': generateKrSidebar('agile'),
        '/ecosystem/': generateKrSidebar('ecosystem'),
        '/syncverse/': generateKrSidebar('syncverse'),
        '/syncinsight/': generateKrSidebar('syncinsight'),
        '/synccrawl/': generateKrSidebar('synccrawl'),
        '/synccms/': generateKrSidebar('synccms'),
        '/syncshop/': generateKrSidebar('syncshop'),
        '/syncllm/': generateKrSidebar('syncllm'),
        '/synceta/': generateKrSidebar('synceta'),
        '/syncboot/': generateKrSidebar('syncboot'),
        '/syncadmin/': generateKrSidebar('syncadmin'),
        '/syncapim/': generateKrSidebar('syncapim'),
        '/logs/': generateKrSidebar('logs'),
        '/study/': generateKrSidebar('study'),
    },
    outline: {
      level: [2, 3],
      label: "현재 페이지",
    },
    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지',
    },

    search: {
      provider: process.env.SEARCH_PROVIDER || "local",
      options: {
        appId: process.env.APPLICATION_ID || '',
        apiKey: process.env.SEARCH_API_KEY || '',
        indexName: process.env.INDEX_NAME || '',
      },
    },

    socialLinks: [{ icon: "github", link: GITHUB_URL }],
  },

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = "root" } = env;
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case "es":
              return "Copiar código";
            case "fa":
              return "کپی کد";
            case "ko":
              return "코드 복사";
            case "pt":
              return "Copiar código";
            case "ru":
              return "Скопировать код";
            case "zhCN":
              return "复制代码";
            default:
              return "Copy code";
          }
        })();
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        );
      };
    },
    image: {
      // false by default; Set to true to enable lazy loading for all images.
      lazyLoading: true,
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        "mermaid",
        "dayjs",
        "@braintree/sanitize-url",
        "cytoscape",
        "cytoscape-cose-bilkent",
      ],
    },
    resolve: {
      alias: [
        {
          find: /^dayjs$/,
          replacement: "dayjs/esm/index.js",
        },
      ],
    },
  },
}));

