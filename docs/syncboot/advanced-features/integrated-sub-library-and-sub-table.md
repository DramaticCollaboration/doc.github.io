---
order: 10
---

# Integrated sub-library and sub-table

> version: jeecgboot 3.4This  
> article aims to: Through the example of jeecg-system-start project integration of sub-library and sub-table, explain how to integrate sub-library and sub-table in the monolithic architecture modeShardingSphere  
> official document: [https://shardingsphere.apache.org/document/current/cn/overview](https://shardingsphere.apache.org/document/current/cn/overview)

## **Prepare the environment**

1.  Data table: `sys_log0（日志分表1）`, just `sys_log1（日志分表2）`copy the system `sys_log`table
2.  Database: `jeecg-boot2`(just copy jeecg-boot, separate database and table for use)

### **Introduce dependencies (choose one of the following two dependencies)**

The following dependencies are introduced without test cases

```
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-shardingsphere</artifactId>
</dependency>
```

copy

The test cases include the following dependencies. The default integrated test cases of jeecg-cloud-test-shardingsphere are convenient for testing. This example scenario is used to store logs in separate tables when inserting logs. The table partitioning rule is to calculate the remainder according to the log type. The remainder of 0 is stored in `sys_log0`the table, and the remainder of 1 is stored in `sys_log1`the table.

```
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-cloud-test-shardingsphere</artifactId>
    <version>${jeecgboot.version}</version>
</dependency>
```

copy

### **Writing Sharding Rules**

Corresponding to algorithmClassName in the configuration file
: org.jeecg.sharding.algorithm.StandardModTableShardAlgorithm

```
package org.jeecg.sharding.algorithm;


import org.apache.shardingsphere.sharding.api.sharding.standard.PreciseShardingValue;
import org.apache.shardingsphere.sharding.api.sharding.standard.RangeShardingValue;
import org.apache.shardingsphere.sharding.api.sharding.standard.StandardShardingAlgorithm;

import java.util.Collection;
import java.util.Properties;

/**
 * 用于处理使用单一键
 * 根据分片字段的值和sharding-count进行取模运算
 * SQL 语句中有>，>=, <=，<，=，IN 和 BETWEEN AND 操作符，都可以应用此分片策略。
 *
 * @author zyf
 */
public class StandardModTableShardAlgorithm implements StandardShardingAlgorithm<Integer> {
    private Properties props = new Properties();


    /**
     * 用于处理=和IN的分片
     *
     * @param collection           目标分片的集合(表名)
     * @param preciseShardingValue 逻辑表相关信息
     * @return
     */
    @Override
    public String doSharding(Collection<String> collection, PreciseShardingValue<Integer> preciseShardingValue) {

        for (String name : collection) {
            Integer value = preciseShardingValue.getValue();
            //根据值进行取模，得到一个目标值
            if (name.indexOf(value % 2+"") > -1) {
                return name;
            }
        }
        throw new UnsupportedOperationException();
    }

    /**
     * 用于处理BETWEEN AND分片，如果不配置RangeShardingAlgorithm，SQL中的BETWEEN AND将按照全库路由处理
     *
     * @param collection
     * @param rangeShardingValue
     * @return
     */
    @Override
    public Collection<String> doSharding(Collection<String> collection, RangeShardingValue<Integer> rangeShardingValue) {

        return collection;
    }

    /**
     * 初始化对象的时候调用的方法
     */
    @Override
    public void init() {
    }

    /**
     * 对应分片算法（sharding-algorithms）的类型
     *
     * @return
     */
    @Override
    public String getType() {
        return "STANDARD_MOD";
    }

    @Override
    public Properties getProps() {
        return this.props;
    }

    /**
     * 获取分片相关属性
     *
     * @param properties
     */
    @Override
    public void setProps(Properties properties) {
        this.props = properties;
    }
}
```

copy

### **Modify the configuration file**

## **Single database table configuration**

1.  In `application-dev.yaml`the configuration file, add the following configuration

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

2\. After successful startup, enter [http://localhost:8080 in the browser to open the interface document as shown below](http://localhost:8080%E6%89%93%E5%BC%80%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3%E5%A6%82%E4%B8%8B%E5%9B%BE)  
![](https://lfs.k.topthink.com/lfs/aefc25871c8e19403791fde071cbf418590eb5151b424f1e1dbc5b4629d35213.dat)

The following code inserts 10 data in batches. According to the allocation rule, data with non-odd logType will be inserted into the sys_log1 table, and data with non-even logType will be inserted into the sys_log0 table.  
![](https://lfs.k.topthink.com/lfs/8eaa972d15e82587437cfa5fd71db0c8dafc47a572ce4a12beaf188891bebe2c.dat)

The test results are as follows  
![](https://lfs.k.topthink.com/lfs/108eadaf460646e56868682c9f22146f7cbae55b182a62a89a34bd81da5a9721.dat)  
![](https://lfs.k.topthink.com/lfs/1048d79fe7eba85d4cac60c9fd4ba4afcc983e5afe90bef389c949b89feb7f3c.dat)

## **Sub-library and sub-table configuration**

1.  In `application-dev.yaml`the configuration file, add the following configuration

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
              algorithmClassName: org.jeecg.sharding.algorithm.StandardModTableShardAlgorithm
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

## Start jeecg-system-start, and the console will have the following output, indicating that the sub-library and sub-table integration is successful

![](https://lfs.k.topthink.com/lfs/3a44cf144a07e0340cf3f8047eeca4d8631e29290fbca9ef6b8b5e83466ce397.dat)

2\. Test the insertion and query interface  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659854609381.png)  
Sample code:  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659855142185.png)

3\. The test results are as follows. You can see that the operation_type%2==0 has entered `jeecg-boot 库(ds0)`, and the operation_type%2==1 has entered.`jeecg-boot2库(ds1)`  
![](https://lfs.k.topthink.com/lfs/16e4ffdcdf8cfa8ec0c9a5d2c162307ce9f0eb2c003cc791f6fd9bb4e2ad35be.dat)  
![](https://lfs.k.topthink.com/lfs/b00f97d4984aac1481b904cd5d7d4000f14f573111cc5ad5671aa57694d34e74.dat)
