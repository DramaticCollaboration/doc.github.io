---
order: 5
---

# WeChat Enterprise Integration

## Prerequisites

### 1\. Register a corporate WeChat account

Registration address: [https://work.weixin.qq.com/](https://work.weixin.qq.com/)

![](https://lfs.k.topthink.com/lfs/6ae08026767cb623e002f68f2d38d0f594312e665435c499e0f157efa6df6233.dat)

### 2\. Create an application

![](https://lfs.k.topthink.com/lfs/6b74ea7770a61895d3017b93b1c2bc8a77f32dbd451c1afdb9731c9cad5aea49.dat)

- Upload your logo, fill in the name and select the visible range

![](https://lfs.k.topthink.com/lfs/e7e776fbaa3eec75c491905b7cadacf546fb1f82516e45d5fc54f7c549a3a2b9.dat)

### 3\. Add trusted domain names

Find the web authorization and JS-SDK in the developer interface, set the trusted domain name, the trusted domain name is the backend access address, and the local test can use `ngrok`the mapping

![](https://lfs.k.topthink.com/lfs/a4a258792144538c88aa1448e527c9c656f2b86724b5b6f1cdd5a63e663e4738.dat)

### 4\. Add trusted IP

- Find the enterprise trusted IP in the developer interface

![](https://lfs.k.topthink.com/lfs/f49a8f51c04a3ab8013cfdb3e3b41bea99c5aacbac32cd96fe3be1e788efd4f3.dat)

- If it is a test environment, you can search for your external IP on Baidu (see the figure below). If it is an online environment, just fill in the online public IP.  
  ![](https://lfs.k.topthink.com/lfs/e5d72d91511f7d25a67a53f265d9920a0ca6188e618347a7f23d495e77930a86.dat)

### 5\. Configure web application

> Click Settings on the app home page

![](https://lfs.k.topthink.com/lfs/17a34172b22e5ee0abaafd45c6543bdc63c85176a1dbb4702e123c08e45fe668.dat)

```
前端访问地址/tenantId/租户id
```

copy

> The tenant ID can be obtained in System Management -> Tenant Management or My Tenant

![](https://lfs.k.topthink.com/lfs/b225b8074b428cbb29dd99c0bab9f17ce37c7dffd9da8972aa8a0a6a9f3dfbc2.dat)

## Synchronize user departments to local

> Find the configuration of WeChat for Business `AgentId`,`Secret`

![](https://lfs.k.topthink.com/lfs/ed9492d9a80ee93915d00c121d67354557e345900c9f1a2a8e80a4acea268e11.dat)

> `AppKey`Find the enterprise ID configured for WeChat for Business

![](https://lfs.k.topthink.com/lfs/9a5dad1e336d54755aabd513c8444cd8f59ae7ae6e1d25119f8a37d34e0f647f.dat)

> Enter `AgentId`, `AppKey`, `AppSecret`and enter the position`系统管理->第三方配置->企业微信集成`

![](https://lfs.k.topthink.com/lfs/79d95e80b6277dabda29dac8449525a21fca15731583af9280aabae2c056fdc5.dat)

- `AgentId`The corresponding one is the enterprise WeChat application `AgentId`, `AppKey`the corresponding one is the enterprise ID of the enterprise WeChat application, and `AppSecret`the corresponding one is the enterprise WeChat application`Secret`

- Please make sure `AppKey`that it is not used in other organizations, otherwise a prompt will appear `AppKey重复`.

> Click the Sync button.  
> Due to the limitation of WeChat Work's address book, SYNC cannot obtain sensitive information such as the user's mobile phone number and email address when obtaining user information. SYNC will match the system users of the current organization based on the name of WeChat Work, and then the administrator will decide whether to associate. If the match is incorrect, the administrator can manually associate.

- Click the Sync button, the system will only match users who have not been bound.
  - On the left is the account under the current tenant of SYNC, and on the right is the corporate WeChat account that needs to be bound
  - SYNC will match based on the name, if it is not correct, you can remove and rebind

> Confirm synchronization. If the user is not bound, the system will automatically generate a user.

![](https://lfs.k.topthink.com/lfs/7ad571ea15f1e682ec234a6a8ced67ca9e8f770e9e7daa25997284856f3e202d.dat)

> WeChat Work Synchronization Rules

- Departments and users can be synchronized
- When a user is not registered, the system automatically creates a member. The default account is the `组织门牌号`one with corporate WeChat `账号`. The default password is the same. `租户门牌号`The administrator can `租户管理中`find it in  
  ![](https://lfs.k.topthink.com/lfs/739e7736e2a412968b624603fb9764b8712930f3bba72dd3da9d980749d6da5b.dat)
  - The WeChat account can be found in the member information  
    ![](https://lfs.k.topthink.com/lfs/a2da76fbc38b04560abf412eecff01da9bf81d8360d1e8e1cc58269383d4152a.dat)
- When a member exists in the system but is not in the current tenant, it is assumed that `审核中`the member can be added to the tenant only after being approved by the administrator.
- When the member exists in the system and in the current tenant, update it directly
- After the synchronization is successful, you can view it in "Bound Enterprise WeChat Users". Click Remove to cancel the binding of the system user.  
  ![](https://lfs.k.topthink.com/lfs/835400c946b90392f5e6eb9e758fc34c24abb0c7d24a99ffa99a415d51d71b0f.dat)

## Send enterprise WeChat template message

### 1\. Push API Description

- Request path: /sys/thirdApp/sendMessageTest
- Request parameters:
  - app: 'Third-party app type', required (WECHAT_ENTERPRISE)
  - receiver: 'User account, optional (admin), this user account needs to be synchronized with WeChat for Enterprise
  - sendAll: Whether to send to all people, select true or false, and `receiver`you need to fill in one of them
  - content: required, text content
- Request Header
  - X-Access-Token: token authentication, required
  - X-Tenant-Id: tenant id, optional, default is 0, but the tenant must have been connected to the enterprise WeChat configuration
- Request method: POST

### 2\. Send a message

- Use `postman`WeChat Enterprise to send a test message

![](https://lfs.k.topthink.com/lfs/49c7efc84383425c4df6f725427446494ce4bf9341e51483d3ac9c5b0b4a88be.dat)  
![](https://lfs.k.topthink.com/lfs/c13bdf21931cdf255a274723ff758fdf4f4e3d3b75c6ec7439caa2112ea104a3.dat)

- Show results

![](https://lfs.k.topthink.com/lfs/e2f69379566001c7f11d5d67c5f122f2569cf1060231086e4aad43c7fdc52eff.dat)
