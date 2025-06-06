import{_ as t,c as a,a as n,o as s}from"./app-DGEuurYf.js";const l={};function d(i,e){return s(),a("div",null,e[0]||(e[0]=[n(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>Page</span></a></h1><p>Page related components</p><h2 id="pagewrapper" tabindex="-1"><a class="header-anchor" href="#pagewrapper"><span>PageWrapper</span></a></h2><p>Used to wrap page components</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;PageWrapper&gt;</span>
<span class="line">      &lt;template #left&gt;left&lt;/template&gt;</span>
<span class="line">      &lt;template #right&gt;right&lt;/template&gt;</span>
<span class="line">    &lt;/PageWrapper&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { PageWrapper } from &#39;/@/components/Page&#39;;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { PageWrapper },</span>
<span class="line">    setup() {</span>
<span class="line">      return {};</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>pageHeader title</td></tr><tr><td>dense</td><td><code>是否缩小主体区域</code></td><td>false</td><td>If true, padding/margin will be cancelled.</td></tr><tr><td>content</td><td><code>string</code></td><td>-</td><td>pageHeader Content</td></tr><tr><td>contentStyle</td><td><code>object</code></td><td>-</td><td>Body area style</td></tr><tr><td>contentClass</td><td><code>string</code></td><td>-</td><td>Main area class</td></tr><tr><td>contentBackground</td><td><code>boolean</code></td><td>-</td><td>Main Area Background</td></tr><tr><td>contentFullHeight</td><td><code>boolean</code></td><td>false</td><td>Whether the main area occupies the entire screen height</td></tr><tr><td>fixedHeight</td><td><code>boolean</code></td><td>false</td><td>Fixed main area height</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3><p><strong>The pageHeader slots all support</strong></p><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>leftFooter</td><td>PageFooter left area</td></tr><tr><td>rightFooter</td><td>PageFooter right area</td></tr><tr><td>headerContent</td><td>pageHeader Main content</td></tr><tr><td>default</td><td>Main area</td></tr></tbody></table><h2 id="pagefooter" tabindex="-1"><a class="header-anchor" href="#pagefooter"><span>PageFooter</span></a></h2><p>Used for the toolbar at the bottom of the page</p><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>use</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;PageFooter&gt;</span>
<span class="line">      &lt;template #left&gt;left&lt;/template&gt;</span>
<span class="line">      &lt;template #right&gt;right&lt;/template&gt;</span>
<span class="line">    &lt;/PageFooter&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { PageFooter } from &#39;/@/components/Page&#39;;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { PageFooter },</span>
<span class="line">    setup() {</span>
<span class="line">      return {};</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="slots-1" tabindex="-1"><a class="header-anchor" href="#slots-1"><span>Slots</span></a></h3><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>left</td><td>Left area</td></tr><tr><td>right</td><td>Right area</td></tr></tbody></table>`,19)]))}const p=t(l,[["render",d]]),c=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/page.html","title":"Page","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/page.md"}');export{p as comp,c as data};
