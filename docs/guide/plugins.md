---
title: Plugin Function
---

# Plugin Function Description

This template project integrates multiple plug-ins to provide an enhanced document experience. This document introduces the functions and usage of the main plug-ins.

## Search Function

### Built-in Search

VuePress built-in search plugin allows users to quickly find content in the document:

- **Shortcut**: Press <kbd>s</kbd> or <kbd>/</kbd> to activate the search box
- **Search scope**: Title and content summary
- **Configuration file**: `searchPlugin` section in `docs/.vuepress/config.js`

```js
searchPlugin({
  local: {
    "/": {
      placeholder: "Search documents",
    },
  },
  // Other options...
})
```

### Algolia DocSearch

This template also supports integration with Algolia DocSearch to provide a more powerful search experience:

1. Apply for a free account at [Algolia DocSearch](https://docsearch.algolia.com/apply/)
2. Get `apiKey`, `indexName` and `appId`
3. Uncomment and configure `docsearchPlugin` in `config.js`

```js
docsearchPlugin({
  apiKey: "YOUR_API_KEY",
  indexName: "YOUR_INDEX_NAME",
  appId: "YOUR_APP_ID",
  // Other configuration...
})
```

## PWA Support

This template supports PWA (Progressive Web App) functionality, allowing users to install documents as apps on their devices:

- **Offline access**: cache document content and support offline browsing
- **Automatic Update**: When the document is updated, the user will be prompted to refresh to get the latest content
- **Custom Install**: Add to home screen to provide a native app-like experience

### PWA Configuration

PWA functionality is configured via `pwaPlugin`, and the main options include:

```js
pwaPlugin({
  skipWaiting: true,
  cachePic: true,
  // Custom update prompt component
  popupComponent: "PwaPopup",
  // Web App List
  manifest: {
    name: "Application name",
    short_name: "Short Name",
    theme_color: "#color code",
    icons: [
      // Icon configuration
    ],
  },
})
```

### Update Tips

When the document content is updated, the system will display an update prompt, and users can click the "Update" button to refresh and obtain the latest content.

## Image enhancement

### Image Scaling

This template integrates the mediumZoomPlugin, allowing users to click on images to view larger images:

- **Default Behavior**: Clicking on an image in a document will enlarge it
- **Exclude images**: Add `no-zoom` class to disable zooming for specific images

```md
<!-- Example of image that supports zooming-->

<!-- Support zooming images -->

![Image example](/images/logo.png)

<!-- Disable zooming of images -->

![Image example](/images/logo.png){.no-zoom}
```

### Image Configuration

The image zoom function can be configured in `config.js`:

```js
mediumZoomPlugin({
  // Selector
  selector: ":not(a) > img:not(.no-zoom)",
  // Scaling options
  zoomOptions: {
    margin: 16,
    background: "#fff",
    scrollOffset: 40,
  },
})
```

## Code block enhancements

This template has several enhancements to the code block:

### Line number display

All code blocks display line numbers by default, making it easy to reference specific lines of code:

```js
// This is line 1
const hello = "world"
// This is line 3
```

### Code highlighting

Supports highlighting specific rows:

```js{2}
// Normal line
// This line will be highlighted
// Normal line
```

### Copy Button

There is a copy button in the upper right corner of each code block to facilitate users to copy the code content.

## Component automatic registration

This template uses `registerComponentsPlugin` to automatically register all Vue components in the `docs/.vuepress/components` directory so that they can be used directly in Markdown files:

```md
<MyComponent title="Custom title">
  Component Contents
</MyComponent>
```

## Other useful plugins

This template also integrates the following useful plug-ins:

- **Markdown extension**: support for footnotes, attributes and other enhanced features
- **External link processing**: Automatically add `target="_blank"` and security attributes to external links
- **Code Demonstration**: Supports simultaneous display of code and effects

## Custom plugins

You can add more plugins in the `plugins` array of `config.js`:

```js
plugins: [
  // Existing plugins...

  // Add new plugin
  yourNewPlugin({
    // Plugin configuration
  }),
]
```
