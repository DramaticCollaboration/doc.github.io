---
order: 10
---

# Mailbox Configuration Document

jeecg-boot provides an interface for sending emails. After configuration, you can call the corresponding interface to send emails.

## 1\. Configure email information, host, username and password in the yml file

![](https://lfs.k.topthink.com/lfs/d181b5cab3ebaea1f1a4103aaf34795ab79340acd87ae2e5a426723e805a2257.dat)

## 2\. Call the send mail interface

Call the send mail interface

```
String es_receiver = "1111@163.com";
String es_title = "jeecg测试邮件";
String es_content = "测试内容"
emailSendMsgHandle.SendMsg(es_receiver ,es_title ,es_content );
```

copy

### Send mail interface send parameter description

| name        | type   | illustrate              |
| ----------- | ------ | ----------------------- |
| es_receiver | String | Receiving email mailbox |
| es_title    | String | mail title              |
| es_content  | String | Email content           |
