---
order: 5
---

# xxl-job scheduled task integration

> This article describes how to integrate the scheduled task xxl-job

### Prerequisite: Build xxljob service

### 1\. Open xxljob

Modify the jeecg-dev.yaml configuration in nacos, enable xxljob and modify the connection address of xxljob-admin  
![](https://lfs.k.topthink.com/lfs/28541635e45a4c233060f148452fea43f41661e62c9be5f351043435ae082d84.dat)

### 2\. Initialize the database

Execute script: db/tables_xxl_job.sql

![](https://lfs.k.topthink.com/lfs/ce9643e7403325bdde2e9caa0e68fcfcb69b10f3d11d42043db062e545557a4f.dat)

### 3\. Start the xxl-job-admin service

Find `jeecg-cloud-module/jeecg-cloud-xxljob`the class under the project  
`com.xxl.job.admin.XxlJobAdminApplication`and right-click to run

- Browse to  
  [http://localhost:9080/xxl-job-admin.](http://localhost:9080/xxl-job-admin)  
  Default login account: admin/123456  
  ![](https://lfs.k.topthink.com/lfs/1285a44df58b3768b3aa51dcf1c288a13b422646d6a3bc8e47a67315cd10df64.dat)

## The second step is to integrate jeecg-boot-starter-job

### 1\. Introduce jeecg-boot-starter-job dependency

```
<!-- 引入定时任务依赖 -->
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-job</artifactId>
</dependency>
```

copy

![](https://lfs.k.topthink.com/lfs/1b2c219a70f7f09d0c5c1842b47bcb4c5a3c0d10470bd8023655764dde8992ca.dat)

### 2\. Write a scheduled task handler

```
@Component
@Slf4j
public class DemoJobHandler {

    @XxlJob(value = "demoJob")
    public ReturnT<String> demoJobHandler(String params) {
        log.info("我是定时任务,我执行了...............................");
        return ReturnT.SUCCESS;
    }
}
```

copy

### 3\. Configure scheduled tasks

Add a new executor (corresponding to the microservice name, needs to be created manually)

![](https://lfs.k.topthink.com/lfs/b8a39c03d72c32b8479f1c5c416afd7b32b40b3724a27c24a898ac03e09aa875.dat)  
View registered nodes  
![](https://lfs.k.topthink.com/lfs/7e44f854c40027a861d80554b3dfd68660f3c99a76fb25c126c4878b42160382.dat)

Add a new scheduled task  
![](https://lfs.k.topthink.com/lfs/9253c706bc8e1dcc96493ffcf29966c953a31c3186dbddab09157d92d3dd7b42.dat)

Test scheduled tasks (prerequisite microservice modules and scheduled task servers have been started)  
![](https://lfs.k.topthink.com/lfs/6c587f117af83b6182b0db2fbbd63d17531c9e7170be41f4f7f509b13be63d1e.dat)  
![](https://lfs.k.topthink.com/lfs/eea19c940fe16a2fb4bf612b99637739ac430396f2be940ee5d8fd92be6454da.dat)

The execution results are as follows  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1605088198288.png)
