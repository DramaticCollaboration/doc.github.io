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

### 5\. Create a microservice module container group

Wait for 1 minute for MySQL to initialize, and then execute the command to create a container group.

```
docker-compose up -d
```

copy

Container generation results:

### 6\. Access the gateway interface address

Wait for 1 minute until all services are started and access the following address

[http://localhost:9999](http://localhost:9999)

Seeing the swagger interface document indicates that the microservice has been successfully started

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
