---
order: 25
---

# StrengthMeter

Used to check password strength

## Usage

```
<template>
  <div class="p-4 flex justify-center">
    <div class="demo-wrap p-10">
      <StrengthMeter placeholder="默认" />
      <StrengthMeter placeholder="禁用" disabled />
      <br />
      <StrengthMeter placeholder="隐藏input" :show-input="false" value="!@#qwe12345" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import StrengthMeter from '/@/components/StrengthMeter/index';
  export default defineComponent({
    components: {
      StrengthMeter,
    },
  });
</script>
<style lang="less" scoped>
  .demo-wrap {
    width: 50%;
    background: #fff;
    border-radius: 10px;
  }
</style>
```

copy

## Props

| Attributes | type      | default value | Optional Values | illustrate               |
| ---------- | --------- | ------------- | --------------- | ------------------------ |
| value      | `string`  | \-            | \-              | Check value              |
| showInput  | `boolean` | true          | \-              | Whether to display input |
| disabled   | `boolean` | false         | \-              | Disable                  |

## Events

| event        | Callback parameters | illustrate                         |
| ------------ | ------------------- | ---------------------------------- |
| score-change | `number`            | Triggered by strength value change |
| change       | `string`            | Triggered by input value change    |
