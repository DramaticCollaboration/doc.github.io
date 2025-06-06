---
order: 11
---

# JSelectDept Department selection ✔

---

## Parameter Definition

| parameter          | type             | Required? | default value        | illustrate                                                                                     |
| ------------------ | ---------------- | --------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| value              | \[String,Array\] | no        | none                 | Echo value                                                                                     |
| showButton         | Boolean          | no        | true                 | Whether to display the selection button                                                        |
| disabled           | Boolean          | no        | false                | Disable                                                                                        |
| rowKey             | String           | no        | key                  | Value field configuration, generally the primary key field                                     |
| labelKey           | String           | no        | title                | Display Field Configuration                                                                    |
| defaultExpandLevel | String           | no        | 0                    | Initial expansion level                                                                        |
| checkStrictly      | Boolean          | no        | false                | The selected states of parent and child nodes are no longer related                            |
| checkable          | Boolean          | no        | true                 | Whether to display the checkbox                                                                |
| startPid           | String           | no        | \-                   | Root node initial value (used when serverTreeData does not enable server-side data conversion) |
| primaryKey         | String           | no        | id                   | Primary key field                                                                              |
| parentKey          | String           | no        | parentId             | Parent ID field                                                                                |
| titleKey           | String           | no        | title                | Tree node displays text field                                                                  |
| serverTreeData     | Boolean          | no        | true                 | Whether to enable server-side data conversion                                                  |
| sync               | Boolean          | no        | true                 | Whether to enable asynchronous data loading                                                    |
| multiple           | Boolean          |           | true                 | `v1.1.0`Whether to allow multiple selections                                                   |
| ~params~           | String           | no        | \-                   | ~Custom query parameters, you need to pass a string, such as: params: **'{"orgCode":"A01"}'**~ |
| modalTitle         | String           | no        | Department Selection | Select box title                                                                               |

## Event Definition

| Event Name      | parameter       | illustrate                                                                                             |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| getSelectResult | options, values | Confirm the selection callback and use this event to get the selected value in the selection box alone |

## Data format required by tree

```
[{
        "key": "1",
        "title": "节点1",
        "children":[
             {
                   key:"1-1",
                   title:"子节点",
                   children:[]
             }
        ]
    },{
        "key": "2",
        "departName": "节点2",
       "children":[]
    }
]
```

copy

## Usage Examples

### BaseForm usage examples

![](https://lfs.k.topthink.com/lfs/fd941edc6a82d5e38c0b7bec032d1352cc53897816a5bbd61691c10cfd51d01a.dat)  
![](https://lfs.k.topthink.com/lfs/b3a94db8b81a5b4d682d6619a353776fad6518444e7c8e8de0ff6db8a6318de3.dat)

```
{
    field: 'user2',
    component: 'JSelectDept',
    label: '选择示例',
    helpMessage: ['component模式'],
    componentProps:{
        labelKey:'departName',
        rowKey:'orgCode'
    }
}
```

copy

### Example of using slots

```
<template #jSelectDept="{model, field }">
    <JSelectDept v-model:value="model[field]"/>
</template>
```

copy

### Single use example

```
<template>
<a-button type="primary" preIcon="ant-design:plus-outlined" @click="openHandle">选择</a-button>
<DeptSelectModal rowKey="id" @register="registerSelModal" @getSelectResult="onSelectOk"/>
</template>
<script lang="ts" setup>
    import DeptSelectModalfrom '/@/components/Form/src/jeecg/components/modal/DeptSelectModal.vue'
     // 注册选择框
    const [registerSelModal, {openModal}] = useModal()
    let selectValues = reactive<Recordable>({
     //附值value
      value: [],
    });
    //下发 selectValues
    provide('selectValues', selectValues);
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

### Front-end conversion tree data structure

As shown in the following data, the data structure returned by the backend is not in tree form but must contain parentId. In this case, you need to set serverTreeData=false, turn on the front-end conversion to tree structure data, and specify titleKey as departName, primaryKey as deptId, and parentKey as parentId

```
[{
        "deptId": "1",
        "parentId": "",
        "departName": "节点1",
    },{
        "deptId": "2",
        "parentId": "",
        "departName": "节点2",
    }
]
```

copy

Code Sample

```
{
  label: '所属部门',
  field: 'selecteddeparts',
  component: 'JSelectDept',
  componentProps:({formActionType,formModel}) => {
      return {
          titleKey:"departName",
          primaryKey:"id",
          parentKey:"parentId",
          serverTreeData:false
      }
  }
}
```

copy

### Enable asynchronous loading

When the amount of data is too large, we hope that the tree is loaded asynchronously. At this time, we can set sync to start asynchronous loading. If the data structure does not meet the needs, we need to start the front-end conversion of the tree structure data  
code example

```
{
  label: '所属部门',
  field: 'selecteddeparts',
  component: 'JSelectDept',
  componentProps:({formActionType,formModel}) => {
      return {
          sync:true
      }
  }
}
```

copy
