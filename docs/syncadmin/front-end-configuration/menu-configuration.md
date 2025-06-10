---
order: 2
---

# Menu Configuration

## Routing menu configuration

> Support routing menu, external link menu, routing cache, etc.

### Routing menu configuration example

![](https://upload.jeecg.com/jeecg/help/jeecgvue3/images/screenshot_1653732492691.png)

### External link menu configuration example

> External menu: By `前端组件`entering the external URL, the platform will determine `http`the beginning and open it in iframe.

![](https://lfs.k.topthink.com/lfs/322cccbc0400c7b221fb651938030d6913c0dcb3c27169563a63b4820d81a214.dat)

## Configuring rules

1\. If it is opened in embedded mode, `是否路由菜单`you need to select Yes.  
2\. If it is opened in external mode, `是否路由菜单`you can set it at will.  
3\. If you need to open it with the current system background prefix, you need to add a prefix `{{ window._CONFIG['domianURL'] }}`.

References are as follows

```
{{ window._CONFIG['domianURL'] }}/jmreport/list?token=${token}
```

copy
