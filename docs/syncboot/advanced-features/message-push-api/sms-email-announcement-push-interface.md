---
order: 4
---

# SMS Email Announcement Push Interface

## 1\. SMS notification interface

Sample code:

```
@Test
public void sendSms() throws ClientException {
    //手机号
    String mobile = "***";
    //消息模版,此处是登录验证模版
    DySmsEnum templateCode = DySmsEnum.LOGIN_TEMPLATE_CODE;
    //模版所需参数
    JSONObject obj = new JSONObject();
    obj.put("code", "4XDP");
    DySmsHelper.sendSms(mobile, obj, templateCode);
}
```

copy

Effect:  
![](https://lfs.k.topthink.com/lfs/d12e90144a1fa753b3544bbb97c7849f45761e41b1b2d43caa25bf8b4c1c79bc.dat)

## 2\. Email notification interface

Sample code:

```
@Test
public void sendEmailMsg() {
    String title = "【日程提醒】您的日程任务即将开始";
    String content = "TEST:尊敬的王先生，您购买的演唱会将于本周日10：08分在国家大剧院如期举行，届时请携带好您的门票和身份证到场";
    String email = "111****@qq.com";
    sysBaseAPI.sendEmailMsg(email,title,content);
}
```

copy

sendEmailMsg method:

```
JavaMailSender mailSender = (JavaMailSender) SpringContextUtils.getBean("mailSender");
SimpleMailMessage message = new SimpleMailMessage();
// 设置发送方邮箱地址
message.setFrom(emailFrom);
message.setTo(es_receiver);
message.setSubject(es_title);
message.setText(es_content);
mailSender.send(message);
```

copy

```
//邮件抄送
JavaMailSender mailSender = (JavaMailSender) SpringContextUtils.getBean("mailSender");
MimeMessage message = mailSender.createMimeMessage();
MimeMessageHelper helper = null;
if (oConvertUtils.isEmpty(emailFrom)) {
    StaticConfig staticConfig = SpringContextUtils.getBean(StaticConfig.class);
    setEmailFrom(staticConfig.getEmailFrom());
}
try {
    helper = new MimeMessageHelper(message, true);
    // 设置发送方邮箱地址
    helper.setFrom(emailFrom);
    //设置收件人
    helper.setTo(email);
    //设置抄送人
    helper.setCc(email);
    helper.setSubject(title);
    helper.setText(content, true);
    mailSender.send(message);
} catch (MessagingException e) {
    e.printStackTrace();
}
```

copy

Effect:  
![](https://lfs.k.topthink.com/lfs/952d141e24ce3dde484a3500c53e59333cd20730191472bb5ff43c5b1c5adad2.dat)

## 3\. System announcement push

Template message:

```
//推送消息
MessageDTO messageDTO = new MessageDTO();
//通知所有人
messageDTO.setToAll(true);
messageDTO.setTitle("国庆放假通知");
//系统
messageDTO.setType(MessageTypeEnum.XT.getType());
messageDTO.setIsMarkdown(false);
messageDTO.setFromUser("system");
messageDTO.setContent("9月29日至10月6日放假调休，共8天。10月7日（星期六）、10月8日（星期日）上班");
sysBaseAPI.sendTemplateMessage(messageDTO);
```

copy

Sample code:

```
@Test
public void sendSysAnnouncement() {
    //发送人
    String fromUser = "admin";
    //接收人
    String toUser = "jeecg";
    //标题
    String title = "系统消息";
    //内容
    String msgContent = "TEST:今日份日程计划已送达！";
    //发送系统消息
    sysBaseAPI.sendSysAnnouncement(new MessageDTO(fromUser, toUser, title, msgContent));
    //消息类型
    String msgCategory = CommonConstant.MSG_CATEGORY_1;
    //业务类型
    String busType = SysAnnmentTypeEnum.EMAIL.getType();
    //业务ID
    String busId = "11111";
    //发送带业务参数的系统消息
    BusMessageDTO busMessageDTO = new BusMessageDTO(fromUser, toUser, title, msgContent, msgCategory, busType,busId);
    sysBaseAPI.sendBusAnnouncement(busMessageDTO);
}
```

copy

Effect:  
![](https://lfs.k.topthink.com/lfs/68f70316d2fda3dcf79ebafa59aec37c0d823309c2b1f8944ffb470331d41ef6.dat)
