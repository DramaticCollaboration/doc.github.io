---
order: 5
---

# skywarking link tracking

**background:**

Microservice architecture divides services by business and uses REST calls. An interface exposed to the outside may require the collaboration of many services to complete the interface function. If any service on the link has a problem or the network times out, the interface call will fail. In order to quickly locate and solve the problem when a failure occurs, SkyWalking is needed.

---

**Environment:**  
Windows  
JDK8

---

**Development tools:**  
idea

---

**Software installation:**  
1\. [Download elasticsearch7](https://www.elastic.co/cn/downloads/elasticsearch)  
![](https://lfs.k.topthink.com/lfs/67d0688ca490f8402b13174668772015fc7fc2a6e68390c8e048fecf9f969358.dat)  
2\. Unzip and run bin/elasticsearch.bat  
3\. Access `localhost:9200`The following result indicates OK

```
~~~
{
  "name" : "xxxx",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "xxxx",
  "version" : {
    "number" : "7.7.1",
    "build_flavor" : "default",
    "build_type" : "zip",
    "build_hash" : "xxxxx",
    "build_date" : "2020-05-28T16:30:01.040088Z",
    "build_snapshot" : false,
    "lucene_version" : "8.5.1",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
~~~
```

copy

4\. [Download skywarking](http://skywalking.apache.org/downloads/)  
![](https://lfs.k.topthink.com/lfs/47f50ebb33bf09a4cd242b17ee5651e169c3d6c4455cebc4698fc4e61c61105c.dat)

---

5\. Unzip and run bin/startup.bat. This actually starts two projects, a collector and a web page.

---

6\. Access `localhost:8080`, the port number can be modified in webapp/webapp.yml. The page is blank for the first access.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1617548993746.png)

---

7\. Create a directory jeecg-skywarking in the project root directory, and copy the agent folder under skywarking directly to this directory  
![](https://lfs.k.topthink.com/lfs/bb05d14210e9e57ceb7e9a517a83f32a2dfa25fffad40a70f0238fdc2b50e2c4.dat)

---

8\. Configure VM parameters  
![](https://lfs.k.topthink.com/lfs/1841d44c36fdd9d0f706906e2c92e8316a85c6693cecc6ff6e23e33fc87e8e12.dat)  
![](https://lfs.k.topthink.com/lfs/8994077947594185ad1d18238d16fcc1999929784c800a6f9d416ac4b2aa428c.dat)

---

Eclipse configuration vm parameter diagram:  
![](https://lfs.k.topthink.com/lfs/6dd81494634552ffe6dc760bdfe3d24ef8a3582f74a70ab6361755d7377e4756.dat)

---

Attach parameter code and description

```
-javaagent:D:\JAVA\cloud\jeecg-yanshi\jeecg-skywarking\agent\skywalking-agent.jar
-Dskywalking.agent.service_name=jeecg-ys-gateway
-Dskywalking.collector.backend_service=localhost:11800
```

copy

| parameter    | describe                                                                       |
| ------------ | ------------------------------------------------------------------------------ |
| java agent   | Configure the address of skywalking-agent.jar, which needs to be modified      |
| service_name | Configure the service name that needs to be monitored and needs to be modified |
| java agent   | The address of the skywalking collector service, copy it                       |

---

9\. Start the project, access the interface (access several times), and then go to localhost:8080 to view the panel data  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1617549036445.png)

---

10\. When we access a service and it calls another service, clicking on the topology diagram will show the following effect, which is the effect of link tracking  
![](https://lfs.k.topthink.com/lfs/7a2fc5758fc0a43e65dae59d0ae6fe7f0f32277896f1077e92299e87e24b7261.dat)

---

11\. You can also view the specific call chain of the entire request in the tracking interface  
![](https://lfs.k.topthink.com/lfs/f3550a291a93abf5e8ec5816c104ee05b34f1bb0d9f17fd2cc71fa9ac89cc11d.dat)

---

_Other functions need to be explored by yourself_
