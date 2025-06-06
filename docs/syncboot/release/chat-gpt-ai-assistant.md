---
order: 5
---

# ChatGPT AI Assistant

Starting from the SyncBoot `3.6.3+`version, the ChatGPT AI assistant conversation function is provided by default.

### AI assistant renderings

Enter the SyncBoot backend homepage, click "AI Assistant" in the middle right corner of the homepage, and the AI ​​Assistant dialogue interface will pop up.

![](/images/02bd93fc53a8c4ce6c6aa7f2fb66474733684ee1359b26298767781f44bba55e.png)

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
    ![](/images/8251eb100188b0e42e0890d52e6f31e82f95cf0fca6e51f75554bc15f40dde0d.png)

> Before accessing the ChatGPT official website, you need to ensure that the IP you are currently using can use ChatGPT normally, otherwise it will report Access denied

2.  Register an account using Google Mail (gmail).  
    ![](/images/f9d19257d28ef0e6ce5651f7a42316a4e956282810d906cd818a77b69fa1892d.png)  
    ![](/images/db89caad2e2b97463113ce3665942850afc7097f0f695575700292a9de20d6eb.png)
3.  After creating an account and password, ChatGPT will send a verification email to the registered email address. We need to log in to the email address used for registration, receive the email and right-click the button in the text `Verify email address`to verify.  
    ![](/images/6497923eb08a0c5d2361439710ef2424b89fb91e53ef980196fe7129ded959dc.png)  
    ![](/images/c95a85c5b6b951f8675f6dc49e0437ffe7c4042e41604180e0709d16a0bc0f24.png)
4.  After verification, please complete your personal information. (Full name, birthday)  
    ![](/images/caebe1518d6c1c4644a88db60f17792dfe9d0257a5a1883e9847b4ba1067f913.png)
5.  Entering the interface shown below means ChatGPT has been successfully registered.  
    ![](/images/ce23ee86911f55e7d0e75ffe67d348726ae88088b4010539337318c33c91c323.png)

#### ChatGPT API Key application steps

`ChatGPT API`It is an interface that can call the GPT model. With this interface, we can do secondary development based on ChatGPT.  
**Currently, you must bind your mobile phone number before applying for the OpenAI API, and it must be a mobile phone number in a country where ChatGpt is open** ; if you don’t have a foreign mobile phone number, you can refer to the following to register a code receiving platform.

##### Code receiving platform registration

The code receiving platform used in this article is `sms-activate`; this is a paid code receiving platform, which requires advance recharge to receive the verification code; if you have an overseas mobile phone number or have your own code receiving platform, you can use your own.

1.  Visit `sms-activate`: [https://sms-activate.org/cn](https://sms-activate.org/cn) , click Register in the upper right corner, and register using your email address.  
    ![](/images/d2cc1eac0b3a7f47d594b737da83a94dfa799d79fc033866deb20097e0dbd7d6.png)
2.  After successful registration, click the + sign in the upper right corner to recharge. Currently, recharge through credit cards, Alipay and other channels is supported.  
    ![](/images/d688b88bccf6cf3f2b0fa06017b0aff0971e7b18970399a9476cd0e3b5c969f0.png)
3.  A minimum recharge of $2 is required, which is usually enough for us to complete the mobile phone number verification.  
    ![](/images/68bd5c471293f534cf115ebef67740c60395f10bce1f1946b139a8da5de7f390.png)
4.  After the recharge is completed, enter the number on the left `openAI`and select a mobile phone number from a country where chatGpt is available to purchase.  
    ![](/images/046ec7376905ff4ed3d516916fe25449de8af9699e46c8247a38b3724502177b.png)
5.  After the purchase is successful, you can see the purchased mobile phone number in My Activation and copy the mobile phone number to `openAi`the mobile phone number verification. After sending the verification code, you can view the received verification code on this page. (If the verification code is not successfully received, the refund will be automatically refunded)  
    ![](/images/28578a1568d6a1ec5736db213233059a20c94774cb9921f72088a748f20dfab8.png)

##### Apply`ChatGPT API`

1.  Visit `openAI`the open platform: [https://platform.openai.com](https://platform.openai.com) , click on the left `API keys`, and on the right side it will prompt you to verify your phone number, click`Start verification`  
    ![](/images/3a1acac4a6575dccfc638943672d23324867eff12881c1045337eb19cddb8668.png)
2.  Enter the mobile phone number obtained on the code receiving platform and send the verification code  
    ![](/images/3aeac97ecd19e40a01c373b7c534680b90deae5d99de1a8291b703bab64cb3f4.png)
3.  Go back to the code receiving platform, check the verification code you received, fill it in the openAI verification interface and enter the verification code to complete the verification.  
    ![](/images/24fa8c19672fed6de6c60554f6e78aa9b46cd543b27ac8b6e75aaa240edc7eaf.png)
4.  You can now `Create new secret key`create`API keys`  
    ![](/images/ad61ecf186ff395fd039eb6744f26d6d58e1ef0ade4d9a202f81886764f6d813.png)  
    ![](/images/32534be4d6a56fd727295f3e87ad4e807538a6ddba045023881cd680b8efddbb.png)
5.  When the creation is successful, your secret key will be displayed in the pop-up window. Please save it properly at this time, because the secret key will only be displayed in full at this time, and the content of the secret key will not be displayed again afterwards.  
    ![](/images/f51a6787013e3599676dd0bd92541691679ab7a57bb0c45a91fd193e0ac65fb2.png)

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
