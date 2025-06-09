import{_ as s,c as e,a,o as i}from"./app-CC5quYyA.js";const l={};function t(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="configure-project-multi-page-entry" tabindex="-1"><a class="header-anchor" href="#configure-project-multi-page-entry"><span>Configure project multi-page entry</span></a></h1><h4 id="_1-create-a-new-home-html-in-the-project-root-directory" tabindex="-1"><a class="header-anchor" href="#_1-create-a-new-home-html-in-the-project-root-directory"><span>1. Create a new home.html in the project root directory</span></a></h4><p><img src="https://lfs.k.topthink.com/lfs/e6b51f745d26d9957dab84678eae92ad7ae9c92b07086954516cb6b14d676294.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">	&lt;head&gt;</span>
<span class="line">		&lt;meta charset=&quot;UTF-8&quot; /&gt;</span>
<span class="line">		&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span>
<span class="line">		&lt;title&gt;&lt;%= title %&gt;&lt;/title&gt;</span>
<span class="line">	&lt;/head&gt;</span>
<span class="line">	&lt;body&gt;</span>
<span class="line">		&lt;div id=&quot;app&quot;&gt;</span>
<span class="line">		&lt;/div&gt;</span>
<span class="line">	&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_2-create-a-new-multipage-home-directory-and-app-vue-and-main-ts-files-in-the-src-directory" tabindex="-1"><a class="header-anchor" href="#_2-create-a-new-multipage-home-directory-and-app-vue-and-main-ts-files-in-the-src-directory"><span>2. Create a new multiPage/home directory and App.vue and main.ts files in the src directory</span></a></h4><p><img src="https://lfs.k.topthink.com/lfs/5387d0bd3eb67a03f6adfb1e24a48e50aa305663eb6118877ca9efa98b24b85f.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;home 页面&lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup lang=&quot;ts&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  div {</span>
<span class="line">    background-color: red;</span>
<span class="line">    color: #fff;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { createApp } from &#39;vue&#39;;</span>
<span class="line">import App from &#39;./App.vue&#39;;</span>
<span class="line">const app = createApp(App);</span>
<span class="line">app.mount(&#39;#app&#39;);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_3-replace-htmlplugin-in-build-vite-plugin-html-ts" tabindex="-1"><a class="header-anchor" href="#_3-replace-htmlplugin-in-build-vite-plugin-html-ts"><span>3. Replace htmlPlugin in build/vite/plugin/html.ts</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const htmlPlugin: PluginOption[] = createHtmlPlugin({</span>
<span class="line">    minify: isBuild,</span>
<span class="line">    pages: [</span>
<span class="line">      {</span>
<span class="line">        entry: \`src/main.ts\`,</span>
<span class="line">        template: \`index.html\`,</span>
<span class="line">        filename: &#39;index.html&#39;,</span>
<span class="line">        injectOptions: {</span>
<span class="line">          // 修改模板html的标题</span>
<span class="line">          data: {</span>
<span class="line">            title: VITE_GLOB_APP_TITLE,</span>
<span class="line">          },</span>
<span class="line">          // 将app.config.js文件注入到模板html中</span>
<span class="line">          tags: isBuild</span>
<span class="line">            ? [</span>
<span class="line">                {</span>
<span class="line">                  tag: &#39;script&#39;,</span>
<span class="line">                  attrs: {</span>
<span class="line">                    src: getAppConfigSrc(),</span>
<span class="line">                  },</span>
<span class="line">                },</span>
<span class="line">              ]</span>
<span class="line">            : [],</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        entry: \`src/multiPage/home/main.ts\`,</span>
<span class="line">        template: \`home.html\`,</span>
<span class="line">        filename: &#39;home.html&#39;,</span>
<span class="line">        injectOptions: {</span>
<span class="line">          // 向ejs模板中注入数据</span>
<span class="line">          data: {</span>
<span class="line">            title: &#39;home&#39;,</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  });</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><img src="https://lfs.k.topthink.com/lfs/b51a9eca23d0fe4d30add2aa181dfd71df34e14889b0953f6d35d0ab66f2307c.dat" alt=""></p><h4 id="effect" tabindex="-1"><a class="header-anchor" href="#effect"><span>Effect:</span></a></h4><p><img src="https://lfs.k.topthink.com/lfs/cee8c3e14b1af5d1af0016fd0c71b6103dbc9ce5c8e9d5c6c3560279ff4f6252.dat" alt=""></p>`,17)]))}const d=s(l,[["render",t]]),r=JSON.parse('{"path":"/syncadmin/front-end-experience/configure-project-multi-page-entry.html","title":"Configure project multi-page entry","lang":"ko-KR","frontmatter":{"order":15},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/front-end-experience/configure-project-multi-page-entry.md"}');export{d as comp,r as data};
