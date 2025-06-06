---
order: 10
---

# Distributed locks to prevent duplicate submission

## Introducing distributed lock dependency

```
<!-- 引入分布式锁依赖 -->
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-lock</artifactId>
</dependency>
```

copy

## Instructions

```
/**
 * 测试重复提交
 */
@JRepeat(lockKey = "#name", lockTime = 5)
public void reSubmit(String name) {
    try {
        Thread.sleep(1500);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    System.out.println("提交成功" + name);
}
```

copy

## JRepeat Annotation Usage Instructions

```
    /**
     * 超时时间
     *
     * @return
     */
    int lockTime();
    /**
     * redis 锁key的
     *
     * @return redis 锁key
     */
    String lockKey() default "";
```

copy
