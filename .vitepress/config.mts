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
        text: '제품군 (Sync Series)',
        activeMatch: "^/(ecosystem|syncverse|syncinsight|synceta|synccrawl|syncboot|synccms|syncshop|syncllm|syncadmin|syncapim)/",
        items: [
          { link: "/ecosystem/", text: 'AI 에이전트 생태계 개요' },
          { link: "/syncverse/", text: 'SyncVerse (통합 관제탑)' },
          { link: "/syncinsight/", text: 'SyncInsight (의사결정 분석)' },
          { link: "/synceta/", text: 'SyncETA (자동화 테스트)' },
          { link: "/synccrawl/", text: 'SyncCrawl (적응형 크롤러)' },
          { link: "/syncboot/", text: 'SyncBoot (MSA 백엔드)' },
          { link: "/synccms/", text: 'SyncCMS (콘텐츠 관리)' },
          { link: "/syncshop/", text: 'SyncShop (이커머스 운영)' },
          { link: "/syncllm/", text: 'SyncLLM (AI 게이트웨이 & FinOps)' },
          { link: "/syncadmin/", text: '[아카이브] SyncAdmin' },
          { link: "/syncapim/", text: '[아카이브] SyncAPIM' }
        ]
      },
      {
        text: '기술 & 아키텍처',
        activeMatch: "^/(patents|infra)/",
        items: [
          { link: "/patents/", text: '원천기술 & 특허 (Patents)' },
          { link: "/infra/", text: '인프라 & 엔터프라이즈 보안 (Infra & Security)' }
        ]
      },
      {
        text: '개발 & 운영',
        activeMatch: "^/(sdk|guide|methodology|agile)/",
        items: [
          { link: "/sdk/", text: '개발자 센터 (Live SDK)' },
          { link: "/guide/", text: '운영 가이드 (Operations)' },
          { link: "/methodology/", text: '사업 방법론 종합 포털' },
          { link: "/methodology/enterprise-project-lifecycle", text: '사업 전 주기 총괄 (Lifecycle)' },
          { link: "/methodology/enterprise-document-templates", text: '표준 문서 양식 (122종)' },
          { link: "/methodology/ai-driven-development", text: 'AI 개발 생명주기 (AI-SDLC)' },
          { link: "/agile/", text: '애자일 공학 포털' },
          { link: "/agile/scrumban", text: '스크럼반 운영 체계' },
          { link: "/agile/gitFlow", text: 'Git Flow 브랜치 전략' }
        ]
      },
      {
        text: '리소스',
        activeMatch: "^/(study|logs)/",
        items: [
          { link: "/study/", text: '공부방 (R&D 연구소)' },
          { link: "/logs/", text: '작업 로그 (일지)' },
          {
            text: 'SyncSeries 사업 제안서 (PDF)',
            link: '/downloads/SyncSeries_Business_Proposal_v1.0.pdf',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            text: 'SyncSeries 솔루션 브로셔 (PDF)',
            link: '/downloads/SyncSeries_Brochure_v1.0.pdf',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            text: 'SyncETA 다운로드',
            link: 'https://empasy.io/ko/download_eta.html',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            text: '엠파시 공식 홈',
            link: 'https://empasy.io',
            target: '_blank',
            rel: 'noopener noreferrer',
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

