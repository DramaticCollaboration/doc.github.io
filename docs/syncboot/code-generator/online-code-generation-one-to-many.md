---
order: 3
---

# Online code generation one-to-many

### 1\. Online configuration of one-to-many forms

Configure the main table and sub-table separately. The foreign key configuration of the sub-table is as follows

```
 a) 子表引用主表主键ID作为外键，外键字段必须以_ID结尾，例如 ORDER_ID
 b) 主表和子表的外键字段名字，必须相同（除主键ID外）;
```

copy

![](https://img.kancloud.cn/70/6f/706f72678e47cd470017467ab73a68cb_1902x911.gif)

### 2\. Create a table online through the online form

Find the menu `在线开发 -> Online表单开发`, configure the form online, click Synchronize Database, and a table will be generated in the database.  
![](https://lfs.k.topthink.com/lfs/f09df06ed738ea1813881a729727c2a25fc0697b66b4a281f47c7105b597e64d.dat)

### 3\. Generate code interface

Click the code generation button above the online form, select the form to be generated, and then the code generation interface will be displayed.

![](https://lfs.k.topthink.com/lfs/c977b383feb8b5484e8e40acf7900defbe85fa28186cf87330fa2ec4bd62aee1.dat)

### 4\. Refer to the table for the remaining steps
