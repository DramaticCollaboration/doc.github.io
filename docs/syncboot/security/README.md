---
order: 1
dir:
  order: 6
---

# Online security configuration

Low-code development has some special writing methods because of intelligence, which may lead to attacks. Therefore, for the sake of system security and stability, jeecg has launched `平台上线安全配置`and officially released it. You can choose to turn off the online configuration capability to completely eliminate the risk of attacks.  
Key parameters: `jeecg.firewall.lowCodeMode`When this parameter is turned on, all online configuration capabilities will be turned off, and the admin account and development role are allowed to retain permissions.

> v3.5.5+ effective

```
jeecg:
  # 平台上线安全配置
  firewall:
    # 数据源安全 (开启后，Online报表和图表的数据源为必填)
    dataSourceSafe: true
    # 禁止online报表使用 * 查询（3.7.1+）
    disableSelectAll: true
    # 低代码模式（dev:开发模式，prod:发布模式——关闭所有在线开发配置能力）
    lowCodeMode: prod
    # 表字典安全模式（white:白名单——配置了白名单的表才能通过表字典方式访问，black:黑名单——配置了黑名单的表不允许表字典方式访问）
    tableDictMode: white
```

copy
