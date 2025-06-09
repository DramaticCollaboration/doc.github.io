import{_ as n,c as a,a as e,o as l}from"./app-CC5quYyA.js";const i={};function t(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="custom-list-query" tabindex="-1"><a class="header-anchor" href="#custom-list-query"><span>Custom list query</span></a></h1><p>When the encapsulated BaseForm search cannot meet the actual business needs, you can use the antd vue native form object for page layout. For specific usage, refer to <a href="https://2x.antdv.com/components/form-cn" target="_blank" rel="noopener noreferrer">Form usage</a></p><p>1. Example of using BasicTable</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div&gt;</span>
<span class="line">    &lt;!--自定义查询区域--&gt;</span>
<span class="line">    &lt;div class=&quot;jeecg-basic-table-form-container&quot; @keyup.enter=&quot;searchQuery&quot;&gt;</span>
<span class="line">        &lt;a-form :model=&quot;queryParam&quot; :label-col=&quot;labelCol&quot; :wrapper-col=&quot;wrapperCol&quot;&gt;</span>
<span class="line">            &lt;a-row :gutter=&quot;24&quot;&gt;</span>
<span class="line">                &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;用户名&quot;&gt;</span>
<span class="line">                        &lt;a-input placeholder=&quot;请输入名称模糊查询&quot; v-model:value=&quot;queryParam.name&quot;&gt;&lt;/a-input&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                 &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                     &lt;a-form-item label=&quot;年龄&quot;&gt;</span>
<span class="line">                         &lt;a-input placeholder=&quot;最小年龄&quot; type=&quot;ge&quot; v-model:value=&quot;queryParam.age_begin&quot; style=&quot;width:calc(50% - 15px);&quot;&gt;&lt;/a-input&gt;</span>
<span class="line">                         &lt;span&gt;~&lt;/span&gt;</span>
<span class="line">                         &lt;a-input placeholder=&quot;最大年龄&quot; type=&quot;le&quot; v-model:value=&quot;queryParam.age_end&quot; style=&quot;width:calc(50% - 15px);&quot;&gt;&lt;/a-input&gt;</span>
<span class="line">                     &lt;/a-form-item&gt;</span>
<span class="line">                 &lt;/a-col&gt;</span>
<span class="line">                &lt;template v-if=&quot;toggleSearchStatus&quot;&gt;</span>
<span class="line">                    &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                        &lt;a-form-item label=&quot;性别&quot;&gt;</span>
<span class="line">                            &lt;JDictSelectTag v-model:value=&quot;queryParam.sex&quot; placeholder=&quot;请选择性别&quot; dictCode=&quot;sex&quot;/&gt;</span>
<span class="line">                        &lt;/a-form-item&gt;</span>
<span class="line">                    &lt;/a-col&gt;</span>
<span class="line">                    &lt;a-col :lg=&quot;8&quot;&gt;</span>
<span class="line">                        &lt;a-form-item label=&quot;选择用户&quot;&gt;</span>
<span class="line">                            &lt;JDictSelectTag v-model:value=&quot;queryParam.id&quot; placeholder=&quot;请选择用户&quot; dictCode=&quot;demo,name,id&quot;/&gt;</span>
<span class="line">                        &lt;/a-form-item&gt;</span>
<span class="line">                    &lt;/a-col&gt;</span>
<span class="line">                &lt;/template&gt;</span>
<span class="line">                &lt;span style=&quot;float: left;overflow: hidden;&quot; class=&quot;table-page-search-submitButtons&quot;&gt;</span>
<span class="line">                    &lt;a-col :lg=&quot;6&quot;&gt;</span>
<span class="line">                      &lt;a-button type=&quot;primary&quot; preIcon=&quot;ant-design:search-outlined&quot; @click=&quot;searchQuery&quot;&gt;查询&lt;/a-button&gt;</span>
<span class="line">                      &lt;a-button type=&quot;primary&quot; preIcon=&quot;ant-design:reload-outlined&quot; @click=&quot;searchReset&quot; style=&quot;margin-left: 8px&quot;&gt;重置&lt;/a-button&gt;</span>
<span class="line">                      &lt;a @click=&quot;toggleSearchStatus = !toggleSearchStatus&quot; style=&quot;margin-left: 8px&quot;&gt;</span>
<span class="line">                        {{ toggleSearchStatus ? &#39;收起&#39; : &#39;展开&#39; }}</span>
<span class="line">                        &lt;Icon :icon=&quot;toggleSearchStatus ? &#39;ant-design:up-outlined&#39; : &#39;ant-design:down-outlined&#39;&quot;/&gt;</span>
<span class="line">                      &lt;/a&gt;</span>
<span class="line">                    &lt;/a-col&gt;</span>
<span class="line">              &lt;/span&gt;</span>
<span class="line">            &lt;/a-row&gt;</span>
<span class="line">        &lt;/a-form&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;BasicTable @register=&quot;registerTable&quot; :rowSelection=&quot;rowSelection&quot;&gt;</span>
<span class="line">      省略 ......</span>
<span class="line">    &lt;/BasicTable&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">省略.......</span>
<span class="line">//-----自定义查询----begin--------</span>
<span class="line">const labelCol = reactive({</span>
<span class="line">    xs: {span: 24},</span>
<span class="line">    sm: {span: 7},</span>
<span class="line">})</span>
<span class="line">const wrapperCol = reactive({</span>
<span class="line">    xs: {span: 24},</span>
<span class="line">    sm: {span: 16},</span>
<span class="line">})</span>
<span class="line">const toggleSearchStatus = ref(false);</span>
<span class="line">const queryParam = reactive({</span>
<span class="line">    name: &#39;&#39;,</span>
<span class="line">    age_begin: &#39;&#39;,</span>
<span class="line">    age_end: &#39;&#39;,</span>
<span class="line">    sex: &#39;&#39;,</span>
<span class="line">    id: &#39;&#39;,</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">function searchQuery(){</span>
<span class="line">    setProps({searchInfo:toRaw(queryParam)});</span>
<span class="line">    reload()</span>
<span class="line">}</span>
<span class="line">function searchReset(){</span>
<span class="line">    Object.assign(queryParam,{ name: &#39;&#39;,age_begin: &#39;&#39;,age_end: &#39;&#39;,sex: &#39;&#39;,id: &#39;&#39;});</span>
<span class="line">    reload();</span>
<span class="line">}</span>
<span class="line">//自定义查询----end---------</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,5)]))}const o=n(i,[["render",t]]),p=JSON.parse('{"path":"/syncadmin/front-end-experience/custom-list-query.html","title":"Custom list query","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncadmin/front-end-experience/custom-list-query.md"}');export{o as comp,p as data};
