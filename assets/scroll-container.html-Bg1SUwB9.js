import{_ as s,c as l,a,o as e}from"./app-CU20V-HQ.js";const i={};function t(c,n){return e(),l("div",null,n[0]||(n[0]=[a(`<h1 id="scrollcontainer" tabindex="-1"><a class="header-anchor" href="#scrollcontainer"><span>ScrollContainer</span></a></h1><p>Reference <code>element-ui</code>el-scrollbar component implementation</p><p>Scroll container component</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;my-4&quot;&gt;</span>
<span class="line">      &lt;a-button @click=&quot;scrollTo(100)&quot;&gt;滚动到100px位置&lt;/a-button&gt;</span>
<span class="line">      &lt;a-button @click=&quot;scrollTo(800)&quot;&gt;滚动到800px位置&lt;/a-button&gt;</span>
<span class="line">      &lt;a-button @click=&quot;scrollTo(0)&quot;&gt;滚动到顶部&lt;/a-button&gt;</span>
<span class="line">      &lt;a-button @click=&quot;scrollBottom()&quot;&gt;滚动到底部&lt;/a-button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;div class=&quot;scroll-wrap&quot;&gt;</span>
<span class="line">      &lt;ScrollContainer ref=&quot;scrollRef&quot;&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">          &lt;template v-for=&quot;index in 100&quot; :key=&quot;index&quot;&gt;</span>
<span class="line">            &lt;li&gt;{{ index }}&lt;/li&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">      &lt;/ScrollContainer&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref, unref } from &#39;vue&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container/index&#39;;</span>
<span class="line">  import { ScrollContainer, ScrollActionType } from &#39;/@/components/Container/index&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { CollapseContainer, ScrollContainer },</span>
<span class="line">    setup() {</span>
<span class="line">      const scrollRef = ref&lt;Nullable&lt;ScrollActionType&gt;&gt;(null);</span>
<span class="line">      const getScroll = () =&gt; {</span>
<span class="line">        const scroll = unref(scrollRef);</span>
<span class="line">        if (!scroll) {</span>
<span class="line">          throw new Error(&#39;scroll is Null&#39;);</span>
<span class="line">        }</span>
<span class="line">        return scroll;</span>
<span class="line">      };</span>
<span class="line"></span>
<span class="line">      function scrollTo(top: number) {</span>
<span class="line">        getScroll()?.scrollTo(top);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      function scrollBottom() {</span>
<span class="line">        getScroll()?.scrollBottom();</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        scrollTo,</span>
<span class="line">        scrollRef,</span>
<span class="line">        scrollBottom,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  .scroll-wrap {</span>
<span class="line">    width: 50%;</span>
<span class="line">    height: 300px;</span>
<span class="line">    background: #fff;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><table><thead><tr><th>name</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>getScrollWrap</td><td><code>()=&gt;HtmlElement</code></td><td>Get the scroll container el</td></tr><tr><td>scrollBottom</td><td><code>Function</code></td><td>Scroll to bottom</td></tr><tr><td>scrollTo</td><td><code>Function(to:number,duration = 500)</code></td><td>Scroll to the specified position</td></tr></tbody></table><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>default</td><td>Default Region</td></tr></tbody></table>`,10)]))}const r=s(i,[["render",t]]),d=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/scroll-container.html","title":"ScrollContainer","lang":"ko-KR","frontmatter":{"order":17},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/scroll-container.md"}');export{r as comp,d as data};
