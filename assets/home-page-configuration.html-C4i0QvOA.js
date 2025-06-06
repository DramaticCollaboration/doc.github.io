import{_ as s,c as e,a,o as i}from"./app-CJlkTddN.js";const l={};function c(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="home-page-configuration" tabindex="-1"><a class="header-anchor" href="#home-page-configuration"><span>Home page configuration</span></a></h1><h2 id="default-theme-configuration" tabindex="-1"><a class="header-anchor" href="#default-theme-configuration"><span>Default theme configuration</span></a></h2><p>The default global theme color configuration is located in <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/build/config/themeConfig.ts" target="_blank" rel="noopener noreferrer">build/config/glob/themeConfig.ts</a></p><p>Just change primaryColor to the color you want and re-execute <code>yarn serve</code>.</p><h2 id="color-scheme" tabindex="-1"><a class="header-anchor" href="#color-scheme"><span>Color Scheme</span></a></h2><p>Used to preset some color arrays</p><p>Configure in src <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/settings/designSetting.ts" target="_blank" rel="noopener noreferrer">/settings/designSetting.ts</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//  app主题色预设</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="project-configuration" tabindex="-1"><a class="header-anchor" href="#project-configuration"><span>Project Configuration</span></a></h2><p>Configure in src <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/settings/projectSetting.ts" target="_blank" rel="noopener noreferrer">/settings/projectSetting.ts</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 项目主题色</span>
<span class="line">themeColor: primaryColor,</span>
<span class="line">...</span>
<span class="line">// 头部配置</span>
<span class="line">headerSetting: {</span>
<span class="line">    // 背景色</span>
<span class="line">    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],</span>
<span class="line">    // 主题</span>
<span class="line">    theme: ThemeEnum.LIGHT,</span>
<span class="line">    ...</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 菜单配置</span>
<span class="line">menuSetting: {</span>
<span class="line">  // 背景色</span>
<span class="line">  bgColor: SIDE_BAR_BG_COLOR_LIST[0],</span>
<span class="line">  ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="default-home-page-configuration" tabindex="-1"><a class="header-anchor" href="#default-home-page-configuration"><span>Default home page configuration</span></a></h2><p>Configure in src <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/views/dashboard/Analysis/index.vue" target="_blank" rel="noopener noreferrer">/views/dashboard/Analysis/index</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    .....</span>
<span class="line">   //修改indexStyle 的值</span>
<span class="line">    const indexStyle = ref(0);</span>
<span class="line">   .....</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="default-jump-home-page-configuration" tabindex="-1"><a class="header-anchor" href="#default-jump-home-page-configuration"><span>Default jump home page configuration</span></a></h2><p>Configure in src <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/enums/pageEnum.ts" target="_blank" rel="noopener noreferrer">/enums/pageEnum.ts</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export enum PageEnum {</span>
<span class="line">  // 登录页</span>
<span class="line">  BASE_LOGIN = &#39;/login&#39;,</span>
<span class="line">  // 首页</span>
<span class="line">  BASE_HOME = &#39;/dashboard&#39;,</span>
<span class="line">  //错误页</span>
<span class="line">  ERROR_PAGE = &#39;/exception&#39;,</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,21)]))}const d=s(l,[["render",c]]),t=JSON.parse('{"path":"/syncadmin/front-end-configuration/home-page-configuration.html","title":"Home page configuration","lang":"ko-KR","frontmatter":{"order":8},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-configuration/home-page-configuration.md"}');export{d as comp,t as data};
