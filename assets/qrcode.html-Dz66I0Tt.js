import{_ as s,c as e,a,o as i}from"./app-QFoJTndn.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="qrcode" tabindex="-1"><a class="header-anchor" href="#qrcode"><span>Qrcode</span></a></h1><p>Component for generating QR codes</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;QrCode :value=&quot;qrCodeUrl&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref, unref } from &#39;vue&#39;;</span>
<span class="line">  import { QrCode, QrCodeActionType } from &#39;/@/components/Qrcode/index&#39;;</span>
<span class="line">  import LogoImg from &#39;/@/assets/images/logo.png&#39;;</span>
<span class="line">  const qrCodeUrl = &#39;https://www.vvbin.cn&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { QrCode },</span>
<span class="line">    setup() {</span>
<span class="line">      const qrRef = ref&lt;Nullable&lt;QrCodeActionType&gt;&gt;(null);</span>
<span class="line">      function download() {</span>
<span class="line">        const qrEl = unref(qrRef);</span>
<span class="line">        if (!qrEl) return;</span>
<span class="line">        qrEl.download(&#39;文件名&#39;);</span>
<span class="line">      }</span>
<span class="line">      return {</span>
<span class="line">        qrCodeUrl,</span>
<span class="line">        LogoImg,</span>
<span class="line">        download,</span>
<span class="line">        qrRef,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  .qrcode-demo-item {</span>
<span class="line">    width: 30%;</span>
<span class="line">    margin-right: 1%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>QR code address</td></tr><tr><td>options</td><td><code>QRCodeRenderersOptions</code></td><td>-</td><td>-</td><td>QR code configuration, see QRCodeRenderersOptions</td></tr><tr><td>width</td><td><code>number</code></td><td>2</td><td>-</td><td>width</td></tr><tr><td>logo</td><td><code>string｜LogoType</code></td><td>-</td><td>-</td><td>Middle logo configuration, see LogoType</td></tr><tr><td>tag</td><td><code>渲染标签</code></td><td>canvas</td><td><code>canvas | img</code></td><td>img does not support embedded logo</td></tr></tbody></table><p><strong>QRCodeRenderersOptions</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 定义margin的宽度。.</span>
<span class="line"> * Default: 4</span>
<span class="line"> */</span>
<span class="line">margin?: number;</span>
<span class="line">/**</span>
<span class="line"> * 比例因子。值1表示每个模块1像素（黑点）。</span>
<span class="line"> * Default: 4</span>
<span class="line"> */</span>
<span class="line">scale?: number;</span>
<span class="line">/**</span>
<span class="line"> * 为输出图像强制指定宽度。</span>
<span class="line"> * 如果宽度太小而不能包含qr符号，则此选项将被忽略。</span>
<span class="line"> * 优先于规模。</span>
<span class="line"> */</span>
<span class="line">width?: number;</span>
<span class="line">color?: {</span>
<span class="line">  /**</span>
<span class="line">   * 暗模块的颜色。值必须为十六进制格式（RGBA）.</span>
<span class="line">   * 注意：深色应始终比color.light暗。.</span>
<span class="line">   * Default: #000000ff</span>
<span class="line">   */</span>
<span class="line">  dark?: string;</span>
<span class="line">  /**</span>
<span class="line">   * 照明模块的颜色。值必须为十六进制格式（RGBA）.</span>
<span class="line">   * Default: #ffffffff</span>
<span class="line">   */</span>
<span class="line">  light?: string;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>LogoType</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  // logo图片</span>
<span class="line">  src: string;</span>
<span class="line">  // logo大小</span>
<span class="line">  logoSize: number;</span>
<span class="line">  // 背景颜色</span>
<span class="line">  bgColor: string;</span>
<span class="line">  // logo圆角</span>
<span class="line">  logoRadius: number;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><table><thead><tr><th>name</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>download</td><td><code>Function(fileName:string)</code></td><td>download</td></tr></tbody></table><h2 id="event" tabindex="-1"><a class="header-anchor" href="#event"><span>event</span></a></h2><table><thead><tr><th>name</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>done</td><td><code>(data: QrcodeDoneEventParams)=&gt;void</code></td><td>Drawing completed</td></tr><tr><td>error</td><td><code>(error)=&gt;void</code></td><td>An error occurred while generating the QR code</td></tr></tbody></table><p>QrcodeDoneEventParams</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  url: string;  // 二维码DataURL数据</span>
<span class="line">  ctx?: CanvasRenderingContext2D;  // 该对象为画布的2D渲染上下文，仅在tag为canvas时有效，可用于自定义绘制</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><code>done</code>The QR code can be drawn in a custom way in the event callback. The sample code is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;QrCode</span>
<span class="line">  :value=&quot;qrCodeUrl&quot;</span>
<span class="line">  :width=&quot;200&quot;</span>
<span class="line">  @done=&quot;onQrcodeDone&quot;</span>
<span class="line">/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">function onQrcodeDone({ ctx }) {</span>
<span class="line">  if (ctx instanceof CanvasRenderingContext2D) {</span>
<span class="line">    // 额外绘制</span>
<span class="line">    ctx.fillStyle = &#39;black&#39;;</span>
<span class="line">    ctx.font = &#39;16px &quot;微软雅黑&quot;&#39;;</span>
<span class="line">    ctx.textBaseline = &#39;bottom&#39;;</span>
<span class="line">    ctx.textAlign = &#39;center&#39;;</span>
<span class="line">    ctx.fillText(&#39;你帅你先扫&#39;, 100, 195, 200);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>For <code>CanvasRenderingContext2D</code>more information and drawing methods, please refer to <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noopener noreferrer">MDN</a></p>`,26)]))}const c=s(l,[["render",d]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/qrcode.html","title":"Qrcode","lang":"ko-KR","frontmatter":{"order":15},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/qrcode.md"}');export{c as comp,p as data};
