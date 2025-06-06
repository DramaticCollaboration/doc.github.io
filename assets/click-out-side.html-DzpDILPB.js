import{_ as s,c as n,a,o as i}from"./app-CJlkTddN.js";const t={};function l(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="clickoutside" tabindex="-1"><a class="header-anchor" href="#clickoutside"><span>ClickOutSide</span></a></h1><p>Used to listen for external trigger events of wrapped element clicks</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;ClickOutSide @clickOutside=&quot;() =&gt; (showRef.value = false)&quot;&gt;</span>
<span class="line">      &lt;div @click=&quot;() =&gt; (showRef.value = true)&quot;&gt;</span>
<span class="line">        {{ showRef ? &#39;鼠标点击那部（点击边框外可以恢复）&#39; : &#39;点击该区域状态(初始状态)&#39; }}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/ClickOutSide&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { ClickOutSide } from &#39;@/components/ClickOutSide/index.vue&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { ClickOutSide },</span>
<span class="line">    setup() {</span>
<span class="line">      const showRef = ref(false);</span>
<span class="line">      return {</span>
<span class="line">        showRef,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><table><thead><tr><th>event</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>clickOutside</td><td><code>()=&gt;void</code></td><td>Click on the outer area of ​​the wrapping element to trigger</td></tr></tbody></table><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>default</td><td>The wrapped element</td></tr></tbody></table>`,9)]))}const r=s(t,[["render",l]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/click-out-side.html","title":"ClickOutSide","lang":"ko-KR","frontmatter":{"order":10},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/click-out-side.md"}');export{r as comp,p as data};
