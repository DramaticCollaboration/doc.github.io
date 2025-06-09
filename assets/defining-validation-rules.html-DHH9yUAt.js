import{_ as s,c as n,a,o as l}from"./app-CU20V-HQ.js";const i={};function t(c,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="defining-validation-rules" tabindex="-1"><a class="header-anchor" href="#defining-validation-rules"><span>Defining validation rules</span></a></h1><p>Validation rules can be used to validate the codes in the form, for example, to validate complex codes.</p><h2 id="create-a-rule" tabindex="-1"><a class="header-anchor" href="#create-a-rule"><span>Create a rule</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/c53fa8092fbc07d72ed9037a5ab663dbbd36e1429066dba288b154da044aad7f.dat" alt=""></p><h3 id="local-rules" tabindex="-1"><a class="header-anchor" href="#local-rules"><span>Local rules</span></a></h3><p>Local rules check in order according to the number of digits you input.<br> You can add multiple lines of local rules and judge them line by line in the order they are added .<br> For example, if the number of digits in the first line is 3, the number of digits in the second line is 2, and the number of digits in the third line is 4, then in actual verification, the first line checks <code>1-3</code>the bit string, the second line starts from the end of the previous line and moves back 2 bits, that is, <code>4-5</code>bits, and the third line and so on, it can be concluded that it is <code>6-9</code>bits.</p><p><img src="https://lfs.k.topthink.com/lfs/78661356cbdfd6c4f1f38020ee99e8e6e428d1b82149dde144c1ab8a77160dcc.dat" alt=""></p><h3 id="global-rules" tabindex="-1"><a class="header-anchor" href="#global-rules"><span>Global Rules</span></a></h3><p>The difference between global rules and local rules is that global rules judge the entire string input by the user, rather than just the first few digits.<br> Global rules have running priorities, which are:<br> * <code>优先运行</code>will be run before local rules<br> * <code>最后运行</code>will be run after all local rules have been verified</p><p><img src="https://lfs.k.topthink.com/lfs/b54ae0503b4820261d47d72535ada71848760f68e636e21e7e3daccef7214109.dat" alt=""></p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><h3 id="step-1-create-a-new-form" tabindex="-1"><a class="header-anchor" href="#step-1-create-a-new-form"><span>Step 1: Create a new Form</span></a></h3><p><img src="https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1692948882347.png" alt=""></p><h3 id="step-2-introduce-tool-classes" tabindex="-1"><a class="header-anchor" href="#step-2-introduce-tool-classes"><span>Step 2: Introduce tool classes</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import { validateCheckRule } from &#39;/@/views/system/checkRule/check.rule.api&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h3 id="step-3-use-tool-classes-to-implement-validation-rules" tabindex="-1"><a class="header-anchor" href="#step-3-use-tool-classes-to-implement-validation-rules"><span>Step 3: Use tool classes to implement validation rules</span></a></h3><p><img src="https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1692948720340.png" alt=""></p><h3 id="step-4-check-the-effect" tabindex="-1"><a class="header-anchor" href="#step-4-check-the-effect"><span>Step 4: Check the effect</span></a></h3><p>Failed Effect:<br><img src="https://lfs.k.topthink.com/lfs/adf6f491c8251516bf3476c01bd33876a9ae317fb5764a686456812963bc07e2.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/a8a8a852de48590d9e32b64ff92bccbcb939a1da036461e506bb09a507c279c0.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/1c0b380c76933baa36b0e607cb61df4ef01de1151b94410c4610c5517b5db4b1.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/e859c57ce146507232a7df24ab7b3d4752be3d10110ca0daf777c4828aea177f.dat" alt=""><br> By effect:<br><img src="https://lfs.k.topthink.com/lfs/fdd859531aa8c348caa9c4a59c29be73499e1fc57766c4c9b16b463569cae53e.dat" alt=""></p><h2 id="complete-front-end-code" tabindex="-1"><a class="header-anchor" href="#complete-front-end-code"><span>Complete front-end code</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">    &lt;a-form style=&quot;padding: 40px&quot; :label-col=&quot;labelCol&quot; :wrapper-col=&quot;wrapperCol&quot;&gt;</span>
<span class="line">        &lt;a-form-item label=&quot;编码&quot; v-bind=&quot;validateInfos.code&quot;&gt;</span>
<span class="line">            &lt;a-input v-model:value=&quot;modelRef.code&quot; /&gt;</span>
<span class="line">        &lt;/a-form-item&gt;</span>
<span class="line">        &lt;a-form-item :wrapper-col=&quot;{ span: wrapperCol.span, offset: labelCol.span }&quot;&gt;</span>
<span class="line">            &lt;a-button type=&quot;primary&quot; @click.prevent=&quot;onSubmit&quot;&gt;提交&lt;/a-button&gt;</span>
<span class="line">            &lt;a-button style=&quot;margin-left: 20px&quot; @click=&quot;resetFields&quot;&gt;重置&lt;/a-button&gt;</span>
<span class="line">        &lt;/a-form-item&gt;</span>
<span class="line">    &lt;/a-form&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { defineComponent, reactive, toRaw } from &#39;vue&#39;;</span>
<span class="line">import { Form } from &#39;ant-design-vue&#39;;</span>
<span class="line">import { validateCheckRule } from &#39;/@/views/system/checkRule/check.rule.api&#39;;</span>
<span class="line">const useForm = Form.useForm;</span>
<span class="line">const labelCol = {</span>
<span class="line">    span: 4,</span>
<span class="line">};</span>
<span class="line">const wrapperCol = {</span>
<span class="line">    span: 14,</span>
<span class="line">};</span>
<span class="line">const modelRef = reactive({</span>
<span class="line">    code: &#39;&#39;,</span>
<span class="line">});</span>
<span class="line">const rulesRef = reactive({</span>
<span class="line">    code: [</span>
<span class="line">        {</span>
<span class="line">            required: true,</span>
<span class="line">            validator: (rule, value) =&gt; {</span>
<span class="line">                 return new Promise((resolve, reject) =&gt; {</span>
<span class="line">                     if (!value) reject(&#39;请输入编码&#39;);</span>
<span class="line">                        validateCheckRule(&#39;common&#39;, value)</span>
<span class="line">                            .then((res) =&gt; {</span>
<span class="line">                                if (res.success) {</span>
<span class="line">                                    resolve();</span>
<span class="line">                                } else {</span>
<span class="line">                                    reject(res.message);</span>
<span class="line">                                }</span>
<span class="line">                    })</span>
<span class="line">                    .catch((err) =&gt; {</span>
<span class="line">                        reject(&#39;网络环境差，请重试~&#39;);</span>
<span class="line">                    });</span>
<span class="line">                });</span>
<span class="line">            },</span>
<span class="line">        },</span>
<span class="line">    ],</span>
<span class="line">});</span>
<span class="line">const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);</span>
<span class="line">const onSubmit = () =&gt; {</span>
<span class="line">    validate()</span>
<span class="line">    .then(() =&gt; {</span>
<span class="line">        console.log(toRaw(modelRef));</span>
<span class="line">    })</span>
<span class="line">    .catch((err) =&gt; {</span>
<span class="line">        console.log(&#39;error&#39;, err);</span>
<span class="line">    });</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="how-to-call-the-generated-validation-rule-code-in-the-js-enhancement-of-the-online-form" tabindex="-1"><a class="header-anchor" href="#how-to-call-the-generated-validation-rule-code-in-the-js-enhancement-of-the-online-form"><span>How to call the generated validation rule code in the JS enhancement of the online form?</span></a></h3><p>You can use <code>getAction</code>methods to call the interface to verify the fields</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">beforeSubmit(row){</span>
<span class="line">	return new Promise((resolve, reject)=&gt;{</span>
<span class="line">        getAction(&#39;/sys/checkRule/checkByCode&#39;, { ruleCode:&#39;test&#39;,value: row.name}).then(res =&gt; {</span>
<span class="line">          console.log(&quot;校验结果res&quot;,res)</span>
<span class="line">           if(!res.success){</span>
<span class="line">            reject(res.message)</span>
<span class="line">          }else{</span>
<span class="line">            resolve()</span>
<span class="line">         }</span>
<span class="line">   })</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><img src="https://lfs.k.topthink.com/lfs/2f9d2e64d5ef0ebb2a96c18ddcb5db1e0bf2ff90debcf072b89fe357f8ac24fd.dat" alt=""></p><p><img src="https://lfs.k.topthink.com/lfs/2b54479a854ba7f3a8bc53d149f8e0b941be8b67db1980b801935be28bd09e6e.dat" alt=""></p>`,29)]))}const r=s(i,[["render",t]]),p=JSON.parse('{"path":"/syncboot/advanced-features/defining-validation-rules.html","title":"Defining validation rules","lang":"ko-KR","frontmatter":{"order":14},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncboot/advanced-features/defining-validation-rules.md"}');export{r as comp,p as data};
