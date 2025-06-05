---
title: Node.js API
---

# Node.js API

VuePress provides a Node.js API that allows you to use VuePress programmatically.

## Basic usage

```js
import { createApp } from "@vuepress/core"

const app = createApp({
  // Source directory
  sourceDir: "docs",
  // Target directory
  dest: "dist",
  // Temporary directory
  temp: ".vuepress/.temp",
  // Cache directory
  cache: ".vuepress/.cache",
  // Development server configuration
  dev: {
    host: "localhost",
    port: 8080,
  },
  // Build configuration
  build: {
    // Build options
  },
})

// Start the development server
await app.dev()

// Build static files
await app.build()
```

## Configuration options

### `sourceDir`

- Type: `string`
- Default value: `'docs'`

The path to the source files directory.

### `hand`

- Type: `string`
- Default value: `'dist'`

The path to the output directory.

### `temp`

- Type: `string`
- Default value: `'.vuepress/.temp'`

The path to the temporary files directory.

### `cache`

- Type: `string`
- Default value: `'.vuepress/.cache'`

The path to the cache directory.

### `dev`

Development server configuration.

```js
{
  //Hostname
  host: 'localhost',
  //Port number
  port: 8080,
  // Whether to open the browser after startup
  open: false,
  // Whether to enable hot update
  hot: true,
  // Whether to enable debug mode
  debug: false,
}
```

### `build`

Build configuration.

```js
{
  // Whether to enable debug mode
  debug: false,
  // Whether to enable cache
  cache: true,
  // Whether to clear the cache before building
  cleanCache: false,
}
```

## Plugin System

VuePress's plugin system allows you to extend the functionality of VuePress.

### Using plugins

```js
import { createApp } from "@vuepress/core"
import { searchPlugin } from "@vuepress/plugin-search"
import { pwaPlugin } from "@vuepress/plugin-pwa"

const app = createApp({
  // Basic configuration
})

//Use plugin
app.use(searchPlugin())
app.use(pwaPlugin())

// Start the development server
await app.dev()
```

### Plugin Options

Each plugin can accept options:

```js
app.use(
  searchPlugin({
    // Search options
    local: {
      "/": {
        placeholder: "Search",
      },
    },
  })
)
```

## Theme System

VuePress's theme system allows you to customize the look and functionality of your site.

### Using themes

```js
import { createApp } from "@vuepress/core"
import { defaultTheme } from "@vuepress/theme-default"

const app = createApp({
  // Basic configuration
  theme: defaultTheme({
    // Theme options
    navbar: [
      // Navigation bar configuration
    ],
    sidebar: {
      // Sidebar configuration
    },
  }),
})
```

## Reference Links

- [VuePress Node.js API Reference](https://v2.vuepress.vuejs.org/zh/reference/node-api.html)
