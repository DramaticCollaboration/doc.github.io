---
order: 3
---

# flyway 사용하기

> **Flyway configuration:** This chapter mainly describes the configuration of flyway

### 1\. Configuration Instructions

Add springboot configuration and add the following to the application.yml/application.properties configuration file:

```
spring:
  # flyway配置
  flyway:
    # 是否启用flyway
    enabled: true
    # 编码格式，默认UTF-8
    encoding: UTF-8
    # 迁移sql脚本文件存放路径，官方默认db/migration
    locations: classpath:flyway/sql/mysql
    # 迁移sql脚本文件名称的前缀，默认V
    sql-migration-prefix: V
    # 迁移sql脚本文件名称的分隔符，默认2个下划线__
    sql-migration-separator: __
    # 避免带${}sql执行失败
    placeholder-prefix: '#('
    placeholder-suffix: )
    # 迁移sql脚本文件名称的后缀
    sql-migration-suffixes: .sql
   # 迁移时是否进行校验，默认true
    validate-on-migrate: true
    # 当迁移发现数据库非空且存在没有元数据的表时，自动执行基准迁移，新建schema_version表
    baseline-on-migrate: true
    # 是否关闭要清除已有库下的表功能,生产环境必须为true,否则会删库
    clean-disabled: true
```

copy

### 2\. Insert the SQL script according to the script naming specification and start the project

Create a sql file for the changed SQL script according to the script naming specification (described below), place it in the flyway/sql/mysql directory (configurable), and start the project; after the project is started, the system will automatically create the flyway_schema_history table, execute the SQL change script, and insert the script execution record into the table.  
![](/images/88c3682e614c9804c16593f31c2113fbfb8b9d076a556ac437934c13d47bda99.png)

#### Script naming

1\. The SQL name that needs to be executed only once starts with a capital "V", followed by a combination of numbers from "0 to 9". The numbers can be separated by "." or underscore "\_", and then separated by **two underscores** , followed by the file name, and finally ends with .sql

```
V[年月日]_[序号]__[模块名缩写]_[操作类型]_[业务描述].sql
例如：
V20240104_1__easyoa_add_field_attendance.sql
```

copy

2\. Repeatable SQL starts with a capital "R", followed by **two underscores** , and then the file name.

```
R__[模块名缩写]_[业务描述].sql
例如：
R__easyoa_update_user.sql
```

copy

> 1\. The version number must be unique, otherwise Flyway will report an error; if the V\_\_ script.sql has been executed, the content cannot be modified, and Flyway will report an error when it is executed again.  
> 2\. The script.sql starting with R allows the script content to be modified, and if there are changes, it can be executed multiple times.  
> 3\. The execution priority of SQL starting with V is higher than that of SQL starting with R.

### 3\. Support Scope

The flyway currently introduced in the project is version 7.15.0, which supports MYSQL5.7 and above

![](/images/3680eac5880b8c530104448c6363d6edc76b17aa6e1e25829cfe16c449946e2e.png)

If you need to support MySQL 5.6, you can downgrade to version 5.2.1

```
 <dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
    <version>5.2.1</version>
  </dependency>
```

copy

- Error: Caused by: java.sql.SQLException: sql injection violation, dbType mysql, druid-version 1.2.19, comment not allow:  
  Solution:  
  ![](/images/8a2735ac30e2c1dc885751b84ba0eb40f59a97ca8c7af041e5c887a824308c4c.png)
