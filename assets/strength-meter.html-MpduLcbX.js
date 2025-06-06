import{_ as t,c as s,a as n,o as a}from"./app-QFoJTndn.js";const l={};function i(d,e){return a(),s("div",null,e[0]||(e[0]=[n(`<h1 id="strengthmeter" tabindex="-1"><a class="header-anchor" href="#strengthmeter"><span>StrengthMeter</span></a></h1><p>Used to check password strength</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4 flex justify-center&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;demo-wrap p-10&quot;&gt;</span>
<span class="line">      &lt;StrengthMeter placeholder=&quot;默认&quot; /&gt;</span>
<span class="line">      &lt;StrengthMeter placeholder=&quot;禁用&quot; disabled /&gt;</span>
<span class="line">      &lt;br /&gt;</span>
<span class="line">      &lt;StrengthMeter placeholder=&quot;隐藏input&quot; :show-input=&quot;false&quot; value=&quot;!@#qwe12345&quot; /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import StrengthMeter from &#39;/@/components/StrengthMeter/index&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: {</span>
<span class="line">      StrengthMeter,</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  .demo-wrap {</span>
<span class="line">    width: 50%;</span>
<span class="line">    background: #fff;</span>
<span class="line">    border-radius: 10px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>Check value</td></tr><tr><td>showInput</td><td><code>boolean</code></td><td>true</td><td>-</td><td>Whether to display input</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>-</td><td>Disable</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><table><thead><tr><th>event</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>score-change</td><td><code>number</code></td><td>Triggered by strength value change</td></tr><tr><td>change</td><td><code>string</code></td><td>Triggered by input value change</td></tr></tbody></table>`,9)]))}const c=t(l,[["render",i]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/strength-meter.html","title":"StrengthMeter","lang":"ko-KR","frontmatter":{"order":25},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/strength-meter.md"}');export{c as comp,p as data};
