import{_ as n,c as s,a,o as t}from"./app-DeddRHAy.js";const d={};function i(l,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="cropper" tabindex="-1"><a class="header-anchor" href="#cropper"><span>Cropper</span></a></h1><p>Image cropping component</p><h2 id="cropperimage" tabindex="-1"><a class="header-anchor" href="#cropperimage"><span>CropperImage</span></a></h2><p>Image cropping component</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;CropperImage ref=&quot;refCropper&quot; :src=&quot;img&quot; @cropend=&quot;handleCropend&quot; style=&quot;width: 40vw&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { CropperImage } from &#39;/@/components/Cropper&#39;;</span>
<span class="line">  import img from &#39;/@/assets/images/header.jpg&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: {</span>
<span class="line">      CropperImage,</span>
<span class="line">    },</span>
<span class="line">    setup() {</span>
<span class="line">      const info = ref(&#39;&#39;);</span>
<span class="line">      const cropperImg = ref(&#39;&#39;);</span>
<span class="line"></span>
<span class="line">      function handleCropend({ imgBase64, imgInfo }) {</span>
<span class="line">        info.value = imgInfo;</span>
<span class="line">        cropperImg.value = imgBase64;</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        img,</span>
<span class="line">        info,</span>
<span class="line">        cropperImg,</span>
<span class="line">        handleCropend,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>src</td><td><code>string</code></td><td>-</td><td>Image Source</td></tr><tr><td>everything</td><td><code>string</code></td><td>-</td><td>Image alt</td></tr><tr><td>circled</td><td><code>boolean</code></td><td><code>false</code></td><td>Circular cropping frame</td></tr><tr><td>realTimePreview</td><td><code>boolean</code></td><td><code>true</code></td><td>Real-time trigger preview</td></tr><tr><td>height</td><td><code>string</code></td><td><code>360px</code></td><td>high</td></tr><tr><td>crossorigin</td><td><code>string</code></td><td>-</td><td>crossorigin</td></tr><tr><td>imageStyle</td><td><code>object</code></td><td>\`\`</td><td>Picture Style</td></tr><tr><td>options</td><td><code>object</code></td><td><code>DefaultOptions</code></td><td>corpperjs configuration items</td></tr></tbody></table><h4 id="defaultoptions" tabindex="-1"><a class="header-anchor" href="#defaultoptions"><span>DefaultOptions</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  aspectRatio: 1,</span>
<span class="line">  zoomable: true,</span>
<span class="line">  zoomOnTouch: true,</span>
<span class="line">  zoomOnWheel: true,</span>
<span class="line">  cropBoxMovable: true,</span>
<span class="line">  cropBoxResizable: true,</span>
<span class="line">  toggleDragModeOnDblclick: true,</span>
<span class="line">  autoCrop: true,</span>
<span class="line">  background: true,</span>
<span class="line">  highlight: true,</span>
<span class="line">  center: true,</span>
<span class="line">  responsive: true,</span>
<span class="line">  restore: true,</span>
<span class="line">  checkCrossOrigin: true,</span>
<span class="line">  checkOrientation: true,</span>
<span class="line">  scalable: true,</span>
<span class="line">  modal: true,</span>
<span class="line">  guides: true,</span>
<span class="line">  movable: true,</span>
<span class="line">  rotatable: true,</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="cropperavatar" tabindex="-1"><a class="header-anchor" href="#cropperavatar"><span>CropperAvatar</span></a></h2><p>Avatar cropping component</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;CropperAvatar :uploadApi=&quot;uploadApi&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { CropperAvatar } from &#39;/@/components/Cropper&#39;;</span>
<span class="line">  import { uploadApi } from &#39;/@/api/sys/upload&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: {</span>
<span class="line">      CropperAvatar,</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th><th>Version</th></tr></thead><tbody><tr><td>width</td><td><code>string,number</code></td><td><code>200px</code></td><td>Image Source</td><td></td></tr><tr><td>uploadApi</td><td><code>({ file: Blob, name: string }) =&gt; Promise&lt;void&gt;</code></td><td>-</td><td>Image upload interface</td><td></td></tr><tr><td>value</td><td><code>String</code></td><td>-</td><td>Current avatar address (v-model)</td><td>2.5.3</td></tr><tr><td>showBtn</td><td><code>Boolean</code></td><td>true</td><td>Whether to display the button</td><td>2.5.3</td></tr><tr><td>btnText</td><td><code>String</code></td><td>-</td><td>Button copy</td><td>2.5.3</td></tr><tr><td>btnProps</td><td><code>ButtonProps</code></td><td>-</td><td>Other properties of the button</td><td>2.5.3</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3><table><thead><tr><th>name</th><th>parameter</th><th>illustrate</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td><code>value: String</code></td><td>Triggered when the avatar upload is completed</td><td>2.5.3</td></tr></tbody></table><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h3><table><thead><tr><th>name</th><th>definition</th><th>illustrate</th><th>Version</th></tr></thead><tbody><tr><td>openModal</td><td><code>()=&gt;void</code></td><td>Open Upload Modal</td><td>2.5.3</td></tr><tr><td>closeModal</td><td><code>()=&gt;void</code></td><td>Close Upload Modal</td><td>2.5.3</td></tr></tbody></table>`,23)]))}const p=n(d,[["render",i]]),c=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/cropper.html","title":"Cropper","lang":"ko-KR","frontmatter":{"order":26},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/cropper.md"}');export{p as comp,c as data};
