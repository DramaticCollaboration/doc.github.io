import{_ as n,c as s,a as t,o as a}from"./app-CU20V-HQ.js";const i={};function l(o,e){return a(),s("div",null,e[0]||(e[0]=[t(`<h1 id="authority" tabindex="-1"><a class="header-anchor" href="#authority"><span>Authority</span></a></h1><p>Components used for project permissions, generally used for fine-grained permission management such as button level</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;Authority :value=&quot;RoleEnum.ADMIN&quot;&gt;</span>
<span class="line">      &lt;a-button type=&quot;primary&quot; block&gt; 只有admin角色可见 &lt;/a-button&gt;</span>
<span class="line">    &lt;/Authority&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import Authority from &#39;/@/components/Authority&#39;;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { Authority },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td><code>RoleEnum,RoleEnum[],string,string[]</code></td><td>-</td><td>Role information or permission code. It will automatically distinguish the permission mode</td></tr></tbody></table>`,7)]))}const d=n(i,[["render",l]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/authority.html","title":"Authority","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/authority.md"}');export{d as comp,p as data};
