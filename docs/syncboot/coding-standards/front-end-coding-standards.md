---
order: 5
---

# Front-end coding standards

## Submit code requirements

```
1、提交代码必须review，确认无问题再提交
2、提交代码，必须进行SVN对比，看是否有多余的修改
3、任何与功能无关的修改不允许提交，比如： 格式化、行位去空格、修改顺序、缩进（要求只提交最精简的改动）
4、提交代码，修改日志必须同步提交
5、修改代码导致功能使用变化，必须同步写文档
```

copy

## Code comments and log specifications

### \[Part 1\] Code Comment Standards

```
[1].SVN提交注释
   ---author:scott---date:20130203---for:[bug号]树机构调整---
[2].代码修改日志注释
    ---author:scott---date:2021/11/22-----for:[bug号]树机构调整---
[3].代码修改痕迹注释
   //update-begin---author:scott ---date:20140212  for：[bug号]树机构调整------------
   //update-end---author:scott ---date:20140212  for：[bug号]树机构调整--------------
[4].代码缺陷或遗留未完成功能标记
    //TODO author：zhangdaihao  for:插入未完成   date:20130711
```

copy

### \[Part 2\] Log files

```
   代码修改日志    ：/doc/代码修改日志
   数据库修改日志：/doc/DB修改日志.sql
```

copy

## Code formatting requirements

```
1、新代码必须格式化
2、老代码不允许格式化（除非大重构）
```

copy

## Front-end code formatting configuration

Set up prettier first  
![](https://lfs.k.topthink.com/lfs/1a6cd23bf6d319a5fac078d2cf2ac8043fba9bbb57965d4417b59376e56d96f0.dat)  
Format code by right clicking  
![](https://lfs.k.topthink.com/lfs/d4a956f822bf6220398487daccbb27e6e8a836d9350ab6dded28805ec70f6625.dat)
