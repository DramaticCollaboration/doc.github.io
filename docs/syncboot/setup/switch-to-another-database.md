---
order: 4
---

# 데이타베이스 변경

> Provides Oracle, SqlServer, and Postgresql switching configuration documents

## Important Prerequisites

`3.6.2+`The automatic database upgrade mechanism is added in the version. By default , it only supports MySQL 5.7 and MySQL 8. Therefore `flyway`, you must turn off the flyway configuration when switching to other databases.  
`application-dev.yml``spring.flyway.enabled=false`  
![](/images/6944889e888652985feba75ed63b6986560cce67407399205785f50d1157923f.dat)  
If you don't change it, you will get an error.  
![](/images/036aee0d166ba9981f1389bcb7c6ee7f6fa236899fadf64ff710ef623c33332d.dat)

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

![](/images/screenshot_1609379950094.png)  
Modifiable configuration files

```
web-stat-filter:
       enabled:false
```

copy

![](/images/4c376238724de1f5d4487f4a3067bea6717b4a33930124c5211a68472778f51f.dat)

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
![](/images/screenshot_1640592024420.png)  
Modify the dependent jar package:  
![](/images/e561e6d4bfc2a65fccccb784f4c67d56e5c2670584210ae28a08ff1204af9a63.dat)

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

![](/images/cdfdac98d4b074cdfeba3a03d3b2b618ce12c4c5fd75eba578045dced5e8ba05.dat)

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

![](/images/e3cfec1dae8679ee7d6c9d0fa8eb7d3d3731e79ff5872a15d4b797bc3c226da8.dat)

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

![](/images/f80bd665b6e1aa43b4c883b06ca0d55f20250a8f8e9e86e1238ce77987abf124.dat)

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

![](/images/7e9ded77f7c5d3f92a6009b38d80c484aeaa1a768d6ead3d486b3d4eaeaa435c.dat)

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

![](/images/50b7e78c6c9aead96f17845151e8f987413a4b2cc9556685d7fb85c938af09c4.dat)

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
