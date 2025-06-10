---
order: 2
---

# Third-party login integration

> `jeecgboot`Third-party login: Log in to the platform by scanning the QR code via DingTalk or WeChat Enterprise

## DingTalk third-party login integration

### 1\. Effect display

Log in by scanning the QR code

![](https://lfs.k.topthink.com/lfs/3b5d7f3b625dbecd583a988929f00f3b31b75d2f6bc01f5d2ed5ff365eb36ae8.dat)

### 2\. Integration steps

### 2.1 Register a DingTalk account

Registration address: [https://oa.dingtalk.com/register_new.htm](https://oa.dingtalk.com/register_new.htm)  
Enter your mobile number and click Register

![](https://lfs.k.topthink.com/lfs/913eac9dcc2ed43045d70892f7fe94898da2be04766b8d5527d000ed2e93365e.dat)

#### 2.2 Create an application

![](https://lfs.k.topthink.com/lfs/e6d0a3b11f54924e94f055f346331840846ee1fb78bedebf736599cd0d005e54.dat)

#### 2.3 Fill in the DingTalk QR code scan callback address

Click Login and Share, and fill in the callback address in the callback domain name on the right. The callback address can be mapped `ngrok`using`花生壳`

![](https://lfs.k.topthink.com/lfs/374951cfad9c9d907a5f85be77039f94529bcfa4a3ca0b4552d4052037b4ad18.dat)

#### 2.4 Code Configuration

- The front desk needs to `.env.development`fill in the interface request address in the file

![](https://lfs.k.topthink.com/lfs/0f50e8721cf329712cb31fc26da3186c326dd9a4f3ae805f61fcd582d465d482.dat)

- Backend `yml`configuration in

![](https://lfs.k.topthink.com/lfs/83cd39eab5581ea21fae9ff7d7b7bdca3029f63fcc2064e47afb6fb9c850cb54.dat)

- `client-id`Corresponding to the application `Appkey`, `client-secret`corresponding to the application`AppSecret`

![](https://lfs.k.topthink.com/lfs/fb75890b147df2bda624a58b00585601272e08a154215a98928c295156710642.dat)

- `redirect-uri`correspond`2.3 填写回调地址`

```
#第三方登录
justauth:
  enabled: true
  type:
    DINGTALK:
      client-id: ??
      client-secret: ??
      # 只需要修改/sys/thirdLogin/dingtalk/callback前面的请求地址即可
      redirect-uri: https://7257-123-125-121-209.ngrok-free.app/jeecg-boot/sys/thirdLogin/dingtalk/callback
```

copy

## WeChat Enterprise Third-Party Login Integration

### 1\. Effect display

Log in by scanning QR code on WeChat

![](https://lfs.k.topthink.com/lfs/462db22134ed3af1b8b943aa09893fdbc33320489e4772fd7f6dffcef2c20736.dat)

### 2\. Integration steps

#### 2.1 Register for WeChat Work

Enterprise WeChat registration address: [https://work.weixin.qq.com/wework_admin/register_wx](https://work.weixin.qq.com/wework_admin/register_wx)

![](https://lfs.k.topthink.com/lfs/517aa37b92528ea795564be8c02b2e5aa84fd05dbb11032dda7c1006c54b808c.dat)

#### 2.2 Create an enterprise WeChat application (H5 micro application)

WeChat Work Management Backend: [https://work.weixin.qq.com/wework_admin/frame](https://work.weixin.qq.com/wework_admin/frame)

- Under Application Management, find Create Application and click

![](https://lfs.k.topthink.com/lfs/ef39cc7165179454debde10578047d17a8294b43374d37ad4ea651db054f6541.dat)

![](https://lfs.k.topthink.com/lfs/3067b1068887cf914013959878cb4edd39cca8ad65a1747d2a53fcda988239b0.dat)

#### 2.3 Fill in the callback address

- Find the WeChat Enterprise Authorization Login on the application details page

![](https://lfs.k.topthink.com/lfs/7e92370d1116a24af3e90f63a84b00929afbe1983062fbe484405025f507e5cf.dat)

- The web page configures the authorization callback domain, and does not need to fill in the request header

![](https://lfs.k.topthink.com/lfs/0b8a98bdfb6c6a49f4fce298407ad39087d44797001ec8ac41a2bd4fa3da6a41.dat)

#### 2.4 Code Configuration

- The front desk needs to `.env.development`fill in the interface request address in the file

![](https://lfs.k.topthink.com/lfs/0f50e8721cf329712cb31fc26da3186c326dd9a4f3ae805f61fcd582d465d482.dat)

- Backend `yml`configuration in

![](https://lfs.k.topthink.com/lfs/8fc2fa584e1fd9800154e3186cd0e45c91edce23de7e988fc3415c3b313db2b5.dat)

- `client-id`correspond`企业id`

![](https://lfs.k.topthink.com/lfs/b300c67a3dff6548d22ee180ce15303225e3adc077a0b935c72f7c441de4eebf.dat)

- `agent-id`corresponding to the application `AgentId`; `client-secret`corresponding to the application`Secret`

![](https://lfs.k.topthink.com/lfs/57ad715caf1d33ac4d2998e7a5e8943c17f812fa0bede29045825f631f070804.dat)

- `redirect-uri`correspond`2.3 填写回调地址`

```
#第三方登录
justauth:
  enabled: true
  type:
    WECHAT_ENTERPRISE:
      client-id: ??
      client-secret: ??
      redirect-uri:  https://7257-123-125-121-209.ngrok-free.app/jeecg-boot/sys/thirdLogin/wechat_enterprise/callback
      agent-id: 1000002
```

copy

## Account matching rules for first login

When logging in for the first time, we need to bind the mobile phone number. After the mobile phone number matches successfully, the user will be directly bound; if the mobile phone number is not registered, a new user will be automatically created with the mobile phone number as the account.  
Users can log in by using the mobile phone number verification code, and the administrator can change the password of the new user in the user management

![](https://lfs.k.topthink.com/lfs/66f09bd0462cf50070e65de8c0e58d27468ebac5e0f9d50fa7302dbb39ec2ad9.dat)
