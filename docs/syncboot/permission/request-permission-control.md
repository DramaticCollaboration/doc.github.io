---
order: 2
---

# Request permission control

> [Shiro Annotations#Common Permission Annotations](https://www.cnblogs.com/weibanggang/p/10396100.html)
>
> @RequiresRoles("admin") // Control roles  
> @RequiresPermissions("sys:role ") // Control permission instructions

### 1\. Background request permission control

By adding Shiro annotation @RequiresPermissions to the control request

```
@RequestMapping(value = "/add", method = RequestMethod.POST)
@RequiresPermissions("user:add")
public Result<SysUser> add(@RequestBody JSONObject jsonObject) {
```

copy

> For the annotation to take effect, you need to restart the project.

### 2\. Configure access permissions through the menu

> Go to the background menu management page to configure the access permission identifier (select button type). The configuration method is the same as the button permission, that is, the same authorization identifier can control both background requests and foreground button display control.

- a. Open the system menu
- b. Find the corresponding list and add subordinate button permissions

### 3\. Assign permissions to roles

> Enter the role management to authorize access rights (after authorization, log out and log in again to access the request)

### 4\. Logout Access Request

> Note: According to the current rules, permission to request annotation classes must be logged out and logged in again for it to take effect.
