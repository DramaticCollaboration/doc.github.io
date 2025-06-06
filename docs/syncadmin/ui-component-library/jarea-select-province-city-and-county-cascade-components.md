---
order: 24
---

# JAreaSelect Province, City and County Cascade Components

## Parameter Definition

| parameter name | type   | default value | Required | illustrate                                       |
| -------------- | ------ | ------------- | -------- | ------------------------------------------------ |
| value(v-modal) | String |               | yes      | Binding Values                                   |
| province       | String |               | yes      | Bind Province                                    |
| city           | String |               | yes      | Bound City                                       |
| area           | String |               | yes      | Binding Region                                   |
| level          | number |               | 3        | Cascade level of provinces, cities and districts |

## Usage Examples

- Returns a single value  
  ![](https://lfs.k.topthink.com/lfs/6948a44b86e8f8b877a322541d44eeab1098dc7e3abd45ffa919652d560bfee9.dat)

```
<template>
   <a-form style="height:800px">
        <a-row class="form-row" :gutter="16">
            <a-col :lg="8">
                <a-form-item label="省市区级联单选" :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }">
                    <JAreaSelect v-model:value="pop"/>
                </a-form-item>
            </a-col>
            <a-col :lg="8">
                <a-form-item label="省市区级联单选数值" :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }">
                    <span>{{pop}}</span>
                </a-form-item>
            </a-col>
        </a-row>
    </a-form>
</template>

<script lang="ts" setup>
    import {ref,reactive} from 'vue'
    import {JAreaSelect} from '/@/components/Form';
    const pop = ref('')
</script>

```

copy

- Returning multiple values  
  ![](https://lfs.k.topthink.com/lfs/17d4b1c215ff2d997e90ddad17bfa9a9dff3e6639d6679db2a768003519d3a6f.dat)

```
<template>
   <a-form style="height:800px">
        <a-row class="form-row" :gutter="16">
            <a-col :lg="8">
                <a-form-item label="省市区级联多选" :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }">
                    <JAreaSelect v-model:province="pca.province" v-model:city="pca.city" v-model:area="pca.area"/>
                </a-form-item>
            </a-col>
            <a-col :lg="8">
                <a-form-item label="省市区级联多选数值" :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }">
                    <span>{{pca}}</span>
                </a-form-item>
            </a-col>
        </a-row>
    </a-form>
</template>

<script lang="ts" setup>
    import {ref,reactive} from 'vue'
    import {JAreaSelect} from '/@/components/Form';
    const pca = reactive({
        province:'',
        city:'',
        area:''
    })
</script>

```

copy
