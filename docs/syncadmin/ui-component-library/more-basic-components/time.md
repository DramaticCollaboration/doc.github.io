---
order: 20
---

# Time

Relative time components

## Usage

```
<template>
  <Time :value="time" />
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import { Time } from '/@/components/Time';

  export default defineComponent({
    components: { Time },
    setup() {
      const now = new Date().getTime();
      const state = reactive({
        time: now - 60 * 3 * 1000,
      });
      return {
        ...toRefs(state),
        now,
      };
    },
  });
</script>
```

copy

## Props

| Attributes | type                 | default value | Optional Values | illustrate                                                     |
| ---------- | -------------------- | ------------- | --------------- | -------------------------------------------------------------- |
| value      | `string,Date,number` | \-            | \-              | Time value                                                     |
| step       | `number`             | `60`          | \-              | refresh time                                                   |
| mode       | `string`             | `relative`    | \-              | Mode, date: date, datetime: timestamp, relative: relative time |
