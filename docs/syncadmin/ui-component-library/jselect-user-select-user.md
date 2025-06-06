---
order: 9
---

# JSelectUser Select user ✔

---

## Parameter Definition

| parameter        | type             | Required | default value | illustrate                                                                                      |
| ---------------- | ---------------- | -------- | ------------- | ----------------------------------------------------------------------------------------------- |
| value            | \[String,Array\] | no       | none          | Echo value                                                                                      |
| showButton       | Boolean          | no       | true          | Whether to display the selection button                                                         |
| placeholder      | String           | no       | please choose | Select prompt                                                                                   |
| disabled         | Boolean          | no       | false         | Disable                                                                                         |
| rowKey           | String           | no       | username      | Value field configuration, generally the primary key field                                      |
| labelKey         | String           | no       | realname      | Display Field Configuration                                                                     |
| params           | Object           | no       | \-            | Custom query parameters, you need to pass a string, such as: params: **'{"username":"admin"}'** |
| showSelected     | Boolean          | no       | false         | Whether to display the selected list on the right                                               |
| maxSelectCount   | Number           | no       | null          | Maximum number of selections                                                                    |
| modalTitle       | String           | no       | Select User   | Select box title                                                                                |
| isRadioSelection | boolean          | no       | false         | Single choice                                                                                   |

## Event Definition

| Event Name      | parameter       | illustrate                                                                                             |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| getSelectResult | options, values | Confirm the selection callback and use this event to get the selected value in the selection box alone |

## Usage Examples

### BaseForm usage examples

![](https://lfs.k.topthink.com/lfs/1ef787b3dba3828a5dcca95a6e34707d691e822215d6c10c6d8732f285b40611.dat)  
![](https://lfs.k.topthink.com/lfs/6f772f5f0c8c67012ff2cb1e45f2648e4848aa2a842538848a09c8376af069d1.dat)

```
{
    field: 'user2',
    component: 'JSelectUser',
    label: '用户选择示例',
    helpMessage: ['component模式'],
    componentProps:{
        labelKey:'realname',
        rowKey:'id'
    }
}
```

copy

### Example of using slots

```
<template #jSelectUser="{model, field }">
    <JSelectUser v-model:value="model[field]"/>
</template>
```

copy

### Single use example

```
<template>
<a-button type="primary" preIcon="ant-design:plus-outlined" @click="openHandle">选择</a-button>
<UserSelectModal rowKey="id" @register="registerSelUserModal" @getSelectResult="onSelectOk"/>
</template>
<script lang="ts" setup>
    import UserSelectModal from '/@/components/Form/src/jeecg/components/modal/UserSelectModal.vue'
     // 注册用户选择框
    const [registerSelUserModal, {openModal}] = useModal()

    // 打开用户选择框
    function openHandle() {
        openModal()；
    }
    // 选择用户成功
    function onSelectOk(options, values) {
      //处理业务逻辑
   }
</script>
```

copy

### Open the selected list on the right

Add configuration showSelected  
![](https://lfs.k.topthink.com/lfs/eea8c9596554c694031fe2081980061dced9e325f7489a4ea72d0a92727ae4be.dat)
