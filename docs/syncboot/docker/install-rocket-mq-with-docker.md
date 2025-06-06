---
order: 10
---

# Install RocketMQ with Docker

> Docker Compose deploys RocketMQ

#### 1\. Write docker-compose

Copy the following content and create `docker-compose.yml`a file

```
version: '3.8'

services:
  namesrv:
    image: registry.cn-hangzhou.aliyuncs.com/jeecgdocker/rocketmq:4.9.6
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    networks:
      - rocketmq
    command: sh mqnamesrv

  broker:
    image: registry.cn-hangzhou.aliyuncs.com/jeecgdocker/rocketmq:4.9.6
    container_name: rmqbroker
    ports:
      - 10909:10909
      - 10911:10911
      - 10912:10912
    environment:
      - NAMESRV_ADDR=namesrv:9876
    depends_on:
      - namesrv
    networks:
      - rocketmq
    command: sh mqbroker

  dashboard:
    image: registry.cn-hangzhou.aliyuncs.com/jeecgdocker/rocketmq-dashboard:latest
    container_name: rmqdashboard
    ports:
      - 8080:8080
    environment:
      - JAVA_OPTS=-Drocketmq.namesrv.addr=namesrv:9876
    depends_on:
      - namesrv
    networks:
      - rocketmq

networks:
  rocketmq:
    driver: bridge
```

copy

#### 2\. Start the RocketMQ cluster

Execute the following command to create a RockerMQ cluster according to docker-compose.yml

```
docker-compose up -d
```

copy

#### 3\. Shut down the RocketMQ cluster

Shut down all services according to the docker-compose.yml file.

```
docker-compose down
```

copy

#### 4\. Access the RocketMQ management interface

![](/images/b9f15bcd01c3d39e080defa483dd8923c44b9a39d6771316c8c92a802cb99728.png)

![](/images/9306d7c03f57678a0b8ce7a02857ed6c8d9d04fe73509ecfe129b5a3c39917b7.png)
