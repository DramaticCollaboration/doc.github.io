---
order: 5
---

# Drawer width adaptive

Use useDrawerAdaptiveWidth, reference `UserDrawer.vue`implementation.

```
// step1 引入useDrawerAdaptiveWidth方法
import {useDrawerAdaptiveWidth} from '/@/hooks/jeecg/useAdaptiveWidth'
// step2 获取到adaptiveWidth
const {adaptiveWidth} = useDrawerAdaptiveWidth()
```

copy

```
<!-- step3 在页面上使用 -->
<BasicDrawer
    @register="registerDrawer"
    :width="adaptiveWidth"
/>
```

copy

## Custom width range

`useDrawerAdaptiveWidth`Some default adaptive widths are defined to cope with most situations, but if the default adaptive width range cannot meet your needs, you can implement adaptive width yourself.  
You can refer to the default configuration in the figure below for modification.  
![](https://lfs.k.topthink.com/lfs/9f42595afd96c770f95c262b68d1b5e059b02ab3b293412726f20b4652d8408c.dat)
