---
order: 17
---

# ScrollContainer

Reference `element-ui`el-scrollbar component implementation

Scroll container component

## Usage

```
<template>
  <div class="p-4">
    <div class="my-4">
      <a-button @click="scrollTo(100)">滚动到100px位置</a-button>
      <a-button @click="scrollTo(800)">滚动到800px位置</a-button>
      <a-button @click="scrollTo(0)">滚动到顶部</a-button>
      <a-button @click="scrollBottom()">滚动到底部</a-button>
    </div>
    <div class="scroll-wrap">
      <ScrollContainer ref="scrollRef">
        <ul>
          <template v-for="index in 100" :key="index">
            <li>{{ index }}</li>
          </template>
        </ul>
      </ScrollContainer>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { ScrollContainer, ScrollActionType } from '/@/components/Container/index';
  export default defineComponent({
    components: { CollapseContainer, ScrollContainer },
    setup() {
      const scrollRef = ref<Nullable<ScrollActionType>>(null);
      const getScroll = () => {
        const scroll = unref(scrollRef);
        if (!scroll) {
          throw new Error('scroll is Null');
        }
        return scroll;
      };

      function scrollTo(top: number) {
        getScroll()?.scrollTo(top);
      }

      function scrollBottom() {
        getScroll()?.scrollBottom();
      }

      return {
        scrollTo,
        scrollRef,
        scrollBottom,
      };
    },
  });
</script>
<style lang="less" scoped>
  .scroll-wrap {
    width: 50%;
    height: 300px;
    background: #fff;
  }
</style>
```

copy

## Methods

| name          | Callback parameters                  | illustrate                       |
| ------------- | ------------------------------------ | -------------------------------- |
| getScrollWrap | `()=>HtmlElement`                    | Get the scroll container el      |
| scrollBottom  | `Function`                           | Scroll to bottom                 |
| scrollTo      | `Function(to:number,duration = 500)` | Scroll to the specified position |

## Slots

| name    | illustrate     |
| ------- | -------------- |
| default | Default Region |
