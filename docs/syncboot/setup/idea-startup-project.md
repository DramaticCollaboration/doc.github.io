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

- Through the right parent POM `install`(download dependencies and package)

### 3. Modify the configuration file

`配置文件： jeecg-module-system/jeecg-system-start/src/main/resources/application-dev.yml`

- Database Configuration
- redis configuration

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

Dependency installation success prompt

### 2. Configure the backend interface

- Modify the interface address.env.development

```
# 跨域代理，您可以配置多个, 请注意没有换行符
VITE_PROXY = [["/jeecgboot","http://localhost:8080/jeecg-boot"],["/upload","http://localhost:3300/upload"]]
#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot
```

copy

### 3. Start the front-end project

Click the command `dev`to start the project.  
If you see the following log, the startup is successful.

### 4. Access the system

`http://localhost:3100`Access the front-end project by  
default account and password:`admin/123456`
