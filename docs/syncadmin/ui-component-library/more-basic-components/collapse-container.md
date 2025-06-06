---
order: 3
---

# CollapseContainer

Area Collapse Card Container

## Usage

```
<template>
  <div>
    <CollapseContainer> content </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';

  export default defineComponent({
    components: {
      CollapseContainer,
    },
  });
</script>
```

copy

## Props

| Attributes          | type              | default value | Optional Values | illustrate                                                       |
| ------------------- | ----------------- | ------------- | --------------- | ---------------------------------------------------------------- |
| title               | `string`          | \-            | \-              | title                                                            |
| canExpan            | `boolean`         | true          | \-              | Whether it can be expanded, to `true`display the collapse button |
| helpMessage         | `string[],string` | \-            | \-              | Warm reminder on the right side of the title                     |
| triggerWindowResize | `boolean`         | false         | \-              | Whether to trigger window.resize when expanding or shrinking     |
| loading             | `boolean`         | false         | \-              | Display the loading skeleton screen                              |
| lazyTime            | `number`          | 0             | \-              | Delayed loading time                                             |

## Slots

| name    | illustrate                        |
| ------- | --------------------------------- |
| title   | Customize the title               |
| action  | Customize the right action button |
| default | Default Region                    |
| footer  | Customize bottom area             |
