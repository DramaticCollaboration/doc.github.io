import{_ as s,c as l,a as t,b as i,e as n,d,w as r,r as o,o as c}from"./app-CC5quYyA.js";const p={};function u(m,e){const a=o("RouteLink");return c(),l("div",null,[e[2]||(e[2]=t('<h1 id="jsearchselect-dictionary-table-search-component-✔" tabindex="-1"><a class="header-anchor" href="#jsearchselect-dictionary-table-search-component-✔"><span>JSearchSelect dictionary table search component ✔</span></a></h1><p>Drop-down search component, supports asynchronous loading, asynchronous loading for dictionary tables with large amounts of data</p><h2 id="parameter-definition" tabindex="-1"><a class="header-anchor" href="#parameter-definition"><span>Parameter Definition</span></a></h2><table><thead><tr><th>parameter</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td>[String,number]</td><td>no</td><td>none</td></tr><tr><td>placeholder</td><td>string</td><td></td><td>placeholder</td></tr><tr><td>disabled</td><td>Boolean</td><td></td><td>Disable</td></tr><tr><td>dict</td><td>string</td><td></td><td>Table name, display field name, storage field name concatenated string, if dictOptions parameter is provided, this parameter can be left blank</td></tr><tr><td>dictOptions</td><td>Array</td><td></td><td>Multiple options. If the dict parameter is not provided, you can set this parameter to load multiple options.</td></tr><tr><td>async</td><td>Boolean</td><td></td><td>Whether to support asynchronous loading. If set to true, remote data will be loaded through the input content, otherwise the data will be filtered locally. The default value is false</td></tr><tr><td>popContainer</td><td>string</td><td></td><td>The CSS selector corresponding to the parent node, used internally to <code>document.querySelector</code>select the parent node. If set <code>.pnode</code>, it will find the node with class pnode and render the drop-down box</td></tr><tr><td>pageSize</td><td>number</td><td></td><td>It is effective when async is set to true, indicating the number of data to be obtained each time during asynchronous query. The default value is 10</td></tr><tr><td>getPopupContainer</td><td>Function</td><td></td><td>The CSS selector corresponding to the parent node, used internally <code>node.parentNode</code>to select the parent node</td></tr><tr><td>adjustY</td><td>Boolean</td><td></td><td>Enable Y-axis overflow position adjustment</td></tr></tbody></table>',4)),i("p",null,[e[1]||(e[1]=n("Table dictionary configuration rules ")),d(a,{to:"/syncadmin/ui-component-library/tablesql.html"},{default:r(()=>e[0]||(e[0]=[n("reference document")])),_:1})]),e[3]||(e[3]=t(`<h2 id="show-results" tabindex="-1"><a class="header-anchor" href="#show-results"><span>Show results</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/0a7103b98756f3cb5dc7dace4ce03d00e320d9caa9565916b9c73f046ed8fd40.dat" alt=""></p><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;a-form&gt;</span>
<span class="line">    &lt;a-form-item label=&quot;下拉搜索&quot; style=&quot;width: 300px&quot;&gt;</span>
<span class="line">      &lt;JSearchSelectTag</span>
<span class="line">        placeholder=&quot;请做出你的选择&quot;</span>
<span class="line">        v-model:value=&quot;selectValue&quot;</span>
<span class="line">        :dictOptions=&quot;dictOptions&quot;&gt;</span>
<span class="line">      &lt;/JSearchSelectTag&gt;</span>
<span class="line">      {{ selectValue }}</span>
<span class="line">    &lt;/a-form-item&gt;</span>
<span class="line"></span>
<span class="line">    &lt;a-form-item label=&quot;异步加载&quot; style=&quot;width: 300px&quot;&gt;</span>
<span class="line">      &lt;JSearchSelectTag</span>
<span class="line">        placeholder=&quot;请做出你的选择&quot;</span>
<span class="line">        v-model:value=&quot;asyncSelectValue&quot;</span>
<span class="line">        dict=&quot;sys_depart,depart_name,id&quot;</span>
<span class="line">        async&gt;</span>
<span class="line">      &lt;/JSearchSelectTag&gt;</span>
<span class="line">      {{ asyncSelectValue }}</span>
<span class="line">    &lt;/a-form-item&gt;</span>
<span class="line">  &lt;/a-form &gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&#39;ts&#39; setup&gt;</span>
<span class="line">     import {JSearchSelectTag} from &#39;/@/components/Form&#39;</span>
<span class="line"></span>
<span class="line">     const selectValue=ref(&#39;&#39;);</span>
<span class="line">     const asyncSelectValue=ref(&#39;&#39;);</span>
<span class="line">     const   dictOptions:[{</span>
<span class="line">          text:&quot;选项一&quot;,</span>
<span class="line">          value:&quot;1&quot;</span>
<span class="line">        },{</span>
<span class="line">          text:&quot;选项二&quot;,</span>
<span class="line">          value:&quot;2&quot;</span>
<span class="line">        },{</span>
<span class="line">          text:&quot;选项三&quot;,</span>
<span class="line">          value:&quot;3&quot;</span>
<span class="line">        }]</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,5))])}const v=s(p,[["render",u]]),b=JSON.parse('{"path":"/syncadmin/ui-component-library/jsearch-select-dictionary-table-search-component.html","title":"JSearchSelect dictionary table search component ✔","lang":"ko-KR","frontmatter":{"order":14},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/ui-component-library/jsearch-select-dictionary-table-search-component.md"}');export{v as comp,b as data};
