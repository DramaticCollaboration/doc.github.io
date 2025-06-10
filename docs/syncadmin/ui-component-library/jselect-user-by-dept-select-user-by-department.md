---
order: 27
---

# JSelectUserByDept Select user by department✔

## Parameter Definition

| parameter  | type             | Is it optional? | default value  | illustrate                                                 |
| ---------- | ---------------- | --------------- | -------------- | ---------------------------------------------------------- |
| value      | \[String,Array\] | no              | none           | Echo value                                                 |
| showButton | Boolean          | no              | true           | Whether to display the selection button                    |
| disabled   | Boolean          | no              | false          | Disable                                                    |
| rowKey     | String           | no              | username       | Value field configuration, generally the primary key field |
| labelKey   | String           | no              | realname       | Display Field Configuration                                |
| params?    | Object           | no              | none           | Custom query parameters                                    |
| modalTitle | String           | no              | User Selection | Select box title                                           |

## Event Definition

| Event Name | illustrate                            |
| ---------- | ------------------------------------- |
| onChange   | Fired when the selected value changes |

## Show results

![](https://lfs.k.topthink.com/lfs/fe11c03ab693167d7742c4c060f38d661ed3c3598273190426220c5a2cdb28cd.dat)  
![](https://lfs.k.topthink.com/lfs/3e8f41c7c0d92c47a98c14e2cec5410ae9c0e85e2ee17a6c00c57c80ca101e9b.dat)

## Usage Examples

1\. Example of using the selection box in BaseForm:

```
{
    field: 'user2',
    component: 'JSelectUserByDept',
    label: '部门选择用户',
    helpMessage: ['component模式'],
    componentProps:{
        labelKey:'realname',
        rowKey:'username'
    }
}
```

copy

2\. Example of using a selection box in a slot

```
<template #jSelectUser="{model, field }">
    <JSelectUserByDept v-model:value="model[field]"/>
</template>
```

copy

3\. Example of using the selection box alone

```
<template>
<a-button type="primary" preIcon="ant-design:plus-outlined" @click="openHandle">选择</a-button>
<UserSelectByDepModal rowKey="id" @register="registerUserDeptModal" @getSelectResult="onSelectOk"/>
</template>
<script lang="ts" setup>
    import UserSelectByDepModal from '/@/components/Form/src/jeecg/components/modal/UserSelectByDepModal .vue'
     // 注册用户选择框
    const [registerUserDeptModal, {openModal}] = useModal()

    // 打开用户选择框
    function openHandle() {
        openModal()；
    }
    // 选择用户成功
    function onSelectOk(selectRows, selectKeys) {
      //处理业务逻辑
   }
</script>
```

copy
