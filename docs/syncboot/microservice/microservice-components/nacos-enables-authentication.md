---
order: 7
---

# nacos enables authentication

## introduce

Since nacos version 2.2.2, the official has made it possible to access the nacos management interface without logging in, reminding users that they need to turn on authentication when using nacos, thereby improving security.

### Jeecg-cloud-nacos Enable authentication

In jeecg-cloud-nacos, change the enabled configuration of the startup class to true to enable nacos authentication. The default username and password are nacos\\nacos, as shown in the figure:  
![](https://lfs.k.topthink.com/lfs/939444841dab7b8dcea09564ae25d14345af88ecf38ac279261003e92cbe164e.dat)  
The default account password is: nacos/nacos

### Instance startup setting account and password

![](https://lfs.k.topthink.com/lfs/125ffcb01d8707ac91b12f6049521c5d8c6cba4121299f218d90b2ff763ffd61.dat)

### Change the default password

Since jeecg-boot-nacos uses SQL scripts to initialize nacos data, the default username and password cannot be modified directly through configuration. After nacos is successfully started, you need to access the background management system and click Change Password at the user point to perform the operation.

![](https://lfs.k.topthink.com/lfs/2e04ea4aa1a764d465e6ebb1c7d92e7aaf6129423402a92cf91652320fc7e0c7.dat)

![](https://lfs.k.topthink.com/lfs/14151dd6f410ecbaba4f08a093458f5b74143c9e4f4cea5565245e36bcb9ad76.dat)
