---
order: 5
---

# ChatGPT AI Assistant

Starting from the SyncBoot `3.6.3+`version, the ChatGPT AI assistant conversation function is provided by default.

### AI assistant renderings

Enter the SyncBoot backend homepage, click "AI Assistant" in the middle right corner of the homepage, and the AI ​​Assistant dialogue interface will pop up.

### Configuration Files

Modify `application-dev.yml`the configuration file and turn on the jeecg.enabled switch first.

```
jeecg:
  # ChatGPT对接配置
  ai-chat:
    # 是否开启
    enabled: true
    # openAi接口秘钥，填写自己的apiKey
    apiKey: ???
    # openAi域名，有代理就填代理的域名。默认：openAI官方apiHost
    apiHost: https://api.openai.com
    # 超时时间单位:s。默认 60s
    timeout: 60
```

copy

### ChatGPT API Key Application

> The configuration file mainly requires ChatGPT `apiKey`and `ChatGPT的域名地址`, `apiKey`which can be applied through ChatGPT official website; `ChatGPT的域名`if it is banned in China, you can build a proxy yourself. For details, please refer to the following documents:

#### ChatGPT Account Registration Process

> You need to register a ChatGPT API account and obtain an apikey. The specific registration steps are as follows

##### Registration Materials

Since ChatGPT is not open to China (nor to Hong Kong, Macao and Taiwan), if we want to use ChatGPT in China at this stage, we need to prepare the following materials:

- Foreign email: Because there are too many accounts registered with domestic email, ChatGPT has closed all domestic email registration channels. Currently, Gmail has a higher registration success rate; [Gmail registration address](https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail/&dsh=S-1744475335:1710122133488057&ec=asw-gmail-hero-create&flowEntry=SignUp&flowName=GlifWebSignIn&service=mail&theme=glif&TL=ADg0xR1mQrI2Mm16QHnQZjjesQoAMRl7_ZilaSV1oks9iFpIWPdlxy46L34gi_XT)
- Foreign IP: You need an IP address from a country or region where ChatGPT is already open, such as the United States, the United Kingdom, South Korea, Japan, etc.

###### Register ChatGPT

1.  ChatGPT registration address: [https://chat.openai.com/auth/login](https://chat.openai.com/auth/login) , select Sign up.

> Before accessing the ChatGPT official website, you need to ensure that the IP you are currently using can use ChatGPT normally, otherwise it will report Access denied

2.  Register an account using Google Mail (gmail).
3.  After creating an account and password, ChatGPT will send a verification email to the registered email address. We need to log in to the email address used for registration, receive the email and right-click the button in the text `Verify email address`to verify.
4.  After verification, please complete your personal information. (Full name, birthday)
5.  Entering the interface shown below means ChatGPT has been successfully registered.

#### ChatGPT API Key application steps

`ChatGPT API`It is an interface that can call the GPT model. With this interface, we can do secondary development based on ChatGPT.  
**Currently, you must bind your mobile phone number before applying for the OpenAI API, and it must be a mobile phone number in a country where ChatGpt is open** ; if you don’t have a foreign mobile phone number, you can refer to the following to register a code receiving platform.

##### Code receiving platform registration

The code receiving platform used in this article is `sms-activate`; this is a paid code receiving platform, which requires advance recharge to receive the verification code; if you have an overseas mobile phone number or have your own code receiving platform, you can use your own.

1.  Visit `sms-activate`: [https://sms-activate.org/cn](https://sms-activate.org/cn) , click Register in the upper right corner, and register using your email address.
2.  After successful registration, click the + sign in the upper right corner to recharge. Currently, recharge through credit cards, Alipay and other channels is supported.
3.  A minimum recharge of $2 is required, which is usually enough for us to complete the mobile phone number verification.
4.  After the recharge is completed, enter the number on the left `openAI`and select a mobile phone number from a country where chatGpt is available to purchase.
5.  After the purchase is successful, you can see the purchased mobile phone number in My Activation and copy the mobile phone number to `openAi`the mobile phone number verification. After sending the verification code, you can view the received verification code on this page. (If the verification code is not successfully received, the refund will be automatically refunded)

##### Apply`ChatGPT API`

1.  Visit `openAI`the open platform: [https://platform.openai.com](https://platform.openai.com) , click on the left `API keys`, and on the right side it will prompt you to verify your phone number, click`Start verification`
2.  Enter the mobile phone number obtained on the code receiving platform and send the verification code
3.  Go back to the code receiving platform, check the verification code you received, fill it in the openAI verification interface and enter the verification code to complete the verification.
4.  You can now `Create new secret key`create`API keys`
5.  When the creation is successful, your secret key will be displayed in the pop-up window. Please save it properly at this time, because the secret key will only be displayed in full at this time, and the content of the secret key will not be displayed again afterwards.

ChatGpt API documentation [https://platform.openai.com/docs/api-reference/chat/create](https://platform.openai.com/docs/api-reference/chat/create)

#### ChartGPT steps to build an overseas agent

1.  Purchase an overseas cloud server and ensure that the ASN of the IP address is overseas.
2.  Log in to the server and install it `nginx`.

```
# yum install -y nginx
```

copy

3.  Edit `nginx`the configuration file `vim /etc/nginx/nginx.conf`to forward all requests to`api.openai.com`

```
server {
# ...other setting ....
    location / {
            proxy_pass  https://api.openai.com/;
            proxy_ssl_server_name on;
            proxy_set_header Host api.openai.com;
            proxy_set_header Connection '';
            proxy_http_version 1.1;
            chunked_transfer_encoding off;
            proxy_buffering off;
            proxy_cache off;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_set_header X-Forwarded-Proto $scheme;
    }
# ...other setting ....
}
```

copy
