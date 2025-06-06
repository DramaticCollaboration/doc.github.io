---
order: 11
---

# Description details component

Encapsulate `antv`the Descriptions component

## Usage

```
<template>
  <div class="p-4">
    <Description
      title="基础示例"
      :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
      :column="3"
      :data="mockData"
      :schema="schema"
    />
    <Description @register="register" class="mt-4" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  const mockData: any = {
    username: 'test',
    nickName: 'VB',
    age: 123,
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '厦门市思明区',
    sex: '男',
    certy: '3504256199xxxxxxxxx',
    tag: 'orange',
  };
  const schema: DescItem[] = [
    {
      field: 'username',
      label: '用户名',
    },
    {
      field: 'nickName',
      label: '昵称',
      render: (curVal, data) => {
        return `${data.username}-${curVal}`;
      },
    },
    {
      field: 'phone',
      label: '联系电话',
    },
    {
      field: 'email',
      label: '邮箱',
    },
    {
      field: 'addr',
      label: '地址',
    },
  ];
  export default defineComponent({
    components: { Description, Alert },
    setup() {
      const [register] = useDescription({
        title: 'useDescription',
        data: mockData,
        schema: schema,
      });
      return { mockData, schema, register };
    },
  });
</script>
```

copy

## useDescription

Refer to the above example

```
const [register] = useDescription(Props);
```

copy

## Props

::: tip Warm reminder

In addition to the following parameters, props in the official documentation are also supported. For details, please refer to [antv Description](https://2x.antdv.com/components/descriptions-cn/#API)

:::

| Attributes      | type             | default value                                   | Optional Values | illustrate                                                    |
| --------------- | ---------------- | ----------------------------------------------- | --------------- | ------------------------------------------------------------- |
| title           | `string`         | \-                                              | \-              | title                                                         |
| size            | `string`         | small                                           | \-              | size                                                          |
| bordered        | `boolean`        | true                                            | \-              | Whether to display borders                                    |
| column          | `Number, Object` | `{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }` | \-              | `DescriptionItems`The number of rows                          |
| useCollapse     | `boolean`        | \-                                              | \-              | Whether to wrap the CollapseContainer component               |
| collapseOptions | `Object`         | \-                                              | \-              | `CollapseContainer`Component Properties                       |
| schema          | `DescItem[]`     | \-                                              | \-              | For detailed configuration, see `DescItem`Configuration below |
| data            | `object`         | \-                                              | \-              | data source                                                   |

## DescItem

| Attributes      | type                                                              | default value | Optional Values | illustrate                                                       |
| --------------- | ----------------------------------------------------------------- | ------------- | --------------- | ---------------------------------------------------------------- |
| field           | `string`                                                          | \-            | \-              | Field Name                                                       |
| label           | `string`                                                          | \-            | \-              | Tag Name                                                         |
| labelMinWidth   | `number`                                                          | \-            | \-              | Minimum label width                                              |
| contentMinWidth | `number`                                                          | \-            | \-              | content minimum width                                            |
| labelStyle      | `any`                                                             | \-            | \-              | Label style                                                      |
| span            | `number`                                                          | \-            | \-              | and parallel quantity                                            |
| show            | `(data)=>boolean`                                                 | \-            | \-              | Dynamically determine whether the current component is displayed |
| render          | `(val: string, data: any)=>VNode,undefined,Element,string,number` | \-            | \-              | Custom rendering content                                         |
