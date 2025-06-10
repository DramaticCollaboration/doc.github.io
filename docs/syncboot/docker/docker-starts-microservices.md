---
order: 6
---

# Docker starts microservices (new)

The purpose of this article is to start the microservice project backend through docker

> Only compatible with `2024-06-30`code downloaded later

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

### 5\. Create a microservice container group

Enter the jeecg-server-cloud root directory

```
cd  jeecg-server-cloud
```

copy

Excuting an order

```
docker-compose up -d
```

copy

Container generation results:

### 6\. Access the gateway address

Wait for 1 and a half minutes until all services are started and access the gateway address

[http://localhost:9999](http://localhost:9999)

Seeing the swagger interface document indicates that the microservice has been successfully started
