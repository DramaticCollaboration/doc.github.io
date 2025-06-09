import{_ as e,c as t,a,o as s}from"./app-CU20V-HQ.js";const i={};function l(d,n){return s(),t("div",null,n[0]||(n[0]=[a(`<h1 id="lazycontainer" tabindex="-1"><a class="header-anchor" href="#lazycontainer"><span>LazyContainer</span></a></h1><p>Delayed loading/lazy loading of components, loading only when the component is visible or after a delay</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4 lazy-base-demo&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;lazy-base-demo-wrap&quot;&gt;</span>
<span class="line">      &lt;h1&gt;向下滚动&lt;/h1&gt;</span>
<span class="line">      &lt;LazyContainer @init=&quot;() =&gt; {}&quot;&gt;</span>
<span class="line">        &lt;TargetContent /&gt;</span>
<span class="line">        &lt;template #skeleton&gt;</span>
<span class="line">          &lt;Skeleton :rows=&quot;10&quot; /&gt;</span>
<span class="line">        &lt;/template&gt;</span>
<span class="line">      &lt;/LazyContainer&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { Skeleton } from &#39;ant-design-vue&#39;;</span>
<span class="line">  import TargetContent from &#39;./TargetContent.vue&#39;;</span>
<span class="line">  import { LazyContainer } from &#39;/@/components/Container/index&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { LazyContainer, TargetContent, Skeleton },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  .lazy-base-demo {</span>
<span class="line">    &amp;-wrap {</span>
<span class="line">      display: flex;</span>
<span class="line">      width: 50%;</span>
<span class="line">      height: 2000px;</span>
<span class="line">      margin: 20px auto;</span>
<span class="line">      text-align: center;</span>
<span class="line">      background: #fff;</span>
<span class="line">      justify-content: center;</span>
<span class="line">      flex-direction: column;</span>
<span class="line">      align-items: center;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    h1 {</span>
<span class="line">      height: 1300px;</span>
<span class="line">      margin: 20px 0;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>timeout</td><td><code>number</code></td><td>-</td><td>-</td><td>Waiting time, if the time is specified, it will be automatically loaded after the specified time regardless of whether it is visible or not</td></tr><tr><td>viewport</td><td><code>HTMLElement</code></td><td>-</td><td>-</td><td>The viewport where the component is located. If the component is scrolled within the page container, the viewport is the container.</td></tr><tr><td>threshold</td><td><code>string</code></td><td><code>0px</code></td><td>-</td><td>Preload threshold, css unit</td></tr><tr><td>direction</td><td><code>&#39;vertical&#39;, &#39;horizontal&#39;</code> , <code>vertical</code></td><td>-</td><td>The scroll direction of the viewport, vertical represents the vertical direction, horizontal represents the horizontal direction</td><td></td></tr><tr><td>tag</td><td><code>string&#39;</code></td><td><code>div</code></td><td>-</td><td>The tag name of the outer container that wraps the component</td></tr><tr><td>transitionName</td><td><code>string&#39;</code></td><td>lazy-container</td><td>-</td><td>transition animation name</td></tr><tr><td>maxWaitingTime</td><td><code>number&#39;</code></td><td><code>80</code></td><td>-</td><td>Maximum waiting time</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><table><thead><tr><th>event</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>heat</td><td><code>()=&gt;void</code></td><td>After initialization</td></tr></tbody></table><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>default</td><td>Default Region</td></tr><tr><td>skeleton</td><td>Lazy loading skeleton screen</td></tr></tbody></table>`,11)]))}const o=e(i,[["render",l]]),c=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/lazy-container.html","title":"LazyContainer","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/lazy-container.md"}');export{o as comp,c as data};
