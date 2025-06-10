---
order: 4
---

# Configuration Files

## Configuration Files

```
jeecg-module-system\jeecg-system-start\
src\main\resources\jeecg\jeecg_config.properties
```

copy

## 1\. Customize the code to generate the root path

```
#code_generate_project_path
project_path=E:\\workspace\\jeecg-boot
#bussi_package[User defined]
bussi_package=org.jeecg.modules.demo

#default code path
#source_root_package=src
#webroot_package=WebRoot

#maven code path
source_root_package=src.main.java
webroot_package=src.main.webapp

#ftl resource url
templatepath=/jeecg/code-template
system_encoding=utf-8

#db Table id [User defined]
db_table_id=id

#db convert flag[true/false]
db_filed_convert=true

#page Search Field num [User defined]
page_search_filed_num=1
#page_filter_fields
page_filter_fields=create_time,create_by,update_time,update_by
exclude_table=act_,ext_act_,design_,onl_,sys_,qrtz_

```

copy

## 2\. Custom database

> If you need to configure the database separately, you can configure it as follows

1.  Comment out the class

```
jeecg-module-system\jeecg-system-biz\src\main\java\org\jeecg\config\init\CodeGenerateDbConfig.java
```

copy

2.  Modify the configuration file  
    jeecg-boot-module-system/src/main/resources/jeecg/jeecg_database.properties

```
#mysql
diver_name=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/jeecg-boot?useUnicode=true&characterEncoding=UTF-8
username=root
password=root
database_name=jeecg-boot
```

copy

3.  Important configuration notes  
    ![](https://upload.jeecg.com/jeecg/help/jeecgvue3/topwrite/assets/image_1692699409514.png)

4.  PostgreSQL mode configuration  
    in the configuration file jeecg/jeecg_database.properties, add the attribute schemaName, multiple comma separated

```
schemaName=public,test
```

copy
