---
order: 2
---

# Visibility control✔

> Implementing form display and hiding

## BasicForm

### 1\. Usage:

```
import { usePermission } from '/@/hooks/web/usePermission';
const { hasPermission } = usePermission();
```

copy

The hasPermission function receives the background permission code and can pass an array hasPermission (\['user '\])

### How to use BaseForm

#### Show mode control

- **[The show](https://vvbin.cn/doc-next/components/form.html#formschema) attribute is used to dynamically determine whether the current component is displayed. It is controlled by CSS and will not delete the DOM.**

```

{
  field: 'field1',
  component: 'Input',
  label: '字段1',
  show: ({ values }) => {
    return hasPermission('user:add');
  }
}
```

copy

#### ifShow mode control

- **Dynamically determine whether the current component is displayed through [the ifShow](https://vvbin.cn/doc-next/components/form.html#formschema) attribute, js control, and delete the dom**

```
{
  field: 'field2',
  component: 'Input',
  label: '字段2',
  ifShow: ({ values }) => {
     return hasPermission('user:add');
  }
}
```

copy

#### v-auth (visibility control)

`demo:order:auth 标识来源于系统菜单创建的按钮。然后通过角色授权控制该表单项在哪些角色下可见。v3.6.4+`

```
{
    field: 'orderAuth',
    component: 'Input',
    label: '指令权限',
    helpMessage: ['有权限右侧的"选中值"可见，否则不可见'],
    colProps: {
      span: 12,
    },
  },
  {
    field: 'orderAuth',
    auth: 'demo:order:auth',
    component: 'JEllipsis',
    label: '选中值',
    colProps: { span: 12 },
  },
```

copy

#### How to use the slot

```
<template #jSelectUser="{model, field }">
    <JSelectUser v-model:value="model[field]" v-if="hasPermission('user:add')"/>
</template>
```

copy

### 2\. Permission configuration:

#### 1\. Configure buttons/permissions

![](https://lfs.k.topthink.com/lfs/879fcd9a1d3e3e1a047abf6e1b6ced0dda6291684ed00010af03eb1f599cf624.dat)

#### 2\. Role authorization

![](https://lfs.k.topthink.com/lfs/11727b7f481fd56361c10fd4081eff96250aae6e021f950fc24cd463da5ce9b2.dat)

### 3\. Instructions

1.  `hasPermission('user:add')` The command value "name" is the authorization ID, which can be used to control "display/access"
2.  Permission coding is configured in \[System Management--Menu Management\], add menu data of button type, configure the authorization identifier value `user:add`, select display/access for strategy, and select valid for status

##### Control rules:

- After use `hasPermission`, if there is no configuration corresponding to the command code in the menu permissions, the control will not be displayed
- Policy: Display/access, not displayed when not authorized, displayed after authorization
- Flexible: One authorization identification code can control multiple controls and can also be used to control list column fields (please use it flexibly)

### 4\. Page Effect

未配置角色权限  
![](https://lfs.k.topthink.com/lfs/85450044627c707df1abe57cbf4993fb2d0887cdd98a14e2761cd72b7f00edb0.dat)

配置角色权限  
![](https://lfs.k.topthink.com/lfs/fb3e7b8a704deb04091a4c3462c30ea7e1e1fd494680c55f2db1a9c3af076d3d.dat)

## Native Forms

Using `v-auth`directives and `isDisabledAuth()`functions

### Example:

1\. Display and hide control fields  
![](https://lfs.k.topthink.com/lfs/c74646d6125863ff1fa8ce9c3610f063d37a085f28856369ea03b6d2ed6ee72f.dat)

2\. Disable control fields  
![](https://lfs.k.topthink.com/lfs/87ceb6b702e651e731e71817190da9743c63f92c52da9e644ef3e6a3bbe5d941.dat)

3\. Special case handling  
If you set hidden permissions for required fields, the fields will be hidden, but the verification problem still exists. The cause of this problem is the rendering order of the form.

Solution: To solve this problem, you cannot just use `v-auth`the form to control the form. You also need to dynamically set the required check of the form to false through coding. Setting rules to computed properties can achieve better performance.
