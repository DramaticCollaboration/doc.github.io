---
order: 6
---

# Menu Internationalization

### 1\. The menu title is configured in this format

`t('routes.dashboard.analysis')`  
![Enter image description](https://foruda.gitee.com/images/1665305854179091608/e0d0719f_57093.png "Screenshots")

### 2\. Internationalization Configuration

[Internationalization Configuration](#!)

### 3\. Update code

src\\router\\helper\\routeHelper.ts

```
import {useI18n} from "/@/hooks/web/useI18n";
```

copy

```
    //【jeecg-boot/issues/I5N2PN】左侧动态菜单怎么做国际化处理  2022-10-09
    //菜单支持国际化翻译
    if (item?.meta?.title) {
      const { t } = useI18n();
      console.log('前: ',item.meta.title)
      if(item.meta.title.includes('t(\'') && t){
        item.meta.title = eval(item.meta.title);
        console.log('后: ',item.meta.title)
      }
    }


```

copy

Specific reference screenshots  
![Enter image description](https://foruda.gitee.com/images/1665305915386969268/12f79534_57093.png "Screenshots")

### 4\. See the effect

![](https://lfs.k.topthink.com/lfs/f04a58b144d878fa0d814080c57490cee4e3cc23f59a32816b600569b9b61098.dat)
