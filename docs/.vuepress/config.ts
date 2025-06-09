import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'
import fs from 'fs'

// Import the split configuration module
import { head } from './config/head.js'
import { plugins } from './config/plugins.js'
import { kr as krNavbar } from './config/navbar/kr.js'
import { kr as krSidebar } from './config/sidebar/kr.js'

// Gets the directory path of the current file
const __dirname = getDirname(import.meta.url)

/**
 * 从 package.json Read the repository link
 * @returns {string} Repository URL
 */
function getRepoInfo(): string {
  try {
    const packageJsonPath = path.resolve(__dirname, '../../package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    const repoUrl = packageJson.repository?.url || ''
    let repo = ''

    if (repoUrl) {
      // Try extracting the HTTPS link from the git URL
      const match = repoUrl.match(/github\.com[\/:]([^\/]+\/[^\/\.]+)/)
      if (match && match[1]) {
        repo = `https://github.com/${match[1]}`
      } else {
        // If it's not a GitHub URL or format mismatch, just use the original URL
        repo = repoUrl
      }
    } else {
      // If it is not available in package.json, the default value is used
      repo = 'https://github.com/yourusername/vuepress-template'
      console.warn('Warning: repository.url not found in package.json. Using default repo URL.')
    }

    return repo
  } catch (e) {
    console.error('Error reading package.json for repo info:', e)
    // Returns the default value when an error occurs
    return 'https://github.com/yourusername/vuepress-template'
  }
}

// Define the VuePress configuration
// #region config-snippet
export default defineUserConfig({
  // ==================
  // Basic site configuration
  // ==================
  lang: 'ko-KR', // Site language
  description: 'The Empasy document', // Site description (for SEO)
  head: head, // <head> Tag configuration, imported from ./config/head.js

  // ==================
  // Build the tool configuration
  // ==================
  //It is recommended that the PWA plugin be set to false to avoid the service worker caching all resources
  shouldPrefetch: false,
  // Use the Vite packaging tool
  bundler: viteBundler({
    viteOptions: {}, // Vite Configuration items
    vuePluginOptions: {}, // @vitejs/plugin-vue Configuration items
  }),

  // ==================
  // Theme configuration
  // ==================
  theme: defaultTheme({
    // -- Basic configuration of the theme --
    logo: '/images/logo-dark.png', // Navigation bar logo
    repo: getRepoInfo(), // Repository link, automatically read from package.json
    docsDir: 'docs', // The directory of the source files of the document

    // -- Multi-language support --
    locales: {
      // Chinese language configuration
      '/': {
        // -- Base --
        selectLanguageName: 'Korean',
        selectLanguageText: 'Select a language',
        selectLanguageAriaLabel: 'Select a language',

        // -- Navbar --
        navbar: krNavbar, // Navigation bar configuration, imported from ./config/navbar/kr.js

        // -- Sidebar --
        sidebar: krSidebar, // Sidebar configuration, imported from ./config/sidebar/kr.js
        sidebarDepth: 2, // The sidebar extracts the depth of the title

        // -- Page meta --
        editLink: true, // Whether to enable the Edit this page link
        editLinkText: 'Edit this page on GitHub', // Edit the link text on this page
        lastUpdated: true, // Whether to enable Last Updated
        lastUpdatedText: 'Last updated', // Last updated text
        contributors: true, // Whether to enable the contributor list
        contributorsText: 'Contributors', // List of contributors text

        // -- Custom Containers --
        tip: 'Tips',
        warning: 'Warning',
        danger: 'Danger',

        // -- 404 Page --
        notFound: ['Page not found', 'The page you are visiting does not exist'],
        backToHome: 'Return to the top page',

        // -- A11y --
        // TODO: Add A11y related locale config if needed
        // openInNewWindow: 'Opens in a new window',
        // toggleColorMode: 'Toggle the color mode',
        // toggleSidebar: 'Toggle the sidebar',
      },
      // Configurations in other languages, such as English, can be added here
      // '/en/': {
      //   selectLanguageName: 'English',
      //   ... (Other English configurations)
      // }
    },

    // -- Cross-language configuration items --
    // themePlugins: {
    // This is where you configure the plugins provided by the default theme
    // For example: Turn off the git plugin (if lastUpdated and contributors are already enabled in locales)
    // git: false,
    // },
  }),

  // ==================
  // Markdown configuration
  // ==================
  markdown: {
    // -- Markdown Anchors --
    anchor: {
      level: [1, 2, 3, 4, 5, 6], // Displays the title level of the anchor
      // permalink: anchor.permalink.ariaHidden({ symbol: '#' }), // Custom permalink rendering
    },
    // -- Markdown Links --
    links: {
      externalAttrs: { target: '_blank', rel: 'noopener noreferrer' }, // External links add target and rel by default
    },
    // -- Code Blocks --
    // importCode: { // Code block import function
    //   handleImportPath: (str) =>
    //     str.replace(/^@vuepress/, path.resolve(__dirname, '../../')),
    // },
  },

  // ==================
  // Plug-in configuration
  // ==================
  plugins: plugins, // Plug-in configuration, imported from ./config/plugins.js

  // ==================
  // Other configurations
  // ==================
  alias: {
    // Define path aliases
    // For example: Override the Theme component
    // '@theme/HomeFooter.vue': path.resolve(__dirname, './components/layout/MyHomeFooter.vue'),
  },
})
// #endregion config-snippet
