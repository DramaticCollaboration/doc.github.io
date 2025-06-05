---
title: Quick Start
---

# Quick Start

This is a basic page covering the basics of VuePress.

## Page

You can add Markdown files in your VuePress directory, and each Markdown file will be converted into a page in your site.

See [Routing][] for more details.

## content

Each Markdown file [will be rendered into HTML and then converted into a Vue single-file component][content].

VuePress supports basic Markdown syntax and some extensions, and you can also use Vue features in it.

## Configuration

VuePress uses the .vuepress/config.js (or .ts) file as the [site configuration][config], which you can use to configure your site.

For client-config, you can create .vuepress/client.js (or .ts).

You can also add configuration for each page via [frontmatter][].

## Layout and Customization

The following are common configurations for controlling the `@vuepress/theme-default` layout:

- [navbar]
- [sidebar]

See the [default-theme documentation][default-theme] for a complete reference.

You can add additional styles via the .vuepress/styles/index.scss file.

[routing]: https://v2.vuepress.vuejs.org/zh/guide/page.html#routing
[content]: https://v2.vuepress.vuejs.org/zh/guide/page.html#content
[syntax-extensions]: https://v2.vuepress.vuejs.org/zh/guide/markdown.html#syntax-extensions
[vue-feature]: https://v2.vuepress.vuejs.org/zh/guide/markdown.html#using-vue-in-markdown
[config]: https://v2.vuepress.vuejs.org/zh/guide/configuration.html#client-config-file
[client-config]: https://v2.vuepress.vuejs.org/zh/guide/configuration.html#client-config-file
[frontmatter]: https://v2.vuepress.vuejs.org/zh/guide/page.html#frontmatter
[navbar]: https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
[sidebar]: https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
[default-theme]: https://v2.vuepress.vuejs.org/zh/reference/default-theme/
[style]: https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html#style-file
