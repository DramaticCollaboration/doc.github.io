---
order: 6
---

# CodeEditor

Code Editor

## Usage

```
<template>
  <CodeEditor v-model:value="value" :mode="modeValue" />
</template>
<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: { CodeEditor },
    setup() {
      const modeValue = ref('application/json');
      return { value, modeValue };
    },
  });
</script>
```

copy

## Props

| Attributes     | type      | default value      | Optional Values                                   | illustrate     |
| -------------- | --------- | ------------------ | ------------------------------------------------- | -------------- |
| value(v-model) | `any`     | \-                 | \-                                                | Binding Values |
| mode           | `string`  | `application/json` | `'application/json'`,`'htmlmixed'`,`'javascript'` | Code Type      |
| readonly       | `boolean` | \-                 | \-                                                | Read-only      |
| placeholder    | `string`  | \-                 | \-                                                | Placeholder    |
