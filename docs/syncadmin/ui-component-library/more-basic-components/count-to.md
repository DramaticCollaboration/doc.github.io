---
order: 12
---

# CountTo

Digital Animation Components

This component refactors [vue-countTo and transforms it into a component that adapts to vue3 syntax.](https://github.com/PanJiaChen/vue-countTo)

## Usage

```
<template>
  <CountTo prefix="$" :color="'#409EFF'" :startVal="1" :endVal="200000" :duration="8000" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountTo } from '/@/components/CountTo/index';

  export default defineComponent({
    components: {
      CountTo,
    },
  });
</script>
```

copy

## Props

| Attributes | type      | default value | illustrate                  |
| ---------- | --------- | ------------- | --------------------------- |
| startVal   | `number`  | `0`           | Starting value              |
| thanVal    | `number`  | `2021`        | End value                   |
| duration   | `number`  | `1500`        | Animation duration          |
| autoplay   | `boolean` | `true`        | Automatic execution         |
| prefix     | `string`  | \-            | Prefix                      |
| suffix     | `string`  | \-            | suffix                      |
| separator  | `string`  | `,`           | Delimiter                   |
| color      | `string`  | \-            | font color                  |
| useEasing  | `boolean` | `true`        | Whether to enable animation |
| transition | `string`  | `linear`      | Animation effects           |
| decimals   | `number`  | `0`           | Keep decimal places         |

## Methods

| name  | Callback parameters | illustrate      |
| ----- | ------------------- | --------------- |
| start | `()=>void`          | Start animation |
| reset | `()=>void`          | Reset           |
