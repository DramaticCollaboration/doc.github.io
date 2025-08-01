import type { HeadConfig } from 'vuepress'

/**
 * `<head>` Label configuration
 *
 * @see https://v2.vuepress.vuejs.org/zh/reference/config.html#head
 */
export const head: HeadConfig[] = [
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
  [
    'script',
    {},
    "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-4QQGMW5P45\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-4QQGMW5P45');\n</script>",
  ],
]
