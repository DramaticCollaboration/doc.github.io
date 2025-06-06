---
order: 7
---

# Icon Icon component

## Icon

Used to display components within the project, basically supports all icon libraries (supports on-demand loading, only packages the icons used)

The icon component is located in [src/components/Icon](https://github.com/jeecgboot/jeecgboot-vue3/blob/master/src/components/Icon)

TIP

The value of icon can be queried on [Iconify](https://iconify.design/) or [Netlify](https://icones.netlify.app/collection/ant-design)

### Usage

```
<template>
  <Icon icon="gg:loadbar-doc"></Icon>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Icon } from '/@/components/Icon';
  export default defineComponent({
    components: { Icon },
  });
</script>

```

copy

### Props

| Attributes | type     | default value | illustrate  |
| ---------- | -------- | ------------- | ----------- |
| icon       | `string` | \-            | Icon Name   |
| color      | `string` | \-            | Icon Color  |
| size       | `number` | 16            | Icon size   |
| prefix     | `string` | \-            | Icon Prefix |

hint

If `icon`the value `|svg`ends with , it will be rendered as [a SvgIcon component](https://vvbin.cn/doc-next/components/icon.html#SvgIcon)

## SvgIcon

Used to use project svg sprite

### Usage

```
<template>
  <div>
    <SvgIcon name="test"> </SvgIcon>
  </div>
</template>
<script>
  import { SvgIcon } from '/@/components/Icon';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { SvgIcon },
  });
</script>

```

copy

### Props

| Attributes | type     | default value | illustrate    |
| ---------- | -------- | ------------- | ------------- |
| name       | `string` | \-            | svg icon name |
| size       | `number` | 16            | Icon size     |

## IconPicker

For detailed description of this component, please refer to [the icon selector](#!)

### Usage

```
<template>
  <div>
    <IconPicker />
  </div>
</template>
<script>
  import { IconPicker } from '/@/components/Icon';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { IconPicker },
  });
</script>

```

copy

### Props

| Attributes | type      | default value | illustrate                                                                                                          |
| ---------- | --------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| width      | `string`  | 100%          | width                                                                                                               |
| pageSize   | `number`  | 140           | Number of icons to display per page                                                                                 |
| copy       | `boolean` | false         | Can it be copied?                                                                                                   |
| mode       | `string`  | `iconify`     | Alternative icon pool, when it is svg, all svg sprite icons will be read. See the following description for details |

mode Description

- `mode`When the icon is generated`iconify` , the pre-generated [icon set data](#!) will be used as the alternative icon pool.
- `mode`When this happens, all svg icons under (including first-level subdirectories) will`svg` be used as the alternative icon pool, see [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md#vite-plugin-svg-icons) for details .`/src/assets/icons`[](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md#vite-plugin-svg-icons)
