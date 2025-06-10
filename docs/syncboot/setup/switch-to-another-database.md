---
order: 4
---

# 데이타베이스 변경

> Provides Oracle, SqlServer, and Postgresql switching configuration documents

## Important Prerequisites

`3.6.2+`The automatic database upgrade mechanism is added in the version. By default , it only supports MySQL 5.7 and MySQL 8. Therefore `flyway`, you must turn off the flyway configuration when switching to other databases.  
`application-dev.yml``spring.flyway.enabled=false`

If you don't change it, you will get an error.

## 1\. Oracle Data

### 1.1 Add oracle driver and modify pom.xml

```
<!-- oracle驱动 -->
<dependency>
	<groupId>com.oracle</groupId>
	<artifactId>ojdbc6</artifactId>
	<version>11.2.0.3</version>
</dependency>
```

copy

### 1.2 Modify database connection

```
修改druid配置
validationQuery: SELECT 1 FROM DUAL

driver-class-name: oracle.jdbc.OracleDriver
url: jdbc:oracle:thin:@192.168.1.200:1521:ORCL
username: jeecgboot
password: jeecgboot
```

copy

## 2\. SQL server data

### 2.1 Add SQL server driver and modify pom.xml

```
<!--  sqlserver-->
<dependency>
	<groupId>com.microsoft.sqlserver</groupId>
	<artifactId>sqljdbc4</artifactId>
	<version>4.0</version>
	<scope>runtime</scope>
</dependency>
```

copy

### 2.2 Modify database connection

```
修改druid配置
validationQuery: SELECT 1
filters: stat,slf4j


driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver
url: jdbc:sqlserver://192.168.1.200:1433;SelectMethod=cursor;DatabaseName=jeecg-boot
username: sa
password: SA

修改JPA加上database-platform参数
jpa:
  open-in-view: false
  database-platform: org.hibernate.dialect.SQLServerDialect
```

copy

### 2.3 Error handling of scheduled tasks under sqlserver

```
报错信息org.quartz.impl.jdbcjobstore.LockException: Failure obtaining db row lock: sql injection violation, syntax error: syntax error, not support option : UPDATE, pos 86, line 1, column 80, token UPDATE
```

copy

Modify the configuration as follows: Configure selectWithLockSQL: SELECT\* FROM {0}LOCKS UPDLOCK WHERE LOCK_NAME = ? under jobStore

```
quartz:
  .....省略其他配置.....
  properties:
     org:
       quartz:
          jobStore:
            selectWithLockSQL: SELECT* FROM {0}LOCKS UPDLOCK WHERE LOCK_NAME = ?
```

copy

### 2.4 After starting sqlserver, if the console keeps scrolling as shown below

Modifiable configuration files

```
web-stat-filter:
       enabled:false
```

copy

### 2.5 SQL Server failed to start, reporting an error: "variant" data type is not supported

The problem can be solved by changing the sqlserver version, replacing sqljdbc4 with mssql-jdbc

```
<dependency>
   <groupId>com.microsoft.sqlserver</groupId>
   <artifactId>mssql-jdbc</artifactId>
   <version>8.2.2.jre8</version>
</dependency>
```

copy

Error message:

Modify the dependent jar package:

## 3\. postgresql database

### 3.1 Add postgresql driver and modify pom.xml

(Introduce the corresponding version of the driver according to the different versions of the database, download address: [https://jdbc.postgresql.org/download.html](https://jdbc.postgresql.org/download.html) )

```
<!--  postgresql-->
<dependency>
   <groupId>org.postgresql</groupId>
   <artifactId>postgresql</artifactId>
   <version>42.2.6</version>
</dependency>
```

copy

### 3.2 Modify database connection

```
增加spring下的配置

spring:
  #postgresql 报错问题
  jpa:
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        temp:
          use_jdbc_metadata_defaults: false


修改druid配置
validationQuery: SELECT 1


url: jdbc:postgresql://localhost:5432/postgres?stringtype=unspecified
username: postgres
password: root
driver-class-name: org.postgresql.Driver

```

copy

Modify the quartz configuration

```
spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.PostgreSQLDelegate
```

copy

### 3.3 pgsql custom scheme

The url is specified by the scheme, for example:

```
jdbc:postgresql://localhost:5432/jeecgboot?currentSchema=demo&stringtype=unspecified
```

copy

## 4\. DAMO Database

### 4.1 Add the DAMO database driver and modify pom.xml

```
<!--达梦数据库 -->
<dependency>
    <groupId>com.dameng</groupId>
    <artifactId>Dm8JdbcDriver18</artifactId>
    <version>8.1.1.49</version>
</dependency>
<dependency>
    <groupId>com.dameng</groupId>
    <artifactId>DmDialect-for-hibernate5.0</artifactId>
    <version>8.1.1.49</version>
</dependency>
```

copy

### 4.2 Modify database connection

- Modify `jpa`dialect

```
jpa:
  open-in-view: false
  properties:
    hibernate:
      dialect: org.hibernate.dialect.DmDialect
```

copy

- If springboot is upgraded to 2.6+, you also need to modify the quartz configuration

```
spring.quartz.jdbc.initialize-schema=never
```

copy

- Add DAMO data source

```
url: jdbc:dm://192.168.1.188:30236/?schema=SYSDBA&compatibleMode=oracle&zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=utf-8
username: SYSDBA
password: SYSDBA001
driverClassName: dm.jdbc.driver.DmDriver
```

copy

## 5\. Renmin University of China Jincang Database

### 5.1 Add the Renmin University of China Jincang database driver and modify the pom file

```
<!--    人大金仓驱动    -->
<dependency>
   <groupId>kingbase</groupId>
   <artifactId>kingbase8</artifactId>
   <version>8</version>
   <scope>runtime</scope>
</dependency>
```

copy

### 5.2 Modify database connection

- Modify `jpa`dialect

```
jpa:
  open-in-view: false
  properties:
    hibernate:
      dialect: org.hibernate.dialect.PostgreSQLDialect
```

copy

- If springboot is upgraded to 2.6+, you also need to modify the quartz configuration

```
spring.quartz.jdbc.initialize-schema=never
```

copy

- Remove the wall firewall in filters

```
dynamic:
  druid:
    filters: stat,slf4j
```

copy

- Add Renda Jincang data source

```
url: jdbc:kingbase8://192.168.1.188:4321/test
username: system
password: system
driver-class-name: com.kingbase8.Driver
```

copy

## 6\. TIDB Database

### 6.1 Add TIDB driver and modify pom.xml

```
<dependency>
   <groupId>mysql</groupId>
   <artifactId>mysql-connector-java</artifactId>
   <version>8.0.27</version>
   <scope>runtime</scope>
</dependency>
```

copy

### 6.2 Modify database connection

```
url: jdbc:mysql://127.0.0.1:3306/jeecgboot?characterEncoding=UTF-8&useUnicode=true&useSSL=false&tinyInt1isBit=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Seoul
username: root
password: root
driver-class-name: com.mysql.cj.jdbc.Driver
```

copy

> For more information, see [Integrate TiDB with SyncBoot.](../SyncBoot-Use-TiDB.html)

## 7\. What databases does SyncBoot support?

| database                                 | support |
| ---------------------------------------- | ------- |
| MySQL                                    | √       |
| Oracle11g                                | √       |
| Sqlserver2017                            | √       |
| PostgreSQL                               | √       |
| DB2、Informix                            | √       |
| MariaDB                                  | √       |
| SQLite、Hsqldb、Derby、H2                | √       |
| DAMO, Renda Jincang, Shentong            | √       |
| Huawei Gauss, Xugu, and Hangao databases | √       |
| Alibaba Cloud PolarDB, PPAS, HerdDB      | √       |
| Hive、HBase、CouchBase                   | √       |

> Oracle and DAMO databases do not support Blob type queries
