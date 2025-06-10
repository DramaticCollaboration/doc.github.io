---
order: 6
---

# ShardingSphere

This article aims to explain the usage of sharding by integrating the sharding example of the jeecg-system-cloud-start project

## **Prepare the environment**

1.  Data table: `sys_log0（日志分表1）`, just `sys_log1（日志分表2）`copy the system `sys_log`table
2.  Database: `jeecg-boot2`(just copy jeecg-boot, separate database and table for use)

### **Sample Code**

The sample code `jeecg-cloud-test-shardingsphere`is written in . This sample scenario is used to store logs in separate tables when inserting logs. The table partitioning rule is to calculate the remainder according to the log type. The remainder of 0 is stored in `sys_log0`the table, and the remainder of 1 is stored `sys_log1`in the table.

## **Single database and separate tables**

1.  `jeecg-sharding.yaml`Create a new table configuration file in nacos as shown below

```
spring:
  shardingsphere:
    datasource:
      names: ds0
      ds0:
        driverClassName: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://jeecg-boot-mysql:3306/jeecg-boot?useSSL=false&useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Seoul
        username: root
        password: root
        type: com.alibaba.druid.pool.DruidDataSource
    props:
      sql-show: true
    rules:
      sharding:
        binding-tables: sys_log
        key-generators:
          snowflake:
            type: SNOWFLAKE
            props:
              worker-id: 123
        sharding-algorithms:
          table-classbased:
            props:
              strategy: standard
              algorithmClassName: org.jeecg.modules.test.sharding.algorithm.StandardModTableShardAlgorithm
            type: CLASS_BASED
        tables:
          sys_log:
            actual-data-nodes: ds0.sys_log$->{0..1}
            table-strategy:
              standard:
                sharding-algorithm-name: table-classbased
                sharding-column: log_type
```

copy

2.  Modify the jeecg-system-cloud-start project and introduce the newly added nacos configuration jeecg-sharding.yaml

```
- optional:nacos:jeecg-sharding.yaml
```

copy

![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659852313143.png)

> Reminder: The name of the imported configuration file must be consistent with the file created by nacos, otherwise an error will be reported. Also, please try not to have Chinese characters in the configuration in nacos.

3\. Introduce the sharding test module jeecg-cloud-test-shardingsphere  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659849653037.png)

4\. After successful startup, enter [http://localhost:9999](http://localhost:9999) in the browser to open the interface document as shown below  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659849570414.png)

The following code inserts 10 data in batches. According to the allocation rule, data with non-odd logType will be inserted into the sys_log1 table, and data with non-even logType will be inserted into the sys_log0 table.  
![](https://lfs.k.topthink.com/lfs/8eaa972d15e82587437cfa5fd71db0c8dafc47a572ce4a12beaf188891bebe2c.dat)

The test results are as follows  
![](https://lfs.k.topthink.com/lfs/108eadaf460646e56868682c9f22146f7cbae55b182a62a89a34bd81da5a9721.dat)  
![](https://lfs.k.topthink.com/lfs/1048d79fe7eba85d4cac60c9fd4ba4afcc983e5afe90bef389c949b89feb7f3c.dat)

## **Sub-library and sub-table**

1.  `jeecg-sharding-multi.yaml`Create a new sub-library configuration file in nacos

```
spring:
  shardingsphere:
    datasource:
      names: ds0,ds1
      ds0:
        driverClassName: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://jeecg-boot-mysql:3306/jeecg-boot?useSSL=false&useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Seoul
        type: com.alibaba.druid.pool.DruidDataSource
        username: root
        password: root
      ds1:
        driverClassName: com.mysql.cj.jdbc.Driver
        url: jdbc:mysql://jeecg-boot-mysql:3306/jeecg-boot2?useSSL=false&useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Seoul
        type: com.alibaba.druid.pool.DruidDataSource
        username: root
        password: root
    props:
      sql-show: true
    rules:
      replica-query:
        load-balancers:
          round-robin:
            type: ROUND_ROBIN
            props:
              default: 0
        data-sources:
          prds:
            primary-data-source-name: ds0
            replica-data-source-names: ds1
            load-balancer-name: round_robin
      sharding:
        binding-tables:
          - sys_log
        key-generators:
          snowflake:
            type: SNOWFLAKE
            props:
              worker-id: 123
        sharding-algorithms:
          table-classbased:
            props:
              strategy: standard
              algorithmClassName: org.jeecg.modules.test.sharding.algorithm.StandardModTableShardAlgorithm
            type: CLASS_BASED
          database-inline:
            type: INLINE
            props:
              algorithm-expression: ds$->{operate_type % 2}
        tables:
          sys_log:
            actual-data-nodes: ds$->{0..1}.sys_log$->{0..1}
            database-strategy:
              standard:
                sharding-column: operate_type
                sharding-algorithm-name: database-inline
            table-strategy:
              standard:
                sharding-algorithm-name: table-classbased
                sharding-column: log_type
```

copy

2.  Modify the jeecg-system-cloud-start project and introduce the newly added nacos configuration jeecg-sharding-multi.yaml

```
- optional:nacos:jeecg-sharding-multi.yaml
```

copy

![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659878601565.png)

3\. Test the insertion and query interface  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659854609381.png)  
Sample code:  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659855142185.png)

4\. The test results are as follows. You can see that the operation_type%2==0 has entered `jeecg-boot 库(ds0)`, and the operation_type%2==1 has entered.`jeecg-boot2库(ds1)`  
![](https://lfs.k.topthink.com/lfs/16e4ffdcdf8cfa8ec0c9a5d2c162307ce9f0eb2c003cc791f6fd9bb4e2ad35be.dat)  
![](https://lfs.k.topthink.com/lfs/b00f97d4984aac1481b904cd5d7d4000f14f573111cc5ad5671aa57694d34e74.dat)

Others: ShardingSphere official document  
[https://shardingsphere.apache.org/document/current/cn/overview\`](https://shardingsphere.apache.org/document/current/cn/overview%60)
