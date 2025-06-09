import{_ as n,c as s,a,o as t}from"./app-CU20V-HQ.js";const i={};function r(l,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="basicdrawer-drawer-component" tabindex="-1"><a class="header-anchor" href="#basicdrawer-drawer-component"><span>BasicDrawer drawer component</span></a></h1><p>Encapsulate <code>antv</code>the drawer component and expand functions such as drag, full screen, and adaptive height.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p><strong>Since the internal code of the drawer is usually separated into separate files, it is recommended to develop it as a separate component, so the examples are explained in separate files.</strong></p><p><strong>Independent component code, used to write the content inside the component</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicDrawer v-bind=&quot;$attrs&quot; title=&quot;Drawer Title&quot; width=&quot;50%&quot;&gt; Drawer Info. &lt;/BasicDrawer&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicDrawer } from &#39;/@/components/Drawer&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicDrawer },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>Page reference popup</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;Drawer @register=&quot;register&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { Alert } from &#39;ant-design-vue&#39;;</span>
<span class="line">  import { useDrawer } from &#39;/@/components/Drawer&#39;;</span>
<span class="line">  import Drawer from &#39;./Drawer.vue&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { Drawer },</span>
<span class="line">    setup() {</span>
<span class="line">      const [register, { openDrawer }] = useDrawer();</span>
<span class="line">      return {</span>
<span class="line">        register,</span>
<span class="line">        openDrawer,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="usedrawer" tabindex="-1"><a class="header-anchor" href="#usedrawer"><span>useDrawer</span></a></h2><p><strong>useDrawer</strong> is used to manipulate components</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const [register, { openDrawer, setDrawerProps }] = useDrawer();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>register</strong></p><p>Register is used for registration <code>useDrawer</code>. If you need to use <code>useDrawer</code>the provided API, you must <code>register</code>pass it into the component <code>onRegister</code>.</p><p>The principle is actually very simple, that is, the Vue components communicate from child to parent, and <code>emit(&quot;register&quot;，instance)</code>it is implemented internally.</p><p>At the same time, the independent components need to <code>attrs</code>be bound to the Drawer.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;BasicDrawer v-bind=&quot;$attrs&quot;&gt; Drawer Info. &lt;/BasicDrawer&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>openDrawer</strong></p><p>Used to open/close pop-up window</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// true/false: 打开关闭弹窗</span>
<span class="line">// data: 传递到子组件的数据</span>
<span class="line">openDrawer(true, data);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>closeDrawer</strong></p><p>To close the pop-up window</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">closeDrawer();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>setDrawerProps</strong></p><p>Used to change the props parameters of the drawer. Because the drawer content is an independent component, it may be troublesome to change the props on the external page, so <strong>setDrawerProps</strong> is provided to facilitate changing the props of the internal drawer.</p><p><a href="https://vvbin.cn/doc-next/components/drawer.html#Props" target="_blank" rel="noopener noreferrer">Props</a> content can be seen below</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">setDrawerProps(props);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="usedrawerinner" tabindex="-1"><a class="header-anchor" href="#usedrawerinner"><span>useDrawerInner</span></a></h2><p>Used for independent Drawer internal calls</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicDrawer v-bind=&quot;$attrs&quot; @register=&quot;register&quot; title=&quot;Drawer Title&quot; width=&quot;50%&quot;&gt;</span>
<span class="line">    Drawer Info.</span>
<span class="line">    &lt;a-button type=&quot;primary&quot; @click=&quot;closeDrawer&quot;&gt;内部关闭drawer&lt;/a-button&gt;</span>
<span class="line">  &lt;/BasicDrawer&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicDrawer, useDrawerInner } from &#39;/@/components/Drawer&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicDrawer },</span>
<span class="line">    setup() {</span>
<span class="line">      const [register, { closeDrawer }] = useDrawerInner();</span>
<span class="line">      return { register, closeDrawer };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>useModalInner</strong> is used to operate independent components</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const [register, { closeModal, setModalProps }] = useModalInner(callback);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>callback</strong></p><p>type:<code>(data:any)=&gt;void</code></p><p>The callback function is used to receive the value passed by the second parameter of openDrawer</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">openDrawer((data: any) =&gt; {</span>
<span class="line">  console.log(data);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>closeDrawer</strong></p><p>For closing drawers</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">closeDrawer();</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>changeOkLoading</strong></p><p>Used to modify the loading state of the confirmation button</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// true or false</span>
<span class="line">changeOkLoading(true);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>changeLoading</strong></p><p>Used to modify the loading state of the modal</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// true or false</span>
<span class="line">changeLoading(true);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>setDrawerProps</strong></p><p>Used to change the props parameter of the drawer. Because the modal content is an independent component, it may be troublesome to change the props on the external page, so <strong>setDrawerProps</strong> is provided to facilitate changing the props of the internal drawer.</p><p><a href="https://vvbin.cn/doc-next/components/drawer.html#Props" target="_blank" rel="noopener noreferrer">Props</a> content can be seen below</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><p>Reminder</p><p>In addition to the following parameters, props in the official documentation are also supported. For details, please refer to <a href="https://www.antdv.com/components/drawer-cn" target="_blank" rel="noopener noreferrer">antv drawer</a></p><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>isDetail</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Whether it is details mode</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Loading state</td></tr><tr><td>loadingText</td><td><code>string</code></td><td>\`\`</td><td>-</td><td>loading text</td></tr><tr><td>showDetailBack</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>IsDetail=true to display the back button?</td></tr><tr><td>closeFunc</td><td><code>() =&gt; Promise&lt;boolean&gt;</code></td><td>-</td><td>-</td><td>Customize the closing function, return <code>true</code>closed, otherwise do not close</td></tr><tr><td>showFooter</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Whether to display the bottom</td></tr><tr><td>footerHeight</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>Bottom area height</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><table><thead><tr><th>event</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>close</td><td><code>(e)=&gt;void</code></td><td>Click to close callback</td></tr><tr><td>visible-change</td><td><code>(visible:boolean)=&gt;void</code></td><td>Triggered when the pop-up window is opened or closed</td></tr><tr><td>ok</td><td><code>(e)=&gt;void</code></td><td>Click OK callback</td></tr></tbody></table>`,66)]))}const o=n(i,[["render",r]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/basicDrawer-drawer-component.html","title":"BasicDrawer drawer component","lang":"ko-KR","frontmatter":{"order":6},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/ui-component-library/basicDrawer-drawer-component.md"}');export{o as comp,p as data};
