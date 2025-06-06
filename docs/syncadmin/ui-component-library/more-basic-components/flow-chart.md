---
order: 13
---

# FlowChart

Flowchart component, `didi/LogicFlow`a simple package based on . For detailed configuration, please refer to the document [FlowChart](http://logic-flow.org/guide/start.html)

## Usage

```
<template>
  <FlowChart :data="demoData" />
</template>

<script lang="ts">
  import { FlowChart } from '/@/components/FlowChart';
  import { PageWrapper } from '/@/components/Page';

  import demoData from './dataTurbo.json';
  export default {
    components: { FlowChart, PageWrapper },
    setup() {
      return { demoData };
    },
  };
</script>
```

copy

## Props

| Attributes   | type      | default value | Optional Values | illustrate                     |
| ------------ | --------- | ------------- | --------------- | ------------------------------ |
| flowOptions  | `object`  | \-            | \-              | FlowCharts Configuration Items |
| data         | `object`  | \-            | \-              | Process data                   |
| toolbar      | `boolean` | `true`        | \-              | Whether to display the toolbar |
| patternItems | `[]`      | \-            | \-              | Drag list data on the left     |
