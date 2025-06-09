import{_ as n,c as t,a,o as l}from"./app-CC5quYyA.js";const i={};function e(d,s){return l(),t("div",null,s[0]||(s[0]=[a(`<h1 id="virtualscroll" tabindex="-1"><a class="header-anchor" href="#virtualscroll"><span>VirtualScroll</span></a></h1><p>Virtual scrolling component (used for pure display of large amounts of data)</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4 virtual-scroll-demo&quot;&gt;</span>
<span class="line">    &lt;Divider&gt;基础滚动示例&lt;/Divider&gt;</span>
<span class="line">    &lt;div class=&quot;virtual-scroll-demo-wrap&quot;&gt;</span>
<span class="line">      &lt;VirtualScroll :itemHeight=&quot;41&quot; :items=&quot;data&quot; :height=&quot;300&quot; :width=&quot;300&quot;&gt;</span>
<span class="line">        &lt;template v-slot=&quot;{ item }&quot;&gt;</span>
<span class="line">          &lt;div class=&quot;virtual-scroll-demo__item&quot;&gt;{{ item.title }}&lt;/div&gt;</span>
<span class="line">        &lt;/template&gt;</span>
<span class="line">      &lt;/VirtualScroll&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">    &lt;Divider&gt;即使不可见，也预先加载50条数据，防止空白&lt;/Divider&gt;</span>
<span class="line">    &lt;div class=&quot;virtual-scroll-demo-wrap&quot;&gt;</span>
<span class="line">      &lt;VirtualScroll :itemHeight=&quot;41&quot; :items=&quot;data&quot; :height=&quot;300&quot; :width=&quot;300&quot; :bench=&quot;50&quot;&gt;</span>
<span class="line">        &lt;template v-slot=&quot;{ item }&quot;&gt;</span>
<span class="line">          &lt;div class=&quot;virtual-scroll-demo__item&quot;&gt;{{ item.title }}&lt;/div&gt;</span>
<span class="line">        &lt;/template&gt;</span>
<span class="line">      &lt;/VirtualScroll&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { VirtualScroll } from &#39;/@/components/VirtualScroll/index&#39;;</span>
<span class="line"></span>
<span class="line">  import { Divider } from &#39;ant-design-vue&#39;;</span>
<span class="line">  const data: any[] = (() =&gt; {</span>
<span class="line">    const arr: any[] = [];</span>
<span class="line">    for (let index = 1; index &lt; 20000; index++) {</span>
<span class="line">      arr.push({</span>
<span class="line">        title: &#39;列表项&#39; + index,</span>
<span class="line">      });</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">  })();</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { VirtualScroll, Divider },</span>
<span class="line">    setup() {</span>
<span class="line">      return { data: data };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  .virtual-scroll-demo {</span>
<span class="line">    &amp;-wrap {</span>
<span class="line">      display: flex;</span>
<span class="line">      margin: 0 30%;</span>
<span class="line">      background: #fff;</span>
<span class="line">      justify-content: center;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /deep/ &amp;__item {</span>
<span class="line">      height: 40px;</span>
<span class="line">      padding: 0 20px;</span>
<span class="line">      line-height: 40px;</span>
<span class="line">      border-bottom: 1px solid #ddd;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>height</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>high</td></tr><tr><td>width</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>width</td></tr><tr><td>maxHeight</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>maximum height</td></tr><tr><td>maxWidth</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>Maximum Width</td></tr><tr><td>minHeight</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>Minimum altitude</td></tr><tr><td>minWidth</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>Minimum Width</td></tr><tr><td>itemHeight</td><td><code>string｜number</code></td><td>-</td><td>-</td><td>Each option height must be passed</td></tr><tr><td>items</td><td><code>any[]</code></td><td>-</td><td>-</td><td>List of Options</td></tr></tbody></table><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>default</td><td>default</td></tr></tbody></table>`,9)]))}const c=n(i,[["render",e]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/virtual-scroll.html","title":"VirtualScroll","lang":"ko-KR","frontmatter":{"order":24},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/virtual-scroll.md"}');export{c as comp,p as data};
