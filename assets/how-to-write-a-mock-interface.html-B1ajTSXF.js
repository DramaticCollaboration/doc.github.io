import{_ as s,c as n,a,o as i}from"./app-QFoJTndn.js";const l={};function t(c,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="how-to-write-a-mock-interface" tabindex="-1"><a class="header-anchor" href="#how-to-write-a-mock-interface"><span>How to write a mock interface</span></a></h1><h2 id="enable-mock" tabindex="-1"><a class="header-anchor" href="#enable-mock"><span>Enable mock</span></a></h2><p>Modify the environment variable file (.env.development .env.production .env.test) VITE_USE_MOCK=true</p><h2 id="take-the-system-mock-sample-account-management-as-an-example" tabindex="-1"><a class="header-anchor" href="#take-the-system-mock-sample-account-management-as-an-example"><span>Take the system mock sample account management as an example</span></a></h2><h3 id="defining-mock-data" tabindex="-1"><a class="header-anchor" href="#defining-mock-data"><span>Defining mock data</span></a></h3><p>Define the following code in the mock/demo/system.ts file</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//模拟接口数据</span>
<span class="line">const accountList = (() =&gt; {</span>
<span class="line">    const result: any[] = [];</span>
<span class="line">    for (let index = 0; index &lt; 20; index++) {</span>
<span class="line">        result.push({</span>
<span class="line">            id: \`\${index}\`,</span>
<span class="line">            account: &#39;@first&#39;,</span>
<span class="line">            email: &#39;@email&#39;,</span>
<span class="line">            nickname: &#39;@cname()&#39;,</span>
<span class="line">            role: &#39;@first&#39;,</span>
<span class="line">            createTime: &#39;@datetime&#39;,</span>
<span class="line">            remark: &#39;@cword(10,20)&#39;,</span>
<span class="line">            &#39;status|1&#39;: [&#39;0&#39;, &#39;1&#39;],</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">    return result;</span>
<span class="line">})();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>The value of mock can directly use the syntax of <a href="http://mockjs.com/examples.html" target="_blank" rel="noopener noreferrer">mockjs</a> .</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//导出接口定义</span>
<span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    url: \`\${baseUrl}/system/getAccountList\`,</span>
<span class="line">    timeout: 100,</span>
<span class="line">    method: &#39;get&#39;,</span>
<span class="line">    response: ({ query }) =&gt; {</span>
<span class="line">      const { page = 1, pageSize = 20 } = query;</span>
<span class="line">      return resultPageSuccess(page, pageSize, accountList);</span>
<span class="line">    },</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="define-the-mock-address" tabindex="-1"><a class="header-anchor" href="#define-the-mock-address"><span>Define the mock address</span></a></h3><p>Define the interface access address in the src/api/demo/system.ts file as follows:<br><strong>Note: The interface address must start with mock (to distinguish it from the official interface. If the mock address and the official address interface name are different, you don’t need to add mock. The mock identifier is defined in baseUrl)</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">enum Api {</span>
<span class="line">    AccountList = &#39;/mock/system/getAccountList&#39;,</span>
<span class="line">    ....</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export const getAccountList = (params: AccountParams) =&gt;</span>
<span class="line">    defHttp.get&lt;AccountListGetResultModel&gt;({url: Api.AccountList, params});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="using-mock-interfaces" tabindex="-1"><a class="header-anchor" href="#using-mock-interfaces"><span>Using mock interfaces</span></a></h3><p>The system provides a built-in example, the path is as follows<br> src/views/demo/system/account/index.vue<br><img src="https://lfs.k.topthink.com/lfs/296d84d69de40926e515a656e4ae05c8e6ac52623b29abda6552be9100dd58e4.dat" alt=""></p><blockquote><p>baseUrl description: It is the unified parent path of the mock request, defined in the mock/_util.ts file. In this example, the value is /jeecgboot/mock</p></blockquote>`,18)]))}const r=s(l,[["render",t]]),o=JSON.parse('{"path":"/syncadmin/front-end-experience/advanced/how-to-write-a-mock-interface.html","title":"How to write a mock interface","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-experience/advanced/how-to-write-a-mock-interface.md"}');export{r as comp,o as data};
