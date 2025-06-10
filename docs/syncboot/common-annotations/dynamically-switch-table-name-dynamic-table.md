---
order: 12
---

# Dynamically switch table name @DynamicTable

> Reminder: This annotation is not universal and can be extended by yourself

```
@DynamicTable(value = “sys_role_index”)
```

copy

Implement mybatis to dynamically switch table names. For example, if your original operation table name is `sys_role_index`, it can be changed to through this annotation `sys_role_index_vue3`. A suffix version number is automatically added. You can expand this version to other numbers, such as year, and flexibly implement the table splitting function.

### Principle implementation:

类：org/jeecg/config/mybatis/aspect/DynamicTableAspect.java  
类：org/jeecg/config/mybatis/MybatisPlusSaasConfig.java  
方法：dynamicTableNameInnerInterceptor  
![](https://lfs.k.topthink.com/lfs/8236bc5a341dc6f497e9cfc89d23c78d9f40e73fcc82b8524d1c72267f17f73f.dat)

### sample graph

![](https://lfs.k.topthink.com/lfs/d7a822954bcd1a052ab4904f32aa80934985e34f84e89861ba1d636b67a7ea80.dat)
