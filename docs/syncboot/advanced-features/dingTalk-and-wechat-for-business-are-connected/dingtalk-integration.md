---
order: 3
---

# DingTalk Integration

## Prerequisites

### 1\. Register a DingTalk account

Registration address: [https://oa.dingtalk.com/register_new.htm](https://oa.dingtalk.com/register_new.htm)  
Enter your mobile number and click Register

![](https://lfs.k.topthink.com/lfs/fba5070c079c19276d4f53903225e65d3d511577c5852e2e6e6706977f065c54.dat)

### 2\. Create a DingTalk application (H5 micro application)

- Log in to DingTalk Open Platform  
  [https://open.dingtalk.com/](https://open.dingtalk.com/)

- Create a new application  
  ![](https://lfs.k.topthink.com/lfs/42e848c16109a013979bb7cf2b416f24de6b217f918bc1ebf93b5fa2eecb81b2.dat)

### 3\. New version of DingTalk application configuration

#### 3.1 Adding a web application

- In Add Application Capability, find "Web Application" and click Configure.

![](https://lfs.k.topthink.com/lfs/f224ae9fe35ba490f34c125d2020d2e7e7ef89e48229d1ba8947305d80adafd9.dat)

- Configuring the web application

![](https://lfs.k.topthink.com/lfs/45064250ac8af72675d7bd515c665abd093977389bb1495f932fd571115ca1a3.dat)

- ① Application homepage address: the front-end address accessed by DingTalk on the mobile terminal

  - like:`http://192.168.1.6:3100/tenantId/租户id`

- ② PC homepage address: the front-end address accessed by DingTalk on the PC

  - like:`http://192.168.1.6:3100/tenantId/租户id`

> The tenant ID can be obtained in System Management -> Tenant Management or My Tenant

![](https://lfs.k.topthink.com/lfs/6d10a3ec7f52f80e86f8be2aa0f7ddcad25866ba58ee8830b8d36b7f4c255144.dat)

#### 3.2 Configure the developer IP whitelist and login-free callback address

![](https://lfs.k.topthink.com/lfs/5d7835fdad1ee3ceed97c200e8ecff910cfd995769059062074b2c831bd53e1c.dat)

- ① Configure "Server egress IP" and "Redirect URL" in the security configuration
- ② Server export IP: `123.125.121.209`If it is a test environment, you can search for your external network IP on Baidu (see the figure below). If it is an online environment, just fill in the online public network IP.  
  ![](https://lfs.k.topthink.com/lfs/21c7451a154abde7c136ca8ffc5c4b5154d71be9ffdca48c8be18cc0cb3e4870.dat)
- ③ Redirect URL: Local testing can be adopted `ngrok`or `花生壳`mapped

#### 3.3 Authorization of interface permissions

> You need to apply for DingTalk permissions and must add the following permissions

- Company employee mobile phone number information
- Email and other personal information
- Address book department information read permission
- Member information read permission
- Address book department member read permission
- Personal mobile phone number information
- Address book personal information read permission
- Maintaining the access rights of the address book interface
- Example: Search `个人手机号信息`, click Apply for Permission

![](https://lfs.k.topthink.com/lfs/d35deff895d633bd9d5246debfe99f81846c8f20a2e3b728c4bcf15e6319c2a0.dat)

#### Version 3.4 released

- In Version Management Pre-Release, click Create New Version

![](https://lfs.k.topthink.com/lfs/018b0cfe06c25cc741fa5a1293cd41585a66b863bf67c4877bd0696ffffbe8ae.dat)

- After filling in the information, select the scope of use and save it.

![](https://lfs.k.topthink.com/lfs/a4d5495a7c5e654bb3852730882df216a43997501e1387f300db7d64eaf3b8bd.dat)

### 4\. Old version of DingTalk application configuration

#### 4.1 Developer IP whitelist configuration and homepage address configuration

![](https://lfs.k.topthink.com/lfs/2cbafac5a0c550de5f4a1c78d40b3461585c5861ac5ec931f328d8073f6ed48f.dat)

- In the newly created application details, find the one on the left navigation bar `开发管理`and click on the right `修改按钮`to fill in the data, as shown in steps ①②

- ③ Export IP: `123.125.121.209`If it is a test environment, you can search for your external IP on Baidu (see the figure below). If it is an online environment, just fill in the online public IP.  
  ![](https://lfs.k.topthink.com/lfs/950632885b1e6f760399231d3467056c524ff8345bb99eb81e925a80246688bb.dat)

- ④ Application homepage address: the front-end address accessed by mobile DingTalk

  - like:`http://192.168.1.6:3100/tenantId/租户id`

- ⑤ PC homepage address: the front-end address accessed by DingTalk on the PC

  - like:`http://192.168.1.6:3100/tenantId/租户id`

> The tenant ID can be obtained in System Management -> Tenant Management or My Tenant

![](https://lfs.k.topthink.com/lfs/b225b8074b428cbb29dd99c0bab9f17ce37c7dffd9da8972aa8a0a6a9f3dfbc2.dat)

#### 4.2 Authorization of interface permissions

> You need to apply for DingTalk permissions and must add the following permissions

- Company employee mobile phone number information
- Email and other personal information
- Address book department information read permission
- Member information read permission
- Address book department member read permission
- Personal mobile phone number information
- Address book personal information read permission
- Maintaining the access rights of the address book interface
- Example: Search `个人手机号信息`, click Apply for Permission

![](https://lfs.k.topthink.com/lfs/ec11012ee18818915017a5d12b81dd49ecb9b790b22747aa47a6c4c72a674fca.dat)

#### 4.3 Configure the login-free callback address

- Configure the login-free callback address. Local testing can use `ngrok`or `花生壳`map it.

![](https://lfs.k.topthink.com/lfs/d86d357f08ff8b15b31ca0a8fda66036701a02282d2d6831779f68143a6c13f4.dat)

#### Version 4.4 released

![](https://lfs.k.topthink.com/lfs/2447b4a6ef8426aeee7fb5802e430d1affaf7ccd7dd557d38de075c2f6c32c01.dat)

> After the release is successful, you can choose the scope of use

![](https://lfs.k.topthink.com/lfs/c0472a72bd7740cf5adc1d9f03a02fba83bf854d17a2841d7a5e5ff12c51abf9.dat)

## DingTalk synchronizes user departments to local

> Find the DingTalk configuration `AgentId`,`AppKey``AppSecret`

![](https://lfs.k.topthink.com/lfs/43ee30ac54c7c18baba026ca2569b36add6aec427b3bd6873bd1b81b0597412c.dat)

> The new version of DingTalk application is configured here: credentials and basic information , `原企业内部应用AgentId`,`Client ID (对应原AppKey)``Client Secret（对应原AppSecret）`

![](https://lfs.k.topthink.com/lfs/ba4e9eed8ba173149b3d020f0b73d54f6c11bbb3a0336ebc766c5ad8fbe51d46.dat)

> Enter `AgentId`, , `AppKey`and`AppSecret`

- Please make sure `AppKey`it is not used in other organizations, otherwise it will prompt `AppKey重复`.  
  System Management->Third-party Configuration  
  ![](https://lfs.k.topthink.com/lfs/52623c1405a9deff367d81344cefebb183ee9791b2a1caab401ffd169cbc14e4.dat)

> Click Synchronize to complete the DingTalk synchronization

![](https://lfs.k.topthink.com/lfs/7c725f2cde666e6a987cccb8bd3a6d82b8e8d3763f76e97be8f7e149d607d145.dat)

> Rules for synchronizing DingTalk to Knockknock Cloud:

- Departments and users can be synchronized
- When a user is not registered, the system automatically creates a member, the default account is `手机号`, the default password is `租户门牌号+手机号`, `租户门牌号`the administrator can `租户管理`find it in  
  ![](https://lfs.k.topthink.com/lfs/739e7736e2a412968b624603fb9764b8712930f3bba72dd3da9d980749d6da5b.dat)
- When a member exists in the system but is not in the current tenant, it will be added to the current tenant by default.
- When the member exists in the system and in the current tenant, update it directly

> Note: When multiple data appear in department synchronization (i.e. duplicate data), please check whether there are multiple application IDs corresponding to different tenants under one enterprise.

![](https://lfs.k.topthink.com/lfs/abd1d1cbd36b84798cc83b2caf004fa50b6a485286586054dffb2adb7e72a45d.dat)

## Send a DingTalk template message

### 1\. Push API Description

- Request path: /sys/thirdApp/sendMessageTest
- Request parameters:
  - app: 'Third-party app type', required (DINGTALK)
  - receiver: 'User account, optional (admin), this user account needs to be synchronized with DingTalk
  - sendAll: Whether to send to all people, select true or false, and `receiver`you need to fill in one of them
  - content: required, text content
- Request Header
  - X-Access-Token: token authentication, required
  - X-Tenant-Id: tenant id, optional, default is 0, but the tenant must have been connected to DingTalk configuration  
    ![](https://lfs.k.topthink.com/lfs/e2f53ab7cbcf074618a0a93c6c37b53edd9428e742eb30d990bf27cf983bdbb6.dat)
- Request method: POST

### 2\. Send a message

- Use `postman`the DingTalk test message

![](https://lfs.k.topthink.com/lfs/49c7efc84383425c4df6f725427446494ce4bf9341e51483d3ac9c5b0b4a88be.dat)  
![](https://lfs.k.topthink.com/lfs/9cec5a270d88d1ed32c83f8a6e243304c76e6f6768530985f0f4ebd599bcbe74.dat)

- Show results

![](https://lfs.k.topthink.com/lfs/8a5628917e31a909eff88afac4ef2b964df7b61bef2fa387113011f425f2d610.dat)
