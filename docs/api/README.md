---
title: API Reference
---

API Reference

This section provides reference documentation for various VuePress APIs and tools.

## Main Modules

VuePress consists of several main modules:

- [CLI](./cli.md) - Command Line Interface
- Core Module- The core functions of VuePress
- Bundler - A bundler for building VuePress sites
- Theme API - for developing themes
- Plugin API - for developing plugins

## Client API

VuePress provides a series of client APIs that can be used to write Vue components in the page:

```js
// Get the current page
import { usePageData, usePageFrontmatter } from "vuepress/client"

const page = usePageData()
const frontmatter = usePageFrontmatter()

// Website configuration
import { useSiteData, useSiteLocaleData } from "vuepress/client"

const site = useSiteData()
const siteLocale = useSiteLocaleData()

// Theme configuration
import { useThemeData, useThemeLocaleData } from "vuepress/client"

const theme = useThemeData()
const themeLocale = useThemeLocaleData()

// Routing
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
```

## Node API

VuePress provides a Node.js API that can be used to build sites programmatically:

```js
import { createVuePress } from "vuepress"

const vuepress = createVuePress({
  // Pass in CLI configuration
  // Equivalent to command line parameters
})

// Development mode
await vuepress.dev()

// Build mode
await vuepress.build()
```

## Plugin API

Plugins are one of the core features of VuePress and can be used to extend the functionality of your site:

```js
// Create plugin
import { createPlugin } from "vuepress"

const myPlugin = createPlugin({
  name: "vuepress-plugin-my-plugin",

  // Various Hooks
  extendsPageOptions: (options, app) => {
    // Modify page options
    return options
  },

  extendsMarkdown: md => {
    // Extend markdown-it
    md.use(/* ... */)
  },

  clientConfigFile: path.resolve(__dirname, "./client.js"),
})
```

Use plugins:

```js
import myPlugin from "vuepress-plugin-my-plugin"

export default {
  plugins: [
    myPlugin({
      // Plugin options
    }),
  ],
}
```

## Packaging tool API

VuePress 2.0 uses Vite as the bundler by default and also supports Webpack:

```js
// Using Vite
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  bundler: viteBundler({
    viteOptions: {
      // Vite configuration
    },
    vuePluginOptions: {
      // @vitejs/plugin-vue options
    },
  }),
}

// Using Webpack
import { webpackBundler } from '@vuepress/bundler-webpack'

export default {
  bundler: webpackBundler({
    configureWebpack: (config, isServer, isBuild) => {
      // Webpack configuration object
      return {}
    },
    chainWebpack: (config, isServer, isBuild) => {
      // Webpack chain configuration
    },
  }),
}
```

## Theme API

Themes determine the appearance and functionality of your VuePress site:

```js
// Create a topic
import { createTheme } from "vuepress"

const myTheme = createTheme({
  name: "vuepress-theme-my-theme",

  // Inherited from the default theme
  extends: defaultTheme({
    //Default theme configuration
  }),

  // Theme settings
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    404: path.resolve(__dirname, "layouts/404.vue"),
  },

  // Themes can use Hooks like plugins
  extendsPageOptions: (options, app) => {
    return options
  },
})
```

Use the theme:

```js
import myTheme from "vuepress-theme-my-theme"

export default {
  theme: myTheme({
    // Theme options
  }),
}
```

## Reference Links

- [VuePress Official API Reference](https://v2.vuepress.vuejs.org/zh/reference/config.html)
