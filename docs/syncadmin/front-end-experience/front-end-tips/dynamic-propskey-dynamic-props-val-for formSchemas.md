---
order: 7
---

# formSchemas中dynamicPropskey、dynamicPropsVal用法

> Scenario: Assume that in the following figure , different **genders** will display different **course options** . How can this be achieved in FormSchema?

![](https://lfs.k.topthink.com/lfs/688dd1203f716b60e550bdfca607318c64adf44af6eecb1b8fdf5118f9afd52f.dat)  
![](https://lfs.k.topthink.com/lfs/e003e4d261f7002ab627dd4b7b08eb877746e91d128392d0aa0315a2ee12ddb5.dat)

#### Instructions:

_dynamicPropskey_ and _dynamicPropsVal_ must be used together, neither of them can be missing.

|                 | type       |
| --------------- | ---------- |
| dynamicPropskey | _string_   |
| dynamicPropsVal | _function_ |

#### Effect:

![](https://lfs.k.topthink.com/lfs/18d12b430d718ff0e29646649845540e11ff13b29cd7f9c3ea4d8335b4e7e8bd.dat)  
![](https://lfs.k.topthink.com/lfs/8b53471b07ccbadd6a8ad5831fc435aa11d86faac0f5c0e0ddd0053ecb461e7b.dat)

#### Implementation code:

```
<template>
  <BasicForm
    ref="formElRef"
    :class="'jee-select-demo-form'"
    :labelCol="{ span: 5 }"
    :wrapperCol="{ span: 15 }"
    :showResetButton="false"
    :showSubmitButton="false"
    :schemas="schemas"
    :actionColOptions="{ span: 24 }"
    style="height: 100%"
  >
  </BasicForm>
</template>
<script lang="ts">
  import { computed, defineComponent, unref, ref } from 'vue';
  import { BasicForm } from '/@/components/Form';
  import { schemas } from './jeecgComponents.data';

  export default defineComponent({
    components: {
      BasicForm,
    },
    name: 'JeecgComponents',
    setup() {
      const schemas = [
        {
          field: 'sex',
          component: 'JDictSelectTag',
          label: '性别选择',
          helpMessage: ['component模式'],
          componentProps: {
            dictCode: 'sex',
            type: 'radioButton',
            onChange: (value) => {
              console.log(value);
            },
          },
          colProps: {
            span: 12,
          },
        },
        {
          field: 'sex',
          component: 'JEllipsis',
          label: '选中值',
          colProps: { span: 12 },
        },

        {
          field: 'course',
          component: 'Select',
          label: '课程',
          dynamicPropskey: 'options',
          dynamicPropsVal: ({ model }) => {
            let options;
            if (model.sex == 1) {
              return [
                { value: '0', label: 'java - 男' },
                { value: '1', label: 'vue - 男' },
              ];
            } else {
              return [
                { value: '2', label: '瑜伽 - 女' },
                { value: '3', label: '美甲 - 女' },
              ];
            }
          },
          componentProps: {
            disabled: false,
          },
          colProps: {
            span: 12,
          },
        },
        {
          field: 'course',
          component: 'JEllipsis',
          label: '选中值',
          colProps: { span: 12 },
        },
      ];
      return {
        schemas,
      };
    },
  });
</script>

```

copy
