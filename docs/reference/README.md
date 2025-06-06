---
title: reference
---

# Configuration

The configuration file of a VuePress site is located in `.vuepress/config.js`, which exports a JavaScript object containing various configuration options for the site.

## Configuration Guide

This section contains details about the VuePress site configuration:

- [Basic Configuration](./basic-config.md) - Basic configuration such as site name, description, language, etc.
- [Theme configuration](./theme-config.md) - Navigation bar, sidebar, appearance and other theme configurations

## Configuration Example

The following is a complete configuration example:

```js
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
import { viteBundler } from "@vuepress/bundler-vite"

export default defineUserConfig({
  // Site configuration
  lang: "kr-CN",
  title: "VuePress Template",
  description: "Documentation site template based on VuePress",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["meta", { name: "author", content: "VuePress Team" }],
    ["meta", { name: "keywords", content: "vuepress, vue, documentation, blog" }],
  ],

  // Vite packaging tool configuration
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  // Theme configuration
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "https://github.com/yourusername/vuepress-template",
    docsDir: "docs",
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/synceta/" },
      { text: "Configuration", link: "/config/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          children: ["/synceta/README.md", "/synceta/introduction.md", "/synceta/getting-started.md"],
        },
      ],
      "/config/": [
        {
          text: "Configuration",
          children: ["/config/README.md", "/config/basic-config.md", "/config/theme-config.md"],
        },
      ],
    },
  }),

  // Markdown configuration
  markdown: {
    anchor: { permalink: true, permalinkSymbol: "#" },
    links: { externalAttrs: { target: "_blank", rel: "noopener noreferrer" } },
    toc: { includeLevel: [1, 2, 3] },
  },
})
```

## Reference Links

- [VuePress official configuration reference](https://v2.vuepress.vuejs.org/zh/reference/config.html)
