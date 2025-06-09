import{_ as i,c as t,a as s,b as e,e as a,d,w as c,r as p,o as r}from"./app-CC5quYyA.js";const o={};function m(v,n){const l=p("RouteLink");return r(),t("div",null,[n[2]||(n[2]=s(`<h1 id="basicform" tabindex="-1"><a class="header-anchor" href="#basicform"><span>BasicForm</span></a></h1><p>Based on <code>Ant Design Vue</code>the encapsulated form component <code>BasicForm</code>, it is used to quickly render important components of the form. In order to simplify the use, deep hook encapsulation is done. If you need to expand, please modify the hook <code>/@/hooks/useForm.ts</code></p><blockquote><p>The BasicForm form control encapsulated by jeecg can render the form quickly without writing too much native code. (Of course, each has its pros and cons. This form component is encapsulated very intelligently, but it may also cause inflexibility, so for particularly complex forms, you can consider using native writing)</p></blockquote><h2 id="scenes-to-be-used" tabindex="-1"><a class="header-anchor" href="#scenes-to-be-used"><span>scenes to be used</span></a></h2><ul><li>Quickly create a form and submit form data.</li><li>It is necessary to perform input validation on the control fields of the form.</li></ul><h2 id="basicform-s-schema-configuration-introduction" tabindex="-1"><a class="header-anchor" href="#basicform-s-schema-configuration-introduction"><span>BasicForm&#39;s schema configuration introduction</span></a></h2><h3 id="_1-basic-usage" tabindex="-1"><a class="header-anchor" href="#_1-basic-usage"><span>1. Basic usage</span></a></h3><blockquote><p>Helllo World first entry example</p></blockquote><hr><p>Quickly render a form field, which can be an input control, label, drop-down menu, text field, etc.<br> This example: Create a login form to allow users to enter their username and password to log in</p><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/093a2ac99e6ef317941cff855545763f9f80e3e3dfb060fcfa6e32f10016523d.dat" alt=""></p><blockquote><p>By customizing <code>FormSchema</code>the fields and binding them to <code>useForm</code>the <code>schemas</code>parameters, a simple login form is rendered.</p></blockquote><p>The mapping relationship of field definitions is as follows:</p><hr><p><img src="https://lfs.k.topthink.com/lfs/5caf78bb8f956f1afc3c821ce216ae6311466ae4eb65e7aa734de7552274cd74.dat" alt=""></p><hr><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 基本用法 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定表单 --&gt;</span>
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
<span class="line">      //标题名称</span>
<span class="line">      label: &#39;用户名(后面根据labelLength定义的长度隐藏)&#39;,</span>
<span class="line">      //字段</span>
<span class="line">      field: &#39;username&#39;,</span>
<span class="line">      //组件 支持组件详见 components/Form/src/types/index.ts 中的 ComponentType</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      //标题宽度,支持数字和字符串</span>
<span class="line">      labelWidth: 150,</span>
<span class="line">      //标题长度，超过位数隐藏</span>
<span class="line">      labelLength: 3,</span>
<span class="line">      //一列占比总共24，比如一行显示2列</span>
<span class="line">      colProps: { span: 12 },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;密码&#39;,</span>
<span class="line">      field: &#39;password&#39;,</span>
<span class="line">      //子标题名称（在主标题后面）</span>
<span class="line">      subLabel: &#39;(数字和字母组成)&#39;,</span>
<span class="line">      component: &#39;InputPassword&#39;,</span>
<span class="line">      labelWidth: &#39;150px&#39;,</span>
<span class="line">      //一列占比总共24，比如一行显示2列</span>
<span class="line">      colProps: { span: 12 },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * useForm 是整个框架的核心用于表单渲染，里边封装了很多公共方法;</span>
<span class="line">   * 支持（schemas: 渲染表单列，autoSubmitOnEnter：回车提交,submitButtonOptions：自定义按钮文本和图标等方法）；</span>
<span class="line">   * 平台通过此封装，简化了代码，支持自定义扩展;</span>
<span class="line">   */</span>
<span class="line">  const [registerForm] = useForm({</span>
<span class="line">    //注册表单列</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //回车提交</span>
<span class="line">    autoSubmitOnEnter: true,</span>
<span class="line">    //不显示重置按钮</span>
<span class="line">    showResetButton: false,</span>
<span class="line">    //自定义提交按钮文本和图标</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    //查询列占比 24代表一行 取值范围 0-24</span>
<span class="line">    actionColOptions: { span: 17 },</span>
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
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-demonstrate-the-use-of-dictionary-control" tabindex="-1"><a class="header-anchor" href="#_2-demonstrate-the-use-of-dictionary-control"><span>2. Demonstrate the use of dictionary control</span></a></h3><h4 id="page-effect-and-code-display" tabindex="-1"><a class="header-anchor" href="#page-effect-and-code-display"><span>Page effect and code display</span></a></h4><p>For example, the &quot;Gender&quot; field is used <code>下拉框控件</code>, a drop-down item is set, and the default value is set to &quot;Unknown&quot;;<br> BasicForm encapsulates many control types, see<code>3. 表单控件清单</code></p><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/7c8e2b1364ed8afca2544e16045e809d52610bd0d94589b47d19d6ee65706c46.dat" alt=""></p><blockquote><p>By <code>component</code>setting the control type;<br> by <code>componentProps</code>defining <code>options</code>the drop-down items;<br> by <code>defaultValue</code>defining the default value;</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/e8a6b8d72f00a37f2b159955692ac47a28db1e1d01227e2e1bf38ea11a69193d.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 控件属性 --&gt;</span>
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
<span class="line">      label: &#39;员工姓名&#39;,</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      componentProps:{</span>
<span class="line">        disabled: true</span>
<span class="line">      },</span>
<span class="line">      defaultValue:&#39;张三&#39;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;性别&#39;,</span>
<span class="line">      field: &#39;sex&#39;,</span>
<span class="line">      component: &#39;Select&#39;,</span>
<span class="line">      //填写组件Select的属性</span>
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
<span class="line">      field: &#39;entryTime&#39;,</span>
<span class="line">      component: &#39;TimePicker&#39;,</span>
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
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-overview-of-the-form-control-list" tabindex="-1"><a class="header-anchor" href="#_3-overview-of-the-form-control-list"><span>3 Overview of the form control list</span></a></h3><h4 id="_3-1-use-of-componentprops-basic-placeholders" tabindex="-1"><a class="header-anchor" href="#_3-1-use-of-componentprops-basic-placeholders"><span>3.1 Use of componentProps basic placeholders</span></a></h4><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/63f045020926280e7cd150cdb5088fb840a5edbe0239f7b7a1c3b3ce9067b31e.dat" alt=""></p><blockquote><p>① <code>componentProps</code>: Used to define component properties<br> ② <code>placeholder</code>: Define <code>input</code>property placeholders</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/0b49b9b7a6a7c1e360185dae00213a98033370184ffb503ee2a5db5e0f18756f.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 操作按钮 --&gt;</span>
<span class="line">&lt;template&gt;</span>
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
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      label: &#39;姓名&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      //组件的属性（所有组件的属性都要写在componentProps里面）</span>
<span class="line">      componentProps: {</span>
<span class="line">        //占位符</span>
<span class="line">        placeholder:&#39;请输入真实姓名&#39;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * BasicForm绑定注册;</span>
<span class="line">   * setProps方法可以动态设置useForm中的属性</span>
<span class="line">   */</span>
<span class="line">  const [registerForm, { setProps }] = useForm({</span>
<span class="line">    schemas: formSchemas,</span>
<span class="line">    //显示操作按钮</span>
<span class="line">    showActionButtonGroup: false,</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_3-2-detailed-usage-of-control-types" tabindex="-1"><a class="header-anchor" href="#_3-2-detailed-usage-of-control-types"><span>3.2 Detailed usage of control types</span></a></h4>`,40)),e("blockquote",null,[e("p",null,[n[1]||(n[1]=a("For detailed usage of form control types, please refer to ")),d(l,{to:"/syncadmin/ui-component-library/basicForm/componentType.html"},{default:c(()=>n[0]||(n[0]=[a("Form Control Usage Examples")])),_:1})])]),n[3]||(n[3]=s(`<table><thead><tr><th>name</th><th>describe</th><th>componentProps</th></tr></thead><tbody><tr><td>Input</td><td>Text Input Box</td><td><a href="https://www.antdv.com/components/input-cn/#api" target="_blank" rel="noopener noreferrer">Input Properties</a></td></tr><tr><td>InputGroup</td><td>Grouping text input boxes</td><td>Use <a href="https://help.jeecg.com/component/basicForm.html#7-%E5%AD%97%E6%AE%B5%E6%8F%92%E6%A7%BDslot" target="_blank" rel="noopener noreferrer">slots</a> to customize group text, which is consistent with input attributes and <a href="https://www.antdv.com/components/input-cn/#input-group" target="_blank" rel="noopener noreferrer">unique to InputGroup</a></td></tr><tr><td>InputPassword</td><td>Password input box</td><td>Same as input attribute, <a href="https://www.antdv.com/components/input-cn/#input-password-1-14-0-%E4%B8%AD%E6%96%B0%E5%A2%9E" target="_blank" rel="noopener noreferrer">InputPassword unique attribute</a></td></tr><tr><td>InputSearch</td><td>Text search box</td><td><a href="https://www.antdv.com/components/input-cn/#input-search" target="_blank" rel="noopener noreferrer">InputSearch Unique Properties</a></td></tr><tr><td>InputTextArea</td><td>Text Field</td><td>Same as Input property</td></tr><tr><td>InputNumber</td><td>Numeric input box</td><td><a href="https://www.antdv.com/components/input-number-cn/#api" target="_blank" rel="noopener noreferrer">InputNumber Property</a></td></tr><tr><td>InputCountDown</td><td>Verification Code Component</td><td><a href="https://help.jeecg.com/component/CountDown.html#countdowninput" target="_blank" rel="noopener noreferrer">InputCountDown Property</a></td></tr><tr><td>Select</td><td>Drop-down box component</td><td><a href="https://www.antdv.com/components/select-cn/#api" target="_blank" rel="noopener noreferrer">Select Property</a></td></tr><tr><td>ApiSelect</td><td>Api drop-down box component</td><td><code>numberToString</code>: Whether to convert to numerical value, the default is false; <code>api:()=&gt;promise</code>: Request interface; <code>params：{}</code>: Request parameter; <code>resultField</code>: Return collection name; <code>labelField</code>: Title field name; <code>valueField</code>: Value field name; <code>immediate</code>: Whether to initialize loading, the default is true</td></tr><tr><td>TreeSelect</td><td>Tree drop-down selection component</td><td><a href="https://www.antdv.com/components/tree-select-cn/#api" target="_blank" rel="noopener noreferrer">TreeSelect Properties</a></td></tr><tr><td>ApiTreeSelect</td><td>Remote API tree drop-down selection component</td><td><code>TreeSelect</code>The return value must be consistent with <code>api:()=&gt;promise</code>: request interface; <code>params：{}</code>request parameters; <code>resultField</code>return collection name; <code>immediate</code>whether to initialize loading, default is true</td></tr><tr><td>ApiRadioGroup</td><td>Remote API radio button group component</td><td><code>api:()=&gt;promise</code>: Request interface; <code>params：{}</code>: Request parameters; <code>isBtn</code>: Whether it is a button style type, the default is false; <code>numberToString</code>: Whether to convert to a numeric value, the default is false; <code>resultField</code>: Return collection name <code>labelField</code>: title field name; <code>valueField</code>: Value field name; <code>immediate</code>: Whether to initialize loading, the default is true</td></tr><tr><td>RadioButtonGroup</td><td>Radio Button Group Component</td><td><code>options</code>: Custom title and value</td></tr><tr><td>RadioGroup</td><td>Radio button group component</td><td><a href="https://www.antdv.com/components/radio-cn/#radiogroup" target="_blank" rel="noopener noreferrer">RadioGroup Properties</a></td></tr><tr><td>Checkbox</td><td>Checkbox component</td><td><a href="https://www.antdv.com/components/checkbox-cn/#api" target="_blank" rel="noopener noreferrer">Checkbox Properties</a></td></tr><tr><td>CheckboxGroup</td><td>Checkbox Group Component</td><td><a href="https://www.antdv.com/components/checkbox-cn/#checkbox-group" target="_blank" rel="noopener noreferrer">CheckboxGroup Properties</a></td></tr><tr><td>AutoComplete</td><td>Autocomplete component</td><td><a href="https://www.antdv.com/components/auto-complete-cn/#api" target="_blank" rel="noopener noreferrer">AutoComplete Property</a></td></tr><tr><td>Cascader</td><td>Cascading Selection Component</td><td><a href="https://www.antdv.com/components/cascader-cn/#api" target="_blank" rel="noopener noreferrer">Cascader Properties</a></td></tr><tr><td>DatePicker</td><td>Date Selection Box Component</td><td><a href="https://www.antdv.com/components/date-picker-cn/#datepicker" target="_blank" rel="noopener noreferrer">DatePicker Properties</a></td></tr><tr><td>MonthPicker</td><td>Month selection component</td><td>-</td></tr><tr><td>WeekPicker</td><td>Date Selection Component</td><td>-</td></tr><tr><td>TimePicker</td><td>Time Selection Component</td><td>-</td></tr><tr><td>RangePicker</td><td>Date time range selection component</td><td><a href="https://www.antdv.com/components/date-picker-cn/#rangepicker" target="_blank" rel="noopener noreferrer">RangePicker Properties</a></td></tr><tr><td>RangeDate</td><td>Date Range Selection Component</td><td>-</td></tr><tr><td>RangeTime</td><td>Time Range Selection Component</td><td>-</td></tr><tr><td>Switch</td><td>Switch components</td><td><a href="https://www.antdv.com/components/switch-cn/#api" target="_blank" rel="noopener noreferrer">Switch Properties</a></td></tr><tr><td>StrengthMeter</td><td>Password Components</td><td><code>showInput</code>: Whether to display the password input box, the default is true; disabled: whether to disable, the default is false</td></tr><tr><td>Slider</td><td>Sliding scroll bar component</td><td><a href="https://www.antdv.com/components/slider-cn/#api" target="_blank" rel="noopener noreferrer">Slider Properties</a></td></tr><tr><td>Rate</td><td>Scoring Components</td><td><a href="https://www.antdv.com/components/rate-cn/#api" target="_blank" rel="noopener noreferrer">Rate Property</a></td></tr><tr><td>Divider</td><td>Dividing line component</td><td><a href="https://www.antdv.com/components/divider-cn/#api" target="_blank" rel="noopener noreferrer">Divider Properties</a></td></tr><tr><td>JAreaLinkage</td><td>Provincial, municipal and county linkage components</td><td><a href="https://help.jeecg.com/component/JAreaLinkage.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JAreaLinkage Properties</a></td></tr><tr><td>JSelectPosition</td><td>Position selection component</td><td><a href="https://help.jeecg.com/component/JSelectPosition.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JSelectPosition Property</a></td></tr><tr><td>JSelectRole</td><td>Character selection component</td><td><a href="https://help.jeecg.com/component/JSelectRole.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JSelectRole Properties</a></td></tr><tr><td>JSelectUser</td><td>User selection component</td><td><a href="https://help.jeecg.com/component/JSelectUser.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JSelectUser Properties</a></td></tr><tr><td>JImageUpload</td><td>Image upload component</td><td><a href="https://help.jeecg.com/component/JImageUpload.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JImageUpload Properties</a></td></tr><tr><td>JDictSelectTag</td><td>Custom label component</td><td><a href="https://help.jeecg.com/component/JDictSelectTag.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JDictSelectTag Properties</a></td></tr><tr><td>JSelectDept</td><td>Select department components</td><td><a href="https://help.jeecg.com/component/JSelectDept.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JSelectDept Property</a></td></tr><tr><td>JAreaSelect</td><td>Provincial and municipal linkage components</td><td><a href="https://help.jeecg.com/component/JAreaSelect.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JAreaSelect Properties</a></td></tr><tr><td>JEditor</td><td>Rich Text Component</td><td><a href="https://help.jeecg.com/component/JEditor.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JEditor Properties</a></td></tr><tr><td>JMarkdownEditor</td><td>Markdown component</td><td><a href="https://help.jeecg.com/component/JMarkdownEditor.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JMarkdownEditor Properties</a></td></tr><tr><td>JSelectInput</td><td>Input drop-down box component</td><td><a href="https://help.jeecg.com/component/JSelectInput.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JSelectInput Properties</a></td></tr><tr><td>JCodeEditor</td><td>Code Editor Components</td><td><code>height</code>: height, string type, default value <code>auto</code>; <code>disabled</code>: whether to disable, default false; <code>fullScreen</code>: whether to full screen, default false; <code>zIndex</code>: index after full screen; <code>theme</code>: code theme, such as <code>html</code>; <code>language</code>: language; <code>keywords</code>: code hint</td></tr><tr><td>JCategorySelect</td><td>Classification dictionary tree component</td><td><a href="https://help.jeecg.com/component/JCategorySelect.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JCategorySelect Properties</a></td></tr><tr><td>JSelectMultiple</td><td>Drop-down multiple-select component</td><td><a href="https://help.jeecg.com/component/JSelectMultiple.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JSelectMultiple Properties</a></td></tr><tr><td>JPopup</td><td>Pop-up window selection component</td><td><a href="https://help.jeecg.com/component/JPopup.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JPopup Properties</a></td></tr><tr><td>JSwitch</td><td>Switch components</td><td><a href="https://help.jeecg.com/component/JSwitch.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JSwitch Properties</a></td></tr><tr><td>JEasyCron</td><td>Timing Expression Selection Component</td><td><a href="https://help.jeecg.com/component/JEasyCron.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JEasyCron Properties</a></td></tr><tr><td>JTreeDict</td><td>Classification dictionary tree component</td><td><a href="https://help.jeecg.com/component/JTreeDict.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JTreeDict Properties</a></td></tr><tr><td>JInputPop</td><td>Multi-line input window component</td><td><a href="https://help.jeecg.com/component/JInputPopup.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JInputPop Properties</a></td></tr><tr><td>JCheckbox</td><td>Multi-select component</td><td><a href="https://help.jeecg.com/component/JCheckbox.html#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">JCheckbox Properties</a></td></tr><tr><td>JInput</td><td>Special query components</td><td><a href="https://help.jeecg.com/component/JInput.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JInput Properties</a></td></tr><tr><td>JTreeSelect</td><td>Drop-down tree selection component</td><td><a href="https://help.jeecg.com/component/JTreeSelect.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JTreeSelect Properties</a></td></tr><tr><td>JSelectUserByDept</td><td>Select user components by department</td><td><a href="https://help.jeecg.com/component/JSelectUserByDept.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JSelectUserByDept Properties</a></td></tr><tr><td>JUpload</td><td>Upload component</td><td><a href="https://help.jeecg.com/component/JUpload.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">JUpload Properties</a></td></tr><tr><td>JSearchSelect</td><td>Search component of dictionary table</td><td><a href="https://help.jeecg.com/component/JSearchSelectTag.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">JSearchSelect Properties</a></td></tr><tr><td>JAddInput</td><td>Dynamically create input box</td><td><code>value</code>: The bound value; <code>min</code>: The delete button will be displayed only when there are several data in the list, numeric type, the default value is 1</td></tr><tr><td>UserSelect</td><td>User selection component</td><td><a href="https://help.jeecg.com/component/UserSelect.html#%E9%85%8D%E7%BD%AE%E9%A1%B9" target="_blank" rel="noopener noreferrer">UserSelect Property</a></td></tr><tr><td>RoleSelect</td><td>Selecting Character Components</td><td><a href="https://help.jeecg.com/component/JSelectRole.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">RoleSelect Attributes</a></td></tr><tr><td>JRangeNumber</td><td>Numeric range input box</td><td>-</td></tr></tbody></table><h3 id="_4-display-hide-and-dynamically-disable-components" tabindex="-1"><a class="header-anchor" href="#_4-display-hide-and-dynamically-disable-components"><span>4. Display, hide and dynamically disable components</span></a></h3><p>Scenario 1: We can hide the id so that it is not displayed on the page, but use it programmatically.<br> Scenario 2: When the radio button &quot;Overall evaluation of the company&quot;</p><ul><li>When you choose satisfaction, hide the dissatisfaction statement;</li><li>When you choose &quot;unsatisfied&quot;, you need to fill in the reason for dissatisfaction and disable the satisfaction level.</li></ul><p>Page Effects</p><p>Code Sample</p><blockquote><p>By default, the id is hidden statically. You can drag it when you are satisfied.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/2f7472e26071f284f4bcffb89a95861dd5fd8fb5611dbc34519cb8a8dd4ffd41.dat" alt=""></p><blockquote><p>When you select &quot;dissatisfied&quot; in &quot;Overall evaluation of the company&quot;, you need to fill in the reason for dissatisfaction, and the satisfaction level cannot be dragged</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/7a1bac0178afd36e572d50b9e05c50e748841696c3a148caa4ddb8f99e2f653d.dat" alt=""></p><blockquote><p>Use the <code>show</code>or <code>ifShow</code>attributes to control the display and hiding of form components</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/17be5b1eb7619c6f1af1e0fb49456ca3100d8b42bdcb631b4caa669b0664b683.dat" alt=""></p><blockquote><p>Disable using <code>dynamicDisabled</code>dynamic control form components</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/7ec5198fa1da6b912d8670c040dea372ff37bd6de7a81252e9902d43c5c91d9e.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 字段显示与隐藏 --&gt;</span>
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
<span class="line">      field: &#39;id&#39;,</span>
<span class="line">      label: &#39;编号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      //隐藏id，css 控制，不会删除 dom（支持布尔类型 true和false。支持动态值判断，详情请见ifShow）</span>
<span class="line">      show: false,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;evaluate&#39;,</span>
<span class="line">      label: &#39;对公司整体评价&#39;,</span>
<span class="line">      component: &#39;RadioGroup&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          { label: &#39;满意&#39;, value: &#39;0&#39; },</span>
<span class="line">          { label: &#39;不满意&#39;, value: &#39;1&#39; },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      defaultValue: &#39;0&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;describe&#39;,</span>
<span class="line">      label: &#39;不满意原因说明&#39;,</span>
<span class="line">      component: &#39;InputTextArea&#39;,</span>
<span class="line">      //ifShow和show属性一致，values代表当前表单的值，js 控制，会删除 dom</span>
<span class="line">      ifShow: ({ values }) =&gt; {</span>
<span class="line">        return values.evaluate == &#39;1&#39;;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;satisfiedLevel&#39;,</span>
<span class="line">      label: &#39;满意度&#39;,</span>
<span class="line">      component: &#39;Slider&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        tipFormatter: (value) =&gt; {</span>
<span class="line">          return value + &#39;%&#39;;</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">      //动态禁用，values代表当前表单的值，返回 true或false</span>
<span class="line">      dynamicDisabled: ({ values }) =&gt; {</span>
<span class="line">        return values.evaluate == &#39;1&#39;;</span>
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
<span class="line">    showResetButton: false,</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_5-content-hints-and-component-suffixes" tabindex="-1"><a class="header-anchor" href="#_5-content-hints-and-component-suffixes"><span>5. Content hints and component suffixes</span></a></h3><ul><li>Scenario 1: Add the suffix month to the current month</li><li>Scenario 2: Display the number of late arrivals and the amount of fines</li></ul><h4 id="_5-1-page-effects-and-code-display" tabindex="-1"><a class="header-anchor" href="#_5-1-page-effects-and-code-display"><span>5.1 Page effects and code display</span></a></h4><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/0c375f30bb830bf78bc23e2e959f1fe35597369843e43c872ac21d8d8991b7ca.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/2fa5119c10f093e6fb3225c1a3384179fddd0c28f9bfbd4607c62abf390c6220.dat" alt=""></p><blockquote><p>Use <code>suffix</code>attributes to complete the component suffix prompt</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/2c650033e1737cd90987dbe7bfbda9fbe66959fb01c784549a690deb092fb175.dat" alt=""></p><blockquote><p>Use <code>helpMessage</code>hints help information</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/9e324e9b1dfd22c374a139fcf5a7714d3e4ef3f6be3f60bf668958b059823bb2.dat" alt=""></p><blockquote><p>You can use <code>helpComponentProps</code>the style of the modified prompt information</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/9dc0caa9407d09b46935a6f173cc8851f8f55c18e902bf79bed0b7c3c8ceca7a.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">&lt;!-- 字段标题提示及前缀 --&gt;</span>
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
<span class="line">      field: &#39;month&#39;,</span>
<span class="line">      label: &#39;当前月份&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      suffix: &#39;月&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;lateNumber&#39;,</span>
<span class="line">      label: &#39;迟到次数&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">      //帮助信息：可以直接返回String(helpMessage:&quot;迟到次数&quot;)，也可以获取表单值，动态填写</span>
<span class="line">      helpMessage: ({ values }) =&gt; {</span>
<span class="line">        return &#39;当前迟到次数&#39; + values.lateNumber + &#39;, 扣款&#39; + values.lateNumber * 50 + &#39;元&#39;;</span>
<span class="line">      },</span>
<span class="line">      defaultValue: 0,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;lateReason&#39;,</span>
<span class="line">      label: &#39;迟到原因&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      helpMessage: &#39;什么原因耽误上班迟到&#39;,</span>
<span class="line">      //自定义提示属性，需要结合helpMessage一起使用</span>
<span class="line">      helpComponentProps: {</span>
<span class="line">        maxWidth: &#39;200px&#39;,</span>
<span class="line">        color: &#39;#66CCFF&#39;,</span>
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
<span class="line">    showResetButton: false,</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_5-2-helpcomponentpropsattribute-introduction" tabindex="-1"><a class="header-anchor" href="#_5-2-helpcomponentpropsattribute-introduction"><span>5.2 <code>helpComponentProps</code>Attribute Introduction</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//最大宽度</span>
<span class="line">maxWidth: string;</span>
<span class="line">//是否显示序号</span>
<span class="line">showIndex: boolean;</span>
<span class="line">//文本列表,会覆盖helpMessage定义的文本</span>
<span class="line">text: any;</span>
<span class="line">//颜色</span>
<span class="line">color: string;</span>
<span class="line">//字体大小</span>
<span class="line">fontSize: string;</span>
<span class="line">//气泡框位置</span>
<span class="line">placement: string;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_6-form-validation" tabindex="-1"><a class="header-anchor" href="#_6-form-validation"><span>6. Form validation</span></a></h3><p>Only forms that pass the test are allowed to be saved. Example: Test the visitor form</p><p>Page Effects</p><p>Code Sample</p><blockquote><p>Trigger form validation effects</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/b62ea199a1661916f6f11af98110c70829dc51f14a3f8cc958a4a29d97471e22.dat" alt=""></p><ul><li>① Fill in the form <code>required</code>to complete the automatic form check and check <code>rulesMessageJoinLabel</code>whether to add a title<br><img src="https://lfs.k.topthink.com/lfs/0cdd5bc1a4086e8d61626dec85c7323b58cfd2fd85a482cedecf5da7ac42e891.dat" alt=""></li><li>②Supports <code>required</code>obtaining the current value to judge the trigger values ​​representing the value of the current form<br><img src="https://lfs.k.topthink.com/lfs/99cc39fbb4503e2ccd9c5bfa3d22464adf9a65c4f212e6476f646e593697baad.dat" alt=""></li><li>③ Support regular expression pattern and custom prompt message, <code>rules</code>just use attributes<br><img src="https://lfs.k.topthink.com/lfs/3aa95723f43444bef7f2e13bf3ae3c266fb83c64b67784827f9b4f0f65bd874a.dat" alt=""></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">&lt;!-- 表单验证 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
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
<span class="line">      //自动触发检验，布尔类型</span>
<span class="line">      required: true,</span>
<span class="line">      //检验的时候不加上标题</span>
<span class="line">      rulesMessageJoinLabel: false,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;accessed&#39;,</span>
<span class="line">      label: &#39;来访日期&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">      //支持获取当前值判断触发 values代表当前表单的值</span>
<span class="line">      required: ({ values }) =&gt; {</span>
<span class="line">        return !values.accessed;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;来访人手机号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      //支持正则表达式pattern 和 自定义提示信息 message</span>
<span class="line">      rules: [{ required: false, message: &#39;请输入正确的手机号&#39;, pattern: /^1[3456789]\\d{9}$/ }],</span>
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
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 提交事件</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values: any) {}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_7-custom-dynamic-form-validation" tabindex="-1"><a class="header-anchor" href="#_7-custom-dynamic-form-validation"><span>7. Custom dynamic form validation</span></a></h3><ul><li>If you have not filled in the &quot;Visiting mobile phone number&quot;, please enter your mobile phone number.</li><li>The mobile phone number is incorrect. Please enter the correct mobile phone number.</li></ul><p>Page Effects</p><p>Code Sample</p><blockquote><p>Mobile phone number has no value</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/bde060a3795386808bb3f4f0bcf449d3b0f93ec9a844d4818e7a626ec7a2e640.dat" alt=""></p><blockquote><p>The phone number has a value, but the phone number is incorrect</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/1e0cd8a23ef026519ad3461f04f9f5a824673d659b0eb50dedc28d4d94640e41.dat" alt=""></p><blockquote><p>Mobile phone number verification passed</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/1a5b54bc1539614d40679d9487d538f480e05b1a78a1710929e2ebb1b32e8ace.dat" alt=""></p><blockquote><p>Mainly based on <code>schemas</code>attribute dynamic inspection<code>dynamicRules</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/642aca079925a30c51cb546f6e7605bcf9f1abf0a3dd797ade64ab4c7ee0d643.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 动态表单验证 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { duplicateCheck } from &#39;/@/views/system/user/user.api&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;visitor&#39;,</span>
<span class="line">      label: &#39;来访人员&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      //自动触发检验，布尔类型</span>
<span class="line">      required: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;accessed&#39;,</span>
<span class="line">      label: &#39;来访日期&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">      //支持获取当前值判断触发 values代表当前表单的值</span>
<span class="line">      required: ({ values }) =&gt; {</span>
<span class="line">        return !values.accessed;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;来访人手机号&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      //动态自定义正则，values: 当前表单的所有值</span>
<span class="line">      dynamicRules: ({ values }) =&gt; {</span>
<span class="line">        console.log(&#39;values:&#39;, values);</span>
<span class="line">        //需要return</span>
<span class="line">        return [</span>
<span class="line">          {</span>
<span class="line">            //默认开启表单检验</span>
<span class="line">            required: true,</span>
<span class="line">            // value 当前手机号输入的值</span>
<span class="line">            validator: (_, value) =&gt; {</span>
<span class="line">              //需要return 一个Promise对象</span>
<span class="line">              return new Promise((resolve, reject) =&gt; {</span>
<span class="line">                if (!value) {</span>
<span class="line">                  reject(&#39;请输入手机号！&#39;);</span>
<span class="line">                }</span>
<span class="line">                //验证手机号是否正确</span>
<span class="line">                let reg = /^1[3456789]\\d{9}$/;</span>
<span class="line">                if (!reg.test(value)) {</span>
<span class="line">                  reject(&#39;请输入正确手机号！&#39;);</span>
<span class="line">                }</span>
<span class="line">                resolve();</span>
<span class="line">              });</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">        ];</span>
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
<span class="line">    showResetButton: false,</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 提交事件</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values: any) {}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_8-slotsimple-use-of-field-slots" tabindex="-1"><a class="header-anchor" href="#_8-slotsimple-use-of-field-slots"><span>8. <code>slot</code>Simple use of field slots</span></a></h3><p>Example: When collecting user feedback, the following text message is provided so that users can understand and fill in the form.</p><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/79166449eb5afd1af62adc3960e4f0a599148fd4c8f291a66ca5b6a308ad16c8.dat" alt=""></p><blockquote><p>In <code>shemes</code>we can <code>slot</code>bind by <code>BasicForm</code>filling in the name of the corresponding slot in</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/1ea5c2e5c72ab8834fb0bc817ace5367b13b482ebcbbe6cf5f2223d4c4426934.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">&lt;!-- 插槽 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot;&gt;</span>
<span class="line">    &lt;!--  #phone对应的是formSchemas对应slot(phone)插槽    --&gt;</span>
<span class="line">    &lt;template #phone=&quot;{ model, field }&quot;&gt;</span>
<span class="line">      &lt;!-- 如果是组件需要进行双向绑定，model当前表单对象，field当前字段名称  --&gt;</span>
<span class="line">      &lt;a-input v-model:value=&quot;model[field]&quot; placeholder=&quot;请输入手机号&quot; /&gt;</span>
<span class="line">      &lt;span class=&quot;font-color&quot;&gt;请输入您的手机号，方便我们联系您&lt;/span&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;template #feedback=&quot;{ model, field }&quot;&gt;</span>
<span class="line">      &lt;JEditor v-model:value=&quot;model[field]&quot; placeholder=&quot;请输入问题反馈&quot; /&gt;</span>
<span class="line">      &lt;span class=&quot;font-color&quot;&gt;请您图文并茂，方便我们了解问题并及时反馈&lt;/span&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import JEditor from &#39;/@/components/Form/src/jeecg/components/JEditor.vue&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      label: &#39;姓名&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;联系方式&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      slot: &#39;phone&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;feedback&#39;,</span>
<span class="line">      label: &#39;问题反馈&#39;,</span>
<span class="line">      component: &#39;InputTextArea&#39;,</span>
<span class="line">      slot: &#39;feedback&#39;,</span>
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
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  .font-color {</span>
<span class="line">    font-size: 13px;</span>
<span class="line">    color: #a1a1a1;</span>
<span class="line">    margin-bottom: 5px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_9-custom-components" tabindex="-1"><a class="header-anchor" href="#_9-custom-components"><span>9. Custom Components</span></a></h3><p>Custom components are divided into two ways</p><ul><li><code>slot</code>Slot Mode</li><li><code>component</code>Way</li></ul><h4 id="_9-1-slot-mode" tabindex="-1"><a class="header-anchor" href="#_9-1-slot-mode"><span>9.1 Slot Mode</span></a></h4><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/dc10d1ed3076b9a590fe47503341d4151d79416a085417858f7d77e132eeb3e0.dat" alt=""></p><blockquote><p>In <code>shemes</code>we can <code>slot</code>bind by <code>BasicForm</code>filling in the name of the corresponding slot in</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/f896866cebfb9095be33add0f75f2ccdbe00b28ae171c05a0aeae08bbf8b3a1e.dat" alt=""></p><blockquote><p>Generally we put it <code>src/components/Form/src/jeecg</code>in a directory. The name of the custom component in this example is<code>CustomDemo</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/06eda0569a95017738765857b6c82bc72cda32cf5b9efaaa8d58c9c47cbd09a4.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;a-input v-model:value=&quot;innerValue&quot; @change=&quot;handleChange&quot;&gt;</span>
<span class="line">    &lt;template #addonAfter&gt;</span>
<span class="line">      &lt;a-icon type=&quot;setting&quot; @click=&quot;handleIconClick&quot; style=&quot;cursor: pointer&quot;&gt;&lt;/a-icon&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/a-input&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, watch, ref } from &#39;vue&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  import { propTypes } from &#39;/@/utils/propTypes&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    name: &#39;CustomDemo&#39;,</span>
<span class="line">    props: {</span>
<span class="line">      value: propTypes.string.def(&#39;&#39;),</span>
<span class="line">    },</span>
<span class="line">    emits: [&#39;change&#39;, &#39;update:value&#39;],</span>
<span class="line">    setup(props, { emit }) {</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line"></span>
<span class="line">      const innerValue = ref&lt;any&gt;(&#39;&#39;);</span>
<span class="line">      //监听value变化</span>
<span class="line">      watch(</span>
<span class="line">        () =&gt; props.value,</span>
<span class="line">        (val) =&gt; {</span>
<span class="line">          innerValue.value = val;</span>
<span class="line">        },</span>
<span class="line">        { immediate: true }</span>
<span class="line">      );</span>
<span class="line"></span>
<span class="line">      /**</span>
<span class="line">       * 设置按钮点击事件</span>
<span class="line">       */</span>
<span class="line">      function handleIconClick() {</span>
<span class="line">        createMessage.success(&#39;当前值:&#39; + innerValue.value);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      /**</span>
<span class="line">       * change事件</span>
<span class="line">       * @param e</span>
<span class="line">       */</span>
<span class="line">      function handleChange(e) {</span>
<span class="line">        let value = e.target.value;</span>
<span class="line">        emit(&#39;update:value&#39;, value);</span>
<span class="line">        emit(&#39;change&#39;, value);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        innerValue,</span>
<span class="line">        handleIconClick,</span>
<span class="line">        handleChange,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Component reference</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 插槽 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot; @submit=&quot;handleSubmit&quot;&gt;</span>
<span class="line">      &lt;!--  #name对应的是formSchemas对应slot(name)插槽    --&gt;</span>
<span class="line">      &lt;template #name=&quot;{ model, field }&quot;&gt;</span>
<span class="line">        &lt;CustomDemo v-model:value=&quot;model[field]&quot; /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  //引入CustomDemo自定义组件</span>
<span class="line">  import CustomDemo from &#39;/@/components/Form/src/jeecg/demo/CustomDemo.vue&#39;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;name&#39;,</span>
<span class="line">      label: &#39;姓名&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      slot:&#39;name&#39;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;phone&#39;,</span>
<span class="line">      label: &#39;联系方式&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;feedback&#39;,</span>
<span class="line">      label: &#39;问题反馈&#39;,</span>
<span class="line">      component: &#39;InputTextArea&#39;,</span>
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
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 提交信息</span>
<span class="line">   */</span>
<span class="line">  function handleSubmit(values) {</span>
<span class="line">    console.log(&quot;values::&quot;,values);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  .font-color {</span>
<span class="line">    font-size: 13px;</span>
<span class="line">    color: #a1a1a1;</span>
<span class="line">    margin-bottom: 5px;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_9-2-component-method" tabindex="-1"><a class="header-anchor" href="#_9-2-component-method"><span>9.2 Component Method</span></a></h4><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/879f765d1ebf3fa0566c0698cbf15220850f2f0d9935210a51e3ad5301eb44bf.dat" alt=""></p><blockquote><p>Generally we put it <code>src/components/Form/src/jeecg</code>in a directory. The name of the custom component in this example is<code>CustomDemo</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/06eda0569a95017738765857b6c82bc72cda32cf5b9efaaa8d58c9c47cbd09a4.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;a-input v-model:value=&quot;innerValue&quot; @change=&quot;handleChange&quot;&gt;</span>
<span class="line">    &lt;template #addonAfter&gt;</span>
<span class="line">      &lt;a-icon type=&quot;setting&quot; @click=&quot;handleIconClick&quot; style=&quot;cursor: pointer&quot;&gt;&lt;/a-icon&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/a-input&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, watch, ref } from &#39;vue&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  import { propTypes } from &#39;/@/utils/propTypes&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    name: &#39;CustomDemo&#39;,</span>
<span class="line">    props: {</span>
<span class="line">      value: propTypes.string.def(&#39;&#39;),</span>
<span class="line">    },</span>
<span class="line">    emits: [&#39;change&#39;, &#39;update:value&#39;],</span>
<span class="line">    setup(props, { emit }) {</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line"></span>
<span class="line">      const innerValue = ref&lt;any&gt;(&#39;&#39;);</span>
<span class="line">      //监听value变化</span>
<span class="line">      watch(</span>
<span class="line">        () =&gt; props.value,</span>
<span class="line">        (val) =&gt; {</span>
<span class="line">          innerValue.value = val;</span>
<span class="line">        },</span>
<span class="line">        { immediate: true }</span>
<span class="line">      );</span>
<span class="line"></span>
<span class="line">      /**</span>
<span class="line">       * 设置按钮点击事件</span>
<span class="line">       */</span>
<span class="line">      function handleIconClick() {</span>
<span class="line">        createMessage.success(&#39;当前值:&#39; + innerValue.value);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      /**</span>
<span class="line">       * change事件</span>
<span class="line">       * @param e</span>
<span class="line">       */</span>
<span class="line">      function handleChange(e) {</span>
<span class="line">        let value = e.target.value;</span>
<span class="line">        emit(&#39;update:value&#39;, value);</span>
<span class="line">        emit(&#39;change&#39;, value);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        innerValue,</span>
<span class="line">        handleIconClick,</span>
<span class="line">        handleChange,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Global import: path<code>src/components/Form/src/componentMap.ts</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/3455fb4a8432f63321555b92a5b09b676f7142d9488eb269bcab6837882b78cb.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import CustomDemo from &#39;./jeecg/demo/CustomDemo.vue&#39;;</span>
<span class="line">componentMap.set(&#39;CustomDemo&#39;,CustomDemo);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p><code>ComponentType</code>Introduce custom components in the path<code>src/components/Form/src/types/index.ts</code></p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/43d0415a4939f5376a26afdfb925c1c3edb14f410a92ad76981a33c8c0135fbb.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">| &#39;CustomDemo&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Import into component</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/140aca751ab92bd86a20ce546903ef2f5ff5574a1fa294fd9f2a6eb694fa3f18.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 自定义组件 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin-top: 50px; margin-left: 50px&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;custom&#39;,</span>
<span class="line">      label: &#39;自定义组件&#39;,</span>
<span class="line">      //引入自定义组件</span>
<span class="line">      component: &#39;CustomDemo&#39;,</span>
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
<span class="line">  });</span>
<span class="line"></span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_10-custom-rendering" tabindex="-1"><a class="header-anchor" href="#_10-custom-rendering"><span>10. Custom Rendering</span></a></h3><p>Example: Product description requires product name plus price times quantity</p><p>Page Effects</p><p>Code Sample</p><ul><li>① Custom component input box</li><li>② Product name plus price multiplied by price</li></ul><p><img src="https://lfs.k.topthink.com/lfs/e36a3f58f7b34c230af0115dea21f0230990182ac438203aa9093277094bff01.dat" alt=""></p><blockquote><p>① Custom rendering components</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/f9b6080de271224b756374b7aad2bc54ebe6d3c231a7d841cc742304f86d61bb.dat" alt=""></p><blockquote><p>② Custom text rendering</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/c624b38f5ba8b9cd077b2fed8c916dbd5627ff0c29c0ff9cab14d63ee6c49447.dat" alt=""></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 自定义渲染 --&gt;</span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- 自定义表单 --&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;registerForm&quot; style=&quot;margin: 50px 50px 0 50px&quot;&gt;</span>
<span class="line">    &lt;!--  #phone对应的是formSchemas对应slot(phone)插槽    --&gt;</span>
<span class="line">    &lt;template #phone=&quot;{ model, field }&quot;&gt;</span>
<span class="line">      &lt;!-- 如果是组件需要进行双向绑定，model当前表单对象，field当前字段名称  --&gt;</span>
<span class="line">      &lt;a-input v-model:value=&quot;model[field]&quot; placeholder=&quot;请输入手机号&quot; /&gt;</span>
<span class="line">      &lt;span class=&quot;font-color&quot;&gt;请输入您的手机号，方便我们联系您&lt;/span&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;template #feedback=&quot;{ model, field }&quot;&gt;</span>
<span class="line">      &lt;JEditor v-model:value=&quot;model[field]&quot; placeholder=&quot;请输入问题反馈&quot; /&gt;</span>
<span class="line">      &lt;span class=&quot;font-color&quot;&gt;请您图文并茂，方便我们了解问题并及时反馈&lt;/span&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicForm&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  //引入依赖</span>
<span class="line">  import { useForm, BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import JEditor from &#39;/@/components/Form/src/jeecg/components/JEditor.vue&#39;;</span>
<span class="line">  import { h } from &#39;vue&#39;;</span>
<span class="line">  import { Input } from &#39;ant-design-vue&#39;;</span>
<span class="line"></span>
<span class="line">  //自定义表单字段</span>
<span class="line">  const formSchemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;productName&#39;,</span>
<span class="line">      label: &#39;商品名称&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;price&#39;,</span>
<span class="line">      label: &#39;价格&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;buyNums&#39;,</span>
<span class="line">      label: &#39;购买个数&#39;,</span>
<span class="line">      component: &#39;InputNumber&#39;,</span>
<span class="line">      //model 单签表单对象，field 当前字段</span>
<span class="line">      render: ({ model, field }) =&gt; {</span>
<span class="line">        //渲染自定义组件，以Input为例</span>
<span class="line">        return h(Input, {</span>
<span class="line">          placeholder: &#39;请输入购买个数&#39;,</span>
<span class="line">          value: model[field],</span>
<span class="line">          style: { width: &#39;100%&#39; },</span>
<span class="line">          type: &#39;number&#39;,</span>
<span class="line">          onChange: (e: ChangeEvent) =&gt; {</span>
<span class="line">            model[field] = e.target.value;</span>
<span class="line">          },</span>
<span class="line">        });</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;describe&#39;,</span>
<span class="line">      label: &#39;描述&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        disabled: true,</span>
<span class="line">      },</span>
<span class="line">      //渲染 values当前表单所有值</span>
<span class="line">      render: ({ values }) =&gt; {</span>
<span class="line">        let productName = values.productName;</span>
<span class="line">        let price = values.price ? values.price : 0;</span>
<span class="line">        let buyNums = values.buyNums ? values.buyNums : 0;</span>
<span class="line">        return &#39;购买商品名称：&#39; + productName + &#39;, 总价格: &#39; + price * buyNums + &#39;元&#39;;</span>
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
<span class="line">    showResetButton: false,</span>
<span class="line">    submitButtonOptions: { text: &#39;提交&#39;, preIcon: &#39;&#39; },</span>
<span class="line">    actionColOptions: { span: 17 },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line">  /** 数字输入框样式 */</span>
<span class="line">  :deep(.ant-input-number) {</span>
<span class="line">    width: 100%;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="schemasapi-attributes" tabindex="-1"><a class="header-anchor" href="#schemasapi-attributes"><span><code>schemas</code>API attributes</span></a></h2><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>field</td><td>string</td><td>-</td><td>-</td><td>Field Name</td></tr><tr><td>label</td><td>string</td><td>-</td><td>-</td><td>Tag Name</td></tr><tr><td>subLabel</td><td>string</td><td>-</td><td>-</td><td>Secondary label name gray</td></tr><tr><td>suffix</td><td>string , number , ((values: RenderCallbackParams) =&gt; string / number);</td><td>-</td><td>-</td><td>Content behind the component</td></tr><tr><td>changeEvent</td><td>string</td><td>-</td><td>-</td><td>Form update event name</td></tr><tr><td>helpMessage</td><td>string , string[]</td><td>-</td><td>-</td><td>Tips on the right side of the tag name, see 4. Content Tips and Component Suffixes</td></tr><tr><td>helpComponentProps</td><td>HelpComponentProps</td><td>-</td><td>-</td><td>The friendly reminder component on the right side of the tag name, see 4. Content prompts and component suffixes</td></tr><tr><td>labelWidth</td><td>string , number</td><td>-</td><td>-</td><td>Override the uniformly set labelWidth</td></tr><tr><td>disabledLabelWidth</td><td>boolean</td><td>false</td><td>true/false</td><td>Disable the labelWidth setting of the form globally, and manually set labelCol and wrapperCol</td></tr><tr><td>component</td><td>string</td><td>-</td><td>-</td><td>Component type, see 1. Basic usage</td></tr><tr><td>componentProps</td><td>any,()=&gt;{}</td><td>-</td><td>-</td><td>The props of the rendered component</td></tr><tr><td>rules</td><td>ValidationRule[]</td><td>-</td><td>-</td><td>Verification rules, see 5. Form verification</td></tr><tr><td>required</td><td>boolean</td><td>-</td><td>-</td><td>Enable form validation</td></tr><tr><td>rulesMessageJoinLabel</td><td>boolean</td><td>false</td><td>-</td><td>Check whether the information is added to the label</td></tr><tr><td>itemProps</td><td>any</td><td>-</td><td>-</td><td>Injected into FormItem&#39;s properties</td></tr><tr><td>colProps</td><td>ColEx</td><td>-</td><td>-</td><td>Component occupancy ratio, such as colProps: { span: 18 }</td></tr><tr><td>defaultValue</td><td>object</td><td>-</td><td>-</td><td>The initial value of the rendered component</td></tr><tr><td>render</td><td>(renderCallbackParams: RenderCallbackParams) =&gt; VNode / VNode[] / string\`</td><td>-</td><td>-</td><td>Custom rendering components</td></tr><tr><td>renderColContent</td><td>(renderCallbackParams: RenderCallbackParams) =&gt; VNode / VNode[] / string</td><td>-</td><td>-</td><td>Custom rendering component (need to include formItem)</td></tr><tr><td>renderComponentContent</td><td>(renderCallbackParams: RenderCallbackParams) =&gt; any / string</td><td>-</td><td>-</td><td>Slots inside custom rendering groups</td></tr><tr><td>slot</td><td>string</td><td>-</td><td>-</td><td>Custom slot, rendering component</td></tr><tr><td>colSlot</td><td>string</td><td>-</td><td>-</td><td>Custom slot, rendering component (need to include formItem</td></tr><tr><td>show</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically determine whether the current component is displayed, controlled by CSS, and will not delete the DOM</td></tr><tr><td>ifShow</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically determine whether the current component is displayed, js control, dom will be deleted</td></tr><tr><td>dynamicDisabled</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically determine whether the current component is disabled</td></tr><tr><td>dynamicRules</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically return the current component&#39;s validation rules</td></tr><tr><td>dynamicPropskey</td><td>string</td><td>-</td><td>-</td><td>Set the key corresponding to the value that needs to be dynamically updated (must be used with dynamicPropsVal)</td></tr><tr><td>dynamicPropsVal</td><td>((renderCallbackParams: RenderCallbackParams) =&gt; any)</td><td>-</td><td>-</td><td>Dynamically update the current component props (must be used with dynamicPropskey)</td></tr></tbody></table>`,115))])}const b=i(o,[["render",m]]),h=JSON.parse('{"path":"/syncadmin/ui-component-library/basic-form/","title":"BasicForm","lang":"ko-KR","frontmatter":{"order":1,"dir":{"order":3}},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/ui-component-library/basic-form/README.md"}');export{b as comp,h as data};
