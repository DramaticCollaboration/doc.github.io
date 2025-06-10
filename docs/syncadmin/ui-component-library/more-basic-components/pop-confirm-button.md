---
order: 14
---

# PopConfirmButton

Button with PopConfirm drop-down menu functionality

## Usage

```
<template>
  <PopConfirmButton>按钮文本</PopConfirmButton>
</template>

<script>
  import { defineComponent } from 'vue';
  import { PopConfirmButton } from '/@/components/Button';
  export default defineComponent({
    components: { PopConfirmButton },
  });
</script>
```

copy

## Props

::: tip

**Keep** **the original functions of** [anv design popconfirm component](https://2x.antdv.com/components/popconfirm-cn/) and extend the following properties

:::

| Attributes | type      | default value | illustrate                                                                            |
| ---------- | --------- | ------------- | ------------------------------------------------------------------------------------- |
| enable     | `boolean` | true          | Whether to enable the drop-down menu. If false, the default button will be displayed. |
