import{_ as s,c as e,a as i,o as a}from"./app-CJlkTddN.js";const l={};function c(p,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="icon-generation" tabindex="-1"><a class="header-anchor" href="#icon-generation"><span>Icon Generation</span></a></h1><p>Icon set pre-generation: This command will generate the selected icon set<br><img src="https://lfs.k.topthink.com/lfs/f355c94c3016738ef6a7c15d8da6b6271d8c75353fc80407a8c80a0bc9a0afd2.dat" alt=""></p><p>Due to the special existence of the icon selector, the project will package more icons. The icons of the icon selector need to be specified in advance and the corresponding files need to be generated.</p><h3 id="generate" tabindex="-1"><a class="header-anchor" href="#generate"><span># Generate</span></a></h3><ul><li>Execute icon generation command</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">yarn gen:icon</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li>Here you can choose to generate locally or online. Both methods have their own advantages and disadvantages. As shown in the figure below</li></ul><p>local means local, online means online, press Enter to confirm<br><img src="https://lfs.k.topthink.com/lfs/5748b8c474448522c1b7fb26a5f56f705b738def0978f219d690fc5d5f453ace.dat" alt=""></p><ul><li><p>Select the icon set you want to generate and press Enter to confirm.<br><img src="https://lfs.k.topthink.com/lfs/54658f7ace421a011628684e2e24d2eac5aa96b052bd6127ba224fc3dbcfa4cf.dat" alt=""></p></li><li><p>Select the directory where the icon is output (the default directory for the project is src/components/Icon/data). You can directly press Enter to select the default directory.<br><img src="https://lfs.k.topthink.com/lfs/4f250793ba8c6e30dfb933f66e6b89cc552f33cd46e0cc97b00a5fd3092514e5.dat" alt=""></p></li></ul><p>At this point the icon set has been generated, and your icon selector now contains the icons of the icon set you selected.</p><p>Be careful not to update too frequently</p><p>If you selected local generation, frequent changes of icon sets may cause icons to be lost or not displayed.</p><h3 id="pros-and-cons" tabindex="-1"><a class="header-anchor" href="#pros-and-cons"><span># Pros and Cons</span></a></h3><ul><li><strong>Online Icon (project default, recommended)</strong></li></ul><p>This method will make an online request when the icon selector uses the icon, and then cache the corresponding icon to the browser. It can effectively reduce the code packaging volume.</p><p>If your project can access the external network, it is recommended to use this method</p><p><strong>Disadvantages:</strong> The icon cannot be displayed in a LAN or in an environment where the external network cannot be accessed.</p><ul><li><strong>Local Icons</strong></li></ul><p>This method will package all icons of the icon selector into js when packaging. No additional online icon requests will be made when using it.</p><p><strong>Disadvantages:</strong> The package size will be larger. The specific size increase depends on the number of icons selected when selecting the icon set.</p><hr><h2 id="component-library-icon-usage" tabindex="-1"><a class="header-anchor" href="#component-library-icon-usage"><span># Component library icon usage</span></a></h2><p>Use <code>ant-design-vue</code>the provided icon</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;StarOutlined /&gt;</span>
<span class="line">  &lt;StarFilled /&gt;</span>
<span class="line">  &lt;StarTwoTone twoToneColor=&quot;#eb2f96&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { StarOutlined, StarFilled, StarTwoTone } from &#39;@ant-design/icons-vue&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { StarOutlined, StarFilled, StarTwoTone },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="svg-sprite-icon" tabindex="-1"><a class="header-anchor" href="#svg-sprite-icon"><span># Svg Sprite Icon</span></a></h2><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>#use</span></a></h3><p>Place the required svg icon <code>src/assets/icons</code>inside</p><p>Example: test.svg</p><ol><li>Using <code>SvgIcon</code>components for display</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;SvgIcon name=&quot;test&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { SvgIcon } from &#39;/@/components/Icon&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { SvgIcon },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="2"><li>Using <code>Icon</code>components for display</li></ol><p>The component <code>｜svg</code>will automatically be used if it ends with<code>SvgIcon</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;Icon name=&quot;test|svg&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { Icon } from &#39;/@/components/Icon&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { Icon },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="iconify-icons" tabindex="-1"><a class="header-anchor" href="#iconify-icons"><span>#Iconify Icons</span></a></h2><p><a href="#!">Please refer to Icon component</a> for usage<a href="#!"></a></p><p>The project uses <a href="https://github.com/antfu/purge-icons/blob/main/packages/vite-plugin-purge-icons/README.md" target="_blank" rel="noopener noreferrer">the vite-plugin-purge-icons</a> plug-in to implement icons.</p><ol><li>Install Dependencies</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">yarn add @iconify/iconify</span>
<span class="line"></span>
<span class="line">yarn add @iconify/json @purge-icons/generated -D</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="2"><li><code>vite.config.ts</code>Import plugins into</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import PurgeIcons from &#39;vite-plugin-purge-icons&#39;;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  plugins: [PurgeIcons()],</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="3"><li>Writing Icon components</li></ol><p>Complete code <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Icon/src/Icon.vue" target="_blank" rel="noopener noreferrer">src/components/Icon/src/Icon.vue</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;SvgIcon :size=&quot;size&quot; :name=&quot;getSvgIcon&quot; v-if=&quot;isSvgIcon&quot; :class=&quot;[$attrs.class]&quot; :spin=&quot;spin&quot; /&gt;</span>
<span class="line">  &lt;span</span>
<span class="line">    v-else</span>
<span class="line">    ref=&quot;elRef&quot;</span>
<span class="line">    :class=&quot;[$attrs.class, &#39;app-iconify anticon&#39;, spin &amp;&amp; &#39;app-iconify-spin&#39;]&quot;</span>
<span class="line">    :style=&quot;getWrapStyle&quot;</span>
<span class="line">  &gt;&lt;/span&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import type { PropType } from &#39;vue&#39;;</span>
<span class="line">  import {</span>
<span class="line">    defineComponent,</span>
<span class="line">    ref,</span>
<span class="line">    watch,</span>
<span class="line">    onMounted,</span>
<span class="line">    nextTick,</span>
<span class="line">    unref,</span>
<span class="line">    computed,</span>
<span class="line">    CSSProperties,</span>
<span class="line">  } from &#39;vue&#39;;</span>
<span class="line"></span>
<span class="line">  import SvgIcon from &#39;./SvgIcon.vue&#39;;</span>
<span class="line">  import Iconify from &#39;@purge-icons/generated&#39;;</span>
<span class="line">  import { isString } from &#39;/@/utils/is&#39;;</span>
<span class="line">  import { propTypes } from &#39;/@/utils/propTypes&#39;;</span>
<span class="line"></span>
<span class="line">  const SVG_END_WITH_FLAG = &#39;|svg&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    name: &#39;GIcon&#39;,</span>
<span class="line">    components: { SvgIcon },</span>
<span class="line">    props: {</span>
<span class="line">      // icon name</span>
<span class="line">      icon: propTypes.string,</span>
<span class="line">      // icon color</span>
<span class="line">      color: propTypes.string,</span>
<span class="line">      // icon size</span>
<span class="line">      size: {</span>
<span class="line">        type: [String, Number] as PropType&lt;string | number&gt;,</span>
<span class="line">        default: 16,</span>
<span class="line">      },</span>
<span class="line">      spin: propTypes.bool.def(false),</span>
<span class="line">      prefix: propTypes.string.def(&#39;&#39;),</span>
<span class="line">    },</span>
<span class="line">    setup(props) {</span>
<span class="line">      const elRef = ref&lt;ElRef&gt;(null);</span>
<span class="line"></span>
<span class="line">      const isSvgIcon = computed(() =&gt; props.icon?.endsWith(SVG_END_WITH_FLAG));</span>
<span class="line">      const getSvgIcon = computed(() =&gt; props.icon.replace(SVG_END_WITH_FLAG, &#39;&#39;));</span>
<span class="line">      const getIconRef = computed(() =&gt; \`\${props.prefix ? props.prefix + &#39;:&#39; : &#39;&#39;}\${props.icon}\`);</span>
<span class="line"></span>
<span class="line">      const update = async () =&gt; {</span>
<span class="line">        if (unref(isSvgIcon)) return;</span>
<span class="line"></span>
<span class="line">        const el = unref(elRef);</span>
<span class="line">        if (!el) return;</span>
<span class="line"></span>
<span class="line">        await nextTick();</span>
<span class="line">        const icon = unref(getIconRef);</span>
<span class="line">        if (!icon) return;</span>
<span class="line"></span>
<span class="line">        const svg = Iconify.renderSVG(icon, {});</span>
<span class="line">        if (svg) {</span>
<span class="line">          el.textContent = &#39;&#39;;</span>
<span class="line">          el.appendChild(svg);</span>
<span class="line">        } else {</span>
<span class="line">          const span = document.createElement(&#39;span&#39;);</span>
<span class="line">          span.className = &#39;iconify&#39;;</span>
<span class="line">          span.dataset.icon = icon;</span>
<span class="line">          el.textContent = &#39;&#39;;</span>
<span class="line">          el.appendChild(span);</span>
<span class="line">        }</span>
<span class="line">      };</span>
<span class="line"></span>
<span class="line">      const getWrapStyle = computed((): CSSProperties =&gt; {</span>
<span class="line">        const { size, color } = props;</span>
<span class="line">        let fs = size;</span>
<span class="line">        if (isString(size)) {</span>
<span class="line">          fs = parseInt(size, 10);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return {</span>
<span class="line">          fontSize: \`\${fs}px\`,</span>
<span class="line">          color: color,</span>
<span class="line">          display: &#39;inline-flex&#39;,</span>
<span class="line">        };</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">      watch(() =&gt; props.icon, update, { flush: &#39;post&#39; });</span>
<span class="line"></span>
<span class="line">      onMounted(update);</span>
<span class="line"></span>
<span class="line">      return { elRef, getWrapStyle, isSvgIcon, getSvgIcon };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot;&gt;</span>
<span class="line">  .app-iconify {</span>
<span class="line">    display: inline-block;</span>
<span class="line">    // vertical-align: middle;</span>
<span class="line"></span>
<span class="line">    &amp;-spin {</span>
<span class="line">      svg {</span>
<span class="line">        animation: loadingCircle 1s infinite linear;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  span.iconify {</span>
<span class="line">    display: block;</span>
<span class="line">    min-width: 1em;</span>
<span class="line">    min-height: 1em;</span>
<span class="line">    background-color: @iconify-bg-color;</span>
<span class="line">    border-radius: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Original text: <a href="https://doc.vvbin.cn/dep/icon.html" target="_blank" rel="noopener noreferrer">https://doc.vvbin.cn/dep/icon.html</a></p>`,51)]))}const d=s(l,[["render",c]]),r=JSON.parse('{"path":"/syncadmin/front-end-configuration/icon-generation.html","title":"Icon Generation","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-configuration/icon-generation.md"}');export{d as comp,r as data};
