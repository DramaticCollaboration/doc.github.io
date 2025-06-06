---
order: 29
---

# JSelectRole Select a role ✔

## Parameter Definition

| parameter        | type             | Is it optional? | default value | illustrate                                                                                |
| ---------------- | ---------------- | --------------- | ------------- | ----------------------------------------------------------------------------------------- |
| value            | \[String,Array\] | no              | none          | Echo value                                                                                |
| showButton       | Boolean          | no              | true          | Whether to display the selection button                                                   |
| placeholder      | String           | no              | please choose | Select prompt                                                                             |
| rowKey           | String           | no              | id            | Value field configuration, generally the primary key field                                |
| labelKey         | String           | no              | name          | Display Field Configuration                                                               |
| params           | String           | no              | \-            | Custom query parameters, you need to pass a string, such as: params: **'{"code":"001"}'** |
| maxSelectCount   | Number           | no              | 0             | Maximum number of selections                                                              |
| isRadioSelection | boolean          | no              | false         | Single choice                                                                             |

## Event Definition

| Event Name      | parameter       | illustrate                                                                                             |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| getSelectResult | options, values | Confirm the selection callback and use this event to get the selected value in the selection box alone |

## Usage Examples

### BaseForm usage examples

![](https://lfs.k.topthink.com/lfs/cd7496d95801fb102523ed3e25295a134f11208ab2048a14ba9fe480cf59737d.dat)  
![](https://lfs.k.topthink.com/lfs/aec63f012fcdbd470ccaeda3c22017bfc15b03d7da021e7923bf0260decceb7f.dat)

```
{
    field: 'role',
    component: 'JSelectRole',
    label: '选择示例',
    helpMessage: ['component模式'],
    componentProps:{
        labelKey:'roleName',
        rowKey:'id'
    }
}
```

copy

### Example of using slots

```
<template #jSelectPosition="{model, field }">
    <JSelectRole v-model:value="model[field]"/>
</template>
```

copy

### Single use example

```
<template>
<a-button type="primary" preIcon="ant-design:plus-outlined" @click="openHandle">选择</a-button>
<RoleSelectModal  @register="registerSelModal" @getSelectResult="onSelectOk"/>
</template>
<script lang="ts" setup>
    import RoleSelectModal  from '/@/components/Form/src/jeecg/components/modal/RoleSelectModal.vue'
     // 注册选择框
    const [registerSelModal, {openModal}] = useModal()

    // 打开选择框
    function openHandle() {
        openModal()；
    }
    // 选择确认事件
    function onSelectOk(selectRows, selectKeys) {
      //处理业务逻辑
   }
</script>
```

copy
