import{_ as n,c as a,a as e,o as i}from"./app-DeddRHAy.js";const l={};function d(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="using-antd-vue-native-form" tabindex="-1"><a class="header-anchor" href="#using-antd-vue-native-form"><span>Using Antd Vue native Form</span></a></h1><p>When the encapsulated BaseForm cannot meet the actual business needs, you can use the antd vue native form object for page layout. For specific usage, refer to <a href="https://2x.antdv.com/components/form-cn" target="_blank" rel="noopener noreferrer">Form usage</a><br> 1. Use BasicDrawer usage example</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;BasicDrawer v-bind=&quot;$attrs&quot; @register=&quot;registerDrawer&quot; title=&quot;添加用户&quot; width=&quot;500px&quot; @ok=&quot;handleSubmit&quot; destroyOnClose showFooter&gt;</span>
<span class="line">        &lt;a-form ref=&quot;formRef&quot;  :model=&quot;formModel&quot;&gt;</span>
<span class="line">            &lt;a-form-item label=&quot;用户名&quot; name=&quot;routerId&quot;&gt;</span>
<span class="line">                &lt;a-input v-model:value=&quot;router.routerId&quot; placeholder=&quot;请输入用户名&quot;/&gt;</span>
<span class="line">            &lt;/a-form-item&gt;</span>
<span class="line">        &lt;/a-form&gt;</span>
<span class="line">&lt;/BasicDrawer&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    const formRef = ref();</span>
<span class="line">    let formModel= reactive({});</span>
<span class="line"></span>
<span class="line">    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) =&gt; {</span>
<span class="line">      isUpdate.value = !!data?.isUpdate;</span>
<span class="line">      setDrawerProps({ confirmLoading: false });</span>
<span class="line">      if (unref(isUpdate)) {</span>
<span class="line">        formModel= Object.assign(formModel, data.record);</span>
<span class="line">      }</span>
<span class="line">    });</span>
<span class="line">    /**</span>
<span class="line">     * 提交表单</span>
<span class="line">     */</span>
<span class="line">    async function handleSubmit() {</span>
<span class="line">      await formRef.value.validate().then(() =&gt; {</span>
<span class="line">        try {</span>
<span class="line">           setDrawerProps({ confirmLoading: true })；</span>
<span class="line">           //提交表单</span>
<span class="line">          saveOrUpdateRoute({ formModel: formModel}).then(() =&gt; {</span>
<span class="line">               //刷新列表</span>
<span class="line">               emit(&#39;success&#39;);</span>
<span class="line">               closeDrawer();</span>
<span class="line">          });</span>
<span class="line">        } finally {</span>
<span class="line">            setDrawerProps({ confirmLoading: false });</span>
<span class="line">        }</span>
<span class="line">      });</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>2. Example of using BasicModal</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;BasicModal v-bind=&quot;$attrs&quot; @register=&quot;registerModal&quot; title=&quot;添加用户&quot; @ok=&quot;handleSubmit&quot; width=&quot;70%&quot;&gt;</span>
<span class="line">        &lt;a-form ref=&quot;formRef&quot;  :model=&quot;formModel&quot;&gt;</span>
<span class="line">            &lt;a-form-item label=&quot;用户名&quot; name=&quot;routerId&quot;&gt;</span>
<span class="line">                &lt;a-input v-model:value=&quot;router.routerId&quot; placeholder=&quot;请输入用户名&quot;/&gt;</span>
<span class="line">            &lt;/a-form-item&gt;</span>
<span class="line">        &lt;/a-form&gt;</span>
<span class="line">&lt;/BasicModal &gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    const formRef = ref();</span>
<span class="line">    let formModel= reactive({});</span>
<span class="line"></span>
<span class="line">    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) =&gt; {</span>
<span class="line">        setModalProps({confirmLoading: false});</span>
<span class="line">        reset()</span>
<span class="line">        isUpdate.value = !!data?.isUpdate;</span>
<span class="line">        if (unref(isUpdate)) {</span>
<span class="line">            formModel= Object.assign(formModel, data.record);</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 提交表单</span>
<span class="line">     */</span>
<span class="line">    async function handleSubmit() {</span>
<span class="line">      await formRef.value.validate().then(() =&gt; {</span>
<span class="line">        try {</span>
<span class="line">         setModalProps({ confirmLoading: true })；</span>
<span class="line">           //提交表单</span>
<span class="line">          saveOrUpdateRoute({ formModel: formModel}).then(() =&gt; {</span>
<span class="line">               //刷新列表</span>
<span class="line">               emit(&#39;success&#39;);</span>
<span class="line">               closeModal();</span>
<span class="line">          });</span>
<span class="line">        } finally {</span>
<span class="line">            setModalProps({ confirmLoading: false });</span>
<span class="line">        }</span>
<span class="line">      });</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,7)]))}const c=n(l,[["render",d]]),p=JSON.parse('{"path":"/syncadmin/front-end-experience/advanced/using-antd-vue-native-form.html","title":"Using Antd Vue native Form","lang":"ko-KR","frontmatter":{"order":6},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-experience/advanced/using-antd-vue-native-form.md"}');export{c as comp,p as data};
