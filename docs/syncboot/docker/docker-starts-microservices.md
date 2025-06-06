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
![](/images/295fe2d4c62f1be5d49b46d6cfeecf28ebd16b781f619f72c52104049cb8b047.png)  
![](/images/a95870734dfea5ed6b877982696927aa8e1e0bc98194a7f75613242e1eea0ae4.png)

### 6\. Access the gateway address

Wait for 1 and a half minutes until all services are started and access the gateway address

[http://localhost:9999](http://localhost:9999)

Seeing the swagger interface document indicates that the microservice has been successfully started  
![](/images/e919552879062467da3adc3f3efc4bf82efd09010ff97d88dae67cecbd53c232.png)
