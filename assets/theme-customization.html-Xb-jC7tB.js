import{_ as s,c as a,a as e,o as p}from"./app-DGEuurYf.js";const l={};function t(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="theme-customization-guide" tabindex="-1"><a class="header-anchor" href="#theme-customization-guide"><span>Theme Customization Guide</span></a></h1><p>This document describes how to customize the appearance and functionality of a VuePress theme.</p><h2 id="modify-theme-color" tabindex="-1"><a class="header-anchor" href="#modify-theme-color"><span>Modify theme color</span></a></h2><p>Modify the theme color in the <code>docs/.vuepress/styles/palette.scss</code> file:</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token selector">:root </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Brand color</span></span>
<span class="line">  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Background color</span></span>
<span class="line">  <span class="token property">--c-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-bg-light</span><span class="token punctuation">:</span> #f3f4f5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-bg-lighter</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-bg-navbar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-bg-sidebar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-bg-arrow</span><span class="token punctuation">:</span> #cccccc<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Text color</span></span>
<span class="line">  <span class="token property">--c-text</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-text-light</span><span class="token punctuation">:</span> #3a5169<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-text-lighter</span><span class="token punctuation">:</span> #4e6e8e<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-text-lightest</span><span class="token punctuation">:</span> #6a8bad<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-text-quote</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Border color</span></span>
<span class="line">  <span class="token property">--c-border</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-border-dark</span><span class="token punctuation">:</span> #dfe2e5<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Custom container</span></span>
<span class="line">  <span class="token property">--c-tip</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-tip-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-tip-title</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-tip-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-tip-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-accent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-warning</span><span class="token punctuation">:</span> #e7c000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-warning-bg</span><span class="token punctuation">:</span> #fffae3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-warning-title</span><span class="token punctuation">:</span> #b29400<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-warning-text</span><span class="token punctuation">:</span> #746000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-warning-text-accent</span><span class="token punctuation">:</span> #edb563<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-danger</span><span class="token punctuation">:</span> #cc0000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-danger-bg</span><span class="token punctuation">:</span> #ffe0e0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-danger-title</span><span class="token punctuation">:</span> #990000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-danger-text</span><span class="token punctuation">:</span> #660000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-danger-text-accent</span><span class="token punctuation">:</span> #bd1a1a<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-details-bg</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Logo</span></span>
<span class="line">  <span class="token property">--c-badge-tip</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-tip<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-badge-warning</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-warning<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--c-badge-danger</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-danger<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Transition</span></span>
<span class="line">  <span class="token property">--t-color</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--t-transform</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Code block</span></span>
<span class="line">  <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--code-text-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modify-the-layout" tabindex="-1"><a class="header-anchor" href="#modify-the-layout"><span>Modify the layout</span></a></h2><p>Modify the layout style in the <code>docs/.vuepress/styles/index.scss</code> file:</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">// Modify the navigation bar</span></span>
<span class="line"><span class="token selector">.navbar </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Modify the sidebar</span></span>
<span class="line"><span class="token selector">.sidebar </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-sidebar<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Modify the content area</span></span>
<span class="line"><span class="token selector">.content </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 2rem 2.5rem<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Modify the code block</span></span>
<span class="line"><span class="token selector">div[class*=&quot;language-&quot;] </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-custom-components" tabindex="-1"><a class="header-anchor" href="#add-custom-components"><span>Add custom components</span></a></h2><ol><li>Create components in the <code>docs/.vuepress/components</code> directory:</li></ol><div class="language-Vue line-numbers-mode" data-highlighter="prismjs" data-ext="Vue"><pre><code><span class="line">&lt;!-- InfoCard.vue --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;info-card&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;info-card__header&quot;&gt;</span>
<span class="line">      &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;div class=&quot;info-card__content&quot;&gt;</span>
<span class="line">      &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name: &quot;InfoCard&quot;,</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot;&gt;</span>
<span class="line">.info-card {</span>
<span class="line">  border: 1px solid var(--c-border);</span>
<span class="line">  border-radius: 6px;</span>
<span class="line">  padding: 1rem;</span>
<span class="line">  margin: 1rem 0;</span>
<span class="line"></span>
<span class="line">  &amp;__header {</span>
<span class="line">    font-weight: bold;</span>
<span class="line">    margin-bottom: 0.5rem;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Using components in Markdown:</li></ol><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InfoCard</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  content</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InfoCard</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-a-custom-page" tabindex="-1"><a class="header-anchor" href="#add-a-custom-page"><span>Add a custom page</span></a></h2><ol><li>Create a custom layout component:</li></ol><div class="language-Vue line-numbers-mode" data-highlighter="prismjs" data-ext="Vue"><pre><code><span class="line">&lt;!-- CustomLayout.vue --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;custom-layout&quot;&gt;</span>
<span class="line">    &lt;header class=&quot;custom-header&quot;&gt;</span>
<span class="line">      &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/header&gt;</span>
<span class="line">    &lt;main class=&quot;custom-main&quot;&gt;</span>
<span class="line">      &lt;slot&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/main&gt;</span>
<span class="line">    &lt;footer class=&quot;custom-footer&quot;&gt;</span>
<span class="line">      &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;</span>
<span class="line">    &lt;/footer&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name: &quot;CustomLayout&quot;,</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;scss&quot;&gt;</span>
<span class="line">.custom-layout {</span>
<span class="line">  display: flex;</span>
<span class="line">  flex-direction: column;</span>
<span class="line">  min-height: 100vh;</span>
<span class="line"></span>
<span class="line">  .custom-header {</span>
<span class="line">    padding: 1rem;</span>
<span class="line">    background-color: var(--c-bg-light);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .custom-main {</span>
<span class="line">    flex: 1;</span>
<span class="line">    padding: 2rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .custom-footer {</span>
<span class="line">    padding: 1rem;</span>
<span class="line">    background-color: var(--c-bg-light);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Use custom layout in the page:</li></ol><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Custom Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">content</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Footer content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-custom-plugins" tabindex="-1"><a class="header-anchor" href="#adding-custom-plugins"><span>Adding custom plugins</span></a></h2><ol><li>Create a plugin file:</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// docs/.vuepress/plugins/my-plugin.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;my-plugin&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">clientAppEnhanceFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;clientAppEnhance.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Create client enhancement files:</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// docs/.vuepress/clientAppEnhance.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress/client&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientAppEnhance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Add client enhancement code here</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Use the plugin in the configuration file:</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// docs/.vuepress/config.js</span></span>
<span class="line"><span class="token keyword">import</span> myPlugin <span class="token keyword">from</span> <span class="token string">&quot;./plugins/my-plugin&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference-links" tabindex="-1"><a class="header-anchor" href="#reference-links"><span>Reference Links</span></a></h2><ul><li><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html" target="_blank" rel="noopener noreferrer">VuePress theme configuration</a></li><li><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html" target="_blank" rel="noopener noreferrer">VuePress style configuration</a></li><li><a href="https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html" target="_blank" rel="noopener noreferrer">VuePress component development</a></li></ul>`,27)]))}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/synceta/theme-customization.html","title":"Theme Customization","lang":"ko-KR","frontmatter":{"title":"Theme Customization"},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":2,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"},{"hash":"c921d4afd7014a6297baf4d4ae62fd4fa0559e84","time":1749108341000,"email":"poh@empasy.com","author":"poh","message":"initial import"}]},"filePathRelative":"synceta/theme-customization.md"}');export{o as comp,u as data};
