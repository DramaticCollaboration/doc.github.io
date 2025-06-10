---
order: 31
---

# JImportModal imports pop-up window components

> Description: Used to import Excel function from list page

## Parameter configuration

| parameter | type    | Required | illustrate                                                                                                                                          |
| --------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| url       | String  | none     | value                                                                                                                                               |
| we        | array   |          | The items that the checkbox needs to configure are an array. Each object in the array contains two attributes (for display) and value (for storage) |
| online    | Boolean |          | Whether to enable online verification mode, the default value is false                                                                              |

## Usage Examples

```

<template>
  <!--  此处省略部分代码...... -->
  <a-button preIcon="ant-design:import-outlined" type="primary" @click="openModal(true)">弹窗导入</a-button>
  <!--  此处省略部分代码...... -->
 <JImportModal @register="registerModal" :url="getImportUrl" online/>

  <!--  此处省略部分代码...... -->
</template>

<script lang="ts" setup>
    import {useModal} from '/@/components/Modal';
    import JImportModal from '/@/components/Form/src/jeecg/components/JImportModal.vue';
    import { getExportUrl } from './demo.api';

    const [registerModal, {openModal}] = useModal();
</script>
```

copy

Effect Preview  
![](https://lfs.k.topthink.com/lfs/6ca442f183686bb9e11303b4717be3b7355efcbe2e15f2888b8d1cff0d4d1de1.dat)
