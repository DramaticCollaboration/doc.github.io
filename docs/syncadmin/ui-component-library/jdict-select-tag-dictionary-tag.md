---
order: 12
---

# JDictSelectTag dictionary tag ✔

> For the use of dictionaries, a tag is currently provided to implement drop-down and radio components.  
> JDictSelectTag tag: used for form tag use, for example, through the gender dictionary encoding: sex, you can directly render the drop-down component.  
> @Dict usage  
> dictionary translation annotation @Dict, used for list field dictionary translation (for example, if the value of the field sex is 1, a translation field sex_dictText value is automatically generated as 'male'). Detailed documentation: [http://jeecg-boot.mydoc.io/?t=345678](http://jeecg-boot.mydoc.io/?t=345678)

## Component Parameters

| parameter         | type     | Required | illustrate                                                                                                                                                                                                               |
| ----------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dictCode          | string   | √        | Dictionary code configuration, for example, through the gender dictionary code: sex, you can directly render the component                                                                                               |
| type              | string   |          | Support radio, radioButton, select                                                                                                                                                                                       |
| placeholder       | string   |          | placeholder                                                                                                                                                                                                              |
| stringToNumber    | boolean  |          | Whether to convert the option value of the dictionary from string to number for echoing data                                                                                                                             |
| getPopupContainer | function |          | The menu is rendered to the parent node. By default, it is rendered to the body. If you encounter problems with the menu scrolling positioning, try changing it to the scrolling area and positioning it relative to it. |
| showChooseOption  | string   |          | Whether to display the \[Please select\] option                                                                                                                                                                          |
| disabled          | Boolean  | no       | Whether to disable, default value is false                                                                                                                                                                               |

## Usage Examples

### 1\. Dictionary usage

```
<JDictSelectTag v-model:value="queryParam.sex" placeholder="请输入用户性别" dictCode="sex"/>
```

copy

![](https://lfs.k.topthink.com/lfs/5fb19f675db0400c49e3baa093722b68bc3c796c20db2153d4ad130d825bb6a3.dat)

### 2\. Table dictionary type

Table dictionary configuration rules [reference document](tablesql.html)

> Get dictionary data from the database table. dictCode format description: table name, text field, value field

```
<JDictSelectTag v-model:value="queryParam.username" placeholder="请选择用户名称"
                   dictCode="sys_user,realname,id"/>
```

copy

![](https://lfs.k.topthink.com/lfs/4aae2db1bde74a80f709672050482b2f18b98f3160d352c33fafe256faacda09.dat)

### 3\. Table dictionary type conditions

> When getting dictionary data from a database table, you can write query conditions to filter data.  
> The following dictCode = "sys_user,realname,id,sex = '2'" means querying data from the sys_user table and only querying data with sex = '2'

```
 <JDictSelectTag v-model:value="queryParam.username" placeholder="请选择用户名称" dictCode="sys_user,realname,id,sex = '2'"/>
```

copy

![](https://lfs.k.topthink.com/lfs/e87ad1694a3aeb92390143bab2ac36404349095f5046db82a9441576e55a4014.dat)
