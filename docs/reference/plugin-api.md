---
title: Plugin API
---

# Plugin API

VuePress's plugin system allows you to extend the functionality of VuePress. This guide will show you how to create and use plugins.

## Plugin Basics

A plugin is a function that receives an app object as an argument and returns an object:

```js
const myPlugin = app => {
  return {
    name: "my-plugin",
    // Plugin options
  }
}
```

## Plugin Options

Plugins can define the following options:

### `name`

- Type: `string`
- Required: Yes

The name of the plugin.

### `multiple`

- Type: `boolean`
- Default value: `false`

Whether to allow the same plugin to be used multiple times.

### `clientAppEnhanceFiles`

- Type: `string | string[]`
- Default value: `undefined`

Path to the client enhancement file.

### `clientAppSetupFiles`

- Type: `string | string[]`
- Default value: `undefined`

Path to the client settings file.

### `clientAppRootComponentFiles`

- Type: `string | string[]`
- Default value: `undefined`

The path to the client root component file.

### `extendsMarkdown`

- Type: `(md: MarkdownIt) => void`
- Default value: `undefined`

Functions that extend the Markdown parser.

### `extendsPageOptions`

- Type: `(pageOptions: PageOptions) => void`
- Default value: `undefined`

Functions to extend page options.

### `extendsPageData`

- Type: `(pageData: PageData) => void`
- Default value: `undefined`

Functions that extend page data.

### `onInitialized`

- Type: `() => Promise<void> | void`
- Default value: `undefined`

Function called after application initialization is complete.

### `onPrepared`

- Type: `() => Promise<void> | void`
- Default value: `undefined`

Function called after the application is ready.

### `onWatched`

- Type: `() => Promise<void> | void`
- Default value: `undefined`

Function to be called after a file has changed.

### `onGenerated`

- Type: `() => Promise<void> | void`
- Default value: `undefined`

Function called after static files are generated.

## Plugin Example

### Simple plugin

```js
const myPlugin = app => {
  return {
    name: "my-plugin",
    onInitialized: () => {
      console.log("Application has been initialized")
    },
  }
}
```

### Markdown plugin

```js
const markdownPlugin = app => {
  return {
    name: "markdown-plugin",
    extendsMarkdown: md => {
      // Add custom Markdown rules
      md.use(require("markdown-it-emoji"))
    },
  }
}
```

### Page Data Plugin

```js
const pageDataPlugin = app => {
  return {
    name: "page-data-plugin",
    extendsPageData: pageData => {
      // Add custom page data
      pageData.customData = {
        timestamp: Date.now(),
      }
    },
  }
}
```

## Using plugins

Use the plugin in the VuePress configuration file:

```js
import { defineUserConfig } from "vuepress"
import { myPlugin } from "./my-plugin"

export default defineUserConfig({
  plugins: [myPlugin()],
})
```

## Plugin Development Best Practices

1. **Naming convention**:

  - Use kebab-case for plugin naming
  - Use `@vuepress/plugin-` prefix (if it is an official plugin)

2. **Documentation**:

  - Provide a clear README
  - Contains usage examples
  - Description of plugin options

3. **Test**:

  - Writing unit tests
  - Test the behavior under different configurations

4. **Error handling**:
  - Provide meaningful error messages
  - Handle exceptions gracefully

## Reference Links

- [VuePress Plugin API Reference](https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html)
- [VuePress Plugin Development Guide](https://v2.vuepress.vuejs.org/zh/advanced/plugin.html)
