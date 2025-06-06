---
order: 5
---

# Page

Page related components

## PageWrapper

Used to wrap page components

### Usage

```
<template>
  <div>
    <PageWrapper>
      <template #left>left</template>
      <template #right>right</template>
    </PageWrapper>
  </div>
</template>
<script>
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { PageWrapper },
    setup() {
      return {};
    },
  });
</script>
```

copy

### Props

| Attributes        | type               | default value | illustrate                                              |
| ----------------- | ------------------ | ------------- | ------------------------------------------------------- |
| title             | `string`           | \-            | pageHeader title                                        |
| dense             | `是否缩小主体区域` | false         | If true, padding/margin will be cancelled.              |
| content           | `string`           | \-            | pageHeader Content                                      |
| contentStyle      | `object`           | \-            | Body area style                                         |
| contentClass      | `string`           | \-            | Main area class                                         |
| contentBackground | `boolean`          | \-            | Main Area Background                                    |
| contentFullHeight | `boolean`          | false         | Whether the main area occupies the entire screen height |
| fixedHeight       | `boolean`          | false         | Fixed main area height                                  |

### Slots

**The pageHeader slots all support**

| name          | illustrate              |
| ------------- | ----------------------- |
| leftFooter    | PageFooter left area    |
| rightFooter   | PageFooter right area   |
| headerContent | pageHeader Main content |
| default       | Main area               |

## PageFooter

Used for the toolbar at the bottom of the page

### use

```
<template>
  <div>
    <PageFooter>
      <template #left>left</template>
      <template #right>right</template>
    </PageFooter>
  </div>
</template>
<script>
  import { PageFooter } from '/@/components/Page';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { PageFooter },
    setup() {
      return {};
    },
  });
</script>
```

copy

### Slots

| name  | illustrate |
| ----- | ---------- |
| left  | Left area  |
| right | Right area |
