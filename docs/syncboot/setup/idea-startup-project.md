---
order: 3
---

# IDEA로 프로젝트 시작

> Use IDEA to start front-end and back-end projects

Prerequisite: Both [the backend development environment](../tools.html) and [the front-end development environment](https://help.jeecg.com/setup/dev.html) have been installed.

## 1. Start the JAVA project `jeecg-boot`

### 1. Initialize the database

> Requires MySQL 5.7+

- Execute the SQL script: jeecg-boot/db/jeecgboot-mysql-5.7.sql
- Script function: It will automatically create a library `jeecg-boot`and initialize data.

### 2. Install Maven dependencies

![](/images/screenshot_1660705757419.png)

- Through the right parent POM `install`(download dependencies and package)  
  ![](/images/6c0c4bb762fbb32eb53a509ee47ffc38ea24eeaae0a661faa1ad85f72826675f.png)

### 3. Modify the configuration file

`配置文件： jeecg-module-system/jeecg-system-start/src/main/resources/application-dev.yml`

- Database Configuration  
  ![](/images/d078ba3c957cedb8674364ccf5c93b1e550e21cda2d29c4fa74ef1c2da4963ab.png)

- redis configuration  
  ![](/images/f33948ec049d4c0769b2b94c6c20c5bdd408b425642f69862dd210009d90f34d.png)

### 4. Start the project

- Right click to execute the following class to start the project

```
jeecg-system-start/src/main/java/org/jeecg/JeecgSystemApplication.java
```

copy

### 5. Access API documentation

```
http://localhost:8080/jeecg-boot/doc.html
```

copy

## 2. Start the Vue3 front end `jeecgboot-vue3`

### 1. Download front-end dependencies

Execute the command `pnpm i`or double-click`pinstall`  
![](/images/50ba1fb5d70d967ac6ade065b9ddc5c1e6d94ea97a0228b458ee09cee2128e00.png)

Dependency installation success prompt  
![](/images/67eaa2056f0e5e9bf51fa09ba0dcc264456477cfa6e37562b28919e959b95cd9.png)

### 2. Configure the backend interface

- Modify the interface address.env.development

```
# 跨域代理，您可以配置多个, 请注意没有换行符
VITE_PROXY = [["/jeecgboot","http://localhost:8080/jeecg-boot"],["/upload","http://localhost:3300/upload"]]
#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot
```

copy

![](/images/image_1681394569874.png)

### 3. Start the front-end project

Click the command `dev`to start the project.  
If you see the following log, the startup is successful.  
![](/images/a6404918141e36c5f3d0942b081b99beb0d636f88bb171b40d8b241a5d8e30b8.png)

### 4. Access the system

`http://localhost:3100`Access the front-end project by  
default account and password:`admin/123456`
