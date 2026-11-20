import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

import { generateKrSidebar } from "./sitebar";

const GITHUB_URL = "https://github.com/DramaticCollaboration/";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
  base: process.env.BASE_URL || "/",
  lang: "ko-KR",
  title: "Empasy Docs (엠파시 기술 문서)",
  titleTemplate: ":title | Empasy Docs (엠파시 기술 문서)",
  description: "엠파시(Empasy) Sync Series 공식 기술 문서 포털 - SyncVerse, SyncWatch, SyncAPIM, SyncETA, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncInsight, SyncCrawl, SyncLLM 아키텍처 및 개발 가이드",

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
    ['meta', { name: 'author', content: '엠파시' }], // 작성자 정보
    [
      'meta',
      { name: 'keywords', content: '엠파시, Empasy, Sync Series, SyncVerse, SyncWatch, SyncAPIM, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncLLM, AI 에이전트, AI 오케스트레이션, API 보안, 위협 인텔리전스, FinOps' },
    ], //

    // PWA-related
    ['meta', { name: 'theme-color', content: '#0e7490' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    [
      'meta',
      { name: 'naver-site-verification', content: '3102a764f7ad54fe27ab3083cd0a7b0f647be4c7' },
    ],

    ['link', { rel: 'apple-touch-icon', href: '/images/favicon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#0e7490' }],

    // Pretendard Variable (Empasy unified webfont)
    [
      'link',
      {
        rel: 'stylesheet',
        as: 'style',
        crossorigin: '',
        href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css',
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
      { type: 'application/ld+json' },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Empasy Docs (엠파시 기술 문서)",
        "url": "https://doc.empasy.com/",
        "isPartOf": {
          "@type": "WebSite",
          "name": "엠파시 (Empasy) 공식 홈페이지",
          "url": "https://empasy.io/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "주식회사 엠파시 (Empasy Inc.)",
          "url": "https://empasy.io/"
        }
      }),
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
    const cleanPath = pageData.relativePath
      .replace(/^ko\//, '')
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '')
    const canonicalUrl = `https://doc.empasy.com/${cleanPath}`
    
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
        text: '제품 가이드',
        activeMatch: "^/(syncverse|syncinsight|synceta|synccrawl|syncboot|synccms|syncshop|syncops|syncllm|syncapim|syncwatch|proposals)/",
        items: [
          {
            text: '주력 솔루션 (4종)',
            items: [
              { link: "/syncverse/", text: 'SyncVerse — 협업·승인 통합 관리' },
              { link: "/synceta/", text: 'SyncETA — 자동 테스트 · 데스크톱 앱' },
              { link: "/syncboot/", text: 'SyncBoot — 기업 업무 시스템 기반' },
              { link: "/synccms/", text: 'SyncCMS — 웹사이트 · 다국어 관리' },
            ]
          },
          {
            text: '데이터 · AI 확장 모듈',
            items: [
              { link: "/syncinsight/", text: 'SyncInsight — 대화형 데이터 조회' },
              { link: "/syncllm/", text: 'SyncLLM — AI 비용 · 개인정보 관리' },
              { link: "/synccrawl/", text: 'SyncCrawl — 웹 데이터 자동 수집' },
            ]
          },
          {
            text: '보안 · 업무 확장 모듈',
            items: [
              { link: "/syncapim/", text: 'SyncAPIM — API 현황 · 보안 관리' },
              { link: "/syncwatch/", text: 'SyncWatch — 보안 취약점 · 규칙 관리' },
              { link: "/syncshop/", text: 'SyncShop — 쇼핑몰 · 가격 관리' },
              { link: "/syncops/", text: 'SyncOps — SI 프로젝트 · 손익 관리' },
            ]
          },
          {
            text: '소개서 및 다운로드',
            items: [
              { link: "/proposals/", text: '제품 소개서 · 제안서 PDF 모음' },
              { link: "https://empasy.io/ko/download_eta.html", text: 'SyncETA 데스크톱 앱 다운로드' },
            ]
          }
        ]
      },
      {
        text: '연동 및 개발',
        activeMatch: "^/(ecosystem|glossary|patents|infra|sdk|guide)/",
        items: [
          {
            text: '전체 구조 및 표준 규격',
            items: [
              { link: "/ecosystem/", text: '공통 기반 및 모듈 연동 구조' },
              { link: "/glossary/", text: '전사 기술 용어집 (Glossary)' },
              { link: "/ecosystem/mcp-protocol", text: '표준 도구 호출 규격 (MCP)' },
              { link: "/ecosystem/e2e-workflow", text: '모듈 간 연동 시나리오' },
            ]
          },
          {
            text: 'SDK 및 운영 가이드',
            items: [
              { link: "/sdk/", text: '개발 시작 가이드' },
              { link: "/sdk/custom-mcp-tool", text: '커스텀 도구 개발' },
              { link: "/ecosystem/shared-modules-and-sdk", text: '공통 비즈니스 모듈' },
              { link: "/guide/", text: '승인 및 비용 운영 가이드' },
            ]
          },
          {
            text: '인프라 및 특허',
            items: [
              { link: "/infra/", text: '서버 인프라 및 보안 체계' },
              { link: "/patents/", text: '보유 특허 포트폴리오' },
            ]
          }
        ]
      },
      {
        text: '방법론',
        activeMatch: "^/(methodology|agile)/",
        items: [
          {
            text: '프로젝트 진행 표준',
            items: [
              { link: "/methodology/", text: '방법론 개요' },
              { link: "/methodology/enterprise-project-lifecycle", text: '사업 전 주기 6단계 절차' },
              { link: "/methodology/enterprise-document-templates", text: '표준 산출물 양식 모음' },
              { link: "/methodology/ai-driven-development", text: 'AI 협업 개발 절차' },
            ]
          },
          {
            text: '애자일 협업',
            items: [
              { link: "/agile/", text: '스크럼반 운영 방식' },
              { link: "/agile/gitFlow", text: 'Git 브랜치 운영 전략' },
              { link: "/agile/checklistAndProcedure", text: '스프린트 점검표 및 절차' },
            ]
          }
        ]
      },
      { text: "통합 데모", link: "https://sync.empasy.io", target: "_blank", rel: "noopener" },
      { text: "엠파시 홈", link: "https://empasy.io/", target: "_blank", rel: "noopener" }
    ],

    sidebar: {
        '/glossary/': generateKrSidebar('glossary'),
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
        '/syncops/': generateKrSidebar('syncops'),
        '/syncllm/': generateKrSidebar('syncllm'),
        '/synceta/': generateKrSidebar('synceta'),
        '/syncboot/': generateKrSidebar('syncboot'),
        '/syncadmin/': generateKrSidebar('syncadmin'),
        '/syncapim/': generateKrSidebar('syncapim'),
        '/syncwatch/': generateKrSidebar('syncwatch'),
        '/proposals/': generateKrSidebar('proposals'),
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
              return "코드 복사";
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
