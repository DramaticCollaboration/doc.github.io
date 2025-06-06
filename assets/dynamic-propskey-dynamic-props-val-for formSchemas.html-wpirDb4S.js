import{_ as n,c as a,a as e,o as l}from"./app-QFoJTndn.js";const i={};function c(p,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="formschemas中dynamicpropskey、dynamicpropsval用法" tabindex="-1"><a class="header-anchor" href="#formschemas中dynamicpropskey、dynamicpropsval用法"><span>formSchemas中dynamicPropskey、dynamicPropsVal用法</span></a></h1><blockquote><p>Scenario: Assume that in the following figure , different <strong>genders</strong> will display different <strong>course options</strong> . How can this be achieved in FormSchema?</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/688dd1203f716b60e550bdfca607318c64adf44af6eecb1b8fdf5118f9afd52f.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/e003e4d261f7002ab627dd4b7b08eb877746e91d128392d0aa0315a2ee12ddb5.dat" alt=""></p><h4 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions:</span></a></h4><p><em>dynamicPropskey</em> and <em>dynamicPropsVal</em> must be used together, neither of them can be missing.</p><table><thead><tr><th></th><th>type</th></tr></thead><tbody><tr><td>dynamicPropskey</td><td><em>string</em></td></tr><tr><td>dynamicPropsVal</td><td><em>function</em></td></tr></tbody></table><h4 id="effect" tabindex="-1"><a class="header-anchor" href="#effect"><span>Effect:</span></a></h4><p><img src="https://lfs.k.topthink.com/lfs/18d12b430d718ff0e29646649845540e11ff13b29cd7f9c3ea4d8335b4e7e8bd.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/8b53471b07ccbadd6a8ad5831fc435aa11d86faac0f5c0e0ddd0053ecb461e7b.dat" alt=""></p><h4 id="implementation-code" tabindex="-1"><a class="header-anchor" href="#implementation-code"><span>Implementation code:</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicForm</span>
<span class="line">    ref=&quot;formElRef&quot;</span>
<span class="line">    :class=&quot;&#39;jee-select-demo-form&#39;&quot;</span>
<span class="line">    :labelCol=&quot;{ span: 5 }&quot;</span>
<span class="line">    :wrapperCol=&quot;{ span: 15 }&quot;</span>
<span class="line">    :showResetButton=&quot;false&quot;</span>
<span class="line">    :showSubmitButton=&quot;false&quot;</span>
<span class="line">    :schemas=&quot;schemas&quot;</span>
<span class="line">    :actionColOptions=&quot;{ span: 24 }&quot;</span>
<span class="line">    style=&quot;height: 100%&quot;</span>
<span class="line">  &gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { computed, defineComponent, unref, ref } from &#39;vue&#39;;</span>
<span class="line">  import { BasicForm } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { schemas } from &#39;./jeecgComponents.data&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: {</span>
<span class="line">      BasicForm,</span>
<span class="line">    },</span>
<span class="line">    name: &#39;JeecgComponents&#39;,</span>
<span class="line">    setup() {</span>
<span class="line">      const schemas = [</span>
<span class="line">        {</span>
<span class="line">          field: &#39;sex&#39;,</span>
<span class="line">          component: &#39;JDictSelectTag&#39;,</span>
<span class="line">          label: &#39;性别选择&#39;,</span>
<span class="line">          helpMessage: [&#39;component模式&#39;],</span>
<span class="line">          componentProps: {</span>
<span class="line">            dictCode: &#39;sex&#39;,</span>
<span class="line">            type: &#39;radioButton&#39;,</span>
<span class="line">            onChange: (value) =&gt; {</span>
<span class="line">              console.log(value);</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">          colProps: {</span>
<span class="line">            span: 12,</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          field: &#39;sex&#39;,</span>
<span class="line">          component: &#39;JEllipsis&#39;,</span>
<span class="line">          label: &#39;选中值&#39;,</span>
<span class="line">          colProps: { span: 12 },</span>
<span class="line">        },</span>
<span class="line"></span>
<span class="line">        {</span>
<span class="line">          field: &#39;course&#39;,</span>
<span class="line">          component: &#39;Select&#39;,</span>
<span class="line">          label: &#39;课程&#39;,</span>
<span class="line">          dynamicPropskey: &#39;options&#39;,</span>
<span class="line">          dynamicPropsVal: ({ model }) =&gt; {</span>
<span class="line">            let options;</span>
<span class="line">            if (model.sex == 1) {</span>
<span class="line">              return [</span>
<span class="line">                { value: &#39;0&#39;, label: &#39;java - 男&#39; },</span>
<span class="line">                { value: &#39;1&#39;, label: &#39;vue - 男&#39; },</span>
<span class="line">              ];</span>
<span class="line">            } else {</span>
<span class="line">              return [</span>
<span class="line">                { value: &#39;2&#39;, label: &#39;瑜伽 - 女&#39; },</span>
<span class="line">                { value: &#39;3&#39;, label: &#39;美甲 - 女&#39; },</span>
<span class="line">              ];</span>
<span class="line">            }</span>
<span class="line">          },</span>
<span class="line">          componentProps: {</span>
<span class="line">            disabled: false,</span>
<span class="line">          },</span>
<span class="line">          colProps: {</span>
<span class="line">            span: 12,</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          field: &#39;course&#39;,</span>
<span class="line">          component: &#39;JEllipsis&#39;,</span>
<span class="line">          label: &#39;选中值&#39;,</span>
<span class="line">          colProps: { span: 12 },</span>
<span class="line">        },</span>
<span class="line">      ];</span>
<span class="line">      return {</span>
<span class="line">        schemas,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,11)]))}const r=n(i,[["render",c]]),t=JSON.parse('{"path":"/syncadmin/front-end-experience/front-end-tips/dynamic-propskey-dynamic-props-val-for%20formSchemas.html","title":"formSchemas中dynamicPropskey、dynamicPropsVal用法","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-experience/front-end-tips/dynamic-propskey-dynamic-props-val-for formSchemas.md"}');export{r as comp,t as data};
