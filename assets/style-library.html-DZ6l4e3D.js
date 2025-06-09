import{_ as s,c as n,a,o as l}from"./app-CGhJnnYK.js";const i={};function t(d,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="style-library" tabindex="-1"><a class="header-anchor" href="#style-library"><span>Style Library</span></a></h1><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce"><span>introduce</span></a></h2><p>This article mainly introduces how to use and plan style files in projects.</p><p><a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">By default, Less is used as the preprocessing language. It is recommended to learn about the relevant features of Less</a> before using it or when you have questions (if you want to obtain basic CSS knowledge or check properties, please refer to <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">the MDN documentation</a> ).</p><p>The common styles used in the project are stored under <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/design" target="_blank" rel="noopener noreferrer">src/design/</a> .</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.</span>
<span class="line">├── ant # ant design 一些样式覆盖</span>
<span class="line">├── color.less # 颜色</span>
<span class="line">├── index.less # 入口</span>
<span class="line">├── public.less # 公共类</span>
<span class="line">├── theme.less # 主题相关</span>
<span class="line">├── config.less  # 每个组件都会自动引入样式</span>
<span class="line">├── transition # 动画相关</span>
<span class="line">└── var # 变量</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Global Injection</p><p>The config.less file will be globally injected into all files, so variables can be used directly in the page without manual introduction</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  // 这里已经隐式注入了 config.less</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="tailwindcss-2-5-0" tabindex="-1"><a class="header-anchor" href="#tailwindcss-2-5-0"><span>tailwindcss(2.5.0+)</span></a></h2><p><a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwindcss</a> is referenced in the project , please see the file usage instructions for details.</p><p>The syntax is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div class=&quot;relative w-full h-full px-4&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="windicss-2-5-0-deprecated" tabindex="-1"><a class="header-anchor" href="#windicss-2-5-0-deprecated"><span>windicss (2.5.0 deprecated)</span></a></h2><p><a href="https://windicss.org/" target="_blank" rel="noopener noreferrer">Windicss</a> is used in the project . Please refer to the file usage instructions for details.</p><p>The syntax is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div class=&quot;relative w-full h-full px-4&quot;&gt;&lt;/div&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Precautions</p><p>Windcss currently causes memory overflow in local development, so we may consider switching to TailwindCss in the future. The two are basically the same.</p><p>Therefore, try to use the new features of Windicss as little as possible to prevent high subsequent switching costs.</p><h2 id="why-use-less" tabindex="-1"><a class="header-anchor" href="#why-use-less"><span>Why use Less</span></a></h2><p>This is mainly because Ant Design uses less as the style language by default, and using Less can keep it consistent.</p><h2 id="enable-scoped" tabindex="-1"><a class="header-anchor" href="#enable-scoped"><span>Enable scoped</span></a></h2><p>Without adding <code>scoped</code>attributes, it will be compiled into the global style by default, which may cause global pollution</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Reminder</p><p>After using scoped, the style of the parent component will not penetrate into the child component. However, the root node of a child component will be affected by both the scoped CSS of its parent component and the scoped CSS of the child component. This design is to allow the parent component to adjust the style of its child component root element from the perspective of layout.</p><h2 id="depth-selector" tabindex="-1"><a class="header-anchor" href="#depth-selector"><span>Depth Selector</span></a></h2><p>Sometimes we may want to explicitly specify a rule for a subcomponent.</p><p>If you want <code>scoped</code>a selector in your stylesheet to work &quot;deeper&quot;, for example to affect child components, you can use <code>&gt;&gt;&gt;</code>an operator. Some preprocessors like Sass won&#39;t parse it correctly <code>&gt;&gt;&gt;</code>. In this case you can use the <code>/deep/</code>or <code>::v-deep</code>operator instead - both are <code>&gt;&gt;&gt;</code>aliases of and work just fine.</p><p>For details, see RFC <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md" target="_blank" rel="noopener noreferrer">0023-scoped-styles-changes</a> .</p><p>After using scoped, the style of the parent component will not penetrate into the child component, so you can use the following solution:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;style scoped&gt;</span>
<span class="line">  /* deep selectors */</span>
<span class="line">  ::v-deep(.foo) {</span>
<span class="line">  }</span>
<span class="line">  /* shorthand */</span>
<span class="line">  :deep(.foo) {</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /* targeting slot content */</span>
<span class="line">  ::v-slotted(.foo) {</span>
<span class="line">  }</span>
<span class="line">  /* shorthand */</span>
<span class="line">  :slotted(.foo) {</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /* one-off global rule */</span>
<span class="line">  ::v-global(.foo) {</span>
<span class="line">  }</span>
<span class="line">  /* shorthand */</span>
<span class="line">  :global(.foo) {</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules"><span>CSS Modules</span></a></h2><p>Another solution to the style overriding problem is to use CSS Modules. Here’s how to use it.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;span :class=&quot;$style.span1&quot;&gt;hello&lt;/span&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { useCSSModule } from &#39;vue&#39;;</span>
<span class="line"></span>
<span class="line">  export default {</span>
<span class="line">    setup(props, context) {</span>
<span class="line">      const $style = useCSSModule();</span>
<span class="line">      const moduleAStyle = useCSSModule(&#39;moduleA&#39;);</span>
<span class="line">      return {</span>
<span class="line">        $style,</span>
<span class="line">        moduleAStyle,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  };</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;less&quot; module&gt;</span>
<span class="line">  .span1 {</span>
<span class="line">    color: green;</span>
<span class="line">    font-size: 30px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;less&quot; module=&quot;moduleA&quot;&gt;</span>
<span class="line">  .span1 {</span>
<span class="line">    color: green;</span>
<span class="line">    font-size: 30px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="duplicate-citation-problem" tabindex="-1"><a class="header-anchor" href="#duplicate-citation-problem"><span>Duplicate citation problem</span></a></h2><p>Adding <strong>reference</strong> can solve the problem of repeated references within the page leading to duplication of the actually generated style sheet.</p><p>This step has been globally introduced. So <strong>you don&#39;t need to write it</strong> and use the variable directly</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  /* 该行代码已全局引用。可以不用单独引入 */</span>
<span class="line">  @import (reference) &#39;../../design/config.less&#39;;</span>
<span class="line">&lt;style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,48)]))}const c=s(i,[["render",t]]),p=JSON.parse('{"path":"/syncadmin/front-end-configuration/in-depth/style-library.html","title":"Style Library","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncadmin/front-end-configuration/in-depth/style-library.md"}');export{c as comp,p as data};
