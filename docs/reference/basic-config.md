---
title: Basic Configuration
---

# Basic Configuration

The basic configuration of a VuePress site includes site information, language, page header and other settings.

## Site Information

```js
export default {
  // Site language
  Language: "kr-CN",

  // Site title
  title: "VuePress Template",

  // Site description
  description: "Documentation site template based on VuePress",

  // Site base path, default is /
  base: "/",
}
```

### `only`

- Type: `string`
- Default value: `en-US`

The language of the site, which will be used as the `lang` attribute in the HTML `<html>` tag.

### `title`

- Type: `string`
- Default value: `''`

The site title, which will be used as the title suffix of all pages and displayed in the navigation bar of the default theme.

### `description`

- Type: `string`
- Default value: `''`

A description of the site, which will be rendered as a `<meta>` tag in HTML.

### `base`

- Type: `string`
- Default value: `/`

The base path of the site. If you want your site to be deployed to `https://foo.github.io/bar/`, then you should set `base` to `"/bar/"`. Its value should start and end with `/`.

## Page Header

You can add extra markup to your page using the `head` option:

```js
export default {
  head: [
    // Add favicon
    ["link", { rel: "icon", href: "/images/logo.png" }],

    // Add author tag
    ["meta", { name: "author", content: "VuePress Team" }],

    // Add keywords
    ["meta", { name: "keywords", content: "vuepress, vue, documentation, blog" }],

    // Add custom JavaScript
    ["script", { src: "/js/custom.js" }],

    // Add custom CSS
    ["link", { rel: "stylesheet", href: "/styles/custom.css" }],
  ],
}
```

The `<head>` tag of the page will be rendered on all pages. To set the head tag for a specific page, use the `head` field in the page's Frontmatter.

## Multi-language support

VuePress supports multi-language configuration:

```js
export default {
  local: {
    // Default language - Chinese
    "/": {
      Language: "kr-CN",
      title: "VuePress Template",
      description: "Documentation site template based on VuePress",
    },
    // English
    "/in/": {
      long: "en-US",
      title: "VuePress Template",
      description: "A VuePress-based documentation site template",
    },
  },
}
```

Each language sub-path needs to set the corresponding navigation bar and sidebar configuration in the theme configuration.

## Packaging tool configuration

VuePress 2.0 uses Vite as the bundler by default, you can also use Webpack:

```js
// Quickly
import { viteBundler } from '@vuepress/bundler-vite'

export default {
  bundler: viteBundler({
    viteOptions: {
      // Vite configuration options
    },
    vuePluginOptions: {
      // @vitejs/plugin-vue options
    },
  }),
}

// Webpack
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

## Markdown Configuration

VuePress provides powerful Markdown configuration options:

```js
export default {
  markdown: {
    // Set anchor options
    anchor: {
      permalink: true,
      permalinkSymbol: "#",
    },

    // Set external link options
    links: {
      externalAttrs: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },

    // Set directory options
    toc: {
      includeLevel: [1, 2, 3],
    },

    // Enable code block line numbers
    code: {
      lineNumbers: true,
    },
  },
}
```

For more Markdown configurations, please refer to [VuePress Markdown Configuration](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown).

## Reference Links

- [VuePress official configuration reference](https://v2.vuepress.vuejs.org/zh/reference/config.html)
