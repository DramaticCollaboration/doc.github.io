---
order: 10
---

# ClickOutSide

Used to listen for external trigger events of wrapped element clicks

## Usage

```
<template>
  <div>
    <ClickOutSide @clickOutside="() => (showRef.value = false)">
      <div @click="() => (showRef.value = true)">
        {{ showRef ? '鼠标点击那部（点击边框外可以恢复）' : '点击该区域状态(初始状态)' }}
      </div>
    </ClickOutSide>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue';
  import { ClickOutSide } from '@/components/ClickOutSide/index.vue';
  export default defineComponent({
    components: { ClickOutSide },
    setup() {
      const showRef = ref(false);
      return {
        showRef,
      };
    },
  });
</script>
```

copy

## Events

| event        | Callback parameters | illustrate                                                   |
| ------------ | ------------------- | ------------------------------------------------------------ |
| clickOutside | `()=>void`          | Click on the outer area of ​​the wrapping element to trigger |

## Slots

| name    | illustrate          |
| ------- | ------------------- |
| default | The wrapped element |
