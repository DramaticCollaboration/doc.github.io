---
title: Markdown extension
---

Markdown Extensions

VuePress supports the standard CommonMark Markdown syntax by default, and provides many useful extended functions on this basis to make your documents more expressive.

This page will show some commonly used Markdown extension functions and their usage.

## Custom Container

Use the `:::` syntax to create different types of hints, warnings, or detail blocks.

**grammar:**

```markdown
::: tip
This is a prompt container.
:::

::: warning
This is a warning container.
:::

::: danger
This is a hazard warning container.
:::

::: details Click to view details
This is a details container, collapsed by default.

- List Item 1
- List Item 2
  :::
```

**Effect:**

::: tip
This is a prompt container.
:::

::: warning
This is a warning container.
:::

::: danger
This is a hazard warning container.
:::

::: details Click to view details
This is a details container, collapsed by default.

- List Item 1
- List Item 2
  :::

## Code Group

Use `code-group` and `code-group-item` to group multiple code blocks together and provide switch labels.

**grammar:**

````markdown
::: code-group

```bash [pnpm]
pnpm install vuepress@next
```

```bash [npm]
npm install vuepress@next
```

```bash [yarn]
yarn add vuepress@next
```

:::
````

**Effect:**

::: code-group

```bash [pnpm]
pnpm install vuepress@next
```

```bash [npm]
npm install vuepress@next
```

```bash [yarn]
yarn add vuepress@next
```

:::

## Import code snippet

You can import specific code snippets from a file to avoid duplicating the code in your Markdown.

**grammar:**

Assume that there is the following code snippet in `docs/.vuepress/config.ts`:

```ts
// ... other code...
// #region config-snippet
export default defineUserConfig({
  Language: "kr-CN",
  title: "VuePress Template",
  description: "Modern document template based on VuePress",
})
// #endregion config-snippet
// ... other code...
```

You can import it in Markdown like this:

```markdown
<<< @/.vuepress/config.ts#config-snippet
```

**Effect:**

<<< @/.vuepress/config.ts#config-snippet

**Notice:**

- The path alias `@` points to the `docs` directory.
- Requires `#region region-name` and `#endregion region-name` to mark code snippets in source files.
- `handleImportPath` has been configured in the `markdown.importCode` section of `docs/.vuepress/config.ts` to handle the `@` alias.

## Other common syntax

### Emoji

You can use Emoji Unicode characters directly, or use `:emoji_shorthand:`.

**Syntax** `:+1: :tada:`

**Effect:** :+1: :tada:

### Table of Contents (TOC)

The default theme will automatically generate a table of contents on the right. You can also insert a table of contents in Markdown using `[[toc]]`.

**Syntax** `[[toc]]`

### Task List

**grammar:**

```markdown
- [x] Completed tasks
- [ ] Unfinished tasks
```

**Effect:**

- [x] Completed tasks
- [ ] Unfinished tasks

### Superscript and subscript

**Syntax** `H~2~O`, `x^2^`

**Effects:** H~2~O, x^2^

### Footnotes

**grammar:**

```markdown
This is an example of a footnote[^1].

[^1]: This is the content of the footnote.
```

**Effect:**

This is an example of a footnote[^1].

[^1]: This is the content of the footnote.

## More

VuePress also supports other Markdown extensions, such as mathematical formulas (plugins need to be installed), charts, etc. For details, please refer to [VuePress Official Documentation > Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html).
