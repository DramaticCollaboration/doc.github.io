---
order: 30
---

# Markdown

MarkDown editor based on [Vditor](https://github.com/Vanessa219/vditor)

## Usage

```
<template>
  <div class="p-4">
    <a-button @click="toggleTheme" class="mb-2" type="primary">黑暗主题</a-button>
    <MarkDown v-model:value="value" ref="markDownRef" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { MarkDown, MarkDownActionType } from '/@/components/Markdown';
  export default defineComponent({
    components: { MarkDown },
    setup() {
      const markDownRef = ref<Nullable<MarkDownActionType>>(null);
      const valueRef = ref(`
# title

# content
`);

      function toggleTheme() {
        const markDown = unref(markDownRef);
        if (!markDown) return;
        const vditor = markDown.getVditor();
        vditor.setTheme('dark');
      }
      return {
        value: valueRef,
        toggleTheme,
        markDownRef,
      };
    },
  });
</script>
```

copy

## Props

::: tip

In addition to the following two, props can also pass in all properties of vidtor. You can use v-bind to unify the binding

:::

| Attributes | type     | default value | Optional Values | illustrate                 |
| ---------- | -------- | ------------- | --------------- | -------------------------- |
| v-model    | `string` | \-            | \-              | Two-way binding text value |
| height     | `number` | \-            | \-              | high                       |

### Methods

| name      | Callback parameters | illustrate          |
| --------- | ------------------- | ------------------- |
| getVditor | `Function`          | Get vditor instance |
