---
order: 3
---

# APP Packaging

#### Package as native App (Cloud)

In the HBuilderX toolbar, click Release and select Native app-Cloud packaging, as shown below:  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1591344361506.png)  
The following interface appears, click Package.  
![](https://lfs.k.topthink.com/lfs/d5e435118ccf2d5fd631188d1d934cd2d305206b9b458ce45ade15cd6d53db66.dat)  
Packaging:  
![](https://lfs.k.topthink.com/lfs/98e7a474635dbc82cfcca45115433ae63331eff066fa80846d986c3b581e6647.dat)  
If the following picture is displayed, the package is successfully packaged and the download link is returned.  
![](https://lfs.k.topthink.com/lfs/1f00c0b29f59acb16870831ac2342678cff27487154d577ddb1a2d06863bbf8b.dat)  
Back to download link  
![](https://lfs.k.topthink.com/lfs/c1fc9ff40f1df464b52fe0e7a4c915fde144b5280451ee66102283bac1ed1563.dat)

#### Possible problems:

![](https://lfs.k.topthink.com/lfs/3016b5ccae26ccd83577381baccf36f89d3bcb75d6eef847844b77f962a35d92.dat)  
**Solution:**  
1\. Enable UniPush push service.  
UniPush only supports uni-app type projects, and other types of projects are not supported. Click here to see how to enable UniPush push service.  
Modify the mainfest.json file configuration in Hbuilder.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1591344896825.png)

Check it `DCloud UniPush`, then click the Configure button to enter the backend configuration of uniPush. You need to authenticate first. After authentication, you can view your current application in the list of applications I created. If there are multiple projects, you can view the association between the App_id in the list and the local appid here [https://dev.dcloud.net.cn/app/index?type=0](https://dev.dcloud.net.cn/app/index?type=0)  
![](https://lfs.k.topthink.com/lfs/0206399714f586d5af47701761e73e3671d8363086c287a4beaa19fb7c74b33f.dat)  
Click the current project to enter the management page of the corresponding project, expand the Unipush menu, select Modify Application Information, fill in the package name you want to specify and the signature information generated according to the local certificate (if you want to use the official certificate, fill in the official signature information as prompted)  
![](https://lfs.k.topthink.com/lfs/f63f29158d696703aef19c5e91a53b35f755629eeec8d75c85ff80bee892539d.dat)  
After configuration, you can enter the "Push Notification" test page of Unipush.
