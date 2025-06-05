// 使用 .cjs 扩展名以避免与 package.json 中的 "type": "module" 冲突
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  // 标记此配置文件为 ESLint 的根配置，ESLint 将停止在父目录中查找其他配置文件。
  root: true,

  // 定义代码运行的全局环境。
  env: {
    browser: true, // 启用浏览器环境的全局变量（如 window, document）。
    node: true, // 启用 Node.js 环境的全局变量和 Node.js 作用域（如 global, process）。
    es2022: true, // 支持 ES2022 版本的 ECMAScript 语法（如顶层 await）。
  },

  // 指定 ESLint 用于解析代码的解析器。
  // 对于 .vue 文件，需要 vue-eslint-parser。
  parser: 'vue-eslint-parser',

  // 解析器选项，用于配置解析器的行为。
  parserOptions: {
    // vue-eslint-parser 使用此解析器来解析 <script> 标签中的代码。
    // 这里我们使用 @typescript-eslint/parser 来支持 TypeScript。
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 标准版本。
    sourceType: 'module', // 项目代码使用 ES 模块（import/export 语法）。
    ecmaFeatures: {
      jsx: true, // 如果项目中使用 JSX 语法，则启用此特性。
    },
  },

  // 扩展一组预定义的配置。这些配置通常包含推荐的规则集。
  extends: [
    'eslint:recommended', // ESLint 官方推荐的基础规则集。
    'plugin:vue/vue3-recommended', // Vue.js 3 的推荐规则，用于强制执行最佳实践。
    'plugin:@typescript-eslint/recommended', // TypeScript 官方推荐的规则集。
    'plugin:import/recommended', // eslint-plugin-import 的推荐规则，用于规范模块导入导出。
    'plugin:import/typescript', // 针对 TypeScript 项目的 eslint-plugin-import 增强规则。
    'plugin:node/recommended', // eslint-plugin-node 的推荐规则，适用于 Node.js 环境。
    // 集成 Prettier：
    // 1. 启用 eslint-plugin-prettier。
    // 2. 将 Prettier 的格式化问题作为 ESLint 规则报告。
    // 3. 禁用所有与 Prettier 格式化规则冲突的 ESLint 规则。
    'plugin:prettier/recommended',
  ],

  // 注册 ESLint 插件。插件可以提供自定义规则、解析器、处理器等。
  plugins: [
    'vue', // eslint-plugin-vue，提供 Vue.js 相关的 linting 规则。
    '@typescript-eslint', // @typescript-eslint/eslint-plugin，提供 TypeScript 相关的 linting 规则。
    'import', // eslint-plugin-import，帮助校验 import/export 语法和路径问题。
    'node', // eslint-plugin-node，提供 Node.js 特定的 linting 规则。
    'prettier', // eslint-plugin-prettier，将 Prettier 作为 ESLint 规则运行。
  ],

  // 为特定插件或规则提供共享设置。
  settings: {
    'import/resolver': {
      typescript: true, // 告知 eslint-plugin-import 使用 TypeScript 的路径解析逻辑（如 baseUrl, paths in tsconfig.json）。
      node: true, // 告知 eslint-plugin-import 使用 Node.js 的标准模块解析逻辑。
    },
    'import/parsers': {
      // 指定 eslint-plugin-import 使用 @typescript-eslint/parser 来解析 .ts 和 .tsx 文件。
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] }, // 允许在 Node.js 环境中使用 ES Modules 语法（import/export）。
    ],
    // 关闭 eslint-plugin-node 的 no-missing-import 规则，
    // 因为 eslint-plugin-import 的 import/no-unresolved 提供了更全面和可配置的检查。
    'node/no-missing-import': 'off',
  },

  // 自定义或覆盖 ESLint 规则。
  rules: {
    // === ESLint 核心规则 (ESLint Core Rules) ===
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境下对 console 调用发出警告，开发环境下允许。
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境下对 debugger 语句发出警告，开发环境下允许。
    'no-unused-vars': 'off', // 关闭 ESLint 核心的 no-unused-vars，使用 @typescript-eslint/no-unused-vars 进行更精确的检查。
    'prefer-const': 'warn', // 建议使用 const 声明那些在初始化后不再被修改的变量。
    'no-duplicate-imports': 'error', // 禁止重复导入同一个模块。
    'no-var': 'error', // 要求使用 let 或 const 而不是 var。

    // === TypeScript 相关规则 (@typescript-eslint Rules) ===
    '@typescript-eslint/no-unused-vars': [
      'warn', // 对未使用的变量发出警告。
      {
        argsIgnorePattern: '^_', // 忽略以单个下划线开头的参数。
        varsIgnorePattern: '^_', // 忽略以单个下划线开头的变量。
        caughtErrorsIgnorePattern: '^_', // 忽略以单个下划线开头的 catch 块中的错误变量。
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn', // 允许使用 any 类型，但会发出警告，鼓励更精确的类型定义。
    '@typescript-eslint/ban-ts-comment': [
      'warn', // 对 @ts-ignore, @ts-nocheck, @ts-check, @ts-expect-error 等 TypeScript 注释发出警告。
      {
        'ts-ignore': 'allow-with-description', // 允许使用 @ts-ignore，但必须提供描述性注释。
        'ts-expect-error': 'allow-with-description', // 允许使用 @ts-expect-error，但必须提供描述性注释。
        // 'ts-nocheck': true, // 如果需要，可以配置是否允许 @ts-nocheck
        // 'ts-check': false,  // 如果需要，可以配置是否允许 @ts-check
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off', // 关闭：不强制要求函数显式声明返回类型（依赖类型推断）。
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭：不强制要求导出的函数和类的公共方法显式声明参数和返回类型。
    '@typescript-eslint/no-non-null-assertion': 'warn', // 对使用非空断言（!）发出警告，鼓励更安全的类型处理。

    // === Vue.js 相关规则 (Vue Rules) ===
    // 在 .vuepress/components 目录中，组件名可能不遵循多词模式，故关闭此规则。
    'vue/multi-word-component-names': 'off',
    // VuePress 项目中经常使用 v-html 来渲染 Markdown 内容等，故关闭此规则。
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off', // 关闭：不强制要求 prop 有默认值。
    'vue/attribute-hyphenation': ['warn', 'always'], // HTML 属性名使用连字符（kebab-case）。
    'vue/v-on-event-hyphenation': ['warn', 'always'], // v-on 事件名使用连字符。
    'vue/html-self-closing': [
      // HTML 标签自闭合风格。
      'warn',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/component-name-in-template-casing': ['warn', 'PascalCase'], // 模板中组件名使用帕斯卡命名法（PascalCase）。
    'vue/component-definition-name-casing': ['warn', 'PascalCase'], // 组件定义时 name 属性使用帕斯卡命名法。
    'vue/no-multiple-template-root': 'off', // Vue 3 允许组件有多个根节点，故关闭。
    'vue/no-v-model-argument': 'off', // 允许在 v-model 上使用参数 (Vue 3 特性)。

    // === 模块导入相关规则 (Import Rules) ===
    'import/order': [
      // 规范 import 语句的顺序。
      'warn',
      {
        groups: [
          'builtin', // Node.js 内置模块 (e.g., 'fs', 'path')
          'external', // npm 包 (e.g., 'vue', 'lodash')
          'internal', // 项目内部模块，通常通过路径别名配置 (e.g., '@/', 'src/')
          'parent', // 父级目录 ('../foo')
          'sibling', // 同级目录 ('./bar')
          'index', // 当前目录的 index 文件 ('./')
          'object', // 对象导入 (e.g., import x = { foo: 'bar' })
          'type', // 类型导入 (e.g., import type { MyType } from './types')
        ],
        'newlines-between': 'always', // 不同分组之间强制换行。
        alphabetize: {
          // 对每个分组内的导入按字母顺序排序。
          order: 'asc', // 升序。
          caseInsensitive: true, // 排序时忽略大小写。
        },
      },
    ],
    // 全局忽略对 'node:' 协议开头的模块和 '@vuepress/' 开头的模块的解析错误。
    // 这些通常是 Node.js 内置模块或 VuePress 提供的特殊模块。
    'import/no-unresolved': ['error', { ignore: ['^node:', '^@vuepress/'] }],
    'import/no-duplicates': 'error', // 禁止重复导入，即使来自不同路径但解析为同一文件。
    'import/no-cycle': 'error', // 禁止模块间的循环依赖。
  },

  // 针对特定文件或目录覆盖全局配置。
  overrides: [
    {
      // 针对 'scripts' 目录下的 JavaScript 文件进行特定配置。
      files: ['scripts/**/*.js'],
      env: {
        node: true, // 明确为这些脚本文件启用 Node.js 环境。
        es2022: true,
      },
      parserOptions: {
        sourceType: 'module', // 假设 'scripts' 目录下的 JS 文件主要使用 ES Module。
      },
      rules: {
        // 允许在脚本中使用 devDependencies 中声明的模块。
        'node/no-unpublished-import': 'off',
        // 允许在脚本中使用 process.exit。
        'no-process-exit': 'off',
        // 针对 scripts 目录，扩展 import/no-unresolved 的忽略列表。
        'import/no-unresolved': [
          'error',
          {
            ignore: [
              '^node:', // 继续忽略 Node.js 内置模块。
              // 明确忽略脚本中常用的 Node.js 内置模块和一些第三方库，避免误报。
              'fs',
              'path',
              'url',
              'chalk',
              'glob',
              'gray-matter',
              'child_process',
              'http',
              'https',
            ],
          },
        ],
      },
    },
    {
      // 允许 .eslintrc.cjs 本身使用 require 语句。
      // 这是因为 .eslintrc.cjs 是 CommonJS 模块。
      files: ['.eslintrc.cjs'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'node/no-unpublished-require': 'off', // 允许 require devDependencies (如 eslint-define-config)。
      },
    },
    {
      // 针对 'scripts/analyze-build.js' 文件特殊处理，该文件可能使用 CommonJS 规范。
      files: ['scripts/analyze-build.js'],
      parserOptions: {
        sourceType: 'script', // 将此文件解析为 CommonJS 模块。
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // 允许在此文件中使用 require 语句。
        'node/no-unpublished-require': 'off', // 允许 require devDependencies。
      },
    },
    {
      // 其他顶层 JS 文件（排除已特殊处理的 analyze-build.js）默认保持 ES Module。
      // 此处可以为这些 JS 文件添加通用规则，如果它们与 scripts 中的 JS 文件有不同需求。
      files: ['*.js'],
      excludedFiles: ['scripts/analyze-build.js'], // 排除已单独配置的 analyze-build.js。
      rules: {
        // 根据需要为其他 JS 文件添加规则。
        // 例如，如果这些 JS 文件也主要用于 Node.js 环境，可以添加：
        // 'node/no-unpublished-import': 'off',
      },
    },
    {
      // 在 VuePress 配置文件 (docs/.vuepress/**/*.ts) 和项目根目录的配置文件中放宽一些规则。
      // 这些文件通常具有特殊性，可能需要更灵活的类型或依赖管理。
      files: ['docs/.vuepress/**/*.ts', '*.config.ts', '*.config.js', '*.cjs', '*.mjs'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off', // 允许在配置文件中使用 any 类型。
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许配置文件中的函数不显式声明返回类型。
        'import/no-extraneous-dependencies': 'off', // 允许配置文件引用 devDependencies。
      },
    },
    {
      // 针对 .vue 文件，关闭 import/no-unresolved 规则。
      // 在 .vue 文件中，模块路径解析可能依赖于 TypeScript 的路径别名 (paths in tsconfig.json)
      // 或 Vue CLI/Vite 的配置，eslint-plugin-import 可能无法完全正确解析。
      files: ['*.vue'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
})
