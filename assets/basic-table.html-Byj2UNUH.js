import{_ as s,c as e,a,o as l}from"./app-DGEuurYf.js";const i={};function d(c,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h1 id="basictable" tabindex="-1"><a class="header-anchor" href="#basictable"><span>BasicTable</span></a></h1><blockquote><p>Based on <code>Ant Design Vue</code>the encapsulated table component BasicTable, it is used to display list data. For ease of use, some hook encapsulation is done internally to simplify the use. If you need to expand, please modify the hook:<code>/@/hooks/system/useListPage</code></p></blockquote><h2 id="scenes-to-be-used" tabindex="-1"><a class="header-anchor" href="#scenes-to-be-used"><span>scenes to be used</span></a></h2><ul><li>Tables are a must-have feature for enterprise projects when there is a large amount of structured data that needs to be presented;</li><li>When complex behaviors such as sorting, searching, paging, and custom operations are required on data.</li></ul><h2 id="_1-basic-usage" tabindex="-1"><a class="header-anchor" href="#_1-basic-usage"><span>1. Basic usage</span></a></h2><p>This example demonstrates how to quickly render a static data table. The data source of the specified table <code>dataSource</code> is a static array.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/a7d3db462ee4651db3c4b2d701c77965adaa465ff92c5dbb6afe75b83f963626.dat" alt=""></p><blockquote><p>This table uses a static dataSource and customizes an &#39;Edit&#39; button to render the user list information.</p></blockquote><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列字段</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      key: &#39;name&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      key: &#39;age&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">   /** useListPage 是整个框架的核心用于表格渲染，里边封装了很多公共方法；</span>
<span class="line">    * 平台通过此封装，简化了代码，支持自定义扩展*/</span>
<span class="line">  // 通过hook useListPage渲染表格（设置dataSource、columns、actionColumn等参数）</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;用户列表&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          key: &#39;1&#39;,</span>
<span class="line">          name: &#39;胡歌&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;朝阳区林萃路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;2&#39;,</span>
<span class="line">          name: &#39;刘诗诗&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;昌平区白沙路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      size: &#39;small&#39;,</span>
<span class="line">      actionColumn: {</span>
<span class="line">        width: 120,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  // BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_2-load-data-remotely" tabindex="-1"><a class="header-anchor" href="#_2-load-data-remotely"><span>2. Load data remotely</span></a></h2><p>This example demonstrates: loading data through ajax api request, reading and displaying data from the server. It also configures functions such as column width dragging and sorting. Developers can integrate other data processing methods.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/191481bfda0ddec4318567b27bfb330f6c4465e8f8b9ff8f2939bb146b8842f5.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>API Definition<br><img src="https://lfs.k.topthink.com/lfs/23b8f8e612dcbf8ce5e7124e4ebdc00ee67d983752da1d4c24279ec13a90e018.dat" alt=""><br> Column field drag<br><img src="https://lfs.k.topthink.com/lfs/d52a5b8cd18c4e59ad0e07241bb0d8fc890b3f74ac6dd4fb49e1928d6b6f041b.dat" alt=""><br> Column field sorting<br><img src="https://lfs.k.topthink.com/lfs/1583d6e096ca064e20e79e28cec0764fa03826687914a7e52734997b346252ad.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 170,</span>
<span class="line">      align: &#39;left&#39;,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 1,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;关键词&#39;,</span>
<span class="line">      dataIndex: &#39;keyWord&#39;,</span>
<span class="line">      width: 130,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;打卡时间&#39;,</span>
<span class="line">      dataIndex: &#39;punchTime&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;工资&#39;,</span>
<span class="line">      dataIndex: &#39;salaryMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 2,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;奖金&#39;,</span>
<span class="line">      dataIndex: &#39;bonusMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;性别&#39;,</span>
<span class="line">      dataIndex: &#39;sex&#39;,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 3,</span>
<span class="line">      },</span>
<span class="line">      customRender: ({ record }) =&gt; {</span>
<span class="line">        return record.sex ? (record.sex == &#39;1&#39; ? &#39;男&#39; : &#39;女&#39;) : &#39;&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;生日&#39;,</span>
<span class="line">      dataIndex: &#39;birthday&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;邮箱&#39;,</span>
<span class="line">      dataIndex: &#39;email&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  //ajax请求api接口</span>
<span class="line">  const demoListApi = (params) =&gt; {</span>
<span class="line">    return defHttp.get({ url: &#39;/test/jeecgDemo/list&#39;, params });</span>
<span class="line">  };</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo-ajax&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;用户列表&#39;,</span>
<span class="line">      api: demoListApi,</span>
<span class="line">      columns: columns,</span>
<span class="line">      actionColumn: {</span>
<span class="line">        width: 120,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  //BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_3-with-border" tabindex="-1"><a class="header-anchor" href="#_3-with-border"><span>3. With border</span></a></h2><p>This example demonstrates: setting the border through the bordered parameter of tableProps of useListPage, adding table border lines, and also defining a custom footer.</p><p>Page Effects</p><p>Code Sample</p><p><img src="https://lfs.k.topthink.com/lfs/1db8027f2f68a6d6c72ba8808662f2dcec16172e858fa33a1eff6789a5816d11.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Border settings<br><img src="https://lfs.k.topthink.com/lfs/b262d5336ccda51f764b5b7998c981df802a55515c1179cc6d03fc98a023b40f.dat" alt=""><br> Footer Settings<br><img src="https://lfs.k.topthink.com/lfs/d1a12f72cc0f40a98d53d9dcce1ba4385aae515a6c41a92b7b1b8390d1b464d7.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;template #bodyCell=&quot;{ column, text }&quot;&gt;</span>
<span class="line">          &lt;template v-if=&quot;column.dataIndex === &#39;name&#39;&quot;&gt;</span>
<span class="line">              &lt;a&gt;{{ text }}&lt;/a&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">      &lt;template #footer&gt;Footer&lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      key: &#39;name&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      key: &#39;age&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title:&#39;header&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          key: &#39;1&#39;,</span>
<span class="line">          name: &#39;胡歌&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;朝阳区林萃路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;2&#39;,</span>
<span class="line">          name: &#39;刘诗诗&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;昌平区白沙路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      bordered: true,//默认是true，可不设置</span>
<span class="line">      showActionColumn: false</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  //BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_4-cells-are-automatically-omitted" tabindex="-1"><a class="header-anchor" href="#_4-cells-are-automatically-omitted"><span>4. Cells are automatically omitted</span></a></h2><p>This example demonstrates: Setting the ellipsis property of a cell column allows the cell content to be automatically omitted according to the width.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/540c0d949d68a64e40a04febc0a55f926ab3cfdb2c5d8965eeabe316abe2c997.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Automatic Omission<br><img src="https://lfs.k.topthink.com/lfs/f502e78b708f20ebe98477b8d45559f41547c93c73cdf2439a5ce5db5b8ba067.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;template #bodyCell=&quot;{ column, text }&quot;&gt;</span>
<span class="line">          &lt;template v-if=&quot;column.dataIndex === &#39;name&#39;&quot;&gt;</span>
<span class="line">              &lt;a&gt;{{ text }}&lt;/a&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      key: &#39;name&#39;,</span>
<span class="line">      width:300</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      key: &#39;age&#39;,</span>
<span class="line">      width:300</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address&#39;,</span>
<span class="line">      ellipsis:true</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;长内容列&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address 2&#39;,</span>
<span class="line">      ellipsis: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;长内容列&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address 3&#39;,</span>
<span class="line">      ellipsis: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title:&#39;长内容省略显示&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          key: &#39;1&#39;,</span>
<span class="line">          name: &#39;张三&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;中国北京北京市朝阳区大屯路科学院南里1号楼3单元401&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;2&#39;,</span>
<span class="line">          name: &#39;刘思&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;中国北京北京市昌平区顺沙路尚湖世家2号楼7单元503&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      showActionColumn: false</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  //BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_5-merge-table-rows-and-columns" tabindex="-1"><a class="header-anchor" href="#_5-merge-table-rows-and-columns"><span>5. Merge table rows and columns</span></a></h2><p>This example demonstrates how to use the colSpan/rowSpan attributes of a column to merge rows and columns in a table. When the colSpan or rowSpan attribute of a cell in render is set to 0, the table will not be rendered.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/28232182f0304364970a34e29d5d9c899a15d1aeaea96a5c1434fb8fd682daa7.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Merge rows/columns<br><img src="https://lfs.k.topthink.com/lfs/a3878bb178a4df6ea73b902c037ab7e3f6f6537891a7cf18720bb5ac54297e1f.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;名称&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      customCell: (record, index, column) =&gt; ({</span>
<span class="line">        colSpan: index &lt; 4 ? 1 : 5,</span>
<span class="line">      }),</span>
<span class="line">      customRender: ({ text, record, index, column }) =&gt; {</span>
<span class="line">          return index &lt; 4?text:\`\${record.name}/\${record.age}/\${record.address}/\${record.phone}\`</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      customCell: (record, index, column) =&gt; {</span>
<span class="line">        if (index === 4) {</span>
<span class="line">          return { colSpan: 0 };</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;家庭住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      customCell: (record, index, column) =&gt; {</span>
<span class="line">        if (index === 4) {</span>
<span class="line">          return { colSpan: 0 };</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;联系电话&#39;,</span>
<span class="line">      colSpan: 2,</span>
<span class="line">      dataIndex: &#39;tel&#39;,</span>
<span class="line">      customCell: (record, index, column) =&gt; {</span>
<span class="line">        if (index === 2) {</span>
<span class="line">          return { rowSpan: 2 };</span>
<span class="line">        }</span>
<span class="line">        if (index === 3) {</span>
<span class="line">          return { rowSpan: 0 };</span>
<span class="line">        }</span>
<span class="line">        if (index === 4) {</span>
<span class="line">          return { colSpan: 0 };</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;Phone&#39;,</span>
<span class="line">      colSpan: 0,</span>
<span class="line">      dataIndex: &#39;phone&#39;,</span>
<span class="line">      customCell: (record, index, column) =&gt; {</span>
<span class="line">        if (index === 4) {</span>
<span class="line">          return { colSpan: 0 };</span>
<span class="line">        }</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;合并行列&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          key: &#39;1&#39;,</span>
<span class="line">          name: &#39;尹嘉乐&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          tel: &#39;0319-5972018&#39;,</span>
<span class="line">          phone: 17600080009,</span>
<span class="line">          address: &#39;北京市昌平区&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;2&#39;,</span>
<span class="line">          name: &#39;龙佳钰&#39;,</span>
<span class="line">          tel: &#39;0319-5972018&#39;,</span>
<span class="line">          phone: 17600060007,</span>
<span class="line">          age: 42,</span>
<span class="line">          address: &#39;北京市海淀区&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;3&#39;,</span>
<span class="line">          name: &#39;贺泽惠&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          tel: &#39;0319-5972018&#39;,</span>
<span class="line">          phone: 17600040005,</span>
<span class="line">          address: &#39;北京市门头沟区&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;4&#39;,</span>
<span class="line">          name: &#39;沈勇&#39;,</span>
<span class="line">          age: 18,</span>
<span class="line">          tel: &#39;0319-5972018&#39;,</span>
<span class="line">          phone: 17600010003,</span>
<span class="line">          address: &#39;北京市朝阳区&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;5&#39;,</span>
<span class="line">          name: &#39;白佳毅&#39;,</span>
<span class="line">          age: 18,</span>
<span class="line">          tel: &#39;0319-5972018&#39;,</span>
<span class="line">          phone: 17600010002,</span>
<span class="line">          address: &#39;北京市丰台区&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      showActionColumn: false,</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  //BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_6-editable-cells" tabindex="-1"><a class="header-anchor" href="#_6-editable-cells"><span>6. Editable cells</span></a></h2><p>This example demonstrates how to configure a table with editable cells.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/d0403a3ce6f46dd22a7d4bc0966379f3a1f04c5013144590a1ac01dd98529561.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Editable configuration, please refer to the api below the document for details<br><img src="https://lfs.k.topthink.com/lfs/5b9fef3b0946896ae0229cb9f598f4d00ec3a8420ca579b9e1dab4db7f4a83c6.dat" alt=""><br> Editing Method<br><img src="https://lfs.k.topthink.com/lfs/f24ba6048a62845f443c0968313bf1eca8391a7457c8ce458ff2205bd522f6f9.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable</span>
<span class="line">        @register=&quot;registerTable&quot;</span>
<span class="line">        @edit-end=&quot;handleEditEnd&quot;</span>
<span class="line">        @edit-cancel=&quot;handleEditCancel&quot;</span>
<span class="line">        :beforeEditSubmit=&quot;beforeEditSubmit&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable, useTable, BasicColumn } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { optionsListApi } from &#39;/@/api/demo/select&#39;;</span>
<span class="line"></span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line">  import { treeOptionsListApi } from &#39;/@/api/demo/tree&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;输入框&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        prefix: &#39;$&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;默认输入状态&#39;,</span>
<span class="line">      dataIndex: &#39;name7&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editable: true,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;输入框校验&#39;,</span>
<span class="line">      dataIndex: &#39;name1&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      // 默认必填校验</span>
<span class="line">      editRule: true,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;输入框函数校验&#39;,</span>
<span class="line">      dataIndex: &#39;name2&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editRule: async (text) =&gt; {</span>
<span class="line">        if (text === &#39;2&#39;) {</span>
<span class="line">          return &#39;不能输入该值&#39;;</span>
<span class="line">        }</span>
<span class="line">        return &#39;&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;数字输入框&#39;,</span>
<span class="line">      dataIndex: &#39;id&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editRule: true,</span>
<span class="line">      editComponent: &#39;InputNumber&#39;,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;下拉框&#39;,</span>
<span class="line">      dataIndex: &#39;name3&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;Select&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          {</span>
<span class="line">            label: &#39;Option1&#39;,</span>
<span class="line">            value: &#39;1&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            label: &#39;Option2&#39;,</span>
<span class="line">            value: &#39;2&#39;,</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;远程下拉&#39;,</span>
<span class="line">      dataIndex: &#39;name4&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;ApiSelect&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        api: optionsListApi,</span>
<span class="line">        resultField: &#39;list&#39;,</span>
<span class="line">        labelField: &#39;name&#39;,</span>
<span class="line">        valueField: &#39;id&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;远程下拉树&#39;,</span>
<span class="line">      dataIndex: &#39;name71&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;ApiTreeSelect&#39;,</span>
<span class="line">      editRule: false,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        api: treeOptionsListApi,</span>
<span class="line">        resultField: &#39;list&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;日期选择&#39;,</span>
<span class="line">      dataIndex: &#39;date&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;DatePicker&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        valueFormat: &#39;YYYY-MM-DD&#39;,</span>
<span class="line">        format: &#39;YYYY-MM-DD&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;时间选择&#39;,</span>
<span class="line">      dataIndex: &#39;time&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;TimePicker&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        valueFormat: &#39;HH:mm&#39;,</span>
<span class="line">        format: &#39;HH:mm&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;勾选框&#39;,</span>
<span class="line">      dataIndex: &#39;name5&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;Checkbox&#39;,</span>
<span class="line">      editValueMap: (value) =&gt; {</span>
<span class="line">        return value ? &#39;是&#39; : &#39;否&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开关&#39;,</span>
<span class="line">      dataIndex: &#39;name6&#39;,</span>
<span class="line">      edit: true,</span>
<span class="line">      editComponent: &#39;Switch&#39;,</span>
<span class="line">      editValueMap: (value) =&gt; {</span>
<span class="line">        return value ? &#39;开&#39; : &#39;关&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable },</span>
<span class="line">    setup() {</span>
<span class="line">      // 列表页面公共参数、方法</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;可编辑单元格示例&#39;,</span>
<span class="line">          api: demoListApi,</span>
<span class="line">          columns: columns,</span>
<span class="line">          showIndexColumn: false,</span>
<span class="line">          bordered: true,</span>
<span class="line">          showActionColumn: false,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line">      //注册table数据</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line">      const { createMessage } = useMessage();</span>
<span class="line"></span>
<span class="line">      function handleEditEnd({ record, index, key, value }: Recordable) {</span>
<span class="line">        console.log(record, index, key, value);</span>
<span class="line">        return false;</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      // 模拟将指定数据保存</span>
<span class="line">      function feakSave({ value, key, id }) {</span>
<span class="line">        createMessage.loading({</span>
<span class="line">          content: \`正在模拟保存\${key}\`,</span>
<span class="line">          key: &#39;_save_fake_data&#39;,</span>
<span class="line">          duration: 0,</span>
<span class="line">        });</span>
<span class="line">        return new Promise((resolve) =&gt; {</span>
<span class="line">          setTimeout(() =&gt; {</span>
<span class="line">            if (value === &#39;&#39;) {</span>
<span class="line">              createMessage.error({</span>
<span class="line">                content: &#39;保存失败：不能为空&#39;,</span>
<span class="line">                key: &#39;_save_fake_data&#39;,</span>
<span class="line">                duration: 2,</span>
<span class="line">              });</span>
<span class="line">              resolve(false);</span>
<span class="line">            } else {</span>
<span class="line">              createMessage.success({</span>
<span class="line">                content: \`记录\${id}的\${key}已保存\`,</span>
<span class="line">                key: &#39;_save_fake_data&#39;,</span>
<span class="line">                duration: 2,</span>
<span class="line">              });</span>
<span class="line">              resolve(true);</span>
<span class="line">            }</span>
<span class="line">          }, 2000);</span>
<span class="line">        });</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      async function beforeEditSubmit({ record, index, key, value }) {</span>
<span class="line">        console.log(&#39;单元格数据正在准备提交&#39;, { record, index, key, value });</span>
<span class="line">        return await feakSave({ id: record.id, key, value });</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      function handleEditCancel() {</span>
<span class="line">        console.log(&#39;cancel&#39;);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">        handleEditEnd,</span>
<span class="line">        handleEditCancel,</span>
<span class="line">        beforeEditSubmit,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_7-editable-rows" tabindex="-1"><a class="header-anchor" href="#_7-editable-rows"><span>7. Editable rows</span></a></h2><p>This example demonstrates: a table with row editing function. By switching the row status, you can edit the fields in the row.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/7c60caa94ab95f19334d54eead0078c9bac16a960b01f35053974d48cff62348.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Edit row configuration<br><img src="https://lfs.k.topthink.com/lfs/214a28b0c472ef1d822067dbd50055683144a32e5a24ed8ef2fce5c810736c87.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/70fa4d71b95b7b5499720b5cc23f9b792d22476f4e0c46bd55011e5b9a7d82be.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot; @edit-change=&quot;onEditChange&quot;&gt;</span>
<span class="line">      &lt;template #action=&quot;{ record, column }&quot;&gt;</span>
<span class="line">        &lt;TableAction :actions=&quot;createActions(record, column)&quot; /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable, useTable, TableAction, BasicColumn, ActionItem, EditRecordRow } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { optionsListApi } from &#39;/@/api/demo/select&#39;;</span>
<span class="line"></span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line">  import { treeOptionsListApi } from &#39;/@/api/demo/tree&#39;;</span>
<span class="line">  import { cloneDeep } from &#39;lodash-es&#39;;</span>
<span class="line">  import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line">  import {useListPage} from &quot;/@/hooks/system/useListPage&quot;;</span>
<span class="line"></span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;输入框&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        prefix: &#39;$&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 150,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;默认输入状态&#39;,</span>
<span class="line">      dataIndex: &#39;name7&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      width: 150,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;输入框校验&#39;,</span>
<span class="line">      dataIndex: &#39;name1&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      align: &#39;left&#39;,</span>
<span class="line">      // 默认必填校验</span>
<span class="line">      editRule: true,</span>
<span class="line">      width: 150,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;输入框函数校验&#39;,</span>
<span class="line">      dataIndex: &#39;name2&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      align: &#39;right&#39;,</span>
<span class="line">      editRule: async (text) =&gt; {</span>
<span class="line">        if (text === &#39;2&#39;) {</span>
<span class="line">          return &#39;不能输入该值&#39;;</span>
<span class="line">        }</span>
<span class="line">        return &#39;&#39;;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;数字输入框&#39;,</span>
<span class="line">      dataIndex: &#39;id&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editRule: true,</span>
<span class="line">      editComponent: &#39;InputNumber&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;下拉框&#39;,</span>
<span class="line">      dataIndex: &#39;name3&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponent: &#39;Select&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        options: [</span>
<span class="line">          {</span>
<span class="line">            label: &#39;Option1&#39;,</span>
<span class="line">            value: &#39;1&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            label: &#39;Option2&#39;,</span>
<span class="line">            value: &#39;2&#39;,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            label: &#39;Option3&#39;,</span>
<span class="line">            value: &#39;3&#39;,</span>
<span class="line">          },</span>
<span class="line">        ],</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;远程下拉&#39;,</span>
<span class="line">      dataIndex: &#39;name4&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponent: &#39;ApiSelect&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        api: optionsListApi,</span>
<span class="line">        resultField: &#39;list&#39;,</span>
<span class="line">        labelField: &#39;name&#39;,</span>
<span class="line">        valueField: &#39;id&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;远程下拉树&#39;,</span>
<span class="line">      dataIndex: &#39;name8&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponent: &#39;ApiTreeSelect&#39;,</span>
<span class="line">      editRule: false,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        api: treeOptionsListApi,</span>
<span class="line">        resultField: &#39;list&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;日期选择&#39;,</span>
<span class="line">      dataIndex: &#39;date&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponent: &#39;DatePicker&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        valueFormat: &#39;YYYY-MM-DD&#39;,</span>
<span class="line">        format: &#39;YYYY-MM-DD&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 150,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;时间选择&#39;,</span>
<span class="line">      dataIndex: &#39;time&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponent: &#39;TimePicker&#39;,</span>
<span class="line">      editComponentProps: {</span>
<span class="line">        valueFormat: &#39;HH:mm&#39;,</span>
<span class="line">        format: &#39;HH:mm&#39;,</span>
<span class="line">      },</span>
<span class="line">      width: 100,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;勾选框&#39;,</span>
<span class="line">      dataIndex: &#39;name5&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line"></span>
<span class="line">      editComponent: &#39;Checkbox&#39;,</span>
<span class="line">      editValueMap: (value) =&gt; {</span>
<span class="line">        return value ? &#39;是&#39; : &#39;否&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 100,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开关&#39;,</span>
<span class="line">      dataIndex: &#39;name6&#39;,</span>
<span class="line">      editRow: true,</span>
<span class="line">      editComponent: &#39;Switch&#39;,</span>
<span class="line">      editValueMap: (value) =&gt; {</span>
<span class="line">        return value ? &#39;开&#39; : &#39;关&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 100,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable, TableAction },</span>
<span class="line">    setup() {</span>
<span class="line">      const { createMessage: msg } = useMessage();</span>
<span class="line">      const currentEditKeyRef = ref(&#39;&#39;);</span>
<span class="line"></span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">          designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">          tableProps: {</span>
<span class="line">              title: &#39;可编辑行示例&#39;,</span>
<span class="line">              api: demoListApi,</span>
<span class="line">              columns: columns,</span>
<span class="line">              showIndexColumn: false,</span>
<span class="line">              showTableSetting: true,</span>
<span class="line">              tableSetting: { fullScreen: true },</span>
<span class="line">              actionColumn: {</span>
<span class="line">                  width: 160,</span>
<span class="line">                  title: &#39;Action&#39;,</span>
<span class="line">                  dataIndex: &#39;action&#39;,</span>
<span class="line">                  slots: { customRender: &#39;action&#39; },</span>
<span class="line">              },</span>
<span class="line">          },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">      //BasicTable绑定注册</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line"></span>
<span class="line">      function handleEdit(record: EditRecordRow) {</span>
<span class="line">        currentEditKeyRef.value = record.key;</span>
<span class="line">        record.onEdit?.(true);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      function handleCancel(record: EditRecordRow) {</span>
<span class="line">        currentEditKeyRef.value = &#39;&#39;;</span>
<span class="line">        record.onEdit?.(false, false);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      async function handleSave(record: EditRecordRow) {</span>
<span class="line">        // 校验</span>
<span class="line">        msg.loading({ content: &#39;正在保存...&#39;, duration: 0, key: &#39;saving&#39; });</span>
<span class="line">        const valid = await record.onValid?.();</span>
<span class="line">        if (valid) {</span>
<span class="line">          try {</span>
<span class="line">            const data = cloneDeep(record.editValueRefs);</span>
<span class="line">            console.log(data);</span>
<span class="line">            //TODO 此处将数据提交给服务器保存</span>
<span class="line">            // ...</span>
<span class="line">            // 保存之后提交编辑状态</span>
<span class="line">            const pass = await record.onEdit?.(false, true);</span>
<span class="line">            if (pass) {</span>
<span class="line">              currentEditKeyRef.value = &#39;&#39;;</span>
<span class="line">            }</span>
<span class="line">            msg.success({ content: &#39;数据已保存&#39;, key: &#39;saving&#39; });</span>
<span class="line">          } catch (error) {</span>
<span class="line">            msg.error({ content: &#39;保存失败&#39;, key: &#39;saving&#39; });</span>
<span class="line">          }</span>
<span class="line">        } else {</span>
<span class="line">          msg.error({ content: &#39;请填写正确的数据&#39;, key: &#39;saving&#39; });</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {</span>
<span class="line">        if (!record.editable) {</span>
<span class="line">          return [</span>
<span class="line">            {</span>
<span class="line">              label: &#39;编辑&#39;,</span>
<span class="line">              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,</span>
<span class="line">              onClick: handleEdit.bind(null, record),</span>
<span class="line">            },</span>
<span class="line">          ];</span>
<span class="line">        }</span>
<span class="line">        return [</span>
<span class="line">          {</span>
<span class="line">            label: &#39;保存&#39;,</span>
<span class="line">            onClick: handleSave.bind(null, record, column),</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            label: &#39;取消&#39;,</span>
<span class="line">            popConfirm: {</span>
<span class="line">              title: &#39;是否取消编辑&#39;,</span>
<span class="line">              confirm: handleCancel.bind(null, record, column),</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">        ];</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      function onEditChange({ column, value, record }) {</span>
<span class="line">        // 本例</span>
<span class="line">        if (column.dataIndex === &#39;id&#39;) {</span>
<span class="line">          record.editValueRefs.name4.value = \`\${value}\`;</span>
<span class="line">        }</span>
<span class="line">        console.log(column, value, record);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">        handleEdit,</span>
<span class="line">        createActions,</span>
<span class="line">        onEditChange,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_8-tree-table" tabindex="-1"><a class="header-anchor" href="#_8-tree-table"><span>8. Tree table</span></a></h2><p>This example demonstrates: the table supports the display of tree data</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/97f8de11d090b9b39757e3976a7b026b66b08b4d4f3cc69ea0e85d2628856bb5.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Tree table property settings<br><img src="https://lfs.k.topthink.com/lfs/fd0235aa992d0464860bd27ff9b07402afee44be8e565e8209d973d3ac725f55.dat" alt=""><br> data structure<br><img src="https://lfs.k.topthink.com/lfs/3e24d3a17f22e2e13dd62efb07d9c824492a20f23ce48e166acee41e3ac6b95a.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;register&quot;&gt;</span>
<span class="line">      &lt;template #toolbar&gt;</span>
<span class="line">        &lt;a-button type=&quot;primary&quot; @click=&quot;expandAll&quot;&gt;展开全部&lt;/a-button&gt;</span>
<span class="line">        &lt;a-button type=&quot;primary&quot; @click=&quot;collapseAll&quot;&gt;折叠全部&lt;/a-button&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicColumn, BasicTable } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;ID&#39;,</span>
<span class="line">      dataIndex: &#39;id&#39;,</span>
<span class="line">      fixed: &#39;left&#39;,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      filters: [</span>
<span class="line">        { text: &#39;Male&#39;, value: &#39;male&#39; },</span>
<span class="line">        { text: &#39;Female&#39;, value: &#39;female&#39; },</span>
<span class="line">      ],</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;地址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      width: 300,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;编号&#39;,</span>
<span class="line">      dataIndex: &#39;no&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      sorter: true,</span>
<span class="line">      defaultHidden: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开始时间&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      sorter: true,</span>
<span class="line">      dataIndex: &#39;beginTime&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;结束时间&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      sorter: true,</span>
<span class="line">      dataIndex: &#39;endTime&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable },</span>
<span class="line">    setup() {</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;树形表格&#39;,</span>
<span class="line">          isTreeTable: true,</span>
<span class="line">          rowSelection: {</span>
<span class="line">            type: &#39;checkbox&#39;,</span>
<span class="line">            getCheckboxProps(record: Recordable) {</span>
<span class="line">              // Demo: 第一行（id为0）的选择框禁用</span>
<span class="line">              if (record.id === &#39;0&#39;) {</span>
<span class="line">                return { disabled: true };</span>
<span class="line">              } else {</span>
<span class="line">                return { disabled: false };</span>
<span class="line">              }</span>
<span class="line">            },</span>
<span class="line">          },</span>
<span class="line">          columns: columns,</span>
<span class="line">          dataSource: getTreeTableData(),</span>
<span class="line">          rowKey: &#39;id&#39;,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">     //BasicTable绑定注册</span>
<span class="line">      const [register, { expandAll, collapseAll }] = tableContext;</span>
<span class="line">      function getTreeTableData() {</span>
<span class="line">        const data: any = (() =&gt; {</span>
<span class="line">          const arr: any = [];</span>
<span class="line">          for (let index = 0; index &lt; 40; index++) {</span>
<span class="line">            arr.push({</span>
<span class="line">              id: \`\${index}\`,</span>
<span class="line">              name: &#39;John Brown&#39;,</span>
<span class="line">              age: \`1\${index}\`,</span>
<span class="line">              no: \`\${index + 10}\`,</span>
<span class="line">              address: &#39;New York No. 1 Lake ParkNew York No. 1 Lake Park&#39;,</span>
<span class="line">              beginTime: new Date().toLocaleString(),</span>
<span class="line">              endTime: new Date().toLocaleString(),</span>
<span class="line">              children: [</span>
<span class="line">                {</span>
<span class="line">                  id: \`l2-\${index}\`,</span>
<span class="line">                  name: &#39;John Brown&#39;,</span>
<span class="line">                  age: \`1\${index}\`,</span>
<span class="line">                  no: \`\${index + 10}\`,</span>
<span class="line">                  address: &#39;New York No. 1 Lake ParkNew York No. 1 Lake Park&#39;,</span>
<span class="line">                  beginTime: new Date().toLocaleString(),</span>
<span class="line">                  endTime: new Date().toLocaleString(),</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                  id: \`l3-\${index}\`,</span>
<span class="line">                  name: &#39;John Mary&#39;,</span>
<span class="line">                  age: \`1\${index}\`,</span>
<span class="line">                  no: \`\${index + 10}\`,</span>
<span class="line">                  address: &#39;New York No. 1 Lake ParkNew York No. 1 Lake Park&#39;,</span>
<span class="line">                  beginTime: new Date().toLocaleString(),</span>
<span class="line">                  endTime: new Date().toLocaleString(),</span>
<span class="line">                },</span>
<span class="line">              ],</span>
<span class="line">            });</span>
<span class="line">          }</span>
<span class="line">          return arr;</span>
<span class="line">        })();</span>
<span class="line"></span>
<span class="line">        return data;</span>
<span class="line">      }</span>
<span class="line">      return { register, expandAll, collapseAll };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_9-expandable-rows" tabindex="-1"><a class="header-anchor" href="#_9-expandable-rows"><span>9. Expandable rows</span></a></h2><p>This example demonstrates: When the table content is too large to be fully displayed at once, you can use expand rows to solve the problem.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/b7c06ab08ee56ff993c3f6b223e61da90ffb5ac628d8a523e92fc388a84edad0.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Row Click Configuration<br><img src="https://lfs.k.topthink.com/lfs/80b9a7d34666cdc2a41ea41025170040df4083bfd02d98d2a434c5c921aba3a6.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/8c7e24f45659dd7e769d73b93afe987e07993542285456c9f8d1d8455adf20fb.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;PageWrapper</span>
<span class="line">    title=&quot;可展开表格&quot;</span>
<span class="line">    content=&quot;不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick&quot;</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;template #expandedRowRender=&quot;{ record }&quot;&gt;</span>
<span class="line">        &lt;span&gt;No: {{ record.no }} &lt;/span&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">      &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">        &lt;TableAction</span>
<span class="line">          stopButtonPropagation</span>
<span class="line">          :actions=&quot;[</span>
<span class="line">            {</span>
<span class="line">              label: &#39;删除&#39;,</span>
<span class="line">              icon: &#39;ic:outline-delete-outline&#39;,</span>
<span class="line">              onClick: handleDelete.bind(null, record),</span>
<span class="line">            },</span>
<span class="line">          ]&quot;</span>
<span class="line">          :dropDownActions=&quot;[</span>
<span class="line">            {</span>
<span class="line">              label: &#39;启用&#39;,</span>
<span class="line">              popConfirm: {</span>
<span class="line">                title: &#39;是否启用？&#39;,</span>
<span class="line">                confirm: handleOpen.bind(null, record),</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">          ]&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/PageWrapper&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable, useTable, TableAction, BasicColumn } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { PageWrapper } from &#39;/@/components/Page&#39;;</span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line">  import {useListPage} from &quot;/@/hooks/system/useListPage&quot;;</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;ID&#39;,</span>
<span class="line">      dataIndex: &#39;id&#39;,</span>
<span class="line">      fixed: &#39;left&#39;,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      filters: [</span>
<span class="line">        { text: &#39;Male&#39;, value: &#39;male&#39; },</span>
<span class="line">        { text: &#39;Female&#39;, value: &#39;female&#39; },</span>
<span class="line">      ],</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;地址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      width: 300,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;编号&#39;,</span>
<span class="line">      dataIndex: &#39;no&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      sorter: true,</span>
<span class="line">      defaultHidden: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开始时间&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      sorter: true,</span>
<span class="line">      dataIndex: &#39;beginTime&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;结束时间&#39;,</span>
<span class="line">      width: 150,</span>
<span class="line">      sorter: true,</span>
<span class="line">      dataIndex: &#39;endTime&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable, TableAction, PageWrapper },</span>
<span class="line">    setup() {</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">        tableProps: {</span>
<span class="line">          api: demoListApi,</span>
<span class="line">          title: &#39;可展开表格演示&#39;,</span>
<span class="line">          titleHelpMessage: [&#39;已启用expandRowByClick&#39;, &#39;已启用stopButtonPropagation&#39;],</span>
<span class="line">          columns: columns,</span>
<span class="line">          rowKey: &#39;id&#39;,</span>
<span class="line">          canResize: false,</span>
<span class="line">          expandRowByClick: true,</span>
<span class="line">          actionColumn: {</span>
<span class="line">            width: 160,</span>
<span class="line">            title: &#39;Action&#39;,</span>
<span class="line">            dataIndex: &#39;action&#39;</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">     //BasicTable绑定注册</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line"></span>
<span class="line">      function handleDelete(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了删除&#39;, record);</span>
<span class="line">      }</span>
<span class="line">      function handleOpen(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了启用&#39;, record);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">        handleDelete,</span>
<span class="line">        handleOpen,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_10-fixed-header-and-columns" tabindex="-1"><a class="header-anchor" href="#_10-fixed-header-and-columns"><span>10. Fixed header and columns</span></a></h2><p>This example demonstrates how to fix headers and columns, which is suitable for displaying a large amount of data and data columns at the same time.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/29d814a79ae0d0ce103cea147dfe2e5f0e2f4bd126228db45bba8f9e32f98532.dat" alt=""><br><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Fixed Header Settings<br><img src="https://lfs.k.topthink.com/lfs/b2da91804f1a7b351a2e2cfd3467227e98af180c36ac6c037e6888675ed3b0ae.dat" alt=""><br> Fixed column settings<br><img src="https://lfs.k.topthink.com/lfs/ac841fabda566fe689c508275c37de1dad9cbd3a842eb96cd7a488585675bbd8.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">        &lt;TableAction</span>
<span class="line">          :actions=&quot;[</span>
<span class="line">            {</span>
<span class="line">              label: &#39;删除&#39;,</span>
<span class="line">              icon: &#39;ic:outline-delete-outline&#39;,</span>
<span class="line">              onClick: handleDelete.bind(null, record),</span>
<span class="line">            },</span>
<span class="line">          ]&quot;</span>
<span class="line">          :dropDownActions=&quot;[</span>
<span class="line">            {</span>
<span class="line">              label: &#39;启用&#39;,</span>
<span class="line">              popConfirm: {</span>
<span class="line">                title: &#39;是否启用？&#39;,</span>
<span class="line">                confirm: handleOpen.bind(null, record),</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">          ]&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable, useTable, BasicColumn, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line"></span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;ID&#39;,</span>
<span class="line">      dataIndex: &#39;id&#39;,</span>
<span class="line">      fixed: &#39;left&#39;,</span>
<span class="line">      width: 280,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 260,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;地址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;编号&#39;,</span>
<span class="line">      dataIndex: &#39;no&#39;,</span>
<span class="line">      width: 300,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开始时间&#39;,</span>
<span class="line">      width: 200,</span>
<span class="line">      dataIndex: &#39;beginTime&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;结束时间&#39;,</span>
<span class="line">      dataIndex: &#39;endTime&#39;,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable, TableAction },</span>
<span class="line">    setup() {</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;固定头和列示例&#39;,</span>
<span class="line">          api: demoListApi,</span>
<span class="line">          columns: columns,</span>
<span class="line">          canResize: false,</span>
<span class="line">          scroll: { y: 200 },</span>
<span class="line">          actionColumn: {</span>
<span class="line">            width: 160,</span>
<span class="line">            title: &#39;Action&#39;,</span>
<span class="line">            dataIndex: &#39;action&#39;,</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">    //BasicTable绑定注册</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line">      function handleDelete(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了删除&#39;, record);</span>
<span class="line">      }</span>
<span class="line">      function handleOpen(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了启用&#39;, record);</span>
<span class="line">      }</span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">        handleDelete,</span>
<span class="line">        handleOpen,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_11-group-header" tabindex="-1"><a class="header-anchor" href="#_11-group-header"><span>11. Group header</span></a></h2><p>This example demonstrates: how to customize the rendering of multi-level grouping headers.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/314029a64c28908e13e7e24b72e087100fa252a5fb911917bcc100406aa290eb.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Multi-level grouping configuration of table header<br><img src="https://lfs.k.topthink.com/lfs/73dd77aac921c8de70d4a2cf9f3070a8cabbd2dcace9c2868d286cca4a3b8127.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicColumn, BasicTable } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line"></span>
<span class="line">  //计算合并表头</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable },</span>
<span class="line">    setup() {</span>
<span class="line"></span>
<span class="line">   // 列表页面公共参数、方法</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">           title: &#39;分组表头示例&#39;,</span>
<span class="line">            api: demoListApi,</span>
<span class="line">            columns: getMergeHeaderColumns(),</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">      //BasicTable绑定注册</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line"></span>
<span class="line">      function getMergeHeaderColumns(): BasicColumn[] {</span>
<span class="line">        return [</span>
<span class="line">          {</span>
<span class="line">            title: &#39;ID&#39;,</span>
<span class="line">            dataIndex: &#39;id&#39;,</span>
<span class="line">            width: 300,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            title: &#39;姓名&#39;,</span>
<span class="line">            dataIndex: &#39;name&#39;,</span>
<span class="line">            width: 300,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            title: &#39;地址&#39;,</span>
<span class="line">            width: 120,</span>
<span class="line">            children: [</span>
<span class="line">              {</span>
<span class="line">                title: &#39;地址&#39;,</span>
<span class="line">                dataIndex: &#39;address&#39;,</span>
<span class="line">                key: &#39;address&#39;,</span>
<span class="line">                width: 200,</span>
<span class="line">              },</span>
<span class="line">              {</span>
<span class="line">                title: &#39;编号&#39;,</span>
<span class="line">                dataIndex: &#39;no&#39;,</span>
<span class="line">                key: &#39;no&#39;,</span>
<span class="line">              },</span>
<span class="line">            ],</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            title: &#39;开始时间&#39;,</span>
<span class="line">            dataIndex: &#39;beginTime&#39;,</span>
<span class="line">            width: 200,</span>
<span class="line">          },</span>
<span class="line">          {</span>
<span class="line">            title: &#39;结束时间&#39;,</span>
<span class="line">            dataIndex: &#39;endTime&#39;,</span>
<span class="line">            width: 200,</span>
<span class="line">          },</span>
<span class="line">        ];</span>
<span class="line">      }</span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_12-nested-subtables" tabindex="-1"><a class="header-anchor" href="#_12-nested-subtables"><span>12. Nested subtables</span></a></h2><p>This example demonstrates: how to nest sub-table data and display the sub-table information for each row of data.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/7bc25415a3912cdfdabd36b0b5d7d281af1fe6e390fc5e696de1369cbb382090.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Set via the expandedRowRender slot<br><img src="https://lfs.k.topthink.com/lfs/8b806eae5a53f3d81352c90b794df22eb5fbb30f7c83f5749fe3047b4ddde23e.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot; class=&quot;components-table-demo-nested&quot;&gt;</span>
<span class="line">    &lt;template #bodyCell=&quot;{ column }&quot;&gt;</span>
<span class="line">      &lt;template v-if=&quot;column.key === &#39;operation&#39;&quot;&gt;</span>
<span class="line">        &lt;a&gt;Publish&lt;/a&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;template #expandedRowRender&gt;</span>
<span class="line">      &lt;a-table :columns=&quot;innerColumns&quot; :data-source=&quot;innerData&quot; :pagination=&quot;false&quot;&gt;</span>
<span class="line">        &lt;template #bodyCell=&quot;{ column }&quot;&gt;</span>
<span class="line">          &lt;template v-if=&quot;column.dataIndex === &#39;state&#39;&quot;&gt;</span>
<span class="line">            &lt;span&gt;</span>
<span class="line">              &lt;a-badge status=&quot;success&quot; /&gt;</span>
<span class="line">              Finished</span>
<span class="line">            &lt;/span&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">          &lt;template v-if=&quot;column.dataIndex === &#39;operation&#39;&quot;&gt;</span>
<span class="line">            &lt;span class=&quot;table-operation&quot;&gt;</span>
<span class="line">              &lt;a&gt;Pause&lt;/a&gt;</span>
<span class="line">              &lt;a&gt;Stop&lt;/a&gt;</span>
<span class="line">              &lt;a-dropdown&gt;</span>
<span class="line">                &lt;template #overlay&gt;</span>
<span class="line">                  &lt;a-menu&gt;</span>
<span class="line">                    &lt;a-menu-item&gt;Action 1&lt;/a-menu-item&gt;</span>
<span class="line">                    &lt;a-menu-item&gt;Action 2&lt;/a-menu-item&gt;</span>
<span class="line">                  &lt;/a-menu&gt;</span>
<span class="line">                &lt;/template&gt;</span>
<span class="line">                &lt;a&gt; More &lt;/a&gt;</span>
<span class="line">              &lt;/a-dropdown&gt;</span>
<span class="line">            &lt;/span&gt;</span>
<span class="line">          &lt;/template&gt;</span>
<span class="line">        &lt;/template&gt;</span>
<span class="line">      &lt;/a-table&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line"></span>
<span class="line">  const columns = [</span>
<span class="line">    { title: &#39;Name&#39;, dataIndex: &#39;name&#39;, key: &#39;name&#39; },</span>
<span class="line">    { title: &#39;Platform&#39;, dataIndex: &#39;platform&#39;, key: &#39;platform&#39; },</span>
<span class="line">    { title: &#39;Version&#39;, dataIndex: &#39;version&#39;, key: &#39;version&#39; },</span>
<span class="line">    { title: &#39;Upgraded&#39;, dataIndex: &#39;upgradeNum&#39;, key: &#39;upgradeNum&#39; },</span>
<span class="line">    { title: &#39;Creator&#39;, dataIndex: &#39;creator&#39;, key: &#39;creator&#39; },</span>
<span class="line">    { title: &#39;Date&#39;, dataIndex: &#39;createdAt&#39;, key: &#39;createdAt&#39; },</span>
<span class="line">    { title: &#39;Action&#39;, key: &#39;operation&#39; },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  interface DataItem {</span>
<span class="line">    key: number;</span>
<span class="line">    name: string;</span>
<span class="line">    platform: string;</span>
<span class="line">    version: string;</span>
<span class="line">    upgradeNum: number;</span>
<span class="line">    creator: string;</span>
<span class="line">    createdAt: string;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const data: DataItem[] = [];</span>
<span class="line">  for (let i = 0; i &lt; 3; ++i) {</span>
<span class="line">    data.push({</span>
<span class="line">      key: i,</span>
<span class="line">      name: &#39;Screem&#39;,</span>
<span class="line">      platform: &#39;iOS&#39;,</span>
<span class="line">      version: &#39;10.3.4.5654&#39;,</span>
<span class="line">      upgradeNum: 500,</span>
<span class="line">      creator: &#39;Jack&#39;,</span>
<span class="line">      createdAt: &#39;2014-12-24 23:12:00&#39;,</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const innerColumns = [</span>
<span class="line">    { title: &#39;Date&#39;, dataIndex: &#39;date&#39;, key: &#39;date&#39; },</span>
<span class="line">    { title: &#39;Name&#39;, dataIndex: &#39;name&#39;, key: &#39;name&#39; },</span>
<span class="line">    { title: &#39;Status&#39;, dataIndex: &#39;state&#39;, key: &#39;state&#39; },</span>
<span class="line">    { title: &#39;Upgrade Status&#39;, dataIndex: &#39;upgradeNum&#39;, key: &#39;upgradeNum&#39; },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;Action&#39;,</span>
<span class="line">      dataIndex: &#39;operation&#39;,</span>
<span class="line">      key: &#39;operation&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  interface innerDataItem {</span>
<span class="line">    key: number;</span>
<span class="line">    date: string;</span>
<span class="line">    name: string;</span>
<span class="line">    upgradeNum: string;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  const innerData: innerDataItem[] = [];</span>
<span class="line">  for (let i = 0; i &lt; 3; ++i) {</span>
<span class="line">    innerData.push({</span>
<span class="line">      key: i,</span>
<span class="line">      date: &#39;2014-12-24 23:12:00&#39;,</span>
<span class="line">      name: &#39;This is production name&#39;,</span>
<span class="line">      upgradeNum: &#39;Upgraded: 56&#39;,</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable },</span>
<span class="line">    setup() {</span>
<span class="line">      // 列表页面公共参数、方法</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;内嵌表格&#39;,</span>
<span class="line">          dataSource: data,</span>
<span class="line">          columns: columns,</span>
<span class="line">          showActionColumn: false,</span>
<span class="line">          rowKey: &#39;key&#39;,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">     //BasicTable绑定注册</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line">      return {</span>
<span class="line">        data,</span>
<span class="line">        columns,</span>
<span class="line">        innerColumns,</span>
<span class="line">        innerData,</span>
<span class="line">        registerTable,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_13-custom-columns" tabindex="-1"><a class="header-anchor" href="#_13-custom-columns"><span>13. Custom Columns</span></a></h2><p>This example demonstrates: how to customize the content of the rendered columns and the display effect of the column content</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/e2e7acb1dbbd9cbf3a6668f3fcaf2177b4d64aaf34bd014bc24da5c506532638.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Set the rendering effect of the column content through the slot bodyCell and field key<br><img src="https://lfs.k.topthink.com/lfs/aef34add20572d4a45cab771a919c4f8b8a4c71aff83796bc9f4cca4f71cdbbc.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;template #id=&quot;{ record }&quot;&gt; ID: {{ record.id }} &lt;/template&gt;</span>
<span class="line">      &lt;template #bodyCell=&quot;{ column, record }&quot;&gt;</span>
<span class="line">        &lt;Avatar v-if=&quot;column.key === &#39;avatar&#39;&quot; :size=&quot;60&quot; :src=&quot;record.avatar&quot; /&gt;</span>
<span class="line">        &lt;Tag v-if=&quot;column.key === &#39;no&#39;&quot; color=&quot;green&quot;&gt;</span>
<span class="line">          {{ record.no }}</span>
<span class="line">        &lt;/Tag&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">      &lt;template #img=&quot;{ text }&quot;&gt;</span>
<span class="line">        &lt;TableImg :size=&quot;60&quot; :simpleShow=&quot;true&quot; :imgList=&quot;text&quot; /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">      &lt;template #imgs=&quot;{ text }&quot;&gt; &lt;TableImg :size=&quot;60&quot; :imgList=&quot;text&quot; /&gt; &lt;/template&gt;</span>
<span class="line"></span>
<span class="line">      &lt;template #category=&quot;{ record }&quot;&gt;</span>
<span class="line">        &lt;Tag color=&quot;green&quot;&gt;</span>
<span class="line">          {{ record.no }}</span>
<span class="line">        &lt;/Tag&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable, useTable, BasicColumn, TableImg } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { Tag, Avatar } from &#39;ant-design-vue&#39;;</span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;ID&#39;,</span>
<span class="line">      dataIndex: &#39;id&#39;,</span>
<span class="line">      slots: { customRender: &#39;id&#39; },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;头像&#39;,</span>
<span class="line">      dataIndex: &#39;avatar&#39;,</span>
<span class="line">      width: 100,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;分类&#39;,</span>
<span class="line">      dataIndex: &#39;category&#39;,</span>
<span class="line">      width: 80,</span>
<span class="line">      align: &#39;center&#39;,</span>
<span class="line">      defaultHidden: true,</span>
<span class="line">      slots: { customRender: &#39;category&#39; },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;图片列表1&#39;,</span>
<span class="line">      dataIndex: &#39;imgArr&#39;,</span>
<span class="line">      helpMessage: [&#39;这是简单模式的图片列表&#39;, &#39;只会显示一张在表格中&#39;, &#39;但点击可预览多张图片&#39;],</span>
<span class="line">      width: 140,</span>
<span class="line">      slots: { customRender: &#39;img&#39; },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;照片列表2&#39;,</span>
<span class="line">      dataIndex: &#39;imgs&#39;,</span>
<span class="line">      width: 160,</span>
<span class="line">      slots: { customRender: &#39;imgs&#39; },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;地址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;编号&#39;,</span>
<span class="line">      dataIndex: &#39;no&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开始时间&#39;,</span>
<span class="line">      dataIndex: &#39;beginTime&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;结束时间&#39;,</span>
<span class="line">      dataIndex: &#39;endTime&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable, TableImg, Tag, Avatar },</span>
<span class="line">    setup() {</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;自定义列内容&#39;,</span>
<span class="line">          titleHelpMessage: &#39;表格中所有头像、图片均为mock生成，仅用于演示图片占位&#39;,</span>
<span class="line">          api: demoListApi,</span>
<span class="line">          columns: columns,</span>
<span class="line">          bordered: true,</span>
<span class="line">          showTableSetting: false,</span>
<span class="line">          showActionColumn: false,</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line">      //注册table数据</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_14-filter-and-sort" tabindex="-1"><a class="header-anchor" href="#_14-filter-and-sort"><span>14. Filter and sort</span></a></h2><p>This example demonstrates: filter a column of data, use the column <code>filters</code> properties to specify the column that needs to be filtered, sort a column of data, and <code>sorter</code> activate the sort button by specifying the column function.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/f48c67e7d139eb72a820d9c2877a1acb203569559a99505217354752e1205c03.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Sorting Settings<br><img src="https://lfs.k.topthink.com/lfs/de623bed1b230f60d96e19076ca5150be24a169ae87de8c59ce5d4f83ab1ef2b.dat" alt=""><br> Filter settings<br><img src="https://lfs.k.topthink.com/lfs/aa4e991bcc23f4253c37defd02cf64805e7d84048b4aac54c34fc8cecff804f8.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 170,</span>
<span class="line">      align: &#39;left&#39;,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;关键词&#39;,</span>
<span class="line">      dataIndex: &#39;keyWord&#39;,</span>
<span class="line">      width: 130,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;打卡时间&#39;,</span>
<span class="line">      dataIndex: &#39;punchTime&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;工资&#39;,</span>
<span class="line">      dataIndex: &#39;salaryMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 2,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;奖金&#39;,</span>
<span class="line">      dataIndex: &#39;bonusMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;性别&#39;,</span>
<span class="line">      dataIndex: &#39;sex&#39;,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 3,</span>
<span class="line">      },</span>
<span class="line">      filters: [</span>
<span class="line">          { text: &#39;男&#39;, value: &#39;1&#39; },</span>
<span class="line">          { text: &#39;女&#39;, value: &#39;2&#39; },</span>
<span class="line">      ],</span>
<span class="line">      customRender: ({ record }) =&gt; {</span>
<span class="line">        return record.sex ? (record.sex == &#39;1&#39; ? &#39;男&#39; : &#39;女&#39;) : &#39;&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;生日&#39;,</span>
<span class="line">      dataIndex: &#39;birthday&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;邮箱&#39;,</span>
<span class="line">      dataIndex: &#39;email&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  //ajax请求api接口</span>
<span class="line">  const demoListApi = (params) =&gt; {</span>
<span class="line">    return defHttp.get({ url: &#39;/test/jeecgDemo/list&#39;, params });</span>
<span class="line">  };</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo-filter&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;用户列表&#39;,</span>
<span class="line">      api: demoListApi,</span>
<span class="line">      columns: columns,</span>
<span class="line">      showActionColumn:false</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  //注册table数据</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_15-selection-and-operation" tabindex="-1"><a class="header-anchor" href="#_15-selection-and-operation"><span>15. Selection and Operation</span></a></h2><p>This example demonstrates: how to configure the selection column and the operation column. And operate the selected items through <code>selectedRows</code>or . Set single selection or multiple selection through configuration<code>selectedRowKeys</code> <code>rowSelection.type</code></p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/0907c1657395dda25976413530e178df4152388794516a0fed52394fe839be32.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Set the operation mode of the selection column, single-select radio or multi-select checkbox<br><img src="https://lfs.k.topthink.com/lfs/da013e4ed0505cd7696fdd7be65dc73cfac00e923b6b4ebf633e71c780f614a3.dat" alt=""><br> Set the operation column, <code>TableAction</code>which is a built-in component. For specific usage, refer to the following <code>内置组件</code>content<br><img src="https://lfs.k.topthink.com/lfs/a28792c6a4647efbdec59d84c9ae2c2298c3cc5a23b0ecd1151de4a3bf174e1e.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格，绑定rowSelection选择行属性--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot; :rowSelection=&quot;rowSelection&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import {  BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      key: &#39;name&#39;,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      key: &#39;age&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;可选择表格&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          id: &#39;1&#39;,</span>
<span class="line">          name: &#39;胡歌&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;朝阳区林萃路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          id: &#39;2&#39;,</span>
<span class="line">          name: &#39;刘诗诗&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;昌平区白沙路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      rowkey:&quot;id&quot;,</span>
<span class="line">    //定义rowSelection的类型，默认是checkbox多选，可以设置成radio单选</span>
<span class="line">      rowSelection: { type: &#39;checkbox&#39; },</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">/**BasicTable绑定注册 ，返回reload 刷新方法、rowSelection行选择属性、</span>
<span class="line">selectedRows选中的行信息、selectedRowKeys 选中的行rowkey */</span>
<span class="line">  const [registerTable, { reload }, { rowSelection, selectedRows, selectedRowKeys }] = tableContext;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> /**</span>
<span class="line">   * 操作栏设置，可配置编辑、删除等各种操作方式，其他使用方式参考文档中的 \`内置组件\`内容</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">    console.log(selectedRows.value);</span>
<span class="line">    console.log(selectedRowKeys.value);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_16-scalable-columns" tabindex="-1"><a class="header-anchor" href="#_16-scalable-columns"><span>16. Scalable Columns</span></a></h2><p>This example demonstrates: Set the column to enable dragging with the resizable property, move the mouse to the dividing line behind the column and drag</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/31fe5f8f63f7b21c9fdcb25cea13d9b212850d7584d0a3d3c09f5039ef14930a.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Setting column dragging<br><img src="https://lfs.k.topthink.com/lfs/220f0c357fc4921d835de2f689a1528a00067a8d2246c6f5333d08f5f3f06e81.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      key: &#39;name&#39;,</span>
<span class="line">      resizable: true //配置列可伸缩</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      key: &#39;age&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address&#39;,</span>
<span class="line"></span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;可伸缩列&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          key: &#39;1&#39;,</span>
<span class="line">          name: &#39;胡歌&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;朝阳区林萃路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;2&#39;,</span>
<span class="line">          name: &#39;刘诗诗&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;昌平区白沙路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      showActionColumn: false</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">  //BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_17-compact-and-zebra-pattern-tables" tabindex="-1"><a class="header-anchor" href="#_17-compact-and-zebra-pattern-tables"><span>17. Compact and Zebra Pattern Tables</span></a></h2><p>This example demonstrates: By <code>size</code>setting the size of the table, <code>striped</code>you can set whether to display zebra patterns.</p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/cb3bdde40b373d9eb1d62a57896f67afa9e7d1c9615442ff298500094d39e6ab.dat" alt=""></p><blockquote><p>Table size<br><img src="https://lfs.k.topthink.com/lfs/20e89d79387d2a73b89014098d557403caac7b7b57c379e45d420b5ddf207215.dat" alt=""><br> Zebra print<br><img src="https://lfs.k.topthink.com/lfs/5a2038f944e7041cb401f99bc2be5bd5a6255805ce139f02aa9ab4d855be22b4.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--引用表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      key: &#39;name&#39;,</span>
<span class="line">      resizable: true</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;年龄&#39;,</span>
<span class="line">      dataIndex: &#39;age&#39;,</span>
<span class="line">      key: &#39;age&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;住址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      key: &#39;address&#39;,</span>
<span class="line"></span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;紧凑斑马纹表格&#39;,</span>
<span class="line">      dataSource: [</span>
<span class="line">        {</span>
<span class="line">          key: &#39;1&#39;,</span>
<span class="line">          name: &#39;胡歌&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;朝阳区林萃路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">          key: &#39;2&#39;,</span>
<span class="line">          name: &#39;刘诗诗&#39;,</span>
<span class="line">          age: 32,</span>
<span class="line">          address: &#39;昌平区白沙路1号&#39;,</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">      columns: columns,</span>
<span class="line">      size:&#39;small&#39;,//紧凑型表格</span>
<span class="line">      striped:true,//斑马纹设置</span>
<span class="line">      showActionColumn: false</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  //注册table数据</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_18-enable-form-search" tabindex="-1"><a class="header-anchor" href="#_18-enable-form-search"><span>18. Enable form search</span></a></h2><p>This example demonstrates: how to configure a table form query, which can display a form search above the table. For specific form configuration, refer to <a href="#!">the Form form component</a></p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/19423e9dcd12daefed8533ad5aad9267a0e68f49f7cf352946ba5cb955d2ac14.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Configure form query formConfig<br><img src="https://lfs.k.topthink.com/lfs/ca1b9849265d474a5195b44e625fcc99717bc8a9594cad0af131f2c607f5fedc.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/60bef8c22d9b3020d8221df98bdfc0a9dcc6eb5452f5226c2cf7b659ecc8c0da.dat" alt=""><br> Set the default value of the query condition<br><img src="https://lfs.k.topthink.com/lfs/48841632177d545890c4bd749b2d315251465f5322d955fc7dd7e3482be4e563.dat" alt=""><br> Set query conditions custom slot<br><img src="https://lfs.k.topthink.com/lfs/5f150211c812f15d1651f87733708b7c4dc6b49434cdb22b3a920a5c9460c352.dat" alt=""><br> The slots in the table query area must <code>form-</code>start with<br><img src="https://lfs.k.topthink.com/lfs/28eb222e8afb3bd82901c92f3cef3e3e5657a482211c69cf9c04284f35d324dc.dat" alt=""><br> Get the form data<br><img src="https://lfs.k.topthink.com/lfs/4a1c8e63fe4a68ca183c4743fba8607efbe047bc07df4c7edceb79a728ed4625.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;!--定义表格--&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;!-- 搜索区域插槽自定义查询 --&gt;</span>
<span class="line">      &lt;template #form-email=&quot;{ model, field }&quot;&gt;</span>
<span class="line">        &lt;a-input placeholder=&quot;请输入邮箱&quot; v-model:value=&quot;model[field]&quot; addon-before=&quot;邮箱:&quot; addon-after=&quot;.com&quot;&gt;&lt;/a-input&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">      &lt;!--操作栏--&gt;</span>
<span class="line">      &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">        &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, FormSchema, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 170,</span>
<span class="line">      align: &#39;left&#39;,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 1,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;关键词&#39;,</span>
<span class="line">      dataIndex: &#39;keyWord&#39;,</span>
<span class="line">      width: 130,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;打卡时间&#39;,</span>
<span class="line">      dataIndex: &#39;punchTime&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;工资&#39;,</span>
<span class="line">      dataIndex: &#39;salaryMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 2,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;奖金&#39;,</span>
<span class="line">      dataIndex: &#39;bonusMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;性别&#39;,</span>
<span class="line">      dataIndex: &#39;sex&#39;,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 3,</span>
<span class="line">      },</span>
<span class="line">      filters: [</span>
<span class="line">        { text: &#39;男&#39;, value: &#39;1&#39; },</span>
<span class="line">        { text: &#39;女&#39;, value: &#39;2&#39; },</span>
<span class="line">      ],</span>
<span class="line">      customRender: ({ record }) =&gt; {</span>
<span class="line">        return record.sex ? (record.sex == &#39;1&#39; ? &#39;男&#39; : &#39;女&#39;) : &#39;&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;生日&#39;,</span>
<span class="line">      dataIndex: &#39;birthday&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;邮箱&#39;,</span>
<span class="line">      dataIndex: &#39;email&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  //表单搜索字段</span>
<span class="line">  const searchFormSchema: FormSchema[] = [</span>
<span class="line">    {</span>
<span class="line">      label: &#39;姓名&#39;, //显示label</span>
<span class="line">      field: &#39;name&#39;, //查询字段</span>
<span class="line">      component: &#39;JInput&#39;, //渲染的组件</span>
<span class="line">      defaultValue: &#39;苏榕润&#39;, //设置默认值</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;性别&#39;,</span>
<span class="line">      field: &#39;sex&#39;,</span>
<span class="line">      component: &#39;JDictSelectTag&#39;,</span>
<span class="line">      componentProps: {</span>
<span class="line">        //渲染的组件的props</span>
<span class="line">        dictCode: &#39;sex&#39;,</span>
<span class="line">        placeholder: &#39;请选择性别&#39;,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;邮箱&#39;,</span>
<span class="line">      field: &#39;email&#39;,</span>
<span class="line">      component: &#39;JInput&#39;,</span>
<span class="line">      slot: &#39;email&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: &#39;生日&#39;,</span>
<span class="line">      field: &#39;birthday&#39;,</span>
<span class="line">      component: &#39;DatePicker&#39;,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  //ajax请求api接口</span>
<span class="line">  const demoListApi = (params) =&gt; {</span>
<span class="line">    return defHttp.get({ url: &#39;/test/jeecgDemo/list&#39;, params });</span>
<span class="line">  };</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo-filter&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;表单搜索&#39;,</span>
<span class="line">      api: demoListApi,</span>
<span class="line">      columns: columns,</span>
<span class="line">      formConfig: {</span>
<span class="line">        schemas: searchFormSchema,</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">  //BasicTable绑定注册</span>
<span class="line">  const [registerTable, { getForm }] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    let { getFieldsValue } = getForm();</span>
<span class="line">    console.log(&#39;查询form的数据&#39;, getFieldsValue());</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_19-permissions-column" tabindex="-1"><a class="header-anchor" href="#_19-permissions-column"><span>19. Permissions column</span></a></h2><p>You can configure <code>auth</code>or <code>ifshow</code>control the visibility of columns</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/cd78f079e4df01fb9e68a7137180b5591d57054f5199f0d6c2b75fefbbb9dff2.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>Control the visibility of columns or operation buttons through auth or ifShow<br><img src="https://lfs.k.topthink.com/lfs/d4afd37e04f4cb94f12f805fa9f636b115093929f6a4f6a6b0476f7cbbc643ca.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot;&gt;</span>
<span class="line">      &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">        &lt;TableAction</span>
<span class="line">          :actions=&quot;[</span>
<span class="line">            {</span>
<span class="line">              label: &#39;编辑&#39;,</span>
<span class="line">              onClick: handleEdit.bind(null, record),</span>
<span class="line">              auth: &#39;demo:field:show&#39;, // 根据权限控制是否显示: 无权限，不显示</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">              label: &#39;删除&#39;,</span>
<span class="line">              icon: &#39;ic:outline-delete-outline&#39;,</span>
<span class="line">              onClick: handleDelete.bind(null, record),</span>
<span class="line">              auth: &#39;super&#39;, // 根据权限控制是否显示: 有权限，会显示</span>
<span class="line">            },</span>
<span class="line">          ]&quot;</span>
<span class="line">          :dropDownActions=&quot;[</span>
<span class="line">            {</span>
<span class="line">              label: &#39;启用&#39;,</span>
<span class="line">              popConfirm: {</span>
<span class="line">                title: &#39;是否启用？&#39;,</span>
<span class="line">                confirm: handleOpen.bind(null, record),</span>
<span class="line">              },</span>
<span class="line">              ifShow: (_action) =&gt; {</span>
<span class="line">                return record.status !== &#39;enable&#39;; // 根据业务控制是否显示: 非enable状态的不显示启用按钮</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">              label: &#39;禁用&#39;,</span>
<span class="line">              popConfirm: {</span>
<span class="line">                title: &#39;是否禁用？&#39;,</span>
<span class="line">                confirm: handleOpen.bind(null, record),</span>
<span class="line">              },</span>
<span class="line">              ifShow: () =&gt; {</span>
<span class="line">                return record.status === &#39;enable&#39;; // 根据业务控制是否显示: enable状态的显示禁用按钮</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">            {</span>
<span class="line">              label: &#39;同时控制&#39;,</span>
<span class="line">              popConfirm: {</span>
<span class="line">                title: &#39;是否动态显示？&#39;,</span>
<span class="line">                confirm: handleOpen.bind(null, record),</span>
<span class="line">              },</span>
<span class="line">              auth: &#39;super&#39;, // 同时根据权限和业务控制是否显示</span>
<span class="line">              ifShow: () =&gt; {</span>
<span class="line">                return true;</span>
<span class="line">              },</span>
<span class="line">            },</span>
<span class="line">          ]&quot;</span>
<span class="line">        /&gt;</span>
<span class="line">      &lt;/template&gt;</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTable, useTable, BasicColumn, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line"></span>
<span class="line">  import { demoListApi } from &#39;/@/api/demo/table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;编号&#39;,</span>
<span class="line">      dataIndex: &#39;no&#39;,</span>
<span class="line">      width: 100,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      auth: &#39;demo:field:show&#39;, // 根据权限控制是否显示: 无权限，不显示</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;状态&#39;,</span>
<span class="line">      dataIndex: &#39;status&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;地址&#39;,</span>
<span class="line">      dataIndex: &#39;address&#39;,</span>
<span class="line">      auth: &#39;super&#39;, // 同时根据权限和业务控制是否显示</span>
<span class="line">      ifShow: (_column) =&gt; {</span>
<span class="line">        return true;</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;开始时间&#39;,</span>
<span class="line">      dataIndex: &#39;beginTime&#39;,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;结束时间&#39;,</span>
<span class="line">      dataIndex: &#39;endTime&#39;,</span>
<span class="line">      width: 200,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTable, TableAction },</span>
<span class="line">    setup() {</span>
<span class="line">      const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;权限列&#39;,</span>
<span class="line">          api: demoListApi,</span>
<span class="line">          columns: columns,</span>
<span class="line">          bordered: true,</span>
<span class="line">          actionColumn: {</span>
<span class="line">            width: 250,</span>
<span class="line">            title: &#39;Action&#39;,</span>
<span class="line">            dataIndex: &#39;action&#39;,</span>
<span class="line">            slots: { customRender: &#39;action&#39; },</span>
<span class="line">          },</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">      //BasicTable绑定注册</span>
<span class="line">      const [registerTable] = tableContext;</span>
<span class="line"></span>
<span class="line">      function handleEdit(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了编辑&#39;, record);</span>
<span class="line">      }</span>
<span class="line">      function handleDelete(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了删除&#39;, record);</span>
<span class="line">      }</span>
<span class="line">      function handleOpen(record: Recordable) {</span>
<span class="line">        console.log(&#39;点击了启用&#39;, record);</span>
<span class="line">      }</span>
<span class="line">      return {</span>
<span class="line">        registerTable,</span>
<span class="line">        handleEdit,</span>
<span class="line">        handleDelete,</span>
<span class="line">        handleOpen,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_20-import-and-export" tabindex="-1"><a class="header-anchor" href="#_20-import-and-export"><span>20. Import and export</span></a></h2><p>This example demonstrates: how to configure the import and export of table data, which needs to be implemented in conjunction with the backend interface.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/7b0e557b12ccc75bad5cf86fb8a35ecab760d9ced300badc26f33264d223089b.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>1. Configure button display<br><img src="https://lfs.k.topthink.com/lfs/dac015a1ae76976d2d9a250c7a4b81ca1f568d61f548fdedeb858373f40916a4.dat" alt=""><br> 2. Configure the interface address<br><img src="https://lfs.k.topthink.com/lfs/8d99c2e3d4df836580ef41d98fbf133fe31b14ef8c6c8b551d372f0454ceaa38.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;registerTable&quot; :rowSelection=&quot;rowSelection&quot;&gt;</span>
<span class="line">    &lt;template #tableTitle&gt;</span>
<span class="line">      &lt;a-button type=&quot;primary&quot; preIcon=&quot;ant-design:export-outlined&quot; @click=&quot;onExportXls&quot;&gt; 导出&lt;/a-button&gt;</span>
<span class="line">      &lt;j-upload-button type=&quot;primary&quot; preIcon=&quot;ant-design:import-outlined&quot; @click=&quot;onImportXls&quot;&gt;导入&lt;/j-upload-button&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">    &lt;!--操作栏--&gt;</span>
<span class="line">    &lt;template #action=&quot;{ record }&quot;&gt;</span>
<span class="line">      &lt;TableAction :actions=&quot;getTableAction(record)&quot; /&gt;</span>
<span class="line">    &lt;/template&gt;</span>
<span class="line">  &lt;/BasicTable&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; name=&quot;basic-table-demo&quot; setup&gt;</span>
<span class="line">  import { ActionItem, BasicColumn, BasicTable, TableAction } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">  //定义表格列</span>
<span class="line">  const columns: BasicColumn[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;姓名&#39;,</span>
<span class="line">      dataIndex: &#39;name&#39;,</span>
<span class="line">      width: 170,</span>
<span class="line">      align: &#39;left&#39;,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 1,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;关键词&#39;,</span>
<span class="line">      dataIndex: &#39;keyWord&#39;,</span>
<span class="line">      width: 130,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;打卡时间&#39;,</span>
<span class="line">      dataIndex: &#39;punchTime&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;工资&#39;,</span>
<span class="line">      dataIndex: &#39;salaryMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 2,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;奖金&#39;,</span>
<span class="line">      dataIndex: &#39;bonusMoney&#39;,</span>
<span class="line">      width: 140,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;性别&#39;,</span>
<span class="line">      dataIndex: &#39;sex&#39;,</span>
<span class="line">      sorter: {</span>
<span class="line">        multiple: 3,</span>
<span class="line">      },</span>
<span class="line">      filters: [</span>
<span class="line">        { text: &#39;男&#39;, value: &#39;1&#39; },</span>
<span class="line">        { text: &#39;女&#39;, value: &#39;2&#39; },</span>
<span class="line">      ],</span>
<span class="line">      customRender: ({ record }) =&gt; {</span>
<span class="line">        return record.sex ? (record.sex == &#39;1&#39; ? &#39;男&#39; : &#39;女&#39;) : &#39;&#39;;</span>
<span class="line">      },</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;生日&#39;,</span>
<span class="line">      dataIndex: &#39;birthday&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;邮箱&#39;,</span>
<span class="line">      dataIndex: &#39;email&#39;,</span>
<span class="line">      width: 120,</span>
<span class="line">      resizable: true,</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  //ajax请求api接口</span>
<span class="line">  const demoListApi = (params) =&gt; {</span>
<span class="line">    return defHttp.get({ url: &#39;/test/jeecgDemo/list&#39;, params });</span>
<span class="line">  };</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext, onExportXls, onImportXls } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo-filter&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;表单搜索&#39;,</span>
<span class="line">      api: demoListApi,</span>
<span class="line">      columns: columns,</span>
<span class="line">      showActionColumn: false,</span>
<span class="line">    },</span>
<span class="line">    exportConfig: {</span>
<span class="line">      name: &#39;示例列表&#39;,</span>
<span class="line">      url: &#39;/test/jeecgDemo/exportXls&#39;,</span>
<span class="line">    },</span>
<span class="line">    importConfig: {</span>
<span class="line">      url: &#39;/test/jeecgDemo/importExcel&#39;,</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">//BasicTable绑定注册</span>
<span class="line">  const [registerTable, { reload }, { rowSelection, selectedRows, selectedRowKeys }] = tableContext;</span>
<span class="line">  /**</span>
<span class="line">   * 操作栏</span>
<span class="line">   */</span>
<span class="line">  function getTableAction(record): ActionItem[] {</span>
<span class="line">    return [</span>
<span class="line">      {</span>
<span class="line">        label: &#39;编辑&#39;,</span>
<span class="line">        onClick: handleEdit.bind(null, record),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleEdit(record) {</span>
<span class="line">    console.log(record);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="_21-table-total" tabindex="-1"><a class="header-anchor" href="#_21-table-total"><span>21. Table Total</span></a></h2><p>This example demonstrates how to configure the calculations that display total rows and total columns.</p><p>Page Effects</p><p>Sample Code</p><p><img src="https://lfs.k.topthink.com/lfs/cf8662b0786ef957f9db45dac9c292172a13e49db0eb7229d02cccde1d589dbb.dat" alt=""></p><p><a href="http://boot3.jeecg.com/login?redirect=/demo/document/index" target="_blank" rel="noopener noreferrer">Click to view online demo</a></p><blockquote><p>1. Whether to display the summary row showSummary<br><img src="https://lfs.k.topthink.com/lfs/bfa3bcd81865e8833d8a632c42da27b0489d82f755a08dbba8b3f93954819483.dat" alt=""><br> 2. Calculate the total row summaryFunc<br><img src="https://lfs.k.topthink.com/lfs/4f3567fa4634da28ee09c6ef37c7f252ee8642108420eb032acb92705a2fcb22.dat" alt=""></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!--定义表格--&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot; /&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">  import { BasicTable } from &#39;/@/components/Table&#39;;</span>
<span class="line">  import { mapTableTotalSummary } from &#39;/@/utils/common/compUtils&#39;;</span>
<span class="line">  import { useListPage } from &#39;/@/hooks/system/useListPage&#39;;</span>
<span class="line">  // 列表页面公共参数、方法</span>
<span class="line">  const { tableContext } = useListPage({</span>
<span class="line">    designScope: &#39;basic-table-demo&#39;,</span>
<span class="line">    tableProps: {</span>
<span class="line">      title: &#39;合计表格&#39;,</span>
<span class="line">      rowKey: &#39;id&#39;,</span>
<span class="line">      bordered: true,</span>
<span class="line">      canResize: false,</span>
<span class="line">      useSearchForm: false,</span>
<span class="line">      showActionColumn: false,</span>
<span class="line">      showIndexColumn: true,</span>
<span class="line">      columns: [</span>
<span class="line">        { title: &#39;姓名&#39;, dataIndex: &#39;name&#39; },</span>
<span class="line">        { title: &#39;贡献点&#39;, dataIndex: &#39;point&#39; },</span>
<span class="line">        { title: &#39;等级&#39;, dataIndex: &#39;level&#39; },</span>
<span class="line">        { title: &#39;更新时间&#39;, dataIndex: &#39;updateTime&#39; },</span>
<span class="line">      ],</span>
<span class="line">      dataSource: [</span>
<span class="line">        { id: 0, name: &#39;张三&#39;, point: 23, level: 3, updateTime: &#39;2019-8-14&#39; },</span>
<span class="line">        { id: 1, name: &#39;小鹿&#39;, point: 33, level: 9, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 2, name: &#39;小王&#39;, point: 6, level: 1, updateTime: &#39;2019-8-13&#39; },</span>
<span class="line">        { id: 3, name: &#39;李四&#39;, point: 53, level: 8, updateTime: &#39;2019-8-12&#39; },</span>
<span class="line">        { id: 4, name: &#39;小红&#39;, point: 44, level: 5, updateTime: &#39;2019-8-11&#39; },</span>
<span class="line">        { id: 5, name: &#39;王五&#39;, point: 97, level: 10, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 6, name: &#39;小明&#39;, point: 33, level: 2, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 7, name: &#39;小张&#39;, point: 33, level: 4, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 8, name: &#39;小六&#39;, point: 33, level: 2, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 9, name: &#39;小五&#39;, point: 33, level: 7, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 10, name: &#39;小赵&#39;, point: 33, level: 2, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 11, name: &#39;李华&#39;, point: 33, level: 8, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">        { id: 12, name: &#39;小康&#39;, point: 33, level: 5, updateTime: &#39;2019-8-10&#39; },</span>
<span class="line">      ],</span>
<span class="line">      // 显示底部合计</span>
<span class="line">      showSummary: true,</span>
<span class="line">      // 底部合计计算方法</span>
<span class="line">      summaryFunc: onSummary,</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> // BasicTable绑定注册</span>
<span class="line">  const [registerTable] = tableContext;</span>
<span class="line"> /**</span>
<span class="line">   * 计算合计</span>
<span class="line">   * @param tableData</span>
<span class="line">   */</span>
<span class="line">  function onSummary(tableData: Recordable[]) {</span>
<span class="line">    // 可用工具方法自动计算合计</span>
<span class="line">    const totals = mapTableTotalSummary(tableData, [&#39;point&#39;, &#39;level&#39;]);</span>
<span class="line">    console.log(&#39;onSummary****totals&gt;&gt;&gt;&#39;, totals);</span>
<span class="line">    return [</span>
<span class="line">      totals,</span>
<span class="line">      {</span>
<span class="line">        _row: &#39;平均&#39;,</span>
<span class="line">        _index: &#39;平均&#39;,</span>
<span class="line">        // 计算平均值</span>
<span class="line">        point: (totals.point / tableData.length).toFixed(2),</span>
<span class="line">        level: (totals.level / tableData.length).toFixed(0),</span>
<span class="line">      },</span>
<span class="line">    ];</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><h3 id="tableprops" tabindex="-1"><a class="header-anchor" href="#tableprops"><span>TableProps</span></a></h3><blockquote><p>Warm reminder:<br> In addition to the following configuration parameters, TableProps <code>Ant Design Vue</code>also supports table props in the official document. For details, please refer to <a href="https://3x.antdv.com/components/table-cn#API" target="_blank" rel="noopener noreferrer">antv table</a></p></blockquote><table><thead><tr><th>parameter</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>autoCreateKey</td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to automatically generate a key</td></tr><tr><td>api</td><td>(...arg: any) =&gt; Promise</td><td>-</td><td>Request interface, you can directly pass the function in src/api, for specific usage and return data, refer to <strong>2. Remote data loading example</strong></td></tr><tr><td>afterFetch</td><td><code>(T)=&gt;T</code></td><td>-</td><td>Process the return value after the request</td></tr><tr><td>actionColumn</td><td><code>any</code></td><td>-</td><td>Configure BasicColumn in the operation column on the right side of the table</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to display the table border</td></tr><tr><td>beforeFetch</td><td><code>(T)=&gt;T</code></td><td>-</td><td>Process parameters before requesting</td></tr><tr><td>beforeEditSubmit</td><td>({record: Recordable,index: number,key: string | number,value: any}) =&gt; Promise</td><td>-</td><td>The cell editing state submission callback, returning false will prevent the cell from submitting data to the table. This callback is invalid in row editing mode.</td></tr><tr><td>columns</td><td><code>any</code></td><td>-</td><td>Table column information BasicColumn[]</td></tr><tr><td>canResize</td><td><code>boolean</code></td><td><code>true</code></td><td>Whether the height can be adaptive (if placed in a PageWrapper component, do not enable the fixedHeight property of PageWrapper, and the two cannot be used at the same time)</td></tr><tr><td>clearSelectOnPageChange</td><td><code>boolean</code></td><td>false</td><td>Toggle whether to reset the page number</td></tr><tr><td>clickToRowSelect</td><td><code>boolean</code></td><td><code>true</code></td><td>Click on the row to check whether the checkbox or radio is selected. Need to be turned on</td></tr><tr><td>dataSource</td><td><code>any[]</code></td><td>-</td><td>Table data, non-api loading status</td></tr><tr><td>defSort</td><td><code>Recordable</code></td><td>-</td><td>Default sort parameters</td></tr><tr><td>ellipsis</td><td><code>boolean</code></td><td><code>true</code></td><td>Should text be displayed if it exceeds the width?</td></tr><tr><td>emptyDataIsShowTable</td><td><code>boolean</code></td><td><code>true</code></td><td>When the search form is enabled, whether to display the table when there is no data in the table</td></tr><tr><td>fetchSetting</td><td><code>FetchSetting</code></td><td>-</td><td>Interface request configuration, you can configure the request fields and response field names, see the global configuration instructions below</td></tr><tr><td>filterFn</td><td>(sortInfo: Partial&lt;Recordable&lt;string[]&gt;&gt;) =&gt; any</td><td>-</td><td>Custom filtering method. See global configuration instructions below</td></tr><tr><td>formConfig</td><td><code>any</code></td><td>-</td><td>For form configuration, <a href="https://help.jeecg.com/basicForm/useForm.html#useform-api%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">refer to Props of form component</a></td></tr><tr><td>handleSearchInfoFn</td><td><code>(T)=&gt;T</code></td><td>-</td><td>After opening the form, process the search criteria parameters before the request</td></tr><tr><td>inset</td><td><code>boolean</code></td><td><code>false</code></td><td>Cancel the default padding of the table</td></tr><tr><td>isTreeTable</td><td><code>boolean</code></td><td><code>false</code></td><td>Is tree table</td></tr><tr><td>immediate</td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to request the interface immediately after the component is loaded. If it is false, you need to use reload to load the table data.</td></tr><tr><td>indexColumnProps</td><td><code>any</code></td><td>-</td><td>Sequence column configuration BasicColumn</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>Table loading status</td></tr><tr><td>minHeight</td><td><code>number</code></td><td>-</td><td>Minimum table height</td></tr><tr><td>maxHeight</td><td><code>number</code></td><td>-</td><td>The maximum height of the table. If it exceeds the maximum height, a scroll bar will be displayed.</td></tr><tr><td>maxColumnWidth</td><td><code>number</code></td><td>-</td><td>Uniformly set the maximum width of the column</td></tr><tr><td>pagination</td><td><code>any</code></td><td>-</td><td>Paging information configuration, to <code>false</code> not display paging</td></tr><tr><td>rowKey</td><td>string | ((record: Recordable) =&gt; string)</td><td>-</td><td>The value of the table row key, which can be a string or a function</td></tr><tr><td>resizeHeightOffset</td><td><code>number</code></td><td>0</td><td>The table&#39;s adaptive height calculation result will subtract this value</td></tr><tr><td>rowSelection</td><td><code>any</code> -</td><td></td><td>Select Column Configuration</td></tr><tr><td>sortFn</td><td>(sortInfo: SorterResult) =&gt; any</td><td>-</td><td>Custom sorting method. See global configuration instructions below</td></tr><tr><td>showTableSetting</td><td><code>boolean</code></td><td><code>false</code></td><td>Display table settings tool</td></tr><tr><td>striped</td><td><code>boolean</code></td><td><code>true</code></td><td>Zebra print</td></tr><tr><td>showSummary</td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to display the total row</td></tr><tr><td>summaryData</td><td><code>any[]</code></td><td>-</td><td>Custom total data. If available, display the data</td></tr><tr><td>summaryFunc</td><td><code>(...arg) =&gt; any[]</code></td><td>-</td><td>How to calculate total rows</td></tr><tr><td>searchInfo</td><td><code>any</code></td><td>-</td><td>Additional request parameters</td></tr><tr><td>showIndexColumn</td><td><code>boolean</code></td><td>true</td><td>Whether to display the serial number column</td></tr><tr><td>showActionColumn</td><td><code>boolean</code></td><td>-</td><td>Whether to display the action bar</td></tr><tr><td>scroll</td><td><code>any</code></td><td>-</td><td>参考官方文档 scroll</td></tr><tr><td>tableSetting</td><td><code>TableSetting</code></td><td>-</td><td>表格设置工具配置，见下方 TableSetting</td></tr><tr><td>title</td><td><code>string</code> -</td><td></td><td>表格标题</td></tr><tr><td>titleHelpMessage</td><td><code>string ｜ string[]</code></td><td>-</td><td>表格标题右侧温馨提醒</td></tr><tr><td>useSearchForm</td><td><code>boolean</code></td><td>false</td><td>使用搜索表单</td></tr></tbody></table><h3 id="tablesetting" tabindex="-1"><a class="header-anchor" href="#tablesetting"><span>TableSetting</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  // 是否显示刷新按钮</span>
<span class="line">  redo?: boolean;</span>
<span class="line">  // 是否显示尺寸调整按钮</span>
<span class="line">  size?: boolean;</span>
<span class="line">  // 是否显示字段调整按钮</span>
<span class="line">  setting?: boolean;</span>
<span class="line">  // 是否显示全屏按钮</span>
<span class="line">  fullScreen?: boolean;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><blockquote><p>温馨提醒<br> 除以下事件外，<code>Ant Design Vue</code> 官方文档内的 event 也都支持，具体可以参考 <a href="https://3x.antdv.com/components/table-cn/#API" target="_blank" rel="noopener noreferrer">antv table</a>，事件的绑定和使用请参考 <strong>示例6.可编辑单元格</strong></p></blockquote><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>edit-end</td><td>Function({record, index, key, value})</td><td>单元格编辑完成触发</td></tr><tr><td>edit-cancel</td><td>Function({record, index, key, value})</td><td>单元格取消编辑触发</td></tr><tr><td>edit-row-end</td><td>Function()</td><td>行编辑结束触发</td></tr><tr><td>edit-change</td><td>Function({column,value,record})</td><td>单元格编辑组件的 value 发生变化时触发</td></tr><tr><td>fetch-success</td><td>Function({items,total})</td><td>接口请求成功后触发</td></tr><tr><td>fetch-error</td><td>Function(error)</td><td>错误信息</td></tr><tr><td>row-click</td><td>Function(record, index, event)</td><td>行点击触发</td></tr><tr><td>row-dbClick</td><td>Function(record, index, event)</td><td>行双击触发</td></tr><tr><td>row-contextmenu</td><td>Function(record, index, event)</td><td>行右键触发</td></tr><tr><td>row-mouseenter</td><td>Function(record, index, event)</td><td>行移入触发</td></tr><tr><td>row-mouseleave</td><td>Function(record, index, event)</td><td>行移出触发</td></tr><tr><td>selection-change</td><td>Function({keys，rows})</td><td>勾选事件触发</td></tr></tbody></table><h2 id="basiccolumn" tabindex="-1"><a class="header-anchor" href="#basiccolumn"><span>BasicColumn</span></a></h2><blockquote><p>除 参考官方 <a href="https://3x.antdv.com/components/table-cn/#Column" target="_blank" rel="noopener noreferrer">Column 配置</a>外，扩展以下参数</p></blockquote><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>auth</td><td><code>RoleEnum</code>｜<code>RoleEnum[]</code>｜<code>string</code>｜<code>string[]</code></td><td>-</td><td>-</td><td>根据权限编码来控制当前列是否显示</td></tr><tr><td>defaultHidden</td><td><code>boolean</code></td><td>false</td><td>-</td><td>默认隐藏，可在列配置显示</td></tr><tr><td>edit</td><td><code>boolean</code></td><td>-</td><td>-</td><td>是否开启单元格编辑</td></tr><tr><td>editRow</td><td><code>boolean</code></td><td>-</td><td>-</td><td>是否开启行编辑</td></tr><tr><td>editable</td><td><code>boolean</code></td><td>false</td><td>-</td><td>是否处于编辑状态</td></tr><tr><td>editComponent</td><td><code>ComponentType</code></td><td><code>Input</code></td><td>-</td><td>编辑组件</td></tr><tr><td>editComponentProps</td><td><code>any</code></td><td>-</td><td>-</td><td>对应编辑组件的 props</td></tr><tr><td>editRule</td><td>((text: string, record: Recordable) =&gt; Promise)</td><td>-</td><td>-</td><td>对应编辑组件的表单校验</td></tr><tr><td>editValueMap</td><td>(value: any) =&gt; string</td><td>-</td><td>-</td><td>对应单元格值枚举</td></tr><tr><td>format</td><td><code>CellFormat</code></td><td>-</td><td>-</td><td>单元格格式化</td></tr><tr><td>helpMessage</td><td><code>string｜string[]</code></td><td>-</td><td>-</td><td>列头右侧帮助文本</td></tr><tr><td>ifShow</td><td><code>boolean</code> ｜ ((action: ActionItem) =&gt; boolean)\`</td><td>-</td><td>-</td><td>根据业务状态来控制当前列是否显示</td></tr><tr><td>onEditRow</td><td><code>（）=&gt;void</code></td><td>-</td><td>-</td><td>触发行编辑</td></tr></tbody></table><p>参数 editComponent 的typescript类型是 <strong>EditComponentType</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export type ComponentType =</span>
<span class="line">  | &#39;ApiSelect&#39;</span>
<span class="line">  | &#39;Checkbox&#39;</span>
<span class="line">  | &#39;DatePicker&#39;</span>
<span class="line">  | &#39;Input&#39;</span>
<span class="line">  | &#39;InputNumber&#39;</span>
<span class="line">  | &#39;Select&#39;</span>
<span class="line">  | &#39;Switch&#39;</span>
<span class="line">  | &#39;TimePicker&#39;;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><p>参数format 的typescript类型是 <strong>CellFormat</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export type CellFormat =</span>
<span class="line">  | string</span>
<span class="line">  | ((text: string, record: Recordable, index: number) =&gt; string | number)</span>
<span class="line">  | Map&lt;string | number, any&gt;;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3><blockquote><p>温馨提醒<br> 除以下参数外，官方文档内的 slot 也都支持，具体可以参考 <a href="https://www.antdv.com/components/table-cn#API" target="_blank" rel="noopener noreferrer">antv table</a></p></blockquote><table><thead><tr><th>名称</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>expandedRowRender</td><td>展开行区域</td><td></td></tr><tr><td>headerTop</td><td>表格顶部区域（标题上方）</td><td>2.6.1</td></tr><tr><td>tableTitle</td><td>表格顶部左侧区域</td><td></td></tr><tr><td>toolbar</td><td>表格顶部右侧区域</td><td></td></tr></tbody></table><p><strong>Form-Slots</strong></p><p>当开启 form 表单后。以<code>form-xxxx</code>为前缀的 slot 会被视为 form 的 slot</p><p>xxxx 为 form 组件的 slot。具体参考 <a href="#!">form 组件文档</a></p><p>e.g</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">form-submitBefore</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>复制</p><h2 id="内置组件-只能用于表格内部" tabindex="-1"><a class="header-anchor" href="#内置组件-只能用于表格内部"><span>内置组件（只能用于表格内部）</span></a></h2><h3 id="tableaction" tabindex="-1"><a class="header-anchor" href="#tableaction"><span>TableAction</span></a></h3><blockquote><p>用于表格右侧操作列渲染</p></blockquote><p><strong>Props</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>actions</td><td><code>ActionItem[]</code></td><td>-</td><td>右侧操作列按钮列表</td><td></td></tr><tr><td>dropDownActions</td><td><code>ActionItem[]</code></td><td>-</td><td>右侧操作列更多下拉按钮列表</td><td></td></tr><tr><td>stopButtonPropagation</td><td><code>boolean</code></td><td><code>false</code></td><td>是否阻止操作按钮的click事件冒泡</td><td>2.5.0</td></tr></tbody></table><p><strong>ActionItem</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export interface ActionItem {</span>
<span class="line">  // 按钮文本</span>
<span class="line">  label: string;</span>
<span class="line">  // 是否禁用</span>
<span class="line">  disabled?: boolean;</span>
<span class="line">  // 按钮颜色</span>
<span class="line">  color?: &#39;success&#39; | &#39;error&#39; | &#39;warning&#39;;</span>
<span class="line">  // 按钮类型</span>
<span class="line">  type?: string;</span>
<span class="line">  // button组件props</span>
<span class="line">  props?: any;</span>
<span class="line">  // 按钮图标</span>
<span class="line">  icon?: string;</span>
<span class="line">  // 气泡确认框</span>
<span class="line">  popConfirm?: PopConfirm;</span>
<span class="line">  // 是否显示分隔线，v2.0.0+</span>
<span class="line">  divider?: boolean;</span>
<span class="line">  // 根据权限编码来控制当前列是否显示，v2.4.0+</span>
<span class="line">  auth?: RoleEnum | RoleEnum[] | string | string[];</span>
<span class="line">  // 根据业务状态来控制当前列是否显示，v2.4.0+</span>
<span class="line">  ifShow?: boolean | ((action: ActionItem) =&gt; boolean);</span>
<span class="line">  // 点击回调</span>
<span class="line">  onClick?: Fn;</span>
<span class="line">  // Tooltip配置，2.5.3以上版本支持，可以配置为string，或者完整的tooltip属性</span>
<span class="line">  tooltip?: string | TooltipProps</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><p>有关TooltipProps的说明，请参考<a href="https://3x.antdv.com/components/tooltip-cn#API" target="_blank" rel="noopener noreferrer">tooltip</a></p><p><strong>PopConfirm</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export interface PopConfirm {</span>
<span class="line">  title: string;</span>
<span class="line">  okText?: string;</span>
<span class="line">  cancelText?: string;</span>
<span class="line">  confirm: Fn;</span>
<span class="line">  cancel?: Fn;</span>
<span class="line">  icon?: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h3 id="tableimg" tabindex="-1"><a class="header-anchor" href="#tableimg"><span>TableImg</span></a></h3><blockquote><p>用于渲染单元格图片,支持图片预览</p></blockquote><p><strong>Props</strong></p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>imgList</td><td><code>string[]</code></td><td>-</td><td>-</td><td>图片地址列表</td><td></td></tr><tr><td>margin</td><td><code>number</code></td><td>4</td><td>-</td><td>常规模式下的图片间距</td><td>2.5.0</td></tr><tr><td>size</td><td><code>number</code></td><td>-</td><td>-</td><td>图片大小</td><td></td></tr><tr><td>simpleShow</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>简单显示模式（只显示第一张图片）</td><td>2.5.0</td></tr><tr><td>showBadge</td><td><code>boolean</code></td><td><code>true</code></td><td><code>true/false</code></td><td>简单模式下是否显示计数Badge</td><td>2.5.0</td></tr><tr><td>srcPrefix</td><td><code>string</code></td><td>-</td><td>-</td><td>在每一个图片src前插入的内容</td><td>2.5.0</td></tr></tbody></table><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>用于调用 Table 内部方法及 table 参数配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 表格的props也可以直接注册到useTable内部</span>
<span class="line">const [register, methods] = useTable(props);</span>
<span class="line"></span>
<span class="line">或者</span>
<span class="line"></span>
<span class="line">const { tableContext } = useListPage({</span>
<span class="line">    tableProps: props</span>
<span class="line">  });</span>
<span class="line">//注册table数据</span>
<span class="line">const [register,methods] = tableContext;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h3 id="register" tabindex="-1"><a class="header-anchor" href="#register"><span>register</span></a></h3><p>register 用于注册 useTable，如果需要使用<code>useTable</code>提供的 api，必须将 register 传入组件的 onRegister</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicTable @register=&quot;register&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicForm },</span>
<span class="line">    setup() {</span>
<span class="line">       const { tableContext } = useListPage({</span>
<span class="line">        tableProps: {</span>
<span class="line">          title: &#39;普通表格&#39;,</span>
<span class="line">          api: api ,//请求接口</span>
<span class="line">          columns: columns,//表格列</span>
<span class="line">          showActionColumn: false，//隐藏操作列</span>
<span class="line">         ...其他tableProps配置</span>
<span class="line">        },</span>
<span class="line">      });</span>
<span class="line"></span>
<span class="line">      //BasicTable绑定注册，methods包含的方法参考下方Methods的api</span>
<span class="line">      const [register,methods] = tableContext;</span>
<span class="line">      return { register };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制</p><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">| Method name                | Type                                                        | description                                                                                                                                                                                                                                             |</span>
<span class="line">| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |</span>
<span class="line">| setProps              | (props: Partial&lt;BasicTableProps&gt;) =&gt; void                   | Used to set table parameters                                                                                                                                                                                                                                 |</span>
<span class="line">| reload                | (opt?: FetchParams) =&gt; Promise&lt;void&gt;                        | 刷新表格                                                                                                                                                                                                                                         |</span>
<span class="line">| redoHeight            | () =&gt; void                                                  | 重新计算表格高度                                                                                                                                                                                                                                 |</span>
<span class="line">| setLoading            | (loading: boolean) =&gt; void                                  | 设置表格 loading 状态                                                                                                                                                                                                                            |</span>
<span class="line">| getDataSource         | &lt;T = Recordable&gt;() =&gt; T\\[\\]                                 | 获取表格数据                                                                                                                                                                                                                                     |</span>
<span class="line">| getRawDataSource      | &lt;T = Recordable&gt;() =&gt; T\\[\\]                                 | 获取后端接口原始数据                                                                                                                                                                                                                             |</span>
<span class="line">| getColumns            | (opt?: GetColumnsParams) =&gt; BasicColumn\\[\\]                 | 获取表头数据                                                                                                                                                                                                                                     |</span>
<span class="line">| setColumns            | (columns: BasicColumn\\[\\]\\|string\\[\\]) =&gt; void              | 设置表头数据                                                                                                                                                                                                                                     |</span>
<span class="line">| setTableData          | &lt;T = Recordable&gt;(values: T\\[\\]) =&gt; void                     | 设置表格数据                                                                                                                                                                                                                                     |</span>
<span class="line">| setPagination         | (info: Partial&lt;PaginationProps&gt;) =&gt; void                    | 设置分页信息                                                                                                                                                                                                                                     |</span>
<span class="line">| deleteSelectRowByKey  | (key: string) =&gt; void                                       | 根据 key 删除取消选中行                                                                                                                                                                                                                          |</span>
<span class="line">| getSelectRowKeys      | () =&gt; string\\[\\]                                            | 获取选中的keys                                                                                                                                                                                                                                   |</span>
<span class="line">| getSelectRows         | &lt;T = Recordable&gt;() =&gt; T\\[\\]                                 | 获取选中的rows                                                                                                                                                                                                                                   |</span>
<span class="line">| setSelectedRowKeys    | (rowKeys: string\\[\\]\\|number\\[\\]) =&gt; void                   | 设置选中行                                                                                                                                                                                                                                       |</span>
<span class="line">| getPaginationRef      | () =&gt;PaginationProps\\|boolean                               | 获取当前分页信息                                                                                                                                                                                                                                 |</span>
<span class="line">| getShowPagination     | () =&gt; boolean                                               | 获取当前是否显示分页                                                                                                                                                                                                                             |</span>
<span class="line">| setShowPagination     | (show: boolean) =&gt; Promise&lt;void&gt;                            | 设置当前是否显示分页                                                                                                                                                                                                                             |</span>
<span class="line">| getRowSelection       | () =&gt; TableRowSelection                                     | Get check box information                                                                                                                                                                                                                        |</span>
<span class="line">| updateTableData       | (index: number, key: string, value: any)=&gt;void              | Update table data                                                                                                                                                                                                                                |</span>
<span class="line">| updateTableDataRecord | (rowKey: string\\| number, record: Recordable) =&gt; Recordable | void                                                                                                                                                                                                                                             |</span>
<span class="line">| deleteTableDataRecord | (rowKey: string\\| number\\| string\\[\\]\\| number\\[\\]) =&gt; void | Dynamically delete the data of the specified row based on the unique rowKey. It can be used to update data locally without refreshing the entire table.                                                                                          |</span>
<span class="line">| insertTableDataRecord | (record: Recordable, index?: number) =&gt; Recordable\\| void   | The position of the inserted data row can be determined according to the passed index value. If no index value is passed, the data row will be inserted sequentially. It can be used to update data locally without refreshing the entire table. |</span>
<span class="line">| **getForm**           | () =&gt; FormActionType                                        | If the search area is enabled, you can use this function to get the form object function to operate                                                                                                                                              |</span>
<span class="line">| expandAll             | () =&gt; void                                                  | Expand the tree table                                                                                                                                                                                                                            |</span>
<span class="line">| collapseAll           | () =&gt; void                                                  | Collapse Tree Table                                                                                                                                                                                                                              |</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-configuration" tabindex="-1"><a class="header-anchor" href="#global-configuration"><span>Global Configuration</span></a></h2><p>In <a href="https://github.com/jeecgboot/jeecgboot-vue3/blob/master/src/settings/componentSetting.ts" target="_blank" rel="noopener noreferrer">componentsSettings,</a> you can configure global parameters. Used to unify the style of the entire project. You can pass values ​​through props to override</p>`,242)]))}const t=s(i,[["render",d]]),r=JSON.parse('{"path":"/syncadmin/ui-component-library/basic-table.html","title":"BasicTable","lang":"ko-KR","frontmatter":{"order":2},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/basic-table.md"}');export{t as comp,r as data};
