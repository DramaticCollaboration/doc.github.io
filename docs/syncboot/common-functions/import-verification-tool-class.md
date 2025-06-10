---
order: 6
---

# Import verification tool class

> Some netizens reported that when importing Excel, any Excel file can be imported without format matching verification, so this solution was proposed.

## General Excel import verification tool class

```
ExcelImportCheckUtil.check(InputStream inputstream, Class<?> pojoClass, ImportParams params);
ExcelImportCheckUtil.check(InputStream inputstream, Class<?> pojoClass, ImportParams params, Double screenRate);
```

copy

```
screenRate 匹配度 取值范围 0.1-0.9，默认值0.8
```

copy

![](https://lfs.k.topthink.com/lfs/544d5db6b675af3a501f8f48ef4b6a1ff22833051ba5b63bfc3ebd1d6fb31453.dat)

## How to use? You need to introduce the Maven dependency of autopoi

```
<dependency>
  <groupId>org.jeecgframework</groupId>
  <artifactId>autopoi</artifactId>
  <version>2.0.1</version>
</dependency>
```

copy

Call before ExcelImportUtil.importExcel

```
boolean aBoolean = ExcelImportCheckUtil.check(file.getInputStream(), SysDictPage.class, params);
```

copy

Parameters  
![](https://lfs.k.topthink.com/lfs/89d8506b60a38d69cc3a21a7cb1480083b73e0466218b55eeff9cdc8c59df793.dat)

```
inputstream：文件输入流  一般用file.getInputStream()
pojoClass：当前导入的实体类名称（如SysUser.class）
params: 导入的参数
return ：返回值类型(true或false)，匹配度成功为true，失败为false
```

copy
