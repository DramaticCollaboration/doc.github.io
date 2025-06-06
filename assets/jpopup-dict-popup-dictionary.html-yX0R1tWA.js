import{_ as n,c as e,a,o as t}from"./app-CJlkTddN.js";const i={};function l(d,s){return t(),e("div",null,s[0]||(s[0]=[a(`<h1 id="jpopupdict-popup-dictionary-✔" tabindex="-1"><a class="header-anchor" href="#jpopupdict-popup-dictionary-✔"><span>JPopupDict popup dictionary ✔</span></a></h1><h4 id="component-parameters" tabindex="-1"><a class="header-anchor" href="#component-parameters"><span>Component Parameters</span></a></h4><table><thead><tr><th>parameter</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>dictCode</td><td>string</td><td>yes</td><td>dictCode format description: online report code, text field, value field</td></tr><tr><td>sorter</td><td>String</td><td>no</td><td>Default sort column, usage: column name = desc | asc. Example:<code>age=asc</code></td></tr><tr><td>multi</td><td>Boolean</td><td>no</td><td>Whether to support multiple selection, the default value is false</td></tr><tr><td>param</td><td>object</td><td>no</td><td>Dynamic parameter object, manually add a record in the online report parameter, and then pass the parameter with the same name in your own page as a data query condition. If it is a string type, it needs to be set <strong>to</strong> the format of double quotes inside single quotes, such as {name: &quot;&#39;admin&#39;&quot;}</td></tr><tr><td>splitter</td><td>string</td><td>no</td><td>Delimiter, by default <code>,</code>, is only <code>,</code>useful for values ​​that are not separated by the database. The final database save is still<code>,</code></td></tr><tr><td>showAdvancedButton</td><td>Boolean</td><td>no</td><td>Whether popup is displayed to expand and close, the default is true to expand</td></tr></tbody></table><h4 id="show-results" tabindex="-1"><a class="header-anchor" href="#show-results"><span>Show results</span></a></h4><p><img src="https://lfs.k.topthink.com/lfs/de95302a56eb7b42a8043e74b82b0c52090351a6fc9fffb02f0e3d69c642c2d8.dat" alt=""></p><h4 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicForm</span>
<span class="line">    :schemas=&quot;schemas&quot;</span>
<span class="line">    :actionColOptions=&quot;{ span: 24 }&quot;</span>
<span class="line">    @submit=&quot;handleSubmit&quot;</span>
<span class="line">  &gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { BasicForm } from &#39;/@/components/Form&#39;;</span>
<span class="line">  const handleSubmit = (values) =&gt; {</span>
<span class="line">    console.log(values);</span>
<span class="line">  };</span>
<span class="line">  const schemas = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;pop2&#39;,</span>
<span class="line">      component: &#39;JPopupDict&#39;,</span>
<span class="line">      label: &#39;JPopupDict示例&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 12,</span>
<span class="line">      },</span>
<span class="line">      componentProps: {</span>
<span class="line">        placeholder: &#39;请选择&#39;,</span>
<span class="line">        dictCode: &#39;report_user01,username,id&#39;,</span>
<span class="line">        multi: true,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;pop2&#39;,</span>
<span class="line">      component: &#39;JEllipsis&#39;,</span>
<span class="line">      label: &#39;选中值&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 12,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,8)]))}const c=n(i,[["render",l]]),o=JSON.parse('{"path":"/syncadmin/ui-component-library/jpopup-dict-popup-dictionary.html","title":"JPopupDict popup dictionary ✔","lang":"ko-KR","frontmatter":{"order":40},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/jpopup-dict-popup-dictionary.md"}');export{c as comp,o as data};
