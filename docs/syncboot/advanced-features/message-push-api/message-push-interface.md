---
order: 2
---

# Message push interface

Unified message push interface, through this interface, four types of message push are implemented: system message, mailbox message, enterprise WeChat, and DingTalk message.

## 1\. Main API Description

```
//注入
@Autowired
private ISysBaseAPI sysBaseApi;
```

copy

```
//推送消息
MessageDTO messageDTO = new MessageDTO();
messageDTO.setToAll(false);
messageDTO.setToUser(applyUserId);
messageDTO.setTitle("消息发送测试");
//推送消息类型
messageDTO.setType(MessageTypeEnum.XT.getType());
messageDTO.setIsMarkdown(false);
messageDTO.setFromUser("system");
messageDTO.setContent(templateContext);
log.info("------------消息发送对象:{}--------------", JSON.toJSONString(messageDTO));
iSysBaseAPI.sendTemplateMessage(messageDTO);
```

copy

> be careful
>
> 1.  type is the message type. Currently, four types are supported: system message, email message, enterprise WeChat, and DingTalk message
> 2.  templateCode template code, corresponding to the menu \[Message Center\] -> \[Message Template Management\]
> 3.  dataParsing template data, need to be customized
> 4.  content, if you do not need to parse the data through the template, you can directly pass in a fixed text to send

Attribute Description

| Attributes   | type                | illustrate                                                                         |
| ------------ | ------------------- | ---------------------------------------------------------------------------------- |
| fromUser     | string              | Sender (user login account)                                                        |
| toUser       | string              | Send to (user login account)                                                       |
| toAll        | boolean             | Send to Everyone                                                                   |
| title        | string              | Message Subject                                                                    |
| content      | string              | Message content                                                                    |
| templateCode | string              | Template code corresponding to the template message                                |
| type         | string              | Message type: refer to enumeration org.jeecg.common.constant.enums.MessageTypeEnum |
| data         | Map<String, Object> | Parse the data corresponding to the template content                               |

## 2\. Push sample code

#### Example 1: Send a notification to someone when the process ends

```
//推送消息正文内容
String templateContext = "从工作表获取,查找结果无数据,工作流【"+process+"】,节点【"+node+"】";

String title = "流程结束通知";
MessageDTO messageDTO = new MessageDTO();
messageDTO.setToAll(false);
messageDTO.setToUser("admin");
messageDTO.setTitle("测试推送");
messageDTO.setType(MessageTypeEnum.XT.getType());
messageDTO.setIsMarkdown(false);
messageDTO.setFromUser("system");
messageDTO.setContent(templateContext);
log.info("------------消息发送对象:{}--------------", JSON.toJSONString(messageDTO));
iSysBaseAPI.sendTemplateMessage(messageDTO);
```

copy

Other types of description

```
 enum TaskTipTypeEnum {

 XT("system",  "bpm_system"),
 YJ("email",  "bpm_email"),
 DD("dingtalk", "bpm_dingtalk"),
 QYWX("wechat_enterprise", "bpm_wechat_enterprise");
```

copy

#### Example 2: Pushing messages through template code

```
MessageDTO md = new MessageDTO();
md.setToAll(false);
md.setTitle("消息发送测试");
md.setTemplateCode("bpm_cuiban");
md.setToUser("admin,jeecg");
md.setType(msgParams.getMsgType());
String testData = msgParams.getTestData();
if(oConvertUtils.isNotEmpty(testData)){
   Map<String, Object> data = JSON.parseObject(testData, Map.class);
   md.setData(data);
}
sysBaseApi.sendTemplateMessage(md);
return result.success("消息发送成功！");
```

copy

![](https://lfs.k.topthink.com/lfs/76c33dccbed504c302c0ed1c6397123bf4b940e4c5a485491d67afb8b868a2d4.dat)

## 3\. More API descriptions

### 3.1 Push messages through message templates

> By designing templates, you can customize the format, support Markdown, rich text, and normal text, and send emails and system messages.

- 1.  First design the message template  
      menu: Message Center -> Template Management  
      ![](https://lfs.k.topthink.com/lfs/8f0a6c3cf7e83ded4a7ccae8d84df42ddcd89e6d896c247f7f3c34685e420820.dat)
- 2.  Call ISysBaseAPI interface to send system messages

```
/**
 * 发送系统消息
 * @param fromUser 发送人(用户登录账户)
 * @param toUser   发送给(用户登录账户)
 * @param title    通知标题
 * @param map         模板参数
 * @param templateCode  模板编码
 */
public void sendSysAnnouncement(String fromUser, String toUser,String title, Map<String, String> map, String templateCode);

/**
 * 通过消息中心模板，生成推送内容
 *
 * @param templateCode 模板编码
 * @param map          模板参数
 * @return
 */
public String parseTemplateByCode(String templateCode, Map<String, String> map);
```

copy

### 3.2 Advanced Application Examples

> Push message, system notification clicks details to open the corresponding business form.

```
Map<String, String> templateParam = new HashMap<>();
//设置PC详情页面打开所需路由参数 (系统通知点击详情，打开审批表单)
templateParam.put(CommonSendStatus.MSG_ABSTRACT_JSON,  "{'taskDetail':true,'procInsId':'1706599178455097345','taskId':'task630958764530507776'}");
//设置钉钉移动端审批详情页面打开URL
templateParam.put(CommonConstant.MSG_HREF_URL, "http://www.jeecg.com"));

BusTemplateMessageDTO message = new BusTemplateMessageDTO("admin","jeecg","流程催办提醒",templateParam,  CommonSendStatus.TZMB_BPM_CUIBAN, SysAnnmentTypeEnum.BPM.getType(),task.getId());
sysBaseAPI.sendBusTemplateAnnouncement(message);
```

copy

Here are just some sample codes, you can refer to this principle to implement it yourself. The general logic is  
![](https://lfs.k.topthink.com/lfs/93af523a78ea0b710944526518732b64f8b4209fd745485aab4ac13cf93cbc4d.dat)

### 3.3 More push interfaces

Reference class: `org/jeecg/common/system/api/ISysBaseAPI.java`  
There are many push interfaces at present. Please adopt the iSysBaseAPI.sendTemplateMessage(messageDTO) method as soon as possible. Other methods will be optimized later.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1661933712650.png)
