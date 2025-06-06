---
order: 40
---

# JPopupDict popup dictionary ✔

#### Component Parameters

| parameter          | type    | Required | illustrate                                                                                                                                                                                                                                                                                               |
| ------------------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dictCode           | string  | yes      | dictCode format description: online report code, text field, value field                                                                                                                                                                                                                                 |
| sorter             | String  | no       | Default sort column, usage: column name = desc \| asc. Example:`age=asc`                                                                                                                                                                                                                                 |
| multi              | Boolean | no       | Whether to support multiple selection, the default value is false                                                                                                                                                                                                                                        |
| param              | object  | no       | Dynamic parameter object, manually add a record in the online report parameter, and then pass the parameter with the same name in your own page as a data query condition. If it is a string type, it needs to be set **to** the format of double quotes inside single quotes, such as {name: "'admin'"} |
| splitter           | string  | no       | Delimiter, by default `,`, is only `,`useful for values ​​that are not separated by the database. The final database save is still`,`                                                                                                                                                                    |
| showAdvancedButton | Boolean | no       | Whether popup is displayed to expand and close, the default is true to expand                                                                                                                                                                                                                            |

#### Show results

![](https://lfs.k.topthink.com/lfs/de95302a56eb7b42a8043e74b82b0c52090351a6fc9fffb02f0e3d69c642c2d8.dat)

#### Usage Examples

```
<template>
  <BasicForm
    :schemas="schemas"
    :actionColOptions="{ span: 24 }"
    @submit="handleSubmit"
  >
  </BasicForm>
</template>
<script setup lang="ts">
  import { BasicForm } from '/@/components/Form';
  const handleSubmit = (values) => {
    console.log(values);
  };
  const schemas = [
    {
      field: 'pop2',
      component: 'JPopupDict',
      label: 'JPopupDict示例',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        dictCode: 'report_user01,username,id',
        multi: true,
      },
    },
    {
      field: 'pop2',
      component: 'JEllipsis',
      label: '选中值',
      colProps: {
        span: 12,
      },
    },
  ];
</script>
```

copy
