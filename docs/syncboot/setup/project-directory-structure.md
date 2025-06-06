---
order: 6
---

# 디렉토리 구조

### jeecg-boot directory structure

```
├─jeecg-boot-parent（父POM： 项目依赖、modules组织）
│  ├─jeecg-boot-base-core（共通模块： 工具类、config、权限、查询过滤器、注解、接口等）
│  ├─jeecg-module-demo    示例代码
│  ├─jeecg-module-system  System系统管理目录
│  │  ├─jeecg-system-biz    System系统管理权限
│  │  ├─jeecg-system-start   单体启动项目(8080)
│  │  ├─jeecg-system-api   System系统管理模块对外api
│  │  │  ├─jeecg-system-cloud-api   System模块对外提供的微服务接口
│  │  │  ├─jeecg-system-local-api   System模块对外提供的单体接口
│  ├─jeecg-server-cloud           --微服务模块
     ├─jeecg-cloud-gateway       --微服务网关模块(9999)
     ├─jeecg-cloud-nacos       --Nacos服务模块(8848)
     ├─jeecg-system-cloud-start  --System微服务启动项目(7001)
     ├─jeecg-demo-cloud-start    --Demo微服务启动项目(7002)
     ├─jeecg-visual
        ├─jeecg-cloud-monitor       --微服务监控模块 (9111)
        ├─jeecg-cloud-xxljob        --微服务xxljob定时任务服务端 (9080)
        ├─jeecg-cloud-sentinel     --sentinel服务端 (9000)
        ├─jeecg-cloud-test           -- 微服务测试示例（各种例子）
           ├─jeecg-cloud-test-more         -- 微服务测试示例（feign、熔断降级、xxljob、分布式锁）
           ├─jeecg-cloud-test-rabbitmq     -- 微服务测试示例（rabbitmq）
           ├─jeecg-cloud-test-seata          -- 微服务测试示例（seata分布式事务）
           ├─jeecg-cloud-test-shardingsphere    -- 微服务测试示例（分库分表）
```

copy

### jeecg-boot-starter directory structure

```
├── jeecg-boot-starter              -- starter父模块
    ├── jeecg-boot-common             -- 底层常量、redis等基础依赖
    ├── jeecg-boot-starter-cloud       -- 微服务启动starter
    ├── jeecg-boot-starter-job           -- xxl-job定时任务starter
    ├── jeecg-boot-starter-lock          -- 分布式锁starter
    ├── jeecg-boot-starter-rabbitmq       -- 消息中间件starter
    ├── jeecg-boot-starter-seata           --分布式事务starter
    ├── jeecg-boot-starter-shardingsphere  -- 分库分表starter
    ├── jeecg-boot-starter-mongon          -- mongon集成starter
    ├──jeecg-boot-starter-chatgpt               -- chatGpt集成start
```

copy
