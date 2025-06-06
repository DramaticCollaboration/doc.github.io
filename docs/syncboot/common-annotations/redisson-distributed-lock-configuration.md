---
order: 11
---

# Redisson distributed lock configuration

> Redisson is used to implement distributed locks. Application scenarios: flash sales, group buying, train ticket purchases and other high-concurrency applications.

### Step 1. Introduce distributed lock dependency

```
<!-- 引入分布式锁依赖 -->
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-lock</artifactId>
</dependency>
```

copy

### Step 2. Distributed lock redisson configuration

Distributed lock configuration in nacos in jeecg-dev.yaml  
![](https://lfs.k.topthink.com/lfs/81c9c914bcc4ab33bddc29fcc36665c76f34f55ac2c82311476c66e039352243.dat)

- address: connection address and port
- password​
- Type deployment method
- enabled: Whether to enable distributed lock

### Step 3. Customize annotations

#### Distributed lock annotation`@JLock`

Example:

```
 //lockKey支持spel表达式
 @JLock(lockKey= "redis-lock")
 @JLock(lockKey="#user.name")
 @JLock(lockKey ={"#user.name","#user.id"})
```

copy

Parameter Description:

- [JLock parameter definition](https://gitee.com/jeecg//jeecg-boot-starter/blob/master/jeecg-boot-starter-lock/src/main/java/org/jeecg/boot/starter/lock/annotation/JLock.java)

#### Annotation to prevent duplicate submission`@JRepeat`

Example:

```
@JRepeat(lockKey = "#name", lockTime = 5)
```

copy

Parameter Description:

- [JRepeat parameter definition](https://gitee.com/jeecg/jeecg-boot-starter/blob/master/jeecg-boot-starter-lock/src/main/java/org/jeecg/boot/starter/lock/annotation/JRepeat.java)

### Step 4. Write a distributed lock sample code

`@JLock` `@JRepeat`Implemented through jeecg's custom annotations

```
/**
 * 分布式锁测试demo
 */
@Slf4j
@Component
public class DemoLockTest {
    @Autowired
    RedissonLockClient redissonLock;

    /**
     *注解方式测试分布式锁
     */
    @Scheduled(cron = "0/5 * * * * ?")
    @JLock(lockKey= "redis-lock")
    public void execute() throws InterruptedException {
        log.info("执行execute任务开始，休眠三秒");
        Thread.sleep(3000);
        System.out.println("=======================业务逻辑1=============================");
        log.info("execute任务结束，休眠三秒");
    }

    /**
     * 编码方式测试分布式锁
     */
    @Scheduled(cron = "0/10 * * * * ?")
    public void execute2() throws InterruptedException {
        if (redissonLock.tryLock("redisson", -1, 10000)) {
            log.info("执行任务execute2开始，休眠三秒");
            Thread.sleep(3000);
            System.out.println("=======================业务逻辑2=============================");
            log.info("定时execute2结束，休眠三秒");
            redissonLock.unlock("redisson");
        } else {
            log.info("execute2获取锁失败");
        }
    }


}

```

copy

### Cluster Configuration

Supports 4 redis deployment modes: stand-alone, sentinel, cluster, master-slave

#### 1 Single machine configuration example

```
redisson.address=127.0.0.1:6379
redisson.type=STANDALONE
```

copy

#### 2 Sentinel Configuration Example

**The format of redisson.lock.server.address** is: sentinel alias in sentinel.conf configuration, service IP and port of sentinel1 node, service IP and port of sentinel2 node, service IP and port of sentinel3 node.  
For example, in sentinel.conf, it is configured as sentinel monitor my-sentinel-name 127.0.0.1 6379 2, so here is my-sentinel-name

```
redisson.address=my-sentinel-name,127.0.0.1:26379,127.0.0.1:26389,127.0.0.1:26399
redisson.type=SENTINEL
```

copy

#### 3 Cluster Configuration Example

The cluster mode has at least 6 nodes (3 masters and 3 slaves, 3 masters for sharding, and 3 slaves to ensure high availability after the master fails).  
The address format is: 127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381,127.0.0.1:6382,127.0.0.1:6383,127.0.0.1:6384

```
redisson.address=127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381,127.0.0.1:6382,127.0.0.1:6383,127.0.0.1:6384
redisson.type=CLUSTER
```

copy

#### 4 Master-Slave Configuration Example

For example: 127.0.0.1:6379, 127.0.0.1:6380, 127.0.0.1:6381  
represents the master node: 127.0.0.1:6379, the slave node 127.0.0.1:6380, and the slave node 127.0.0.1:6381

```
redisson.address=127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381
redisson.type=MASTERSLAVE
```

copy
