---
order: 8
---

# Home page configuration

## Default theme configuration

The default global theme color configuration is located in [build/config/glob/themeConfig.ts](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/build/config/themeConfig.ts)

Just change primaryColor to the color you want and re-execute `yarn serve`.

## Color Scheme

Used to preset some color arrays

Configure in src [/settings/designSetting.ts](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/settings/designSetting.ts)

```
//  app主题色预设
export const APP_PRESET_COLOR_LIST: string[] = [
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
];

// 顶部背景色预设
export const HEADER_PRESET_BG_COLOR_LIST: string[] = [
  '#ffffff',
  '#009688',
  '#5172DC',
  '#1E9FFF',
  '#018ffb',
  '#409eff',
  '#4e73df',
  '#e74c3c',
  '#24292e',
  '#394664',
  '#001529',
  '#383f45',
];

// 左侧菜单背景色预设
export const SIDE_BAR_BG_COLOR_LIST: string[] = [
  '#001529',
  '#273352',
  '#ffffff',
  '#191b24',
  '#191a23',
  '#304156',
  '#001628',
  '#28333E',
  '#344058',
  '#383f45',
];
```

copy

## Project Configuration

Configure in src [/settings/projectSetting.ts](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/settings/projectSetting.ts)

```
// 项目主题色
themeColor: primaryColor,
...
// 头部配置
headerSetting: {
    // 背景色
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    // 主题
    theme: ThemeEnum.LIGHT,
    ...
}

// 菜单配置
menuSetting: {
  // 背景色
  bgColor: SIDE_BAR_BG_COLOR_LIST[0],
  ...
}
```

copy

## Default home page configuration

Configure in src [/views/dashboard/Analysis/index](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/views/dashboard/Analysis/index.vue)

```
<script lang="ts" setup>
    .....
   //修改indexStyle 的值
    const indexStyle = ref(0);
   .....
</script>
```

copy

## Default jump home page configuration

Configure in src [/enums/pageEnum.ts](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/enums/pageEnum.ts)

```
export enum PageEnum {
  // 登录页
  BASE_LOGIN = '/login',
  // 首页
  BASE_HOME = '/dashboard',
  //错误页
  ERROR_PAGE = '/exception',
}
```

copy
