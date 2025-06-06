---
order: 7
---

# Docker Start Microservice 3.7

The purpose of this article is to start a microservice project through docker

> Compatible with versions prior to v3.7.0

## Docker starts the microservice background

### 1\. Download the project

```
git clone https://github.com/jeecgboot/SyncBoot.git
```

copy

### 2\. Configure host

> This step must be configured, otherwise nacos, database, etc. will not be able to connect.

```
127.0.0.1 jeecg-boot-mysql
127.0.0.1 jeecg-boot-redis
127.0.0.1 jeecg-boot-nacos
127.0.0.1 jeecg-boot-system
127.0.0.1 jeecg-boot-gateway
127.0.0.1 jeecg-boot-sentinel
127.0.0.1 jeecg-boot-xxljob
127.0.0.1 jeecg-boot-rabbitmq
```

copy

```
//注意： 如果本地安装了mysql和redis,启动容器前先停掉本地服务，不然会端口冲突。
 net stop redis
 net stop mysql
```

copy

You can use the tool [SwitchHosts](https://download.csdn.net/download/zhangdaiscott/88918530) to quickly configure the host.

![](/images/66177181fe90cec362a7b5b7468ca138673e1b04a8f2ed4563e8104b277448ce.png)

### 3\. Compile the background project

Enter the jeecg-boot root directory

```
cd SyncBoot/jeecg-boot
```

copy

Execute the packaging command

```
mvn clean install -Pdev,SpringCloud
```

copy

See the execution succeeded  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659773260743.png)

### 4\. Create mysql and redis containers

Enter the jeecg-server-cloud root directory

```
cd  jeecg-server-cloud
```

copy

Execute the following command to let docker-compose-base.yml create mysql and redis containers

```
docker-compose -f docker-compose-base.yml up -d
```

copy

Container generation results  
![](/images/dee8dbf154853683e72a78c7889602b273b90cc83988b4a071f0580220cad878.png)  
![](/images/a95870734dfea5ed6b877982696927aa8e1e0bc98194a7f75613242e1eea0ae4.png)

### 5\. Create a microservice module container group

Wait for 1 minute for MySQL to initialize, and then execute the command to create a container group.

```
docker-compose up -d
```

copy

Container generation results:  
![](/images/295fe2d4c62f1be5d49b46d6cfeecf28ebd16b781f619f72c52104049cb8b047.png)

### 6\. Access the gateway interface address

Wait for 1 minute until all services are started and access the following address

[http://localhost:9999](http://localhost:9999)

Seeing the swagger interface document indicates that the microservice has been successfully started  
![](/images/19cbf44e760be20aeae233a20e5ecd7fbec308d749cf20a7d68c055c766d151d.png)

Other service addresses:

| Serve                                         | address                                                    |
| --------------------------------------------- | ---------------------------------------------------------- |
| nacos address (account password: nacos/nacos) | [http://localhost:8848/nacos](http://localhost:8848/nacos) |

## Description of other microservice components

> By default, xxljob and mq images are not generated. Please open the corresponding comments if necessary.

Other service test addresses

| software service                                                        | Test Address                                                               | account password  | Is it necessary |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------- | --------------- |
| nacos (service registration discovery and unified configuration center) | [http://localhost:8848/nacos](http://localhost:8848/nacos)                 | nacos/nacos       | yes             |
| rabitmq (message middleware)                                            | [http://localhost:15672](http://localhost:15672)                           | guest/guest       | no              |
| xxl-job-admin (distributed scheduled tasks)                             | [http://localhost:9080/xxl-job-admin](http://localhost:9080/xxl-job-admin) | admin/123456      | no              |
| Sentinel (Sentinel monitoring)                                          | [http://localhost:9000](http://localhost:9000)                             | sentinel/sentinel | no              |
