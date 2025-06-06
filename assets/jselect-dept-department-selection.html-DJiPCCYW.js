import{_ as n,c as s,a as t,o as a}from"./app-QFoJTndn.js";const l={};function d(i,e){return a(),s("div",null,e[0]||(e[0]=[t(`<h1 id="jselectdept-department-selection-✔" tabindex="-1"><a class="header-anchor" href="#jselectdept-department-selection-✔"><span>JSelectDept Department selection ✔</span></a></h1><hr><h2 id="parameter-definition" tabindex="-1"><a class="header-anchor" href="#parameter-definition"><span>Parameter Definition</span></a></h2><table><thead><tr><th>parameter</th><th>type</th><th>Required?</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td>[String,Array]</td><td>no</td><td>none</td><td>Echo value</td></tr><tr><td>showButton</td><td>Boolean</td><td>no</td><td>true</td><td>Whether to display the selection button</td></tr><tr><td>disabled</td><td>Boolean</td><td>no</td><td>false</td><td>Disable</td></tr><tr><td>rowKey</td><td>String</td><td>no</td><td>key</td><td>Value field configuration, generally the primary key field</td></tr><tr><td>labelKey</td><td>String</td><td>no</td><td>title</td><td>Display Field Configuration</td></tr><tr><td>defaultExpandLevel</td><td>String</td><td>no</td><td>0</td><td>Initial expansion level</td></tr><tr><td>checkStrictly</td><td>Boolean</td><td>no</td><td>false</td><td>The selected states of parent and child nodes are no longer related</td></tr><tr><td>checkable</td><td>Boolean</td><td>no</td><td>true</td><td>Whether to display the checkbox</td></tr><tr><td>startPid</td><td>String</td><td>no</td><td>-</td><td>Root node initial value (used when serverTreeData does not enable server-side data conversion)</td></tr><tr><td>primaryKey</td><td>String</td><td>no</td><td>id</td><td>Primary key field</td></tr><tr><td>parentKey</td><td>String</td><td>no</td><td>parentId</td><td>Parent ID field</td></tr><tr><td>titleKey</td><td>String</td><td>no</td><td>title</td><td>Tree node displays text field</td></tr><tr><td>serverTreeData</td><td>Boolean</td><td>no</td><td>true</td><td>Whether to enable server-side data conversion</td></tr><tr><td>sync</td><td>Boolean</td><td>no</td><td>true</td><td>Whether to enable asynchronous data loading</td></tr><tr><td>multiple</td><td>Boolean</td><td></td><td>true</td><td><code>v1.1.0</code>Whether to allow multiple selections</td></tr><tr><td>~params~</td><td>String</td><td>no</td><td>-</td><td>~Custom query parameters, you need to pass a string, such as: params: <strong>&#39;{&quot;orgCode&quot;:&quot;A01&quot;}&#39;</strong>~</td></tr><tr><td>modalTitle</td><td>String</td><td>no</td><td>Department Selection</td><td>Select box title</td></tr></tbody></table><h2 id="event-definition" tabindex="-1"><a class="header-anchor" href="#event-definition"><span>Event Definition</span></a></h2><table><thead><tr><th>Event Name</th><th>parameter</th><th>illustrate</th></tr></thead><tbody><tr><td>getSelectResult</td><td>options, values</td><td>Confirm the selection callback and use this event to get the selected value in the selection box alone</td></tr></tbody></table><h2 id="data-format-required-by-tree" tabindex="-1"><a class="header-anchor" href="#data-format-required-by-tree"><span>Data format required by tree</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[{</span>
<span class="line">        &quot;key&quot;: &quot;1&quot;,</span>
<span class="line">        &quot;title&quot;: &quot;节点1&quot;,</span>
<span class="line">        &quot;children&quot;:[</span>
<span class="line">             {</span>
<span class="line">                   key:&quot;1-1&quot;,</span>
<span class="line">                   title:&quot;子节点&quot;,</span>
<span class="line">                   children:[]</span>
<span class="line">             }</span>
<span class="line">        ]</span>
<span class="line">    },{</span>
<span class="line">        &quot;key&quot;: &quot;2&quot;,</span>
<span class="line">        &quot;departName&quot;: &quot;节点2&quot;,</span>
<span class="line">       &quot;children&quot;:[]</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><h3 id="baseform-usage-examples" tabindex="-1"><a class="header-anchor" href="#baseform-usage-examples"><span>BaseForm usage examples</span></a></h3><p><img src="https://lfs.k.topthink.com/lfs/fd941edc6a82d5e38c0b7bec032d1352cc53897816a5bbd61691c10cfd51d01a.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/b3a94db8b81a5b4d682d6619a353776fad6518444e7c8e8de0ff6db8a6318de3.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">    field: &#39;user2&#39;,</span>
<span class="line">    component: &#39;JSelectDept&#39;,</span>
<span class="line">    label: &#39;选择示例&#39;,</span>
<span class="line">    helpMessage: [&#39;component模式&#39;],</span>
<span class="line">    componentProps:{</span>
<span class="line">        labelKey:&#39;departName&#39;,</span>
<span class="line">        rowKey:&#39;orgCode&#39;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="example-of-using-slots" tabindex="-1"><a class="header-anchor" href="#example-of-using-slots"><span>Example of using slots</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template #jSelectDept=&quot;{model, field }&quot;&gt;</span>
<span class="line">    &lt;JSelectDept v-model:value=&quot;model[field]&quot;/&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="single-use-example" tabindex="-1"><a class="header-anchor" href="#single-use-example"><span>Single use example</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">&lt;a-button type=&quot;primary&quot; preIcon=&quot;ant-design:plus-outlined&quot; @click=&quot;openHandle&quot;&gt;选择&lt;/a-button&gt;</span>
<span class="line">&lt;DeptSelectModal rowKey=&quot;id&quot; @register=&quot;registerSelModal&quot; @getSelectResult=&quot;onSelectOk&quot;/&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    import DeptSelectModalfrom &#39;/@/components/Form/src/jeecg/components/modal/DeptSelectModal.vue&#39;</span>
<span class="line">     // 注册选择框</span>
<span class="line">    const [registerSelModal, {openModal}] = useModal()</span>
<span class="line">    let selectValues = reactive&lt;Recordable&gt;({</span>
<span class="line">     //附值value</span>
<span class="line">      value: [],</span>
<span class="line">    });</span>
<span class="line">    //下发 selectValues</span>
<span class="line">    provide(&#39;selectValues&#39;, selectValues);</span>
<span class="line">    // 打开选择框</span>
<span class="line">    function openHandle() {</span>
<span class="line">        openModal()；</span>
<span class="line">    }</span>
<span class="line">    // 选择确认事件</span>
<span class="line">    function onSelectOk(selectRows, selectKeys) {</span>
<span class="line">      //处理业务逻辑</span>
<span class="line">   }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="front-end-conversion-tree-data-structure" tabindex="-1"><a class="header-anchor" href="#front-end-conversion-tree-data-structure"><span>Front-end conversion tree data structure</span></a></h3><p>As shown in the following data, the data structure returned by the backend is not in tree form but must contain parentId. In this case, you need to set serverTreeData=false, turn on the front-end conversion to tree structure data, and specify titleKey as departName, primaryKey as deptId, and parentKey as parentId</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[{</span>
<span class="line">        &quot;deptId&quot;: &quot;1&quot;,</span>
<span class="line">        &quot;parentId&quot;: &quot;&quot;,</span>
<span class="line">        &quot;departName&quot;: &quot;节点1&quot;,</span>
<span class="line">    },{</span>
<span class="line">        &quot;deptId&quot;: &quot;2&quot;,</span>
<span class="line">        &quot;parentId&quot;: &quot;&quot;,</span>
<span class="line">        &quot;departName&quot;: &quot;节点2&quot;,</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Code Sample</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  label: &#39;所属部门&#39;,</span>
<span class="line">  field: &#39;selecteddeparts&#39;,</span>
<span class="line">  component: &#39;JSelectDept&#39;,</span>
<span class="line">  componentProps:({formActionType,formModel}) =&gt; {</span>
<span class="line">      return {</span>
<span class="line">          titleKey:&quot;departName&quot;,</span>
<span class="line">          primaryKey:&quot;id&quot;,</span>
<span class="line">          parentKey:&quot;parentId&quot;,</span>
<span class="line">          serverTreeData:false</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="enable-asynchronous-loading" tabindex="-1"><a class="header-anchor" href="#enable-asynchronous-loading"><span>Enable asynchronous loading</span></a></h3><p>When the amount of data is too large, we hope that the tree is loaded asynchronously. At this time, we can set sync to start asynchronous loading. If the data structure does not meet the needs, we need to start the front-end conversion of the tree structure data<br> code example</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  label: &#39;所属部门&#39;,</span>
<span class="line">  field: &#39;selecteddeparts&#39;,</span>
<span class="line">  component: &#39;JSelectDept&#39;,</span>
<span class="line">  componentProps:({formActionType,formModel}) =&gt; {</span>
<span class="line">      return {</span>
<span class="line">          sync:true</span>
<span class="line">      }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,31)]))}const o=n(l,[["render",d]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/jselect-dept-department-selection.html","title":"JSelectDept Department selection ✔","lang":"ko-KR","frontmatter":{"order":11},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/jselect-dept-department-selection.md"}');export{o as comp,p as data};
