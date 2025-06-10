---
order: 7
---

# Dynamic data source usage

Druid dynamic data source

### 1\. Dynamic data source configuration

/src/main/resources/application.yml

```
datasource:
   datasource:
          master:
            url: jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&useUnicode=true&useSSL=false
            username: root
            password: root
            driver-class-name: com.mysql.jdbc.Driver
          multi-datasource1:
            url: jdbc:mysql://localhost:3306/jeecg-boot2?useUnicode=true&characterEncoding=utf8&autoReconnect=true&zeroDateTimeBehavior=convertToNull&transformedBitIsBoolean=true
            username: root
            password: root
            driver-class-name: com.mysql.jdbc.Driver

```

copy

master is the main data source, the system default data source  
multi-datasource1: a custom third-party data source, the name of multi-datasource1 can be defined at will

### 2\. Use of dynamic data sources

Use @DS to switch data sources.  
@DS can be annotated on methods and classes, and method annotations take precedence over class annotations.

Annotate on the service implementation or mapper interface method, but it is strongly not recommended to annotate both the service and mapper at the same time. (It may cause problems)

| annotation    | result                                                 |
| ------------- | ------------------------------------------------------ |
| No @DS        | Default Data Source                                    |
| @DS("dsName") | dsName can be a group name or a specific library name. |

Code example:

```
@Service
@DS("multi-datasource1")
public class JeecgDemoServiceImpl implements JeecgDemoService {

  @Autowired
  private JdbcTemplate jdbcTemplate;

  public List<Map<String, Object>> selectAll() {
    return  jdbcTemplate.queryForList("select * from user");
  }

  @Override
  @DS("multi-datasource2")
  public List<Map<String, Object>> selectByCondition() {
    return  jdbcTemplate.queryForList("select * from user where age >10");
  }
}
```

copy
