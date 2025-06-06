import{_ as s,c as a,a as e,o as t}from"./app-CJlkTddN.js";const l={};function i(d,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="jareaselect-province-city-and-county-cascade-components" tabindex="-1"><a class="header-anchor" href="#jareaselect-province-city-and-county-cascade-components"><span>JAreaSelect Province, City and County Cascade Components</span></a></h1><h2 id="parameter-definition" tabindex="-1"><a class="header-anchor" href="#parameter-definition"><span>Parameter Definition</span></a></h2><table><thead><tr><th>parameter name</th><th>type</th><th>default value</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>value(v-modal)</td><td>String</td><td></td><td>yes</td><td>Binding Values</td></tr><tr><td>province</td><td>String</td><td></td><td>yes</td><td>Bind Province</td></tr><tr><td>city</td><td>String</td><td></td><td>yes</td><td>Bound City</td></tr><tr><td>area</td><td>String</td><td></td><td>yes</td><td>Binding Region</td></tr><tr><td>level</td><td>number</td><td></td><td>3</td><td>Cascade level of provinces, cities and districts</td></tr></tbody></table><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><ul><li>Returns a single value<br><img src="https://lfs.k.topthink.com/lfs/6948a44b86e8f8b877a322541d44eeab1098dc7e3abd45ffa919652d560bfee9.dat" alt=""></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">   &lt;a-form style=&quot;height:800px&quot;&gt;</span>
<span class="line">        &lt;a-row class=&quot;form-row&quot; :gutter=&quot;16&quot;&gt;</span>
<span class="line">            &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                &lt;a-form-item label=&quot;省市区级联单选&quot; :label-col=&quot;{ span: 6 }&quot; :wrapper-col=&quot;{ span: 15 }&quot;&gt;</span>
<span class="line">                    &lt;JAreaSelect v-model:value=&quot;pop&quot;/&gt;</span>
<span class="line">                &lt;/a-form-item&gt;</span>
<span class="line">            &lt;/a-col&gt;</span>
<span class="line">            &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                &lt;a-form-item label=&quot;省市区级联单选数值&quot; :label-col=&quot;{ span: 6 }&quot; :wrapper-col=&quot;{ span: 15 }&quot;&gt;</span>
<span class="line">                    &lt;span&gt;{{pop}}&lt;/span&gt;</span>
<span class="line">                &lt;/a-form-item&gt;</span>
<span class="line">            &lt;/a-col&gt;</span>
<span class="line">        &lt;/a-row&gt;</span>
<span class="line">    &lt;/a-form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    import {ref,reactive} from &#39;vue&#39;</span>
<span class="line">    import {JAreaSelect} from &#39;/@/components/Form&#39;;</span>
<span class="line">    const pop = ref(&#39;&#39;)</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>Returning multiple values<br><img src="https://lfs.k.topthink.com/lfs/17d4b1c215ff2d997e90ddad17bfa9a9dff3e6639d6679db2a768003519d3a6f.dat" alt=""></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">   &lt;a-form style=&quot;height:800px&quot;&gt;</span>
<span class="line">        &lt;a-row class=&quot;form-row&quot; :gutter=&quot;16&quot;&gt;</span>
<span class="line">            &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                &lt;a-form-item label=&quot;省市区级联多选&quot; :label-col=&quot;{ span: 6 }&quot; :wrapper-col=&quot;{ span: 15 }&quot;&gt;</span>
<span class="line">                    &lt;JAreaSelect v-model:province=&quot;pca.province&quot; v-model:city=&quot;pca.city&quot; v-model:area=&quot;pca.area&quot;/&gt;</span>
<span class="line">                &lt;/a-form-item&gt;</span>
<span class="line">            &lt;/a-col&gt;</span>
<span class="line">            &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                &lt;a-form-item label=&quot;省市区级联多选数值&quot; :label-col=&quot;{ span: 6 }&quot; :wrapper-col=&quot;{ span: 15 }&quot;&gt;</span>
<span class="line">                    &lt;span&gt;{{pca}}&lt;/span&gt;</span>
<span class="line">                &lt;/a-form-item&gt;</span>
<span class="line">            &lt;/a-col&gt;</span>
<span class="line">        &lt;/a-row&gt;</span>
<span class="line">    &lt;/a-form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    import {ref,reactive} from &#39;vue&#39;</span>
<span class="line">    import {JAreaSelect} from &#39;/@/components/Form&#39;;</span>
<span class="line">    const pca = reactive({</span>
<span class="line">        province:&#39;&#39;,</span>
<span class="line">        city:&#39;&#39;,</span>
<span class="line">        area:&#39;&#39;</span>
<span class="line">    })</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,10)]))}const r=s(l,[["render",i]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/jarea-select-province-city-and-county-cascade-components.html","title":"JAreaSelect Province, City and County Cascade Components","lang":"ko-KR","frontmatter":{"order":24},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/jarea-select-province-city-and-county-cascade-components.md"}');export{r as comp,p as data};
