---
order: 9
---

# SMS Configuration (Ali Dayu)

jeecg-boot provides an interface for sending SMS messages. After configuration is completed, you can call the corresponding interface to complete the SMS sending.

## 1\. Configure the Ali SMS key in the yml file

![](https://lfs.k.topthink.com/lfs/1d5e853f420627886516a0a65590c8db9551f00b9828174fac4c8f4ae5051414.dat)

## 2\. Configure the SMS template in Alibaba and add the SMS template to the DySmsEnum file

![](https://lfs.k.topthink.com/lfs/12e288187129fe06eb1b12416806b56fe05a565eb2ff6bd625e6ace0df2d19c8.dat)

## 3\. Call SMS API

According to different operations, use different SMS templates to call the SMS sending interface

```
/**
 * smsmode 短信模板方式  0 .登录模板、1.注册模板、2.忘记密码模板
 */
String mobile = "18888888888";
JSONObject obj = new JSONObject();
obj.put("code", "123456");
if (CommonConstant.SMS_TPL_TYPE_0.equals(smsmode)) {
   //登录模板
   b = DySmsHelper.sendSms(mobile, obj, DySmsEnum.LOGIN_TEMPLATE_CODE);
} else if(CommonConstant.SMS_TPL_TYPE_2.equals(smsmode)) {
   //忘记密码模板
   b = DySmsHelper.sendSms(mobile, obj, DySmsEnum.FORGET_PASSWORD_TEMPLATE_CODE);
}
```

copy

### Interface sending parameter description

| name              | type       | illustrate    |
| ----------------- | ---------- | ------------- |
| phone             | String     | Phone number  |
| templateParamJson | JSONObject | SMS content   |
| dySmsEnum         | DySmsEnum  | SMS templates |
