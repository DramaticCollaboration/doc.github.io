---
order: 33
---

# SuperQuery

> SuperQuery is used for advanced query buttons of customized lists. SuperQuery has been registered globally and does not need to be introduced separately.

# How to use

## 1\. Form JSON Usage

```
{
  field: 'superQuery',
  component: 'Input',
  label: '高级查询',
  helpMessage: ['插槽模式'],
  slot: 'superQuery',
  colProps: { span: 12 },
},
```

copy

## 2\. Native Usage

```
<super-query :config="superQueryConfig" @search="handleSuperQuery"/>
<!-- xxx省略其他代码 -->

<script lang="ts">

// 高级查询配置
const superQueryConfig = reactive({
  name:{ title: "名称", view: "text", type: "string", order: 1 },
  sex:{ title: "性别", view: "list", type: "string", enum: [{value: '1', title: '男'}, {value: '2', title: '女'}], order: 6 },
  subTable:{
    title: "子表",
    view: "table",
    fields:{
      name:{ title: "名称2", view: "text", type: "string", order: 1 },
    }
  }
})
//执行查询
function handleSuperQuery(params) {
  Object.keys(params).map(k=>{
    queryParam[k] = params[k]
  });
  searchQuery();
}
//xxx省略其他代码
</script>
```

copy

## 3\. Customize the query condition data saved in storage

```
<super-query :config="superQueryConfig" @search="handleSuperQuery" :isCustomSave="true" :saveSearchData="saveSearchData" :save="handleSuperQuerySave"/>

<script lang="ts">
    const superQueryConfig = {
        name:{ title: "名称", view: "text", type: "string", order: 1 },
        birthday:{ title: "生日", view: "date", type: "string", order: 2 },
        age:{ title: "年龄", view: "number", type: "number", order: 4 },
        sex:{ title: "性别", view: "list", type: "string", dictCode: "sex", order: 5 },
        bpmStatus:{ title: "流程状态", view: "list_multi", type: "string",  dictCode: "bpm_status", order: 6 },
      }
      function handleSuperQuery(value, model, field){
        if(value){
          let str = decodeURI(value.superQueryParams)
          console.log(str)
        }
      }
      const saveSearchData = ref([
        {
          content: '[{"field":"age","rule":"eq","val":14}]',
          title: '豆蔻年华',
          type: 'and',
        },
        {
          content: '[{"field":"name","rule":"eq","val":"张三"}]',
          title: '项目经理',
          type: 'and',
        },
      ]);
      const handleSuperQuerySave = (data) => {
        // 高级查询保存后的信息
        return new Promise<void>((resolve, reject) => {
          // 模拟接口
          setTimeout(() => {
            if (Math.random() > 0.5) {
              console.log('接口成功~');
              saveSearchData.value = data;
              resolve();
            } else {
              console.log('接口失败~');
              reject();
            }
          }, 1e3);
        });
      }
</script>
```

copy

# Configuration instructions

| parameter      | Required? | type     | describe                                                                                                                                                                 |
| -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config         | yes       | Object   | Refer to the following superQueryConfig configuration                                                                                                                    |
| search         | no        | event    |                                                                                                                                                                          |
| isCustomSave   | no        | Boolean  | Whether to implement storage of saved query condition data by yourself (default: false. `v3.6.4+`)                                                                       |
| saveSearchData | no        | Array    | Saved query condition data (Required when isCustomSave is true. `v3.6.4+`)                                                                                               |
| save           | no        | Function | This function is executed when the query conditions are saved or deleted (required when isCustomSave is true. This function needs to return a Promise object. `v3.6.4+`) |

### 1.superQueryConfig configuration

> Syntax: Field name:{field configuration information}

| Attributes                                                | describe                              |
| --------------------------------------------------------- | ------------------------------------- |
| title                                                     | Title/Field Description               |
| view                                                      | Field display type                    |
| type                                                      | Field data type, date and time string |
| order                                                     | Field Order                           |
| For other configurations, refer to the following examples |                                       |

### 2\. Configuration Example

- Text box:  
  `name:{ title: "名称", view: "text", type: "string", order: 1 }`

- Drop-down box (can only pass enum):

  ```
  sex:{ title: "性别", view: "list", type: "string", enum: [{value: '1', title: '男'},{value: '2', title: '女'}], order: 2 },
  ```

  copy

- Drop-down multiple-select box (you can set the data dictionary and configure the table):

  ```
  sports:{ title: "下拉多选", view: "list_multi", type: "string",dictCode: "sports", order: 3 },
  ```

  copy

  ```
  dictTable: "sys_user", dictCode: "username", dictText: "realname", order: 3 },userSelect:{ title: "下拉多选2", view: "list_multi", type: "string",`
  ```

  copy

- Drop-down search box (can only configure tables):

  ```
  userSearch:{ title: "下拉搜索", view: "sel_search", type: "string", dictTable: "sys_user", dictCode: "username", dictText: "realname", order: 4 },
  ```

  copy

- Date box:  
  `birthday:{ title: "生日", view: "date", type: "string", order: 5 },`

- Time Frame:  
  `createTime:{ title: "创建时间", view: "datetime", type: "string", order: 6 },`

- Number box:  
  `age:{ title: "年龄", view: "number", type: "number", order: 7 },`

- Classification Tree:  
  `catTree: { title: '分类树', order: 16, view: 'cat_tree', type: 'string', pcode: 'B01' },`

- Custom Tree:

  ```
   customTree: { title: '自定义树', order: 15, view: 'sel_tree', type: 'string', dict: 't_tree,name,id', pidValue: '0' },
  ```

  copy

```
* 用户选择：
 `userSelect2:{ title: "选择用户", view: "sel_user", type: "string", order: 9 },`
* 部门选择：
 `departSelect:{ title: "选择部门", view: "sel_depart", type: "string", order: 10 },`
* 省市区：
 `pca:{ title: "省市区", view: "pca", type: "string", order: 12 },`
* popup：
```

copy

popup:{ title: "popup", view: "popup", type: "string", order: 11, code: "report_user", destFields: "popup", orgFields: "realname", popupMulti: true },

```

### 3.从表字段配置说明：

```

copy

From table name: {  
title: "Table description",  
view: "table",  
fields:{  
field configuration  
}  
}  
For example:  
subTable:{  
title: "Subtable",  
view: "table",  
fields:{  
name:{ title: "Name 2", view: "text", type: "string", order: 1 },  
}  
}

```

### 4.查询触发传值

![](../images/screenshot_1657108874245.png)

* 如果是单表：field只传递字段名
* 如果有从表，field会传递`从表名,字段名`
* 此处仅前端实现了从表的逻辑，后台默认不处理从表的信息，需要用户自行处理。

> [warning] 如果界面查询无效果，那应该是后端报错了，请检查字段配置是否正确。

```

copy
