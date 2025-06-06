import{_ as n,c as s,a,o as i}from"./app-DGEuurYf.js";const l={};function t(o,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h1><p>VuePress provides a powerful component system that allows you to use Vue components directly in your Markdown files. This guide will show you how to use and create components.</p><h2 id="using-components" tabindex="-1"><a class="header-anchor" href="#using-components"><span>Using Components</span></a></h2><p>In VuePress, you can use Vue components directly in Markdown files. This allows you to easily create interactive documentation interfaces.</p><h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h3><p>To use components in Markdown, just use them as you would in a Vue template:</p><div class="language-view line-numbers-mode" data-highlighter="prismjs" data-ext="view"><pre><code><span class="line">&lt;InfoCard&gt;</span>
<span class="line">  This is an information card component</span>
<span class="line">&lt;/InfoCard&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="component-properties" tabindex="-1"><a class="header-anchor" href="#component-properties"><span>Component properties</span></a></h3><p>You can pass properties just like in Vue:</p><div class="language-view line-numbers-mode" data-highlighter="prismjs" data-ext="view"><pre><code><span class="line">&lt;InfoCard type=&quot;warning&quot; title=&quot;注意&quot;&gt;</span>
<span class="line">  This is a warning message</span>
<span class="line">&lt;/InfoCard&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-components" tabindex="-1"><a class="header-anchor" href="#create-components"><span>Create Components</span></a></h2><p>You can create your own component by following these steps:</p><h3 id="using-component-creation-script" tabindex="-1"><a class="header-anchor" href="#using-component-creation-script"><span>Using component creation script</span></a></h3><p>We provide a convenience script to create new components:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">pnpm</span> create:component MyComponent</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This will create a new component file in the <code>components</code> directory.</p><h3 id="component-types" tabindex="-1"><a class="header-anchor" href="#component-types"><span>Component Types</span></a></h3><p>When creating a component, you can choose from the following types:</p><ol><li>Basic components</li><li>Functional Components</li><li>Presentation Components</li></ol><p>Each type has its own specific purpose and template.</p><h3 id="component-example" tabindex="-1"><a class="header-anchor" href="#component-example"><span>Component Example</span></a></h3><p>Here is an example of a basic component:</p><div class="language-view line-numbers-mode" data-highlighter="prismjs" data-ext="view"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;my-component&quot;&gt;</span>
<span class="line">    {{ message }}</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">export default {</span>
<span class="line">  name: &quot;MyComponent&quot;,</span>
<span class="line">  data() {</span>
<span class="line">    return {</span>
<span class="line">      message: &quot;Hello from MyComponent!&quot;,</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">.my-component {</span>
<span class="line">  /* Style */</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h2><h3 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions"><span>Naming Conventions</span></a></h3><ul><li>Use PascalCase for component names</li><li>The file name should be consistent with the component name</li><li>UI components use the <code>UI</code> prefix</li></ul><h3 id="document" tabindex="-1"><a class="header-anchor" href="#document"><span>document</span></a></h3><p>Add appropriate documentation for your component:</p><div class="language-view line-numbers-mode" data-highlighter="prismjs" data-ext="view"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;my-demo-component&quot;&gt;</span>
<span class="line">    &lt;!-- Component content --&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">/**</span>
<span class="line"> * @description Demonstration component</span>
<span class="line"> * @example</span>
<span class="line"> * &lt;MyDemoComponent /&gt;</span>
<span class="line"> */</span>
<span class="line">export default {</span>
<span class="line">  name: &quot;MyDemoComponent&quot;,</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="component-registration" tabindex="-1"><a class="header-anchor" href="#component-registration"><span>Component Registration</span></a></h3><p>Components are automatically registered and you can use them directly in Markdown.</p><h2 id="related-resources" tabindex="-1"><a class="header-anchor" href="#related-resources"><span>Related Resources</span></a></h2><ul><li><a href="https://cn.vuejs.org/guide/components/registration.html" target="_blank" rel="noopener noreferrer">Vue.js component documentation</a></li><li><a href="https://v2.vuepress.vuejs.org/zh/guide/page.html#Component" target="_blank" rel="noopener noreferrer">VuePress Component Guide</a></li></ul><h2 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h2><h3 id="url-path-issues" tabindex="-1"><a class="header-anchor" href="#url-path-issues"><span>URL path issues</span></a></h3><p>Make sure all URL paths used in components are correct. For static resources, use relative or absolute paths.</p><h3 id="style-isolation" tabindex="-1"><a class="header-anchor" href="#style-isolation"><span>Style Isolation</span></a></h3><p>Use <code>scoped</code> styles to ensure component styles don&#39;t affect other components:</p><div class="language-view line-numbers-mode" data-highlighter="prismjs" data-ext="view"><pre><code><span class="line">&lt;style scoped&gt;</span>
<span class="line">/* Component style */</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39)]))}const c=n(l,[["render",t]]),r=JSON.parse('{"path":"/synceta/components.html","title":"Component","lang":"ko-KR","frontmatter":{"title":"Component"},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":2,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"},{"hash":"c921d4afd7014a6297baf4d4ae62fd4fa0559e84","time":1749108341000,"email":"poh@empasy.com","author":"poh","message":"initial import"}]},"filePathRelative":"synceta/components.md"}');export{c as comp,r as data};
