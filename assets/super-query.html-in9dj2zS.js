import{_ as s,c as n,a,o as i}from"./app-CJlkTddN.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="superquery" tabindex="-1"><a class="header-anchor" href="#superquery"><span>SuperQuery</span></a></h1><blockquote><p>SuperQuery is used for advanced query buttons of customized lists. SuperQuery has been registered globally and does not need to be introduced separately.</p></blockquote><h1 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to use</span></a></h1><h2 id="_1-form-json-usage" tabindex="-1"><a class="header-anchor" href="#_1-form-json-usage"><span>1. Form JSON Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  field: &#39;superQuery&#39;,</span>
<span class="line">  component: &#39;Input&#39;,</span>
<span class="line">  label: &#39;高级查询&#39;,</span>
<span class="line">  helpMessage: [&#39;插槽模式&#39;],</span>
<span class="line">  slot: &#39;superQuery&#39;,</span>
<span class="line">  colProps: { span: 12 },</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_2-native-usage" tabindex="-1"><a class="header-anchor" href="#_2-native-usage"><span>2. Native Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;super-query :config=&quot;superQueryConfig&quot; @search=&quot;handleSuperQuery&quot;/&gt;</span>
<span class="line">&lt;!-- xxx省略其他代码 --&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line"></span>
<span class="line">// 高级查询配置</span>
<span class="line">const superQueryConfig = reactive({</span>
<span class="line">  name:{ title: &quot;名称&quot;, view: &quot;text&quot;, type: &quot;string&quot;, order: 1 },</span>
<span class="line">  sex:{ title: &quot;性别&quot;, view: &quot;list&quot;, type: &quot;string&quot;, enum: [{value: &#39;1&#39;, title: &#39;男&#39;}, {value: &#39;2&#39;, title: &#39;女&#39;}], order: 6 },</span>
<span class="line">  subTable:{</span>
<span class="line">    title: &quot;子表&quot;,</span>
<span class="line">    view: &quot;table&quot;,</span>
<span class="line">    fields:{</span>
<span class="line">      name:{ title: &quot;名称2&quot;, view: &quot;text&quot;, type: &quot;string&quot;, order: 1 },</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">//执行查询</span>
<span class="line">function handleSuperQuery(params) {</span>
<span class="line">  Object.keys(params).map(k=&gt;{</span>
<span class="line">    queryParam[k] = params[k]</span>
<span class="line">  });</span>
<span class="line">  searchQuery();</span>
<span class="line">}</span>
<span class="line">//xxx省略其他代码</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_3-customize-the-query-condition-data-saved-in-storage" tabindex="-1"><a class="header-anchor" href="#_3-customize-the-query-condition-data-saved-in-storage"><span>3. Customize the query condition data saved in storage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;super-query :config=&quot;superQueryConfig&quot; @search=&quot;handleSuperQuery&quot; :isCustomSave=&quot;true&quot; :saveSearchData=&quot;saveSearchData&quot; :save=&quot;handleSuperQuerySave&quot;/&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">    const superQueryConfig = {</span>
<span class="line">        name:{ title: &quot;名称&quot;, view: &quot;text&quot;, type: &quot;string&quot;, order: 1 },</span>
<span class="line">        birthday:{ title: &quot;生日&quot;, view: &quot;date&quot;, type: &quot;string&quot;, order: 2 },</span>
<span class="line">        age:{ title: &quot;年龄&quot;, view: &quot;number&quot;, type: &quot;number&quot;, order: 4 },</span>
<span class="line">        sex:{ title: &quot;性别&quot;, view: &quot;list&quot;, type: &quot;string&quot;, dictCode: &quot;sex&quot;, order: 5 },</span>
<span class="line">        bpmStatus:{ title: &quot;流程状态&quot;, view: &quot;list_multi&quot;, type: &quot;string&quot;,  dictCode: &quot;bpm_status&quot;, order: 6 },</span>
<span class="line">      }</span>
<span class="line">      function handleSuperQuery(value, model, field){</span>
<span class="line">        if(value){</span>
<span class="line">          let str = decodeURI(value.superQueryParams)</span>
<span class="line">          console.log(str)</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">      const saveSearchData = ref([</span>
<span class="line">        {</span>
<span class="line">          content: &#39;[{&quot;field&quot;:&quot;age&quot;,&quot;rule&quot;:&quot;eq&quot;,&quot;val&quot;:14}]&#39;,</span>
<span class="line">          title: &#39;豆蔻年华&#39;,</span>
<span class="line">          type: &#39;and&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          content: &#39;[{&quot;field&quot;:&quot;name&quot;,&quot;rule&quot;:&quot;eq&quot;,&quot;val&quot;:&quot;张三&quot;}]&#39;,</span>
<span class="line">          title: &#39;项目经理&#39;,</span>
<span class="line">          type: &#39;and&#39;,</span>
<span class="line">        },</span>
<span class="line">      ]);</span>
<span class="line">      const handleSuperQuerySave = (data) =&gt; {</span>
<span class="line">        // 高级查询保存后的信息</span>
<span class="line">        return new Promise&lt;void&gt;((resolve, reject) =&gt; {</span>
<span class="line">          // 模拟接口</span>
<span class="line">          setTimeout(() =&gt; {</span>
<span class="line">            if (Math.random() &gt; 0.5) {</span>
<span class="line">              console.log(&#39;接口成功~&#39;);</span>
<span class="line">              saveSearchData.value = data;</span>
<span class="line">              resolve();</span>
<span class="line">            } else {</span>
<span class="line">              console.log(&#39;接口失败~&#39;);</span>
<span class="line">              reject();</span>
<span class="line">            }</span>
<span class="line">          }, 1e3);</span>
<span class="line">        });</span>
<span class="line">      }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h1 id="configuration-instructions" tabindex="-1"><a class="header-anchor" href="#configuration-instructions"><span>Configuration instructions</span></a></h1><table><thead><tr><th>parameter</th><th>Required?</th><th>type</th><th>describe</th></tr></thead><tbody><tr><td>config</td><td>yes</td><td>Object</td><td>Refer to the following superQueryConfig configuration</td></tr><tr><td>search</td><td>no</td><td>event</td><td></td></tr><tr><td>isCustomSave</td><td>no</td><td>Boolean</td><td>Whether to implement storage of saved query condition data by yourself (default: false. <code>v3.6.4+</code>)</td></tr><tr><td>saveSearchData</td><td>no</td><td>Array</td><td>Saved query condition data (Required when isCustomSave is true. <code>v3.6.4+</code>)</td></tr><tr><td>save</td><td>no</td><td>Function</td><td>This function is executed when the query conditions are saved or deleted (required when isCustomSave is true. This function needs to return a Promise object. <code>v3.6.4+</code>)</td></tr></tbody></table><h3 id="_1-superqueryconfig-configuration" tabindex="-1"><a class="header-anchor" href="#_1-superqueryconfig-configuration"><span>1.superQueryConfig configuration</span></a></h3><blockquote><p>Syntax: Field name:{field configuration information}</p></blockquote><table><thead><tr><th>Attributes</th><th>describe</th></tr></thead><tbody><tr><td>title</td><td>Title/Field Description</td></tr><tr><td>view</td><td>Field display type</td></tr><tr><td>type</td><td>Field data type, date and time string</td></tr><tr><td>order</td><td>Field Order</td></tr><tr><td>For other configurations, refer to the following examples</td><td></td></tr></tbody></table><h3 id="_2-configuration-example" tabindex="-1"><a class="header-anchor" href="#_2-configuration-example"><span>2. Configuration Example</span></a></h3><ul><li><p>Text box:<br><code>name:{ title: &quot;名称&quot;, view: &quot;text&quot;, type: &quot;string&quot;, order: 1 }</code></p></li><li><p>Drop-down box (can only pass enum):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">sex:{ title: &quot;性别&quot;, view: &quot;list&quot;, type: &quot;string&quot;, enum: [{value: &#39;1&#39;, title: &#39;男&#39;},{value: &#39;2&#39;, title: &#39;女&#39;}], order: 2 },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p></li><li><p>Drop-down multiple-select box (you can set the data dictionary and configure the table):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">sports:{ title: &quot;下拉多选&quot;, view: &quot;list_multi&quot;, type: &quot;string&quot;,dictCode: &quot;sports&quot;, order: 3 },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">dictTable: &quot;sys_user&quot;, dictCode: &quot;username&quot;, dictText: &quot;realname&quot;, order: 3 },userSelect:{ title: &quot;下拉多选2&quot;, view: &quot;list_multi&quot;, type: &quot;string&quot;,\`</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p></li><li><p>Drop-down search box (can only configure tables):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">userSearch:{ title: &quot;下拉搜索&quot;, view: &quot;sel_search&quot;, type: &quot;string&quot;, dictTable: &quot;sys_user&quot;, dictCode: &quot;username&quot;, dictText: &quot;realname&quot;, order: 4 },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p></li><li><p>Date box:<br><code>birthday:{ title: &quot;生日&quot;, view: &quot;date&quot;, type: &quot;string&quot;, order: 5 },</code></p></li><li><p>Time Frame:<br><code>createTime:{ title: &quot;创建时间&quot;, view: &quot;datetime&quot;, type: &quot;string&quot;, order: 6 },</code></p></li><li><p>Number box:<br><code>age:{ title: &quot;年龄&quot;, view: &quot;number&quot;, type: &quot;number&quot;, order: 7 },</code></p></li><li><p>Classification Tree:<br><code>catTree: { title: &#39;分类树&#39;, order: 16, view: &#39;cat_tree&#39;, type: &#39;string&#39;, pcode: &#39;B01&#39; },</code></p></li><li><p>Custom Tree:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> customTree: { title: &#39;自定义树&#39;, order: 15, view: &#39;sel_tree&#39;, type: &#39;string&#39;, dict: &#39;t_tree,name,id&#39;, pidValue: &#39;0&#39; },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">* 用户选择：</span>
<span class="line"> \`userSelect2:{ title: &quot;选择用户&quot;, view: &quot;sel_user&quot;, type: &quot;string&quot;, order: 9 },\`</span>
<span class="line">* 部门选择：</span>
<span class="line"> \`departSelect:{ title: &quot;选择部门&quot;, view: &quot;sel_depart&quot;, type: &quot;string&quot;, order: 10 },\`</span>
<span class="line">* 省市区：</span>
<span class="line"> \`pca:{ title: &quot;省市区&quot;, view: &quot;pca&quot;, type: &quot;string&quot;, order: 12 },\`</span>
<span class="line">* popup：</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>popup:{ title: &quot;popup&quot;, view: &quot;popup&quot;, type: &quot;string&quot;, order: 11, code: &quot;report_user&quot;, destFields: &quot;popup&quot;, orgFields: &quot;realname&quot;, popupMulti: true },</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">### 3.从表字段配置说明：</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>From table name: {<br> title: &quot;Table description&quot;,<br> view: &quot;table&quot;,<br> fields:{<br> field configuration<br> }<br> }<br> For example:<br> subTable:{<br> title: &quot;Subtable&quot;,<br> view: &quot;table&quot;,<br> fields:{<br> name:{ title: &quot;Name 2&quot;, view: &quot;text&quot;, type: &quot;string&quot;, order: 1 },<br> }<br> }</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">### 4.查询触发传值</span>
<span class="line"></span>
<span class="line">![](../images/screenshot_1657108874245.png)</span>
<span class="line"></span>
<span class="line">* 如果是单表：field只传递字段名</span>
<span class="line">* 如果有从表，field会传递\`从表名,字段名\`</span>
<span class="line">* 此处仅前端实现了从表的逻辑，后台默认不处理从表的信息，需要用户自行处理。</span>
<span class="line"></span>
<span class="line">&gt; [warning] 如果界面查询无效果，那应该是后端报错了，请检查字段配置是否正确。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,27)]))}const u=s(t,[["render",l]]),o=JSON.parse('{"path":"/syncadmin/ui-component-library/super-query.html","title":"SuperQuery","lang":"ko-KR","frontmatter":{"order":33},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/super-query.md"}');export{u as comp,o as data};
