---
order: 6
---

# Lightweight distributed logging solution

#### Loki VS ELK

Loki and ELK (Elasticsearch, Logstash, Kibana) are both commonly used log processing systems, and each has some advantages. Here are some advantages of Loki over ELK:

- Higher storage efficiency: Loki uses compression and splitting of log data to reduce storage space usage. In contrast, ELK needs to maintain a large index, which requires more storage space.
- Faster query speed: Loki uses a label index mechanism similar to Prometheus to store and query log data, which enables it to quickly perform distributed queries and aggregations without loading all data from storage into memory. ELK needs to load data from storage into memory for querying, and the query speed is relatively slow.
- Easier to deploy and manage: Loki is a lightweight log aggregation system. In contrast, ELK requires the deployment and management of multiple components, which requires more resources and manpower costs.

#### Install Loki and grafana packages through docker-compose

> Loki performs log aggregation processing similar to es in elk
>
> Grafana is a log display, similar to kibana in elk, which can filter and display logs through various tags and expressions

The content of docker-compose.yml is as follows

```
version: "3"

networks:
  loki:

services:
  loki:
    image: grafana/loki
    restart: always
    environment:
    - TZ=Asia/Seoul
    - LANG=zh_CN.UTF-8
    ports:
    - 3100:3100
    networks:
    - loki

  grafana:
    image: grafana/grafana:master
    restart: always
    environment:
    - TZ=Asia/Seoul
    - LANG=zh_CN.UTF-8
    ports:
    - 3000:3000
    networks:
    - loki
```

copy

#### Install the Loki Docker plugin on each server

Command line installation

```
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
```

copy

Update plugins

```
docker plugin disable loki --force
docker plugin upgrade loki grafana/loki-docker-driver:latest --grant-all-permissions
docker plugin enable loki
systemctl restart docker
```

copy

There are two ways to use the loki docker plugin.

- Configure daemon.json and collect logs of all containers created thereafter (note that only containers created after daemon.json is configured and the Docker service is restarted will output logs to Loki). If it is an existing container, the container needs to be rebuilt.
- When creating a new container, specify the logging type as loki, so that only containers with logging specified will output to loki

Edit daemon.json. The default path in Linux is /etc/docker/daemon.json (sudo required), and the default path in Windows is %userprofile%.docker\\daemon.json. After editing and adding, you need to restart the docker daemon.

```
{
  "log-driver": "loki",
  "log-opts": {
    "loki-url": "http://YOUR_IP:3100/loki/api/v1/push",
    "max-size": "50m",
    "max-file": "10"
  },
}
```

copy

#### Grafana display and filter logs

When you first install grafana, you map it to port 3000 on the host machine, so the address is \[http://YOUR_IP:3000\]

The default username and password for grafana are admin and admin

The first time you enter, you need to change the admin password

In the left menu, go to Configuration -> Data Source -> Add Data Source -> Loki

Configure the loki running address at url, save and test, and click explore on the same page to view the log

![](https://lfs.k.topthink.com/lfs/2d770a633089c7088772881ad2c9aacb343e3df7d8fc23b8eac51b5616fed257.dat)

![](https://lfs.k.topthink.com/lfs/6cee2b7eb46cb806b117e04fb8a0e1f5fdde7ceb3e4db99e108efe2706e6e52d.dat)

#### Query log

Use the search statement `{compose_service="jeecg-boot-system"} |= "spring"`and click Run Query to query the logs containing "spring" under the jeecg-boot-system service.

> LogQL expressions are rich in functionality, see: [https://grafana.com/docs/loki/latest/logql/log_queries](https://grafana.com/docs/loki/latest/query/log_queries)

![](https://lfs.k.topthink.com/lfs/9eb6219381b5cabd91f36748d56f41f1571ab8ed9bbe91c223b421c087e0ef9c.dat)
