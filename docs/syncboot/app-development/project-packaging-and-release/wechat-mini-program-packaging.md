---
order: 4
---

# WeChat Mini Program Packaging

#### Package as WeChat applet

1.  To apply for WeChat Mini Program AppID, refer to: WeChat tutorial \[ [https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7\].](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7%E3%80%91%E3%80%82)

2.  In HBuilderX, click "Release" => "Mini Program - WeChat" on the top menu, enter the mini program name and appid, and click Release to generate the WeChat mini program project code in unpackage/dist/build/mp-weixin.  
    ![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1591345930091.png)  
    Enter the appid and name of the mini program  
    ![](https://lfs.k.topthink.com/lfs/cd52acae54abd59831971f03ffcc242f79e4692fea3a305adeb9b41b172158f1.dat)  
    After release, open it in WeChat developer tools.

**Pay attention to the configuration of the legal domain name of the mini program. And the WeChat mini program domain name must start with https**

> The interface must start with https, otherwise the mini program will not be able to be logged in.  
> ![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1591346479106.png)  
> Mini Program configuration domain name whitelist: [https://blog.csdn.net/weixin_44606457/article/details/105227254](https://blog.csdn.net/weixin_44606457/article/details/105227254)

Note:  
Because the size of the Mini Program package upload cannot exceed 2048kb, some static files need to be deleted during upload

1\. Open the package folder  
![](https://lfs.k.topthink.com/lfs/c49cf97b489843f9cf335ea6ec4d58bb28cb27ab5b0d9a8e35e392a3f1eabd1a.dat)  
2\. Open the static file  
![](https://lfs.k.topthink.com/lfs/e382574bb879d0a7b60d5497ad5ab32d0030969d5a3ac010539a91b884c03a3e.dat)  
3\. Delete the folders circled in the figure below  
![](https://lfs.k.topthink.com/lfs/8bf72bf060f3e30e31d5772a83ee82fbcb2e89bb570be53169e84e6d4d4151a7.dat)  
4\. Then we upload the size that meets the requirements of the applet  
HBuilder compression settings  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1683618560882.png)  
WeChat Developer Tools Compression Settings  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1683619275325.png)

![](https://lfs.k.topthink.com/lfs/156f912e579690e6aa51d2f53206c161dce9cc15f08d8257f3ffdbebaa171e47.dat)

Another way: Directory conditional compilation  
[https://uniapp.dcloud.io/platform?id=static-%e7%9b%ae%e5%bd%95%e7%9a%84%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91](https://uniapp.dcloud.io/platform?id=static-%e7%9b%ae%e5%bd%95%e7%9a%84%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)
