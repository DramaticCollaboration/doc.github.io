# Vitepress

VitePress is a Vite-powered static site generator.

[Read the docs](https://vitepress.dev/)

## Usage

> [!IMPORTANT]
>
> **Requires modification**
>
> 1. `.vitepress/config.ts`
>     - Replace the `GITHUB_URL` value with the address of your GitHub repository.
> 2. `.github/workflows/deploy.yml`
>     - See the documentation to configure `Github Actions Secrets` yourself.

> [!TIP]
>
> You need to have [pnpm](https://pnpm.io/) installed globally.

Install dependencies:

```bash
pnpm i
```

Preview:

```bash
pnpm run docs:dev
```

Build:

```bash
pnpm run docs:build
```
