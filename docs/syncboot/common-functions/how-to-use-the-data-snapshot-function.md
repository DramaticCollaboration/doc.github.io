---
order: 11
---

# How to use the data snapshot function?

> Corresponding menu \[System Monitoring\] -> \[Data Log\]

> Data snapshot function: record each document change and save the version number.  
> If you need to record each detailed update record of a form, you need to use this  
> function. This function will store the data content of each form change in version mode, provide comparison function, and view the changes of each field.

1.  Recording data snapshot interface

```
//业务表单记录数据变更日志
sysDataLogService.addDataLog(String tableName, String dataId, String dataContent)
```

copy

2.  Compare data snapshot changes  
    ![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687781048871.png)  
    ![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687781058557.png)
