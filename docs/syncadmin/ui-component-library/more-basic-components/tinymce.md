---
order: 21
---

# Tinymce

The rich text component is located in [src/components/TinyMce](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce)

::: tip The rich text component is imported using CDN

You can change the following CDN address in [/@/components/TinyMce/src/Editor.vue](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce/src/Editor.vue)

```
const CDN_URL = 'https://cdn.bootcdn.net/ajax/libs/tinymce/5.5.1';
```

copy

:::

## Usage

```
<template>
  <Tinymce v-model="value" @change="handleChange" width="100%" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Tinymce } from '/@/components/Tinymce/index';

  export default defineComponent({
    components: { Tinymce },
    setup() {
      const value = ref('hello world!');
      function handleChange(value: string) {
        console.log(value);
      }
      return { handleChange, value };
    },
  });
</script>
```

copy

## Props

| Attributes      | type              | default value | illustrate                           |
| --------------- | ----------------- | ------------- | ------------------------------------ |
| options         | `any`             | {}            | Configuration items of tinymce       |
| value(v-model)  | `string`          | \-            | Two-way binding value                |
| height          | `number , string` | 400           | high                                 |
| width           | `number , string` | auto          | width                                |
| toolbar         | `string[]`        | \-            | toolbar                              |
| plugins         | `string[]`        | \-            | Plugins                              |
| showImageUpload | `boolean`         | true          | Whether to display the upload button |

## Events

| event  | Callback parameters | return value | illustrate                              |
| ------ | ------------------- | ------------ | --------------------------------------- |
| change | `(str:string)=>{}`  |              | Rich text content changes trigger event |
