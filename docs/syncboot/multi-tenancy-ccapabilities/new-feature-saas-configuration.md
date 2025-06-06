---
order: 4
---

# New feature SAAS configuration

Implement SAAS isolation for a table, specifically implement the following functions

> 1.  Add data to automatically inject the login user's tenant ID.
> 2.  The query automatically filters data based on the tenant ID of the login user.

## Specific steps

### 1\. Code configuration

Add the table names that require tenant isolation to `org.jeecg.config.mybatis.MybatisPlusSaasConfig.TENANT_TABLE`the collection.

Example:

```
TENANT_TABLE.add("demo");
```

copy

![](https://lfs.k.topthink.com/lfs/fac66a5f7672a8631505a0133279d8d7b387f6aac7724464c780cfb1dd473886.dat)

### 2\. Add tenant ID field to database table

The above multi-tenant table needs to add a `int`type field `tenant_id`, and the corresponding Java entity also needs to add fields `tenantId`.

```
ALTER TABLE {表名} ADD COLUMN tenant_id int(10) NULL DEFAULT 0;
```

copy

### 3\. Tenant Configuration

#### 3.1 Adding multi-tenancy

Go to System Management > Tenant Management and configure tenants.

![](https://lfs.k.topthink.com/lfs/663f234f9843c7d19cd370e65f097d21c9572371d7c35e9d022605d4aa315db5.dat)

#### 3.2 Assigning tenants to users

Enter \[User Management\] to set the user's tenant. One user can select multiple tenants.  
![](https://lfs.k.topthink.com/lfs/5c53e0e19b72403c649b567fc86779edb0258cf88ffaed5008cce727560b612b.dat)

### 4\. Select tenant login (test)

When a user has multiple tenants, a tenant will be automatically selected to log in or the tenant that logged in last time when logging in. To switch tenants,  
click "Switch Department" in the upper right corner.  
When you access the corresponding module at this time, you will find that the data is isolated by tenant ID, and new data will automatically carry the tenant ID.

---

### Other Rules

#### 1\. How to pass multi-tenant IDs between different services under microservices

- After logging in, the tenant ID will be stored on the front end
- Each request will carry a header `X-Tenant-Id`value of the tenant ID
- Each service can get the tenant ID from the request

```
String tenantId = req.getHeader("X-Tenant-Id");
```

copy

#### 2\. When the user has not been assigned a tenant

Log in `X-Tenant-Id`with the default tenant ID`0`
