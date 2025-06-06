import{_ as n,c as e,a,o as l}from"./app-DGEuurYf.js";const i={};function c(p,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h1><h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example 1</span></a></h2><blockquote><p>This example demonstrates <code>JVxeTable</code>the basic usage of</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;JVxeTable</span>
<span class="line">  ref=&quot;tableRef&quot;</span>
<span class="line">  stripe</span>
<span class="line">  toolbar</span>
<span class="line">  rowNumber</span>
<span class="line">  rowSelection</span>
<span class="line">  rowExpand</span>
<span class="line">  resizable</span>
<span class="line">  :maxHeight=&quot;480&quot;</span>
<span class="line">  :loading=&quot;loading&quot;</span>
<span class="line">  :columns=&quot;columns&quot;</span>
<span class="line">  :dataSource=&quot;dataSource&quot;</span>
<span class="line">/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example 2</span></a></h2><blockquote><p>This example demonstrates <code>columns</code>the basic usage of</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { JVxeTypes, JVxeColumn} from &#39;/@/components/jeecg/JVxeTable/types&#39;</span>
<span class="line"></span>
<span class="line">const columns = ref&lt;JVxeColumn[]&gt;([</span>
<span class="line">    {</span>
<span class="line">        title: &#39;单行文本&#39;,</span>
<span class="line">        key: &#39;input&#39;,</span>
<span class="line">        type: JVxeTypes.input,</span>
<span class="line">        width: 180,</span>
<span class="line">        defaultValue: &#39;&#39;,</span>
<span class="line">        placeholder: &#39;请输入\${title}&#39;,</span>
<span class="line">        validateRules: [</span>
<span class="line">          {</span>
<span class="line">            required: true, // 必填</span>
<span class="line">            message: &#39;请输入\${title}&#39;, // 显示的文本</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            pattern: /^[a-z|A-Z][a-z|A-Z\\d_-]*$/, // 正则</span>
<span class="line">            message: &#39;必须以字母开头，可包含数字、下划线、横杠&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            unique: true,</span>
<span class="line">            message: &#39;\${title}不能重复&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            handler({ cellValue, row, column }, callback, target) {</span>
<span class="line">              // cellValue 当前校验的值</span>
<span class="line">              // callback(flag, message) 方法必须执行且只能执行一次</span>
<span class="line">              //          flag = 是否通过了校验，不填写或者填写 null 代表不进行任何操作</span>
<span class="line">              //          message = 提示的类型，默认使用配置的 message</span>
<span class="line">              // target 行编辑的实例对象</span>
<span class="line">              if (cellValue === &#39;abc&#39;) {</span>
<span class="line">                callback(false, &#39;\${title}不能是abc&#39;)  // false = 未通过校验</span>
<span class="line">              } else {</span>
<span class="line">                callback(true) // true = 通过验证</span>
<span class="line">              }</span>
<span class="line">            },</span>
<span class="line">            message: &#39;\${title}默认提示&#39;,</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example 3</span></a></h2><blockquote><p>This example demonstrates how to <code>表单验证</code>and<code>获取数据</code></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/** 表单验证 */</span>
<span class="line">function handleTableCheck() {</span>
<span class="line">  tableRef.value!.validateTable().then(errMap =&gt; {</span>
<span class="line">    if (errMap) {</span>
<span class="line">      console.log(&#39;表单验证未通过：&#39;, { errMap })</span>
<span class="line">      createMessage.error(&#39;验证未通过，请在控制台查看详细&#39;)</span>
<span class="line">    } else {</span>
<span class="line">      createMessage.success(&#39;验证通过&#39;)</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/** 获取值，忽略表单验证 */</span>
<span class="line">function onGetData() {</span>
<span class="line">  const values = tableRef.value!.getTableData()</span>
<span class="line">  console.log(&#39;获取值:&#39;, { values })</span>
<span class="line">  createMessage.success(&#39;获取值成功，请看控制台输出&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example 4</span></a></h2><blockquote><p>This example demonstrates how to use <code>插槽(slot)</code>and slot parameter introduction</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;JVxeTable ref=&quot;tableRef&quot; toolbar :columns=&quot;columns&quot; :dataSource=&quot;dataSource&quot;&gt;</span>
<span class="line">    &lt;!-- 定义插槽 --&gt;</span>
<span class="line">    &lt;template #action=&quot;props&quot;&gt;</span>
<span class="line">      &lt;a @click=&quot;handleView(props)&quot;&gt;查看&lt;/a&gt;</span>
<span class="line">      &lt;a-divider type=&quot;vertical&quot;/&gt;</span>
<span class="line">      &lt;a-popconfirm title=&quot;确定删除吗？&quot; @confirm=&quot;handleDelete(props)&quot;&gt;</span>
<span class="line">        &lt;a&gt;删除&lt;/a&gt;</span>
<span class="line">      &lt;/a-popconfirm&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/JVxeTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">import {ref, defineComponent} from &#39;vue&#39;</span>
<span class="line">import {JVxeTypes, JVxeColumn, JVxeTableInstance} from &#39;/@/components/jeecg/JVxeTable/types&#39;</span>
<span class="line"></span>
<span class="line">export default defineComponent({</span>
<span class="line">  setup() {</span>
<span class="line">    const tableRef = ref&lt;JVxeTableInstance&gt;()</span>
<span class="line">    const columns = ref&lt;JVxeColumn[]&gt;([</span>
<span class="line">      // ...</span>
<span class="line">      {</span>
<span class="line">        title: &#39;操作&#39;,</span>
<span class="line">        key: &#39;action&#39;,</span>
<span class="line">        width: &#39;100px&#39;,</span>
<span class="line">        // 固定在右侧</span>
<span class="line">        fixed: &#39;right&#39;,</span>
<span class="line">        // 对齐方式为居中</span>
<span class="line">        align: &#39;center&#39;,</span>
<span class="line">        // 组件类型定义为【插槽】</span>
<span class="line">        type: JVxeTypes.slot,</span>
<span class="line">        // slot 的名称，对应 v-slot 冒号后面和等号前面的内容</span>
<span class="line">        slotName: &#39;action&#39;,</span>
<span class="line">      },</span>
<span class="line">    ])</span>
<span class="line">    const dataSource = ref([])</span>
<span class="line"></span>
<span class="line">    function handleView(props) {</span>
<span class="line">      // 参数介绍：</span>
<span class="line">      // props.value          当前单元格的值</span>
<span class="line">      // props.row            当前行的数据</span>
<span class="line">      // props.rowId          当前行ID</span>
<span class="line">      // props.rowIndex       当前行下标</span>
<span class="line">      // props.column         当前列的配置</span>
<span class="line">      // props.columnIndex    当前列下标</span>
<span class="line">      // props.$table         vxe-table实例，可以调用vxe-table内置方法</span>
<span class="line">      // props.scrolling      是否正在滚动</span>
<span class="line">      // props.reloadEffect   是否开启了数据刷新特效</span>
<span class="line">      // props.triggerChange  触发change事件，用于更改slot的值</span>
<span class="line">      console.log(&#39;props: &#39;, props)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    function handleDelete({row}) {</span>
<span class="line">      // 使用实例：删除当前操作的行</span>
<span class="line">      tableRef.value?.removeRows(row)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return {tableRef, columns, dataSource, handleView, handleDelete}</span>
<span class="line">  },</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5"><span>Example 5</span></a></h2><blockquote><p>This example demonstrates how to<code>自定义函数校验</code></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">columns: [</span>
<span class="line">  {</span>
<span class="line">    title: &#39;单行文本&#39;,</span>
<span class="line">    key: &#39;input&#39;,</span>
<span class="line">    type: JVxeTypes.input,</span>
<span class="line">    width: 180,</span>
<span class="line">    defaultValue: &#39;&#39;,</span>
<span class="line">    placeholder: &#39;请输入\${title}&#39;,</span>
<span class="line">    validateRules: [</span>
<span class="line">    {</span>
<span class="line">        handler({ cellValue, row, column }, callback, target) {</span>
<span class="line">          // cellValue 当前校验的值</span>
<span class="line">          // callback(flag, message) 方法必须执行且只能执行一次</span>
<span class="line">          //          flag = 是否通过了校验，不填写或者填写 null 代表不进行任何操作</span>
<span class="line">          //          message = 提示的类型，默认使用配置的 message</span>
<span class="line">          // target 行编辑的实例对象</span>
<span class="line">          if (cellValue === &#39;abc&#39;) {</span>
<span class="line">            callback(false, &#39;\${title}不能是abc&#39;)  // false = 未通过校验</span>
<span class="line">          } else {</span>
<span class="line">            callback(true) // true = 通过验证</span>
<span class="line">          }</span>
<span class="line">        },</span>
<span class="line">        message: &#39;\${title}默认提示&#39;,</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">  },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,21)]))}const r=n(i,[["render",c]]),v=JSON.parse('{"path":"/syncadmin/ui-component-library/jvxe-table/usage-examples.html","title":"Usage Examples","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/jvxe-table/usage-examples.md"}');export{r as comp,v as data};
