---
order: 2
---

# Basic

Some basic usage of common components

## BasicTitle

Used to display the title, can display the help button and text

### Usage

```
<template>
  <div>
    <BasicTitle helpMessage="提示1">标题</BasicTitle>
    <BasicTitle :helpMessage="['提示1', '提示2']">标题</BasicTitle>
  </div>
</template>
<script>
  import { BasicTitle } from '/@/components/Basic/index';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicTitle },
  });
</script>
```

copy

### Props

| Attributes  | type               | default value | illustrate                                                      |
| ----------- | ------------------ | ------------- | --------------------------------------------------------------- |
| helpMessage | `string｜string[]` | \-            | Help button information on the right side of the title          |
| span        | `boolean`          | `false`       | Whether to display the blue block on the left side of the title |
| normal      | `boolean`          | `false`       | Set the text to default, not bold                               |

### Slots

| name    | illustrate |
| ------- | ---------- |
| default | Title Text |

## BasicArrow

Animated arrow component

### Usage

```
<template>
  <div>
    <BasicArrow :expand="false" />
  </div>
</template>
<script>
  import { BasicArrow } from '/@/components/Basic/index';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicArrow },
  });
</script>
```

copy

### Props

| Attributes | type      | default value | illustrate                          |
| ---------- | --------- | ------------- | ----------------------------------- |
| expand     | `boolean` | `false`       | Arrow expanded state                |
| top        | `boolean` | `false`       | The arrow points upward by default  |
| bottom     | `boolean` | `false`       | The arrow is downward by default    |
| inset      | `boolean` | `false`       | Cancel padding/margin for embedding |

## BasicHelp

Help Button Component

### Usage

```
<template>
  <div>
    <BasicHelp :text="['提示1', '提示2']" />
    <BasicHelp text="提示" />
  </div>
</template>
<script>
  import { BasicHelp } from '/@/components/Basic/index';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicHelp },
  });
</script>
```

copy

### Props

| Attributes | type               | default value | Optional Values | illustrate                                                               |
| ---------- | ------------------ | ------------- | --------------- | ------------------------------------------------------------------------ |
| fontSize   | `string`           | `14px`        | \-              | font size                                                                |
| color      | `string`           | #fff          | \-              | color                                                                    |
| text       | `string｜string[]` | \-            | \-              | Text List                                                                |
| showIndex  | `boolean`          | true          | \-              | Whether to display the serial number, effective when text is string\[\]. |
| maxWidth   | `string`           | `600px`       | \-              | Maximum Width                                                            |
| placement  | `string`           | `right`       | \-              | Display direction, refer to Tooltip component                            |

### Slots

| name    | illustrate   |
| ------- | ------------ |
| default | Default Icon |
