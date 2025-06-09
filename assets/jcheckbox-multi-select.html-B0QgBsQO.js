import{_ as e,c as n,a,o as t}from"./app-CGhJnnYK.js";const l={};function i(o,s){return t(),n("div",null,s[0]||(s[0]=[a(`<h1 id="jcheckbox-multi-select-✔" tabindex="-1"><a class="header-anchor" href="#jcheckbox-multi-select-✔"><span>JCheckbox Multi-select ✔</span></a></h1><p>Functional description: The antd-vue checkbox component processes arrays, which is not very convenient to use. It is encapsulated twice and only needs to process strings when used.</p><hr><h2 id="parameter-configuration" tabindex="-1"><a class="header-anchor" href="#parameter-configuration"><span>Parameter configuration</span></a></h2><table><thead><tr><th>parameter</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td>String</td><td>none</td><td>value</td></tr><tr><td>options</td><td>array</td><td></td><td>The items that the checkbox needs to configure are an array. Each object in the array contains two attributes (for display) and value (for storage)</td></tr><tr><td>dictCode</td><td>string</td><td></td><td>Checkbox dictionary code configuration, for example, through the gender dictionary code: sex, you can directly render the component</td></tr><tr><td>disabled</td><td>Boolean</td><td>no</td><td>Whether to disable, default value is false</td></tr></tbody></table><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><hr><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;a-form :model=&quot;form&quot;&gt;</span>
<span class="line">        &lt;a-row class=&quot;form-row&quot; :gutter=&quot;16&quot;&gt;</span>
<span class="line">            &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                &lt;a-form-item label=&quot;options式用法&quot; :label-col=&quot;{ span: 6 }&quot; :wrapper-col=&quot;{ span: 15 }&quot;&gt;</span>
<span class="line">                    &lt;JCheckbox  v-model:value=&quot;form.sport&quot; :options=&quot;sportOptions&quot;/&gt;</span>
<span class="line">                &lt;/a-form-item&gt;</span>
<span class="line">            &lt;/a-col&gt;</span>
<span class="line">            &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                &lt;a-form-item label=&quot;dictCode式用法&quot; :label-col=&quot;{ span: 6 }&quot; :wrapper-col=&quot;{ span: 15 }&quot;&gt;</span>
<span class="line">                    &lt;JCheckbox v-model:value=&quot;form.sex&quot; dictCode=&quot;sex&quot;/&gt;</span>
<span class="line">                &lt;/a-form-item&gt;</span>
<span class="line">            &lt;/a-col&gt;</span>
<span class="line">        &lt;/a-row&gt;</span>
<span class="line">    &lt;/a-form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  import {JCheckbox} from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { reactive} from &#39;vue&#39;;</span>
<span class="line"></span>
<span class="line">  const  form = reactive({</span>
<span class="line">      sex : &#39;1&#39;,</span>
<span class="line">      sport: &#39;1,3&#39;</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line"> const sportOptions = [</span>
<span class="line">          {</span>
<span class="line">            label:&quot;足球&quot;,</span>
<span class="line">            value:&quot;1&quot;</span>
<span class="line">          },{</span>
<span class="line">            label:&quot;篮球&quot;,</span>
<span class="line">            value:&quot;2&quot;</span>
<span class="line">          },{</span>
<span class="line">            label:&quot;乒乓球&quot;,</span>
<span class="line">            value:&quot;3&quot;</span>
<span class="line">  }]</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Effect Preview<br><img src="https://lfs.k.topthink.com/lfs/f89eeb1de5093ee00d7171af731cd0b81d898c5d445447fee421430446045b91.dat" alt=""></p>`,10)]))}const d=e(l,[["render",i]]),r=JSON.parse('{"path":"/syncadmin/ui-component-library/jcheckbox-multi-select.html","title":"JCheckbox Multi-select ✔","lang":"ko-KR","frontmatter":{"order":13},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncadmin/ui-component-library/jcheckbox-multi-select.md"}');export{d as comp,r as data};
