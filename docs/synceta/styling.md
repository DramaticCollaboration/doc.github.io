---
title: Custom style
---

# Custom styles

VuePress provides a variety of ways to customize the look and feel of your site. This template uses the default theme (`@vuepress/theme-default`), and its style customization mainly relies on CSS variables and specific user style files.

## Understanding the style structure

The default theme's styles mainly consist of the following parts:

- **Base Styles**: Base CSS from VuePress Core and the default theme itself.
- **Theme variables**: A series of CSS variables defined in the theme (e.g. `--c-brand`, `--c-text`) to control colors, fonts, layout, etc.
- **User Styles**: You can override or add custom styles via specific files.

## Customization method

### 1. Override the theme palette

This is the most commonly used customization method, used to modify the theme's core colors, font size, code block style, etc.

- Create the file: `docs/.vuepress/styles/palette.scss` (if using Sass) or `docs/.vuepress/styles/palette.css`.
- In this file, override the CSS variables provided by the default theme.

**Example (`palette.scss`):**

```scss
// Override the default theme colors
:root {
  --c-brand: #3498db; // Primary brand color (e.g. links, logos)
  --c-brand-light: #5dade2; // Main brand light color (e.g. hover effect)

  --c-text: #2c3e50;
  --c-text-light: #3a5169;
  --c-text-lighter: #4e6e8e;
  --c-text-lightest: #6a8bad;

  --c-bg: #ffffff;
  --c-bg-light: #f3f4f5;
  --c-bg-lighter: #eeeeee;

  --c-border: #eaecef;
  --c-border-dark: #dfe2e5;

  --c-tip: #42b983;
  --c-warning: #e7c000;
  --c-danger: #cc0000;
}

// Override code block color (requires Shiki theme knowledge)
// :root {
//   --code-bg-color: #282c34;
// }

// Override the navigation bar height
// :root {
// --navbar-height: 4rem;
// }
```

You can find more available CSS variables in the [default theme config](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html).

### 2. Add global styles or override (Index)

Use this file if you need to add more complex CSS rules, or override styles not exposed via variables in your theme.

- Create the file: `docs/.vuepress/styles/index.scss` (if using Sass) or `docs/.vuepress/styles/index.css`.
- Write your CSS rules in this file.

**Example (`index.scss`):**

```scss
// Change the font size of all paragraphs
// p {
//   font-size: 1.1rem;
// }

// Customize the style of a specific element
// .my-custom-class {
//   background-color: yellow;
//   padding: 10px;
//   border: 1px solid red;
// }

// Force overwriting an existing style (use with caution)
// .navbar .logo {
//   height: 2.5rem !important;
// }
```

**Priority**: Styles in `index.scss` / `index.css` are applied after `palette.scss` / `palette.css`, so you can override the effects of variables in the palette (but this is not recommended, use `palette` files to override variables first).

### 3. Component internal styles

For custom Vue components you create in the `docs/.vuepress/components/` directory, it is recommended to use `<style scoped>` to write the component's style.

```view
<template>
  <button class="my-custom-button"><slot /></button>
</template>

<style scoped>
.my-custom-button {
  background-color: var(--c-brand); /* use theme variables*/
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.my-custom-button:hover {
  background-color: var(--c-brand-light);
}
</style>
```

The `scoped` attribute ensures that these styles are only applied to the current component and will not leak to the global or other components to avoid style conflicts.

### 4. Public static resources (Public)

If you need to import custom font files, icons or other CSS files that do not change often, you can put them in the `docs/.vuepress/public/` directory.

Then import them in the `head` configuration of `.vuepress/config.js`:

```js
// .vuepress/config.js
export default {
  head: [
    // Import external CSS
    ["link", { rel: "stylesheet", href: "/styles/custom-font.css" }],
    // Import Font Awesome
    // ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }]
  ],
}
```

## hint

- After modifying the style file, VuePress hot reload (HMR) usually takes effect automatically. If the style is not updated, try restarting the development server (`pnpm docs:dev`).
- Use your browser's developer tools to inspect the element, which can help you find the CSS selectors and variable names that need to be overridden.
