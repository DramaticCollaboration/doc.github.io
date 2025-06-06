import{_ as n,c as s,a,o as i}from"./app-DeddRHAy.js";const t={};function l(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="basicform-form-back" tabindex="-1"><a class="header-anchor" href="#basicform-form-back"><span>BasicForm form back</span></a></h1><p>Encapsulate <code>antv</code>the form component and expand some common functions</p><blockquote><p>If it is not in the documentation, try looking for it in the online examples.</p></blockquote><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><h3 id="the-useform-method" tabindex="-1"><a class="header-anchor" href="#the-useform-method"><span>The useForm method</span></a></h3><p>Here is an example using a simple form with only one input box</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;m-4&quot;&gt;</span>
<span class="line">    &lt;BasicForm</span>
<span class="line">      :labelWidth=&quot;100&quot;</span>
<span class="line">      :schemas=&quot;schemas&quot;</span>
<span class="line">      :actionColOptions=&quot;{ span: 24 }&quot;</span>
<span class="line">      @submit=&quot;handleSubmit&quot;</span>
<span class="line">    /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicForm, FormSchema } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  const schemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      label: &#39;字段1&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      defaultValue: &#39;1&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        placeholder: &#39;自定义placeholder&#39;,</span>
<span class="line">        onChange: (e) =&gt; {</span>
<span class="line">          console.log(e);</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm, CollapseContainer },</span>
<span class="line">    setup() {</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line">      return {</span>
<span class="line">        schemas,</span>
<span class="line">        handleSubmit: (values: any) =&gt; {</span>
<span class="line">          createMessage.success(&#39;click search,values:&#39; + JSON.stringify(values));</span>
<span class="line">        },</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="template-method" tabindex="-1"><a class="header-anchor" href="#template-method"><span>Template method</span></a></h3><p>All callable functions are <code>Methods</code>described below.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;m-4&quot;&gt;</span>
<span class="line">      &lt;BasicForm</span>
<span class="line">        :schemas=&quot;schemas&quot;</span>
<span class="line">        ref=&quot;formElRef&quot;</span>
<span class="line">        :labelWidth=&quot;100&quot;</span>
<span class="line">        @submit=&quot;handleSubmit&quot;</span>
<span class="line">        :actionColOptions=&quot;{ span: 24 }&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { BasicForm, FormSchema, FormActionType, FormProps } from &#39;/@/components/Form&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container&#39;;</span>
<span class="line">  const schemas: FormSchema[] = [</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm, CollapseContainer },</span>
<span class="line">    setup() {</span>
<span class="line">      const formElRef = ref&lt;Nullable&lt;FormActionType&gt;&gt;(null);</span>
<span class="line">      return {</span>
<span class="line">        formElRef,</span>
<span class="line">        schemas,</span>
<span class="line">        setProps(props: FormProps) {</span>
<span class="line">          const formEl = formElRef.value;</span>
<span class="line">          if (!formEl) return;</span>
<span class="line">          formEl.setProps(props);</span>
<span class="line">        },</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="useform" tabindex="-1"><a class="header-anchor" href="#useform"><span>useForm</span></a></h2><p>The form component also provides <code>useForm</code>a convenient way to call internal methods of functions</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;register&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicForm, FormSchema, useForm } from &#39;/@/components/Form/index&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container/index&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  const schemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field1&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      label: &#39;字段1&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      componentProps: {</span>
<span class="line">        placeholder: &#39;自定义placeholder&#39;,</span>
<span class="line">        onChange: (e: any) =&gt; {</span>
<span class="line">          console.log(e);</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm, CollapseContainer },</span>
<span class="line">    setup() {</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line">      const [register, { setProps }] = useForm({</span>
<span class="line">        labelWidth: 120,</span>
<span class="line">        schemas,</span>
<span class="line">        actionColOptions: {</span>
<span class="line">          span: 24,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line">      return {</span>
<span class="line">        register,</span>
<span class="line">        schemas,</span>
<span class="line">        handleSubmit: (values: any) =&gt; {</span>
<span class="line">          createMessage.success(&#39;click search,values:&#39; + JSON.stringify(values));</span>
<span class="line">        },</span>
<span class="line">        setProps,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="parameter-introduction" tabindex="-1"><a class="header-anchor" href="#parameter-introduction"><span>Parameter Introduction</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const [register, methods] = useForm(props);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>The value in the parameter props can be computed or ref type</strong></p><p><strong>register</strong></p><p>register is used for registration <code>useForm</code>. If you need to use <code>useForm</code>the provided api, you must pass register to the component&#39;s<code>onRegister</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicForm @register=&quot;register&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm },</span>
<span class="line">    setup() {</span>
<span class="line">      const [register] = useForm();</span>
<span class="line">      return {</span>
<span class="line">        register,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><code>Methods</code>See description below</p><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h3><p><strong>getFieldsValue</strong></p><p>type:<code>() =&gt; Recordable;</code></p><p>Description: Get form value</p><p><strong>setFieldsValue</strong></p><p>type:<code>&lt;T&gt;(values: T) =&gt; Promise&lt;void&gt;</code></p><p>Description: Set the form field value</p><p><strong>resetFields</strong></p><p>type:<code>()=&gt; Promise&lt;any&gt;</code></p><p>Description: Reset form values</p><p><strong>validateFields</strong></p><p>type:<code>(nameList?: NamePath[]) =&gt; Promise&lt;any&gt;</code></p><p>Description: Check the specified form item</p><p><strong>validate</strong></p><p>type:<code>(nameList?: NamePath[]) =&gt; Promise&lt;any&gt;</code></p><p>Description: Validate the entire form</p><p><strong>submit</strong></p><p>type:<code>() =&gt; Promise&lt;void&gt;</code></p><p>Description: Submit the form</p><p><strong>scrollToField</strong></p><p>type:<code>(name: NamePath, options?: ScrollOptions) =&gt; Promise&lt;void&gt;</code></p><p>Description: Scroll to the corresponding field position</p><p><strong>clearValidate</strong></p><p>type:<code>(name?: string | string[]) =&gt; Promise&lt;void&gt;</code></p><p>Description: Clear verification</p><p><strong>setProps</strong></p><p>TIP</p><p>To set the props of the form, you can pass it directly on the tag, use setProps, or initialize it by writing useForm(props)</p><p>type:<code>(formProps: Partial&lt;FormProps&gt;) =&gt; Promise&lt;void&gt;</code></p><p>Description: Set form Props</p><p><strong>removeSchemaByFiled</strong></p><p>type:<code>(field: string | string[]) =&gt; Promise&lt;void&gt;</code></p><p>Description: Delete Schema based on field</p><p><strong>appendSchemaByField</strong></p><p>type:<code>( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) =&gt; Promise&lt;void&gt;</code></p><p>Description: Insert after the specified field. If no field is specified, insert at the end. When first = true, insert at the first position.</p><p><strong>updateSchema</strong></p><p>type:<code>(data: Partial&lt;FormSchema&gt; | Partial&lt;FormSchema&gt;[]) =&gt; Promise&lt;void&gt;</code></p><p>Description: Update the form&#39;s schema, only update the parameters passed by the function</p><p>e.g</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">updateSchema({ field: &#39;filed&#39;, componentProps: { disabled: true } });</span>
<span class="line">updateSchema([</span>
<span class="line">  { field: &#39;filed&#39;, componentProps: { disabled: true } },</span>
<span class="line">  { field: &#39;filed1&#39;, componentProps: { disabled: false } },</span>
<span class="line">]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><p>Reminder</p><p>In addition to the following parameters, props in the official documentation are also supported. For details, please refer to <a href="https://www.antdv.com/components/form-cn" target="_blank" rel="noopener noreferrer">antv form</a></p><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th><th>Version</th></tr></thead><tbody><tr><td>schemas</td><td><code>Schema[]</code></td><td>-</td><td>-</td><td>Form configuration, see <code>FormSchema</code>the configuration below</td><td></td></tr><tr><td>submitOnReset</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Whether to submit the form when resetting</td><td></td></tr><tr><td>labelCol</td><td>Partial</td><td>-</td><td>-</td><td>Common LabelCol configuration for the entire form</td><td></td></tr><tr><td>wrapperCol</td><td>Partial</td><td>-</td><td>-</td><td>Common wrapperCol configuration for the entire form</td><td></td></tr><tr><td>baseColProps</td><td>Partial</td><td>-</td><td>-</td><td>Configure ColProps for all selected items. You don&#39;t need to configure them one by one. You can also configure the priority and global of each item separately.</td><td></td></tr><tr><td>baseRowStyle</td><td><code>object</code></td><td>-</td><td>-</td><td>Configure the style of all Rows</td><td></td></tr><tr><td>labelWidth</td><td>number , string</td><td>-</td><td>-</td><td>Expand the form component and increase the label width. This applies to all components in the form and can be overridden or disabled for a single item.</td><td></td></tr><tr><td>labelAlign</td><td><code>string</code></td><td>-</td><td><code>left</code>,<code>right</code></td><td>Label layout</td><td></td></tr><tr><td>mergeDynamicData</td><td><code>object</code></td><td>-</td><td>-</td><td>Additional parameter values ​​passed to child components</td><td></td></tr><tr><td>autoFocusFirstItem</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Whether to focus on the first input box. This only works when the first form item is input.</td><td></td></tr><tr><td>compact</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Compact type form, reduce margin-bottom</td><td></td></tr><tr><td>size</td><td><code>string</code></td><td><code>default</code></td><td><code>&#39;default&#39; , &#39;small&#39; , &#39;large&#39;</code></td><td>Pass the size parameter to all components in the form. Custom components need to implement size reception themselves.</td><td></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Pass the disabled attribute to all components in the form. Custom components need to implement disabled reception themselves.</td><td></td></tr><tr><td>autoSetPlaceHolder</td><td><code>boolean</code></td><td><code>true</code></td><td><code>true/false</code></td><td>Automatically set the placeholder of the component in the form. Custom components need to be implemented by themselves.</td><td></td></tr><tr><td>autoSubmitOnEnter</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Press Enter to submit automatically when typing in input</td><td>2.4.0</td></tr><tr><td>rulesMessageJoinLabel</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>If the form item has validation, validation information will be automatically generated. This parameter controls whether the Chinese name of the field is concatenated to the automatically generated information.</td><td></td></tr><tr><td>showAdvancedButton</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Whether to display the collapse and expand button</td><td></td></tr><tr><td>emptySpan</td><td>number , Partial</td><td>0</td><td>-</td><td>Blank rows, can be a value or col object</td><td></td></tr><tr><td>autoAdvancedLine</td><td><code>number</code></td><td>3</td><td>-</td><td>If showAdvancedButton is true, rows exceeding the specified number of rows will be collapsed by default</td><td></td></tr><tr><td>alwaysShowLines</td><td><code>number</code></td><td>1</td><td>-</td><td>Always keep the number of rows displayed when collapsed</td><td>2.7.1</td></tr><tr><td>showActionButtonGroup</td><td><code>boolean</code></td><td><code>true</code></td><td><code>true/false</code></td><td>Whether to display the action button (reset/submit)</td><td></td></tr><tr><td>actionColOptions</td><td><code>Partial&lt;ColEx&gt;</code></td><td>-</td><td>-</td><td>Col component configuration for the outer layer of the action button. If showAdvancedButton is enabled, no setting is required. For details, see actionColOptions below</td><td></td></tr><tr><td>showResetButton</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Whether to display the reset button</td><td></td></tr><tr><td>resetButtonOptions</td><td><code>object</code></td><td></td><td>-</td><td>For reset button configuration, see ActionButtonOption below</td><td></td></tr><tr><td>showSubmitButton</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Whether to display the submit button</td><td></td></tr><tr><td>submitButtonOptions</td><td><code>object</code></td><td></td><td>-</td><td>Confirm button configuration see ActionButtonOption below</td><td></td></tr><tr><td>resetFunc</td><td>() =&gt; Promise</td><td></td><td>-</td><td>Custom reset button logic<code>() =&gt; Promise&lt;void&gt;;</code></td><td></td></tr><tr><td>submitFunc</td><td>() =&gt; Promise</td><td></td><td>-</td><td>Custom submit button logic<code>() =&gt; Promise&lt;void&gt;;</code></td><td></td></tr><tr><td>fieldMapToTime</td><td>[string, [string, string], string?][]</td><td></td><td>-</td><td>Used to set the time area in the form to 2 fields, see the instructions below</td><td></td></tr></tbody></table><h3 id="colex" tabindex="-1"><a class="header-anchor" href="#colex"><span>ColEx</span></a></h3><p>见 <a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Form/src/types/index.ts" target="_blank" rel="noopener noreferrer">src/components/Form/src/types/index.ts</a></p><h3 id="actionbuttonoption" tabindex="-1"><a class="header-anchor" href="#actionbuttonoption"><span>ActionButtonOption</span></a></h3><p><a href="https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Button/types.ts" target="_blank" rel="noopener noreferrer">BasicButtonProps</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export interface ButtonProps extends BasicButtonProps {</span>
<span class="line">  text?: string;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="fieldmaptotime" tabindex="-1"><a class="header-anchor" href="#fieldmaptotime"><span>fieldMapToTime</span></a></h3><p>Map the value of the time zone in the form into 2 fields</p><p>If there is a time interval component in the form, the value obtained is an array, but we often need to pass it to the backend as 2 fields</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">useForm({</span>
<span class="line">  fieldMapToTime: [</span>
<span class="line">    // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间于结束时间</span>
<span class="line">    // &#39;YYYY-MM-DD&#39;为时间格式，参考moment</span>
<span class="line">    [&#39;datetime&#39;, [&#39;startTime&#39;, &#39;endTime&#39;], &#39;YYYY-MM-DD&#39;],</span>
<span class="line">    // 支持多个字段</span>
<span class="line">    [&#39;datetime1&#39;, [&#39;startTime1&#39;, &#39;endTime1&#39;], &#39;YYYY-MM-DD HH:mm:ss&#39;],</span>
<span class="line">  ],</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">// fieldMapToTime没写的时候表单获取到的值</span>
<span class="line">{</span>
<span class="line">  datetime: [Date(),Date()]</span>
<span class="line">}</span>
<span class="line">//  [&#39;datetime&#39;, [&#39;startTime&#39;, &#39;endTime&#39;], &#39;YYYY-MM-DD&#39;],之后</span>
<span class="line">{</span>
<span class="line">    datetime: [Date(),Date()],</span>
<span class="line">    startTime: &#39;2020-08-12&#39;,</span>
<span class="line">    endTime: &#39;2020-08-15&#39;,</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="formschema" tabindex="-1"><a class="header-anchor" href="#formschema"><span>FormSchema</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th></tr></thead><tbody><tr><td>field</td><td><code>string</code></td><td>-</td><td>-</td><td>Field Name</td></tr><tr><td>label</td><td><code>string</code></td><td>-</td><td>-</td><td>Tag Name</td></tr><tr><td>subLabel</td><td><code>string</code></td><td>-</td><td>-</td><td>Secondary label name gray</td></tr><tr><td>suffix</td><td>string , number , ((values: RenderCallbackParams) =&gt; string / number);</td><td>-</td><td>-</td><td>Content behind the component</td></tr><tr><td>changeEvent</td><td><code>string</code></td><td>-</td><td>-</td><td>Form update event name</td></tr><tr><td>helpMessage</td><td><code>string , string[]</code></td><td>-</td><td>-</td><td>Friendly reminder on the right side of the label name</td></tr><tr><td>helpComponentProps</td><td><code>HelpComponentProps</code></td><td>-</td><td>-</td><td>The right side of the tag name shows the component props, see HelpComponentProps below</td></tr><tr><td>labelWidth</td><td><code>string , number</code></td><td>-</td><td>-</td><td>Override the uniformly set labelWidth</td></tr><tr><td>disabledLabelWidth</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>Disable the labelWidth setting of the form globally, and manually set labelCol and wrapperCol</td></tr><tr><td>component</td><td><code>string</code></td><td>-</td><td>-</td><td>Component type, see ComponentType below</td></tr><tr><td>componentProps</td><td><code>any,()=&gt;{}</code></td><td>-</td><td>-</td><td>The props of the rendered component</td></tr><tr><td>rules</td><td><code>ValidationRule[]</code></td><td>-</td><td>-</td><td>Validation rules, see ValidationRule below</td></tr><tr><td>required</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Simplify rules configuration, convert to [{required}] if true . <code>2.4.0</code>Previous versions only supported string values.</td></tr><tr><td>rulesMessageJoinLabel</td><td><code>boolean</code></td><td>false</td><td>-</td><td>Check whether the information is added to the label</td></tr><tr><td>itemProps</td><td><code>any</code></td><td>-</td><td>-</td><td>Refer to the FormItem below</td></tr><tr><td>colProps</td><td><code>ColEx</code></td><td>-</td><td>-</td><td>Refer to actionColOptions above</td></tr><tr><td>defaultValue</td><td><code>object</code></td><td>-</td><td>-</td><td>The initial value of the rendered component</td></tr><tr><td>render</td><td>(renderCallbackParams: RenderCallbackParams) =&gt; VNode / VNode[] / string</td><td>-</td><td>-</td><td>Custom rendering components</td></tr><tr><td>renderColContent</td><td>(renderCallbackParams: RenderCallbackParams) =&gt; VNode / VNode[] / string</td><td>-</td><td>-</td><td>Custom rendering component (need to include formItem)</td></tr><tr><td>renderComponentContent</td><td>(renderCallbackParams: RenderCallbackParams) =&gt; any / string</td><td>-</td><td>-</td><td>Slots inside custom rendering groups</td></tr><tr><td>slot</td><td><code>string</code></td><td>-</td><td>-</td><td>Custom slot, rendering component</td></tr><tr><td>colSlot</td><td><code>string</code></td><td>-</td><td>-</td><td>Custom slot, rendering component (need to include formItem)</td></tr><tr><td>show</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically determine whether the current component is displayed, controlled by CSS, and will not delete the DOM</td></tr><tr><td>ifShow</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically determine whether the current component is displayed, js control, dom will be deleted</td></tr><tr><td>dynamicDisabled</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically determine whether the current component is disabled</td></tr><tr><td>dynamicRules</td><td>boolean / ((renderCallbackParams: RenderCallbackParams) =&gt; boolean)</td><td>-</td><td>-</td><td>Dynamically return the current component&#39;s validation rules</td></tr></tbody></table><p><strong>RenderCallbackParams</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export interface RenderCallbackParams {</span>
<span class="line">  schema: FormSchema;</span>
<span class="line">  values: any;</span>
<span class="line">  model: any;</span>
<span class="line">  field: string;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>componentProps</strong></p><ul><li><p>When the value is an object type, the object will <code>component</code>be passed into the component as props of the corresponding component.</p></li><li><p>When the value is a function</p></li></ul><p>There are 4 parameters</p><p><code>schema</code>: The entire schema of the form</p><p><code>formActionType</code>: The function that operates the form. It is consistent with the operation function returned by useForm</p><p><code>formModel</code>: The two-way binding object of the form, this value is responsive. So it can easily handle many operations</p><p><code>tableAction</code>: The function to operate the table, which is the same as the function returned by useTable. Note that this parameter only has a value when the search form is opened in the table. In other cases <code>null</code>,</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  // 简单例子，值改变的时候操作表格或者修改表单内其他元素的值</span>
<span class="line">  component:&#39;Input&#39;,</span>
<span class="line">  componentProps: ({ schema, tableAction, formActionType, formModel }) =&gt; {</span>
<span class="line">    return {</span>
<span class="line">      // xxxx props</span>
<span class="line">      onChange:e=&gt;{</span>
<span class="line">        const {reload}=tableAction</span>
<span class="line">        reload()</span>
<span class="line">        // or</span>
<span class="line">        formModel.xxx=&#39;123&#39;</span>
<span class="line">      }</span>
<span class="line">    };</span>
<span class="line">  };</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>HelpComponentProps</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export interface HelpComponentProps {</span>
<span class="line">  maxWidth: string;</span>
<span class="line">  // 是否显示序号</span>
<span class="line">  showIndex: boolean;</span>
<span class="line">  // 文本列表</span>
<span class="line">  text: any;</span>
<span class="line">  // 颜色</span>
<span class="line">  color: string;</span>
<span class="line">  // 字体大小</span>
<span class="line">  fontSize: string;</span>
<span class="line">  icon: string;</span>
<span class="line">  absolute: boolean;</span>
<span class="line">  // 定位</span>
<span class="line">  position: any;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>ComponentType</strong></p><p>Optional types for components in schema</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export type ComponentType =</span>
<span class="line">  | &#39;Input&#39;</span>
<span class="line">  | &#39;InputGroup&#39;</span>
<span class="line">  | &#39;InputPassword&#39;</span>
<span class="line">  | &#39;InputSearch&#39;</span>
<span class="line">  | &#39;InputTextArea&#39;</span>
<span class="line">  | &#39;InputNumber&#39;</span>
<span class="line">  | &#39;InputCountDown&#39;</span>
<span class="line">  | &#39;Select&#39;</span>
<span class="line">  | &#39;ApiSelect&#39;</span>
<span class="line">  | &#39;TreeSelect&#39;</span>
<span class="line">  | &#39;RadioButtonGroup&#39;</span>
<span class="line">  | &#39;RadioGroup&#39;</span>
<span class="line">  | &#39;Checkbox&#39;</span>
<span class="line">  | &#39;CheckboxGroup&#39;</span>
<span class="line">  | &#39;AutoComplete&#39;</span>
<span class="line">  | &#39;Cascader&#39;</span>
<span class="line">  | &#39;DatePicker&#39;</span>
<span class="line">  | &#39;MonthPicker&#39;</span>
<span class="line">  | &#39;RangePicker&#39;</span>
<span class="line">  | &#39;WeekPicker&#39;</span>
<span class="line">  | &#39;TimePicker&#39;</span>
<span class="line">  | &#39;Switch&#39;</span>
<span class="line">  | &#39;StrengthMeter&#39;</span>
<span class="line">  | &#39;Upload&#39;</span>
<span class="line">  | &#39;IconPicker&#39;</span>
<span class="line">  | &#39;Render&#39;</span>
<span class="line">  | &#39;Slider&#39;</span>
<span class="line">  | &#39;Rate&#39;</span>
<span class="line">  | &#39;Divider&#39;;  // v2.7.2新增</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="divider-schema-description" tabindex="-1"><a class="header-anchor" href="#divider-schema-description"><span>Divider schema description</span></a></h3><p><code>Divider</code>The Divider type is used as <code>schemas</code>a placeholder in the form. It will be rendered as a divider (always takes up a full line of layout), which can be used to separate the layout of a longer form. Please only treat the Divider type schema as a divider, not a regular form field.</p><ul><li><strong><code>Divider</code>Will only <code>showAdvancedButton</code>be shown if false</strong><code>Divider</code> (i.e. it will not be shown if form collapse and expand are enabled )</li><li><code>Divider</code>Use <code>schema</code>and <code>label</code>to <code>helpMessage</code>render the prompt content in the dividing line</li><li><code>Divider</code>You can use it <code>componentProps</code>to set <code>type</code>props other than</li><li><code>Divider</code>It will not be rendered <code>AFormItem</code>, so the properties other <code>schema</code>than <code>label</code>, <code>componentProps</code>, <code>helpMessage</code>, <code>helpComponentProps</code>will not be used.</li></ul><h2 id="add-the-required-component-types-yourself" tabindex="-1"><a class="header-anchor" href="#add-the-required-component-types-yourself"><span>Add the required component types yourself</span></a></h2><p>Add<code>src/components/Form/src/componentMap.ts</code> the required components and add the corresponding type key in <strong>the ComponentType above</strong></p><h3 id="method-1" tabindex="-1"><a class="header-anchor" href="#method-1"><span>Method 1</span></a></h3><p>This writing method is suitable for components with higher application frequency</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">componentMap.set(&#39;componentName&#39;, 组件);</span>
<span class="line"></span>
<span class="line">// ComponentType</span>
<span class="line">export type ComponentType = xxxx | &#39;componentName&#39;;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="method-2" tabindex="-1"><a class="header-anchor" href="#method-2"><span>Method 2</span></a></h3><p>Register using <strong>useComponentRegister</strong></p><p>This writing method can only be used in the current page. After the page is destroyed, the corresponding component will be deleted from componentMap</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { useComponentRegister } from &#39;@/components/form/index&#39;;</span>
<span class="line"></span>
<span class="line">import { StrengthMeter } from &#39;@/components/strength-meter/index&#39;;</span>
<span class="line"></span>
<span class="line">useComponentRegister(&#39;StrengthMeter&#39;, StrengthMeter);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>hint</p><p>The reason for method 2 is to reduce the package size. If a component is large, using method 1 may increase the size of the first screen.</p><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render"><span>render</span></a></h3><p>Custom rendering content</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;m-4&quot;&gt;</span>
<span class="line">    &lt;BasicForm @register=&quot;register&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, h } from &#39;vue&#39;;</span>
<span class="line">  import { BasicForm, FormSchema, useForm } from &#39;/@/components/Form/index&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  import { Input } from &#39;ant-design-vue&#39;;</span>
<span class="line">  const schemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field1&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      label: &#39;字段1&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      rules: [{ required: true }],</span>
<span class="line">      render: ({ model, field }) =&gt; {</span>
<span class="line">        return h(Input, {</span>
<span class="line">          placeholder: &#39;请输入&#39;,</span>
<span class="line">          value: model[field],</span>
<span class="line">          onChange: (e: ChangeEvent) =&gt; {</span>
<span class="line">            model[field] = e.target.value;</span>
<span class="line">          },</span>
<span class="line">        });</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field2&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      label: &#39;字段2&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      rules: [{ required: true }],</span>
<span class="line">      renderComponentContent: () =&gt; {</span>
<span class="line">        return {</span>
<span class="line">          suffix: () =&gt; &#39;suffix&#39;,</span>
<span class="line">        };</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm },</span>
<span class="line">    setup() {</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line">      const [register, { setProps }] = useForm({</span>
<span class="line">        labelWidth: 120,</span>
<span class="line">        schemas,</span>
<span class="line">        actionColOptions: {</span>
<span class="line">          span: 24,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line">      return {</span>
<span class="line">        register,</span>
<span class="line">        schemas,</span>
<span class="line">        handleSubmit: (values: any) =&gt; {</span>
<span class="line">          createMessage.success(&#39;click search,values:&#39; + JSON.stringify(values));</span>
<span class="line">        },</span>
<span class="line">        setProps,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot"><span>slot</span></a></h3><p>Custom rendering content</p><p>hint</p><p>When using slots to customize form fields, please pay attention to antdv&#39;s <a href="https://www.antdv.com/components/form-cn/#API" target="_blank" rel="noopener noreferrer">instructions</a> on FormItem .</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;m-4&quot;&gt;</span>
<span class="line">    &lt;BasicForm @register=&quot;register&quot;&gt;</span>
<span class="line">      &lt;template #customSlot=&quot;{ model, field }&quot;&gt;</span>
<span class="line">        &lt;a-input v-model:value=&quot;model[field]&quot; /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicForm&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;compatible-vue&#39;;</span>
<span class="line">  import { BasicForm, useForm } from &#39;@/components/Form/index&#39;;</span>
<span class="line">  import { BasicModal } from &#39;@/components/modal/index&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    name: &#39;FormDemo&#39;,</span>
<span class="line">    setup(props) {</span>
<span class="line">      const [register] = useForm({</span>
<span class="line">        labelWidth: 100,</span>
<span class="line">        actionColOptions: {</span>
<span class="line">          span: 24,</span>
<span class="line">        },</span>
<span class="line">        schemas: [</span>
<span class="line">          {</span>
<span class="line">            field: &#39;field1&#39;,</span>
<span class="line">            label: &#39;字段1&#39;,</span>
<span class="line">            slot: &#39;customSlot&#39;,</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      });</span>
<span class="line">      return {</span>
<span class="line">        register,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="ifshow-show-dynamicdisabled" tabindex="-1"><a class="header-anchor" href="#ifshow-show-dynamicdisabled"><span>ifShow/show/dynamicDisabled</span></a></h3><p>Custom display/disable</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;m-4&quot;&gt;</span>
<span class="line">    &lt;BasicForm @register=&quot;register&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicForm, FormSchema, useForm } from &#39;/@/components/Form/index&#39;;</span>
<span class="line">  const schemas: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field1&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      label: &#39;字段1&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      show: ({ values }) =&gt; {</span>
<span class="line">        return !!values.field5;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field2&#39;,</span>
<span class="line">      component: &#39;Input&#39;,</span>
<span class="line">      label: &#39;字段2&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      ifShow: ({ values }) =&gt; {</span>
<span class="line">        return !!values.field6;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      field: &#39;field3&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">      label: &#39;字段3&#39;,</span>
<span class="line">      colProps: {</span>
<span class="line">        span: 8,</span>
<span class="line">      },</span>
<span class="line">      dynamicDisabled: ({ values }) =&gt; {</span>
<span class="line">        return !!values.field7;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm },</span>
<span class="line">    setup() {</span>
<span class="line">      const [register, { setProps }] = useForm({</span>
<span class="line">        labelWidth: 120,</span>
<span class="line">        schemas,</span>
<span class="line">        actionColOptions: {</span>
<span class="line">          span: 24,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line">      return {</span>
<span class="line">        register,</span>
<span class="line">        schemas,</span>
<span class="line">        setProps,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><hr><p>See <a href="https://www.antdv.com/components/form-cn" target="_blank" rel="noopener noreferrer">antv form</a></p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><table><thead><tr><th>name</th><th>illustrate</th></tr></thead><tbody><tr><td>formFooter</td><td>Bottom area of ​​the form</td></tr><tr><td>formHeader</td><td>Top area of ​​the form</td></tr><tr><td>resetBefore</td><td>Before reset button</td></tr><tr><td>submitBefore</td><td>Before submit button</td></tr><tr><td>advanceBefore</td><td>Before Expand Button</td></tr><tr><td>advanceAfter</td><td>After expanding the button</td></tr></tbody></table><h2 id="apiselect" tabindex="-1"><a class="header-anchor" href="#apiselect"><span>ApiSelect</span></a></h2><p>Remote pull-down loading component, which can be used to learn how to integrate custom components into Form components and let Form manage custom components</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const schemas: FormSchema[] = [</span>
<span class="line">  {</span>
<span class="line">    field: &#39;field&#39;,</span>
<span class="line">    component: &#39;ApiSelect&#39;,</span>
<span class="line">    label: &#39;字段&#39;,</span>
<span class="line">  },</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>numberToString</td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to <code>number</code>convert the value to<code>string</code></td></tr><tr><td>api</td><td>()=&gt;Promise&lt;{ label: string; value: string; disabled?: boolean }[]&gt;</td><td>-</td><td>Data interface, accepts a Promise object</td></tr><tr><td>params</td><td><code>object</code></td><td>-</td><td>Interface parameters. When this property changes, the interface data will be automatically reloaded.</td></tr><tr><td>resultField</td><td><code>string</code></td><td>-</td><td>Fields returned by the interface. If the interface returns an array, this field can be left blank. Supported <code>x.x.x</code>formats</td></tr><tr><td>labelField</td><td><code>string</code></td><td><code>label</code></td><td><code>label</code>The field that displays text in the drop-down array item , supporting <code>x.x.x</code>formats</td></tr><tr><td>valueField</td><td><code>string</code></td><td><code>value</code></td><td>The field of the actual value in the drop-down array item <code>value</code>, supporting <code>x.x.x</code>formats</td></tr><tr><td>immediate</td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to request the interface immediately, otherwise the request will be triggered at the first click</td></tr></tbody></table><h2 id="apitreeselect" tabindex="-1"><a class="header-anchor" href="#apitreeselect"><span>ApiTreeSelect</span></a></h2><p>Remote drop-down tree loading component, and <code>ApiSelect</code>similar, version 2.6.1 or above</p><h3 id="props-2" tabindex="-1"><a class="header-anchor" href="#props-2"><span>Props</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>api</td><td>()=&gt;Promise&lt;{ label: string; value: string; children?: any[] }[]&gt;</td><td>-</td><td>Data interface, accepts a Promise object</td></tr><tr><td>params</td><td><code>object</code></td><td>-</td><td>Interface parameters. When this property changes, the interface data will be automatically reloaded.</td></tr><tr><td>resultField</td><td><code>string</code></td><td>-</td><td>Fields returned by the interface. If the interface returns an array, this field can be left blank. Supported <code>x.x.x</code>formats</td></tr><tr><td>immediate</td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to request the interface immediately.</td></tr></tbody></table><h2 id="radiobuttongroup" tabindex="-1"><a class="header-anchor" href="#radiobuttongroup"><span>RadioButtonGroup</span></a></h2><p>Radio Button style selection button</p><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const schemas: FormSchema[] = [</span>
<span class="line">  {</span>
<span class="line">    field: &#39;field&#39;,</span>
<span class="line">    component: &#39;RadioButtonGroup&#39;,</span>
<span class="line">    label: &#39;字段&#39;,</span>
<span class="line">  },</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="props-3" tabindex="-1"><a class="header-anchor" href="#props-3"><span>Props</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>options</td><td>{ label: string; value: string; disabled?: boolean }[]</td><td>-</td><td>Data Fields</td></tr></tbody></table><h3 id="dynamicrules" tabindex="-1"><a class="header-anchor" href="#dynamicrules"><span>dynamicRules</span></a></h3><p>Required validation example</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">dynamicRules: ({ model, schema }) =&gt; {</span>
<span class="line">  return [{ required: true, message: &#39;请输入角色!&#39; }];</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,160)]))}const c=n(t,[["render",l]]),o=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/basic-form-form-back.html","title":"BasicForm form back","lang":"ko-KR","frontmatter":{"order":32},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/basic-form-form-back.md"}');export{c as comp,o as data};
