---
order: 6
---

# Advanced query component usage

**Although the advanced query component** is not open source in jeecg-vue3, it has been **globally registered** and does not affect its use.  
According to the document [SuperQuery advanced query](https://help.jeecg.com/component/SuperQuery.html) can be easily used in the project.

**How to use the advanced query component:**

```
// 方法一
<super-query :config="superQueryConfig" @search="handleSearch"></super-query>
const superQueryConfig = reactive({
  name: { title: '名称', view: 'text', type: 'string', order: 1 },
  sex: { title: '性别', view: 'list', type: 'string', dictCode: 'sex', order: 2 }
});
const handleSearch = (params) => {
  console.log(params); // 得到高级查询组件的条件，拼接到接口即可
};
```

copy

```
// 方法二
<super-query ref="superQueryRef" @search="handleSearch"></super-query>
const superQueryRef = ref(null);
superQueryRef.value.init({
  name: { title: '名称', view: 'text', type: 'string', order: 1 },
  sex: { title: '性别', view: 'list', type: 'string', dictCode: 'sex', order: 2 }
});
const handleSearch = (params) => {
  console.log(params); // 得到高级查询组件的条件，拼接到接口即可
};
```

copy

Take the "Single Table Example" page in jeecg-vue3 as an example:  
![](https://lfs.k.topthink.com/lfs/fe216cecd9584d000f9f3cb2bfd55d2ef28de8760f1706f68d71365007627e26.dat)  
We want to query all fields through **the advanced query component :**

**1\. Get all fields and types through the interface (communication with the backend)**  
![](https://lfs.k.topthink.com/lfs/b1ef149cb4529c064b995acf2b4848484046a5627364f9959bbbe4139a48a858.dat)  
**2\. Write the front-end code based on the information obtained**

```
<super-query :config="superQueryConfig" @search="handleSuperQuery" />

 const superQueryConfig = reactive({
    name: { title: '名称', view: 'text', type: 'string', order: 1 },
    keyWord: { title: '关键词', view: 'text', type: 'string', order: 2 },
    punchTime: { title: '打卡时间', view: 'datetime', type: 'string', order: 3 },
    keyWord: { title: '工资', view: 'text', type: 'number', order: 4 },
    salaryMoney: { title: '奖金', view: 'text', type: 'number', order: 5 },
    sex: { title: '性别', view: 'list', type: 'string', dictCode: 'sex', order: 6 },
    birthday: { title: '生日', view: 'date', type: 'string', order: 7 },
    email: { title: '邮箱', view: 'text', type: 'string', order: 8 },
    content: { title: '个人简介', view: 'text', type: 'string', order: 9 },
  });

  function handleSuperQuery(params) {
    Object.keys(params).map((k) => {
      // 得到高级查询组件的条件，拼接到接口
      queryParam[k] = params[k];
    });
    // 调用接口重新刷新表格数据
    searchQuery();
  }

```

copy

| Attributes | describe                                                                                                                                                                                                                                                                                                        |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title      | Field description (label displayed in the drop-down box of the Advanced Query component)                                                                                                                                                                                                                        |
| view       | Field display type (based on this, the type of component is rendered. text: text box, list: drop-down box, list_multi: drop-down multiple-select box, etc. For more information, refer to [SuperQuery advanced query](https://help.jeecg.com/component/SuperQuery.html#2%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B) ) |
| type       | Field data type, date and time string                                                                                                                                                                                                                                                                           |
| order      | Field order (the order in which the fields appear in the Advanced Query component drop-down box)                                                                                                                                                                                                                |

**3\. Final effect**  
![](https://lfs.k.topthink.com/lfs/194a31f1457b5183872938d208f3729bc405d3039d2ef668c15865c4df67cbe8.dat)  
![](https://lfs.k.topthink.com/lfs/7bf2aa8f71712b0bcbc1000492cd9d1840c4c4c133e539f20990532b4c671c0a.dat)
