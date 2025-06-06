---
order: 29
---

# BasicDragVerify

Drag check component

## BasicDragVerify

### Usage

```
<template>
  <div class="p-10">
    <BasicDragVerify @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDragVerify, DragVerifyActionType, PassingData } from '/@/components/Verify/index';
  export default defineComponent({
    components: { BasicDragVerify },
    setup() {
      function handleSuccess(data: PassingData) {
        const { time } = data;
        createMessage.success(`校验成功,耗时${time}秒`);
      }
      return {
        handleSuccess,
        handleBtnClick,
      };
    },
  });
</script>
```

copy

### Props

| Attributes   | type             | default value    | illustrate                                 |
| ------------ | ---------------- | ---------------- | ------------------------------------------ |
| value        | `boolean`        | \-               | Passed                                     |
| text         | `string`         | `请按住滑块拖动` | Display text when not dragging             |
| successText  | `string`         | `验证通过`       | Display text after successful verification |
| height       | `string｜string` | 40               | high                                       |
| width        | `string｜string` | 260              | width                                      |
| circle       | `boolean`        | false            | Whether to round corners                   |
| wrapStyle    | `any`            | \-               | Outer container style                      |
| contentStyle | `any`            | \-               | Body content style                         |
| barStyle     | `any`            | \-               | bar style                                  |
| actionStyle  | `any`            | \-               | Drag button style                          |

### Methods

| name   | Callback parameters | illustrate            |
| ------ | ------------------- | --------------------- |
| resume | `()=>{}`            | Restore initial value |

## RotateDragVerify

Image restoration positive direction verification component

### Usage

```
<template>
  <div class="p-10">
    <RotateDragVerify :src="img" ref="el" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { RotateDragVerify } from '/@/components/Verify/index';

  import img from '/@/assets/images/header.jpg';
  export default defineComponent({
    components: { RotateDragVerify },
    setup() {
      const handleSuccess = () => {
        console.log('success!');
      };
      return {
        handleSuccess,
        img,
      };
    },
  });
</script>
```

copy

### props

| Attributes   | type             | default value    | illustrate                                 |
| ------------ | ---------------- | ---------------- | ------------------------------------------ |
| src          | `string`         | \-               | The map's address                          |
| imgWidth     | `number`         | \-               | Image width                                |
| imgWrapStyle | `any`            | \-               | Image outer container style                |
| minDegree    | `number`         | \-               | Minimum rotation angle                     |
| maxDegree    | `number`         | \-               | Maximum rotation angle                     |
| diffDegree   | `number`         | \-               | Error Angle                                |
| value        | `boolean`        | \-               | Passed                                     |
| text         | `string`         | `请按住滑块拖动` | Display text when not dragging             |
| successText  | `string`         | `验证通过`       | Display text after successful verification |
| height       | `string｜string` | 40               | high                                       |
| width        | `string｜string` | 260              | width                                      |
| circle       | `boolean`        | false            | Whether to round corners                   |
| wrapStyle    | `any`            | \-               | Outer container style                      |
| contentStyle | `any`            | \-               | Body content style                         |
| barStyle     | `any`            | \-               | bar style                                  |
| actionStyle  | `any`            | \-               | Drag button style                          |

### Methods

| name   | Callback parameters | illustrate            |
| ------ | ------------------- | --------------------- |
| resume | `Function`          | Restore initial value |
