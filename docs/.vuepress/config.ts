import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import fs from 'fs'

// 导入拆分的配置模块
import { head } from './config/head.js'
import { plugins } from './config/plugins.js'
import { zh as zhNavbar } from './config/navbar/zh.js'
import { zh as zhSidebar } from './config/sidebar/zh.js'

// 获取当前文件的目录路径
const __dirname = getDirname(import.meta.url)

/**
 * 从 package.json 读取仓库链接
 * @returns {string} 仓库链接 URL
 */
function getRepoInfo(): string {
  try {
    const packageJsonPath = path.resolve(__dirname, '../../package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    const repoUrl = packageJson.repository?.url || ''
    let repo = ''

    if (repoUrl) {
      // 尝试从 git URL 中提取 HTTPS 链接
      const match = repoUrl.match(/github\.com[\/:]([^\/]+\/[^\/\.]+)/)
      if (match && match[1]) {
        repo = `https://github.com/${match[1]}`
      } else {
        // 如果不是 GitHub URL 或格式不匹配，直接使用原始 URL
        repo = repoUrl
      }
    } else {
      // 如果 package.json 中没有，则使用默认值
      repo = 'https://github.com/yourusername/vuepress-template'
      console.warn('Warning: repository.url not found in package.json. Using default repo URL.')
    }

    return repo
  } catch (e) {
    console.error('Error reading package.json for repo info:', e)
    // 出错时返回默认值
    return 'https://github.com/yourusername/vuepress-template'
  }
}

// 定义 VuePress 配置
// #region config-snippet
export default defineUserConfig({
  // ==================
  // 站点基础配置
  // ==================
  lang: 'zh-CN', // 站点语言
  title: 'VuePress 模板', // 站点标题
  description: '基于 VuePress 的现代化文档模板', // 站点描述 (用于 SEO)
  head: head, // <head> 标签配置，导入自 ./config/head.js

  // ==================
  // 构建工具配置
  // ==================
  // 建议 PWA 插件设置为 false，避免 Service Worker 缓存所有资源
  shouldPrefetch: false,
  // 使用 Vite 打包工具
  bundler: viteBundler({
    viteOptions: {}, // Vite 配置项
    vuePluginOptions: {}, // @vitejs/plugin-vue 配置项
  }),

  // ==================
  // 主题配置
  // ==================
  theme: defaultTheme({
    // -- 主题基础配置 --
    logo: '/images/logo.png', // 导航栏 Logo
    repo: getRepoInfo(), // 仓库链接，自动从 package.json 读取
    docsDir: 'docs', // 文档源文件目录

    // -- 多语言支持 --
    locales: {
      // 中文语言配置
      '/': {
        // -- Base --
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // -- Navbar --
        navbar: zhNavbar, // 导航栏配置，导入自 ./config/navbar/zh.js

        // -- Sidebar --
        sidebar: zhSidebar, // 侧边栏配置，导入自 ./config/sidebar/zh.js
        sidebarDepth: 2, // 侧边栏提取标题的深度

        // -- Page meta --
        editLink: true, // 是否启用 编辑此页 链接
        editLinkText: '在 GitHub 上编辑此页', // 编辑此页 链接文本
        lastUpdated: true, // 是否启用 最后更新时间
        lastUpdatedText: '上次更新', // 最后更新时间 文本
        contributors: true, // 是否启用 贡献者列表
        contributorsText: '贡献者', // 贡献者列表 文本

        // -- Custom Containers --
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // -- 404 Page --
        notFound: ['页面未找到', '您访问的页面不存在'],
        backToHome: '返回首页',

        // -- A11y --
        // TODO: Add A11y related locale config if needed
        // openInNewWindow: '在新窗口打开',
        // toggleColorMode: '切换颜色模式',
        // toggleSidebar: '切换侧边栏',
      },
      // 可以在这里添加其他语言的配置，例如英文
      // '/en/': {
      //   selectLanguageName: 'English',
      //   ... (其他英文配置)
      // }
    },

    // -- 跨语言配置项 --
    // themePlugins: {
    // 在这里配置默认主题提供的插件
    // 例如：关闭 git 插件（如果已经在 locales 中启用了 lastUpdated 和 contributors）
    // git: false,
    // },
  }),

  // ==================
  // Markdown 配置
  // ==================
  markdown: {
    // -- Markdown Anchors --
    anchor: {
      level: [1, 2, 3, 4, 5, 6], // 显示锚点的标题级别
      // permalink: anchor.permalink.ariaHidden({ symbol: '#' }), // 自定义永久链接渲染
    },
    // -- Markdown Links --
    links: {
      externalAttrs: { target: '_blank', rel: 'noopener noreferrer' }, // 外部链接默认添加 target 和 rel
    },
    // -- Code Blocks --
    // importCode: { // 代码块导入功能
    //   handleImportPath: (str) =>
    //     str.replace(/^@vuepress/, path.resolve(__dirname, '../../')),
    // },
  },

  // ==================
  // 插件配置
  // ==================
  plugins: plugins, // 插件配置，导入自 ./config/plugins.js

  // ==================
  // 其他配置
  // ==================
  alias: {
    // 定义路径别名
    // 例如：覆盖主题组件
    // '@theme/HomeFooter.vue': path.resolve(__dirname, './components/layout/MyHomeFooter.vue'),
  },
})
// #endregion config-snippet
