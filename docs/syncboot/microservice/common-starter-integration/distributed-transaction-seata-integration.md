---
order: 7
---

# Distributed transaction Seata integration

## **Prepare the environment**

1.  Create four databases as follows

```
jeecg_order（订单数据库）
jeecg_account（账户数据库）
jeecg_product（商品数据库）
seata（seata数据库）
```

copy

The above database script has been stored in the jeecg-cloud-test-seata example. The file location is shown in the figure below.  
![](https://lfs.k.topthink.com/lfs/47dc02c3fac2edc3629c96cdbafab9a832dde7c37f922b59dd22ec6bff1d743e.dat)  
![](https://lfs.k.topthink.com/lfs/42da72534145eed89667a172bc283bdda60d17f4667ce3409f1c42ae713b3de7.dat)  
![](https://lfs.k.topthink.com/lfs/3e1d8b6e34ff5949d41f81449c60396cd714bb20a00fdc0867f5601875e09830.dat)  
![](https://lfs.k.topthink.com/lfs/f2ef165c8690d16a8bf81eb9795613ec449d2890896d7ada70a78516fe2f79ee.dat)

2.  Sample code:  
    jeecg-cloud-test-seata-order (order service)  
    jeecg-cloud-test-seata-product (inventory service)  
    jeecg-cloud-test-seata-account (account service)  
    This sample scenario is used to check whether the inventory is sufficient and the balance is sufficient when placing an order. If one of the conditions is not met, the transaction is rolled back.

3.  Seata server: The version of Seata used in this practice is v1.4.2. Download it from [http://seata.io/zh-cn/blog/download.html.](http://seata.io/zh-cn/blog/download.html)  
    Install the server,  
    download it and unzip it. The directory structure is as follows:  
    ![](https://lfs.k.topthink.com/lfs/c96e87c7cba2a64f731a3a40d3fca403a53ad426123dc3361299fa1b03e10f26.dat)

Enter the bin directory and start seata. The default port of seata is 8091.  
![](https://lfs.k.topthink.com/lfs/cc7e1cce2499681678e9065627460f0bfcd1a0d805a26793a74a5965fb00bb50.dat)

Run under Windows `seata-server.bat`  
Run under Linux`seata-server.sh`

## **Testing distributed transactions**

1.  Modify the file.conf file (if you need to use nacos, modify type=nacos), as shown below  
    ![](https://lfs.k.topthink.com/lfs/4b6c08ab02021d9404770e39198d7e1e214dab7e885623bfd05e77f827654eb3.dat)

2.  Modify registry.conf (if you need to use nacos, modify type=nacos), as shown below  
    ![](https://lfs.k.topthink.com/lfs/0c3e7ec98282b80db79ecefa8f785f463ca31eedb33b158258e9b9f7c438adbe.dat)  
    ![](https://lfs.k.topthink.com/lfs/4260840ab08b826679ee162373f204b68f27a7601dcf55d3de65bbf5d81c0801.dat)

3.  Start seata, as shown below  
    ![](https://lfs.k.topthink.com/lfs/2b242ac069a7b1e05fc55d383a7886a0bb82968cd57b62a9010e4afe7f941d4b.dat)  
    Enter the following information to indicate successful startup  
    ![](https://lfs.k.topthink.com/lfs/6ed0ea5c8f6f3c535f3ddbc239277e1d7abb690cf45b0096bbfed290165d4cfd.dat)

4\. Add dependencies to the microservice module. Please refer to the sample code for details.

```
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-cloud</artifactId>
    <version>3.1.0</version>
</dependency>
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-seata</artifactId>
    <version>3.1.0</version>
</dependency>
```

copy

5\. Add configuration to the microservice module, refer to the sample code for details

```
seata:
  enable-auto-data-source-proxy: false
  service:
    grouplist:
      default: 127.0.0.1:8091
    vgroup-mapping:
      springboot-seata-group: default
  # seata 事务组编号 用于TC集群名
  tx-service-group: springboot-seata-group
```

copy

6\. Start the test  
and start  
jeecg-cloud-test-seata-order (order service),  
jeecg-cloud-test-seata-product (inventory service), and  
jeecg-cloud-test-seata-account (account service)  
in sequence. The startup is completed as shown below  
![](https://lfs.k.topthink.com/lfs/1fae147807c9c6f6cd97053c5306c3e115c03da21b7bc82ebda19b73d45c36fd.dat)  
[Enter http://localhost:5001](http://localhost:5001) in the browser to test. As shown in the figure below,  
the test is normal. See the screenshot for parameters  
![](https://lfs.k.topthink.com/lfs/8e52624c0117257a1347a4bbbf361a5359aa00cf4f662841c7757fe10e3d10a0.dat)  
Test insufficient balance, test insufficient inventory, and then observe whether the inserted data in the database order table is rolled back

Note: This example does not go through the gateway, so you need to exclude authentication permissions. Add the following code to ShiroConfig.java

```
//测试模块排除
filterChainDefinitionMap.put("/test/seata/**", "anon");
```

copy

You can use nacos as the configuration center of seata  
to create a new seataServer.properties configuration file with the following content

```
# 数据存储方式，db代表数据库
store.mode=db
store.db.datasource=druid
store.db.dbType=mysql
store.db.driverClassName=com.mysql.cj.jdbc.Driver
store.db.url=jdbc:mysql://localhost:3300/seata?useUnicode=true&rewriteBatchedStatements=true&serverTimezone=Asia/Seoul
store.db.user=root
store.db.password=root
store.db.minConn=5
store.db.maxConn=30
store.db.globalTable=global_table
store.db.branchTable=branch_table
store.db.queryLimit=100
store.db.lockTable=lock_table
store.db.maxWait=5000
# 事务、日志等配置
server.recovery.committingRetryPeriod=1000
server.recovery.asynCommittingRetryPeriod=1000
server.recovery.rollbackingRetryPeriod=1000
server.recovery.timeoutRetryPeriod=1000
server.maxCommitRetryTimeout=-1
server.maxRollbackRetryTimeout=-1
server.rollbackRetryTimeoutUnlockEnable=false
server.undo.logSaveDays=7
server.undo.logDeletePeriod=86400000

# 客户端与服务端传输方式
transport.serialization=seata
transport.compressor=none
# 关闭metrics功能，提高性能
metrics.enabled=false
metrics.registryType=compact
metrics.exporterList=prometheus
metrics.exporterPrometheusPort=9898
```

copy
