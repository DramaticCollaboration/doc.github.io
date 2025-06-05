---
title: Theme Configuration
---

# Theme Configuration

The VuePress default theme provides many configuration options to meet the needs of most documentation sites. This page will detail how to configure VuePress's default theme.

## Basic Configuration

To use the default theme, you first need to import and use it:

```js
import { defaultTheme } from "@vuepress/theme-default"

export default {
  theme: defaultTheme({
    //Default theme configuration
    logo: "/images/logo.png",
    navbar: [
      /* ... */
    ],
    sidebar: {
      /* ... */
    },
  }),
}
```

## Navigation bar configuration

The navigation bar (`navbar`) can contain site title, search box, navigation links, multi-language switch, repository links, etc.

### Navigation Links

You can configure navbar links with the `navbar` option:

```js
theme: defaultTheme({
  navbar: [
    // Navigation links
    {
      text: "Home",
      link: "/",
    },
    // Drop-down menu
    {
      text: "Guide",
      children: [
        {
          text: "Introduction",
          link: "/guide/introduction.html",
        },
        {
          text: "Get started quickly",
          link: "/guide/getting-started.html",
        },
      ],
    },
    //Nested drop-down menus
    {
      text: "Reference",
      children: [
        {
          text: "Configuration",
          children: ["/config/README.md", "/config/basic-config.md"],
        },
        {
          text: "API",
          children: ["/api/README.md", "/api/cli.md"],
        },
      ],
    },
  ],
})
```

### Disable the navigation bar

You can disable the navigation bar for all pages by passing `navbar: false`:

```js
theme: defaultTheme({
  navbar: false,
})
```

You can also disable the navigation bar for a specific page via the page's frontmatter:

```yaml
---
navbar: false
---
```

## Sidebar Configuration

A sidebar can contain multiple sidebar items, usually used to display the hierarchical structure of documents.

### Simple configuration

The simplest configuration is to provide an array of links:

```js
theme: defaultTheme({
  sidebar: [
    "/", // front page
    "/guide/", // Guide home page
    "/guide/introduction", // Introduction page
  ],
})
```

### Group configuration

You can group sidebar links:

```js
theme: defaultTheme({
  sidebar: [
    {
      text: "Guide",
      collapsible: true, // collapsible
      children: ["/guide/", "/guide/introduction", "/guide/getting-started"],
    },
    {
      text: "Configuration",
      collapsible: false, // not collapsible
      children: ["/config/", "/config/basic-config", "/config/theme-config"],
    },
  ],
})
```

### Multiple Sidebars

Configure different sidebars for different page paths:

```js
theme: defaultTheme({
  sidebar: {
    "/guide/": [
      {
        text: "Guide",
        children: ["/guide/", "/guide/introduction", "/guide/getting-started"],
      },
    ],
    "/config/": [
      {
        text: "Configuration",
        children: ["/config/", "/config/basic-config", "/config/theme-config"],
      },
    ],
  },
})
```

### Disable the sidebar

You can disable the sidebar for all pages by passing `sidebar: false`:

```js
theme: defaultTheme({
  sidebar: false,
})
```

You can also disable the sidebar for a specific page via the page's frontmatter:

```yaml
---
sidebar: false
---
```

## Copyright Information

Configure the footer copyright information:

```js
theme: defaultTheme({
  // Defaults to 'MIT Licensed | Copyright © 2018-present Vue.js'
  footer: "MIT Licensed | Copyright © 2024",
})
```

Some pages can also customize the footer in frontmatter:

```yaml
---
footer: This is a custom footer
---
```

## Edit Link

Enable Edit Links to let users easily edit documents:

```js
theme: defaultTheme({
  // Edit link
  editLink: true,
  editLinkText: "Edit this page on GitHub",
  docsRepo: "https://github.com/vuepress/core",
  docsBranch: "main",
  docsDir: "docs",
})
```

## Contributors and last updated

Display page contributors and last updated time:

```js
theme: defaultTheme({
  lastUpdated: true,
  lastUpdatedText: "Last updated",
  contributors: true,
  contributorsText: "Contributors",
})
```

## Multi-language support

To configure multi-language support:

```js
export default {
  local: {
    "/": {
      Language: "zh-CN",
      title: "VuePress Template",
      description: "Documentation site template based on VuePress",
    },
    "/in/": {
      long: "en-US",
      title: "VuePress Template",
      description: "A VuePress-based documentation site template",
    },
  },
  theme: defaultTheme({
    local: {
      "/": {
        navbar: [
          { text: "Home", link: "/" },
          { text: "Guide", link: "/guide/" },
        ],
        sidebar: {
          "/guide/": [
            {
              text: "Guide",
              children: [
                /* ... */
              ],
            },
          ],
        },
      },
      "/in/": {
        navbar: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/guide/" },
        ],
        sidebar: {
          "/a/guide/": [
            {
              text: "Guide",
              children: [
                /* ... */
              ],
            },
          ],
        },
      },
    },
  }),
}
```

## Reference Links

- [VuePress default theme configuration](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)

## More Configuration

For more configuration options, please refer to [VuePress default theme configuration document](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html).
