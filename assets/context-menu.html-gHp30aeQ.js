import{_ as e,c as s,a as t,o as a}from"./app-CJlkTddN.js";const i={};function l(d,n){return a(),s("div",null,n[0]||(n[0]=[t(`<h1 id="contextmenu" tabindex="-1"><a class="header-anchor" href="#contextmenu"><span>ContextMenu</span></a></h1><p>Create a right-click menu component in a functional way. As long as you can get the dom <code>event</code>object, you can create a right-click menu for it.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;a-button type=&quot;primary&quot; @contextmenu=&quot;handleContext&quot;&gt;Right Click on me&lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { useContextMenu } from &#39;/@/hooks/web/useContextMenu&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { CollapseContainer },</span>
<span class="line">    setup() {</span>
<span class="line">      const [createContextMenu] = useContextMenu();</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line">      function handleContext(e: MouseEvent) {</span>
<span class="line">        createContextMenu({</span>
<span class="line">          event: e,</span>
<span class="line">          items: [</span>
<span class="line">            {</span>
<span class="line">              label: &#39;New&#39;,</span>
<span class="line">              icon: &#39;ant-design:plus-outlined&#39;,</span>
<span class="line">              handler: () =&gt; {</span>
<span class="line">                createMessage.success(&#39;click new&#39;);</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">              label: &#39;Open&#39;,</span>
<span class="line">              icon: &#39;ant-design:folder-open-filled&#39;,</span>
<span class="line">              handler: () =&gt; {</span>
<span class="line">                createMessage.success(&#39;click open&#39;);</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">          ],</span>
<span class="line">        });</span>
<span class="line">      }</span>
<span class="line">      return { handleContext };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="createcontextmenu" tabindex="-1"><a class="header-anchor" href="#createcontextmenu"><span>createContextMenu</span></a></h2><p><strong>Options</strong></p><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>event</td><td><code>Event</code></td><td>-</td><td>-</td><td>The DOM <code>Event</code>object that needs to be created</td></tr><tr><td>items</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>Right-click menu list, <code>ContextMenuItem</code>see the description below</td></tr></tbody></table><p><strong>ContextMenuItem</strong></p><table><thead><tr><th>Attributes</th><th>type</th><th>illustrate</th></tr></thead><tbody><tr><td>label</td><td><code>string</code></td><td>text</td></tr><tr><td>icon</td><td><code>string</code></td><td>Icon, see Icon component</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>Disable</td></tr><tr><td>handler</td><td><code>()=&gt;void</code></td><td>Click to trigger function</td></tr></tbody></table>`,10)]))}const o=e(i,[["render",l]]),r=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/context-menu.html","title":"ContextMenu","lang":"ko-KR","frontmatter":{"order":22},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/context-menu.md"}');export{o as comp,r as data};
