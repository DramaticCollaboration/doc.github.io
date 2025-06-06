import{_ as n,c as e,a,o as t}from"./app-DGEuurYf.js";const l={};function i(d,s){return t(),e("div",null,s[0]||(s[0]=[a(`<h1 id="jpopup-pop-up-selection-component✔" tabindex="-1"><a class="header-anchor" href="#jpopup-pop-up-selection-component✔"><span>JPopup pop-up selection component✔</span></a></h1><h2 id="component-parameters" tabindex="-1"><a class="header-anchor" href="#component-parameters"><span>Component Parameters</span></a></h2><table><thead><tr><th>parameter</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>placeholder</td><td>string</td><td></td><td>placeholder</td></tr><tr><td>code</td><td>string</td><td>yes</td><td>Online report coding</td></tr><tr><td>sorter</td><td>String</td><td>no</td><td>Default sort column, usage: column name = desc | asc. Example:<code>age=asc</code></td></tr><tr><td>width</td><td>number</td><td>no</td><td>width</td></tr><tr><td>multi</td><td>Boolean</td><td>no</td><td>Whether to support multiple selection, the default value is false</td></tr><tr><td>param</td><td>object</td><td>no</td><td>Dynamic parameter object, manually add a record in the online report parameter, and then pass the parameter with the same name in your own page as a data query condition. If it is a string type, it needs to be set <strong>to</strong> the format of double quotes inside single quotes, such as {name: &quot;&#39;admin&#39;&quot;}</td></tr><tr><td>splitter</td><td>string</td><td>no</td><td>Delimiter, by default <code>,</code>, is only <code>,</code>useful for values ​​that are not separated by the database. The final database save is still<code>,</code></td></tr><tr><td>groupId</td><td>string</td><td>no</td><td>Group id</td></tr><tr><td>setFieldValue</td><td>function</td><td>no</td><td>Method to set form value, used in form mode</td></tr><tr><td>formElRef</td><td>object</td><td>no</td><td>Form component instance, used in v-model mode</td></tr><tr><td>fieldConfig</td><td>array</td><td>no</td><td>Popup callback parameter value configuration, see below for details</td></tr><tr><td>showAdvancedButton</td><td>Boolean</td><td>no</td><td>Whether popup is displayed expanded and closed, default true expand()</td></tr></tbody></table><p>fieldConfig configuration:</p><table><thead><tr><th>parameter</th><th>type</th><th>illustrate</th></tr></thead><tbody><tr><td>source</td><td>string</td><td>Value parameters in the pop-up list</td></tr><tr><td>target</td><td>string</td><td>Returns the target parameters in the form, multiple commas separated</td></tr></tbody></table><h2 id="show-results" tabindex="-1"><a class="header-anchor" href="#show-results"><span>Show results</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/c7a0fea49903f56df5f77e0a421e9ac97f13ca066733ec9ac8fa2c48e7791102.dat" alt=""></p><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples"><span>Usage Examples</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;BasicForm :labelWidth=&quot;200&quot; :schemas=&quot;schemas&quot; :actionColOptions=&quot;{ span: 24 }&quot; @submit=&quot;handleSubmit&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">    import { defineComponent } from &#39;vue&#39;;</span>
<span class="line">    import { BasicForm, FormSchema,JPopup, FormActionType} from &#39;/@/components/Form&#39;</span>
<span class="line">    import { useMessage } from &#39;/@/hooks/web/useMessage&#39;;</span>
<span class="line"></span>
<span class="line">    const schemas: FormSchema[] = [</span>
<span class="line">        {</span>
<span class="line">            field: &#39;pop&#39;,</span>
<span class="line">            component: &#39;JPopup&#39;,</span>
<span class="line">            label: &#39;JPopup示例&#39;,</span>
<span class="line">            helpMessage: [&#39;component模式&#39;],</span>
<span class="line">            colProps: {</span>
<span class="line">                span: 8,</span>
<span class="line">            },</span>
<span class="line">            componentProps: ({ formActionType }) =&gt; {</span>
<span class="line">                let { setFieldsValue } = formActionType</span>
<span class="line">                return {</span>
<span class="line">                    setFieldsValue,</span>
<span class="line">                    placeholder: &#39;请选择&#39;,</span>
<span class="line">                    code: &#39;report_user&#39;,</span>
<span class="line">                    fieldConfig: [{ source: &#39;username&#39;, target: &#39;pop&#39; }, { source: &#39;realname&#39;, target: &#39;popback&#39; }],</span>
<span class="line">                    multi: true,</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            field: &#39;pop&#39;,</span>
<span class="line">            component: &#39;Input&#39;,</span>
<span class="line">            label: &#39;popup回调值&#39;,</span>
<span class="line">            colProps: {</span>
<span class="line">                span: 8,</span>
<span class="line">            },</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            field: &#39;popback&#39;,</span>
<span class="line">            component: &#39;Input&#39;,</span>
<span class="line">            label: &#39;popback回调值&#39;,</span>
<span class="line">            colProps: {</span>
<span class="line">                span: 8,</span>
<span class="line">            },</span>
<span class="line">        }]</span>
<span class="line"></span>
<span class="line">    export default defineComponent({</span>
<span class="line">        components: { BasicForm,JPopup },</span>
<span class="line">        setup() {</span>
<span class="line">            const { createMessage } = useMessage();</span>
<span class="line">            return {</span>
<span class="line">                schemas,</span>
<span class="line">                handleSubmit: (values: any) =&gt; {</span>
<span class="line">                createMessage.success(&#39;click search,values:&#39; + JSON.stringify(values));</span>
<span class="line">                }</span>
<span class="line">           };</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,10)]))}const r=n(l,[["render",i]]),c=JSON.parse('{"path":"/syncadmin/ui-component-library/jpopup-pop-up-selection-component.html","title":"JPopup pop-up selection component✔","lang":"ko-KR","frontmatter":{"order":17},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/jpopup-pop-up-selection-component.md"}');export{r as comp,c as data};
