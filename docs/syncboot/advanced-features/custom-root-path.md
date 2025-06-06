---
order: 2
---

# Custom root path

## Custom package root path

> The default package root path `org.jeecg`should be retained because it is needed by the online bottom layer. To expand the personalized path, please refer to the following steps

### 1\. Spring startup class adds a new scan path

```
类：org.jeecg.JeecgSystemApplication
```

copy

```
@SpringBootApplication(scanBasePackages = {"org.jeecg","com.mydes"})
public class JeecgSystemApplication extends SpringBootServletInitializer {
```

copy

### 2.Mybatis scan path

Modify the scan path of mybatis-plus.mapper-locations in the yml configuration

![](https://lfs.k.topthink.com/lfs/c77b09b2ff05de2a64e4676aae20b4ed56bef4fa62fcb855ce45e077f979147e.dat)

### 3.Mybatis class modifies @MapperScan scanning path

Modify org\\jeecg\\config\\mybatis\\MybatisPlusSaasConfig.java and add a new path

```
@Configuration
@MapperScan(value={"org.jeecg.modules.**.mapper*", "org.jeecg.**.mapper*"})
public class MybatisPlusSaasConfig {
```

copy

### 4\. Modify the dictionary translation scanning path

org\\jeecg\\common\\aspect\\DictAspect.java

```
/**
 * 定义切点Pointcut
 */
@Pointcut("execution(public * org.jeecg..*.*Controller.*(..)) || @annotation(org.jeecg.common.aspect.annotation.AutoDict)")
public void excudeService() {
}
```

copy
