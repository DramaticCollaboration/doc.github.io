import{_ as n,c as s,a,o as t}from"./app-CGhJnnYK.js";const i={};function r(l,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="advanced-query-component-usage" tabindex="-1"><a class="header-anchor" href="#advanced-query-component-usage"><span>Advanced query component usage</span></a></h1><p><strong>Although the advanced query component</strong> is not open source in jeecg-vue3, it has been <strong>globally registered</strong> and does not affect its use.<br> According to the document <a href="https://help.jeecg.com/component/SuperQuery.html" target="_blank" rel="noopener noreferrer">SuperQuery advanced query</a> can be easily used in the project.</p><p><strong>How to use the advanced query component:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 方法一</span>
<span class="line">&lt;super-query :config=&quot;superQueryConfig&quot; @search=&quot;handleSearch&quot;&gt;&lt;/super-query&gt;</span>
<span class="line">const superQueryConfig = reactive({</span>
<span class="line">  name: { title: &#39;名称&#39;, view: &#39;text&#39;, type: &#39;string&#39;, order: 1 },</span>
<span class="line">  sex: { title: &#39;性别&#39;, view: &#39;list&#39;, type: &#39;string&#39;, dictCode: &#39;sex&#39;, order: 2 }</span>
<span class="line">});</span>
<span class="line">const handleSearch = (params) =&gt; {</span>
<span class="line">  console.log(params); // 得到高级查询组件的条件，拼接到接口即可</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 方法二</span>
<span class="line">&lt;super-query ref=&quot;superQueryRef&quot; @search=&quot;handleSearch&quot;&gt;&lt;/super-query&gt;</span>
<span class="line">const superQueryRef = ref(null);</span>
<span class="line">superQueryRef.value.init({</span>
<span class="line">  name: { title: &#39;名称&#39;, view: &#39;text&#39;, type: &#39;string&#39;, order: 1 },</span>
<span class="line">  sex: { title: &#39;性别&#39;, view: &#39;list&#39;, type: &#39;string&#39;, dictCode: &#39;sex&#39;, order: 2 }</span>
<span class="line">});</span>
<span class="line">const handleSearch = (params) =&gt; {</span>
<span class="line">  console.log(params); // 得到高级查询组件的条件，拼接到接口即可</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Take the &quot;Single Table Example&quot; page in jeecg-vue3 as an example:<br><img src="https://lfs.k.topthink.com/lfs/fe216cecd9584d000f9f3cb2bfd55d2ef28de8760f1706f68d71365007627e26.dat" alt=""><br> We want to query all fields through <strong>the advanced query component :</strong></p><p><strong>1. Get all fields and types through the interface (communication with the backend)</strong><br><img src="https://lfs.k.topthink.com/lfs/b1ef149cb4529c064b995acf2b4848484046a5627364f9959bbbe4139a48a858.dat" alt=""><br><strong>2. Write the front-end code based on the information obtained</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;super-query :config=&quot;superQueryConfig&quot; @search=&quot;handleSuperQuery&quot; /&gt;</span>
<span class="line"></span>
<span class="line"> const superQueryConfig = reactive({</span>
<span class="line">    name: { title: &#39;名称&#39;, view: &#39;text&#39;, type: &#39;string&#39;, order: 1 },</span>
<span class="line">    keyWord: { title: &#39;关键词&#39;, view: &#39;text&#39;, type: &#39;string&#39;, order: 2 },</span>
<span class="line">    punchTime: { title: &#39;打卡时间&#39;, view: &#39;datetime&#39;, type: &#39;string&#39;, order: 3 },</span>
<span class="line">    keyWord: { title: &#39;工资&#39;, view: &#39;text&#39;, type: &#39;number&#39;, order: 4 },</span>
<span class="line">    salaryMoney: { title: &#39;奖金&#39;, view: &#39;text&#39;, type: &#39;number&#39;, order: 5 },</span>
<span class="line">    sex: { title: &#39;性别&#39;, view: &#39;list&#39;, type: &#39;string&#39;, dictCode: &#39;sex&#39;, order: 6 },</span>
<span class="line">    birthday: { title: &#39;生日&#39;, view: &#39;date&#39;, type: &#39;string&#39;, order: 7 },</span>
<span class="line">    email: { title: &#39;邮箱&#39;, view: &#39;text&#39;, type: &#39;string&#39;, order: 8 },</span>
<span class="line">    content: { title: &#39;个人简介&#39;, view: &#39;text&#39;, type: &#39;string&#39;, order: 9 },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  function handleSuperQuery(params) {</span>
<span class="line">    Object.keys(params).map((k) =&gt; {</span>
<span class="line">      // 得到高级查询组件的条件，拼接到接口</span>
<span class="line">      queryParam[k] = params[k];</span>
<span class="line">    });</span>
<span class="line">    // 调用接口重新刷新表格数据</span>
<span class="line">    searchQuery();</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><table><thead><tr><th>Attributes</th><th>describe</th></tr></thead><tbody><tr><td>title</td><td>Field description (label displayed in the drop-down box of the Advanced Query component)</td></tr><tr><td>view</td><td>Field display type (based on this, the type of component is rendered. text: text box, list: drop-down box, list_multi: drop-down multiple-select box, etc. For more information, refer to <a href="https://help.jeecg.com/component/SuperQuery.html#2%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B" target="_blank" rel="noopener noreferrer">SuperQuery advanced query</a> )</td></tr><tr><td>type</td><td>Field data type, date and time string</td></tr><tr><td>order</td><td>Field order (the order in which the fields appear in the Advanced Query component drop-down box)</td></tr></tbody></table><p><strong>3. Final effect</strong><br><img src="https://lfs.k.topthink.com/lfs/194a31f1457b5183872938d208f3729bc405d3039d2ef668c15865c4df67cbe8.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/7bf2aa8f71712b0bcbc1000492cd9d1840c4c4c133e539f20990532b4c671c0a.dat" alt=""></p>`,13)]))}const c=n(i,[["render",r]]),p=JSON.parse('{"path":"/syncadmin/front-end-experience/front-end-tips/advanced-query-component-usage.html","title":"Advanced query component usage","lang":"ko-KR","frontmatter":{"order":6},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncadmin/front-end-experience/front-end-tips/advanced-query-component-usage.md"}');export{c as comp,p as data};
