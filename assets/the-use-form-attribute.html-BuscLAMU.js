import{_ as a,c as l,a as n,b as i,d,w as c,r as t,o as p,e as r}from"./app-CJlkTddN.js";const v={};function o(u,s){const e=t("RouteLink");return p(),l("div",null,[s[1]||(s[1]=n(`<h1 id="the-useform-attribute" tabindex="-1"><a class="header-anchor" href="#the-useform-attribute"><span>The useForm attribute</span></a></h1><blockquote><p><code>useForm</code>There are some methods and properties in it, such as &quot;fix title length&quot;, &quot;get form value&quot;, &quot;clear form validation&quot;, etc.</p></blockquote><h2 id="userformother-attributes" tabindex="-1"><a class="header-anchor" href="#userformother-attributes"><span><code>userForm</code>Other attributes</span></a></h2><h3 id="_1-fixed-the-width-of-the-label-title" tabindex="-1"><a class="header-anchor" href="#_1-fixed-the-width-of-the-label-title"><span>1. Fixed the width of the label title</span></a></h3><p><code>labelCol</code>Control <code>labelWidth</code>the width of the title by</p><p>Page Effects</p><p>Code Sample</p><blockquote><p>The distance to the left of &quot;Name, Age&quot; is the width of the title.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/6d2c5b1dcf169687ff7effd228991b7f7ce30337c826573bb91d9c1c4badd9d0.dat" alt=""></p><blockquote><p><code>labelCol</code>, <code>labelWidth</code>the effect is the same, only one method is needed</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/213935cfb7726ebc1c9346aeaed28ec573844ce147b56417d2d20b2ac13dbcc6.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      label: &#39;姓名&#39;,</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;年龄&#39;,</span>
<span class="line">      field: &#39;password&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;生日&#39;,</span>
<span class="line">      field: &#39;birthday&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;头像&#39;,</span>
<span class="line">      field: &#39;avatar&#39;,</span>
<span class="line">      component: &#39;JImageUpload&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm] = useForm({</span>
<span class="line">    //注册表单列</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    showResetButton: false,</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">    //使用labelCol的样式参数来控制标题宽度</span>
<span class="line">    labelCol: { style: { width: &#39;150px&#39; } },</span>
<span class="line">    //字体对齐方式（left:左对齐，right：右对齐），默认右对齐</span>
<span class="line">    labelAlign:&#39;right&#39;</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 点击提交按钮的value值</span>
<span class="line">   * @param values</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values: any) {</span>
<span class="line">    console.log(&#39;提交按钮数据::::&#39;, values);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-title-and-field-layout" tabindex="-1"><a class="header-anchor" href="#_2-title-and-field-layout"><span>2. Title and field layout</span></a></h3><p>Adaptive width can be achieved through <code>userForm</code>the parameters <code>labelCol</code>and<code>wrapperCol</code></p><h4 id="_2-1-effect-and-code-display" tabindex="-1"><a class="header-anchor" href="#_2-1-effect-and-code-display"><span>2.1 Effect and code display</span></a></h4><p>Page Effects</p><p>Code Sample</p><blockquote><p><code>1200px</code>Display effect when the page width is greater than</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/03443c8652f97644f7ff45d971036269e350c45ca2fe795c6633965381c673b8.dat" alt=""></p><blockquote><p><code>576px</code>Display effect when the page is smaller than</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/b6ec398a6ee927e197988be6aca20c49f6f495598c80c235f06aeb955c7e18c7.dat" alt=""></p><blockquote><p>Responsive layout usage, please refer to other parameters<code>2.2 labelCol和wrapperCol参数</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/2f9ce4d29edb386bd982394dca7dec3fe794669d92a2448ddd42dc7605a1d407.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 标题与字段布局 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      label: &#39;姓名&#39;,</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;年龄&#39;,</span>
<span class="line">      field: &#39;password&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;生日&#39;,</span>
<span class="line">      field: &#39;birthday&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;头像&#39;,</span>
<span class="line">      field: &#39;avatar&#39;,</span>
<span class="line">      component: &#39;JImageUpload&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm] = useForm({</span>
<span class="line">    //注册表单列</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">    actionColOptions: { span: 12 },</span>
<span class="line">    //控制标题宽度占比</span>
<span class="line">    labelCol: {</span>
<span class="line">      xs: 2,</span>
<span class="line">      sm: 2,</span>
<span class="line">      md: 2,</span>
<span class="line">      lg: 9,</span>
<span class="line">      xl: 3,</span>
<span class="line">      xxl: 2,</span>
<span class="line">    },</span>
<span class="line">    //控制组件宽度占比</span>
<span class="line">    wrapperCol: {</span>
<span class="line">      xs: 15,</span>
<span class="line">      sm: 14,</span>
<span class="line">      md: 16,</span>
<span class="line">      lg: 17,</span>
<span class="line">      xl: 19,</span>
<span class="line">      xxl: 20,</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_2-2-labelcoland-wrappercolproperties" tabindex="-1"><a class="header-anchor" href="#_2-2-labelcoland-wrappercolproperties"><span>2.2 <code>labelCol</code>and <code>wrapperCol</code>Properties</span></a></h4><table><thead><tr><th>member</th><th>illustrate</th><th>type</th></tr></thead><tbody><tr><td>flex</td><td>Flex layout padding</td><td>string</td></tr><tr><td>offset</td><td>The number of grid cells on the left side of the grid. The default value is 0.</td><td>number</td></tr><tr><td>order</td><td>Grid order, <code>flex</code> valid in layout mode, the default value is 0</td><td>number</td></tr><tr><td>pull</td><td>The number of grid cells to the left. The default value is 0.</td><td>number</td></tr><tr><td>push</td><td>The grid moves right by a certain number of grids. The default value is 0.</td><td>number</td></tr><tr><td>span</td><td>The number of grid places. When it is 0, it is equivalent to <code>display: none</code></td><td>number</td></tr><tr><td>xs</td><td><code>&lt;576px</code> Responsive Grid</td><td>number</td></tr><tr><td>sm</td><td><code>≥576px</code> Responsive Grid</td><td>number</td></tr><tr><td>md</td><td><code>≥768px</code> Responsive Grid</td><td>number</td></tr><tr><td>lg</td><td><code>≥992px</code> Responsive Grid</td><td>number</td></tr><tr><td>xl</td><td><code>≥1200px</code> Responsive Grid</td><td>number</td></tr><tr><td>xxl</td><td><code>≥1600px</code> Responsive Grid</td><td>number</td></tr></tbody></table><h3 id="_3-form-layout" tabindex="-1"><a class="header-anchor" href="#_3-form-layout"><span>3. Form layout</span></a></h3><ul><li>The form has two different layout modes, and we can <code>layout</code>change the form layout through parameters.</li></ul><p>Page Effects</p><p>Code Sample</p><blockquote><p><code>layout</code>Attribute support <code>vertical</code>(title on top, components on bottom), <code>horizontal</code>(title on the left, components on the right)</p></blockquote><ul><li><code>vertical</code>The effect of layout</li></ul><p><img src="https://lfs.k.topthink.com/lfs/7e3ab51c3c5ac423cd3f8908db8f5f842a414aafbaa5bd302c2bd57764de702a.dat" alt=""></p><ul><li><code>horizontal</code>The effect of layout</li></ul><p><img src="https://lfs.k.topthink.com/lfs/8fa086fccc8e411592b45b69c10a25df21c3dc2719807361323b7d555845f2c7.dat" alt=""></p><ul><li>Code Sample</li></ul><p><img src="https://lfs.k.topthink.com/lfs/658798655a7824573a2344b4c235f3d936d3c9984609e36bfc2ee690ebe75df3.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 表单布局 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      label: &#39;会议名称&#39;,</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;参会地点&#39;,</span>
<span class="line">      field: &#39;meetingLocation&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;参与人数&#39;,</span>
<span class="line">      field: &#39;numberOfPart&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;会议纪要&#39;,</span>
<span class="line">      field: &#39;meetingMinutes&#39;,</span>
<span class="line">      component: &#39;JUpload&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm] = useForm({</span>
<span class="line">    //注册表单列</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //不显示查询和重置按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">    //默认row行配置,当 layout 为 horizontal 生效</span>
<span class="line">    rowProps: { gutter: 24, justify: &#39;center&#39;, align: &#39;middle&#39; },</span>
<span class="line">    //全局col列占比(每列显示多少位)，和schemas中的colProps属性一致</span>
<span class="line">    baseColProps: { span: 12 },</span>
<span class="line">    //row行的样式</span>
<span class="line">    baseRowStyle: { width: &#39;100%&#39; },</span>
<span class="line">    //表单布局属性，支持（vertical,horizontal），默认为horizontal</span>
<span class="line">    layout: &#39;horizontal&#39;,</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_4-action-buttons" tabindex="-1"><a class="header-anchor" href="#_4-action-buttons"><span>4. Action Buttons</span></a></h3><ul><li>Scenario 1: Hide the button when it is not needed.</li><li>Scenario 2: Customize the action button and handle your own logic</li></ul><p>Page Effects</p><p>Code Sample</p><ul><li>Hide the button when it is not needed.</li></ul><blockquote><p>Both the query button and the reset button exist</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/d37d4544b6a5a39ff31a9b370b304d8ee39308ad7991c24c5e1fa1c731d5c793.dat" alt=""></p><blockquote><p>Hide query button</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/533a79b86b9efe1fae1ceb47fc305e1a1c575db090258cc4d212c64b235fb550.dat" alt=""></p><blockquote><p>Hide reset button</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/e0f17f2b0e7123a2ae0e2538c9f43dfee86d3db12a5c53c28b3d9f6b813dbac2.dat" alt=""></p><blockquote><p>Dynamically changeable properties through <code>useForm</code>hooks<code>setProps</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/348785025c1373dbc7e41a88c6120b036dec901f9011902560cd4bb892ee669b.dat" alt=""></p><ul><li>Customize the action button and handle your own logic</li></ul><blockquote><p>Query button, reset button custom events</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/9def425e7ac8e3a3fc6496361dc7615f836b30617158b93a6008c6df0d811432.dat" alt=""></p><blockquote><p>Use <code>submitFunc</code>to <code>resetFunc</code>customize the logic after clicking the operation button</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/aefceb37fd245e20421230ebafe5291bf0357c5bdbe69080e775da70233b7ca3.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 操作按钮 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div style=&quot;margin: 20px auto; text-align: center&quot;&gt;</span>
<span class="line">    &lt;!-- 通过setProps 可以设置 userForm 中的属性 --&gt;</span>
<span class="line">    &lt;!--  showActionButtonGroup 显示或者隐藏查询、重置按钮  --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ showActionButtonGroup: false })&quot; class=&quot;mr-2&quot;&gt; 隐藏操作按钮 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ showActionButtonGroup: true })&quot; class=&quot;mr-2&quot;&gt; 显示操作按钮 &lt;/a-button&gt;</span>
<span class="line">    &lt;!--  showActionButtonGroup 显示或者隐藏重置按钮  --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ showResetButton: false })&quot; class=&quot;mr-2&quot;&gt; 隐藏重置按钮 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ showResetButton: true })&quot; class=&quot;mr-2&quot;&gt; 显示重置按钮 &lt;/a-button&gt;</span>
<span class="line">    &lt;!--  showActionButtonGroup 显示或者隐藏查询按钮  --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ showSubmitButton: false })&quot; class=&quot;mr-2&quot;&gt; 隐藏查询按钮 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ showSubmitButton: true })&quot; class=&quot;mr-2&quot;&gt; 显示查询按钮 &lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container&#39;;</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * setProps方法可以动态设置useForm中的属性</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { setProps }] = useForm({</span>
<span class="line">    //自定义查询按钮的文本和图标</span>
<span class="line">    submitButtonOptions: { text: &#39;查询&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    //自定义重置按钮的文本和图标</span>
<span class="line">    resetButtonOptions: { text: &#39;重置&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    //操作按钮的位置</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">    //提交按钮的自定义事件</span>
<span class="line">    submitFunc: customSubmitFunc,</span>
<span class="line">    //重置按钮的自定义时间</span>
<span class="line">    resetFunc: customResetFunc,</span>
<span class="line">    //显示操作按钮</span>
<span class="line">    showActionButtonGroup: true,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 重置按钮点击事件</span>
<span class="line">   */</span>
<span class="line">  async function customResetFunc() {</span>
<span class="line">    console.log(&#39;重置按钮点击事件，此处处理重置按钮的逻辑&#39;);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 查询按钮点击事件</span>
<span class="line">   */</span>
<span class="line">  async function customSubmitFunc() {</span>
<span class="line">    console.log(&#39;查询按钮点击事件，此处处理查询按钮的逻辑&#39;);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 点击提交按钮的value值</span>
<span class="line">   * @param values</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values: any) {</span>
<span class="line">    console.log(&#39;提交按钮数据::::&#39;, values);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_5-form-size-shrink-text-focus-disable" tabindex="-1"><a class="header-anchor" href="#_5-form-size-shrink-text-focus-disable"><span>5. Form size, shrink, text focus, disable</span></a></h3><p>Page Effects</p><p>Code Sample</p><blockquote><p>By default, the focus is on &quot;Visitors&quot; and the input box is blue.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/c45dffe268edccb252c708edcedfd21bf63c75d32a28536eb9ecd8b958806e34.dat" alt=""></p><blockquote><p>Maximum display effect of the form</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/e897b2516cfa04a2e3442ccc5d3bb6edff72b8981b7bee674238ac1960c53cc1.dat" alt=""></p><blockquote><p>Form disabled effect</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/2d45ceb2e73d3de1b5c6b245669c864532c952a9df3df3392442440f4d1b1267.dat" alt=""></p><blockquote><p>Compact form display effect</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/7f9c693e1c990860b133dbdb9720047a7a3efbeb6fd86cc82e0f6ee3419d7ec4.dat" alt=""></p><blockquote><p>Dynamically changeable properties through <code>useForm</code>hooks<code>setProps</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/31072a672f24a97874c8f4eb53b032495600a0497e9219a31cdb89984c303e19.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 操作禁用表单 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div style=&quot;margin: 20px auto; text-align: center&quot;&gt;</span>
<span class="line">    &lt;!-- 通过setProps 可以设置 userForm 中的属性 --&gt;</span>
<span class="line">    &lt;!-- 表单大小，默认为 default   --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ size: &#39;large&#39; })&quot; class=&quot;mr-2&quot;&gt; 更改大小为最大 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ size: &#39;default&#39; })&quot; class=&quot;mr-2&quot;&gt; 还原大小 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ size: &#39;small&#39; })&quot; class=&quot;mr-2&quot;&gt; 更改大小为最小 &lt;/a-button&gt;</span>
<span class="line">    &lt;!--  disabled表单禁用  --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ disabled: true })&quot; class=&quot;mr-2&quot;&gt; 禁用表单 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ disabled: false })&quot; class=&quot;mr-2&quot;&gt; 解除禁用 &lt;/a-button&gt;</span>
<span class="line">    &lt;!--  compact 是否为紧凑表单  --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ compact: true })&quot; class=&quot;mr-2&quot;&gt; 紧凑表单 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;setProps({ compact: false })&quot; class=&quot;mr-2&quot;&gt; 还原正常间距 &lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;visitor&#39;,</span>
<span class="line">      label: &#39;来访人员&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;accessed&#39;,</span>
<span class="line">      label: &#39;来访日期&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;来访人手机号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * setProps方法可以动态设置useForm中的属性</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { setProps }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //隐藏操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">    //默认聚焦第一个，只支持input</span>
<span class="line">    autoFocusFirstItem: true,</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_6-form-validation-and-clear-validation" tabindex="-1"><a class="header-anchor" href="#_6-form-validation-and-clear-validation"><span>6. Form Validation and Clear Validation</span></a></h3><p>Page Effects</p><p>Code Sample</p><blockquote><p>Triggering form validation</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/94a9480bd81376b4d404187c736aaca21336e881cf2a837f682dfd4405f027ee.dat" alt=""></p><blockquote><p>Clear form validation</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/b849e4108341445366db40410fa5a9828e66e392e9e142bd4ccfdd5c55015608.dat" alt=""></p><blockquote><p>Only verify visitors</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/d79f9ac1b62be37cfa2174c68d5ca15699d28c51c6936990add0d981a309b8ee.dat" alt=""></p><blockquote><p>Clear only visitor verification</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/5b5ae751018ac57b495aa0b7fa7043b32b38f49628a43218ff43a99181e8471c.dat" alt=""></p><blockquote><p>Through <code>useForm</code>the methods in the hook, you can verify all or cancel the verification of all unsatisfied components.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/bc5be7acd69abdca7f98ec6570e0615092c5edf3864eba53b92507c931d483ab.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 操作禁用表单 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div style=&quot;margin: 20px auto; text-align: center&quot;&gt;</span>
<span class="line">    &lt;!-- all 触发或清空所有验证，visitor 只触发或者清空来访人员验证 --&gt;</span>
<span class="line">    &lt;a-button @click=&quot;triggerFormRule(&#39;all&#39;)&quot; class=&quot;mr-2&quot;&gt; 触发表单验证 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;cancelFormRule(&#39;all&#39;)&quot; class=&quot;mr-2&quot;&gt; 清空表单验证 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;triggerFormRule(&#39;visitor&#39;)&quot; class=&quot;mr-2&quot;&gt; 只验证来访人员 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;cancelFormRule(&#39;visitor&#39;)&quot; class=&quot;mr-2&quot;&gt; 只清空来访人员验证 &lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;visitor&#39;,</span>
<span class="line">      label: &#39;来访人员&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;accessed&#39;,</span>
<span class="line">      label: &#39;来访日期&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;来访人手机号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * setProps方法可以动态设置useForm中的属性</span>
<span class="line">   * clearValidate 清除所有验证，支持取消验证其中几个字段 如 clearValidate([&#39;visitor&#39;,...])</span>
<span class="line">   * validate 验证所有</span>
<span class="line">   * validateFields 验证其中几个字段，如validateFields([&#39;visitor&#39;,...])</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { clearValidate, validateFields, validate }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //隐藏操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">    //默认聚焦第一个，只支持input</span>
<span class="line">    autoFocusFirstItem: true,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 触发表单验证</span>
<span class="line">   * @param type all 所有验证 visitor 只验证来访人员</span>
<span class="line">   */</span>
<span class="line">  async function triggerFormRule(type) {</span>
<span class="line">    if (type == &#39;all&#39;) {</span>
<span class="line">      //触发所有验证</span>
<span class="line">      await validate();</span>
<span class="line">    } else {</span>
<span class="line">      //触发来访人员验证</span>
<span class="line">      //visitor 来访人员的对应formSchemas field字段</span>
<span class="line">      await validateFields([&#39;visitor&#39;]);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 触发表单验证</span>
<span class="line">   * @param type all 所有验证 visitor 只验证来访人员</span>
<span class="line">   */</span>
<span class="line">  async function cancelFormRule(type) {</span>
<span class="line">    if (type == &#39;all&#39;) {</span>
<span class="line">      //取消全部验证</span>
<span class="line">      await clearValidate();</span>
<span class="line">    } else {</span>
<span class="line">      //只取消来访人员的验证</span>
<span class="line">      //visitor 来访人员的对应formSchemas field字段</span>
<span class="line">      await clearValidate([&#39;visitor&#39;]);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_7-form-value-operation" tabindex="-1"><a class="header-anchor" href="#_7-form-value-operation"><span>7. Form Value Operation</span></a></h3><p>Page Effects</p><p>Code Sample</p><ul><li>① Get all field values</li><li>② Get all field values ​​after form validation</li><li>③ <code>visitor来访人员</code>The value obtained after the form is verified</li></ul><p><img src="https://lfs.k.topthink.com/lfs/8b1a73cb15243a87d4fef45f8f80cd99ab516c553bc1a67f67b16870bd955a38.dat" alt=""></p><blockquote><p>Clear form values</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/1f66673290b537f471be43e9ccfcbe11550a240ea3339175545af61c8a137f12.dat" alt=""></p><blockquote><p>Update form values</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/b5791d655c4ee4e8483ef9a10f562695efd311d4f4657ca9b9dcea915a0e8b7d.dat" alt=""></p><blockquote><p>Through <code>useForm</code>the methods in the hook, you can get, update, and clear value operations</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/a819ded61f0b74b2fd1a5236e293b78fbd7e8a8db877a2d39cd65eb8fc14c55a.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 操作表单值 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div style=&quot;margin: 20px auto; text-align: center&quot;&gt;</span>
<span class="line">    &lt;a-button @click=&quot;getFormValue&quot; class=&quot;mr-2&quot;&gt; 获取表单值 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;clearFormValue&quot; class=&quot;mr-2&quot;&gt; 清空表单值 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;updateFormValue&quot; class=&quot;mr-2&quot;&gt; 更新表单值 &lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;visitor&#39;,</span>
<span class="line">      label: &#39;来访人员&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;accessed&#39;,</span>
<span class="line">      label: &#39;来访日期&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;来访人手机号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * getFieldsValue 获取所有表单值</span>
<span class="line">   * validate 验证通过之后的表单值,支持验证其中几个字段，validate([&#39;visitor&#39;,...])</span>
<span class="line">   * setFieldsValue 更新表单值，如 setFieldsValue({&#39;visitor&#39;:&#39;李四&#39;,...})</span>
<span class="line">   * resetFields 清除所有表单值</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { getFieldsValue, setFieldsValue, resetFields, validate }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //隐藏操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">    //默认聚焦第一个，只支持input</span>
<span class="line">    autoFocusFirstItem: true,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 获取表单值</span>
<span class="line">   */</span>
<span class="line">  async function getFormValue() {</span>
<span class="line">    //获取所有值</span>
<span class="line">    let fieldsValue = await getFieldsValue();</span>
<span class="line">    console.log(&#39;fieldsValue:::&#39;, fieldsValue);</span>
<span class="line">    //表单验证通过后获取所有字段值</span>
<span class="line">    fieldsValue = await validate();</span>
<span class="line">    console.log(&#39;fieldsValue:::&#39;, fieldsValue);</span>
<span class="line">    //表单验\`visitor来访人员\`通过后获取的值</span>
<span class="line">    fieldsValue = await validate([&#39;visitor&#39;]);</span>
<span class="line">    console.log(&#39;fieldsValue:::&#39;, fieldsValue);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 清空表单值</span>
<span class="line">   */</span>
<span class="line">  async function clearFormValue() {</span>
<span class="line">    await resetFields();</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 更新表单值</span>
<span class="line">   */</span>
<span class="line">  async function updateFormValue() {</span>
<span class="line">    await setFieldsValue({ visitor: &#39;李四&#39; });</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_8-dynamically-update-reset-field-properties" tabindex="-1"><a class="header-anchor" href="#_8-dynamically-update-reset-field-properties"><span>8. Dynamically update/reset field properties</span></a></h3><p>Page Effects</p><p>Code Sample</p><blockquote><p>normal</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/205943f78d219e1e90bc693fb1e7a64cdfd813325656d8908a67f2d080433076.dat" alt=""></p><blockquote><p>Triggering the update of field properties</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/0d825cece324729e4a381343054b922a8bc20e9880b5b59997df3cc31cb0ce83.dat" alt=""></p><blockquote><p>Trigger the reset of field properties. Note that resetting field properties will <code>schemas</code>delete all corresponding fields. Add the field properties you configured.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/27b173530cffc04c2f27de84f63662240d7f5e77ce5f5bc67c8e7e8a7fe0a117.dat" alt=""></p><blockquote><p>Through <code>useForm</code>the methods in the hook, you can dynamically update and reset the field value</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/04958473cde62374b149873bdf96cc8904f948422a1d1ae9a0ec292e921d355a.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 操作表单schemas配置 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div style=&quot;margin: 20px auto; text-align: center&quot;&gt;</span>
<span class="line">    &lt;a-button @click=&quot;updateFormSchemas&quot; class=&quot;mr-2&quot;&gt; 更新字段属性 &lt;/a-button&gt;</span>
<span class="line">    &lt;a-button @click=&quot;resetFormSchemas&quot; class=&quot;mr-2&quot;&gt; 重置字段属性 &lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;visitor&#39;,</span>
<span class="line">      label: &#39;来访人员&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        disabled: true,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;accessed&#39;,</span>
<span class="line">      label: &#39;来访日期&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">      ifShow: false,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;来访人手机号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * updateSchema 更新字段属性，支持schemas里面所有的配置</span>
<span class="line">   * updateSchema([{ field: &#39;visitor&#39;, componentProps: { disabled: false },}, ... ]);</span>
<span class="line">   * resetSchema 重置字段属性，支持schemas里面所有的配置</span>
<span class="line">   * resetSchema([{  field: &#39;visitor&#39;,label: &#39;来访人员&#39;,component: &#39;Input&#39;,},... ]);</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { updateSchema, resetSchema }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //隐藏操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">    //默认聚焦第一个，只支持input</span>
<span class="line">    autoFocusFirstItem: true,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 清除表单配置</span>
<span class="line">   */</span>
<span class="line">  async function resetFormSchemas() {</span>
<span class="line">    await resetSchema([</span>
<span class="line">      {</span>
<span class="line">        //字段必填</span>
<span class="line">        field: &#39;visitor&#39;,</span>
<span class="line">        label: &#39;来访人员&#39;,</span>
<span class="line">        component: &#39;Input&#39;,</span>
<span class="line">      },</span>
<span class="line">    ]);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 更新表单配置</span>
<span class="line">   */</span>
<span class="line">  async function updateFormSchemas() {</span>
<span class="line">    //支持更新schemas里面所有的配置</span>
<span class="line">    await updateSchema([</span>
<span class="line">      {</span>
<span class="line">        //字段必填</span>
<span class="line">        field: &#39;visitor&#39;,</span>
<span class="line">        componentProps: {</span>
<span class="line">          disabled: false,</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        field: &#39;accessed&#39;,</span>
<span class="line">        ifShow: true,</span>
<span class="line">      },</span>
<span class="line">    ]);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_9-dynamically-increase-or-decrease-form-items" tabindex="-1"><a class="header-anchor" href="#_9-dynamically-increase-or-decrease-form-items"><span>9. Dynamically increase or decrease form items</span></a></h3><p>Dynamically increase or decrease form items.</p><p>Page Effects</p><p>Code Sample</p><blockquote><p>Effect 1</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/ddb59ea552ad89cb4df0aa88e60d7381aad56ae38cfbac38e5d55c454a2e0e92.dat" alt=""></p><blockquote><p>Effect 2</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/b64ab4c2e9bf9e46c1be762b4a2286dd2a1e7ba032197de7d5153ed0f522bff0.dat" alt=""></p><blockquote><p>Through <code>useForm</code> the methods in the hook, you can dynamically increase and decrease form items</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/f9de6aaf6d307f84c6c561e1bde7c6c3cd135ef37f4ab3ddf6bf59dd7f9ca5c3.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 动态增减表单 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; @submit=&quot;handleSubmit&quot;&gt;</span>
<span class="line">    &lt;!--  添加input的插槽  --&gt;</span>
<span class="line">    &lt;template #addForm=&quot;{ field }&quot;&gt;</span>
<span class="line">      &lt;a-button v-if=&quot;Number(field) === 0&quot; @click=&quot;addField&quot; style=&quot;width: 50px&quot;&gt;+&lt;/a-button&gt;</span>
<span class="line">      &lt;a-button v-if=&quot;Number(field) &gt; 0&quot; @click=&quot;delField(field)&quot; style=&quot;width: 50px&quot;&gt;-&lt;/a-button&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">  &lt;!--  &lt;div style=&quot;margin: 20px auto; text-align: center&quot;&gt;</span>
<span class="line">    &lt;a-button @click=&quot;addField&quot;&gt;添加表单项&lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;--&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container&#39;;</span>
<span class="line">  import { ref } from &#39;@vue/runtime-core&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;name1&#39;,</span>
<span class="line">      label: &#39;姓名1&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      // ifShow:false,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;age1&#39;,</span>
<span class="line">      label: &#39;年龄1&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">      // ifShow:false,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;0&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      // ifShow:false,</span>
<span class="line">      label: &#39; &#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      slot: &#39;addForm&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * appendSchemaByField:增加表单项（字段）</span>
<span class="line">   *</span>
<span class="line">   * removeSchemaByFiled:减少表单项（字段）</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { appendSchemaByField, removeSchemaByFiled }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    showResetButton: false,</span>
<span class="line">    // showSubmitButton:false</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  //组件个数</span>
<span class="line">  let n = ref&lt;number&gt;(2);</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 添加字段</span>
<span class="line">   * appendSchemaByField类型: ( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) =&gt; Promise&lt;void&gt;</span>
<span class="line">   * 说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后,当 first = true 时插入到第一个位置</span>
<span class="line">   */</span>
<span class="line">  async function addField() {</span>
<span class="line">    //添加表单字段，里面为schemas对应的属性，可自行配置</span>
<span class="line">    await appendSchemaByField(</span>
<span class="line">      {</span>
<span class="line">        field: \`name\${n.value}\`,</span>
<span class="line">        component: &#39;Input&#39;,</span>
<span class="line">        label: &#39;字段&#39; + n.value,</span>
<span class="line">        colProps: {</span>
<span class="line">          span: 8,</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">      &#39;&#39;</span>
<span class="line">    );</span>
<span class="line">    await appendSchemaByField(</span>
<span class="line">      {</span>
<span class="line">        field: \`sex\${n.value}\`,</span>
<span class="line">        component: &#39;InputNumber&#39;,</span>
<span class="line">        label: &#39;字段&#39; + n.value,</span>
<span class="line">        colProps: {</span>
<span class="line">          span: 8,</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">      &#39;&#39;</span>
<span class="line">    );</span>
<span class="line"></span>
<span class="line">    await appendSchemaByField(</span>
<span class="line">      {</span>
<span class="line">        field: \`\${n.value}\`,</span>
<span class="line">        component: &#39;Input&#39;,</span>
<span class="line">        label: &#39; &#39;,</span>
<span class="line">        colProps: {</span>
<span class="line">          span: 8,</span>
<span class="line">        },</span>
<span class="line">        slot: &#39;addForm&#39;,</span>
<span class="line">      },</span>
<span class="line">      &#39;&#39;</span>
<span class="line">    );</span>
<span class="line">    n.value++;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 删除字段</span>
<span class="line">   * 类型: (field: string | string[]) =&gt; Promise&lt;void&gt;</span>
<span class="line">   * 说明: 根据 field 删除 Schema</span>
<span class="line">   * @param field 当前字段名称</span>
<span class="line">   */</span>
<span class="line">  function delField(field) {</span>
<span class="line">    //移除指定字段</span>
<span class="line">    removeSchemaByFiled([\`name\${field}\`, \`sex\${field}\`, \`\${field}\`]);</span>
<span class="line">    n.value--;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 点击提交按钮的value值</span>
<span class="line">   * @param values</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values: any) {</span>
<span class="line">    console.log(&#39;提交按钮数据::::&#39;, values);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_10-customize-the-top-and-bottom-areas-of-the-form" tabindex="-1"><a class="header-anchor" href="#_10-customize-the-top-and-bottom-areas-of-the-form"><span>10. Customize the top and bottom areas of the form</span></a></h3><ul><li>When the bottom buttons do not meet your needs, you can customize the bottom area.</li><li>Example: In the employee file, we have Save, Save Draft, Reset</li></ul><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/fa59600ea74434d364b43a5210752e1fa41cca05ab414889b8427355d1552f6e.dat" alt=""></p><blockquote><p>Use slots <code>formHeader</code>(custom form header area), <code>formFooter</code>(custom form bottom area)</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/c1696333f861c2ab93bef1ed1a361701dec67cff51da4ecc52465120a2b80eb2.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 自定义页脚 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot;&gt;</span>
<span class="line">    &lt;template #formHeader&gt;</span>
<span class="line">      &lt;div style=&quot;margin: 0 auto 20px&quot;&gt;</span>
<span class="line">        &lt;span&gt;我是自定义按钮&lt;/span&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;template #formFooter&gt;</span>
<span class="line">      &lt;div style=&quot;margin: 0 auto&quot;&gt;</span>
<span class="line">        &lt;a-button type=&quot;primary&quot; @click=&quot;save&quot; class=&quot;mr-2&quot;&gt; 保存 &lt;/a-button&gt;</span>
<span class="line">        &lt;a-button type=&quot;primary&quot; @click=&quot;saveDraft&quot; class=&quot;mr-2&quot;&gt; 保存草稿 &lt;/a-button&gt;</span>
<span class="line">        &lt;a-button type=&quot;error&quot; @click=&quot;reset&quot; class=&quot;mr-2&quot;&gt; 重置 &lt;/a-button&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      label: &#39;员工姓名&#39;,</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;性别&#39;,</span>
<span class="line">      field: &#39;sex&#39;,</span>
<span class="line">      component: &#39;Select&#39;,</span>
<span class="line">      //填写组件的属性</span>
<span class="line">      componentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          { label: &#39;男&#39;, value: 1 },</span>
<span class="line">          { label: &#39;女&#39;, value: 2 },</span>
<span class="line">          { label: &#39;未知&#39;, value: 3 },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      //默认值</span>
<span class="line">      defaultValue: 3,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;年龄&#39;,</span>
<span class="line">      field: &#39;age&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;入职时间&#39;,</span>
<span class="line">      subLabel: &#39;( 选填 )&#39;,</span>
<span class="line">      field: &#39;entryTime&#39;,</span>
<span class="line">      component: &#39;TimePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { validate, resetFields }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //隐藏操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 保存</span>
<span class="line">   */</span>
<span class="line">  async function save() {</span>
<span class="line">    //使用useForm方法获取表单值</span>
<span class="line">    let values = await validate();</span>
<span class="line">    console.log(values);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 保存草稿</span>
<span class="line">   */</span>
<span class="line">  async function saveDraft() {</span>
<span class="line">    //使用useForm方法validate获取表单值</span>
<span class="line">    let values = await validate();</span>
<span class="line">    console.log(values);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 重置</span>
<span class="line">   */</span>
<span class="line">  async function reset() {</span>
<span class="line">    //使用useForm方法resetFields清空值</span>
<span class="line">    await resetFields();</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_11-form-in-popup" tabindex="-1"><a class="header-anchor" href="#_11-form-in-popup"><span>11. Form in popup</span></a></h3><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/2deda42048cf96c5925971466e1cb470306d9ccf648ad8298be570fbac8476a3.dat" alt=""></p><blockquote><p>Used in components<code>BasicModal</code></p></blockquote>`,143)),i("p",null,[d(e,{to:"/syncadmin/ui-component-library/component/Model.html"},{default:c(()=>s[0]||(s[0]=[r("BasicModal popup")])),_:1})]),s[2]||(s[2]=n(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 弹出层表单 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div style=&quot;margin: 20px auto&quot;&gt;</span>
<span class="line">    &lt;a-button type=&quot;primary&quot; @click=&quot;openPopup&quot; class=&quot;mr-2&quot;&gt; 打开弹窗 &lt;/a-button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">  &lt;!-- 自定义弹窗组件 --&gt;</span>
<span class="line">  &lt;BasicModal @register=&quot;registerModal&quot; title=&quot;弹出层表单&quot;&gt;</span>
<span class="line">    &lt;!-- 自定义表单 --&gt;</span>
<span class="line">    &lt;BasicForm @register=&quot;registerForm&quot; /&gt;</span>
<span class="line">  &lt;/BasicModal&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { BasicModal } from &#39;/@/components/Modal&#39;;</span>
<span class="line">  import { useModal } from &#39;/@/components/Modal&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      label: &#39;员工姓名&#39;,</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;性别&#39;,</span>
<span class="line">      field: &#39;sex&#39;,</span>
<span class="line">      component: &#39;Select&#39;,</span>
<span class="line">      //填写组件的属性</span>
<span class="line">      componentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          { label: &#39;男&#39;, value: 1 },</span>
<span class="line">          { label: &#39;女&#39;, value: 2 },</span>
<span class="line">          { label: &#39;未知&#39;, value: 3 },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      //默认值</span>
<span class="line">      defaultValue: 3,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;年龄&#39;,</span>
<span class="line">      field: &#39;age&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;入职时间&#39;,</span>
<span class="line">      subLabel: &#39;( 选填 )&#39;,</span>
<span class="line">      field: &#39;entryTime&#39;,</span>
<span class="line">      component: &#39;TimePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  //BasicModal绑定注册;</span>
<span class="line">  const [registerModal, { openModal }] = useModal();</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { validate, resetFields }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //隐藏操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 打开弹窗</span>
<span class="line">   */</span>
<span class="line">  async function openPopup() {</span>
<span class="line">    //详见 BasicModal模块</span>
<span class="line">    openModal(true, {});</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_12-query-area" tabindex="-1"><a class="header-anchor" href="#_12-query-area"><span>12. Query area</span></a></h3><p>Page Effects</p><p>Code Sample</p><blockquote><p>By default, two lines are displayed. If more than two lines are displayed, they will be folded and the expand and collapse buttons will be displayed.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/d3b4a6acc9a542a4e233e37496e88b586dbac59ef55efb3167f3feb0e26cd2ee.dat" alt=""></p><blockquote><p><code>fieldMapToTime</code>: Map the value of the time zone in the form into 2 fields</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/6bf5e385346db65eb0ca532242f62ddd883b27c94da73ffe21bf236be5e388d2.dat" alt=""></p><p><img src="https://lfs.k.topthink.com/lfs/2ae0069ee126e0d4b7c3eb943595e129940a0be9e54d9c2086c3ef718196e14b.dat" alt=""></p><blockquote><p><code>fieldMapToNumber</code>Consistent with <code>fieldMapToTime</code>the usage, map the value of the numeric type area in the form into 2 fields</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/87b38565b9d2f8e8dcba0cc1c1e22c827f105c80412666c93ebaca8a99cadd52.dat" alt=""></p><p><img src="https://lfs.k.topthink.com/lfs/1f2165d0a770184371697cc4781830c9f6b18969a5552b687692e92bcd0eb24e.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 查询区域 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; @submit=&quot;handleSubmit&quot; style=&quot;margin-top: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      label: &#39;姓名&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;hobby&#39;,</span>
<span class="line">      label: &#39;爱好&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;birthday&#39;,</span>
<span class="line">      label: &#39;生日&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;joinTime&#39;,</span>
<span class="line">      label: &#39;入职时间&#39;,</span>
<span class="line">      component: &#39;RangePicker&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        valueType: &#39;Date&#39;,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;workYears&#39;,</span>
<span class="line">      label: &#39;工作年份&#39;,</span>
<span class="line">      component: &#39;JRangeNumber&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;sex&#39;,</span>
<span class="line">      label: &#39;性别&#39;,</span>
<span class="line">      component: &#39;Select&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          {</span>
<span class="line">            label: &#39;男&#39;,</span>
<span class="line">            value: &#39;1&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            label: &#39;女&#39;,</span>
<span class="line">            value: &#39;2&#39;,</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;marital&#39;,</span>
<span class="line">      label: &#39;婚姻状况&#39;,</span>
<span class="line">      component: &#39;RadioGroup&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          {</span>
<span class="line">            label: &#39;未婚&#39;,</span>
<span class="line">            value: &#39;1&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            label: &#39;已婚&#39;,</span>
<span class="line">            value: &#39;2&#39;,</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm] = useForm({</span>
<span class="line">    //注册表单列</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //是否显示展开收起按钮，默认false</span>
<span class="line">    showAdvancedButton: true,</span>
<span class="line">    //超过指定行数折叠，默认3行</span>
<span class="line">    autoAdvancedCol: 3,</span>
<span class="line">    //折叠时默认显示行数，默认1行</span>
<span class="line">    alwaysShowLines: 2,</span>
<span class="line">    //将表单内时间区域的值映射成 2个字段, &#39;YYYY-MM-DD&#39;日期格式化</span>
<span class="line">    fieldMapToTime: [[&#39;joinTime&#39;, [&#39;joinTime_begin&#39;, &#39;joinTime_end&#39;], &#39;YYYY-MM-DD&#39;]],</span>
<span class="line">    //将表单内数值类型区域的值映射成 2个字段</span>
<span class="line">    fieldMapToNumber: [[&#39;workYears&#39;, [&#39;workYears_begin&#39;, &#39;workYears_end&#39;]]],</span>
<span class="line">    //每列占比，默认一行为24</span>
<span class="line">    baseColProps: { span: 12 },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 点击提交按钮的value值</span>
<span class="line">   * @param values</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values: any) {</span>
<span class="line">    console.log(&#39;提交按钮数据::::&#39;, values);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 时间和数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  :deep(.ant-picker) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="useformapi-attributes" tabindex="-1"><a class="header-anchor" href="#useformapi-attributes"><span><code>useForm</code>API attributes</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th><th>Version</th></tr></thead><tbody><tr><td>schemas</td><td><code>Schema[]</code></td><td>-</td><td>-</td><td>Form configuration, see the introduction <code>BasicForm</code>in<code>schemas</code></td><td></td></tr><tr><td>submitOnReset</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Whether to submit the form when resetting</td><td></td></tr><tr><td>labelCol</td><td>Partial<code>&lt;ColEx&gt;</code></td><td>-</td><td>-</td><td>Common LabelCol configuration for the entire form</td><td></td></tr><tr><td>wrapperCol</td><td>Partial <code>&lt;ColEx&gt;</code></td><td>-</td><td>-</td><td>Common wrapperCol configuration for the entire form</td><td></td></tr><tr><td>baseColProps</td><td>Partial<code>&lt;ColEx&gt;</code></td><td>-</td><td>-</td><td>Configure ColProps for all selected items. You don&#39;t need to configure them one by one. You can also configure the priority and global of each item separately.</td><td></td></tr><tr><td>labelWidth</td><td><code>number</code> , <code>string</code></td><td>-</td><td>-</td><td>Expand the form component and increase the label width. This applies to all components in the form and can be overridden or disabled for a single item.</td><td></td></tr><tr><td>labelAlign</td><td><code>string</code></td><td>-</td><td><code>left</code>,<code>right</code></td><td>Label layout</td><td></td></tr><tr><td>mergeDynamicData</td><td><code>object</code></td><td>-</td><td>-</td><td>Additional parameter values ​​passed to child components</td><td></td></tr><tr><td>autoFocusFirstItem</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Whether to focus on the first input box. This only works when the first form item is input.</td><td></td></tr><tr><td>compact</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Compact type form, reduce margin-bottom</td><td></td></tr><tr><td>size</td><td><code>string</code></td><td><code>default</code></td><td><code>&#39;default&#39;</code> , <code>&#39;small&#39;</code> , <code>&#39;large&#39;</code></td><td>Pass the size parameter to all components in the form. Custom components need to implement size reception themselves.</td><td></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Pass the disabled attribute to all components in the form. Custom components need to implement disabled reception themselves.</td><td></td></tr><tr><td>autoSetPlaceHolder</td><td><code>boolean</code></td><td><code>true</code></td><td><code>true/false</code></td><td>Automatically set the placeholder of the component in the form. Custom components need to be implemented by themselves.</td><td></td></tr><tr><td>autoSubmitOnEnter</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Press Enter to submit automatically when typing in input</td><td></td></tr><tr><td>rulesMessageJoinLabel</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>If the form item has validation, validation information will be automatically generated. This parameter controls whether the Chinese name of the field is concatenated to the automatically generated information.</td><td></td></tr><tr><td>showAdvancedButton</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Whether to display the collapse and expand button</td><td></td></tr><tr><td>emptySpan</td><td><code>number</code> , Partial<code>&lt;ColEx&gt;</code></td><td>0</td><td>-</td><td>Blank rows, can be a value or col object</td><td></td></tr><tr><td>autoAdvancedLine</td><td><code>number</code></td><td>3</td><td>-</td><td>If showAdvancedButton is true, rows exceeding the specified number of rows will be collapsed by default</td><td></td></tr><tr><td>alwaysShowLines</td><td><code>number</code></td><td>1</td><td>-</td><td>Always keep the number of rows displayed when collapsed</td><td></td></tr><tr><td>showActionButtonGroup</td><td><code>boolean</code></td><td><code>true</code></td><td><code>true/false</code></td><td>Whether to display the action button group (query/reset/expand/close)</td><td></td></tr><tr><td>actionColOptions</td><td>Partial<code>&lt;ColEx&gt;</code></td><td>-</td><td>-</td><td>Col component configuration for the outer layer of the action button. If showAdvancedButton is enabled, no setting is required. For details, see actionColOptions below</td><td></td></tr><tr><td>showResetButton</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Whether to display the reset button</td><td></td></tr><tr><td>resetButtonOptions</td><td><code>object</code></td><td></td><td>-</td><td>Reset button configuration ActionButtonOption</td><td></td></tr><tr><td>showSubmitButton</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Whether to display the submit button</td><td></td></tr><tr><td>submitButtonOptions</td><td><code>object</code></td><td></td><td>-</td><td>Confirm button configuration ActionButtonOption</td><td></td></tr><tr><td>resetFunc</td><td>() =&gt; Promise<code>&lt;void&gt;</code></td><td></td><td>-</td><td>Custom reset button logic() =&gt; Promise<code>&lt;void&gt;;</code></td><td></td></tr><tr><td>submitFunc</td><td>() =&gt; Promise<code>&lt;void&gt;</code></td><td></td><td>-</td><td>Custom submit button logic() =&gt; Promise<code>&lt;void&gt;;</code></td><td></td></tr><tr><td>fieldMapToTime</td><td>[string, [string, string], string?][]</td><td></td><td>-</td><td>Used to set the time area in the form to 2 fields, see the instructions below</td><td></td></tr></tbody></table>`,17))])}const b=a(v,[["render",o]]),f=JSON.parse('{"path":"/syncadmin/ui-component-library/basic-form/the-use-form-attribute.html","title":"The useForm attribute","lang":"ko-KR","frontmatter":{"order":3},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/basic-form/the-use-form-attribute.md"}');export{b as comp,f as data};
