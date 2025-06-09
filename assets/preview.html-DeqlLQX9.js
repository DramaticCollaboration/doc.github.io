import{_ as n,c as s,a as t,o as a}from"./app-CC5quYyA.js";const i={};function l(d,e){return a(),s("div",null,e[0]||(e[0]=[t(`<h1 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>Preview</span></a></h1><p>Make the image preview component functional. It is convenient to create components through functions.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;Alert message=&quot;有预览图&quot; type=&quot;info&quot; /&gt;</span>
<span class="line">    &lt;div class=&quot;flex justify-center mt-4&quot;&gt;</span>
<span class="line">      &lt;img :src=&quot;img&quot; v-for=&quot;img in imgList&quot; :key=&quot;img&quot; class=&quot;mr-2&quot; @click=&quot;handleClick(img)&quot; /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;Alert message=&quot;无预览图&quot; type=&quot;info&quot; /&gt;</span>
<span class="line">    &lt;a-button @click=&quot;handlePreview&quot; type=&quot;primary&quot; class=&quot;mt-4&quot;&gt;预览图片&lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { Alert } from &#39;ant-design-vue&#39;;</span>
<span class="line">  import { createImgPreview } from &#39;/@/components/Preview/index&#39;;</span>
<span class="line">  const imgList: string[] = [</span>
<span class="line">    &#39;https://picsum.photos/id/66/346/216&#39;,</span>
<span class="line">    &#39;https://picsum.photos/id/67/346/216&#39;,</span>
<span class="line">    &#39;https://picsum.photos/id/68/346/216&#39;,</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { Alert },</span>
<span class="line">    setup() {</span>
<span class="line">      function handleClick(img: string) {</span>
<span class="line">        createImgPreview({ imageList: [img] });</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      function handlePreview() {</span>
<span class="line">        createImgPreview({ imageList: imgList });</span>
<span class="line">      }</span>
<span class="line">      return { imgList, handleClick, handlePreview };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="createimgpreview" tabindex="-1"><a class="header-anchor" href="#createimgpreview"><span>createImgPreview</span></a></h2><h3 id="parameters-options" tabindex="-1"><a class="header-anchor" href="#parameters-options"><span>Parameters/Options</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>imgList</td><td><code>string[]</code></td><td>-</td><td>-</td><td>Picture list</td></tr><tr><td>index</td><td><code>number</code></td><td>0</td><td>-</td><td>Image index for initial preview</td></tr><tr><td>scaleStep</td><td><code>number</code></td><td>-</td><td>-</td><td>The zoom step value (the amount of zoom each time). The default is automatic (10% of the current zoom value)</td></tr><tr><td>defaultWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>Default width (in px). When this value is provided, all images will be initially scaled to this width</td></tr><tr><td>maskClosable</td><td><code>boolean</code></td><td>false</td><td><code>true/false</code></td><td>Whether to automatically close the preview when clicking the mask</td></tr><tr><td>rememberState</td><td><code>boolean</code></td><td>false</td><td><code>true/false</code></td><td>Whether to remember the zoom status of each image</td></tr><tr><td>onImgLoad</td><td><code>({ index: number, url: string, dom: HTMLImageElement }) =&gt; void</code></td><td>-</td><td>-</td><td>Callback function when the image is loaded successfully</td></tr><tr><td>onImgError</td><td><code>({ index: number, url: string, dom: HTMLImageElement }) =&gt; void</code></td><td>-</td><td>-</td><td>Callback function when image loading fails</td></tr></tbody></table><h3 id="return-value-previewactions" tabindex="-1"><a class="header-anchor" href="#return-value-previewactions"><span>Return value/PreviewActions</span></a></h3><p>Can be used to control the current preview state</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">interface PreviewActions {</span>
<span class="line">  // 重置状态</span>
<span class="line">  resume: () =&gt; void;</span>
<span class="line">  // 关闭预览</span>
<span class="line">  close: () =&gt; void;</span>
<span class="line">  // 显示前一张</span>
<span class="line">  prev: () =&gt; void;</span>
<span class="line">  // 显示后一张</span>
<span class="line">  next: () =&gt; void;</span>
<span class="line">  // 设置缩放比例(针对当前图片)</span>
<span class="line">  setScale: (scale: number) =&gt; void;</span>
<span class="line">  // 设置旋转角度(针对当前图片)</span>
<span class="line">  setRotate: (rotate: number) =&gt; void;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,12)]))}const c=n(i,[["render",l]]),o=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/preview.html","title":"Preview","lang":"ko-KR","frontmatter":{"order":28},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/preview.md"}');export{c as comp,o as data};
