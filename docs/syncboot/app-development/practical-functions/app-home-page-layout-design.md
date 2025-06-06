---
order: 3
---

# APP home page layout design

> version `2.5+` 20210801  
> Custom configuration supports homepage menu, login page, cover image, online form, designer form and basic information related to APP ( _**Note: if the modified configuration wants to take effect immediately, you need to log out of the APP and log in again. The default configuration information is cached for ten minutes**_ . How to make it effective for all key terminals? Temporary solution, all tokens can be invalidated and the tokens in redis can be cleared)  
> \[TOC\]

## 1\. APP basic configuration

> Login page, logo image, carousel image

Log in to the backend and click `表单设计 > APP智能设计`, you can see the page as shown below  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1626250257849.png)  
Under the configuration information tab, you can set the app title, logo, and homepage carousel information. The app page after configuration is complete is as follows  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1626320073900.png)  
**Configuration method:**  
After filling in the title and other information, click the Save button below;

## 2\. Home page menu configuration

> Home page menu icon, routing, online form, designer form

### 2.1 Field Introduction

See below:  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1642403202154.png)

### 2.2 New

Click the + sign in the picture, the right side will switch to the menu configuration tab, enter the basic information, and click Save to add it.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1643008163179.png)

> For specific routing configuration, please refer to \[2.5 Routing Configuration\] below.

### 2.3Edit

Click a specific service module, and the information will be displayed in the form on the right. After modifying the information, click Save to complete the editing.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1643008194335.png)

### 2.4 Delete

Double-click any service module to enter the delete mode. A delete mark will be displayed in the upper right corner of all service modules. Click the delete mark in the upper right corner of a specific module to delete the service module. Double-click any service module again to return to normal mode.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/test11.gif)

### 2.5 Routing Configuration

**Method 1: Manually enter the route name. The specific route name is obtained as follows:**  
APP end configuration route:  
1: Configure the page path in the page.json file  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1626618523017.png)  
2: Configure the routing address and name in the routes file under the router  
![](https://lfs.k.topthink.com/lfs/0ece03fd58bb4036d0a4167c6ee98e6b9cb300024b8f515323428e807f871d25.dat)  
3: Configure the route name to the location shown below  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1642404328994.png)  
**Method 2: Click on the back of the input field![](https://help.jeecg.com/@java/uniapp/images/screenshot_1643012596327.png)Click the operation button, a selection box pops up, select the form you want**

Tab1 corresponds to the online form you created  
Tab2 corresponds to the designer form you created

> Note:  
> The routing configuration format for online connection: **/app/online/table name**  
> The routing configuration format for form designer connection: **/app/desform/form code**  
> The format of ordinary routing configuration: _**The routing name set on the APP side**_

### 2.6 Is it enabled?

The status of the newly added module is turned on by default. If it is turned off, the menu module on the left will be grayed out and the module will not be displayed on the app page.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/test22_1642403951966.gif)

### 2.7 Drag and drop layout

Drag a specific service module and place it anywhere to modify the layout and layout. After dragging, click the **Save Layout** button below  
**. Remember: Be sure to click the Save Layout button after dragging and sorting.**  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/test22.gif)

## 3\. How to switch the home page layout

By setting the parameter isLocalConfig of the App.vue page configuration in the root directory  
to true by default, it means that the homepage is built through the data configured by the front end.  
Change it to false to load the homepage through the data designed intelligently by the backend.

![](https://lfs.k.topthink.com/lfs/2594d470a94aaf18fbe7c9156d6511413e12042c466cbb641fe60f99bf8f2ecc.dat)
