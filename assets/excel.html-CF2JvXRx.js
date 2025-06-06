import{_ as s,c as a,a as n,o as t}from"./app-DeddRHAy.js";const l={};function i(d,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="excel" tabindex="-1"><a class="header-anchor" href="#excel"><span>Excel</span></a></h1><p>Excel import and export operations</p><p>XLSX is used in the project. For specific documents, please refer to <a href="https://sheetjs.com/" target="_blank" rel="noopener noreferrer">the XLSX document</a></p><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span>Import</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;ImpExcel @success=&quot;loadDataSuccess&quot;&gt;</span>
<span class="line">    &lt;a-button class=&quot;m-3&quot;&gt;导入Excel&lt;/a-button&gt;</span>
<span class="line">  &lt;/ImpExcel&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { ImpExcel, ExcelData } from &#39;/@/components/Excel&#39;;</span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: { ImpExcel },</span>
<span class="line">    setup() {</span>
<span class="line">      function loadDataSuccess(excelDataList: ExcelData[]) {</span>
<span class="line">        tableListRef.value = [];</span>
<span class="line">        console.log(excelDataList);</span>
<span class="line">        for (const excelData of excelDataList) {</span>
<span class="line">          const {</span>
<span class="line">            header,</span>
<span class="line">            results,</span>
<span class="line">            meta: { sheetName },</span>
<span class="line">          } = excelData;</span>
<span class="line">          const columns: BasicColumn[] = [];</span>
<span class="line">          for (const title of header) {</span>
<span class="line">            columns.push({ title, dataIndex: title });</span>
<span class="line">          }</span>
<span class="line">          tableListRef.value.push({ title: sheetName, dataSource: results, columns });</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">      return {</span>
<span class="line">        loadDataSuccess,</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3><table><thead><tr><th>event</th><th>Callback parameters</th><th>illustrate</th></tr></thead><tbody><tr><td>success</td><td><code>(res:ExcelData)=&gt;void</code></td><td>Import success callback</td></tr><tr><td>error</td><td><code>()=&gt;void</code></td><td>Export Error</td></tr></tbody></table><h3 id="exceldata" tabindex="-1"><a class="header-anchor" href="#exceldata"><span>ExcelData</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>header:</td><td>string[];</td><td></td><td>table header</td></tr><tr><td>results:</td><td>T[];</td><td></td><td>Table data</td></tr><tr><td>meta:</td><td>{ sheetName: string };</td><td></td><td>table title</td></tr></tbody></table><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export"><span>Export</span></a></h2><p>For details, please refer to the complete example</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { jsonToSheetXlsx, aoaToSheetXlsx } from &#39;/@/components/Excel&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h3 id="array-format-data-export" tabindex="-1"><a class="header-anchor" href="#array-format-data-export"><span>Array format data export</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { aoaToSheetXlsx } from &#39;/@/components/Excel&#39;;</span>
<span class="line">// 保证data顺序与header一致</span>
<span class="line">aoaToSheetXlsx({</span>
<span class="line">  data: [],</span>
<span class="line">  header: [],</span>
<span class="line">  filename: &#39;二维数组方式导出excel.xlsx&#39;,</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="custom-export-formats" tabindex="-1"><a class="header-anchor" href="#custom-export-formats"><span>Custom export formats</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { jsonToSheetXlsx } from &#39;/@/components/Excel&#39;;</span>
<span class="line"></span>
<span class="line">jsonToSheetXlsx({</span>
<span class="line">  data,</span>
<span class="line">  filename,</span>
<span class="line">  write2excelOpts: {</span>
<span class="line">    // 可以是 xlsx/html/csv/txt</span>
<span class="line">    bookType,</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="export-in-json-format" tabindex="-1"><a class="header-anchor" href="#export-in-json-format"><span>Export in json format</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { jsonToSheetXlsx } from &#39;/@/components/Excel&#39;;</span>
<span class="line"></span>
<span class="line">jsonToSheetXlsx({</span>
<span class="line">  data,</span>
<span class="line">  filename: &#39;使用key作为默认头部.xlsx&#39;,</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">jsonToSheetXlsx({</span>
<span class="line">  data,</span>
<span class="line">  header: {</span>
<span class="line">    id: &#39;ID&#39;,</span>
<span class="line">    name: &#39;姓名&#39;,</span>
<span class="line">    age: &#39;年龄&#39;,</span>
<span class="line">    no: &#39;编号&#39;,</span>
<span class="line">    address: &#39;地址&#39;,</span>
<span class="line">    beginTime: &#39;开始时间&#39;,</span>
<span class="line">    endTime: &#39;结束时间&#39;,</span>
<span class="line">  },</span>
<span class="line">  filename: &#39;自定义头部.xlsx&#39;,</span>
<span class="line">  json2sheetOpts: {</span>
<span class="line">    // 指定顺序</span>
<span class="line">    header: [&#39;name&#39;, &#39;id&#39;],</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="function" tabindex="-1"><a class="header-anchor" href="#function"><span>Function</span></a></h2><table><thead><tr><th>method</th><th>Callback parameters</th><th>return value</th><th>illustrate</th></tr></thead><tbody><tr><td>jsonToSheetXlsx</td><td><code>Function(JsonToSheet)</code></td><td></td><td>json format data, export to excel</td></tr><tr><td>aoaToSheetXlsx</td><td><code>Function(AoAToSheet)</code></td><td></td><td>Array format, export to excel</td></tr></tbody></table><h3 id="jsontosheet-type" tabindex="-1"><a class="header-anchor" href="#jsontosheet-type"><span>JsonToSheet Type</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>data</td><td><code>T[]</code></td><td></td><td>Array of JSON objects</td></tr><tr><td>header?:</td><td><code>T</code>;</td><td></td><td>If the header is not set, the JSON object is used <code>key</code>as<code>header</code></td></tr><tr><td>filename?:</td><td><code>string</code></td><td><code>excel-list.xlsx</code></td><td>Exported file name</td></tr><tr><td>json2sheetOpts?:</td><td><code>JSON2SheetOpts</code></td><td></td><td><code>XLSX.utils.json_to_sheet</code>Optional parameters for calling</td></tr><tr><td>write2excelOpts?:</td><td><code>WritingOptions</code></td><td><code>{ bookType: &#39;xlsx&#39; }</code></td><td>Optional parameters for calling <code>XLSX.writeFile</code>, see the XLSX documentation for details</td></tr></tbody></table><h3 id="aoatosheet-type" tabindex="-1"><a class="header-anchor" href="#aoatosheet-type"><span>AoAToSheet Type</span></a></h3><table><thead><tr><th>Attributes</th><th>type</th><th>default value</th><th>illustrate</th></tr></thead><tbody><tr><td>data</td><td>T[][];</td><td></td><td>Two-dimensional array</td></tr><tr><td>header?:</td><td>T;</td><td></td><td>Header; no header if not set</td></tr><tr><td>filename?:</td><td>string;</td><td><code>excel-list.xlsx</code></td><td>Exported file name</td></tr><tr><td>write2excelOpts?:</td><td>WritingOptions;</td><td><code>{ bookType: &#39;xlsx&#39; }</code></td><td><code>XLSX.writeFile</code>Optional parameters for calling</td></tr></tbody></table>`,30)]))}const c=s(l,[["render",i]]),p=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/excel.html","title":"Excel","lang":"ko-KR","frontmatter":{"order":18},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/excel.md"}');export{c as comp,p as data};
