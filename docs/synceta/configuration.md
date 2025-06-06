---
Title: Configuration
---

#Configure navigation bar and sidebar

The navigation bar and sidebar of a VuePress site are mainly configured through the `themeConfig` object in the `.vuepress/config.js` file. This template uses `@vuepress/theme-default`, which is configured as follows.

## Navigation bar

The navigation bar is configured in the `themeConfig.navbar` array.

```js
// .vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default"

export default {
  theme: defaultTheme({
    navbar: [
      // Simple link item
      { text: "Home", link: "/" },

      // Link to the synceta directory
      { text: "Guide", link: "/synceta/" },

      //Nested drop-down menus
      {
        text: "API Documentation",
        children: [
          { text: "API V1", link: "/api/v1/" },
          { text: "API V2", link: "/api/v2/" },
          {
            text: "Related Links",
            children: [
              { text: "GitHub", link: "https://github.com" },
              { text: "VuePress", link: "https://v2.vuepress.vuejs.org/" },
            ],
          },
        ],
      },

      // Using grouped nested drop-down menus
      {
        text: "Configuration Item",
        children: [
          {
            text: "Basic Configuration",
            children: ["/config/basic.md", "/config/theme.md"],
          },
          {
            text: "Advanced Configuration",
            children: ["/config/advanced.md"],
          },
        ],
      },

      // External links
      {
        text: "Template warehouse",
        link: "https://github.com/vuepress/vuepress-next",
        target: "_blank",
      },
    ],
  }),
}
```

### Navigation bar item configuration

Each navigation bar item can be an object containing the following properties:

- `text`: The text of the link.
- `link`: The path of the link (internal path or external URL).
- `target`: The `target` attribute of the link (e.g. `_blank` opens in a new tab).
- `rel`: The `rel` attribute of the link.
- `activeMatch`: A regular expression used to determine whether the link should be active. For example, `/guide/` will match all paths starting with `/guide/`.
- `children`: Used to create nested drop-down menus, its value is another navbar item configuration array.

## Sidebar

The sidebar is configured in the `themeConfig.sidebar` object. The sidebar can have different content for different page paths.

### Basic configuration (array form)

The simplest configuration is to directly provide an array containing link paths. VuePress will automatically extract the H2 title of the page as the sidebar item.

```js
// .vuepress/config.js
export default {
  theme: defaultTheme({
    sidebar: [
      // Sidebar items
      "/synceta/README.md",
      "/synceta/getting-started.md",
      "/synceta/configuration.md",
    ],
  }),
}
```

### Object form (configured by path)

You can configure different sidebars for different URL path prefixes.

```js
// .vuepress/config.js
export default {
  theme: defaultTheme({
    sidebar: {
      // Sidebar under the /synceta/ path
      "/guide/": [
        // Simple link
        "/synceta/README.md",

        // Grouping
        {
          text: "Basics",
          collapsible: true, // Is it collapsible?
          children: ["/synceta/getting-started.md", "/synceta/configuration.md"],
        },
        {
          text: "Advanced",
          collapsible: false,
          children: ["/synceta/adding-content.md", "/synceta/components.md", "/synceta/styling.md"],
        },
      ],

      // Sidebar under the /api/ path
      "/api/": [
        {
          text: "API Documentation",
          children: ["/api/v1/README.md", "/api/v2/README.md"],
        },
      ],

      // fallback: if no other paths match, use the sidebar of the root path
      "/": [
        "", // README.md
        "contact.md",
        "about.md",
      ],
    },
  }),
}
```

### Sidebar item configuration

In the sidebars array, each element can be:

- **string**: A relative path to a Markdown file. The text will be the first H1 or `title` (from Frontmatter) of the page.
- **Object**: Used to create groups or custom links.
  - `text`: The text of the group or link.
  - `link` (optional): If provided, the item is a clickable link.
  - `collapsible` (optional, defaults to `true`): Whether the group is collapsible.
  - `children`: An array (string or object) containing additional sidebar items, used to create nested groups.

### Automatic Sidebar

You can also let VuePress automatically generate a sidebar based on your file structure.

```js
// .vuepress/config.js
export default {
  theme: defaultTheme({
    // Disable explicit sidebar configuration
    // sidebar: 'auto', // not recommended, usually more fine-grained control is needed
    // or enable for a specific path
    sidebar: {
      "/reference/": "auto",
    },
  }),
}
```

However, for structured documentation, manually configuring the sidebar often provides a better user experience and clearer navigation structure.

## Combine navigation bar and sidebar

Typically, the navigation bar is used to switch between the main areas of the site (such as guides, API, configuration), while the sidebar is used to display the page structure within the current area.

- When the user clicks on the navigation bar to switch to `/guide/`, the sidebar corresponding to `/guide/` will be displayed.
- When the user clicks the navigation bar to switch to `/api/`, the sidebar corresponding to `/api/` will be displayed.

Make sure your `sidebar` configuration key (eg `/guide/`, `/api/`) matches the `link` or `activeMatch` in your `navbar`.
