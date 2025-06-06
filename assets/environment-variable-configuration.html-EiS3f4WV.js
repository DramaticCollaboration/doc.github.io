import{_ as s,c as e,a,o as i}from"./app-DGEuurYf.js";const l={};function c(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="environment-variable-configuration" tabindex="-1"><a class="header-anchor" href="#environment-variable-configuration"><span>Environment variable configuration</span></a></h1><blockquote><p>Used to modify the project&#39;s color scheme, layout, cache, multi-language, and component default configuration</p></blockquote><h2 id="environment-variable-configuration-1" tabindex="-1"><a class="header-anchor" href="#environment-variable-configuration-1"><span>Environment variable configuration</span></a></h2><p>The project&#39;s environment variable configuration is located in the project root directory [.env], [.env.development]), [.env.production]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.env                # 在所有的环境中被载入</span>
<span class="line">.env.local          # 在所有的环境中被载入，但会被 git 忽略</span>
<span class="line">.env.[mode]         # 只在指定的模式中被载入</span>
<span class="line">.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><ul><li>Only <code>VITE_</code> variables starting with will be embedded into the client-side package, and you can access them in your project code like this:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">console.log(import.meta.env.VITE_PROT);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li>Variables starting with will be added to the <a href="#!">_app.config.js</a><code>VITE_GLOB_*</code> configuration file when packaging .<a href="#!"></a></li></ul></blockquote><h3 id="configuration-item-description" tabindex="-1"><a class="header-anchor" href="#configuration-item-description"><span>Configuration item description</span></a></h3><table><thead><tr><th>model</th><th>Configuration Files</th></tr></thead><tbody><tr><td>Basic configuration (development, production, testing) sharing</td><td>.env</td></tr><tr><td>Development Environment</td><td>.env.development</td></tr><tr><td>Production Environment</td><td>.env.production</td></tr><tr><td>test environment</td><td>.env.test</td></tr></tbody></table><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env"><span>.env</span></a></h3><p>Applicable to all environments</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 端口号</span>
<span class="line">VITE_PORT=3100</span>
<span class="line"># 网站标题</span>
<span class="line">VITE_GLOB_APP_TITLE=JeecgBoot企业级低代码平台</span>
<span class="line"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span>
<span class="line">VITE_GLOB_APP_SHORT_NAME=JeecgBootAdmin</span>
<span class="line"># 文件预览地址</span>
<span class="line">VITE_GLOB_ONLINE_VIEW_URL=http://fileview.jeecg.com/onlinePreview</span>
<span class="line"># 是否开启单点登录</span>
<span class="line">VITE_GLOB_APP_OPEN_SSO = false</span>
<span class="line"># 单点登录服务端地址</span>
<span class="line">VITE_GLOBE_APP_CAS_BASE_URL=http://cas.test.com:8443/cas</span>
<span class="line"># 开启微前端模式</span>
<span class="line">VITE_GLOB_APP_OPEN_QIANKUN=true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development"><span>.env.development</span></a></h3><p>Development environment applicable</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#后台接口父地址(必填)</span>
<span class="line">VITE_GLOB_API_URL=/jeecgboot</span>
<span class="line">#后台接口全路径地址(必填)</span>
<span class="line">VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot</span>
<span class="line"># 本地开发代理，可以解决跨域及多地址代理</span>
<span class="line"># 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题</span>
<span class="line"># 可以有多个，注意多个不能换行，否则代理将会失效</span>
<span class="line">VITE_PROXY=[[&quot;/jeecgboot&quot;,&quot;http://localhost:8080/jeecg-boot&quot;],[&quot;api1&quot;,&quot;http://localhost:3001&quot;],[&quot;/upload&quot;,&quot;http://localhost:3001/upload&quot;]]</span>
<span class="line"># 是否开启mock数据，关闭时需要自行对接后台接口</span>
<span class="line">VITE_USE_MOCK=true</span>
<span class="line"># 资源公共路径,需要以 /开头和结尾</span>
<span class="line">VITE_PUBLIC_PATH=/</span>
<span class="line"># 是否删除Console.log</span>
<span class="line">VITE_DROP_CONSOLE=false</span>
<span class="line"># 是否开启单点登录</span>
<span class="line">VITE_GLOB_APP_OPEN_SSO = false</span>
<span class="line"># 接口父路径前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span>
<span class="line">VITE_GLOB_API_URL_PREFIX=</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>~Obsolete parameters~</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 文件上传地址 可以由nginx做转发或者直接写实际地址[作废了]</span>
<span class="line"># VITE_GLOB_UPLOAD_URL更名为VITE_GLOB_DOMAIN_URL</span>
<span class="line">VITE_GLOB_UPLOAD_URL=/upload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>The /api configured here must be unique and not conflict with the names of the interfaces. If your interface is something like , please consider changing <code>VITE_PROXY</code>it to another name.<code>VITE_GLOB_API_URL</code><br><code>http://localhost:3000/api\`\`VITE_GLOB_API_URL=/xxxx</code></p></blockquote><h3 id="env-production" tabindex="-1"><a class="header-anchor" href="#env-production"><span>.env.production</span></a></h3><p>Applicable to production environment</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 是否开启mock</span>
<span class="line">VITE_USE_MOCK=true</span>
<span class="line"># 接口地址 可以由nginx做转发或者直接写实际地址</span>
<span class="line">VITE_GLOB_API_URL=/jeecgboot</span>
<span class="line">#后台接口全路径地址(必填)</span>
<span class="line">VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot</span>
<span class="line"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span>
<span class="line">VITE_GLOB_API_URL_PREFIX=</span>
<span class="line"># 是否删除Console.log</span>
<span class="line">VITE_DROP_CONSOLE=true</span>
<span class="line"># 资源公共路径,需要以 / 开头和结尾</span>
<span class="line">VITE_PUBLIC_PATH=/</span>
<span class="line"># 打包是否输出gz｜br文件</span>
<span class="line"># 可选: gzip | brotli | none</span>
<span class="line"># 也可以有多个, 例如 ‘gzip’|&#39;brotli&#39;,这样会同时生成 .gz和.br文件</span>
<span class="line">VITE_BUILD_COMPRESS = &#39;gzip&#39;</span>
<span class="line"># 打包是否压缩图片</span>
<span class="line">VITE_USE_IMAGEMIN = false</span>
<span class="line"># 打包是否开启pwa功能</span>
<span class="line">VITE_USE_PWA = false</span>
<span class="line"># 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本</span>
<span class="line">VITE_LEGACY = false</span>
<span class="line"># 是否开启单点登录</span>
<span class="line">VITE_GLOB_APP_OPEN_SSO = false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="mock-project-prefix" tabindex="-1"><a class="header-anchor" href="#mock-project-prefix"><span>mock project prefix</span></a></h3><p>If you modify the .env.development property <code>VITE_GLOB_API_URL</code>, you need to modify the mock project prefix simultaneously.<br><code>mock/_util.ts</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//接口父路径</span>
<span class="line">export const baseUrl = &#39;/jeecgboot/mock&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="dynamic-configuration-of-production-environment" tabindex="-1"><a class="header-anchor" href="#dynamic-configuration-of-production-environment"><span>Dynamic configuration of production environment</span></a></h2><h3 id="illustrate" tabindex="-1"><a class="header-anchor" href="#illustrate"><span>illustrate</span></a></h3><p>When the build project is executed <code>yarn build</code>, the file is automatically generated <code>_app.config.js</code>and inserted <code>index.html</code>.</p><p><strong>Note: The development environment will not generate</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// _app.config.js</span>
<span class="line">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span>
<span class="line">window.__PRODUCTION__JEECGBOOTADMIN__CONF__= {</span>
<span class="line">  VITE_GLOB_APP_TITLE: &#39;JeecgBoot企业级低代码平台&#39;,</span>
<span class="line">  VITE_GLOB_APP_SHORT_NAME: &#39;JeecgBootAdmin&#39;,</span>
<span class="line">  VITE_GLOB_API_URL: &#39;/jeecgboot&#39;,</span>
<span class="line">  VITE_GLOB_DOMAIN_URL: &#39;http://localhost:8080/jeecg-boot&#39;,</span>
<span class="line">  VITE_GLOB_API_URL_PREFIX: &#39;&#39;,</span>
<span class="line">  VITE_GLOB_ONLINE_VIEW_URL: &#39;http://fileview.jeecg.com/onlinePreview&#39;,</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="effect" tabindex="-1"><a class="header-anchor" href="#effect"><span>effect</span></a></h3><p><code>_app.config.js</code>It is used for the needs of dynamically modifying configurations after the project is packaged, such as interface addresses. You do not need to repackage, you can modify <code>/dist/_app.config.js</code>the variables in after packaging, and refresh to update the local variables in the code.</p><h3 id="how-to-get-global-variables" tabindex="-1"><a class="header-anchor" href="#how-to-get-global-variables"><span>How to get global variables</span></a></h3><p>To get <code>_app.config.js</code>the variables in , you can use the function provided by [src/hooks/setting/index.ts] to get them</p><h3 id="how-to-add-add-a-dynamically-modifiable-configuration-item" tabindex="-1"><a class="header-anchor" href="#how-to-add-add-a-dynamically-modifiable-configuration-item"><span>How to add (add a dynamically modifiable configuration item)</span></a></h3><ol><li><p>First, <code>.env</code>add variables that need to be dynamically configurable in or the corresponding development environment configuration file. They need to <code>VITE_GLOB_</code>start with</p></li><li><p><code>VITE_GLOB_</code>The variables that begin with will be automatically added to the environment variables. The newly added types are defined by <code>src/types/config.d.ts</code>modifying the values ​​of the two environment variables <code>GlobEnvConfig</code>and in .<code>GlobConfig</code></p></li><li><p>Just add the newly added return value to the [useGlobSetting] function</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const {</span>
<span class="line">  VITE_GLOB_APP_TITLE,</span>
<span class="line">  VITE_GLOB_API_URL,</span>
<span class="line">  VITE_GLOB_APP_SHORT_NAME,</span>
<span class="line">  VITE_GLOB_API_URL_PREFIX,</span>
<span class="line">  VITE_GLOB_UPLOAD_URL,</span>
<span class="line">} = ENV;</span>
<span class="line"></span>
<span class="line">export const useGlobSetting = (): SettingWrap =&gt; {</span>
<span class="line">  // Take global configuration</span>
<span class="line">  const glob: Readonly&lt;GlobConfig&gt; = {</span>
<span class="line">    title: VITE_GLOB_APP_TITLE,</span>
<span class="line">    apiUrl: VITE_GLOB_API_URL,</span>
<span class="line">    shortName: VITE_GLOB_APP_SHORT_NAME,</span>
<span class="line">    urlPrefix: VITE_GLOB_API_URL_PREFIX,</span>
<span class="line">    uploadUrl: VITE_GLOB_UPLOAD_URL</span>
<span class="line">  };</span>
<span class="line">  return glob as Readonly&lt;GlobConfig&gt;;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="project-configuration" tabindex="-1"><a class="header-anchor" href="#project-configuration"><span>Project Configuration</span></a></h2><blockquote><p>The project configuration file is used to configure the content, layout, text and other effects displayed in the project, and is stored in <code>localStorage</code>. If the project configuration is changed, you need to manually <strong>clear</strong> <code>localStorage</code> the cache and refresh and log in again for it to take effect.</p></blockquote><h3 id="configuration-file-path" tabindex="-1"><a class="header-anchor" href="#configuration-file-path"><span>Configuration file path</span></a></h3><p>[src/settings/projectSetting.ts]</p><h3 id="illustrate-1" tabindex="-1"><a class="header-anchor" href="#illustrate-1"><span>illustrate</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// ! 改动后需要清空浏览器缓存</span>
<span class="line">const setting: ProjectConfig = {</span>
<span class="line">  // 是否显示SettingButton</span>
<span class="line">  showSettingButton: true,</span>
<span class="line"></span>
<span class="line">  // 是否显示主题切换按钮</span>
<span class="line">  showDarkModeToggle: true,</span>
<span class="line"></span>
<span class="line">  // 设置按钮位置 可选项</span>
<span class="line">  // SettingButtonPositionEnum.AUTO: 自动选择</span>
<span class="line">  // SettingButtonPositionEnum.HEADER: 位于头部</span>
<span class="line">  // SettingButtonPositionEnum.FIXED: 固定在右侧</span>
<span class="line">  settingButtonPosition: SettingButtonPositionEnum.AUTO,</span>
<span class="line"></span>
<span class="line">  // 权限模式,默认前端角色权限模式</span>
<span class="line">  // ROUTE_MAPPING: 前端模式（菜单由路由生成，默认）</span>
<span class="line">  // ROLE：前端模式（菜单路由分开）</span>
<span class="line">  permissionMode: PermissionModeEnum.ROUTE_MAPPING,</span>
<span class="line">  // 权限缓存存放位置。默认存放于localStorage</span>
<span class="line">  permissionCacheType: CacheTypeEnum.LOCAL,</span>
<span class="line">  // 会话超时处理方案</span>
<span class="line">  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页</span>
<span class="line">  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录弹窗，覆盖当前页面</span>
<span class="line">  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,</span>
<span class="line">  // 项目主题色</span>
<span class="line">  themeColor: primaryColor,</span>
<span class="line">  // 网站灰色模式，用于可能悼念的日期开启</span>
<span class="line">  grayMode: false,</span>
<span class="line">  // 色弱模式</span>
<span class="line">  colorWeak: false,</span>
<span class="line">  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内</span>
<span class="line">  fullContent: false,</span>
<span class="line">  // 主题内容宽度</span>
<span class="line">  contentMode: ContentEnum.FULL,</span>
<span class="line">  // 是否显示logo</span>
<span class="line">  showLogo: true,</span>
<span class="line">  // 是否显示底部信息 copyright</span>
<span class="line">  showFooter: true,</span>
<span class="line">  // 头部配置</span>
<span class="line">  headerSetting: {</span>
<span class="line">    // 背景色</span>
<span class="line">    bgColor: &#39;#ffffff&#39;,</span>
<span class="line">    // 固定头部</span>
<span class="line">    fixed: true,</span>
<span class="line">    // 是否显示顶部</span>
<span class="line">    show: true,</span>
<span class="line">    // 主题</span>
<span class="line">    theme: MenuThemeEnum.LIGHT,</span>
<span class="line">    // 开启锁屏功能</span>
<span class="line">    useLockPage: true,</span>
<span class="line">    // 显示全屏按钮</span>
<span class="line">    showFullScreen: true,</span>
<span class="line">    // 显示文档按钮</span>
<span class="line">    showDoc: true,</span>
<span class="line">    // 显示消息中心按钮</span>
<span class="line">    showNotice: true,</span>
<span class="line">    // 显示菜单搜索按钮</span>
<span class="line">    showSearch: true,</span>
<span class="line">  },</span>
<span class="line">  // 菜单配置</span>
<span class="line">  menuSetting: {</span>
<span class="line">    // 背景色</span>
<span class="line">    bgColor: &#39;#273352&#39;,</span>
<span class="line">    // 是否固定住菜单</span>
<span class="line">    fixed: true,</span>
<span class="line">    // 菜单折叠</span>
<span class="line">    collapsed: false,</span>
<span class="line">    // 折叠菜单时候是否显示菜单名</span>
<span class="line">    collapsedShowTitle: false,</span>
<span class="line">    // 是否可拖拽</span>
<span class="line">    canDrag: true,</span>
<span class="line">    // 是否显示</span>
<span class="line">    show: true,</span>
<span class="line">    // 菜单宽度</span>
<span class="line">    menuWidth: 180,</span>
<span class="line">    // 菜单模式</span>
<span class="line">    mode: MenuModeEnum.INLINE,</span>
<span class="line">    // 菜单类型</span>
<span class="line">    type: MenuTypeEnum.SIDEBAR,</span>
<span class="line">    // 菜单主题</span>
<span class="line">    theme: MenuThemeEnum.DARK,</span>
<span class="line">    // 分割菜单</span>
<span class="line">    split: false,</span>
<span class="line">    // 顶部菜单布局</span>
<span class="line">    topMenuAlign: &#39;start&#39;,</span>
<span class="line">    // 折叠触发器的位置</span>
<span class="line">    trigger: TriggerEnum.HEADER,</span>
<span class="line">    // 手风琴模式，只展示一个菜单</span>
<span class="line">    accordion: true,</span>
<span class="line">    // 在路由切换的时候关闭左侧混合菜单展开菜单</span>
<span class="line">    closeMixSidebarOnChange: false,</span>
<span class="line">    // 左侧混合菜单模块切换触发方式</span>
<span class="line">    mixSideTrigger: MixSidebarTriggerEnum.CLICK,</span>
<span class="line">    // 是否固定左侧混合菜单</span>
<span class="line">    mixSideFixed: false,</span>
<span class="line">  },</span>
<span class="line">  // 多标签</span>
<span class="line">  multiTabsSetting: {</span>
<span class="line">    // 刷新后是否保留已经打开的标签页</span>
<span class="line">    cache: false,</span>
<span class="line">    // 开启</span>
<span class="line">    show: true,</span>
<span class="line">    // 开启快速操作</span>
<span class="line">    showQuick: true,</span>
<span class="line">    // 是否可以拖拽</span>
<span class="line">    canDrag: true,</span>
<span class="line">    // 是否显示刷新那妞</span>
<span class="line">    showRedo: true,</span>
<span class="line">    // 是否显示折叠按钮</span>
<span class="line">    showFold: true,</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  // 动画配置</span>
<span class="line">  transitionSetting: {</span>
<span class="line">    //  是否开启切换动画</span>
<span class="line">    enable: true,</span>
<span class="line">    // 动画名</span>
<span class="line">    basicTransition: RouterTransitionEnum.FADE_SIDE,</span>
<span class="line">    // 是否打开页面切换loading</span>
<span class="line">    openPageLoading: true,</span>
<span class="line">    //是否打开页面切换顶部进度条</span>
<span class="line">    openNProgress: false,</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存</span>
<span class="line">  openKeepAlive: true,</span>
<span class="line">  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时</span>
<span class="line">  lockTime: 0,</span>
<span class="line">  // 显示面包屑</span>
<span class="line">  showBreadCrumb: true,</span>
<span class="line">  // 显示面包屑图标</span>
<span class="line">  showBreadCrumbIcon: false,</span>
<span class="line">  // 是否使用全局错误捕获</span>
<span class="line">  useErrorHandle: false,</span>
<span class="line">  // 是否开启回到顶部</span>
<span class="line">  useOpenBackTop: true,</span>
<span class="line">  //  是否可以嵌入iframe页面</span>
<span class="line">  canEmbedIFramePage: true,</span>
<span class="line">  // 切换界面的时候是否删除未关闭的message及notify</span>
<span class="line">  closeMessageOnSwitch: true,</span>
<span class="line">  // 切换界面的时候是否取消已经发送但是未响应的http请求。</span>
<span class="line">  // 如果开启,想对单独接口覆盖。可以在单独接口设置</span>
<span class="line">  removeAllHttpPending: true,</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="cache-configuration" tabindex="-1"><a class="header-anchor" href="#cache-configuration"><span>Cache Configuration</span></a></h2><p>Used to configure cache content encryption information and perform AES encryption on the information cached to the browser</p><p>In [/@/settings/encryptionSetting.ts], you can configure <code>localStorage</code>and <code>sessionStorage</code>cache information</p><p><strong>Prerequisite:</strong> Use the project&#39;s own cache tool class [/@/utils/cache] to perform cache operations</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { isDevMode } from &#39;/@/utils/env&#39;;</span>
<span class="line"></span>
<span class="line">// 缓存默认过期时间</span>
<span class="line">export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;</span>
<span class="line"></span>
<span class="line">// 开启缓存加密后，加密密钥。采用aes加密</span>
<span class="line">export const cacheCipher = {</span>
<span class="line">  key: &#39;_11111000001111@&#39;,</span>
<span class="line">  iv: &#39;@11111000001111_&#39;,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 是否加密缓存，默认生产环境加密</span>
<span class="line">export const enableStorageEncryption = !isDevMode();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="multi-language-configuration" tabindex="-1"><a class="header-anchor" href="#multi-language-configuration"><span>Multi-language configuration</span></a></h2><p>Used to configure multi-language information</p><p>Configure in [src/settings/localeSetting.ts]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export const LOCALE: { [key: string]: LocaleType } = {</span>
<span class="line">  ZH_CN: &#39;zh_CN&#39;,</span>
<span class="line">  EN_US: &#39;en&#39;,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export const localeSetting: LocaleSetting = {</span>
<span class="line">  // 是否显示语言选择器(注意 修改完成需要退出登录)</span>
<span class="line">  showPicker: true,</span>
<span class="line">  // 当前语言</span>
<span class="line">  locale: LOCALE.ZH_CN,</span>
<span class="line">  // 默认语言</span>
<span class="line">  fallback: LOCALE.ZH_CN,</span>
<span class="line">  // 允许的语言</span>
<span class="line">  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 语言列表</span>
<span class="line">export const localeList: DropMenu[] = [</span>
<span class="line">  {</span>
<span class="line">    text: &#39;简体中文&#39;,</span>
<span class="line">    event: LOCALE.ZH_CN,</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    text: &#39;English&#39;,</span>
<span class="line">    event: LOCALE.EN_US,</span>
<span class="line">  },</span>
<span class="line">];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="theme-color-configuration" tabindex="-1"><a class="header-anchor" href="#theme-color-configuration"><span>Theme color configuration</span></a></h2><p>The default global theme color configuration is located in [build/config/glob/themeConfig.ts]</p><p>Just change primaryColor to the color you want and re-execute <code>yarn serve</code>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * less global variable</span>
<span class="line"> */</span>
<span class="line">export const primaryColor = &#39;#0960bd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="style-configuration" tabindex="-1"><a class="header-anchor" href="#style-configuration"><span>Style Configuration</span></a></h2><h3 id="css-prefix-setting" tabindex="-1"><a class="header-anchor" href="#css-prefix-setting"><span>css prefix setting</span></a></h3><p>Used to modify the unified prefix of component classes in the project</p><ul><li>Configure in [src/settings/designSetting.ts]</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export const prefixCls = &#39;jeecg&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li>Configure the css prefix in [src/design/var/index.less]</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@namespace: jeecg;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h3 id="prefix-usage" tabindex="-1"><a class="header-anchor" href="#prefix-usage"><span>Prefix Usage</span></a></h3><p><strong>In css</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  /* namespace已经全局注入，不需要额外在引入 */</span>
<span class="line">  @prefix-cls: ~&#39;@{namespace}-app-logo&#39;;</span>
<span class="line"></span>
<span class="line">  .@{prefix-cls} {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>In vue/ts</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { useDesign } from &#39;/@/hooks/web/useDesign&#39;;</span>
<span class="line"></span>
<span class="line">const { prefixCls } = useDesign(&#39;app-logo&#39;);</span>
<span class="line"></span>
<span class="line">// prefixCls =&gt; jeecg-app-logo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="color-scheme" tabindex="-1"><a class="header-anchor" href="#color-scheme"><span>Color Scheme</span></a></h2><p>Used to preset some color arrays</p><p>Configure in [src/settings/designSetting.ts]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//  app主题色预设</span>
<span class="line">export const APP_PRESET_COLOR_LIST: string[] = [</span>
<span class="line">  &#39;#0960bd&#39;,</span>
<span class="line">  &#39;#0084f4&#39;,</span>
<span class="line">  &#39;#009688&#39;,</span>
<span class="line">  &#39;#536dfe&#39;,</span>
<span class="line">  &#39;#ff5c93&#39;,</span>
<span class="line">  &#39;#ee4f12&#39;,</span>
<span class="line">  &#39;#0096c7&#39;,</span>
<span class="line">  &#39;#9c27b0&#39;,</span>
<span class="line">  &#39;#ff9800&#39;,</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">// 顶部背景色预设</span>
<span class="line">export const HEADER_PRESET_BG_COLOR_LIST: string[] = [</span>
<span class="line">  &#39;#ffffff&#39;,</span>
<span class="line">  &#39;#009688&#39;,</span>
<span class="line">  &#39;#5172DC&#39;,</span>
<span class="line">  &#39;#1E9FFF&#39;,</span>
<span class="line">  &#39;#018ffb&#39;,</span>
<span class="line">  &#39;#409eff&#39;,</span>
<span class="line">  &#39;#4e73df&#39;,</span>
<span class="line">  &#39;#e74c3c&#39;,</span>
<span class="line">  &#39;#24292e&#39;,</span>
<span class="line">  &#39;#394664&#39;,</span>
<span class="line">  &#39;#001529&#39;,</span>
<span class="line">  &#39;#383f45&#39;,</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">// 左侧菜单背景色预设</span>
<span class="line">export const SIDE_BAR_BG_COLOR_LIST: string[] = [</span>
<span class="line">  &#39;#001529&#39;,</span>
<span class="line">  &#39;#273352&#39;,</span>
<span class="line">  &#39;#ffffff&#39;,</span>
<span class="line">  &#39;#191b24&#39;,</span>
<span class="line">  &#39;#191a23&#39;,</span>
<span class="line">  &#39;#304156&#39;,</span>
<span class="line">  &#39;#001628&#39;,</span>
<span class="line">  &#39;#28333E&#39;,</span>
<span class="line">  &#39;#344058&#39;,</span>
<span class="line">  &#39;#383f45&#39;,</span>
<span class="line">];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="component-default-parameter-configuration" tabindex="-1"><a class="header-anchor" href="#component-default-parameter-configuration"><span>Component default parameter configuration</span></a></h2><p>Configure in [src/settings/componentSetting.ts]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 用于配置某些组件的常规配置，而无需修改组件</span>
<span class="line">import type { SorterResult } from &#39;../components/Table&#39;;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  // 表格配置</span>
<span class="line">  table: {</span>
<span class="line">    // 表格接口请求通用配置，可在组件prop覆盖</span>
<span class="line">    // 支持 xxx.xxx.xxx格式</span>
<span class="line">    fetchSetting: {</span>
<span class="line">      // 传给后台的当前页字段</span>
<span class="line">      pageField: &#39;page&#39;,</span>
<span class="line">      // 传给后台的每页显示多少条的字段</span>
<span class="line">      sizeField: &#39;pageSize&#39;,</span>
<span class="line">      // 接口返回表格数据的字段</span>
<span class="line">      listField: &#39;items&#39;,</span>
<span class="line">      // 接口返回表格总数的字段</span>
<span class="line">      totalField: &#39;total&#39;,</span>
<span class="line">    },</span>
<span class="line">    // 可选的分页选项</span>
<span class="line">    pageSizeOptions: [&#39;10&#39;, &#39;50&#39;, &#39;80&#39;, &#39;100&#39;],</span>
<span class="line">    //默认每页显示多少条</span>
<span class="line">    defaultPageSize: 10,</span>
<span class="line">    // 默认排序方法</span>
<span class="line">    defaultSortFn: (sortInfo: SorterResult) =&gt; {</span>
<span class="line">      const { field, order } = sortInfo;</span>
<span class="line">      return {</span>
<span class="line">        // 排序字段</span>
<span class="line">        field,</span>
<span class="line">        // 排序方式 asc/desc</span>
<span class="line">        order,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">    // 自定义过滤方法</span>
<span class="line">    defaultFilterFn: (data: Partial&lt;Recordable&lt;string[]&gt;&gt;) =&gt; {</span>
<span class="line">      return data;</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  // 滚动组件配置</span>
<span class="line">  scrollbar: {</span>
<span class="line">    // 是否使用原生滚动样式</span>
<span class="line">    // 开启后，菜单，弹窗，抽屉会使用原生滚动条组件</span>
<span class="line">    native: false,</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,91)]))}const r=s(l,[["render",c]]),t=JSON.parse('{"path":"/syncadmin/front-end-configuration/in-depth/environment-variable-configuration.html","title":"Environment variable configuration","lang":"ko-KR","frontmatter":{"order":8},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-configuration/in-depth/environment-variable-configuration.md"}');export{r as comp,t as data};
