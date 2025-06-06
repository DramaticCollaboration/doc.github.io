import{_ as s,c as a,a as l,o as e}from"./app-DGEuurYf.js";const i={};function t(o,n){return e(),a("div",null,n[0]||(n[0]=[l(`<h1 id="custom-form-layout" tabindex="-1"><a class="header-anchor" href="#custom-form-layout"><span>Custom form layout</span></a></h1><p>When the project cannot meet the actual business needs, you can use antd vue native layout. For specific usage, refer to <a href="https://2x.antdv.com/components/grid-cn" target="_blank" rel="noopener noreferrer">Grid usage.</a></p><p>1. Form layout, one row and two columns</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;BasicModal v-bind=&quot;$attrs&quot; @register=&quot;registerModal&quot; :title=&quot;getTitle&quot; :width=&quot;1000&quot; @ok=&quot;handleSubmit&quot;&gt;</span>
<span class="line">        &lt;a-form ref=&quot;formEl&quot; :model=&quot;planModel&quot; :label-col=&quot;{xs: {span: 24}, sm: {span: 6}}&quot; :wrapper-col=&quot;{xs: {span: 24}, sm: {span: 18}}&quot; :rules=&quot;validatorRules&quot;&gt;</span>
<span class="line">            &lt;a-row&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;日程标题&quot; name=&quot;title&quot;&gt;</span>
<span class="line">                        &lt;a-input placeholder=&quot;请输入标题&quot; v-model:value=&quot;planModel.title&quot;/&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;日程类型&quot;&gt;</span>
<span class="line">                        &lt;JDictSelectTag placeholder=&quot;请选择类型&quot; type=&quot;select&quot; v-model:value=&quot;planModel.type&quot; dictCode=&quot;eoa_plan_type&quot;/&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;提醒类型&quot; name=&quot;remindType&quot;&gt;</span>
<span class="line">                        &lt;a-select placeholder=&quot;请选择提醒类型&quot; mode=&quot;multiple&quot;  v-model:value=&quot;planModel.remindType&quot;&gt;</span>
<span class="line">                            &lt;a-select-option value=&quot;1&quot;&gt;邮件&lt;/a-select-option&gt;</span>
<span class="line">                            &lt;a-select-option value=&quot;2&quot;&gt;短信&lt;/a-select-option&gt;</span>
<span class="line">                            &lt;a-select-option value=&quot;4&quot;&gt;系统消息&lt;/a-select-option&gt;</span>
<span class="line">                        &lt;/a-select&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;紧急程度&quot; name=&quot;urgentLevel&quot;&gt;</span>
<span class="line">                        &lt;JDictSelectTag placeholder=&quot;请选择紧急程度&quot; type=&quot;select&quot; v-model:value=&quot;planModel.urgentLevel&quot; dictCode=&quot;urgent_level&quot;/&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;提醒时间&quot; name=&quot;remind&quot;&gt;</span>
<span class="line">                        &lt;JDictSelectTag placeholder=&quot;请选择提醒时间&quot; type=&quot;select&quot; v-model:value=&quot;planModel.remind&quot; dictCode=&quot;remindTime&quot;/&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;重复提醒&quot; name=&quot;reminders&quot;&gt;</span>
<span class="line">                        &lt;JDictSelectTag placeholder=&quot;请选择重复提醒&quot; type=&quot;select&quot; v-model:value=&quot;planModel.reminders&quot; dictCode=&quot;reminders&quot;/&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">                &lt;a-col :span=&quot;12&quot;&gt;</span>
<span class="line">                    &lt;a-form-item label=&quot;日程时间&quot; name=&quot;rangeTime&quot;&gt;</span>
<span class="line">                        &lt;a-range-picker v-bind=&quot;dateRangePickerProps&quot; v-model:value=&quot;planModel.rangeTime&quot; /&gt;</span>
<span class="line">                    &lt;/a-form-item&gt;</span>
<span class="line">                &lt;/a-col&gt;</span>
<span class="line">            &lt;/a-row&gt;</span>
<span class="line">        &lt;/a-form&gt;</span>
<span class="line">    &lt;/BasicModal&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">     省略....</span>
<span class="line">    const formEl = ref();</span>
<span class="line">    const isUpdate = ref(true);</span>
<span class="line">    //表单modal</span>
<span class="line">    const planModel = reactive({ });</span>
<span class="line">    //表单赋值</span>
<span class="line">    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) =&gt; {</span>
<span class="line">        setModalProps({confirmLoading: false});</span>
<span class="line">        isUpdate.value = !!data?.isUpdate;</span>
<span class="line">        if (unref(isUpdate)) {</span>
<span class="line">            const record = await queryById({id:data?.record?.id});</span>
<span class="line">            Object.assign(planModel, record);</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">    //标题</span>
<span class="line">    const getTitle = computed(() =&gt; (!unref(isUpdate) ? &#39;新增&#39; : &#39;编辑&#39;));</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 表单提交事件</span>
<span class="line">     * */</span>
<span class="line">    async function handleSubmit() {</span>
<span class="line">        formEl.value.validate().then(async() =&gt; {</span>
<span class="line">            try {</span>
<span class="line">                setModalProps({confirmLoading: true});</span>
<span class="line">                let formData = Object.assign({}, planModel)</span>
<span class="line">                await saveOrUpdate(formData,unref(isUpdate));</span>
<span class="line">               closeModal();</span>
<span class="line">               emit(&#39;success&#39;);</span>
<span class="line">            } finally {</span>
<span class="line">                setModalProps({confirmLoading: false});</span>
<span class="line">            }</span>
<span class="line">        }).catch((error: ValidateErrorEntity&lt;any&gt;) =&gt; {</span>
<span class="line">            console.log(&#39;error&#39;, error);</span>
<span class="line">        })</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line"></span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,5)]))}const d=s(i,[["render",t]]),p=JSON.parse('{"path":"/syncadmin/front-end-experience/custom-form-layout.html","title":"Custom form layout","lang":"ko-KR","frontmatter":{"order":8},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-experience/custom-form-layout.md"}');export{d as comp,p as data};
