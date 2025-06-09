import{_ as s,c as n,a,o as t}from"./app-CC5quYyA.js";const i={};function l(d,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>Time</span></a></h1><p>Relative time components</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;Time :value=&quot;time&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, reactive, toRefs } from &#39;vue&#39;;</span>
<span class="line">  import { Time } from &#39;/@/components/Time&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { Time },</span>
<span class="line">    setup() {</span>
<span class="line">      const now = new Date().getTime();</span>
<span class="line">      const state = reactive({</span>
<span class="line">        time: now - 60 * 3 * 1000,</span>
<span class="line">      });</span>
<span class="line">      return {</span>
<span class="line">        ...toRefs(state),</span>
<span class="line">        now,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td><code>string,Date,number</code></td><td>-</td><td>-</td><td>Time value</td></tr><tr><td>step</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>refresh time</td></tr><tr><td>mode</td><td><code>string</code></td><td><code>relative</code></td><td>-</td><td>Mode, date: date, datetime: timestamp, relative: relative time</td></tr></tbody></table>`,7)]))}const c=s(i,[["render",l]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/time.html","title":"Time","lang":"ko-KR","frontmatter":{"order":20},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/time.md"}');export{c as comp,p as data};
