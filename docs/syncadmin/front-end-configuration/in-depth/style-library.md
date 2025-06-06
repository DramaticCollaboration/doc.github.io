---
order: 5
---

# Style Library

## introduce

This article mainly introduces how to use and plan style files in projects.

[By default, Less is used as the preprocessing language. It is recommended to learn about the relevant features of Less](http://lesscss.org/) before using it or when you have questions (if you want to obtain basic CSS knowledge or check properties, please refer to [the MDN documentation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference) ).

The common styles used in the project are stored under [src/design/](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/design) .

```
.
├── ant # ant design 一些样式覆盖
├── color.less # 颜色
├── index.less # 入口
├── public.less # 公共类
├── theme.less # 主题相关
├── config.less  # 每个组件都会自动引入样式
├── transition # 动画相关
└── var # 变量


```

copy

Global Injection

The config.less file will be globally injected into all files, so variables can be used directly in the page without manual introduction

```
<style lang="less" scoped>
  // 这里已经隐式注入了 config.less
</style>

```

copy

## tailwindcss(2.5.0+)

[Tailwindcss](https://tailwindcss.com/docs) is referenced in the project , please see the file usage instructions for details.

The syntax is as follows:

```
<div class="relative w-full h-full px-4"></div>

```

copy

## windicss (2.5.0 deprecated)

[Windicss](https://windicss.org/) is used in the project . Please refer to the file usage instructions for details.

The syntax is as follows:

```
<div class="relative w-full h-full px-4"></div>

```

copy

Precautions

Windcss currently causes memory overflow in local development, so we may consider switching to TailwindCss in the future. The two are basically the same.

Therefore, try to use the new features of Windicss as little as possible to prevent high subsequent switching costs.

## Why use Less

This is mainly because Ant Design uses less as the style language by default, and using Less can keep it consistent.

## Enable scoped

Without adding `scoped`attributes, it will be compiled into the global style by default, which may cause global pollution

```
<style></style>

<style scoped></style>

```

copy

Reminder

After using scoped, the style of the parent component will not penetrate into the child component. However, the root node of a child component will be affected by both the scoped CSS of its parent component and the scoped CSS of the child component. This design is to allow the parent component to adjust the style of its child component root element from the perspective of layout.

## Depth Selector

Sometimes we may want to explicitly specify a rule for a subcomponent.

If you want `scoped`a selector in your stylesheet to work "deeper", for example to affect child components, you can use `>>>`an operator. Some preprocessors like Sass won't parse it correctly `>>>`. In this case you can use the `/deep/`or `::v-deep`operator instead - both are `>>>`aliases of and work just fine.

For details, see RFC [0023-scoped-styles-changes](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md) .

After using scoped, the style of the parent component will not penetrate into the child component, so you can use the following solution:

```
<style scoped>
  /* deep selectors */
  ::v-deep(.foo) {
  }
  /* shorthand */
  :deep(.foo) {
  }

  /* targeting slot content */
  ::v-slotted(.foo) {
  }
  /* shorthand */
  :slotted(.foo) {
  }

  /* one-off global rule */
  ::v-global(.foo) {
  }
  /* shorthand */
  :global(.foo) {
  }
</style>

```

copy

## CSS Modules

Another solution to the style overriding problem is to use CSS Modules. Here’s how to use it.

```
<template>
  <span :class="$style.span1">hello</span>
</template>

<script>
  import { useCSSModule } from 'vue';

  export default {
    setup(props, context) {
      const $style = useCSSModule();
      const moduleAStyle = useCSSModule('moduleA');
      return {
        $style,
        moduleAStyle,
      };
    },
  };
</script>

<style lang="less" module>
  .span1 {
    color: green;
    font-size: 30px;
  }
</style>

<style lang="less" module="moduleA">
  .span1 {
    color: green;
    font-size: 30px;
  }
</style>

```

copy

## Duplicate citation problem

Adding **reference** can solve the problem of repeated references within the page leading to duplication of the actually generated style sheet.

This step has been globally introduced. So **you don't need to write it** and use the variable directly

```
<style lang="less" scoped>
  /* 该行代码已全局引用。可以不用单独引入 */
  @import (reference) '../../design/config.less';
<style>
```

copy
