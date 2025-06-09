import{_ as e,c as s,a,o as l}from"./app-CC5quYyA.js";const i={};function c(t,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="globalization" tabindex="-1"><a class="header-anchor" href="#globalization"><span>globalization</span></a></h1><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>example</span></a></h2><p>The file content of the created file <code>lang/zh_CN/components/modal.ts</code>is</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  title: &#39;标题&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Then use directly</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> const { t } = useI18n();</span>
<span class="line"> t(&#39;components.modal.title&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Get internationalized text.</p><h2 id="internationalization-configuration-code" tabindex="-1"><a class="header-anchor" href="#internationalization-configuration-code"><span>Internationalization configuration code</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/56fd0744022b945f4d02e03049c40481e672906a7734389b167298f353bfce26.dat" alt=""></p><hr><h1 id="explanation-of-the-principles-of-internationalization" tabindex="-1"><a class="header-anchor" href="#explanation-of-the-principles-of-internationalization"><span>Explanation of the principles of internationalization</span></a></h1><p>If you are using the vscode development tool, it is recommended to install the <a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">I18n-ally</a> plugin</p><h2 id="i18n-ally-plugin" tabindex="-1"><a class="header-anchor" href="#i18n-ally-plugin"><span>I18n-ally plugin</span></a></h2><p>After installing the plugin, you can see the corresponding language content in your code in real time<br><img src="https://upload.jeecg.com/jeecg/help/jeecgvue3/images/screenshot_1665306496350.png" alt=""></p><h2 id="configure-the-default-language" tabindex="-1"><a class="header-anchor" href="#configure-the-default-language"><span>Configure the default language</span></a></h2><p>The default language can be configured in [src/settings/localeSetting.ts]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export const LOCALE: { [key: string]: LocaleType } = {</span>
<span class="line">  ZH_CN: &#39;zh_CN&#39;,</span>
<span class="line">  EN_US: &#39;en&#39;,</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">export const localeSetting: LocaleSetting = {</span>
<span class="line">  // 是否显示语言选择器</span>
<span class="line">  showPicker: true,</span>
<span class="line">  // 当前语言</span>
<span class="line">  locale: LOCALE.ZH_CN,</span>
<span class="line">  // 默认语言</span>
<span class="line">  fallback: LOCALE.ZH_CN,</span>
<span class="line">  // 允许的语言</span>
<span class="line">  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 配置语言列表</span>
<span class="line">export const localeList: DropMenu[] = [</span>
<span class="line">  {</span>
<span class="line">    text: &#39;简体中文&#39;,</span>
<span class="line">    event: &#39;zh_CN&#39;,</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    text: &#39;English&#39;,</span>
<span class="line">    event: &#39;en&#39;,</span>
<span class="line">  },</span>
<span class="line">];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>The i18n introduced in [src/locales/setupI18n.ts] does not need to be modified</p><h3 id="language-files" tabindex="-1"><a class="header-anchor" href="#language-files"><span>Language files</span></a></h3><p>In [src/locales/lang/] you can configure the specific language</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># locales/lang/</span>
<span class="line"></span>
<span class="line"># 中文语言</span>
<span class="line">zh_CN:</span>
<span class="line">  component: 组件相关</span>
<span class="line">  layout: 布局相关</span>
<span class="line">  routes: 路由菜单相关</span>
<span class="line">  sys: 系统页面相关</span>
<span class="line"></span>
<span class="line">en: 同上</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="language-import-logic-description" tabindex="-1"><a class="header-anchor" href="#language-import-logic-description"><span>Language import logic description</span></a></h3><ol><li>initialization</li></ol><p>In the root language file in [src/locales/setupI18n] you can see</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const defaultLocal = await import(\`./lang/\${locale}.ts\`);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><p>This will import <code>src/locales/lang/{lang}.ts</code>the file language pack, which will import all files in the corresponding language.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { genMessage } from &#39;../helper&#39;;</span>
<span class="line">import antdLocale from &#39;ant-design-vue/es/locale/zh_CN&#39;;</span>
<span class="line">import momentLocale from &#39;moment/dist/locale/zh-cn&#39;;</span>
<span class="line"></span>
<span class="line">const modules = import.meta.globEager(&#39;./zh_CN/**/*.ts&#39;);</span>
<span class="line">export default {</span>
<span class="line">  message: {</span>
<span class="line">    ...genMessage(modules, &#39;zh_CN&#39;),</span>
<span class="line">    antdLocale,</span>
<span class="line">  },</span>
<span class="line">  momentLocale,</span>
<span class="line">  momentLocaleName: &#39;zh-cn&#39;,</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>And convert it into a multi-level directory structure according to the corresponding</p><p>example:</p><p><code>lang/zh_CN/components/modal.ts</code>The file content is</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  title: &#39;标题&#39;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Then use it directly to <code>t(&#39;components.modal.title&#39;)</code>obtain it.</p><p>The advantage of this is that it is easier to manage multiple languages ​​for large projects. If you don&#39;t need to divide it into modules, you can just import it manually.</p><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>use</span></a></h2><p><strong>Be careful not to introduce useI18n of vue-i18n</strong> when introducing the project<code>useI18n</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { useI18n } from &#39;/@/hooks/web/useI18n&#39;;</span>
<span class="line"></span>
<span class="line">const { t } = useI18n();</span>
<span class="line"></span>
<span class="line">const title = t(&#39;components.modal.title&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="switch-language" tabindex="-1"><a class="header-anchor" href="#switch-language"><span>Switch language</span></a></h2><p>To switch languages, you need to use [src/locales/useLocale.ts]</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { useLocale } from &#39;/@/locales/useLocale&#39;;</span>
<span class="line"></span>
<span class="line">const { changeLocale } = useLocale();</span>
<span class="line"></span>
<span class="line">changeLocale(&#39;en&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="added" tabindex="-1"><a class="header-anchor" href="#added"><span>Added</span></a></h2><h3 id="language-files-1" tabindex="-1"><a class="header-anchor" href="#language-files-1"><span>Language files</span></a></h3><p>Just add the corresponding language file in [src/locales/lang/]</p><h3 id="add-new-language" tabindex="-1"><a class="header-anchor" href="#add-new-language"><span>Add new language</span></a></h3><p>Currently, the project comes <code>zh_CN</code>with only <code>en</code>two languages:</p><p>If you need to add new ones, just follow the steps below.</p><ol><li>Add the corresponding language directory and language files under [src/locales/lang/] and import the corresponding language packages of ant-design-vue and moment</li><li>Add preview type definition in [types/config.d.ts]</li><li>Modify the language configuration in [src/settings/localeSetting.ts]</li></ol><h2 id="remotely-read-language-data" tabindex="-1"><a class="header-anchor" href="#remotely-read-language-data"><span>Remotely read language data</span></a></h2><p>Currently, the project will <code>src/main.ts</code>wait for <code>setupI18n</code>this function to execute before rendering the interface, so you only need to send an ajax request in setupI18n to set the corresponding data to the i18n instance.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// src/main.ts</span>
<span class="line">await setupI18n(app);</span>
<span class="line"></span>
<span class="line">app.mount(&#39;#app&#39;, true);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="setupi18n-function" tabindex="-1"><a class="header-anchor" href="#setupi18n-function"><span>setupI18n function</span></a></h3><p>Code: [src/locales/setupI18n/]</p><p>As shown below, a default language will be set here first. The default language can be set locally or you can wait for the interface to return the default language here.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// setup i18n instance with glob</span>
<span class="line">export async function setupI18n(app: App) {</span>
<span class="line">  const options = await createI18nOptions();</span>
<span class="line">  i18n = createI18n(options) as I18n;</span>
<span class="line">  app.use(i18n);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">async function createI18nOptions(): Promise&lt;I18nOptions&gt; {</span>
<span class="line">  const locale = localeStore.getLocale;</span>
<span class="line"></span>
<span class="line">  // 这里改成接口获取</span>
<span class="line">  const defaultLocal = await import(\`./lang/\${locale}.ts\`);</span>
<span class="line">  const message = defaultLocal.default?.message ?? {};</span>
<span class="line"></span>
<span class="line">  return {</span>
<span class="line">    legacy: false,</span>
<span class="line">    locale,</span>
<span class="line">    fallbackLocale: fallback,</span>
<span class="line">    messages: {</span>
<span class="line">      [locale]: message,</span>
<span class="line">    },</span>
<span class="line">    availableLocales: availableLocales,</span>
<span class="line">    sync: true,</span>
<span class="line">    silentTranslationWarn: true,</span>
<span class="line">    missingWarn: false,</span>
<span class="line">    silentFallbackWarn: true,</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="changelocale-function" tabindex="-1"><a class="header-anchor" href="#changelocale-function"><span>changeLocale function</span></a></h3><p>Code: [src/locales/useLocale/]</p><p>When you manually switch the language <code>useLocale</code>, the function will be triggered. useLocale is also an asynchronous function. You only need to wait for the interface to return the response data before setting it.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">async function changeLocale(locale: LocaleType) {</span>
<span class="line">  const globalI18n = i18n.global;</span>
<span class="line">  const currentLocale = unref(globalI18n.locale);</span>
<span class="line">  if (currentLocale === locale) return locale;</span>
<span class="line"></span>
<span class="line">  if (loadLocalePool.includes(locale)) {</span>
<span class="line">    setI18nLanguage(locale);</span>
<span class="line">    return locale;</span>
<span class="line">  }</span>
<span class="line">  // 这里改成接口获取</span>
<span class="line">  const langModule = ((await import(\`./lang/\${locale}.ts\`)) as any).default as LangModule;</span>
<span class="line">  if (!langModule) return;</span>
<span class="line"></span>
<span class="line">  const { message, momentLocale, momentLocaleName } = langModule;</span>
<span class="line"></span>
<span class="line">  globalI18n.setLocaleMessage(locale, message);</span>
<span class="line">  moment.updateLocale(momentLocaleName, momentLocale);</span>
<span class="line">  loadLocalePool.push(locale);</span>
<span class="line"></span>
<span class="line">  setI18nLanguage(locale);</span>
<span class="line">  return locale;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,70)]))}const p=e(i,[["render",c]]),r=JSON.parse('{"path":"/syncadmin/front-end-configuration/globalization.html","title":"globalization","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/front-end-configuration/globalization.md"}');export{p as comp,r as data};
