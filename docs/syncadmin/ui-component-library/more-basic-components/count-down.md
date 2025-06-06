---
order: 9
---

# CountDown

Countdown component

## CountButton

Countdown Button Component

### Usage

```
<template>
  <CountButton />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountButton } from '/@/components/CountDown';

  export default defineComponent({
    components: { CountButton },
  });
</script>
```

copy

### Props

| Attributes      | type          | default value | Optional Values | illustrate                                                                              |
| --------------- | ------------- | ------------- | --------------- | --------------------------------------------------------------------------------------- |
| value           | `any`         | \-            | \-              | Binding Values                                                                          |
| count           | `number`      | `60`          | \-              | Countdown time                                                                          |
| beforeStartFunc | `()=>promise` | \-            | \-              | The function executed before the countdown will start executing only if it returns true |

## CountDownInput

Countdown input box button component

### Usage

```
<template>
  <CountdownInput />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountdownInput } from '/@/components/CountDown';

  export default defineComponent({
    components: { CountdownInput },
  });
</script>
```

copy

### Props

| Attributes  | type          | default value                 | Optional Values | illustrate                                                                              |
| ----------- | ------------- | ----------------------------- | --------------- | --------------------------------------------------------------------------------------- |
| value       | `any`         | \-                            | \-              | Binding Values                                                                          |
| size        | `string`      | `'default', 'large', 'small'` | \-              | Input box is button size                                                                |
| count       | `number`      | `60`                          | \-              | Countdown time                                                                          |
| sendCodeApi | `()=>promise` | \-                            | \-              | The function executed before the countdown will start executing only if it returns true |
