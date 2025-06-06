---
order: 8
---

# Docker builds a development environment

### Docker builds a development environment

- [Docker-desktop download](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Install MySQL 5.7 with Docker](https://my.oschina.net/jeecg/blog/4283700)
- [Install Redis on Docker](https://www.runoob.com/docker/docker-install-redis.html)
- [Docker switches to Chinese mirror source](https://blog.csdn.net/weixin_39305029/article/details/105014150)
- [Docker 安装Elasticsearch](http://doc.jeecg.com/2242817)

Enter the database

```
mysql -u root -p
```

copy

Create a database

```
create database `jeecg-boot` default character set utf8mb4 collate utf8mb4_general_ci;
```

copy

##### Docker Engine Configuration

```
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ],
  "insecure-registries": [],
  "debug": false,
  "experimental": false,
  "features": {
    "buildkit": true
  }
}
```

copy
