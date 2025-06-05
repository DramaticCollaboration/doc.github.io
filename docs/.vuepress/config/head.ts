import type { HeadConfig } from 'vuepress'

/**
 * `<head>` Label configuration
 *
 * @see https://v2.vuepress.vuejs.org/zh/reference/config.html#head
 */
export const head: HeadConfig[] = [
  // Site icon
  ['link', { rel: 'icon', href: '/images/logo.png' }],

  // SEO-related
  ['meta', { name: 'author', content: 'The VuePress Team' }], // 作者信息
  ['meta', { name: 'keywords', content: 'vuepress, vue, Documentation, Blog' }], // 关键词

  // PWA-related
  ['meta', { name: 'theme-color', content: '#3eaf7c' }], // Accent color
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }], // iOS Safari Fullscreen
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }], // iOS Safari Status bar style
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
]
