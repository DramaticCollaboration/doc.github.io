---
order: 3
---

# Project Specifications

## Introduction to Lint

Benefits of using lint

Students with basic engineering literacy will pay attention to coding standards, and code style checking (Code Linting, Lint for short) is an important means to ensure the consistency of code standards.

Following the corresponding code standards has the following benefits

- Less bug error rate
- High development efficiency
- Improved readability

The following code verification methods are integrated into the project

1.  eslint is used to check code format specifications
2.  commitlint is used to verify git commit information specifications
3.  Stylelint is used to verify css/less specifications
4.  Prettier code formatter

WARNING

Lint is not required, but it is necessary. When a project becomes large or when there are too many people involved, there will be codes of different styles, which will cause some trouble for subsequent maintenance.

## ESLint

ESLint is a code standard and error checking tool with the following features

- Everything is pluggable. You can call any rule api or formatter api to package or define a rule or formatter.
- Any rule is independent
- There is no specific coding style, you can configure it yourself

### Manual verification code

```
# 执行下面代码.能修复的会自动修复，不能修复的需要手动修改
yarn run lint:eslint
```

copy

### Configuration items

The project's eslint configuration is located in \*\*.eslintrc.js\*\* in the root directory. You can modify the code specifications according to your team.

### Editor coordination

It is recommended to use vscode for development. vscode comes with an eslint plug-in that can automatically modify some errors.

At the same time, the project also comes with vscode eslint configuration, which is specifically `.vscode/setting.json`inside the folder. As long as you use vscode development, you can use it without any settings

## CommitLint

In a team, everyone's git commit information is different and varied. Without a mechanism, it is difficult to ensure standardization. How can it be standardized? You may think of the git hook mechanism and write a shell script to implement it. Of course, this is possible. In fact, JavaScript has a good tool that can implement this template, which is commitlint (used to verify git commit information standards).

### Configuration

The configuration of commit-lint is located in **commitlint.config.js in the project root directory**

### Git commit specifications

- Refer to [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ( [Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) )

  - `feat`Adding new features
  - `fix`Fix issues/bugs
  - `style`The code style has no impact on the running results.
  - `perf`Optimization/performance improvement
  - `refactor`Refactoring
  - `revert`Undo changes
  - `test`Test related
  - `docs`Documentation/Notes
  - `chore`Dependency update/scaffolding configuration modification, etc.
  - `workflow`Workflow improvements
  - `ci`Continuous Integration
  - `mod`Uncertain classification modification
  - `wip`In development
  - `types`Type Modification

### How to close

`.husky/commit-msg`Comment out

```
# npx --no-install commitlint --edit "$1"

```

copy

### Example

```

git commit -m 'feat(home): add home page'


```

copy

## Stylelint

Stylelint is used to check the style of the internal CSS of the project. With the automatic repair of the editor, it can well unify the internal CSS style of the project.

### Configuration

The stylelint configuration is located in the root directory **stylelint.config.js**

### Editor coordination

If you are using the vscode editor, you only need to install the following plug-in to automatically format the internal CSS style of the file when saving

**Plugins**

[StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Prettier

Prettier can be used to unify the project code style, unified indentation, single and double quotes, trailing commas, etc.

### Configuration

The prettier configuration file is located in the project root directory **prettier.config.js**

### Editor coordination

If you are using the vscode editor, you only need to install the following plug-in to automatically format the internal js format of the file when saving

**Plugins**

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Git Hook

Git hook is usually combined with various lints to perform code style verification when git submits code. If the verification fails, it will not be submitted. The developer needs to modify it and submit it again.

### husky

One problem is that the verification will verify all the code, but we only want to verify the code we submitted ourselves, so we can use husky.

The most effective solution is to put the Lint check locally. A common practice is to use husky or pre-commit to do a Lint check before submitting locally.

The project `.husky`defines the corresponding hooks internally

### How to close

```
# 删除husky依赖即可
yarn remove huksy


```

copy

### How to skip a check

```
# 加上 --no-verify即可跳过git hook校验（--no-verify 简写为 -n）
git commit -m "xxx" --no-verify

```

copy

### lint-staged

Used to automatically fix submitted file style issues

**The lint-staged** configuration is located in the project `.husky`directory **lintstagedrc.js**

```
module.exports = {
  // 对指定格式文件 在提交的时候执行相应的修复命令
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add .'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write', 'git add .'],
  '*.md': ['prettier --write'],
};
```

copy
