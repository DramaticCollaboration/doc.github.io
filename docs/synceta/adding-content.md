---
title: Add content
---

# Adding new content

This guide shows you how to add new Markdown pages and tables of contents to your VuePress project, and how to use helper scripts to simplify the process.

## Manually add a page

1.  **Create Markdown files**: Create `.md` files in the appropriate subdirectories under the `docs/` directory. For example, to add a page about deployment in the guide section, you can create `docs/guide/deployment.md`.

         ```md
         ---
         title: Deployment Guide
         date: 2023-10-27
         ---

         # Deployment Guide

         Here are the deployment related documents...
         ```

    ::: tip Frontmatter
    It is recommended to include the `title` Frontmatter field on new pages, which is typically used by themes to generate title and sidebar text.
    :::

2.  **Update the sidebar**: Open the `.vuepress/config.js` file and find the configuration of `themeConfig.sidebar`. Add the relative path of the new page to the corresponding sidebar array.

    ```js {4}
    // .vuepress/config.js
    sidebar: {
      '/synceta/': [
        {
          text: 'Basics',
          collapsible: true,
          children: [
            '/synceta/README.md',
            '/synceta/getting-started.md',
            '/synceta/configuration.md'
          ]
        },
        {
          text: 'Advanced',
          collapsible: false,
          children: [
            '/synceta/adding-content.md',
            '/synceta/deployment.md', // <-- Add new page path
            '/synceta/components.md',
            '/synceta/styling.md' // To be created
          ]
        }
      ],
      // ... sidebar for other paths
    }
    ```

3.  **Restart the development server**: If the development server is running, you need to restart it (Ctrl+C then `pnpm docs:dev`) to load the new sidebar configuration and pages.

## Add a directory

If you want to add a completely new content section (for example, a "Tutorials" section), the steps are similar:

1. **Create a directory**: Create a new directory under `docs/`, for example `docs/tutorial/`.
2. **Add pages**: Add a README.md (as the homepage of this section) and other .md files in the new directory.
3. **Update the navigation bar (optional)**: If you want to link directly to this new section in the top navigation bar, you can add an entry in `themeConfig.navbar` in `config.js`, for example `{ text: 'Tutorial', link: '/tutorial/' }`.
4. **Update the sidebar**: Add configuration for the new path in `themeConfig.sidebar` in `config.js`, for example:

   ```js
   // .vuepress/config.js
   sidebar: {
     '/synceta/': [ /* ... Guide sidebar ... */ ],

     // Add a tutorial sidebar
     '/tutorial/': [
       {
         text: 'Getting Started Tutorial',
         children: [
           '/tutorial/README.md',
           '/tutorial/lesson1.md',
           '/tutorial/lesson2.md'
         ]
       }
     ],

     '/api/': [ /* ... API sidebar... */ ],
     '/': [ /* ... root path sidebar ... */ ]
   }
   ```

## Use new-page script (recommended)

To simplify the process of creating a new page, this template provides an auxiliary script `scripts/new-page.js`.

**Usage**: Run in the project root directory:

```bash
pnpm run docs:new
# or
node scripts/new-page.js
```

**Process**: The script will ask you in order:

1. **Select document type**: Select from the preset directories (such as `guide`, `config`, `api`), and the script will create the page in this directory.
2. **Enter file name**: Enter the file name of the page (without the `.md` suffix).
3. **Enter page title**: Enter the Markdown H1 title of the page.
4. **Select Template**: Select a basic page template (such as `normal`).

The script will automatically:

- Checks if the file already exists.
- Create the directory if it does not exist.
- Creates a `.md` file using the selected template and the entered title.

```mermaid
graph TD
    A[Run `pnpm run docs:new`] --> B{Select type (eg, guide)};
    B --> C{input file name (eg, new-feature)};
    C --> D{input title (eg, introduction of new features)};
    D --> E{select template (eg, normal)};
    E --> F[create docs/guide/new-feature.md];
```

::: warning Caution
The `new-page.js` script does not automatically update the sidebar configuration in `.vuepress/config.js`. After creating the page, you still need to manually edit `config.js` to add the new page to the sidebar.
:::

This script is mainly used to quickly generate a Markdown file with a basic structure and Frontmatter.
