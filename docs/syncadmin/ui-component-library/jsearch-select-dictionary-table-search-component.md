---
order: 14
---

# JSearchSelect dictionary table search component ✔

Drop-down search component, supports asynchronous loading, asynchronous loading for dictionary tables with large amounts of data

## Parameter Definition

| parameter         | type              | Required | illustrate                                                                                                                                                                                                 |
| ----------------- | ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | \[String,number\] | no       | none                                                                                                                                                                                                       |
| placeholder       | string            |          | placeholder                                                                                                                                                                                                |
| disabled          | Boolean           |          | Disable                                                                                                                                                                                                    |
| dict              | string            |          | Table name, display field name, storage field name concatenated string, if dictOptions parameter is provided, this parameter can be left blank                                                             |
| dictOptions       | Array             |          | Multiple options. If the dict parameter is not provided, you can set this parameter to load multiple options.                                                                                              |
| async             | Boolean           |          | Whether to support asynchronous loading. If set to true, remote data will be loaded through the input content, otherwise the data will be filtered locally. The default value is false                     |
| popContainer      | string            |          | The CSS selector corresponding to the parent node, used internally to `document.querySelector`select the parent node. If set `.pnode`, it will find the node with class pnode and render the drop-down box |
| pageSize          | number            |          | It is effective when async is set to true, indicating the number of data to be obtained each time during asynchronous query. The default value is 10                                                       |
| getPopupContainer | Function          |          | The CSS selector corresponding to the parent node, used internally `node.parentNode`to select the parent node                                                                                              |
| adjustY           | Boolean           |          | Enable Y-axis overflow position adjustment                                                                                                                                                                 |

Table dictionary configuration rules [reference document](tablesql.html)

## Show results

![](https://lfs.k.topthink.com/lfs/0a7103b98756f3cb5dc7dace4ce03d00e320d9caa9565916b9c73f046ed8fd40.dat)

## Usage Examples

```
<template>
  <a-form>
    <a-form-item label="下拉搜索" style="width: 300px">
      <JSearchSelectTag
        placeholder="请做出你的选择"
        v-model:value="selectValue"
        :dictOptions="dictOptions">
      </JSearchSelectTag>
      {{ selectValue }}
    </a-form-item>

    <a-form-item label="异步加载" style="width: 300px">
      <JSearchSelectTag
        placeholder="请做出你的选择"
        v-model:value="asyncSelectValue"
        dict="sys_depart,depart_name,id"
        async>
      </JSearchSelectTag>
      {{ asyncSelectValue }}
    </a-form-item>
  </a-form >
</template>

<script lang='ts' setup>
     import {JSearchSelectTag} from '/@/components/Form'

     const selectValue=ref('');
     const asyncSelectValue=ref('');
     const   dictOptions:[{
          text:"选项一",
          value:"1"
        },{
          text:"选项二",
          value:"2"
        },{
          text:"选项三",
          value:"3"
        }]
</script>
```

copy
