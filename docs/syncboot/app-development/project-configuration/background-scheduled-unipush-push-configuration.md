---
order: 3
---

# Background scheduled unipush push configuration

org.jeecg.modules.eoa.config.UniappConstant

### 1\. UniPush Activation Guide

[https://ask.dcloud.net.cn/article/35716](https://ask.dcloud.net.cn/article/35716)

### 2.UniappConstant configuration profile:

![](https://lfs.k.topthink.com/lfs/85876910d4aebfaeb7f9ea6e56cdd4e1b63b11972fcfaa727a4ba38ae3aecdf7.dat)

#### 2.1 Obtaining appid and other configurations:

After unipush is activated, you can obtain the configuration information of appid, appkey, and masterSecret, which can be found in the following figure  
![](https://lfs.k.topthink.com/lfs/3546f7c0d4663341567d36bf663502329eb6b1b36788ea1fdab69460d872beb4.dat)

#### 2.2 intent configuration:

When using manufacturer push to send push messages, you must set intent, and the intent must comply with the following format. This format is a secondary package based on the individual push definition, so this format must be used as the standard. If you do not set the intent in this format, the user may not be able to start the APP when clicking on the push message.  
The intent data format is as follows:

```
intent:#Intent;action=android.intent.action.oppopush;launchFlags=0x14000000;component=io.dcloud.HBuilder/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=测试标题;S.content=测试内容;S.payload=test;end
```

copy

**Among them, io.dcloud.HBuilder is the APP package name, which needs to be replaced with the package name of your own APP;**  
The value of S.title= is the push message title, which corresponds to the title attribute value of the PushMessage object in the 5+ API; [The](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)  
value of S.content= is the push message content, which corresponds to the content attribute value of [the PushMessage object in the 5+ API; The value of S.payload= is the data of the push message, which corresponds to the payload attribute value of](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) [the PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) object  
in the 5+ API ; **The launchFlags=0x14000000 field solves the problem that clicking after receiving multiple notifications may not trigger the click event**[](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)

Precautions:

- The intent format is different from that described in the multi-vendor PDF document of Getui. Please refer to this format.
- Intent is for compatibility with Android platform data, but in order to maintain compatibility, it is recommended that iOS platform also configure this data
- action=android.intent.action.oppopush is fixed data, which is compatible with the offline push function of OPPO devices and does not need to be modified
- io.dcloud.HBuilder in component=io.dcloud.HBuilder/io.dcloud.PandoraEntry is the package name of the application, which is consistent with the Android package name set in the App cloud packaging interface

_Some content is excerpted from: [https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)_

### 3\. Server access steps

**STEP1:** Get basic information of the application: AppId, AppKey, masterSecret.  
**STEP2:** Set push title and push content  
**STEP3:** Set push effects such as ringing and vibration  
**STEP4:** Select notification template  
**STEP5:** Set push parameters such as push message validity period  
**STEP6:** Execute push  
**STEP7:** Open the phone to view the message in the notification bar

#### **Code example:**

import com.gexin.rp.sdk.base.IPushResult;  
import com.gexin.rp.sdk.base.impl.AppMessage;  
import com.gexin.rp.sdk.http.IGtPush;  
import com.gexin.rp.sdk.template.LinkTemplate;

import java.io.IOException;  
import java.util.ArrayList;  
import java.util.List;

public class AppPush {

```
// STEP1：获取应用基本信息
private static String appId = "";
private static String appKey = "";
private static String masterSecret = "";
// 如果需要使用HTTPS，直接修改url即可
//private static String url = "https://api.getui.com/apiex.htm";
private static String url = "http://api.getui.com/apiex.htm";

public static void main(String[] args) throws IOException {

    IGtPush push = new IGtPush(url, appKey, masterSecret);

    Style0 style = new Style0();
    // STEP2：设置推送标题、推送内容
    style.setTitle("请输入通知栏标题");
    style.setText("请输入通知栏内容");
    style.setLogo("push.png");  // 设置推送图标
    // STEP3：设置响铃、震动等推送效果
    style.setRing(true);  // 设置响铃
    style.setVibrate(true);  // 设置震动


    // STEP4：选择通知模板
    NotificationTemplate template = new NotificationTemplate();
    template.setAppId(appId);
    template.setAppkey(appKey);
    template.setStyle(style);


    // STEP5：定义"AppMessage"类型消息对象,设置推送消息有效期等推送参数
    List<String> appIds = new ArrayList<String>();
    appIds.add(appId);
    AppMessage message = new AppMessage();
    message.setData(template);
    message.setAppIdList(appIds);
    message.setOffline(true);
    message.setOfflineExpireTime(1000 * 600);  // 时间单位为毫秒

    // STEP6：执行推送
    IPushResult ret = push.pushMessageToApp(message);
    System.out.println(ret.getResponse().toString());
}
```

copy

}

_**For specific server push configuration, please refer to the getui documentation: [http://docs.getui.com/](http://docs.getui.com/) .**_
