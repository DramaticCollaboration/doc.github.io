import{_ as t,c as n,a as d,o as s}from"./app-CU20V-HQ.js";const a={};function i(l,e){return s(),n("div",null,e[0]||(e[0]=[d(`<h1 id="tree" tabindex="-1"><a class="header-anchor" href="#tree"><span>Tree</span></a></h1><p>Encapsulate <code>antv</code>the tree component</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;BasicTree :treeData=&quot;treeData&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">  import { BasicTree } from &#39;/@/components/Tree/index&#39;;</span>
<span class="line">  import { treeData } from &#39;./data&#39;;</span>
<span class="line">  import { CollapseContainer } from &#39;/@/components/Container/index&#39;;</span>
<span class="line">  import { TreeItem } from &#39;/@/components/Tree/index&#39;;</span>
<span class="line"></span>
<span class="line">  export const treeData: TreeItem[] = [</span>
<span class="line">    {</span>
<span class="line">      title: &#39;parent 1&#39;,</span>
<span class="line">      key: &#39;0-0&#39;,</span>
<span class="line">      icon: &#39;home|svg&#39;,</span>
<span class="line">      children: [</span>
<span class="line">        { title: &#39;leaf&#39;, key: &#39;0-0-0&#39; },</span>
<span class="line">        {</span>
<span class="line">          title: &#39;leaf&#39;,</span>
<span class="line">          key: &#39;0-0-1&#39;,</span>
<span class="line">          children: [</span>
<span class="line">            { title: &#39;leaf&#39;, key: &#39;0-0-0-0&#39; },</span>
<span class="line">            { title: &#39;leaf&#39;, key: &#39;0-0-0-1&#39; },</span>
<span class="line">          ],</span>
<span class="line">        },</span>
<span class="line">      ],</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;parent 2&#39;,</span>
<span class="line">      key: &#39;1-1&#39;,</span>
<span class="line">      icon: &#39;home|svg&#39;,</span>
<span class="line">      children: [</span>
<span class="line">        { title: &#39;leaf&#39;, key: &#39;1-1-0&#39; },</span>
<span class="line">        { title: &#39;leaf&#39;, key: &#39;1-1-1&#39; },</span>
<span class="line">      ],</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      title: &#39;parent 3&#39;,</span>
<span class="line">      key: &#39;2-2&#39;,</span>
<span class="line">      icon: &#39;home|svg&#39;,</span>
<span class="line">      children: [</span>
<span class="line">        { title: &#39;leaf&#39;, key: &#39;2-2-0&#39; },</span>
<span class="line">        { title: &#39;leaf&#39;, key: &#39;2-2-1&#39; },</span>
<span class="line">      ],</span>
<span class="line">    },</span>
<span class="line">  ];</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { BasicTree, CollapseContainer },</span>
<span class="line">    setup() {</span>
<span class="line">      return { treeData };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Warm reminder</p><p>In addition to the following parameters, props in the official documentation are also supported. For details, please refer to <a href="https://2x.antdv.com/components/tree-cn/#Tree-props" target="_blank" rel="noopener noreferrer">antv tree</a></p></div><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>Optional Values</th><th>illustrate</th><th>Version</th></tr></thead><tbody><tr><td>treeData</td><td><code>TreeItem[]</code></td><td>-</td><td>-</td><td>Tree component data</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>Right-click menu list</td><td></td></tr><tr><td>checkedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>Selected Nodes</td><td></td></tr><tr><td>selectedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>Selected Node</td><td></td></tr><tr><td>expandedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>Expanded Node</td><td></td></tr><tr><td>actionList</td><td><code>ActionItem[]</code></td><td>-</td><td>-</td><td>Move the mouse to the right to display the operation button list</td><td></td></tr><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>Custom title string</td><td></td></tr><tr><td>toolbar</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Whether to display the toolbar</td><td></td></tr><tr><td>search</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Show search box</td><td></td></tr><tr><td>clickRowToExpand</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Whether to automatically expand the row when clicking it</td><td></td></tr><tr><td>beforeRightClick</td><td><code>(node, event)=&gt;ContextMenuItem[]</code></td><td>-</td><td>-</td><td>Right-click callback, which can return the right-click menu list data to generate the right-click menu</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>Right-click menu list data</td><td></td></tr><tr><td>defaultExpandLevel</td><td><code>string ｜ number</code></td><td>-</td><td>-</td><td>The default level to expand after the first render</td><td>2.4.1</td></tr><tr><td>defaultExpandAll</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>Default all after initial rendering</td><td>2.4.1</td></tr><tr><td>searchValue(v-model)</td><td><code>string</code></td><td>-</td><td>-</td><td>Current search term</td><td>2.7.1</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">Tips</p><p><code>defaultExpandLevel</code>, <code>defaultExpandAll</code>only takes effect during <strong>the first rendering</strong> . If <code>basicTree</code>it is set after creation (such as asynchronous data), you need to call the provided , to perform the expansion <code>treeData</code>after the update<code>basicTree\`\`expandAll\`\`filterByLevel</code></p></div><p><strong>ActionItem</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  // 渲染的图标</span>
<span class="line">  render: (record: any) =&gt; any;</span>
<span class="line">  // 是否显示</span>
<span class="line">  show?: boolean | ((record: Recordable) =&gt; boolean);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>ContextMenuItem</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">  // 文本</span>
<span class="line">  label: string;</span>
<span class="line">  // 图标</span>
<span class="line">  icon?: string;</span>
<span class="line">  // 是否禁用</span>
<span class="line">  disabled?: boolean;</span>
<span class="line">  // 事件</span>
<span class="line">  handler?: (...arg) =&gt; any;</span>
<span class="line">  // 是否显示分隔线</span>
<span class="line">  divider?: boolean;</span>
<span class="line">  // 子级菜单数据</span>
<span class="line">  children?: ContextMenuItem[];</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Warm reminder</p><p>All slots in the official documentation are supported. For details, please refer to <a href="https://2x.antdv.com/components/tree-cn/#Tree-props" target="_blank" rel="noopener noreferrer">antv tree</a></p></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><table><thead><tr><th>name</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>checkAll</td><td><code>(checkAll: boolean) =&gt; void</code></td><td>Select All</td></tr><tr><td>expandAll</td><td><code>(expandAll: boolean) =&gt; void</code></td><td>Expand All</td></tr><tr><td>setExpandedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>Set the expansion node</td></tr><tr><td>getExpandedKeys</td><td><code>() =&gt; Keys</code></td><td>Get the expanded node</td></tr><tr><td>setSelectedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>Set the selected node</td></tr><tr><td>getSelectedKeys</td><td><code>() =&gt; Keys</code></td><td>Get the selected node</td></tr><tr><td>setCheckedKeys</td><td><code>(keys: CheckKeys) =&gt; void</code></td><td>Set the check node</td></tr><tr><td>getCheckedKeys</td><td><code>() =&gt; CheckKeys</code></td><td>Get the checked node</td></tr><tr><td>filterByLevel</td><td><code>(level: number) =&gt; void</code></td><td>Display the specified level</td></tr><tr><td>insertNodeByKey</td><td><code>(opt: InsertNodeParams) =&gt; void</code></td><td>Insert a child node into the specified node</td></tr><tr><td>deleteNodeByKey</td><td><code>(key: string) =&gt; void</code></td><td>Delete a node based on key</td></tr><tr><td>updateNodeByKey</td><td><code>(key: string, node: Omit&lt;TreeItem, &#39;key&#39;&gt;) =&gt; void</code></td><td>Update a node based on a key</td></tr><tr><td>setSearchValue</td><td><code>(value: string) =&gt; void</code></td><td>Set current search term (v2.7.1)</td></tr><tr><td>getSearchValue</td><td><code>() =&gt; string</code></td><td>Get the current search term (v2.7.1)</td></tr></tbody></table>`,19)]))}const c=t(a,[["render",i]]),o=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/tree.html","title":"Tree","lang":"ko-KR","frontmatter":{"order":19},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/tree.md"}');export{c as comp,o as data};
