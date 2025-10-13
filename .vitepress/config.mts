import { defineConfig } from "vitepress";

import { generateKrSidebar } from "./sitebar";

const GITHUB_URL = "https://github.com/DramaticCollaboration/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.BASE_URL || "/",
  lang: "ko-KR",
  title: "살아 있는 소프트웨어는 엠파시가 만듭니다",
  description: "Empathic Synergy (공감 시너지)를 통해 고객을 이해하고 지지하며 함께 목표를 달성합니다.",

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
      { name: 'keywords', content: '엠파시, Sync Series, SyncCms, SyncBoot, SyncApim, SyncEta' },
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
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('dataset_form.xlsx')
    }
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "살아 있는 소프트웨어는 엠파시가 만듭니다",
    logo: '/images/empasy-logo.svg', // Navigation bar logo
    logoDark: '/images/empasy-logo_white.svg',

    nav: [
      { text: "홈", link: "/" },
      {link: "synceta", text: 'SyncETA'},
      {link: "syncboot", text: 'SyncBoot'},
      {link: "synccms", text: 'SyncCms'},
      {link: "syncadmin", text: 'SyncAdmin'},
      {link: "agile", text: '애자일'},
      {
        text: '엠파시',
        link: 'https://www.empasy.com',
        target: '_blank',
        rel: 'noopener noreferrer', // Recommended for security
      }
    ],

    sidebar: {
        '/synceta/': generateKrSidebar('synceta'),
        '/syncboot/': generateKrSidebar('syncboot'),
        '/agile/': generateKrSidebar('agile'),
        '/logs/': generateKrSidebar('logs'),
        '/study/': generateKrSidebar('study'),
    },
    outline: {
     label: "현재 페이지",
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
});
