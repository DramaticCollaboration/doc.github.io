import{_ as s,c as a,a as e,o as t}from"./app-CU20V-HQ.js";const i={};function l(d,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown"><span>Markdown</span></a></h1><p>MarkDown editor based on <a href="https://github.com/Vanessa219/vditor" target="_blank" rel="noopener noreferrer">Vditor</a></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;a-button @click=&quot;toggleTheme&quot; class=&quot;mb-2&quot; type=&quot;primary&quot;&gt;黑暗主题&lt;/a-button&gt;</span>
<span class="line">    &lt;MarkDown v-model:value=&quot;value&quot; ref=&quot;markDownRef&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref, unref } from &#39;vue&#39;;</span>
<span class="line">  import { MarkDown, MarkDownActionType } from &#39;/@/components/Markdown&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { MarkDown },</span>
<span class="line">    setup() {</span>
<span class="line">      const markDownRef = ref&lt;Nullable&lt;MarkDownActionType&gt;&gt;(null);</span>
<span class="line">      const valueRef = ref(\`</span>
<span class="line"># title</span>
<span class="line"></span>
<span class="line"># content</span>
<span class="line">\`);</span>
<span class="line"></span>
<span class="line">      function toggleTheme() {</span>
<span class="line">        const markDown = unref(markDownRef);</span>
<span class="line">        if (!markDown) return;</span>
<span class="line">        const vditor = markDown.getVditor();</span>
<span class="line">        vditor.setTheme(&#39;dark&#39;);</span>
<span class="line">      }</span>
<span class="line">      return {</span>
<span class="line">        value: valueRef,</span>
<span class="line">        toggleTheme,</span>
<span class="line">        markDownRef,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>In addition to the following two, props can also pass in all properties of vidtor. You can use v-bind to unify the binding</p></div><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>v-model</td><td><code>string</code></td><td>-</td><td>-</td><td>Two-way binding text value</td></tr><tr><td>height</td><td><code>number</code></td><td>-</td><td>-</td><td>high</td></tr></tbody></table><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h3><table><thead><tr><th>name</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>getVditor</td><td><code>Function</code></td><td>Get vditor instance</td></tr></tbody></table>`,10)]))}const o=s(i,[["render",l]]),c=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/markdown.html","title":"Markdown","lang":"ko-KR","frontmatter":{"order":30},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/markdown.md"}');export{o as comp,c as data};
