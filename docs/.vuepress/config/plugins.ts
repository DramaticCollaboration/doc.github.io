import type { PluginConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleTagManagerPlugin } from '@vuepress/plugin-google-tag-manager'
// @ts-ignore
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

// import { docsearchPlugin } from '@vuepress/plugin-docsearch' // If you need an Algolia search, uncomment and configure

const __dirname = getDirname(import.meta.url)

/**
 * Plug-in configuration
 *
 * @see https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html
 * @see https://v2.vuepress.vuejs.org/zh/reference/plugin/medium-zoom.html
 * @see https://v2.vuepress.vuejs.org/zh/reference/plugin/pwa.html
 * @see https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
 * @see https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html
 */
export const plugins: PluginConfig = [
  googleTagManagerPlugin({
    id: 'GTM-KPMTVVXN',
  }),
  googleAnalyticsPlugin({
    id: 'G-0BFBDMZDZ8',
  }),
  /**
   * Automatically register Vue components in the '.vuepress/components' directory
   */
  registerComponentsPlugin({
    // componentsDir: path.resolve(__dirname, '../components'), // Default path, can be omitted
  }),

  /**
   * Provide zoom function for page images (Medium Zoom)
   */
  mediumZoomPlugin({
    selector: ':not(a) > img:not(.no-zoom)', // Applies to unlinked images that do not have a .no-zoom class
    zoomOptions: {
      margin: 16,
      background: 'rgba(255, 255, 255, 0.9)', // Scales the background color
      scrollOffset: 40,
    },
  }),

  /**
   * Offer PWA (Progressive Web App) support
   */
  pwaPlugin({
    // The following options may have type issues in some RC versions, and you can try to uncomment them after upgrading
    // skipWaiting: true, // Activate the new service worker now
    // cachePic: true, // Cache image resources
    // popupComponent: 'PwaPopup', // Customize the component name of the "Discover new content" pop-up window
    manifest: {
      // Web App Manifest configuration
      // @see https://developer.mozilla.org/zh-CN/docs/Web/Manifest
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

  /**
   * Provides built-in search capabilities based on document content
   */
  searchPlugin({
    locales: {
      '/': {
        placeholder: 'Search for documents',
      },
    },
    maxSuggestions: 10, // Maximum number of recommendations
    isSearchable: page => page.path !== '/', // Exclude the homepage from being searched
    // getExtraFields: (page) => [], // Additional search field
    // hotKeys: ['s', '/'], // Activate the hotkey for the search box
  }),

  /**
   * Optionally, use Algolia DocSearch instead of built-in search
   * You need to request and configure the service in Algolia
   */
  // docsearchPlugin({
  //   appId: 'YOUR_APP_ID',
  //   apiKey: 'YOUR_API_KEY',
  //   indexName: 'YOUR_INDEX_NAME',
  //   locales: { '/': { placeholder: '搜索文档' } },
  // }),
]
