---
order: 13
---

# JCheckbox Multi-select ✔

Functional description: The antd-vue checkbox component processes arrays, which is not very convenient to use. It is encapsulated twice and only needs to process strings when used.

---

## Parameter configuration

| parameter | type    | Required | illustrate                                                                                                                                          |
| --------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | String  | none     | value                                                                                                                                               |
| options   | array   |          | The items that the checkbox needs to configure are an array. Each object in the array contains two attributes (for display) and value (for storage) |
| dictCode  | string  |          | Checkbox dictionary code configuration, for example, through the gender dictionary code: sex, you can directly render the component                 |
| disabled  | Boolean | no       | Whether to disable, default value is false                                                                                                          |

## Usage Examples

---

```
<template>
    <a-form :model="form">
        <a-row class="form-row" :gutter="16">
            <a-col :lg="8">
                <a-form-item label="options式用法" :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }">
                    <JCheckbox  v-model:value="form.sport" :options="sportOptions"/>
                </a-form-item>
            </a-col>
            <a-col :lg="8">
                <a-form-item label="dictCode式用法" :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }">
                    <JCheckbox v-model:value="form.sex" dictCode="sex"/>
                </a-form-item>
            </a-col>
        </a-row>
    </a-form>
</template>

<script lang="ts" setup>
  import {JCheckbox} from '/@/components/Form';
  import { reactive} from 'vue';

  const  form = reactive({
      sex : '1',
      sport: '1,3'
    });

 const sportOptions = [
          {
            label:"足球",
            value:"1"
          },{
            label:"篮球",
            value:"2"
          },{
            label:"乒乓球",
            value:"3"
  }]
</script>
```

copy

Effect Preview  
![](https://lfs.k.topthink.com/lfs/f89eeb1de5093ee00d7171af731cd0b81d898c5d445447fee421430446045b91.dat)
