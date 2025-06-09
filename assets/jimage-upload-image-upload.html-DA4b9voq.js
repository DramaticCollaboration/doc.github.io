import{_ as e,c as s,a as n,o as t}from"./app-CC5quYyA.js";const d={};function l(i,a){return t(),s("div",null,a[0]||(a[0]=[n(`<h1 id="jimageupload-image-upload✔" tabindex="-1"><a class="header-anchor" href="#jimageupload-image-upload✔"><span>JImageUpload Image upload✔</span></a></h1><p>The JImageUpload component can upload images.</p><h2 id="component-parameters" tabindex="-1"><a class="header-anchor" href="#component-parameters"><span>Component Parameters</span></a></h2><table><thead><tr><th>parameter</th><th>type</th><th>Required</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>value(v-model)</td><td>string / array</td><td></td><td>&#39;&#39;</td><td></td></tr><tr><td>text</td><td>string</td><td></td><td>&#39;Upload&#39;</td><td>Button display text</td></tr><tr><td>listType</td><td>string</td><td></td><td>&#39;picture-card&#39;</td><td>The built-in styles of the upload list support three basic styles <code>picture</code>and<code>picture-card</code></td></tr><tr><td>bizPath</td><td>string</td><td></td><td>&#39;temp&#39;</td><td>Used to control the business path of file upload</td></tr><tr><td>disabled</td><td>bool</td><td></td><td>false</td><td>Disable</td></tr><tr><td>fileMax</td><td>number</td><td></td><td>1</td><td>Maximum upload quantity</td></tr></tbody></table><h2 id="show-results" tabindex="-1"><a class="header-anchor" href="#show-results"><span>Show results</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/49342387d27e38150ee850a4ccb6c00d63e8ee4f4378089b4198b90ae472524d.dat" alt=""></p><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const schemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;images&#39;,</span>
<span class="line">      component: &#39;JImageUpload&#39;,</span>
<span class="line">      label: &#39;上传图片（1）&#39;,</span>
<span class="line">      helpMessage: &#39;最多上传1张图片&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        fileMax : 1,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;images2&#39;,</span>
<span class="line">      component: &#39;JImageUpload&#39;,</span>
<span class="line">      label: &#39;上传图片（picture）&#39;,</span>
<span class="line">      helpMessage: &#39;最多上传3张图片&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        listType : &#39;picture&#39;,</span>
<span class="line">        fileMax : 3,</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,9)]))}const r=e(d,[["render",l]]),c=JSON.parse('{"path":"/syncadmin/ui-component-library/jimage-upload-image-upload.html","title":"JImageUpload Image upload✔","lang":"ko-KR","frontmatter":{"order":20},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/ui-component-library/jimage-upload-image-upload.md"}');export{r as comp,c as data};
