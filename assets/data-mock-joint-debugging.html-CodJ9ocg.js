import{_ as s,c as e,a,o as i}from"./app-CU20V-HQ.js";const l={};function r(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="data-mock-joint-debugging" tabindex="-1"><a class="header-anchor" href="#data-mock-joint-debugging"><span>Data mock &amp; joint debugging</span></a></h1><h2 id="development-environment" tabindex="-1"><a class="header-anchor" href="#development-environment"><span>Development Environment</span></a></h2><p>If the front-end application and the back-end API server are not running on the same host, you need to proxy the API requests to the API server in the development environment.</p><p>If it is the same host, you can directly request the specific interface address.</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><p>In the development environment, the interface address is in the project root directory</p><p><a href="https://github.com/vbenjs/vue-vben-admin/tree/main/.env.development" target="_blank" rel="noopener noreferrer">.env.development</a> file configuration</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># vite 本地跨域代理</span>
<span class="line">VITE_PROXY=[[&quot;/basic-api&quot;,&quot;http://localhost:3000&quot;]]</span>
<span class="line"># 接口地址</span>
<span class="line">VITE_GLOB_API_URL=/api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ul><li>If the fields in the .env file are strings, there is no need to add quotes. By default, all fields are strings.</li><li>VITE_PROXY cannot wrap</li></ul></div><h3 id="cross-domain-processing" tabindex="-1"><a class="header-anchor" href="#cross-domain-processing"><span>Cross-domain processing</span></a></h3><p>If <code>src/api/</code>the interface below is the code below and the <strong>.env.development</strong> file is configured with the following comments, the address you see in the console is <code>http://localhost:3100/basic-api/login</code>.</p><p>Since <code>/basic-api</code>it matches the settings <code>VITE_PROXY</code>, the above actually requests <a href="http://localhost:3000/login" target="_blank" rel="noopener noreferrer">http://localhost:3000/login</a> , which also solves the cross-domain problem. ( <strong>3100</strong> is the project port number, and <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> is the target address of the PROXY proxy)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// .env.development</span>
<span class="line">// VITE_PROXY=[[&quot;/basic-api&quot;,&quot;http://localhost:3000&quot;]]</span>
<span class="line">// VITE_GLOB_API_URL=/basic-api</span>
<span class="line"></span>
<span class="line">enum Api {</span>
<span class="line">  Login = &#39;/login&#39;,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * @description: 用户登陆</span>
<span class="line"> */</span>
<span class="line">export function loginApi(params: LoginParams) {</span>
<span class="line">  return http.request&lt;LoginResultModel&gt;({</span>
<span class="line">    url: Api.Login,</span>
<span class="line">    method: &#39;POST&#39;,</span>
<span class="line">    params,</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="no-cross-domain-configuration" tabindex="-1"><a class="header-anchor" href="#no-cross-domain-configuration"><span>No cross-domain configuration</span></a></h3><p>If there is no cross-domain problem, you can ignore the <strong>VITE_PROXY</strong> configuration and directly set the interface address to <strong>VITE_GLOB_API_URL</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 例如接口地址为 http://localhost:3000 则</span>
<span class="line">VITE_GLOB_API_URL=http://localhost:3000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>If there is a cross-domain problem, just set <strong>VITE_GLOB_API_URL</strong> to a value that matches the first item in one of the arrays in <strong>VITE_PROXY .</strong></p><p>The interface address below is set to <code>/basic-api</code>, when the request is sent, it will pass through Vite&#39;s proxy, match the <strong>VITE_PROXY</strong> rule we set, and <code>/basic-api</code>convert it to <code>http://localhost:3000</code>make a request</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 例如接口地址为 http://localhost:3000 则</span>
<span class="line">VITE_PROXY=[[&quot;/basic-api&quot;,&quot;http://localhost:3000&quot;]]</span>
<span class="line"># 接口地址</span>
<span class="line">VITE_GLOB_API_URL=/basic-api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="analysis-of-cross-domain-principles" tabindex="-1"><a class="header-anchor" href="#analysis-of-cross-domain-principles"><span>Analysis of cross-domain principles</span></a></h3><p>In <code>vite.config.ts</code>the configuration file, the server&#39;s proxy function is provided to proxy API requests.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">server: {</span>
<span class="line">  proxy: {</span>
<span class="line">    &quot;/basic-api&quot;:{</span>
<span class="line">      target: &#39;http://localhost:3000&#39;,</span>
<span class="line">      changeOrigin: true,</span>
<span class="line">      ws: true,</span>
<span class="line">      rewrite: (path) =&gt; path.replace(new RegExp(\`^/basic-api\`), &#39;&#39;),</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>From the browser console&#39;s Network, the request is <code>http://localhost:3000/basic-api/xxx</code>, this is because the proxy configuration will not change the URL of the local request.</p></div><h2 id="production-environment" tabindex="-1"><a class="header-anchor" href="#production-environment"><span>Production Environment</span></a></h2><p><a href="https://github.com/vbenjs/vue-vben-admin/tree/main/.env.production" target="_blank" rel="noopener noreferrer">The production environment interface address is configured in the .env.production</a> file in the project root directory .</p><p>The production environment interface address value needs to be modified <strong>VITE_GLOB_API_URL</strong> . If cross-domain problems occur, you can use nginx or enable cors in the background to handle it.</p><div class="hint-container tip"><p class="hint-container-title">How to modify the address after packaging?</p><p><strong>Variables starting with VITE_GLOB_* will be injected into the</strong> <strong>_app.config.js</strong> file during packaging .</p><p>After modifying the corresponding interface address in <strong>dist/_app.config.js, just refresh the page. There is no need to package multiple times according to different environments. One package can be used for deployment in multiple different interface environments.</strong></p></div><h2 id="interface-request" tabindex="-1"><a class="header-anchor" href="#interface-request"><span>Interface Request</span></a></h2><p>In vue-vben-admin:</p><ol><li>Page interaction operations;</li><li>Call the unified management API request function;</li><li>Use the encapsulated axios.ts to send the request;</li><li>Get the data returned by the server</li><li>Update data;</li></ol><p>The interfaces are uniformly stored in <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/api" target="_blank" rel="noopener noreferrer">src/api/</a> and managed below</p><p>Take the login interface as an example:</p><p>Create a new module file in <strong>src/api/</strong> , where it is best to define the types of parameters and return values ​​for easy verification. Although it is troublesome, it is very convenient to maintain the fields later.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Type definition files can be extracted and managed in a unified manner. For details, refer to the project</p></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">import { LoginParams, LoginResultModel } from &#39;./model/userModel&#39;;</span>
<span class="line"></span>
<span class="line">enum Api {</span>
<span class="line">  Login = &#39;/login&#39;,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function loginApi(params: LoginParams) {</span>
<span class="line">  return defHttp.request&lt;LoginResultModel&gt;({</span>
<span class="line">    url: Api.Login,</span>
<span class="line">    method: &#39;POST&#39;,</span>
<span class="line">    params,</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="axios-configuration" tabindex="-1"><a class="header-anchor" href="#axios-configuration"><span>axios configuration</span></a></h2><p><strong>Axios</strong> request encapsulation is stored in <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios" target="_blank" rel="noopener noreferrer">the src/utils/http/axios</a> folder</p><p>Except for <code>index.ts</code>the file content, which needs to be modified according to the project, the rest of the files do not need to be modified.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">├── Axios.ts // axios实例</span>
<span class="line">├── axiosCancel.ts // axiosCancel实例，取消重复请求</span>
<span class="line">├── axiosTransform.ts // 数据转换类</span>
<span class="line">├── checkStatus.ts // 返回状态值校验</span>
<span class="line">├── index.ts // 接口返回统一处理</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="index-ts-configuration-instructions" tabindex="-1"><a class="header-anchor" href="#index-ts-configuration-instructions"><span>index.ts configuration instructions</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const axios = new VAxios({</span>
<span class="line">  // 认证方案，例如: Bearer</span>
<span class="line">  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes</span>
<span class="line">  authenticationScheme: &#39;&#39;,</span>
<span class="line">  // 接口超时时间 单位毫秒</span>
<span class="line">  timeout: 10 * 1000,</span>
<span class="line">  // 接口可能会有通用的地址部分，可以统一抽取出来</span>
<span class="line">  prefixUrl: prefix,</span>
<span class="line">  headers: { &#39;Content-Type&#39;: ContentTypeEnum.JSON },</span>
<span class="line">  // 数据处理方式，见下方说明</span>
<span class="line">  transform,</span>
<span class="line">  // 配置项，下面的选项都可以在独立的接口请求中覆盖</span>
<span class="line">  requestOptions: {</span>
<span class="line">    // 默认将prefix 添加到url</span>
<span class="line">    joinPrefix: true,</span>
<span class="line">    // 是否返回原生响应头 比如：需要获取响应头时使用该属性</span>
<span class="line">    isReturnNativeResponse: false,</span>
<span class="line">    // 需要对返回数据进行处理</span>
<span class="line">    isTransformRequestResult: true,</span>
<span class="line">    // post请求的时候添加参数到url</span>
<span class="line">    joinParamsToUrl: false,</span>
<span class="line">    // 格式化提交参数时间</span>
<span class="line">    formatDate: true,</span>
<span class="line">    // 消息提示类型</span>
<span class="line">    errorMessageMode: &#39;message&#39;,</span>
<span class="line">    // 接口地址</span>
<span class="line">    apiUrl: globSetting.apiUrl,</span>
<span class="line">    //  是否加入时间戳</span>
<span class="line">    joinTime: true,</span>
<span class="line">    // 忽略重复请求</span>
<span class="line">    ignoreCancelToken: true,</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>Transform data processing instructions</strong></p><p>For type definition, see <strong>the axiosTransform.ts</strong> file</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export abstract class AxiosTransform {</span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求之前处理配置</span>
<span class="line">   */</span>
<span class="line">  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) =&gt; AxiosRequestConfig;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求成功处理</span>
<span class="line">   */</span>
<span class="line">  transformRequestData?: (res: AxiosResponse&lt;Result&gt;, options: RequestOptions) =&gt; any;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求失败处理</span>
<span class="line">   */</span>
<span class="line">  requestCatch?: (e: Error) =&gt; Promise&lt;any&gt;;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求之前的拦截器</span>
<span class="line">   */</span>
<span class="line">  requestInterceptors?: (config: AxiosRequestConfig) =&gt; AxiosRequestConfig;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求之后的拦截器</span>
<span class="line">   */</span>
<span class="line">  responseInterceptors?: (res: AxiosResponse&lt;any&gt;) =&gt; AxiosResponse&lt;any&gt;;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求之前的拦截器错误处理</span>
<span class="line">   */</span>
<span class="line">  requestInterceptorsCatch?: (error: Error) =&gt; void;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求之后的拦截器错误处理</span>
<span class="line">   */</span>
<span class="line">  responseInterceptorsCatch?: (error: Error) =&gt; void;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>The project default transform processing logic can be processed according to the respective project. The part that generally needs to be changed is the code below, see the code comment description</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * @description: 数据处理，方便区分多种处理方式</span>
<span class="line"> */</span>
<span class="line">const transform: AxiosTransform = {</span>
<span class="line">  /**</span>
<span class="line">   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误</span>
<span class="line">   */</span>
<span class="line">  transformRequestHook: (res: AxiosResponse&lt;Result&gt;, options: RequestOptions) =&gt; {</span>
<span class="line">    const { t } = useI18n();</span>
<span class="line">    const { isTransformResponse, isReturnNativeResponse } = options;</span>
<span class="line">    // 是否返回原生响应头 比如：需要获取响应头时使用该属性</span>
<span class="line">    if (isReturnNativeResponse) {</span>
<span class="line">      return res;</span>
<span class="line">    }</span>
<span class="line">    // 不进行任何处理，直接返回</span>
<span class="line">    // 用于页面代码可能需要直接获取code，data，message这些信息时开启</span>
<span class="line">    if (!isTransformResponse) {</span>
<span class="line">      return res.data;</span>
<span class="line">    }</span>
<span class="line">    // 错误的时候返回</span>
<span class="line"></span>
<span class="line">    const { data } = res;</span>
<span class="line">    if (!data) {</span>
<span class="line">      // return &#39;[HTTP] Request has no return value&#39;;</span>
<span class="line">      throw new Error(t(&#39;sys.api.apiRequestFailed&#39;));</span>
<span class="line">    }</span>
<span class="line">    //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式</span>
<span class="line">    const { code, result, message } = data;</span>
<span class="line"></span>
<span class="line">    // 这里逻辑可以根据项目进行修改</span>
<span class="line">    const hasSuccess = data &amp;&amp; Reflect.has(data, &#39;code&#39;) &amp;&amp; code === ResultEnum.SUCCESS;</span>
<span class="line">    if (hasSuccess) {</span>
<span class="line">      return result;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 在此处根据自己项目的实际情况对不同的code执行不同的操作</span>
<span class="line">    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可</span>
<span class="line">    let timeoutMsg = &#39;&#39;;</span>
<span class="line">    switch (code) {</span>
<span class="line">      case ResultEnum.TIMEOUT:</span>
<span class="line">        timeoutMsg = t(&#39;sys.api.timeoutMessage&#39;);</span>
<span class="line">      default:</span>
<span class="line">        if (message) {</span>
<span class="line">          timeoutMsg = message;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误</span>
<span class="line">    // errorMessageMode=&#39;none&#39; 一般是调用时明确表示不希望自动弹出错误提示</span>
<span class="line">    if (options.errorMessageMode === &#39;modal&#39;) {</span>
<span class="line">      createErrorModal({ title: t(&#39;sys.api.errorTip&#39;), content: timeoutMsg });</span>
<span class="line">    } else if (options.errorMessageMode === &#39;message&#39;) {</span>
<span class="line">      createMessage.error(timeoutMsg);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    throw new Error(timeoutMsg || t(&#39;sys.api.apiRequestFailed&#39;));</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  // 请求之前处理config</span>
<span class="line">  beforeRequestHook: (config, options) =&gt; {</span>
<span class="line">    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;</span>
<span class="line"></span>
<span class="line">    if (joinPrefix) {</span>
<span class="line">      config.url = \`\${urlPrefix}\${config.url}\`;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    if (apiUrl &amp;&amp; isString(apiUrl)) {</span>
<span class="line">      config.url = \`\${apiUrl}\${config.url}\`;</span>
<span class="line">    }</span>
<span class="line">    const params = config.params || {};</span>
<span class="line">    if (config.method?.toUpperCase() === RequestEnum.GET) {</span>
<span class="line">      if (!isString(params)) {</span>
<span class="line">        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。</span>
<span class="line">        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));</span>
<span class="line">      } else {</span>
<span class="line">        // 兼容restful风格</span>
<span class="line">        config.url = config.url + params + \`\${joinTimestamp(joinTime, true)}\`;</span>
<span class="line">        config.params = undefined;</span>
<span class="line">      }</span>
<span class="line">    } else {</span>
<span class="line">      if (!isString(params)) {</span>
<span class="line">        formatDate &amp;&amp; formatRequestDate(params);</span>
<span class="line">        config.data = params;</span>
<span class="line">        config.params = undefined;</span>
<span class="line">        if (joinParamsToUrl) {</span>
<span class="line">          config.url = setObjToUrlParams(config.url as string, config.data);</span>
<span class="line">        }</span>
<span class="line">      } else {</span>
<span class="line">        // 兼容restful风格</span>
<span class="line">        config.url = config.url + params;</span>
<span class="line">        config.params = undefined;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    return config;</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 请求拦截器处理</span>
<span class="line">   */</span>
<span class="line">  requestInterceptors: (config, options) =&gt; {</span>
<span class="line">    // 请求之前处理config</span>
<span class="line">    const token = getToken();</span>
<span class="line">    if (token) {</span>
<span class="line">      // jwt token</span>
<span class="line">      config.headers.Authorization = options.authenticationScheme</span>
<span class="line">        ? \`\${options.authenticationScheme} \${token}\`</span>
<span class="line">        : token;</span>
<span class="line">    }</span>
<span class="line">    return config;</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 响应拦截器处理</span>
<span class="line">   */</span>
<span class="line">  responseInterceptors: (res: AxiosResponse&lt;any&gt;) =&gt; {</span>
<span class="line">    return res;</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * @description: 响应错误处理</span>
<span class="line">   */</span>
<span class="line">  responseInterceptorsCatch: (error: any) =&gt; {</span>
<span class="line">    const { t } = useI18n();</span>
<span class="line">    const errorLogStore = useErrorLogStoreWithOut();</span>
<span class="line">    errorLogStore.addAjaxErrorInfo(error);</span>
<span class="line">    const { response, code, message, config } = error || {};</span>
<span class="line">    const errorMessageMode = config?.requestOptions?.errorMessageMode || &#39;none&#39;;</span>
<span class="line">    const msg: string = response?.data?.error?.message ?? &#39;&#39;;</span>
<span class="line">    const err: string = error?.toString?.() ?? &#39;&#39;;</span>
<span class="line">    let errMessage = &#39;&#39;;</span>
<span class="line"></span>
<span class="line">    try {</span>
<span class="line">      if (code === &#39;ECONNABORTED&#39; &amp;&amp; message.indexOf(&#39;timeout&#39;) !== -1) {</span>
<span class="line">        errMessage = t(&#39;sys.api.apiTimeoutMessage&#39;);</span>
<span class="line">      }</span>
<span class="line">      if (err?.includes(&#39;Network Error&#39;)) {</span>
<span class="line">        errMessage = t(&#39;sys.api.networkExceptionMsg&#39;);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      if (errMessage) {</span>
<span class="line">        if (errorMessageMode === &#39;modal&#39;) {</span>
<span class="line">          createErrorModal({ title: t(&#39;sys.api.errorTip&#39;), content: errMessage });</span>
<span class="line">        } else if (errorMessageMode === &#39;message&#39;) {</span>
<span class="line">          createMessage.error(errMessage);</span>
<span class="line">        }</span>
<span class="line">        return Promise.reject(error);</span>
<span class="line">      }</span>
<span class="line">    } catch (error) {</span>
<span class="line">      throw new Error(error);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    checkStatus(error?.response?.status, msg, errorMessageMode);</span>
<span class="line">    return Promise.reject(error);</span>
<span class="line">  },</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="changing-parameter-format" tabindex="-1"><a class="header-anchor" href="#changing-parameter-format"><span>Changing parameter format</span></a></h3><p>The project interface defaults to the Json parameter format, that is <code>headers: { &#39;Content-Type&#39;: ContentTypeEnum.JSON }</code>,</p><p>If you need to change to the format, just <code>form-data</code>change the headers <code>&#39;Content-Type</code>to<code>ContentTypeEnum.FORM_URLENCODED</code></p><h3 id="multiple-interface-addresses" tabindex="-1"><a class="header-anchor" href="#multiple-interface-addresses"><span>Multiple interface addresses</span></a></h3><p>When multiple interface addresses are needed in the project, you can export multiple axios instances in <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios/index.ts" target="_blank" rel="noopener noreferrer">src/utils/http/axios/index.ts</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 目前只导出一个默认实例，接口地址对应的是环境变量中的 VITE_GLOB_API_URL 接口地址</span>
<span class="line">export const defHttp = createAxios();</span>
<span class="line"></span>
<span class="line">// 需要有其他接口地址的可以在后面添加</span>
<span class="line"></span>
<span class="line">// other api url</span>
<span class="line">export const otherHttp = createAxios({</span>
<span class="line">  requestOptions: {</span>
<span class="line">    apiUrl: &#39;xxx&#39;,</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="delete-the-timestamp-parameter-carried-in-the-request-url" tabindex="-1"><a class="header-anchor" href="#delete-the-timestamp-parameter-carried-in-the-request-url"><span>Delete the timestamp parameter carried in the request URL</span></a></h3><p>If you do not need the default timestamp parameter on the URL<code>?_t=xxx</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const axios = new VAxios({</span>
<span class="line">  requestOptions: {</span>
<span class="line">    // 是否加入时间戳</span>
<span class="line">    joinTime: false,</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="mock-service" tabindex="-1"><a class="header-anchor" href="#mock-service"><span>Mock Service</span></a></h2><p>Mock data is an essential part of the front-end development process and a key link in separating front-end and back-end development. By simulating request data and even logic through pre-agreed interfaces with the server, front-end development can be independent and will not be blocked by the server&#39;s development process.</p><p>This project uses <a href="https://github.com/vbenjs/vite-plugin-mock" target="_blank" rel="noopener noreferrer">vite-plugin-mock</a> to perform mock data processing. <strong>The mock services in the project are divided into local and online</strong> .</p><h3 id="local-mock" tabindex="-1"><a class="header-anchor" href="#local-mock"><span>Local Mock</span></a></h3><p>The local mock uses Node.js middleware to intercept parameters (the reason for not using mock.js is that local development cannot see request parameters and response results).</p><h4 id="how-to-add-a-mock-interface" tabindex="-1"><a class="header-anchor" href="#how-to-add-a-mock-interface"><span>How to add a mock interface</span></a></h4><p>If you want to add mock data, just find the mock file in the root directory, add the corresponding interface, intercept it and simulate the data.</p><p>Create a new file in the mock folder</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The file will be automatically updated after it is added, without manual restart. You can view the log information in the code console. The mock folder will be automatically registered, excluding folders and files starting with _</p></div><p>example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { MockMethod } from &#39;vite-plugin-mock&#39;;</span>
<span class="line">import { resultPageSuccess } from &#39;../_util&#39;;</span>
<span class="line"></span>
<span class="line">const demoList = (() =&gt; {</span>
<span class="line">  const result: any[] = [];</span>
<span class="line">  for (let index = 0; index &lt; 60; index++) {</span>
<span class="line">    result.push({</span>
<span class="line">      id: \`\${index}\`,</span>
<span class="line">      beginTime: &#39;@datetime&#39;,</span>
<span class="line">      endTime: &#39;@datetime&#39;,</span>
<span class="line">      address: &#39;@city()&#39;,</span>
<span class="line">      name: &#39;@cname()&#39;,</span>
<span class="line">      &#39;no|100000-10000000&#39;: 100000,</span>
<span class="line">      &#39;status|1&#39;: [&#39;正常&#39;, &#39;启用&#39;, &#39;停用&#39;],</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">  return result;</span>
<span class="line">})();</span>
<span class="line"></span>
<span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    url: &#39;/api/table/getDemoList&#39;,</span>
<span class="line">    timeout: 1000,</span>
<span class="line">    method: &#39;get&#39;,</span>
<span class="line">    response: ({ query }) =&gt; {</span>
<span class="line">      const { page = 1, pageSize = 20 } = query;</span>
<span class="line">      return resultPageSuccess(page, pageSize, demoList);</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">] as MockMethod[];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The value of mock can directly use the syntax of <a href="https://github.com/nuysoft/Mock/wiki" target="_blank" rel="noopener noreferrer">mockjs</a> .</p></div><h4 id="interface-format" tabindex="-1"><a class="header-anchor" href="#interface-format"><span>Interface format</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  url: string; // mock 接口地址</span>
<span class="line">  method?: MethodType; // 请求方式</span>
<span class="line">  timeout?: number; // 延时时间</span>
<span class="line">  statusCode: number; // 响应状态码</span>
<span class="line">  response: ((opt: { // 响应结果</span>
<span class="line">      body: any;</span>
<span class="line">      query: any;</span>
<span class="line">  }) =&gt; any) | object;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="parameter-acquisition" tabindex="-1"><a class="header-anchor" href="#parameter-acquisition"><span>Parameter acquisition</span></a></h4><p><strong>GET interface:</strong> <code>({ query }) =&gt; { }</code></p><p><strong>POST interface:</strong> <code>({ body }) =&gt; { }</code></p><h4 id="util-description" tabindex="-1"><a class="header-anchor" href="#util-description"><span>util Description</span></a></h4><p>You can see it in <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_util.ts" target="_blank" rel="noopener noreferrer">the code</a></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>util is only used as service processing result data. It is not necessary. If you need to use it, you can encapsulate it yourself and change the corresponding fields to the return structure of the interface.</p></div><h4 id="match" tabindex="-1"><a class="header-anchor" href="#match"><span>match</span></a></h4><p>In <code>src/api</code>the following, if the interface matches the mock, the mock will be used first to respond.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">import { LoginParams, LoginResultModel } from &#39;./model/userModel&#39;;</span>
<span class="line"></span>
<span class="line">enum Api {</span>
<span class="line">  Login = &#39;/login&#39;,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * @description: user login api</span>
<span class="line"> */</span>
<span class="line">export function loginApi(params: LoginParams) {</span>
<span class="line">  return defHttp.request&lt;LoginResultModel&gt;(</span>
<span class="line">    {</span>
<span class="line">      url: Api.Login,</span>
<span class="line">      method: &#39;POST&#39;,</span>
<span class="line">      params,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      errorMessageMode: &#39;modal&#39;,</span>
<span class="line">    }</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line">// 会匹配到上方的</span>
<span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    url: &#39;/api/login&#39;,</span>
<span class="line">    timeout: 1000,</span>
<span class="line">    method: &#39;POST&#39;,</span>
<span class="line">    response: ({ body }) =&gt; {</span>
<span class="line">      return resultPageSuccess({});</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">] as MockMethod[];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="now-that-we-have-an-interface-how-do-we-remove-the-mock" tabindex="-1"><a class="header-anchor" href="#now-that-we-have-an-interface-how-do-we-remove-the-mock"><span>Now that we have an interface, how do we remove the mock?</span></a></h4><p>When the backend interface has been developed, you only need to remove the corresponding mock function.</p><p>Taking the above interface as an example, if the backend interface login has been developed, you only need to delete/comment out the following code</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    url: &#39;/api/login&#39;,</span>
<span class="line">    timeout: 1000,</span>
<span class="line">    method: &#39;POST&#39;,</span>
<span class="line">    response: ({ body }) =&gt; {</span>
<span class="line">      return resultPageSuccess({});</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">] as MockMethod[];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="online-mock" tabindex="-1"><a class="header-anchor" href="#online-mock"><span>Online mock</span></a></h3><p>Since this project is a demonstration project, mock data is also used online, so mocks are also integrated after packaging. Usually, the online project is generally a formal interface.</p><p>The online mock of the project uses <a href="https://github.com/nuysoft/Mock/wiki" target="_blank" rel="noopener noreferrer">mockjs</a> to simulate mock data.</p><h4 id="how-to-start-mock-online" tabindex="-1"><a class="header-anchor" href="#how-to-start-mock-online"><span>How to start mock online</span></a></h4><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Enabling mock online is only suitable for some simple sample websites and preview websites. <strong>Do not enable it in a formal production environment!!!</strong></p></div><ol><li><code>VITE_USE_MOCK</code>Modify the value of true in the .env.production file</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">VITE_USE_MOCK = true;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ol start="2"><li>Introduce the required mock files in the mock <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_createProductionServer.ts" target="_blank" rel="noopener noreferrer">/_createProductionServer.ts file</a></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { createProdMockServer } from &#39;vite-plugin-mock/es/createProdMockServer&#39;;</span>
<span class="line"></span>
<span class="line">const modules = import.meta.globEager(&#39;./**/*.ts&#39;);</span>
<span class="line"></span>
<span class="line">const mockModules: any[] = [];</span>
<span class="line">Object.keys(modules).forEach((key) =&gt; {</span>
<span class="line">  if (key.includes(&#39;/_&#39;)) {</span>
<span class="line">    return;</span>
<span class="line">  }</span>
<span class="line">  mockModules.push(...modules[key].default);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">export function setupProdMockServer() {</span>
<span class="line">  createProdMockServer(mockModules);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="3"><li>Introduce in build <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/build/vite/plugin/mock.ts" target="_blank" rel="noopener noreferrer">/vite/plugin/mock.ts</a></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { viteMockServe } from &#39;vite-plugin-mock&#39;;</span>
<span class="line"></span>
<span class="line">export function configMockPlugin(isBuild: boolean) {</span>
<span class="line">  return viteMockServe({</span>
<span class="line">    injectCode: \`</span>
<span class="line">      import { setupProdMockServer } from &#39;../mock/_createProductionServer&#39;;</span>
<span class="line"></span>
<span class="line">      setupProdMockServer();</span>
<span class="line">      \`,</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="hint-container tip"><p class="hint-container-title">Why inject code through plugins instead of directly inserting it in main.ts</p><p>By inserting code in the plugin <code>injectCode</code>, it is convenient to control whether mockjs is packaged into the final code. If you judge in main.ts, if the mock function is turned off, mockjs will also be packaged into the build file, which will increase the package size.</p></div><p>At this point, the online mock configuration is complete. There is little difference between online and local. The biggest difference is that you cannot see the interface request log in the online console.</p>`,114)]))}const d=s(l,[["render",r]]),p=JSON.parse('{"path":"/syncadmin/front-end-configuration/in-depth/data-mock-joint-debugging.html","title":"Data mock & joint debugging","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/front-end-configuration/in-depth/data-mock-joint-debugging.md"}');export{d as comp,p as data};
