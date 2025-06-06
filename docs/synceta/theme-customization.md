---
title: Theme Customization
---

# Theme Customization Guide

This document describes how to customize the appearance and functionality of a VuePress theme.

## Modify theme color

Modify the theme color in the `docs/.vuepress/styles/palette.scss` file:

```scss
:root {
  // Brand color
  --c-brand: #3eaf7c;
  --c-brand-light: #4abf8a;

  // Background color
  --c-bg: #ffffff;
  --c-bg-light: #f3f4f5;
  --c-bg-lighter: #eeeeee;
  --c-bg-navbar: var(--c-bg);
  --c-bg-sidebar: var(--c-bg);
  --c-bg-arrow: #cccccc;

  // Text color
  --c-text: #2c3e50;
  --c-text-accent: var(--c-brand);
  --c-text-light: #3a5169;
  --c-text-lighter: #4e6e8e;
  --c-text-lightest: #6a8bad;
  --c-text-quote: #999999;

  // Border color
  --c-border: #eaecef;
  --c-border-dark: #dfe2e5;

  // Custom container
  --c-tip: #42b983;
  --c-tip-bg: var(--c-bg-light);
  --c-tip-title: var(--c-text);
  --c-tip-text: var(--c-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #e7c000;
  --c-warning-bg: #fffae3;
  --c-warning-title: #b29400;
  --c-warning-text: #746000;
  --c-warning-text-accent: #edb563;
  --c-danger: #cc0000;
  --c-danger-bg: #ffe0e0;
  --c-danger-title: #990000;
  --c-danger-text: #660000;
  --c-danger-text-accent: #bd1a1a;
  --c-details-bg: #eeeeee;

  // Logo
  --c-badge-tip: var(--c-tip);
  --c-badge-warning: var(--c-warning);
  --c-badge-danger: var(--c-danger);

  // Transition
  --t-color: 0.3s ease;
  --t-transform: 0.3s ease;

  // Code block
  --code-bg-color: #282c34;
  --code-text-color: #ffffff;
}
```

## Modify the layout

Modify the layout style in the `docs/.vuepress/styles/index.scss` file:

```scss
// Modify the navigation bar
.navbar {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

// Modify the sidebar
.sidebar {
  background-color: var(--c-bg-sidebar);
}

// Modify the content area
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

// Modify the code block
div[class*="language-"] {
  border-radius: 6px;
  margin: 1rem 0;
}
```

## Add custom components

1. Create components in the `docs/.vuepress/components` directory:

```Vue
<!-- InfoCard.vue -->
<template>
  <div class="info-card">
    <div class="info-card__header">
      <slot name="header"></slot>
    </div>
    <div class="info-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
}
</script>

<style lang="scss">
.info-card {
  border: 1px solid var(--c-border);
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;

  &__header {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
}
</style>
```

2. Using components in Markdown:

```md
<InfoCard>
  <template #header>Title</template>
  content
</InfoCard>
```

## Add a custom page

1. Create a custom layout component:

```Vue
<!-- CustomLayout.vue -->
<template>
  <div class="custom-layout">
    <header class="custom-header">
      <slot name="header"></slot>
    </header>
    <main class="custom-main">
      <slot></slot>
    </main>
    <footer class="custom-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CustomLayout",
}
</script>

<style lang="scss">
.custom-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .custom-header {
    padding: 1rem;
    background-color: var(--c-bg-light);
  }

  .custom-main {
    flex: 1;
    padding: 2rem;
  }

  .custom-footer {
    padding: 1rem;
    background-color: var(--c-bg-light);
  }
}
</style>
```

2. Use custom layout in the page:

```md
---
layout: CustomLayout
---

<template #header>

  <h1>Custom Title</h1>
</template>

content

<template #footer>

  <p>Footer content</p>
</template>
```

## Adding custom plugins

1. Create a plugin file:

```js
// docs/.vuepress/plugins/my-plugin.js
export default {
  name: "my-plugin",
  clientAppEnhanceFiles: [path.resolve(__dirname, "clientAppEnhance.js")],
}
```

2. Create client enhancement files:

```js
// docs/.vuepress/clientAppEnhance.js
import { defineClientAppEnhance } from "vuepress/client"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // Add client enhancement code here
})
```

3. Use the plugin in the configuration file:

```js
// docs/.vuepress/config.js
import myPlugin from "./plugins/my-plugin"

export default {
  plugins: [myPlugin()],
}
```

## Reference Links

- [VuePress theme configuration](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)
- [VuePress style configuration](https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html)
- [VuePress component development](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html)
