---
order: 4
---

# LazyContainer

Delayed loading/lazy loading of components, loading only when the component is visible or after a delay

## Usage

```
<template>
  <div class="p-4 lazy-base-demo">
    <div class="lazy-base-demo-wrap">
      <h1>向下滚动</h1>
      <LazyContainer @init="() => {}">
        <TargetContent />
        <template #skeleton>
          <Skeleton :rows="10" />
        </template>
      </LazyContainer>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Skeleton } from 'ant-design-vue';
  import TargetContent from './TargetContent.vue';
  import { LazyContainer } from '/@/components/Container/index';
  export default defineComponent({
    components: { LazyContainer, TargetContent, Skeleton },
  });
</script>
<style lang="less" scoped>
  .lazy-base-demo {
    &-wrap {
      display: flex;
      width: 50%;
      height: 2000px;
      margin: 20px auto;
      text-align: center;
      background: #fff;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      height: 1300px;
      margin: 20px 0;
    }
  }
</style>
```

copy

## Props

| Attributes     | type                                    | default value  | Optional Values                                                                                                                  | illustrate                                                                                                                                  |
| -------------- | --------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| timeout        | `number`                                | \-             | \-                                                                                                                               | Waiting time, if the time is specified, it will be automatically loaded after the specified time regardless of whether it is visible or not |
| viewport       | `HTMLElement`                           | \-             | \-                                                                                                                               | The viewport where the component is located. If the component is scrolled within the page container, the viewport is the container.         |
| threshold      | `string`                                | `0px`          | \-                                                                                                                               | Preload threshold, css unit                                                                                                                 |
| direction      | `'vertical', 'horizontal'` , `vertical` | \-             | The scroll direction of the viewport, vertical represents the vertical direction, horizontal represents the horizontal direction |                                                                                                                                             |
| tag            | `string'`                               | `div`          | \-                                                                                                                               | The tag name of the outer container that wraps the component                                                                                |
| transitionName | `string'`                               | lazy-container | \-                                                                                                                               | transition animation name                                                                                                                   |
| maxWaitingTime | `number'`                               | `80`           | \-                                                                                                                               | Maximum waiting time                                                                                                                        |

## Events

| event | Callback parameters | illustrate           |
| ----- | ------------------- | -------------------- |
| heat  | `()=>void`          | After initialization |

## Slots

| name     | illustrate                   |
| -------- | ---------------------------- |
| default  | Default Region               |
| skeleton | Lazy loading skeleton screen |
