---
order: 16
---

# Table dictionary rules description

JDictSelectTag, JSearchSelect and JTreeSelect support configuring table dictionaries and getting data directly from the table.

## Table dictionary example

### JDictSelectTag Dictionary Example

> Get dictionary data from the database table. dictCode format description: table name, text field, value field

```
<JDictSelectTag v-model="username" placeholder="请选择用户" dictCode="sys_user,realname,id"/>
```

copy

### JSearchSelect Dictionary Example

```
  {
    field: 'code',
    label: '用户名',
    component: 'JSearchSelect',
    colProps: { span: 6 },
    componentProps: {
      dict: 'demo where parent_id is null,name,code',
    },
  },
```

copy

### JTreeSelect Dictionary Example

```
<JTreeSelect placeholder="请选择分类" v-model:value="formState.zdys"
  dict="sys_category,name,id" pidValue="0"/>
```

copy

## Table dictionary configuration rules

> Because the table dictionary is too flexible and there is a risk of being attacked, `v_3.5.4`complex SQL is not supported from version 1.

### 1\. Query field requirements

The query field can only be written with the field name corresponding to the database. Functions are not allowed to be used, such as concat, DATE_FORMAT, etc.  
Aliases are not allowed to be used in the query field, such as: a.name, b.age

### 2\. Query table name requirements

Aliases are not allowed for table names, such as: sys_user a

### 3\. Requirements

1\. The fields in the query conditions must be consistent with the query field requirements.  
2\. In the conditional SQL, only the following matching rule symbols are allowed:

> The following are not supported, such as BETWEEN, EXISTS, NOT EXISTS, etc.

1.  Equal to: =
2.  Not equal to: != or <>
3.  Greater than: >
4.  Less than: <
5.  Greater than or equal to: >=
6.  Less than or equal to: <=
7.  Fuzzy matching: LIKE
8.  IN: Match multiple values
9.  NOT IN: does not match multiple values
10. IS NULL: empty
11. IS NOT NULL: Not empty
