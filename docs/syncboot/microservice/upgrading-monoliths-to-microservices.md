---
order: 3
---

# Upgrading Monoliths to Microservices

> Upgraded to Spring Cloud Alibaba 2021.0.1.0, supports the introduction of nacos configuration using spring.config.import

_Example: Quickly switch the modules system and demo to SpringCloud microservice startup_

## 1\. Configure host

> Reminder: It must be configured, otherwise an error will be reported during startup.

```
127.0.0.1 jeecg-boot-redis
127.0.0.1 jeecg-boot-mysql
127.0.0.1 jeecg-boot-nacos
127.0.0.1 jeecg-boot-gateway
127.0.0.1 jeecg-boot-system
127.0.0.1 jeecg-boot-sentinel
127.0.0.1 jeecg-boot-xxljob
127.0.0.1 jeecg-boot-rabbitmq
```

copy

You can use the tool [SwitchHosts](https://download.csdn.net/download/zhangdaiscott/88918530) to quickly configure the host.

![](https://lfs.k.topthink.com/lfs/66177181fe90cec362a7b5b7468ca138673e1b04a8f2ed4563e8104b277448ce.dat)

## 2\. Check Maven Profile`dev和SpringCloud`

![](https://lfs.k.topthink.com/lfs/3c476dda8eaae9dee2aef2be2a10f33f152b614fececce9d207c2282318218c4.dat)  
Switching success effect

> Note: `dev`and `SpringCloud`need to be checked at the same time, otherwise an error will occur.

![](https://lfs.k.topthink.com/lfs/6b2b84aaab78ad28fa9032083ef5216e105903176533cd3069c76334f3e11cfd.dat)

## 3\. Create the database required for microservices

[Manually execute the initialization SQL](https://github.com/jeecgboot/SyncBoot/tree/master/jeecg-boot/db) provided by jeecgboot to create three libraries `jeecg-boot`:`nacos``xxl_job`

![](https://lfs.k.topthink.com/lfs/c7900b1c8f043026024508947013a65a78c58f1faa43b545e7f72e19672da5dd.dat)

> **Important tips:**  
> 1\. The nacos library script adds the required configuration of jeecg by default.  
> 2\. If you use your own nacos, please manually add configuration files such as [jeecg.yaml, jeecg-dev.yaml, and jeecg-gateway-dev.yaml](https://github.com/jeecgboot/SyncBoot/tree/master/jeecg-boot/jeecg-server-cloud/jeecg-cloud-nacos/docs/config)

## 4\. Start a Microservice Project

### 4.1 Startup`nacos`

Find the following startup class and right-click to execute

```
项目：jeecg-server-cloud\jeecg-cloud-nacos
启动类：com.alibaba.nacos.JeecgNacosApplication
```

copy

Visit: [http://localhost:8848/nacos](http://localhost:8848/nacos)  
Account password: nacos/nacos

![](https://lfs.k.topthink.com/lfs/22a957ce635f826f86fcc46b079294b4995d7e30cb0201c69ad2b836014b3351.dat)

If you need to customize the database name, please refer to the screenshot  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1681696503175.png)

### 4.2 Start `jeecg-demo`the service

Find the following startup class, open the comment, and right-click to start

```
项目：jeecg-server-cloud/jeecg-demo-cloud-start
启动类：org.jeecg.JeecgDemoCloudApplication
```

copy

### 4.3 Start `jeecg-system`the service

1 Find the startup class below and right-click to start

```
项目：jeecg-server-cloud/jeecg-system-cloud-start
启动类：org.jeecg.JeecgSystemCloudApplication
```

copy

2 The single startup class can be deleted or commented out

```
jeecg-system-start/src/main/java/org/jeecg/JeecgSystemApplication.java
```

copy

### 4.4 Start the Gateway`gateway`

- Find the startup class below and right-click to start

```
项目：jeecg-server-cloud\jeecg-cloud-gateway
启动类：org.jeecg.JeecgGatewayApplication
```

copy

- The effect of starting the required service components  
  ![](https://lfs.k.topthink.com/lfs/e7140167b9a31d3bc95e94875468c638b6e4e1b928cf7379a1190a3151f34b0c.dat)

- Visit gateway to view the interface documentation  
  [http://localhost:9999](http://localhost:9999)  
  ![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1681696763461.png)

## 5\. Vue3 front-end docking (jeecgboot-vue3)

Modify .env.development and configure the interface address to the gateway address.

```
VITE_PROXY = [["/jeecgboot","http://localhost:9999"],["/upload","http://localhost:3300/upload"]]
VITE_GLOB_DOMAIN_URL=http://localhost:9999
```

copy

Start access: [http://localhost:3100](http://localhost:3100)

## 6\. Start more service modules

> This part is not a necessary component and is an advanced application. In order to reduce the difficulty for beginners, it is placed in the jeecg-visual directory and can be used optionally.

### 6.1 Xxljob Server

#### 1\. First execute the script [db/tables_xxl_job.sql](https://github.com/jeecgboot/SyncBoot/blob/master/jeecg-boot/db/tables_xxl_job.sql) to create the xxl_job library

#### 2\. Modify the nacos configuration file and open the xxljob configuration

By default, xxljob is disabled. Please change the parameter in to true `nacos`.`jeecg-dev.yaml`  
![](https://lfs.k.topthink.com/lfs/bacdbfd6e8869b5c0d38b363336137d1ccbd1c6bdf8e5cfeb08d82574f1447d9.dat)

#### 3\. Start the xxljob service

Please right click and execute jeecg-cloud-xxljob/com.xxl.job.admin.XxlJobAdminApplication

```
 项目：jeecg-server-cloud\jeecg-visual\jeecg-cloud-xxljob
 启动类：src\main\java\com\xxl\job\admin\XxlJobAdminApplication.java

- 访问：http://localhost:9080/xxl-job-admin
- 账号：admin/123456
```

copy

![](https://lfs.k.topthink.com/lfs/8bceec662108c0ba1a541f213fd0c96b7b40838e4064ccebc42c72dc913f0c2d.dat)

I saw the online machine address and there was information indicating that the link was successful.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1681698535147.png)

#### 4\. Timed Test

Right click to execute a timer  
![](https://lfs.k.topthink.com/lfs/83c350a146a7edf6951b3992d47f98377b4de24711d6fb4c92f136d1b0c9071a.dat)  
View logs  
![](https://lfs.k.topthink.com/lfs/45f099ea646ce6774fa5875c327dd07d3928b7e0a049412df04ff2f05f7a165b.dat)  
View the service logs  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1681699112497.png)  
Explanation: xxljob integration is successful

#### 5\. [New module manually integrates xxl-job scheduled tasks](../starter/xxljob.html)

### 6.2 Sentinel Server

```
项目：jeecg-server-cloud\jeecg-visual\jeecg-cloud-sentinel
启动类：src\main\java\com\alibaba\csp\sentinel\dashboard\JeecgSentinelApplication.java

-访问：http://localhost:9000
-账号密码：sentinel/sentinel
```

copy

![](https://lfs.k.topthink.com/lfs/4ed1170d2d5d049ef60378f075e9a3f44e40e1ca4e3ea8df2618d07e941869e9.dat)

### 6.3 SpringBoot Admin Service Monitoring

```
项目：jeecg-server-cloud\jeecg-visual\jeecg-cloud-monitor
启动类：src\main\java\org\jeecg\monitor\JeecgMonitorApplication.java

- 访问：http://localhost:9111/login
- 账号：admin/admin
```

copy

![](https://lfs.k.topthink.com/lfs/7b05bcec0326f29748822556c3ae5bc943f0b22bc5b8e10516910f2565d81356.dat)

**Special configuration**

- [ ] Sentinel has been deeply modified to support persistent configuration in nacos
- [ ] There are many examples of microservices. Please open `jeecg-system-cloud-start`the project `pom.xml`comments if you need them.
- [ ] In addition, testing MQ requires [installing the rabitmq service](../starter/mq.html) , and testing seata also requires [installing the server](../starter/seata.html)
- [ ] More microservice documents: [Sentinel current limiting, circuit breaking and downgrading](../component/sentinel.html) | [sharding documents](../starter/shardingsphere.html) | [distributed locks](../starter/redisson.html) | [message bus](../starter/messagebus.html)

**Other service test addresses**

| software service                                                        | Test Address                                                               | account password  | Is it necessary |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------- | --------------- |
| nacos (service registration discovery and unified configuration center) | [http://localhost:8848/nacos](http://localhost:8848/nacos)                 | nacos/nacos       | yes             |
| rabitmq (message middleware)                                            | [http://localhost:15672](http://localhost:15672)                           | guest/guest       | no              |
| xxl-job-admin (distributed scheduled tasks)                             | [http://localhost:9080/xxl-job-admin](http://localhost:9080/xxl-job-admin) | admin/123456      | no              |
| Sentinel (Sentinel monitoring)                                          | [http://localhost:9000](http://localhost:9000)                             | sentinel/sentinel | no              |

### 6.4. RabbitMQ service startup

1\. [Install rabbitmq](https://my.oschina.net/jeecg/blog/4729143)  
2\. Modify the rabbitmq link configuration of jeecg-dev.yaml in nacos  
![](https://lfs.k.topthink.com/lfs/cdb98489ed4c9136308ed0e6fe7090b62cd4e4685acf88a267c512eb8c75a40a.dat)  
3\. Start the system, the rabbitmq queue and switch will automatically generate  
detailed documents, see [rabitmq message queue integration 2.4+](https://help.jeecg.com/java/springcloud/starter/mq.html)
