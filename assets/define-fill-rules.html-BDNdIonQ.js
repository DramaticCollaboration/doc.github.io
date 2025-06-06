import{_ as n,c as s,a,o as l}from"./app-DGEuurYf.js";const i={};function t(r,e){return l(),s("div",null,e[0]||(e[0]=[a(`<h1 id="define-fill-rules" tabindex="-1"><a class="header-anchor" href="#define-fill-rules"><span>Define fill rules</span></a></h1><blockquote><p>Automatically generate rule codes, for example: order number generation, prefix + year, month, day, hour, minute, second timestamp</p></blockquote><p>How to create a rule implementation?</p><ul><li>Step 1: Implement the IFillRuleHandler interface</li></ul><p>Reference examples:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 填值规则Demo：生成订单号</span>
<span class="line"> * 【测试示例】</span>
<span class="line"> */</span>
<span class="line">public class OrderNumberRule implements IFillRuleHandler {</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    public Object execute(JSONObject params, JSONObject formData) {</span>
<span class="line">        String prefix = &quot;CN&quot;;</span>
<span class="line">        //订单前缀默认为CN 如果规则参数不为空，则取自定义前缀</span>
<span class="line">        if (params != null) {</span>
<span class="line">            Object obj = params.get(&quot;prefix&quot;);</span>
<span class="line">            if (obj != null) prefix = obj.toString();</span>
<span class="line">        }</span>
<span class="line">        SimpleDateFormat format = new SimpleDateFormat(&quot;yyyyMMddHHmmss&quot;);</span>
<span class="line">        int random = RandomUtils.nextInt(90) + 10;</span>
<span class="line">        String value = prefix + format.format(new Date()) + random;</span>
<span class="line">        // 根据formData的值的不同，生成不同的订单号</span>
<span class="line">        String name = formData.getString(&quot;name&quot;);</span>
<span class="line">        if (!StringUtils.isEmpty(name)) {</span>
<span class="line">            value += name;</span>
<span class="line">        }</span>
<span class="line">        return value;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li><p>Step 2: Configure in rule management<br><img src="https://lfs.k.topthink.com/lfs/1189b1e7b6a25fb591189173144e9f0cf623856221035cad0445defcfed8393e.dat" alt=""></p></li><li><p>Step 3: Execute rule generation through the interface</p></li></ul><p>parameter:</p><p>ruleCode | rule code<br> formData | form data JSON</p><p>Interface URL: /sys/fillRule/executeRuleByCode/{ruleCode}</p><p><img src="https://lfs.k.topthink.com/lfs/7ed051380eed58212f2eec9f4f01c78580dce70bf810fe7f749faed5b96e23b9.dat" alt=""></p><ul><li>Step 4: Batch encoding rule generation interface</li></ul><p>/sys/fillRule/executeRuleByCode/executeRuleByCodeBatch</p><p>For specific usage, refer to:<br> org.jeecg.modules.system.controller.SysFillRuleController#executeByRuleCodeBatch<br><img src="https://lfs.k.topthink.com/lfs/035ca52db9820c77e66714e427378af1fa12f2a47278078a8d513c15110f3659.dat" alt=""></p><h2 id="other-tips" tabindex="-1"><a class="header-anchor" href="#other-tips"><span>Other Tips</span></a></h2><h3 id="how-to-directly-call-the-generated-code-in-java-code" tabindex="-1"><a class="header-anchor" href="#how-to-directly-call-the-generated-code-in-java-code"><span>How to directly call the generated code in JAVA code?</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> * @param ruleCode 填值规则Code</span>
<span class="line"> * @param formData  表单参数</span>
<span class="line">FillRuleUtil.executeRule(String ruleCode, JSONObject formData)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="how-to-call-the-generated-code-in-the-front-end-js" tabindex="-1"><a class="header-anchor" href="#how-to-call-the-generated-code-in-the-front-end-js"><span>How to call the generated code in the front-end JS?</span></a></h3><p>The code can <code>put</code>be generated by requesting to call the background filling rule interface.</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;script setup&gt;</span>
<span class="line">import { defHttp } from &#39;/@/utils/http/axios&#39;;</span>
<span class="line">const ruleBaseURL = &#39;/sys/fillRule/executeRuleByCode/&#39;;</span>
<span class="line">import { ref } from &#39;vue&#39;;</span>
<span class="line">const orderNum = ref(&#39;&#39;);</span>
<span class="line">const url = ruleBaseURL + &#39;order_num_rule&#39;;</span>
<span class="line">const getOrderNum = () =&gt; {</span>
<span class="line">    defHttp.put({ url }, { isTransformResponse: false }).then((res) =&gt; {</span>
<span class="line">        // 执行成功，获取返回的值，并赋到页面上</span>
<span class="line">        if (res.success) {</span>
<span class="line">            orderNum.value = res.result;</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="how-to-call-the-generated-code-in-the-js-enhancement-of-the-online-form" tabindex="-1"><a class="header-anchor" href="#how-to-call-the-generated-code-in-the-js-enhancement-of-the-online-form"><span>How to call the generated code in the JS enhancement of the Online form?</span></a></h3><p>You can use <code>putAction</code>methods to call the interface to generate code<br><img src="https://lfs.k.topthink.com/lfs/ac5a225766c56d860ebce2b9a807e0fd846c3baee81cd9e337ee0cff015fbc20.dat" alt=""></p><h3 id="how-to-call-the-generated-code-in-the-form-designer-js-enhancement" tabindex="-1"><a class="header-anchor" href="#how-to-call-the-generated-code-in-the-form-designer-js-enhancement"><span>How to call the generated code in the form designer JS enhancement?</span></a></h3><p>You can use <code>api.put()</code>the method to get the value of the fill-in rule, and then <code>api.setFormData()</code>assign it to the page through the method.<br> For how to use the api, see <code>表单设计器--&gt;高级操作手册--&gt;JS增强</code>the document</p><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 获取所有 form data</span>
<span class="line">var formData = api.getFormData() || {}</span>
<span class="line">// 请求后台的填值规则接口地址</span>
<span class="line">var url = &#39;/sys/fillRule/executeRuleByCode/&#39;</span>
<span class="line">var ruleCode = &#39;order_num_rule&#39;</span>
<span class="line">api.put(url + ruleCode, formData).then(res =&gt; {</span>
<span class="line">  // 执行成功，获取返回的值，并赋到页面上</span>
<span class="line">  if (res.success) {</span>
<span class="line">    var value = res.result</span>
<span class="line">    api.setFormData(&#39;orderNum&#39;, value)</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,31)]))}const d=n(i,[["render",t]]),p=JSON.parse('{"path":"/syncboot/advanced-features/define-fill-rules.html","title":"Define fill rules","lang":"ko-KR","frontmatter":{"order":13},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/advanced-features/define-fill-rules.md"}');export{d as comp,p as data};
