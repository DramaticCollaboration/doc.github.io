import{_ as s,c as n,a,o as t}from"./app-DeddRHAy.js";const l={};function i(d,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="userselect-user-selection-component" tabindex="-1"><a class="header-anchor" href="#userselect-user-selection-component"><span>UserSelect user selection component</span></a></h1><hr><p><em>Same functionality, but different style from JSelectUser component</em></p><h2 id="configuration-items" tabindex="-1"><a class="header-anchor" href="#configuration-items"><span>Configuration items</span></a></h2><table><thead><tr><th>parameter</th><th>type</th><th>Required</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>multi</td><td>Boolean</td><td>no</td><td>false</td><td>Multiple selection</td></tr><tr><td>getContainer</td><td>Function</td><td>no</td><td>null</td><td>The user selects the parent node of the popup.</td></tr><tr><td>store</td><td>String</td><td>no</td><td>id</td><td>Select a column from the user table and use its value as the storage value of the control. The default is the ID column.</td></tr><tr><td>value(v-model)</td><td>String</td><td>no</td><td>Empty string</td><td>Used to record control values</td></tr></tbody></table><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/7acdb44fd3a5afeb220bb5110857106d5e2f38e9bb0eb7a05cdb875f11b1a67b.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/bfe4a0ef7255fcf37c29460989fb8934eb032018e4e9a3a0e95641563a5c35db.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/24fde1dccfb4887a71ca1a9c897b85a11116dd76b6328a55b5df2b609840d2b7.dat" alt=""></p><h3 id="use-in-baseform" tabindex="-1"><a class="header-anchor" href="#use-in-baseform"><span>Use in BaseForm</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">{</span>
<span class="line">  field: &#39;userSelect2&#39;,</span>
<span class="line">  component: &#39;UserSelect&#39;,</span>
<span class="line">  label: &#39;用户选择2&#39;,</span>
<span class="line">  helpMessage: [&#39;component模式&#39;],</span>
<span class="line">  colProps: { span: 12 },</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="use-as-component" tabindex="-1"><a class="header-anchor" href="#use-as-component"><span>Use as component</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;UserSelect v-model:value=&quot;testUser&quot; :multi=&quot;true&quot; store=&quot;username&quot;/&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">    import { ref, defineComponent } from &#39;vue&#39;;</span>
<span class="line">    import UserSelect from &#39;/@/components/Form/src/jeecg/components/userSelect/index.vue&#39;</span>
<span class="line"></span>
<span class="line">    export default defineComponent({</span>
<span class="line">        name: &quot;JeecgComponents&quot;,</span>
<span class="line">        components: {</span>
<span class="line">            UserSelect,</span>
<span class="line">        },</span>
<span class="line">        setup() {</span>
<span class="line">            const testUser = ref(&#39;&#39;);</span>
<span class="line">            return {</span>
<span class="line">                testUser</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,13)]))}const r=s(l,[["render",i]]),o=JSON.parse('{"path":"/syncadmin/ui-component-library/user-select-user-selection-component.html","title":"UserSelect user selection component","lang":"ko-KR","frontmatter":{"order":37},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/user-select-user-selection-component.md"}');export{r as comp,o as data};
