import{_ as s,c as e,a,o as i}from"./app-CU20V-HQ.js";const l={};function p(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="micro-frontend-qiankun-integration" tabindex="-1"><a class="header-anchor" href="#micro-frontend-qiankun-integration"><span>Micro frontend (qiankun) integration</span></a></h1><p>vue3-admin-jeecg has integrated qiankun by default. For detailed instructions, please refer to <a href="https://qiankun.umijs.org/zh/" target="_blank" rel="noopener noreferrer">the qiankun official website</a> . The integration steps are as follows</p><h2 id="_1-install-qiankun" tabindex="-1"><a class="header-anchor" href="#_1-install-qiankun"><span>1. Install <a href="https://qiankun.umijs.org/zh" target="_blank" rel="noopener noreferrer">Qiankun</a></span></a></h2><p>Create a qiankun-jeecg folder in the outer layer of the front-end project and copy vue3-admin-jeecg to this folder as shown below<br><img src="https://lfs.k.topthink.com/lfs/a42b7782b079d05349a8a7f39a7c19ca9cf9c4fda5c5c274250a60dd9f0fa777.dat" alt=""></p><p>Enter the qiankun-vue3-jeecg/vue3-admin-jeecg directory and execute the following command</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">pnpm add qiankun</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h2 id="_2-register-the-micro-application-in-the-main-application" tabindex="-1"><a class="header-anchor" href="#_2-register-the-micro-application-in-the-main-application"><span>2. Register the micro application in the main application</span></a></h2><ul><li><strong>Release the commented code in the src/qiankun/apps.ts file</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> *微应用apps</span>
<span class="line"> * @name: 微应用名称 - 具有唯一性</span>
<span class="line"> * @entry: 微应用入口.必选 - 通过该地址加载微应用，</span>
<span class="line"> * @container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上</span>
<span class="line"> * @activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用</span>
<span class="line"> */</span>
<span class="line">//子应用列表</span>
<span class="line">const _apps = [];</span>
<span class="line">for (const key in process.env) {</span>
<span class="line">    if (key.includes(&#39;VUE_APP_SUB_&#39;)) {</span>
<span class="line">        const name = key.split(&#39;VUE_APP_SUB_&#39;)[1];</span>
<span class="line">        const obj = {</span>
<span class="line">            name,</span>
<span class="line">            entry: process.env[key],</span>
<span class="line">            container: &#39;#content&#39;,</span>
<span class="line">            activeRule: name,</span>
<span class="line">        };</span>
<span class="line">        _apps.push(obj)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">export const apps = _apps;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Release the commented code in the src/qiankun/state.ts file</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> *公共数据</span>
<span class="line"> */</span>
<span class="line">import {initGlobalState} from &#39;qiankun&#39;;</span>
<span class="line">import {store} from &#39;/@/store&#39;;</span>
<span class="line">import {router} from &#39;/@/router&#39;;</span>
<span class="line">import { getToken } from &#39;/@/utils/auth&#39;;</span>
<span class="line">//定义传入子应用的数据</span>
<span class="line">export function getProps() {</span>
<span class="line">    return {</span>
<span class="line">        data: {</span>
<span class="line">            publicPath:&#39;/&#39;,</span>
<span class="line">            token: getToken(),</span>
<span class="line">            store,</span>
<span class="line">            router</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 定义全局状态，并返回通信方法,在主应用使用，微应用通过 props 获取通信方法。</span>
<span class="line"> * @param state 主应用穿的公共数据</span>
<span class="line"> */</span>
<span class="line">export function initGlState(info = {userName: &#39;admin&#39;}) {</span>
<span class="line">    // 初始化state</span>
<span class="line">    const actions = initGlobalState(info);</span>
<span class="line">    // 设置新的值</span>
<span class="line">    actions.setGlobalState(info);</span>
<span class="line">    // 注册 观察者 函数 - 响应 globalState 变化，在 globalState 发生改变时触发该 观察者 函数。</span>
<span class="line">    actions.onGlobalStateChange((newState, prev) =&gt; {</span>
<span class="line">        // state: 变更后的状态; prev 变更前的状态</span>
<span class="line">        console.info(&quot;newState&quot;, newState)</span>
<span class="line">        console.info(&quot;prev&quot;, prev)</span>
<span class="line">        for (const key in newState) {</span>
<span class="line">            console.info(&quot;onGlobalStateChange&quot;, key)</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Release the commented code in the src/qiankun/index.ts file</strong></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * qiankun配置</span>
<span class="line"> */</span>
<span class="line">import {registerMicroApps, setDefaultMountApp, start, runAfterFirstMounted, addGlobalUncaughtErrorHandler} from &#39;qiankun&#39;;</span>
<span class="line">import {apps} from &#39;./apps&#39;;</span>
<span class="line">import {getProps, initGlState} from &#39;./state&#39;;</span>
<span class="line">/**</span>
<span class="line"> * 重构apps</span>
<span class="line"> */</span>
<span class="line">function filterApps() {</span>
<span class="line">    apps.forEach((item) =&gt; {</span>
<span class="line">        //主应用需要传递给微应用的数据。</span>
<span class="line">        item.props = getProps();</span>
<span class="line">        //微应用触发的路由规则</span>
<span class="line">        item.activeRule = genActiveRule(&#39;/&#39; + item.activeRule);</span>
<span class="line">    });</span>
<span class="line">    return apps;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 路由监听</span>
<span class="line"> * @param {*} routerPrefix 前缀</span>
<span class="line"> */</span>
<span class="line">function genActiveRule(routerPrefix) {</span>
<span class="line">    return location =&gt; location.pathname.startsWith(routerPrefix);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 微应用注册</span>
<span class="line"> */</span>
<span class="line">function registerApps() {</span>
<span class="line">    const _apps = filterApps();</span>
<span class="line">    registerMicroApps(_apps,</span>
<span class="line">        {</span>
<span class="line">            beforeLoad: [</span>
<span class="line">                loadApp =&gt; {</span>
<span class="line">                    console.log(&#39;before load&#39;, loadApp);</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            beforeMount: [</span>
<span class="line">                mountApp =&gt; {</span>
<span class="line">                    console.log(&#39;before mount&#39;, mountApp);</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            afterMount: [</span>
<span class="line">                mountApp =&gt; {</span>
<span class="line">                    console.log(&#39;before mount&#39;, mountApp);</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            afterUnmount: [</span>
<span class="line">                unloadApp =&gt; {</span>
<span class="line">                    console.log(&#39;after unload&#39;, unloadApp);</span>
<span class="line">                }</span>
<span class="line">            ]</span>
<span class="line">        });</span>
<span class="line">    // 设置默认子应用,与 genActiveRule中的参数保持一致</span>
<span class="line">    // setDefaultMountApp();</span>
<span class="line">    // 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。</span>
<span class="line">    runAfterFirstMounted(() =&gt; console.log(&#39;开启监控&#39;));</span>
<span class="line">    // 添加全局的未捕获异常处理器。</span>
<span class="line">    addGlobalUncaughtErrorHandler(event =&gt; console.log(event));</span>
<span class="line">    // 定义全局状态</span>
<span class="line">    initGlState();</span>
<span class="line">    //启动qiankun</span>
<span class="line">    start({});</span>
<span class="line">}</span>
<span class="line">export default registerApps;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Release the code commented onMounted in the src/layouts/default/content/index.vue file</strong> ( <em>introduce the qiankun registration file</em> )</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div id=&quot;content&quot; class=&quot;app-view-box&quot; v-if=&quot;openQianKun==&#39;true&#39;&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">onMounted(() =&gt; {</span>
<span class="line">   //注册openQianKun</span>
<span class="line">    if (openQianKun==&#39;true&#39;) {</span>
<span class="line">        if (!window.qiankunStarted) {</span>
<span class="line">            window.qiankunStarted = true;</span>
<span class="line">            registerApps();</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Set the global control switch</strong><br> . In the .env file, set the qiankun global control switch to true</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">VITE_GLOB_APP_OPEN_QIANKUN=true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Set the sub-application entry address. Set the sub-application entry address of</strong> <strong>the development environment</strong><br> in the .env.development file . (The routing address should be consistent with the end of VITE_APP_SUB_, such as qiankun-app below)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,qiankun-app为子应用的项目名称,也是子应用的路由父路径</span>
<span class="line">VITE_APP_SUB_qiankun-app = &#39;//localhost:8001/qiankun-app&#39;。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>The .env.production file sets the entry address of <strong>the production environment</strong> application. (The routing address should be consistent with the end of VITE_APP_SUB_, such as qiankun-app below)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,qiankun-app为子应用的项目名称,也是子应用的路由父路径</span>
<span class="line">VITE_APP_SUB_qiankun-app = &#39;线上地址/qiankun-app&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>src/main.ts add registerApps()</strong><br><img src="https://lfs.k.topthink.com/lfs/411480376f634e11bc18881850447ef4a9ba708d47768a624ca1ebaf16ef96e2.dat" alt=""></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">+ import registerApps from &#39;/@/qiankun/index&#39;;</span>
<span class="line"></span>
<span class="line">async function bootstrap() {</span>
<span class="line">+  registerApps();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Modify the package output location</strong><br> Modify the outputDir content definition in vue3-admin-jeecg/build/constant.ts, and output the packaged content to the main directory under the qiankun-vue3-jeecg folder</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export const OUTPUT_DIR = &#39;../dist/main&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li><strong>Add the global startup package file (package.json)</strong> storage location as shown below</li></ul><p>The file contents are as follows</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;name&quot;: &quot;qiankun-jeecg&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;1.0.0&quot;,</span>
<span class="line">  &quot;main&quot;: &quot;index.js&quot;,</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line">    &quot;install&quot;: &quot;npm-run-all install:* &quot;,</span>
<span class="line">    &quot;install:main&quot;: &quot;cd ant-design-jeecg-vue &amp;&amp; npm install&quot;,</span>
<span class="line">    &quot;install:sub01&quot;: &quot;cd jeecg-app-1 &amp;&amp; npm install &quot;,</span>
<span class="line">    &quot;start&quot;: &quot;npm-run-all start:* &quot;,</span>
<span class="line">    &quot;start:main&quot;: &quot;cd ant-design-jeecg-vue &amp;&amp; start cmd /k npm run serve&quot;,</span>
<span class="line">    &quot;start:sub01&quot;: &quot;cd jeecg-app-1 &amp;&amp; start cmd /k npm run serve&quot;,</span>
<span class="line">    &quot;build&quot;: &quot;npm-run-all build:* &quot;,</span>
<span class="line">    &quot;build:main&quot;: &quot;cd ant-design-jeecg-vue &amp;&amp; npm run build&quot;,</span>
<span class="line">    &quot;build:sub01&quot;: &quot;cd jeecg-app-1 &amp;&amp; npm run build&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;devDependencies&quot;: {</span>
<span class="line">    &quot;npm-run-all&quot;: &quot;^4.1.5&quot;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_3-sub-application-transformation" tabindex="-1"><a class="header-anchor" href="#_3-sub-application-transformation"><span>3 Sub-application transformation</span></a></h2><ul><li>Create a new public-path.js file in the sub-application src directory with the following content</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//用于修改运行时的 publicPath</span>
<span class="line">if (window.__POWERED_BY_QIANKUN__) {</span>
<span class="line">  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>Modify the main.js file</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function render(props = {}) {</span>
<span class="line">    const {container} = props;</span>
<span class="line">    instance = new Vue({</span>
<span class="line">        router,</span>
<span class="line">        render: (h) =&gt; h(App),</span>
<span class="line">    }).$mount(container ? container.querySelector(&#39;#app&#39;) : &#39;#app&#39;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 非qiankun独立启动</span>
<span class="line"> */</span>
<span class="line">if (!window.__POWERED_BY_QIANKUN__) {</span>
<span class="line">    render();</span>
<span class="line">}</span>
<span class="line">/**</span>
<span class="line"> * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。</span>
<span class="line"> * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。</span>
<span class="line"> */</span>
<span class="line">export async function bootstrap(props) {</span>
<span class="line">  common.setCommonData(props)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法</span>
<span class="line"> */</span>
<span class="line">export async function mount(props) {</span>
<span class="line">  common.initGlState(props)</span>
<span class="line">  render(props);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例</span>
<span class="line"> */</span>
<span class="line">export async function unmount() {</span>
<span class="line">    instance.$destroy();</span>
<span class="line">    instance.$el.innerHTML = &#39;&#39;;</span>
<span class="line">    instance = null;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效</span>
<span class="line"> */</span>
<span class="line">export async function update(props) {</span>
<span class="line">    common.setCommonData(props)</span>
<span class="line">    common.initGlState(props)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>Packaging configuration modification ( <code>vue.config.js</code>)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const { name } = require(&#39;./package&#39;);</span>
<span class="line">module.exports = {</span>
<span class="line">  devServer: {</span>
<span class="line">    headers: {</span>
<span class="line">      // 主应用获取子应用时跨域响应头</span>
<span class="line">      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  configureWebpack: {</span>
<span class="line">    output: {</span>
<span class="line">      library: \`\${name}-[name]\`,</span>
<span class="line">      libraryTarget: &#39;umd&#39;, // 把微应用打包成 umd 库格式</span>
<span class="line">      jsonpFunction: \`webpackJsonp_\${name}\`,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>The complete configuration of sub-application vue.config.js is as follows</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const path = require(&quot;path&quot;);</span>
<span class="line">const packageName = require(&quot;./package.json&quot;).name;</span>
<span class="line">const node_env = process.env.NODE_ENV === &quot;production&quot;;</span>
<span class="line">// const baseUrl = process.env.VUE_APP_BASE_URL;</span>
<span class="line">const baseUrl = &quot;/&quot;;</span>
<span class="line">const resolve = (dir) =&gt; path.join(__dirname, dir);</span>
<span class="line">module.exports = {</span>
<span class="line">  //打包输入目录</span>
<span class="line">  outputDir: \`../dist/\${packageName}\`,</span>
<span class="line">  publicPath: node_env ? baseUrl : &quot;/&quot;,</span>
<span class="line">  assetsDir: &quot;static&quot;,</span>
<span class="line">  configureWebpack: {</span>
<span class="line">    resolve: {</span>
<span class="line">      alias: {</span>
<span class="line">        &quot;@&quot;: resolve(&quot;src&quot;),</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    output: {</span>
<span class="line">      library: \`\${packageName}-[name]\`,</span>
<span class="line">      libraryTarget: &quot;umd&quot;, // 把微应用打包成 umd 库格式</span>
<span class="line">      jsonpFunction: \`webpackJsonp_\${packageName}\`,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  devServer: {</span>
<span class="line">    hot: true,</span>
<span class="line">    disableHostCheck: true,</span>
<span class="line">    host:&#39;localhost&#39;,</span>
<span class="line">    port: 8092,</span>
<span class="line">    headers: {</span>
<span class="line">      &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;, // 主应用获取子应用时跨域响应头</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="effect" tabindex="-1"><a class="header-anchor" href="#effect"><span>Effect:</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/99e8a7fc666bf92b690c5ed9cd5bbf8272ec9952ee2df72ab50a5599fae3ec91.dat" alt=""></p><h4 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>Notice</span></a></h4><ul><li>jeecgBoot-vue3 can currently only be used as the main application, not as a sub-application.</li></ul>`,58)]))}const t=s(l,[["render",p]]),r=JSON.parse('{"path":"/syncadmin/front-end-experience/micro-frontend-qiankun-integration.html","title":"Micro frontend (qiankun) integration","lang":"ko-KR","frontmatter":{"order":12},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/front-end-experience/micro-frontend-qiankun-integration.md"}');export{t as comp,r as data};
