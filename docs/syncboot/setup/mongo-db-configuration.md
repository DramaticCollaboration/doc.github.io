---
order: 8
---

# MongoDB 설정

- MongoDB yml configuration

```
spring:
  data:
    mongodb:
      uri: mongodb://账号:密码@127.0.0.1:27017/数据库名称?readPreference=secondaryPreferred&maxIdleTimeMS=60000&waitQueueTimeoutMS=2000&minPoolSize=5&maxPoolSize=100&maxLifeTimeMS=0&connectTimeoutMS=2000&socketTimeoutMS=2000
      print: true
      slowQuery: true
      slowTime: 1000
```

copy

- Configuring MongoDB Connection Pool

```

spring.data.mongodb.uri=mongodb://username:password@192.168.1.1:27017,192.168.1.2:27017,192.168.1.3:27017/jeecg?readPreference=secondaryPreferred&maxIdleTimeMS=60000&waitQueueTimeoutMS=2000&minPoolSize=5&maxPoolSize=100&maxLifeTimeMS=0&connectTimeoutMS=2000&socketTimeoutMS=2000
```

copy

- Reference blog  
  [https://blog.csdn.net/ankeway/article/details/123258692](https://blog.csdn.net/ankeway/article/details/123258692)
