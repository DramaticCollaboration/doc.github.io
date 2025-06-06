---
order: 8
---

# JsonPreview

json data preview component

## Usage

```
<template>
  <JsonPreview :data="data" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { JsonPreview } from '/@/components/CodeEditor';

  export default defineComponent({
    components: { JsonPreview },
    setup() {
      return {
        data: {},
      };
    },
  });
</script>
```

copy

## Props

| Attributes | type     | default value | Optional Values | illustrate                |
| ---------- | -------- | ------------- | --------------- | ------------------------- |
| data       | `object` | \-            | \-              | Json data to be previewed |
