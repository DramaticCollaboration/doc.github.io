---
order: 4
---

# WeChat third-party integration

Check the application.yml **justauth.type.WECHAT_OPEN** configuration, you need to configure three pieces of information  
![](https://lfs.k.topthink.com/lfs/674f6231f9e088c183dad7f875c112e3ea4a48ef33e520316574f13ac5760260.dat)

Enter the WeChat Open Platform, click the Management Center, and enter the website application  
![](https://lfs.k.topthink.com/lfs/1c4b1b046a8e24078a38da74755372b1d98225eadcbb64f89c8bea7fcae92f83.dat)

This process requires a website application. If you don't have one, you need to create one.  
![](https://lfs.k.topthink.com/lfs/01b07ee30477b645dadb4a7feae168d6cc8b63cc9ebb7780072cf355231a61c9.dat)  
After successful creation, enter the view to obtain the appid and AppSecret, and fill them in the corresponding yml

```
client-id -> appid
client-secret -> AppSecret
```

copy

![](https://lfs.k.topthink.com/lfs/c647fce7225bb9ba1d4e3521117e5c2337edfdfb5a74ca832efc5079911ea511.dat)

Modify the callback address.  
Scroll to the bottom of the page and click Modify.  
Note: The callback address does not need to contain http and https.  
![](https://lfs.k.topthink.com/lfs/6e98bf94b671042b342ad711182d1d906dcb064072461d7f81a9616f5e4da1ad.dat)  
Fill in the callback address in yml  
![](https://lfs.k.topthink.com/lfs/005afc1f95ea89689753400c9a59157147e5a62ecb8184376d6d5a7a5c3e93b2.dat)
