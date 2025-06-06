import{_ as s,c as a,a as n,o as t}from"./app-QFoJTndn.js";const i={};function l(d,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="message-push-interface" tabindex="-1"><a class="header-anchor" href="#message-push-interface"><span>Message push interface</span></a></h1><p>Unified message push interface, through this interface, four types of message push are implemented: system message, mailbox message, enterprise WeChat, and DingTalk message.</p><h2 id="_1-main-api-description" tabindex="-1"><a class="header-anchor" href="#_1-main-api-description"><span>1. Main API Description</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//注入</span>
<span class="line">@Autowired</span>
<span class="line">private ISysBaseAPI sysBaseApi;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//推送消息</span>
<span class="line">MessageDTO messageDTO = new MessageDTO();</span>
<span class="line">messageDTO.setToAll(false);</span>
<span class="line">messageDTO.setToUser(applyUserId);</span>
<span class="line">messageDTO.setTitle(&quot;消息发送测试&quot;);</span>
<span class="line">//推送消息类型</span>
<span class="line">messageDTO.setType(MessageTypeEnum.XT.getType());</span>
<span class="line">messageDTO.setIsMarkdown(false);</span>
<span class="line">messageDTO.setFromUser(&quot;system&quot;);</span>
<span class="line">messageDTO.setContent(templateContext);</span>
<span class="line">log.info(&quot;------------消息发送对象:{}--------------&quot;, JSON.toJSONString(messageDTO));</span>
<span class="line">iSysBaseAPI.sendTemplateMessage(messageDTO);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>be careful</p><ol><li>type is the message type. Currently, four types are supported: system message, email message, enterprise WeChat, and DingTalk message</li><li>templateCode template code, corresponding to the menu [Message Center] -&gt; [Message Template Management]</li><li>dataParsing template data, need to be customized</li><li>content, if you do not need to parse the data through the template, you can directly pass in a fixed text to send</li></ol></blockquote><p>Attribute Description</p><table><thead><tr><th>Attributes</th><th>type</th><th>illustrate</th></tr></thead><tbody><tr><td>fromUser</td><td>string</td><td>Sender (user login account)</td></tr><tr><td>toUser</td><td>string</td><td>Send to (user login account)</td></tr><tr><td>toAll</td><td>boolean</td><td>Send to Everyone</td></tr><tr><td>title</td><td>string</td><td>Message Subject</td></tr><tr><td>content</td><td>string</td><td>Message content</td></tr><tr><td>templateCode</td><td>string</td><td>Template code corresponding to the template message</td></tr><tr><td>type</td><td>string</td><td>Message type: refer to enumeration org.jeecg.common.constant.enums.MessageTypeEnum</td></tr><tr><td>data</td><td>Map&lt;String, Object&gt;</td><td>Parse the data corresponding to the template content</td></tr></tbody></table><h2 id="_2-push-sample-code" tabindex="-1"><a class="header-anchor" href="#_2-push-sample-code"><span>2. Push sample code</span></a></h2><h4 id="example-1-send-a-notification-to-someone-when-the-process-ends" tabindex="-1"><a class="header-anchor" href="#example-1-send-a-notification-to-someone-when-the-process-ends"><span>Example 1: Send a notification to someone when the process ends</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//推送消息正文内容</span>
<span class="line">String templateContext = &quot;从工作表获取,查找结果无数据,工作流【&quot;+process+&quot;】,节点【&quot;+node+&quot;】&quot;;</span>
<span class="line"></span>
<span class="line">String title = &quot;流程结束通知&quot;;</span>
<span class="line">MessageDTO messageDTO = new MessageDTO();</span>
<span class="line">messageDTO.setToAll(false);</span>
<span class="line">messageDTO.setToUser(&quot;admin&quot;);</span>
<span class="line">messageDTO.setTitle(&quot;测试推送&quot;);</span>
<span class="line">messageDTO.setType(MessageTypeEnum.XT.getType());</span>
<span class="line">messageDTO.setIsMarkdown(false);</span>
<span class="line">messageDTO.setFromUser(&quot;system&quot;);</span>
<span class="line">messageDTO.setContent(templateContext);</span>
<span class="line">log.info(&quot;------------消息发送对象:{}--------------&quot;, JSON.toJSONString(messageDTO));</span>
<span class="line">iSysBaseAPI.sendTemplateMessage(messageDTO);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Other types of description</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> enum TaskTipTypeEnum {</span>
<span class="line"></span>
<span class="line"> XT(&quot;system&quot;,  &quot;bpm_system&quot;),</span>
<span class="line"> YJ(&quot;email&quot;,  &quot;bpm_email&quot;),</span>
<span class="line"> DD(&quot;dingtalk&quot;, &quot;bpm_dingtalk&quot;),</span>
<span class="line"> QYWX(&quot;wechat_enterprise&quot;, &quot;bpm_wechat_enterprise&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="example-2-pushing-messages-through-template-code" tabindex="-1"><a class="header-anchor" href="#example-2-pushing-messages-through-template-code"><span>Example 2: Pushing messages through template code</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">MessageDTO md = new MessageDTO();</span>
<span class="line">md.setToAll(false);</span>
<span class="line">md.setTitle(&quot;消息发送测试&quot;);</span>
<span class="line">md.setTemplateCode(&quot;bpm_cuiban&quot;);</span>
<span class="line">md.setToUser(&quot;admin,jeecg&quot;);</span>
<span class="line">md.setType(msgParams.getMsgType());</span>
<span class="line">String testData = msgParams.getTestData();</span>
<span class="line">if(oConvertUtils.isNotEmpty(testData)){</span>
<span class="line">   Map&lt;String, Object&gt; data = JSON.parseObject(testData, Map.class);</span>
<span class="line">   md.setData(data);</span>
<span class="line">}</span>
<span class="line">sysBaseApi.sendTemplateMessage(md);</span>
<span class="line">return result.success(&quot;消息发送成功！&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><img src="https://lfs.k.topthink.com/lfs/76c33dccbed504c302c0ed1c6397123bf4b940e4c5a485491d67afb8b868a2d4.dat" alt=""></p><h2 id="_3-more-api-descriptions" tabindex="-1"><a class="header-anchor" href="#_3-more-api-descriptions"><span>3. More API descriptions</span></a></h2><h3 id="_3-1-push-messages-through-message-templates" tabindex="-1"><a class="header-anchor" href="#_3-1-push-messages-through-message-templates"><span>3.1 Push messages through message templates</span></a></h3><blockquote><p>By designing templates, you can customize the format, support Markdown, rich text, and normal text, and send emails and system messages.</p></blockquote><ul><li><ol><li>First design the message template<br> menu: Message Center -&gt; Template Management<br><img src="https://lfs.k.topthink.com/lfs/8f0a6c3cf7e83ded4a7ccae8d84df42ddcd89e6d896c247f7f3c34685e420820.dat" alt=""></li></ol></li><li><ol start="2"><li>Call ISysBaseAPI interface to send system messages</li></ol></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 发送系统消息</span>
<span class="line"> * @param fromUser 发送人(用户登录账户)</span>
<span class="line"> * @param toUser   发送给(用户登录账户)</span>
<span class="line"> * @param title    通知标题</span>
<span class="line"> * @param map         模板参数</span>
<span class="line"> * @param templateCode  模板编码</span>
<span class="line"> */</span>
<span class="line">public void sendSysAnnouncement(String fromUser, String toUser,String title, Map&lt;String, String&gt; map, String templateCode);</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 通过消息中心模板，生成推送内容</span>
<span class="line"> *</span>
<span class="line"> * @param templateCode 模板编码</span>
<span class="line"> * @param map          模板参数</span>
<span class="line"> * @return</span>
<span class="line"> */</span>
<span class="line">public String parseTemplateByCode(String templateCode, Map&lt;String, String&gt; map);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-2-advanced-application-examples" tabindex="-1"><a class="header-anchor" href="#_3-2-advanced-application-examples"><span>3.2 Advanced Application Examples</span></a></h3><blockquote><p>Push message, system notification clicks details to open the corresponding business form.</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Map&lt;String, String&gt; templateParam = new HashMap&lt;&gt;();</span>
<span class="line">//设置PC详情页面打开所需路由参数 (系统通知点击详情，打开审批表单)</span>
<span class="line">templateParam.put(CommonSendStatus.MSG_ABSTRACT_JSON,  &quot;{&#39;taskDetail&#39;:true,&#39;procInsId&#39;:&#39;1706599178455097345&#39;,&#39;taskId&#39;:&#39;task630958764530507776&#39;}&quot;);</span>
<span class="line">//设置钉钉移动端审批详情页面打开URL</span>
<span class="line">templateParam.put(CommonConstant.MSG_HREF_URL, &quot;http://www.jeecg.com&quot;));</span>
<span class="line"></span>
<span class="line">BusTemplateMessageDTO message = new BusTemplateMessageDTO(&quot;admin&quot;,&quot;jeecg&quot;,&quot;流程催办提醒&quot;,templateParam,  CommonSendStatus.TZMB_BPM_CUIBAN, SysAnnmentTypeEnum.BPM.getType(),task.getId());</span>
<span class="line">sysBaseAPI.sendBusTemplateAnnouncement(message);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Here are just some sample codes, you can refer to this principle to implement it yourself. The general logic is<br><img src="https://lfs.k.topthink.com/lfs/93af523a78ea0b710944526518732b64f8b4209fd745485aab4ac13cf93cbc4d.dat" alt=""></p><h3 id="_3-3-more-push-interfaces" tabindex="-1"><a class="header-anchor" href="#_3-3-more-push-interfaces"><span>3.3 More push interfaces</span></a></h3><p>Reference class: <code>org/jeecg/common/system/api/ISysBaseAPI.java</code><br> There are many push interfaces at present. Please adopt the iSysBaseAPI.sendTemplateMessage(messageDTO) method as soon as possible. Other methods will be optimized later.<br><img src="https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1661933712650.png" alt=""></p>`,34)]))}const r=s(i,[["render",l]]),c=JSON.parse('{"path":"/syncboot/advanced-features/message-push-api/message-push-interface.html","title":"Message push interface","lang":"ko-KR","frontmatter":{"order":2},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/advanced-features/message-push-api/message-push-interface.md"}');export{r as comp,c as data};
