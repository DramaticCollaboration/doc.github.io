import{_ as e,c as n,a,o as i}from"./app-QFoJTndn.js";const l={};function t(c,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="sms-email-announcement-push-interface" tabindex="-1"><a class="header-anchor" href="#sms-email-announcement-push-interface"><span>SMS Email Announcement Push Interface</span></a></h1><h2 id="_1-sms-notification-interface" tabindex="-1"><a class="header-anchor" href="#_1-sms-notification-interface"><span>1. SMS notification interface</span></a></h2><p>Sample code:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Test</span>
<span class="line">public void sendSms() throws ClientException {</span>
<span class="line">    //手机号</span>
<span class="line">    String mobile = &quot;***&quot;;</span>
<span class="line">    //消息模版,此处是登录验证模版</span>
<span class="line">    DySmsEnum templateCode = DySmsEnum.LOGIN_TEMPLATE_CODE;</span>
<span class="line">    //模版所需参数</span>
<span class="line">    JSONObject obj = new JSONObject();</span>
<span class="line">    obj.put(&quot;code&quot;, &quot;4XDP&quot;);</span>
<span class="line">    DySmsHelper.sendSms(mobile, obj, templateCode);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Effect:<br><img src="https://lfs.k.topthink.com/lfs/d12e90144a1fa753b3544bbb97c7849f45761e41b1b2d43caa25bf8b4c1c79bc.dat" alt=""></p><h2 id="_2-email-notification-interface" tabindex="-1"><a class="header-anchor" href="#_2-email-notification-interface"><span>2. Email notification interface</span></a></h2><p>Sample code:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Test</span>
<span class="line">public void sendEmailMsg() {</span>
<span class="line">    String title = &quot;【日程提醒】您的日程任务即将开始&quot;;</span>
<span class="line">    String content = &quot;TEST:尊敬的王先生，您购买的演唱会将于本周日10：08分在国家大剧院如期举行，届时请携带好您的门票和身份证到场&quot;;</span>
<span class="line">    String email = &quot;111****@qq.com&quot;;</span>
<span class="line">    sysBaseAPI.sendEmailMsg(email,title,content);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>sendEmailMsg method:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">JavaMailSender mailSender = (JavaMailSender) SpringContextUtils.getBean(&quot;mailSender&quot;);</span>
<span class="line">SimpleMailMessage message = new SimpleMailMessage();</span>
<span class="line">// 设置发送方邮箱地址</span>
<span class="line">message.setFrom(emailFrom);</span>
<span class="line">message.setTo(es_receiver);</span>
<span class="line">message.setSubject(es_title);</span>
<span class="line">message.setText(es_content);</span>
<span class="line">mailSender.send(message);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//邮件抄送</span>
<span class="line">JavaMailSender mailSender = (JavaMailSender) SpringContextUtils.getBean(&quot;mailSender&quot;);</span>
<span class="line">MimeMessage message = mailSender.createMimeMessage();</span>
<span class="line">MimeMessageHelper helper = null;</span>
<span class="line">if (oConvertUtils.isEmpty(emailFrom)) {</span>
<span class="line">    StaticConfig staticConfig = SpringContextUtils.getBean(StaticConfig.class);</span>
<span class="line">    setEmailFrom(staticConfig.getEmailFrom());</span>
<span class="line">}</span>
<span class="line">try {</span>
<span class="line">    helper = new MimeMessageHelper(message, true);</span>
<span class="line">    // 设置发送方邮箱地址</span>
<span class="line">    helper.setFrom(emailFrom);</span>
<span class="line">    //设置收件人</span>
<span class="line">    helper.setTo(email);</span>
<span class="line">    //设置抄送人</span>
<span class="line">    helper.setCc(email);</span>
<span class="line">    helper.setSubject(title);</span>
<span class="line">    helper.setText(content, true);</span>
<span class="line">    mailSender.send(message);</span>
<span class="line">} catch (MessagingException e) {</span>
<span class="line">    e.printStackTrace();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Effect:<br><img src="https://lfs.k.topthink.com/lfs/952d141e24ce3dde484a3500c53e59333cd20730191472bb5ff43c5b1c5adad2.dat" alt=""></p><h2 id="_3-system-announcement-push" tabindex="-1"><a class="header-anchor" href="#_3-system-announcement-push"><span>3. System announcement push</span></a></h2><p>Template message:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//推送消息</span>
<span class="line">MessageDTO messageDTO = new MessageDTO();</span>
<span class="line">//通知所有人</span>
<span class="line">messageDTO.setToAll(true);</span>
<span class="line">messageDTO.setTitle(&quot;国庆放假通知&quot;);</span>
<span class="line">//系统</span>
<span class="line">messageDTO.setType(MessageTypeEnum.XT.getType());</span>
<span class="line">messageDTO.setIsMarkdown(false);</span>
<span class="line">messageDTO.setFromUser(&quot;system&quot;);</span>
<span class="line">messageDTO.setContent(&quot;9月29日至10月6日放假调休，共8天。10月7日（星期六）、10月8日（星期日）上班&quot;);</span>
<span class="line">sysBaseAPI.sendTemplateMessage(messageDTO);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Sample code:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Test</span>
<span class="line">public void sendSysAnnouncement() {</span>
<span class="line">    //发送人</span>
<span class="line">    String fromUser = &quot;admin&quot;;</span>
<span class="line">    //接收人</span>
<span class="line">    String toUser = &quot;jeecg&quot;;</span>
<span class="line">    //标题</span>
<span class="line">    String title = &quot;系统消息&quot;;</span>
<span class="line">    //内容</span>
<span class="line">    String msgContent = &quot;TEST:今日份日程计划已送达！&quot;;</span>
<span class="line">    //发送系统消息</span>
<span class="line">    sysBaseAPI.sendSysAnnouncement(new MessageDTO(fromUser, toUser, title, msgContent));</span>
<span class="line">    //消息类型</span>
<span class="line">    String msgCategory = CommonConstant.MSG_CATEGORY_1;</span>
<span class="line">    //业务类型</span>
<span class="line">    String busType = SysAnnmentTypeEnum.EMAIL.getType();</span>
<span class="line">    //业务ID</span>
<span class="line">    String busId = &quot;11111&quot;;</span>
<span class="line">    //发送带业务参数的系统消息</span>
<span class="line">    BusMessageDTO busMessageDTO = new BusMessageDTO(fromUser, toUser, title, msgContent, msgCategory, busType,busId);</span>
<span class="line">    sysBaseAPI.sendBusAnnouncement(busMessageDTO);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Effect:<br><img src="https://lfs.k.topthink.com/lfs/68f70316d2fda3dcf79ebafa59aec37c0d823309c2b1f8944ffb470331d41ef6.dat" alt=""></p>`,24)]))}const p=e(l,[["render",t]]),r=JSON.parse('{"path":"/syncboot/advanced-features/message-push-api/sms-email-announcement-push-interface.html","title":"SMS Email Announcement Push Interface","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/advanced-features/message-push-api/sms-email-announcement-push-interface.md"}');export{p as comp,r as data};
