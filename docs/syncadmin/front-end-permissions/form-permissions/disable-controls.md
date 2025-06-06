---
order: 3
---

# Disable controls ✔

> Form disabling control can be achieved by the following methods

## 1\. Usage:

```
import { usePermission } from '/@/hooks/web/usePermission';
const { isDisabledAuth} = usePermission();
```

copy

The isDisabledAuth function receives the background permission code and can pass the array isDisabledAuth(\['user '\])

### Control in BaseForm

- **Dynamically determine whether the current component is disabled through [dynamicDisabled](https://vvbin.cn/doc-next/components/form.html#formschema)**  
  as shown in the following code

```
{
  field: 'field3',
  component: 'DatePicker',
  label: '字段3',
  dynamicDisabled: ({ values }) => {
     return isDisabledAuth('user:add');
  },
},
```

copy

### Control in individual components

```
<a-checkbox :disabled="isDisabledAuth('user:add')"></a-checkbox>
```

copy

## 2\. Permission configuration:

### 1\. Configure buttons/permissions

![](https://lfs.k.topthink.com/lfs/db07fa3bd646c5aeb5fa91033c357db45bd16433de9c4002698bde68cf0bee8d.dat)

### 2\. Role authorization

![](https://lfs.k.topthink.com/lfs/11727b7f481fd56361c10fd4081eff96250aae6e021f950fc24cd463da5ce9b2.dat)

#### 3\. Instructions

1.  `:disabled="isDisabledAuth('user:add')"` Call the disabledAuth method, the method parameter `user:add`is the authorization ID, the method returns true/false according to the authorization rule to control whether to disable
2.  Permission coding is configured in \[System Management--Menu Management\], add menu data of button type, configure the authorization identifier value `user:add`, select editable for policy, and select valid for status

#### Control rules:

- If there is no configuration for the corresponding command code in the menu permissions, no disable control will be performed.
- Policy: Editable, controls disabled when not authorized, editable after authorization

## 4\. Page Effect

Role permissions are not configured  
![](https://lfs.k.topthink.com/lfs/85450044627c707df1abe57cbf4993fb2d0887cdd98a14e2761cd72b7f00edb0.dat)

Configuring role permissions  
![](https://lfs.k.topthink.com/lfs/fb3e7b8a704deb04091a4c3462c30ea7e1e1fd494680c55f2db1a9c3af076d3d.dat)
