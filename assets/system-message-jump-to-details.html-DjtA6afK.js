import{_ as n,c as e,a,o as i}from"./app-DeddRHAy.js";const l={};function p(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="system-message-jump-to-details" tabindex="-1"><a class="header-anchor" href="#system-message-jump-to-details"><span>System message Jump to details</span></a></h1><p>In the new version of vue3, click the message icon at the top to display my message list in a pop-up window. Click the details <em><strong>to jump to the relevant form page</strong></em> .<br><code>@Date 2022-08-31</code><br><img src="https://lfs.k.topthink.com/lfs/5d01b946281121752c73d3c6d1166a6185a688a1d4f1e1d10f1d9d305dcef640.dat" alt=""></p><p>The system currently supports 4 ways to jump:</p><ul><li>1. Process expediting--&gt;jump to the task handling list and pop up the task handling form</li><li>2. Node message notification--&gt;jump to the task handling page</li><li>3. Internal mailbox--&gt;Jump to the internal mailbox list and pop up the email details form</li><li>4. Ordinary system messages/announcements--&gt;Jump to my message list and pop up the message details form (default mode)</li></ul><p><strong>If expansion is required, the enumeration class needs to be modified to add corresponding records of busType and path.</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">package org.jeecg.modules.message.enums;</span>
<span class="line"></span>
<span class="line">import org.jeecg.common.system.annotation.EnumDict;</span>
<span class="line">import org.jeecg.common.system.vo.DictModel;</span>
<span class="line"></span>
<span class="line">import java.util.ArrayList;</span>
<span class="line">import java.util.List;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 消息跳转【vue3】</span>
<span class="line"> **/</span>
<span class="line">public enum Vue3MessageHrefEnum {</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 流程催办</span>
<span class="line">     */</span>
<span class="line">    BPM(&quot;bpm&quot;, &quot;/task/myHandleTaskInfo&quot;),</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 节点通知</span>
<span class="line">     */</span>
<span class="line">    BPM_TASK(&quot;bpm_task&quot;, &quot;/task/handle/{DETAIL_ID}&quot;),</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 邮件消息</span>
<span class="line">     */</span>
<span class="line">    EMAIL(&quot;email&quot;, &quot;/eoa/email&quot;);</span>
<span class="line"></span>
<span class="line">    String busType;</span>
<span class="line"></span>
<span class="line">    String path;</span>
<span class="line"></span>
<span class="line">    Vue3MessageHrefEnum(String busType, String path) {</span>
<span class="line">        this.busType = busType;</span>
<span class="line">        this.path = path;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public String getBusType() {</span>
<span class="line">        return busType;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public String getPath() {</span>
<span class="line">        return path;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>When saving a message to <code>sys_announcement</code>a table, two special attributes need to be set: busType, busId</strong></p><blockquote><p>Remark:</p><ol><li>If busType is not set, the fourth jump mentioned above will be executed by default</li><li>busType is used to identify enumeration and find the specific routing address path</li><li>busId is the unique identifier of the details page data. The entire details page data can be queried through this identifier.</li></ol></blockquote><p>The front-end sample code is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">import { getOne } from &#39;./mynews.api&#39;;</span>
<span class="line">import { useAppStore } from &#39;/@/store/modules/app&#39;;</span>
<span class="line">const appStore = useAppStore();</span>
<span class="line"></span>
<span class="line">onMounted(()=&gt;{</span>
<span class="line">  initHrefModal();</span>
<span class="line">});</span>
<span class="line">function initHrefModal(){</span>
<span class="line">    // 从appStore中获取参数</span>
<span class="line">    let params = appStore.getMessageHrefParams;</span>
<span class="line">    let detailId = params.detailId;</span>
<span class="line">    if(detailId){</span>
<span class="line">      // getOne这个查询代码未提供，就是根据ID从数据库查询数据</span>
<span class="line">      getOne(detailId).then(data=&gt;{</span>
<span class="line">        openDetail(true, {</span>
<span class="line">          record: data,</span>
<span class="line">          isUpdate: true,</span>
<span class="line">        });</span>
<span class="line">        // 弹窗详情后，清除历史参数</span>
<span class="line">        appStore.setMessageHrefParams(&#39;&#39;)</span>
<span class="line">      })</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,12)]))}const c=n(l,[["render",p]]),r=JSON.parse('{"path":"/syncadmin/front-end-experience/advanced/system-message-jump-to-details.html","title":"System message Jump to details","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-experience/advanced/system-message-jump-to-details.md"}');export{c as comp,r as data};
