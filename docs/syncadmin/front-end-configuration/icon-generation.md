---
order: 7
---

# Icon Generation

Icon set pre-generation: This command will generate the selected icon set  
![](https://lfs.k.topthink.com/lfs/f355c94c3016738ef6a7c15d8da6b6271d8c75353fc80407a8c80a0bc9a0afd2.dat)

Due to the special existence of the icon selector, the project will package more icons. The icons of the icon selector need to be specified in advance and the corresponding files need to be generated.

### \# Generate

- Execute icon generation command

```
yarn gen:icon
```

copy

- Here you can choose to generate locally or online. Both methods have their own advantages and disadvantages. As shown in the figure below

local means local, online means online, press Enter to confirm  
![](https://lfs.k.topthink.com/lfs/5748b8c474448522c1b7fb26a5f56f705b738def0978f219d690fc5d5f453ace.dat)

- Select the icon set you want to generate and press Enter to confirm.  
  ![](https://lfs.k.topthink.com/lfs/54658f7ace421a011628684e2e24d2eac5aa96b052bd6127ba224fc3dbcfa4cf.dat)

- Select the directory where the icon is output (the default directory for the project is src/components/Icon/data). You can directly press Enter to select the default directory.  
  ![](https://lfs.k.topthink.com/lfs/4f250793ba8c6e30dfb933f66e6b89cc552f33cd46e0cc97b00a5fd3092514e5.dat)

At this point the icon set has been generated, and your icon selector now contains the icons of the icon set you selected.

Be careful not to update too frequently

If you selected local generation, frequent changes of icon sets may cause icons to be lost or not displayed.

### \# Pros and Cons

- **Online Icon (project default, recommended)**

This method will make an online request when the icon selector uses the icon, and then cache the corresponding icon to the browser. It can effectively reduce the code packaging volume.

If your project can access the external network, it is recommended to use this method

**Disadvantages:** The icon cannot be displayed in a LAN or in an environment where the external network cannot be accessed.

- **Local Icons**

This method will package all icons of the icon selector into js when packaging. No additional online icon requests will be made when using it.

**Disadvantages:** The package size will be larger. The specific size increase depends on the number of icons selected when selecting the icon set.

---

## \# Component library icon usage

Use `ant-design-vue`the provided icon

```
<template>
  <StarOutlined />
  <StarFilled />
  <StarTwoTone twoToneColor="#eb2f96" />
</template>

<script>
  import { defineComponent } from 'vue';
  import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons-vue';
  export default defineComponent({
    components: { StarOutlined, StarFilled, StarTwoTone },
  });
</script>

```

copy

## \# Svg Sprite Icon

### #use

Place the required svg icon `src/assets/icons`inside

Example: test.svg

1.  Using `SvgIcon`components for display

```
<template>
  <SvgIcon name="test" />
</template>

<script>
  import { defineComponent } from 'vue';
  import { SvgIcon } from '/@/components/Icon';
  export default defineComponent({
    components: { SvgIcon },
  });
</script>

```

copy

2.  Using `Icon`components for display

The component `｜svg`will automatically be used if it ends with`SvgIcon`

```
<template>
  <Icon name="test|svg" />
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

## #Iconify Icons

[Please refer to Icon component](#!) for usage[](#!)

The project uses [the vite-plugin-purge-icons](https://github.com/antfu/purge-icons/blob/main/packages/vite-plugin-purge-icons/README.md) plug-in to implement icons.

1.  Install Dependencies

```

yarn add @iconify/iconify

yarn add @iconify/json @purge-icons/generated -D


```

copy

2.  `vite.config.ts`Import plugins into

```
import PurgeIcons from 'vite-plugin-purge-icons';

export default {
  plugins: [PurgeIcons()],
};

```

copy

3.  Writing Icon components

Complete code [src/components/Icon/src/Icon.vue](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Icon/src/Icon.vue)

```
<template>
  <SvgIcon :size="size" :name="getSvgIcon" v-if="isSvgIcon" :class="[$attrs.class]" :spin="spin" />
  <span
    v-else
    ref="elRef"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
    :style="getWrapStyle"
  ></span>
</template>
<script lang="ts">
  import type { PropType } from 'vue';
  import {
    defineComponent,
    ref,
    watch,
    onMounted,
    nextTick,
    unref,
    computed,
    CSSProperties,
  } from 'vue';

  import SvgIcon from './SvgIcon.vue';
  import Iconify from '@purge-icons/generated';
  import { isString } from '/@/utils/is';
  import { propTypes } from '/@/utils/propTypes';

  const SVG_END_WITH_FLAG = '|svg';
  export default defineComponent({
    name: 'GIcon',
    components: { SvgIcon },
    props: {
      // icon name
      icon: propTypes.string,
      // icon color
      color: propTypes.string,
      // icon size
      size: {
        type: [String, Number] as PropType<string | number>,
        default: 16,
      },
      spin: propTypes.bool.def(false),
      prefix: propTypes.string.def(''),
    },
    setup(props) {
      const elRef = ref<ElRef>(null);

      const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG));
      const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ''));
      const getIconRef = computed(() => `${props.prefix ? props.prefix + ':' : ''}${props.icon}`);

      const update = async () => {
        if (unref(isSvgIcon)) return;

        const el = unref(elRef);
        if (!el) return;

        await nextTick();
        const icon = unref(getIconRef);
        if (!icon) return;

        const svg = Iconify.renderSVG(icon, {});
        if (svg) {
          el.textContent = '';
          el.appendChild(svg);
        } else {
          const span = document.createElement('span');
          span.className = 'iconify';
          span.dataset.icon = icon;
          el.textContent = '';
          el.appendChild(span);
        }
      };

      const getWrapStyle = computed((): CSSProperties => {
        const { size, color } = props;
        let fs = size;
        if (isString(size)) {
          fs = parseInt(size, 10);
        }

        return {
          fontSize: `${fs}px`,
          color: color,
          display: 'inline-flex',
        };
      });

      watch(() => props.icon, update, { flush: 'post' });

      onMounted(update);

      return { elRef, getWrapStyle, isSvgIcon, getSvgIcon };
    },
  });
</script>
<style lang="less">
  .app-iconify {
    display: inline-block;
    // vertical-align: middle;

    &-spin {
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    }
  }

  span.iconify {
    display: block;
    min-width: 1em;
    min-height: 1em;
    background-color: @iconify-bg-color;
    border-radius: 100%;
  }
</style>
```

copy

Original text: [https://doc.vvbin.cn/dep/icon.html](https://doc.vvbin.cn/dep/icon.html)
