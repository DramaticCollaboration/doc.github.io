---
order: 3
---

# Microservice independent data source

> version: jeecgboot 3.5+  
> This article aims to: configure independent database connection for microservice modules. This article takes jeecg-demo as an example.

## Microservice modules configure their own databases

1.  Copy the jeecg-dev.yaml in naocs and create a new configuration file jeecg-demo-dev.yaml  
    ![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1659779911157.png)

2.  Modify the naocs registration configuration of the demo project and  
    map the new configuration file here  
    ![](https://lfs.k.topthink.com/lfs/4b66fe0cd28161e500775998c04ce125813d2ded9060f7821757f282822945ab.dat)

## Other options:

For details on how to use dynamic data sources, see [Dynamic Data Source Usage](https://help.jeecg.com/java/java/dyndatasource.html) . This article does not provide a detailed explanation.
