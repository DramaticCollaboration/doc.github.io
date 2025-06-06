---
order: 2
---

# Button permission control

Implement list button permission control

## 1\. The front-end page controls permissions through instructions such as v-auth

### 1\. Button display and hide control

> Button display and hiding can be controlled by functions and instructions in two ways

- Function method (hasPermission) user is the permission code added by the background

Introduction method`hasPermission`

```
import { usePermission } from '/@/hooks/web/usePermission'
const { hasPermission } = usePermission();
```

copy

How to `hasPermission` control button permissions

```
<a-button  type="primary"  v-if="hasPermission('user:add')"> 新增</a-button>
```

copy

- Instruction method (v-auth) user is the permission code added by the background

```
<a-button  type="primary"   v-auth="'user:add'" @click="handleCreate" > 新增</a-button>
```

copy

### 2\. Button Disable Control

Button disabling is controlled by the disabled property provided by the antd vue component

```
<a-button type="primary" :disabled="isDisabledAuth('system:user:export')"> 导出</a-button>
```

copy

## TableAction button display and hide control

```
{
  label: '删除',
  icon: 'ic:outline-delete-outline',
  onClick: handleDelete.bind(null, record),
  auth: 'user:add', //通过权限指令控制显示（有权限显示/无权限不显示）
},
```

copy

## 2\. Configure button permission menu

Enter the menu management page in the background to configure the button permission menu  
![](https://lfs.k.topthink.com/lfs/4ec9ef914310bcffe6103e2d1f91c3ab13adfd40eb453c99838ec4c68d080593.dat)

## 3\. Backstage control button request through java annotation

> If you cannot operate due to lack of permission, you can temporarily comment out @RequiresPermissions and then release it after authorization.  
> ![](https://lfs.k.topthink.com/lfs/f490e79ce6c848aa0d01aa73c442a13dadfbbc4fc447369cbadc2dcfb66595cd.dat)

## 4\. Role Authorization Button

Enter the role management authorization button (you can see the button after authorization)  
![](https://lfs.k.topthink.com/lfs/a7004813df6b6c2ced0afd17e615507c335698971032330e75302cced73bb1a4.dat)
