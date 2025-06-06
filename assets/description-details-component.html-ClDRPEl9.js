import{_ as e,c as s,a as t,o as a}from"./app-CJlkTddN.js";const d={};function i(l,n){return a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="description-details-component" tabindex="-1"><a class="header-anchor" href="#description-details-component"><span>Description details component</span></a></h1><p>Encapsulate <code>antv</code>the Descriptions component</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;Description</span>
<span class="line">      title=&quot;基础示例&quot;</span>
<span class="line">      :collapseOptions=&quot;{ canExpand: true, helpMessage: &#39;help me&#39; }&quot;</span>
<span class="line">      :column=&quot;3&quot;</span>
<span class="line">      :data=&quot;mockData&quot;</span>
<span class="line">      :schema=&quot;schema&quot;</span>
<span class="line">    /&gt;</span>
<span class="line">    &lt;Description @register=&quot;register&quot; class=&quot;mt-4&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { Alert } from &#39;ant-design-vue&#39;;</span>
<span class="line">  import { Description, DescItem, useDescription } from &#39;/@/components/Description/index&#39;;</span>
<span class="line">  const mockData: any = {</span>
<span class="line">    username: &#39;test&#39;,</span>
<span class="line">    nickName: &#39;VB&#39;,</span>
<span class="line">    age: 123,</span>
<span class="line">    phone: &#39;15695909xxx&#39;,</span>
<span class="line">    email: &#39;190848757@qq.com&#39;,</span>
<span class="line">    addr: &#39;厦门市思明区&#39;,</span>
<span class="line">    sex: &#39;男&#39;,</span>
<span class="line">    certy: &#39;3504256199xxxxxxxxx&#39;,</span>
<span class="line">    tag: &#39;orange&#39;,</span>
<span class="line">  };</span>
<span class="line">  const schema: DescItem[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;username&#39;,</span>
<span class="line">      label: &#39;用户名&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;nickName&#39;,</span>
<span class="line">      label: &#39;昵称&#39;,</span>
<span class="line">      render: (curVal, data) =&gt; {</span>
<span class="line">        return \`\${data.username}-\${curVal}\`;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;联系电话&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;email&#39;,</span>
<span class="line">      label: &#39;邮箱&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;addr&#39;,</span>
<span class="line">      label: &#39;地址&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { Description, Alert },</span>
<span class="line">    setup() {</span>
<span class="line">      const [register] = useDescription({</span>
<span class="line">        title: &#39;useDescription&#39;,</span>
<span class="line">        data: mockData,</span>
<span class="line">        schema: schema,</span>
<span class="line">      });</span>
<span class="line">      return { mockData, schema, register };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="usedescription" tabindex="-1"><a class="header-anchor" href="#usedescription"><span>useDescription</span></a></h2><p>Refer to the above example</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const [register] = useDescription(Props);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Warm reminder</p><p>In addition to the following parameters, props in the official documentation are also supported. For details, please refer to <a href="https://2x.antdv.com/components/descriptions-cn/#API" target="_blank" rel="noopener noreferrer">antv Description</a></p></div><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>title</td></tr><tr><td>size</td><td><code>string</code></td><td>small</td><td>-</td><td>size</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td>true</td><td>-</td><td>Whether to display borders</td></tr><tr><td>column</td><td><code>Number, Object</code></td><td><code>{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }</code></td><td>-</td><td><code>DescriptionItems</code>The number of rows</td></tr><tr><td>useCollapse</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Whether to wrap the CollapseContainer component</td></tr><tr><td>collapseOptions</td><td><code>Object</code></td><td>-</td><td>-</td><td><code>CollapseContainer</code>Component Properties</td></tr><tr><td>schema</td><td><code>DescItem[]</code></td><td>-</td><td>-</td><td>For detailed configuration, see <code>DescItem</code>Configuration below</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>data source</td></tr></tbody></table><h2 id="descitem" tabindex="-1"><a class="header-anchor" href="#descitem"><span>DescItem</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>field</td><td><code>string</code></td><td>-</td><td>-</td><td>Field Name</td></tr><tr><td>label</td><td><code>string</code></td><td>-</td><td>-</td><td>Tag Name</td></tr><tr><td>labelMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>Minimum label width</td></tr><tr><td>contentMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>content minimum width</td></tr><tr><td>labelStyle</td><td><code>any</code></td><td>-</td><td>-</td><td>Label style</td></tr><tr><td>span</td><td><code>number</code></td><td>-</td><td>-</td><td>and parallel quantity</td></tr><tr><td>show</td><td><code>(data)=&gt;boolean</code></td><td>-</td><td>-</td><td>Dynamically determine whether the current component is displayed</td></tr><tr><td>render</td><td><code>(val: string, data: any)=&gt;VNode,undefined,Element,string,number</code></td><td>-</td><td>-</td><td>Custom rendering content</td></tr></tbody></table>`,14)]))}const r=e(d,[["render",i]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/description-details-component.html","title":"Description details component","lang":"ko-KR","frontmatter":{"order":11},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/description-details-component.md"}');export{r as comp,p as data};
