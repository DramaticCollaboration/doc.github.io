---
order: 8
---

# Environment variable configuration

> Used to modify the project's color scheme, layout, cache, multi-language, and component default configuration

## Environment variable configuration

The project's environment variable configuration is located in the project root directory \[.env\], \[.env.development\]), \[.env.production\]

```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略

```

copy

> - Only `VITE_` variables starting with will be embedded into the client-side package, and you can access them in your project code like this:
>
> ```
> console.log(import.meta.env.VITE_PROT);
> ```
>
> copy
>
> - Variables starting with will be added to the [\_app.config.js](#!)`VITE_GLOB_*` configuration file when packaging .[](#!)

### Configuration item description

| model                                                          | Configuration Files |
| -------------------------------------------------------------- | ------------------- |
| Basic configuration (development, production, testing) sharing | .env                |
| Development Environment                                        | .env.development    |
| Production Environment                                         | .env.production     |
| test environment                                               | .env.test           |

### .env

Applicable to all environments

```
# 端口号
VITE_PORT=3100
# 网站标题
VITE_GLOB_APP_TITLE=JeecgBoot企业级低代码平台
# 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符
VITE_GLOB_APP_SHORT_NAME=JeecgBootAdmin
# 文件预览地址
VITE_GLOB_ONLINE_VIEW_URL=http://fileview.jeecg.com/onlinePreview
# 是否开启单点登录
VITE_GLOB_APP_OPEN_SSO = false
# 单点登录服务端地址
VITE_GLOBE_APP_CAS_BASE_URL=http://cas.test.com:8443/cas
# 开启微前端模式
VITE_GLOB_APP_OPEN_QIANKUN=true
```

copy

### .env.development

Development environment applicable

```
#后台接口父地址(必填)
VITE_GLOB_API_URL=/jeecgboot
#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot
# 本地开发代理，可以解决跨域及多地址代理
# 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题
# 可以有多个，注意多个不能换行，否则代理将会失效
VITE_PROXY=[["/jeecgboot","http://localhost:8080/jeecg-boot"],["api1","http://localhost:3001"],["/upload","http://localhost:3001/upload"]]
# 是否开启mock数据，关闭时需要自行对接后台接口
VITE_USE_MOCK=true
# 资源公共路径,需要以 /开头和结尾
VITE_PUBLIC_PATH=/
# 是否删除Console.log
VITE_DROP_CONSOLE=false
# 是否开启单点登录
VITE_GLOB_APP_OPEN_SSO = false
# 接口父路径前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=
```

copy

~Obsolete parameters~

```
# 文件上传地址 可以由nginx做转发或者直接写实际地址[作废了]
# VITE_GLOB_UPLOAD_URL更名为VITE_GLOB_DOMAIN_URL
VITE_GLOB_UPLOAD_URL=/upload
```

copy

> The /api configured here must be unique and not conflict with the names of the interfaces. If your interface is something like , please consider changing `VITE_PROXY`it to another name.`VITE_GLOB_API_URL`  
> `http://localhost:3000/api``VITE_GLOB_API_URL=/xxxx`

### .env.production

Applicable to production environment

```
# 是否开启mock
VITE_USE_MOCK=true
# 接口地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_API_URL=/jeecgboot
#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot
# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=
# 是否删除Console.log
VITE_DROP_CONSOLE=true
# 资源公共路径,需要以 / 开头和结尾
VITE_PUBLIC_PATH=/
# 打包是否输出gz｜br文件
# 可选: gzip | brotli | none
# 也可以有多个, 例如 ‘gzip’|'brotli',这样会同时生成 .gz和.br文件
VITE_BUILD_COMPRESS = 'gzip'
# 打包是否压缩图片
VITE_USE_IMAGEMIN = false
# 打包是否开启pwa功能
VITE_USE_PWA = false
# 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本
VITE_LEGACY = false
# 是否开启单点登录
VITE_GLOB_APP_OPEN_SSO = false
```

copy

### mock project prefix

If you modify the .env.development property `VITE_GLOB_API_URL`, you need to modify the mock project prefix simultaneously.  
`mock/_util.ts`

```
//接口父路径
export const baseUrl = '/jeecgboot/mock';
```

copy

## Dynamic configuration of production environment

### illustrate

When the build project is executed `yarn build`, the file is automatically generated `_app.config.js`and inserted `index.html`.

**Note: The development environment will not generate**

```
// _app.config.js
// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME
window.__PRODUCTION__JEECGBOOTADMIN__CONF__= {
  VITE_GLOB_APP_TITLE: 'JeecgBoot企业级低代码平台',
  VITE_GLOB_APP_SHORT_NAME: 'JeecgBootAdmin',
  VITE_GLOB_API_URL: '/jeecgboot',
  VITE_GLOB_DOMAIN_URL: 'http://localhost:8080/jeecg-boot',
  VITE_GLOB_API_URL_PREFIX: '',
  VITE_GLOB_ONLINE_VIEW_URL: 'http://fileview.jeecg.com/onlinePreview',
};
```

copy

### effect

`_app.config.js`It is used for the needs of dynamically modifying configurations after the project is packaged, such as interface addresses. You do not need to repackage, you can modify `/dist/_app.config.js`the variables in after packaging, and refresh to update the local variables in the code.

### How to get global variables

To get `_app.config.js`the variables in , you can use the function provided by \[src/hooks/setting/index.ts\] to get them

### How to add (add a dynamically modifiable configuration item)

1.  First, `.env`add variables that need to be dynamically configurable in or the corresponding development environment configuration file. They need to `VITE_GLOB_`start with

2.  `VITE_GLOB_`The variables that begin with will be automatically added to the environment variables. The newly added types are defined by `src/types/config.d.ts`modifying the values ​​of the two environment variables `GlobEnvConfig`and in .`GlobConfig`

3.  Just add the newly added return value to the \[useGlobSetting\] function

```
const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
  VITE_GLOB_UPLOAD_URL,
} = ENV;

export const useGlobSetting = (): SettingWrap => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  };
  return glob as Readonly<GlobConfig>;
};

```

copy

## Project Configuration

> The project configuration file is used to configure the content, layout, text and other effects displayed in the project, and is stored in `localStorage`. If the project configuration is changed, you need to manually **clear** `localStorage` the cache and refresh and log in again for it to take effect.

### Configuration file path

\[src/settings/projectSetting.ts\]

### illustrate

```
// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
  // 是否显示SettingButton
  showSettingButton: true,

  // 是否显示主题切换按钮
  showDarkModeToggle: true,

  // 设置按钮位置 可选项
  // SettingButtonPositionEnum.AUTO: 自动选择
  // SettingButtonPositionEnum.HEADER: 位于头部
  // SettingButtonPositionEnum.FIXED: 固定在右侧
  settingButtonPosition: SettingButtonPositionEnum.AUTO,

  // 权限模式,默认前端角色权限模式
  // ROUTE_MAPPING: 前端模式（菜单由路由生成，默认）
  // ROLE：前端模式（菜单路由分开）
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  // 权限缓存存放位置。默认存放于localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,
  // 会话超时处理方案
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录弹窗，覆盖当前页面
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
  // 项目主题色
  themeColor: primaryColor,
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: false,
  // 色弱模式
  colorWeak: false,
  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: false,
  // 主题内容宽度
  contentMode: ContentEnum.FULL,
  // 是否显示logo
  showLogo: true,
  // 是否显示底部信息 copyright
  showFooter: true,
  // 头部配置
  headerSetting: {
    // 背景色
    bgColor: '#ffffff',
    // 固定头部
    fixed: true,
    // 是否显示顶部
    show: true,
    // 主题
    theme: MenuThemeEnum.LIGHT,
    // 开启锁屏功能
    useLockPage: true,
    // 显示全屏按钮
    showFullScreen: true,
    // 显示文档按钮
    showDoc: true,
    // 显示消息中心按钮
    showNotice: true,
    // 显示菜单搜索按钮
    showSearch: true,
  },
  // 菜单配置
  menuSetting: {
    // 背景色
    bgColor: '#273352',
    // 是否固定住菜单
    fixed: true,
    // 菜单折叠
    collapsed: false,
    // 折叠菜单时候是否显示菜单名
    collapsedShowTitle: false,
    // 是否可拖拽
    canDrag: true,
    // 是否显示
    show: true,
    // 菜单宽度
    menuWidth: 180,
    // 菜单模式
    mode: MenuModeEnum.INLINE,
    // 菜单类型
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题
    theme: MenuThemeEnum.DARK,
    // 分割菜单
    split: false,
    // 顶部菜单布局
    topMenuAlign: 'start',
    // 折叠触发器的位置
    trigger: TriggerEnum.HEADER,
    // 手风琴模式，只展示一个菜单
    accordion: true,
    // 在路由切换的时候关闭左侧混合菜单展开菜单
    closeMixSidebarOnChange: false,
    // 左侧混合菜单模块切换触发方式
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // 是否固定左侧混合菜单
    mixSideFixed: false,
  },
  // 多标签
  multiTabsSetting: {
    // 刷新后是否保留已经打开的标签页
    cache: false,
    // 开启
    show: true,
    // 开启快速操作
    showQuick: true,
    // 是否可以拖拽
    canDrag: true,
    // 是否显示刷新那妞
    showRedo: true,
    // 是否显示折叠按钮
    showFold: true,
  },

  // 动画配置
  transitionSetting: {
    //  是否开启切换动画
    enable: true,
    // 动画名
    basicTransition: RouterTransitionEnum.FADE_SIDE,
    // 是否打开页面切换loading
    openPageLoading: true,
    //是否打开页面切换顶部进度条
    openNProgress: false,
  },

  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: true,
  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
  lockTime: 0,
  // 显示面包屑
  showBreadCrumb: true,
  // 显示面包屑图标
  showBreadCrumbIcon: false,
  // 是否使用全局错误捕获
  useErrorHandle: false,
  // 是否开启回到顶部
  useOpenBackTop: true,
  //  是否可以嵌入iframe页面
  canEmbedIFramePage: true,
  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,
  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: true,
};
```

copy

## Cache Configuration

Used to configure cache content encryption information and perform AES encryption on the information cached to the browser

In \[/@/settings/encryptionSetting.ts\], you can configure `localStorage`and `sessionStorage`cache information

**Prerequisite:** Use the project's own cache tool class \[/@/utils/cache\] to perform cache operations

```
import { isDevMode } from '/@/utils/env';

// 缓存默认过期时间
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// 开启缓存加密后，加密密钥。采用aes加密
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_',
};

// 是否加密缓存，默认生产环境加密
export const enableStorageEncryption = !isDevMode();
```

copy

## Multi-language configuration

Used to configure multi-language information

Configure in \[src/settings/localeSetting.ts\]

```
export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
  // 是否显示语言选择器(注意 修改完成需要退出登录)
  showPicker: true,
  // 当前语言
  locale: LOCALE.ZH_CN,
  // 默认语言
  fallback: LOCALE.ZH_CN,
  // 允许的语言
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// 语言列表
export const localeList: DropMenu[] = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
];
```

copy

## Theme color configuration

The default global theme color configuration is located in \[build/config/glob/themeConfig.ts\]

Just change primaryColor to the color you want and re-execute `yarn serve`.

```
/**
 * less global variable
 */
export const primaryColor = '#0960bd';
```

copy

## Style Configuration

### css prefix setting

Used to modify the unified prefix of component classes in the project

- Configure in \[src/settings/designSetting.ts\]

```
export const prefixCls = 'jeecg';
```

copy

- Configure the css prefix in \[src/design/var/index.less\]

```
@namespace: jeecg;
```

copy

### Prefix Usage

**In css**

```
<style lang="less" scoped>
  /* namespace已经全局注入，不需要额外在引入 */
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    width: 100%;
  }
</style>
```

copy

**In vue/ts**

```
import { useDesign } from '/@/hooks/web/useDesign';

const { prefixCls } = useDesign('app-logo');

// prefixCls => jeecg-app-logo
```

copy

## Color Scheme

Used to preset some color arrays

Configure in \[src/settings/designSetting.ts\]

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

## Component default parameter configuration

Configure in \[src/settings/componentSetting.ts\]

```
// 用于配置某些组件的常规配置，而无需修改组件
import type { SorterResult } from '../components/Table';

export default {
  // 表格配置
  table: {
    // 表格接口请求通用配置，可在组件prop覆盖
    // 支持 xxx.xxx.xxx格式
    fetchSetting: {
      // 传给后台的当前页字段
      pageField: 'page',
      // 传给后台的每页显示多少条的字段
      sizeField: 'pageSize',
      // 接口返回表格数据的字段
      listField: 'items',
      // 接口返回表格总数的字段
      totalField: 'total',
    },
    // 可选的分页选项
    pageSizeOptions: ['10', '50', '80', '100'],
    //默认每页显示多少条
    defaultPageSize: 10,
    // 默认排序方法
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      return {
        // 排序字段
        field,
        // 排序方式 asc/desc
        order,
      };
    },
    // 自定义过滤方法
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  // 滚动组件配置
  scrollbar: {
    // 是否使用原生滚动样式
    // 开启后，菜单，弹窗，抽屉会使用原生滚动条组件
    native: false,
  },
};
```

copy
