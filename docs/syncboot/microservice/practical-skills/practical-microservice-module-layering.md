---
order: 7
---

# Practical Microservice Module Layering

### Microservice module explanation

> If you do not consider the switching between monolithic and microservices and directly adopt microservice development, the following project structure is recommended`（JeecgBoot官方需兼容单体和微服务切换，所以默认不做拆分）`

jeecg-boot-module-cms directory structure description

```
├── jeecg-boot-module-cms           --CMS微服务模块
    ├──jeecg-boot-module-cms-api     -- 实体、dto、vo、服务定义
        ├──dto
        ├──entity
        ├──feign
        ├──vo
    ├──jeecg-boot-module-cms-biz      --业务实现（引用jeecg-boot-module-cms-api）
        ├──controller
        ├──mapper
        ├──service
    ├──jeecg-boot-module-cms-start      --启动项目
```

copy

- The advantage of this directory structure is that it splits entities and enables single-body and microservice shared entity definitions;
- Other microservice modules need to call the microservice interface and directly introduce jeecg-boot-module-cms-api.
- jeecg provides scaffolding to quickly generate this structural module. Refer to the document [to use archetype to generate microservice modules](../archetype.html)
- Microservice interface definition method, refer to the document [Microservice Feign interface call example](../super/feign.html)
