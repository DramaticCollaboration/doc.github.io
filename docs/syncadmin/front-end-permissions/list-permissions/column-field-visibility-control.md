---
order: 3
---

# Column field visibility control

> Control the visibility of column fields

## 1\. Usage

The display and hiding control of the list fields are controlled by the auth and ifShow attributes provided by BaseTable.

```
import { usePermission } from '/@/hooks/web/usePermission';
const { hasPermission } = usePermission();
```

copy

```
{
  title: '用户姓名',
  dataIndex: 'realname',
  width: 100,
  auth: 'user:add'
}
```

copy

```
{
  title: '用户姓名',
  dataIndex: 'realname',
  width: 100,
  ifShow: () => {
      return hasPermission('user:add');
  },
}
```

copy

## 2\. Permission configuration:

### 1\. Configure buttons/permissions

![](https://lfs.k.topthink.com/lfs/879fcd9a1d3e3e1a047abf6e1b6ced0dda6291684ed00010af03eb1f599cf624.dat)

### 2\. Role authorization

![](https://lfs.k.topthink.com/lfs/11727b7f481fd56361c10fd4081eff96250aae6e021f950fc24cd463da5ce9b2.dat)

## 3\. Instructions

1.  `hasPermission('user:add')` The command value "name" is the authorization ID, which can be used to control "display/access"
2.  Permission coding is configured in \[System Management--Menu Management\], add menu data of button type, configure the authorization identifier value `user:add`, select display/access for strategy, and select valid for status

#### Control rules:

- After use `hasPermission`, if there is no configuration corresponding to the command code in the menu permissions, the control will not be displayed
- Policy: Display/access, not displayed when not authorized, displayed after authorization

## 4\. Page Effect

Role permissions are not configured  
![](https://lfs.k.topthink.com/lfs/d92c169e378798ea196bf2e6640dc672e4f1a1bc8a7e5c9de81597bc037c23fa.dat)

Configuring role permissions  
![](https://lfs.k.topthink.com/lfs/430e54181240a1dbf7bafe79e2e4a8d93bff8f5a3c615771646a317b66c0ef38.dat)
