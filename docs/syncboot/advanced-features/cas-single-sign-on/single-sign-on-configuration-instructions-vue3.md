---
order: 3
---

# Single sign-on configuration instructions (vue3)

- Front-end vue project docking CAS

> After Jeecg Boot front-end 3.0.0, all the required codes of SSO are integrated by default. You only need to modify the environment configuration file to enable SSO

### Open the .env file

```
#单点服务端地址
VITE_GLOBE_APP_CAS_BASE_URL=http://cas.test.com:8443/cas

# 是否开启单点登录
VITE_GLOB_APP_OPEN_SSO = false
```

copy

VITE_GLOB_APP_OPEN_SSO = true means SSO login is enabled

\=============================

- Backend boot modifies yml configuration

```
cas:
  # 配置CAS服务地址，cas为工程目录，部署到ROOT目录下http://cas.test.com:8443即可
  prefixUrl: http://cas.test.com:8443/cas
```

copy

\=============================

- Single point server configuration description  
  1.cas-db: It is a springboot project. You only need to modify the database configuration, such as server.port and context-path. If it is not necessary, you do not need to modify it.  
  2.overlay: It can be packaged into war and published through tomcat. The port and address can be modified in the tomcat configuration (and `8443/cas`keep it consistent). It should be noted that if the port and access address of the cas-db project in 1 are modified, the overlay configuration needs to be modified `src\main\resources\application.properties`as shown in the figure below  
  ![](https://lfs.k.topthink.com/lfs/4c901e38151f97314a3eb9630275a6be8d2cffd7f9cf1553debfb01f5a038238.dat)

_If you test the above address locally, `cas.test.com`you can modify the host file_
