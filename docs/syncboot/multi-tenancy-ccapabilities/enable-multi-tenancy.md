---
order: 2
---

# Enable multi-tenancy

> Requirements: Quickly implement the SaaS tenant solution for the entire system and isolate data by tenant ID.

## How to enable multi-tenancy

```
// 将类属性设置为true
org.jeecg.config.mybatis.MybatisPlusSaasConfig.OPEN_SYSTEM_TENANT_CONTROL
```

copy

## Multi-tenancy enabled mechanism

### 1\. After enabling the multi-tenant mechanism, realize the isolation of system module tenants

- Modules such as system management implement tenant isolation by default, involving tenant users, tenant roles, departments, my department, dictionaries, classification dictionaries, multiple data sources, and positions.
- Note: The system currently has system user and system role menus, which are for super administrators and do not provide tenant isolation.  
  ![](https://upload.jeecg.com/jeecg/help/jeecgvue3/topwrite/assets/image_1682060695925.png)

### 2\. Multiple tenant login selection issues

In the latest version of tenant mode, there is no pop-up window prompting you to select a tenant to log in. The system will select a tenant to log in by default or select the last tenant to log in. Click "Switch Department" in the upper right corner to switch tenants

### 3\. Tenant permission settings

- Currently, tenant roles and tenant departments do not involve tenant permission functions. Only the simplest object definition is done.  
  Tenant roles are only used for approval (similar to positions) and do not participate in permission authorization. Roles can be assigned to tenant users.

- The personalized permissions of tenants can be realized through the packages under the tenants, and the permissions of each tenant can be customized

![](https://upload.jeecg.com/jeecg/help/jeecgvue3/topwrite/assets/image_1682060951669.png)

### 4\. How does the system management module achieve multi-tenancy?

- Part of it is to implement data query through hard coding, isolated by tenant ID
- One part is to directly add the table configuration of tenantTable through MybatisPlusSaasConfig

### 5\. Support more functions

For the actual application of tenants, you can refer to the design of [Knockknock Cloud](https://app.qiaoqiaoyun.com/) . Currently, Knockknock Cloud uses the jeecgboot underlying code implementation.

```
a. 新注册用户支持选择租户加入，通过租户的门牌号
b. 新注册用户支持创建租户
c. 支持邀请人加入租户
d. 支持一个人加入多个租户
e. 租户支持
f. 员工离职(移出租户)
```

copy

![](https://lfs.k.topthink.com/lfs/0ee2cabe73b4cb07de2c3adc383ca3e209c663681a8b6f05d05ca5cddbe4b214.dat)
