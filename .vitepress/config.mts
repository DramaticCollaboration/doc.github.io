import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

import { buildLocaleSidebar } from "./sitebar";

const GITHUB_URL = "https://github.com/DramaticCollaboration/";
const SITE_ORIGIN = "https://doc.empasy.com";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base: process.env.BASE_URL || "/",
    lang: "ko-KR",
    title: "Empasy Docs (엠파시 기술 문서)",
    titleTemplate: ":title | Empasy Docs (엠파시 기술 문서)",
    description:
      "엠파시(Empasy) Sync Series 공식 기술 문서 포털 - SyncVerse, SyncWatch, SyncAPIM, SyncETA, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncInsight, SyncCrawl, SyncLLM 아키텍처 및 개발 가이드",

    rewrites: {
      "ko/:rest*": ":rest*",
    },
    srcExclude: ["public/**", "README.md"],

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    head: [
      // Site icon
      ["link", { rel: "icon", href: "/images/favicon.ico" }],

      // SEO-related
      ["meta", { name: "author", content: "Empasy Inc." }],

      // PWA-related
      ["meta", { name: "theme-color", content: "#0e7490" }],
      ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
      ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "default" }],

      [
        "meta",
        { name: "naver-site-verification", content: "3102a764f7ad54fe27ab3083cd0a7b0f647be4c7" },
      ],

      ["link", { rel: "apple-touch-icon", href: "/images/favicon.png" }],
      ["meta", { name: "msapplication-TileColor", content: "#0e7490" }],

      // Pretendard Variable (Empasy unified webfont)
      [
        "link",
        {
          rel: "stylesheet",
          as: "style",
          crossorigin: "",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});`,
      ],
      ["script", { src: "https://www.googletagmanager.com/gtag/js?id=G-6BNPM5TX7C", async: true }],
      [
        "script",
        {},
        ` window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-6BNPM5TX7C'); `,
      ],
      [
        "script",
        {},
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPMTVVXN');`,
      ],
      [
        "script",
        { type: "application/ld+json" },
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Empasy Docs",
          url: `${SITE_ORIGIN}/`,
          inLanguage: ["ko-KR", "en-US", "ja-JP"],
          isPartOf: {
            "@type": "WebSite",
            name: "Empasy Official Website",
            url: "https://empasy.io/",
          },
          publisher: {
            "@type": "Organization",
            name: "Empasy Inc.",
            url: "https://empasy.io/",
          },
        }),
      ],
      [
        "script",
        {},
        `navigator.serviceWorker.getRegistrations().then(registrations => { for (const registration of registrations) { registration.unregister(); } });`,
      ],
    ],

    sitemap: {
      hostname: `${SITE_ORIGIN}/`,
      transformItems: (items) => {
        const filtered = items.filter((element) => !element.url.includes("README"));
        const urlSet = new Set(filtered.map((element) => element.url));
        return filtered.map((element) => {
          const basePath = element.url
            .replace(/^(?:en|ja)\//, "")
            .replace(/^(?:en|ja)$/, "");
          const koPath = basePath;
          const enPath = basePath ? `en/${basePath}` : "en/";
          const jaPath = basePath ? `ja/${basePath}` : "ja/";

          const links: Array<{ lang: string; url: string }> = [];
          if (urlSet.has(koPath)) links.push({ lang: "ko", url: `${SITE_ORIGIN}/${koPath}` });
          if (urlSet.has(enPath)) links.push({ lang: "en", url: `${SITE_ORIGIN}/${enPath}` });
          if (urlSet.has(jaPath)) links.push({ lang: "ja", url: `${SITE_ORIGIN}/${jaPath}` });
          if (urlSet.has(koPath)) links.push({ lang: "x-default", url: `${SITE_ORIGIN}/${koPath}` });

          const entry: {
            url: string;
            lastmod?: string | number | Date;
            links?: Array<{ lang: string; url: string }>;
          } = {
            url: element.url,
          };
          if (element.lastmod) {
            entry.lastmod = element.lastmod;
          }
          if (links.length > 0) {
            entry.links = links;
          }
          return entry;
        });
      },
    },

    ignoreDeadLinks: [
      (url) => {
        return url.toLowerCase().includes("dataset_form.xlsx") || url.includes("/templates/");
      },
    ],

    transformPageData(pageData) {
      const cleanPath = pageData.relativePath
        .replace(/^ko\//, "")
        .replace(/(^|\/)index\.md$/, "$1")
        .replace(/\.md$/, "");

      const canonicalUrl = `${SITE_ORIGIN}/${cleanPath}`;
      const basePath = cleanPath.replace(/^(?:en|ja)\//, "").replace(/^(?:en|ja)$/, "");
      const koUrl = `${SITE_ORIGIN}/${basePath}`;
      const enUrl = `${SITE_ORIGIN}/en/${basePath}`;
      const jaUrl = `${SITE_ORIGIN}/ja/${basePath}`;

      const pageLocale = cleanPath.startsWith("en/") || cleanPath === "en"
        ? "en"
        : cleanPath.startsWith("ja/") || cleanPath === "ja"
          ? "ja"
          : "ko";
      const defaultLocaleDesc: Record<"ko" | "en" | "ja", string> = {
        ko: "엠파시(Empasy) Sync Series 공식 기술 문서 포털 - SyncVerse, SyncWatch, SyncAPIM, SyncETA, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncInsight, SyncCrawl, SyncLLM 아키텍처 및 개발 가이드",
        en: "Official Empasy SyncSeries Technical Documentation Portal — Architecture, API specifications, and developer guides for SyncVerse, SyncWatch, SyncAPIM, SyncETA, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncInsight, SyncCrawl, and SyncLLM",
        ja: "株式会社エムパシー (Empasy Inc.) SyncSeries 公式技術ドキュメントポータル — SyncVerse、SyncWatch、SyncAPIM、SyncETA、SyncBoot、SyncCMS、SyncShop、SyncOps、SyncInsight、SyncCrawl、SyncLLM のアーキテクチャ・API仕様・開発ガイド",
      };
      const pageTitle = pageData.frontmatter.title || pageData.title || "Empasy Docs";
      const pageDesc =
        pageData.frontmatter.description ||
        pageData.description ||
        defaultLocaleDesc[pageLocale];

      pageData.frontmatter.head ??= [];
      const head = pageData.frontmatter.head;
      const upsertHead = (
        tag: string,
        attrs: Record<string, string>,
        matchKey: string,
        matchVal: string,
        overwrite = false
      ) => {
        const idx = head.findIndex(
          (item) => item[0] === tag && item[1] && item[1][matchKey] === matchVal
        );
        if (idx >= 0) {
          if (overwrite) head[idx] = [tag, attrs];
        } else {
          head.push([tag, attrs]);
        }
      };

      upsertHead("meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }, "name", "robots", false);
      upsertHead("link", { rel: "canonical", href: canonicalUrl }, "rel", "canonical", true);
      upsertHead("link", { rel: "alternate", hreflang: "ko", href: koUrl }, "hreflang", "ko", true);
      upsertHead("link", { rel: "alternate", hreflang: "en", href: enUrl }, "hreflang", "en", true);
      upsertHead("link", { rel: "alternate", hreflang: "ja", href: jaUrl }, "hreflang", "ja", true);
      upsertHead("link", { rel: "alternate", hreflang: "x-default", href: koUrl }, "hreflang", "x-default", true);
      upsertHead("meta", { property: "og:type", content: "article" }, "property", "og:type", false);
      upsertHead("meta", { property: "og:site_name", content: "Empasy Docs" }, "property", "og:site_name", false);
      upsertHead("meta", { property: "og:title", content: `${pageTitle} | Empasy Docs` }, "property", "og:title", true);
      upsertHead("meta", { property: "og:description", content: pageDesc }, "property", "og:description", true);
      upsertHead("meta", { property: "og:url", content: canonicalUrl }, "property", "og:url", true);
      upsertHead("meta", { name: "twitter:card", content: "summary_large_image" }, "name", "twitter:card", false);
      upsertHead("meta", { name: "twitter:title", content: `${pageTitle} | Empasy Docs` }, "name", "twitter:title", true);
      upsertHead("meta", { name: "twitter:description", content: pageDesc }, "name", "twitter:description", true);

      const hasPageJsonLd = head.some(
        (item) => item[0] === "script" && item[1] && item[1]["data-empasy-page-jsonld"] === "true"
      );
      if (!hasPageJsonLd) {
        const docsHomeUrl = pageLocale === "ko" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/${pageLocale}/`;
        const docsHomeName =
          pageLocale === "ko" ? "Empasy Docs" : pageLocale === "ja" ? "Empasy Docs (JA)" : "Empasy Docs (EN)";
        const langTag = pageLocale === "ko" ? "ko-KR" : pageLocale === "ja" ? "ja-JP" : "en-US";
        const graph: Array<Record<string, unknown>> = [
          {
            "@type": "TechArticle",
            headline: pageTitle,
            description: pageDesc,
            url: canonicalUrl,
            inLanguage: langTag,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
            author: {
              "@type": "Organization",
              name: "Empasy Inc.",
              url: "https://empasy.io/",
            },
            publisher: {
              "@type": "Organization",
              name: "Empasy Inc.",
              url: "https://empasy.io/",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_ORIGIN}/images/favicon.png`,
              },
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: docsHomeName, item: docsHomeUrl },
              ...(basePath
                ? [{ "@type": "ListItem", position: 2, name: pageTitle, item: canonicalUrl }]
                : []),
            ],
          },
        ];

        if (basePath === "synceta/" || basePath === "synceta") {
          const etaHomepageUrl =
            pageLocale === "ko" ? "https://eta.empasy.io/" : `https://eta.empasy.io/${pageLocale}/`;
          const empasySolutionUrl = `https://empasy.io/${pageLocale}/solutions/sync-eta.html`;
          const empasyDownloadUrl = `https://empasy.io/${pageLocale}/download_eta.html`;
          const demoPortalUrl =
            pageLocale === "ko"
              ? "https://demo.empasy.io/products/sync-eta/"
              : `https://demo.empasy.io/${pageLocale}/products/sync-eta/`;

          graph.push({
            "@type": "SoftwareApplication",
            name: "SyncETA",
            alternateName: pageLocale === "ko" ? ["씽크이티에이", "SyncETA Desktop"] : ["SyncETA Desktop"],
            softwareVersion: "0.0.66",
            applicationCategory: "DeveloperApplication, BusinessApplication",
            operatingSystem: "Windows 10, Windows 11, macOS 12+, Linux, Web",
            url: canonicalUrl,
            downloadUrl: empasyDownloadUrl,
            inLanguage: langTag,
            description: pageDesc,
            sameAs: [empasySolutionUrl, etaHomepageUrl, demoPortalUrl],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: pageLocale === "ko" ? "KRW" : pageLocale === "ja" ? "JPY" : "USD",
            },
            provider: {
              "@type": "Organization",
              name: "Empasy Inc.",
              url: "https://empasy.io/",
            },
          });
        }

        head.push([
          "script",
          { type: "application/ld+json", "data-empasy-page-jsonld": "true" },
          JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
        ]);
      }
    },

    locales: {
      root: {
        label: "한국어",
        lang: "ko-KR",
        title: "Empasy Docs (엠파시 기술 문서)",
        titleTemplate: ":title | Empasy Docs (엠파시 기술 문서)",
        description:
          "엠파시(Empasy) Sync Series 공식 기술 문서 포털 - SyncVerse, SyncWatch, SyncAPIM, SyncETA, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncInsight, SyncCrawl, SyncLLM 아키텍처 및 개발 가이드",
        head: [
          [
            "meta",
            {
              name: "keywords",
              content:
                "엠파시, Empasy, AI 테스트 자동화, 테스트 자동화, 노코드 QA, 셀렉터 자가 치유, Sync Series, SyncVerse, SyncWatch, SyncAPIM, SyncInsight, SyncETA, 씽크이티에이, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncLLM, AI 에이전트, AI 오케스트레이션, API 보안, 위협 인텔리전스, FinOps",
            },
          ],
        ],
        themeConfig: {
          langMenuLabel: "언어 선택",
          returnToTopLabel: "맨 위로",
          sidebarMenuLabel: "메뉴",
          darkModeSwitchLabel: "테마",
          lightModeSwitchTitle: "라이트 모드로 전환",
          darkModeSwitchTitle: "다크 모드로 전환",
          skipToContentLabel: "본문으로 건너뛰기",
          lastUpdated: {
            text: "최종 수정",
          },
          notFound: {
            title: "페이지를 찾을 수 없습니다",
            quote: "요청하신 기술 문서 경로가 이동되었거나 존재하지 않습니다.",
            linkLabel: "홈으로 이동",
            linkText: "문서 홈으로 돌아가기",
          },
          nav: [
            { text: "홈", link: "/" },
            {
              text: "제품 가이드",
              activeMatch:
                "^/(syncverse|syncinsight|synceta|synccrawl|syncboot|synccms|syncshop|syncops|syncllm|syncapim|syncwatch|proposals)/",
              items: [
                {
                  text: "주력 솔루션 (4종)",
                  items: [
                    { link: "/syncverse/", text: "SyncVerse — 협업·승인 통합 관리" },
                    { link: "/synceta/", text: "SyncETA — AI 테스트 자동화 · 데스크톱 앱" },
                    { link: "/syncboot/", text: "SyncBoot — 기업 업무 시스템 기반" },
                    { link: "/synccms/", text: "SyncCMS — 웹사이트 · 다국어 관리" },
                  ],
                },
                {
                  text: "데이터 · AI 확장 모듈",
                  items: [
                    { link: "/syncinsight/", text: "SyncInsight — 대화형 데이터 조회" },
                    { link: "/syncllm/", text: "SyncLLM — AI 비용 · 개인정보 관리" },
                    { link: "/synccrawl/", text: "SyncCrawl — 웹 데이터 자동 수집" },
                  ],
                },
                {
                  text: "보안 · 업무 확장 모듈",
                  items: [
                    { link: "/syncapim/", text: "SyncAPIM — API 현황 · 보안 관리" },
                    { link: "/syncwatch/", text: "SyncWatch — 보안 취약점 · 규칙 관리" },
                    { link: "/syncshop/", text: "SyncShop — 쇼핑몰 · 가격 관리" },
                    { link: "/syncops/", text: "SyncOps — SI 프로젝트 · 손익 관리" },
                  ],
                },
                {
                  text: "소개서 및 다운로드",
                  items: [
                    { link: "/proposals/", text: "제품 소개서 · 제안서 PDF 모음" },
                    { link: "https://empasy.io/ko/download_eta.html", text: "SyncETA 데스크톱 앱 다운로드" },
                  ],
                },
              ],
            },
            {
              text: "연동 및 개발",
              activeMatch: "^/(ecosystem|glossary|patents|infra|sdk|guide)/",
              items: [
                {
                  text: "전체 구조 및 표준 규격",
                  items: [
                    { link: "/ecosystem/", text: "공통 기반 및 모듈 연동 구조" },
                    { link: "/glossary/", text: "전사 기술 용어집 (Glossary)" },
                    { link: "/ecosystem/mcp-protocol", text: "표준 도구 호출 규격 (MCP)" },
                    { link: "/ecosystem/e2e-workflow", text: "모듈 간 연동 시나리오" },
                  ],
                },
                {
                  text: "SDK 및 운영 가이드",
                  items: [
                    { link: "/sdk/", text: "개발 시작 가이드" },
                    { link: "/sdk/custom-mcp-tool", text: "커스텀 도구 개발" },
                    { link: "/ecosystem/shared-modules-and-sdk", text: "공통 비즈니스 모듈" },
                    { link: "/guide/", text: "승인 및 비용 운영 가이드" },
                  ],
                },
                {
                  text: "인프라 및 특허",
                  items: [
                    { link: "/infra/", text: "서버 인프라 및 보안 체계" },
                    { link: "/patents/", text: "보유 특허 포트폴리오" },
                  ],
                },
              ],
            },
            {
              text: "방법론",
              activeMatch: "^/(methodology|agile)/",
              items: [
                {
                  text: "프로젝트 진행 표준",
                  items: [
                    { link: "/methodology/", text: "방법론 개요" },
                    { link: "/methodology/enterprise-project-lifecycle", text: "사업 전 주기 6단계 절차" },
                    { link: "/methodology/enterprise-document-templates", text: "표준 산출물 양식 모음" },
                    { link: "/methodology/ai-driven-development", text: "AI 협업 개발 절차" },
                  ],
                },
                {
                  text: "애자일 협업",
                  items: [
                    { link: "/agile/", text: "스크럼반 운영 방식" },
                    { link: "/agile/gitFlow", text: "Git 브랜치 운영 전략" },
                    { link: "/agile/checklistAndProcedure", text: "스프린트 점검표 및 절차" },
                  ],
                },
              ],
            },
            { text: "통합 데모", link: "https://demo.empasy.io/", target: "_blank", rel: "noopener" },
            { text: "엠파시 홈", link: "https://empasy.io/", target: "_blank", rel: "noopener" },
          ],
          sidebar: buildLocaleSidebar("ko"),
          outline: {
            level: [2, 3],
            label: "현재 페이지",
          },
          docFooter: {
            prev: "이전 페이지",
            next: "다음 페이지",
          },
        },
      },

      en: {
        label: "English",
        lang: "en-US",
        link: "/en/",
        title: "Empasy Docs",
        titleTemplate: ":title | Empasy Docs",
        description:
          "Official Empasy SyncSeries Technical Documentation Portal — Architecture, API specifications, and developer guides for SyncVerse, SyncWatch, SyncAPIM, SyncETA, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncInsight, SyncCrawl, and SyncLLM",
        head: [
          [
            "meta",
            {
              name: "keywords",
              content:
                "Empasy, AI Test Automation, Test Automation, Self-Healing QA, No-Code E2E Testing, SyncSeries, SyncVerse, SyncWatch, SyncAPIM, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncLLM, AI Agent, Multi-Agent Orchestration, MCP, API Security, Threat Intelligence, FinOps",
            },
          ],
        ],
        themeConfig: {
          langMenuLabel: "Change language",
          returnToTopLabel: "Return to top",
          sidebarMenuLabel: "Menu",
          darkModeSwitchLabel: "Appearance",
          lightModeSwitchTitle: "Switch to light theme",
          darkModeSwitchTitle: "Switch to dark theme",
          skipToContentLabel: "Skip to content",
          lastUpdated: {
            text: "Last updated",
          },
          notFound: {
            title: "PAGE NOT FOUND",
            quote: "The technical documentation page you requested may have moved or does not exist.",
            linkLabel: "Go to home",
            linkText: "Take me home",
          },
          nav: [
            { text: "Home", link: "/en/" },
            {
              text: "Products",
              activeMatch:
                "^/en/(syncverse|syncinsight|synceta|synccrawl|syncboot|synccms|syncshop|syncops|syncllm|syncapim|syncwatch|proposals)/",
              items: [
                {
                  text: "Flagship Solutions (4)",
                  items: [
                    { link: "/en/syncverse/", text: "SyncVerse — Orchestration & Approvals" },
                    { link: "/en/synceta/", text: "SyncETA — AI Test Automation Desktop App" },
                    { link: "/en/syncboot/", text: "SyncBoot — Enterprise Back-Office Core" },
                    { link: "/en/synccms/", text: "SyncCMS — Web & Multilingual CMS" },
                  ],
                },
                {
                  text: "Data & AI Extension Modules",
                  items: [
                    { link: "/en/syncinsight/", text: "SyncInsight — Conversational Data Analytics" },
                    { link: "/en/syncllm/", text: "SyncLLM — AI Cost & Privacy Gateway" },
                    { link: "/en/synccrawl/", text: "SyncCrawl — Adaptive Web Data Collection" },
                  ],
                },
                {
                  text: "Security & Operations Modules",
                  items: [
                    { link: "/en/syncapim/", text: "SyncAPIM — API Inventory & WAF Governance" },
                    { link: "/en/syncwatch/", text: "SyncWatch — Threat Feeds & Rule Compiler" },
                    { link: "/en/syncshop/", text: "SyncShop — MSA Commerce & Margin Control" },
                    { link: "/en/syncops/", text: "SyncOps — SI Project P&L & Compliance" },
                  ],
                },
                {
                  text: "Brochures & Downloads",
                  items: [
                    { link: "/en/proposals/", text: "Product Brochures & Proposal PDFs" },
                    { link: "https://empasy.io/en/download_eta.html", text: "Download SyncETA Desktop App" },
                  ],
                },
              ],
            },
            {
              text: "Integration & Dev",
              activeMatch: "^/en/(ecosystem|glossary|patents|infra|sdk|guide)/",
              items: [
                {
                  text: "Architecture & Standards",
                  items: [
                    { link: "/en/ecosystem/", text: "Shared Foundation & Ecosystem" },
                    { link: "/en/glossary/", text: "Enterprise Technical Glossary" },
                    { link: "/en/ecosystem/mcp-protocol", text: "MCP Tool Protocol" },
                    { link: "/en/ecosystem/e2e-workflow", text: "Cross-Module E2E Scenarios" },
                  ],
                },
                {
                  text: "SDK & Operations",
                  items: [
                    { link: "/en/sdk/", text: "Developer Quickstart" },
                    { link: "/en/sdk/custom-mcp-tool", text: "Custom MCP Tool Guide" },
                    { link: "/en/ecosystem/shared-modules-and-sdk", text: "Shared Business Modules" },
                    { link: "/en/guide/", text: "Approval & FinOps Operations" },
                  ],
                },
                {
                  text: "Infrastructure & Patents",
                  items: [
                    { link: "/en/infra/", text: "Infrastructure & Security" },
                    { link: "/en/patents/", text: "Patent Portfolio" },
                  ],
                },
              ],
            },
            {
              text: "Methodology",
              activeMatch: "^/en/(methodology|agile)/",
              items: [
                {
                  text: "Project Delivery Standards",
                  items: [
                    { link: "/en/methodology/", text: "Methodology Overview" },
                    { link: "/en/methodology/enterprise-project-lifecycle", text: "6-Phase Project Lifecycle" },
                    { link: "/en/methodology/enterprise-document-templates", text: "Standard Document Templates" },
                    { link: "/en/methodology/ai-driven-development", text: "AI-Driven Development (AI-SDLC)" },
                  ],
                },
                {
                  text: "Agile Collaboration",
                  items: [
                    { link: "/en/agile/", text: "Scrumban Operations" },
                    { link: "/en/agile/gitFlow", text: "Git Branching Strategy" },
                    { link: "/en/agile/checklistAndProcedure", text: "Sprint Checklists & Procedures" },
                  ],
                },
              ],
            },
            { text: "Live Demo", link: "https://demo.empasy.io/en/", target: "_blank", rel: "noopener" },
            { text: "Empasy Home", link: "https://empasy.io/en/pages/index.html", target: "_blank", rel: "noopener" },
          ],
          sidebar: buildLocaleSidebar("en"),
          outline: {
            level: [2, 3],
            label: "On this page",
          },
          docFooter: {
            prev: "Previous page",
            next: "Next page",
          },
        },
      },

      ja: {
        label: "日本語",
        lang: "ja-JP",
        link: "/ja/",
        title: "Empasy Docs (技術ドキュメント)",
        titleTemplate: ":title | Empasy Docs",
        description:
          "株式会社エムパシー (Empasy Inc.) SyncSeries 公式技術ドキュメントポータル — SyncVerse、SyncWatch、SyncAPIM、SyncETA、SyncBoot、SyncCMS、SyncShop、SyncOps、SyncInsight、SyncCrawl、SyncLLM のアーキテクチャ・API仕様・開発ガイド",
        head: [
          [
            "meta",
            {
              name: "keywords",
              content:
                "Empasy, エムパシー, AIテスト自動化, テスト自動化, 自己修復QA, ノーコードE2Eテスト, SyncSeries, SyncVerse, SyncWatch, SyncAPIM, SyncInsight, SyncETA, SyncCrawl, SyncBoot, SyncCMS, SyncShop, SyncOps, SyncLLM, AIエージェント, マルチエージェント, MCP, APIセキュリティ, 脅威インテリジェンス, FinOps",
            },
          ],
        ],
        themeConfig: {
          langMenuLabel: "言語切替",
          returnToTopLabel: "トップへ戻る",
          sidebarMenuLabel: "メニュー",
          darkModeSwitchLabel: "外観",
          lightModeSwitchTitle: "ライトテーマに切替",
          darkModeSwitchTitle: "ダークテーマに切替",
          skipToContentLabel: "本文へスキップ",
          lastUpdated: {
            text: "最終更新",
          },
          notFound: {
            title: "ページが見つかりません",
            quote: "お探しの技術ドキュメントは移動または削除された可能性があります。",
            linkLabel: "ホームへ移動",
            linkText: "ドキュメントホームへ戻る",
          },
          nav: [
            { text: "ホーム", link: "/ja/" },
            {
              text: "製品ガイド",
              activeMatch:
                "^/ja/(syncverse|syncinsight|synceta|synccrawl|syncboot|synccms|syncshop|syncops|syncllm|syncapim|syncwatch|proposals)/",
              items: [
                {
                  text: "主力ソリューション (4種)",
                  items: [
                    { link: "/ja/syncverse/", text: "SyncVerse — 協業・承認統合管理" },
                    { link: "/ja/synceta/", text: "SyncETA — AIテスト自動化・デスクトップアプリ" },
                    { link: "/ja/syncboot/", text: "SyncBoot — 企業業務システム基盤" },
                    { link: "/ja/synccms/", text: "SyncCMS — Web・多言語サイト管理" },
                  ],
                },
                {
                  text: "データ・AI 拡張モジュール",
                  items: [
                    { link: "/ja/syncinsight/", text: "SyncInsight — 対話型データ分析" },
                    { link: "/ja/syncllm/", text: "SyncLLM — AIコスト・個人情報管理" },
                    { link: "/ja/synccrawl/", text: "SyncCrawl — Webデータ自動収集" },
                  ],
                },
                {
                  text: "セキュリティ・業務モジュール",
                  items: [
                    { link: "/ja/syncapim/", text: "SyncAPIM — API棚卸し・WAF防御" },
                    { link: "/ja/syncwatch/", text: "SyncWatch — 脆弱性収集・ルール生成" },
                    { link: "/ja/syncshop/", text: "SyncShop — MSA型EC・利益率保護" },
                    { link: "/ja/syncops/", text: "SyncOps — SIプロジェクト損益・法令管理" },
                  ],
                },
                {
                  text: "紹介書・ダウンロード",
                  items: [
                    { link: "/ja/proposals/", text: "製品紹介書・導入提案書 PDF" },
                    { link: "https://empasy.io/ja/download_eta.html", text: "SyncETA デスクトップアプリ入手" },
                  ],
                },
              ],
            },
            {
              text: "連携・開発",
              activeMatch: "^/ja/(ecosystem|glossary|patents|infra|sdk|guide)/",
              items: [
                {
                  text: "全体構成・標準規約",
                  items: [
                    { link: "/ja/ecosystem/", text: "共通基盤・モジュール連携構造" },
                    { link: "/ja/glossary/", text: "全社技術用語集 (Glossary)" },
                    { link: "/ja/ecosystem/mcp-protocol", text: "標準ツール呼出規約 (MCP)" },
                    { link: "/ja/ecosystem/e2e-workflow", text: "モジュール間連携シナリオ" },
                  ],
                },
                {
                  text: "SDK・運用ガイド",
                  items: [
                    { link: "/ja/sdk/", text: "開発スタートガイド" },
                    { link: "/ja/sdk/custom-mcp-tool", text: "カスタムMCPツール開発" },
                    { link: "/ja/ecosystem/shared-modules-and-sdk", text: "共通ビジネスモジュール" },
                    { link: "/ja/guide/", text: "承認・コスト運用ガイド" },
                  ],
                },
                {
                  text: "インフラ・特許",
                  items: [
                    { link: "/ja/infra/", text: "サーバーインフラ・セキュリティ" },
                    { link: "/ja/patents/", text: "保有特許ポートフォリオ" },
                  ],
                },
              ],
            },
            {
              text: "方法論",
              activeMatch: "^/ja/(methodology|agile)/",
              items: [
                {
                  text: "プロジェクト推進標準",
                  items: [
                    { link: "/ja/methodology/", text: "方法論概要" },
                    { link: "/ja/methodology/enterprise-project-lifecycle", text: "事業全周期 6段階プロセス" },
                    { link: "/ja/methodology/enterprise-document-templates", text: "標準成果物様式集" },
                    { link: "/ja/methodology/ai-driven-development", text: "AI協業開発プロセス" },
                  ],
                },
                {
                  text: "アジャイル協業",
                  items: [
                    { link: "/ja/agile/", text: "スクラムバン運用方式" },
                    { link: "/ja/agile/gitFlow", text: "Gitブランチ運用戦略" },
                    { link: "/ja/agile/checklistAndProcedure", text: "スプリント点検表・手順" },
                  ],
                },
              ],
            },
            { text: "統合デモ", link: "https://demo.empasy.io/ja/", target: "_blank", rel: "noopener" },
            { text: "Empasy ホーム", link: "https://empasy.io/ja/pages/index.html", target: "_blank", rel: "noopener" },
          ],
          sidebar: buildLocaleSidebar("ja"),
          outline: {
            level: [2, 3],
            label: "このページの内容",
          },
          docFooter: {
            prev: "前のページ",
            next: "次のページ",
          },
        },
      },
    },

    themeConfig: {
      siteTitle: "Docs",
      logo: { light: "/images/logo.svg", dark: "/images/logo-dark.svg" },

      search: {
        provider: (process.env.SEARCH_PROVIDER as "local" | "algolia") || "local",
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: "문서 검색",
                  buttonAriaLabel: "문서 검색",
                },
                modal: {
                  displayDetails: "상세 목록 표시",
                  resetButtonTitle: "검색어 초기화",
                  backButtonTitle: "검색 닫기",
                  noResultsText: "일치하는 문서를 찾을 수 없습니다",
                  footer: {
                    selectText: "선택",
                    navigateText: "이동",
                    closeText: "닫기",
                  },
                },
              },
            },
            en: {
              translations: {
                button: {
                  buttonText: "Search docs",
                  buttonAriaLabel: "Search docs",
                },
                modal: {
                  displayDetails: "Display detailed list",
                  resetButtonTitle: "Reset search",
                  backButtonTitle: "Close search",
                  noResultsText: "No results for",
                  footer: {
                    selectText: "to select",
                    navigateText: "to navigate",
                    closeText: "to close",
                  },
                },
              },
            },
            ja: {
              translations: {
                button: {
                  buttonText: "ドキュメント検索",
                  buttonAriaLabel: "ドキュメント検索",
                },
                modal: {
                  displayDetails: "詳細リストを表示",
                  resetButtonTitle: "検索をリセット",
                  backButtonTitle: "検索を閉じる",
                  noResultsText: "該当するドキュメントが見つかりません",
                  footer: {
                    selectText: "選択",
                    navigateText: "移動",
                    closeText: "閉じる",
                  },
                },
              },
            },
          },
        },
      },

      socialLinks: [{ icon: "github", link: GITHUB_URL }],
    },

    markdown: {
      config: (md) => {
        const fence = md.renderer.rules.fence!;
        md.renderer.rules.fence = function (tokens, idx, options, env, self) {
          const { localeIndex = "root" } = env;
          const codeCopyButtonTitle = (() => {
            switch (localeIndex) {
              case "root":
              case "ko":
                return "코드 복사";
              case "ja":
                return "コードをコピー";
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
  })
);
