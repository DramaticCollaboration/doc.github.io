---
order: 9
---

# Installing Elasticsearch in Docker

```
docker run --name=elasticsearch6.8.3 -d -p 9200:9200 -p 9300:9300 docker.io/elasticsearch:6.8.3
```

copy

```
docker run --name=elasticsearch-head -d -p 9100:9100 docker.io/mobz/elasticsearch-head:5
```

copy

- UI interface (view data)  
  [http://localhost:9100](http://localhost:9100)

- elasticsearch-head encountered a problem  
  [https://www.jianshu.com/p/fec0d22ddf8d](https://www.jianshu.com/p/fec0d22ddf8d)

- Reference article  
  [https://www.jianshu.com/p/3c90f144775f](https://www.jianshu.com/p/3c90f144775f)

- Docker installs Elasticsearch7.7.0+elasticsearch-head+springboot (latest article)  
  [https://blog.csdn.net/qq_38723394/article/details/106540684](https://blog.csdn.net/qq_38723394/article/details/106540684)
