import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import fs from 'fs'

// Dynamically fetch the current directory
const __dirname = getDirname(import.meta.url)

// Dynamic detection of navigation menus
function generateNavbar() {
  const navbar = [{ text: 'Homepage', link: '/' }]

  // Check if each of the main directories exists
  const dirMap = {
    guide: 'Guide',
    config: 'Configuration',
    api: 'API Reference',
    faq: 'FAQs',
  }

  for (const [dir, text] of Object.entries(dirMap)) {
    const dirPath = path.resolve(__dirname, '../', dir)
    if (fs.existsSync(dirPath)) {
      navbar.push({ text, link: `/${dir}/` })
    }
  }

  return navbar
}

// Dynamically generate sidebars
function generateSidebar() {
  const sidebar = {}

  // Check each of the main directories and generate a sidebar configuration
  const dirMap = {
    guide: 'Guide',
    config: 'Configuration',
    api: 'API Reference',
    faq: 'FAQs',
  }

  for (const [dir, text] of Object.entries(dirMap)) {
    const dirPath = path.resolve(__dirname, '../', dir)
    if (!fs.existsSync(dirPath)) continue

    const files = fs
      .readdirSync(dirPath)
      .filter(file => file.endsWith('.md'))
      .sort((a, b) => {
        // README.md always comes first
        if (a === 'README.md') return -1
        if (b === 'README.md') return 1
        return a.localeCompare(b)
      })
      .map(file => {
        const name = file.replace('.md', '')
        // Convert README.md to a directory path
        return name === 'README' ? `/${dir}/` : `/${dir}/${name}`
      })

    sidebar[`/${dir}/`] = [
      {
        text,
        children: files,
      },
    ]
  }

  return sidebar
}

// Get the repository information
function getRepoInfo() {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../../../package.json'), 'utf8')
    )
    const repoUrl = packageJson.repository?.url || ''
    let repo = ''

    if (repoUrl) {
      // extraction GitHub repository URL
      const match = repoUrl.match(/github\.com[\/:]([^\/]+\/[^\/\.]+)/)
      if (match) {
        repo = `https://github.com/${match[1]}`
      } else {
        repo = repoUrl
      }
    } else {
      repo = 'https://github.com/yourusername/vuepress-template'
    }

    return repo
  } catch (e) {
    return 'https://github.com/yourusername/vuepress-template'
  }
}

export default defineUserConfig({
  // Basic configuration
  base: '/',
  lang: 'zh-CN',
  title: 'VuePress Formwork',
  description: 'VuePress-based document templates',

  // Multi-language configuration
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress template',
      description: 'VuePress-based document templates',
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress Template',
      description: 'Documentation template based on VuePress',
    },
  },

  // Vite Packer Configuration
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // Theme configuration
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: getRepoInfo(),
    docsDir: 'docs',

    // Dynamically generate a navigation bar
    navbar: generateNavbar(),

    // Dynamically generate sidebars
    sidebar: generateSidebar(),

    // Edit the link
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    lastUpdatedText: 'Last updated',
    contributors: true,
    contributorsText: 'Contributors',

    // Customize the default title of the container
    tip: 'Tips',
    warning: 'Warning',
    danger: 'Caution',

    // 404 page
    notFound: ['Page not found'],
    backToHome: 'Return to the top page',
  }),

  // Markdown configuration
  markdown: {
    anchor: {
      level: [1, 2, 3, 4, 5, 6],
      // Replace the deprecated Permalink option with a new format
      permalinkSymbol: '#',
      permalinkPattern: (slug, opts) => `#${slug}`,
      tabIndex: false,
    },
    links: { externalAttrs: { target: '_blank', rel: 'noopener noreferrer' } },
    toc: { includeLevel: [1, 2, 3] },
    code: {
      // Add the block line number
      lineNumbers: true,
      // The current line is highlighted
      highlightLines: true,
      // The Copy button is displayed
      copyCode: {
        selector: 'div[class*="language-"]',
        successText: 'Copied!',
        failureText: 'Copy failed!',
      },
    },
  },

  // Plug-in configuration
  plugins: [
    // Component auto-registration plugins
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),

    // Image zoom plugin
    mediumZoomPlugin({
      // Selector
      selector: ':not(a) > img:not(.no-zoom)',
      // Zoom options
      zoomOptions: {
        margin: 16,
        background: '#fff',
        scrollOffset: 40,
      },
    }),

    // PWA plugins
    pwaPlugin({
      // Whether to register or not Service Worker
      skipWaiting: true,
      // Cache control
      cachePic: true,
      // Refresh the content prompt
      popupComponent: 'PwaPopup',
      // manifest.webmanifest
      manifest: {
        name: 'VuePress Document templates',
        short_name: 'VuePressDoc',
        description: 'VuePress-based document site templates',
        theme_color: '#3eaf7c',
        background_color: '#ffffff',
        icons: [
          {
            src: '/images/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),

    // Search plugin configuration (built-in search)
    searchPlugin({
      // Local search options
      locales: {
        '/': {
          placeholder: 'Search for documents',
        },
        '/en/': {
          placeholder: 'Search docs',
        },
      },
      // The largest entry in the search results
      maxSuggestions: 10,
      // Only the title is matched
      getExtraFields: () => [],
      // Displays a search box hotkey hint
      hotKeys: ['s', '/'],
      // Search indexing options
      isSearchable: page => page.path !== '/',
    }),

    // Algolia DocSearch PlugIns (You need to apply for and configure it yourself)
    // If you need to use uncomment and configure your own appId, apiKey, and indexName
    /*
    docsearchPlugin({
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      appId: '<APP_ID>',
      locales: {
        '/': {
          placeholder: 'Search for documents',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear the query criteria',
                resetButtonAriaLabel: 'Clear the query criteria',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel',
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'There is no search history',
                saveRecentSearchButtonTitle: 'Save to search history',
                removeRecentSearchButtonTitle: 'Remove from search history',
                favoriteSearchesTitle: 'Favorites',
                removeFavoriteSearchButtonTitle: 'Remove from Favorites',
              },
              errorScreen: {
                titleText: 'Unable to get results',
                helpText: 'You may need to check your internet connection',
              },
              footer: {
                selectText: 'Select',
                navigateText: 'Switch',
                closeText: 'Close',
                searchByText: 'Search for a provider',
              },
              noResultsScreen: {
                noResultsText: 'Unable to find relevant results',
                suggestedQueryText: 'You can try queries',
                reportMissingResultsText: 'Do you think the query should have results?',
                reportMissingResultsLinkText: 'Click Feedback',
              },
            },
          },
        },
      },
    }),
    */
  ],
})
