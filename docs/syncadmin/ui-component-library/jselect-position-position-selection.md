---
order: 10
---

# JSelectPosition Position selection ✔

---

## Parameter Definition

| parameter        | type             | Is it optional? | default value | illustrate                                                                                |
| ---------------- | ---------------- | --------------- | ------------- | ----------------------------------------------------------------------------------------- |
| value            | \[String,Array\] | no              | none          | Echo value                                                                                |
| showButton       | Boolean          | no              | true          | Whether to display the selection button                                                   |
| disabled         | Boolean          | no              | false         | Disable                                                                                   |
| placeholder      | String           | no              | please choose | Select prompt                                                                             |
| rowKey           | String           | no              | code          | Value field configuration, generally the primary key field                                |
| labelKey         | String           | no              | name          | Display Field Configuration                                                               |
| params           | String           | no              | \-            | Custom query parameters, you need to pass a string, such as: params: **'{"code":"001"}'** |
| showSelected     | Boolean          | no              | false         | Whether to display the selected list on the right                                         |
| maxSelectCount   | Number           | no              | null          | Maximum number of selections                                                              |
| modalTitle       | String           | no              | Job Selection | Select box title                                                                          |
| isRadioSelection | boolean          | no              | false         | Single choice                                                                             |

## Event Definition

| Event Name      | parameter       | illustrate                                                                                             |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| getSelectResult | options, values | Confirm the selection callback and use this event to get the selected value in the selection box alone |

## Usage Examples

### BaseForm usage examples

![](https://lfs.k.topthink.com/lfs/47364abacb2742921180696d23d38d3729a6353203268179512df8428966aa75.dat)  
![](https://lfs.k.topthink.com/lfs/5e3b8e489a1530d35688663f2e53f512426d6ad04cdde49f7f83811680f221d2.dat)

```
{
    field: 'user2',
    component: 'JSelectPosition',
    label: '选择示例',
    helpMessage: ['component模式'],
    componentProps:{
        labelKey:'name',
        rowKey:'code'
    }
}
```

copy

### Example of using slots

```
<template #jSelectPosition="{model, field }">
    <JSelectPosition v-model:value="model[field]"/>
</template>
```

copy

### Single use example

```
<template>
<a-button type="primary" preIcon="ant-design:plus-outlined" @click="openHandle">选择</a-button>
<PositionSelectModal rowKey="id" @register="registerSelModal" @getSelectResult="onSelectOk"/>
</template>
<script lang="ts" setup>
    import PositionSelectModal from '/@/components/Form/src/jeecg/components/modal/PositionSelectModal .vue'
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

### showSelected property configuration effect

![](https://lfs.k.topthink.com/lfs/114b9996937bcc2b2beef0902d3cc2ee4854a7f6968c1eee0b6cea97f7d7d029.dat)
