---
order: 3
---

# Disable Control

Implement JVxeTable list disabling permissions

## Configure permissions

1\. `authPre`Parameters are required to configure a permission prefix.  
![](https://lfs.k.topthink.com/lfs/7b2eae4fd90769f7944bd7890a4e93ed90a0eafc0ae6f944f90bbdf0c0795c38.dat)

> You can write anything you want here, but the one configured on the menu should correspond to the one above.

2\. On the menu management page, find the menu page where JVxeTable is located and add subordinate button permissions

- **The format of the authorization identifier** is: `authPre:columnKey`  
  For example, the one filled in here `authPre`is `vxe`, so it needs to `vxe:`start with , and the one after the colon is the key of the column,
- **Authorization strategy** to select`可编辑`  
  ![](https://lfs.k.topthink.com/lfs/c6378a722e656ddedd9e83a530fa4849aa8dfe593e5d60aa1bc04522171dec6b.dat)  
  ![](https://lfs.k.topthink.com/lfs/4bc421ff3ec4ce227f0eccc188192e35c472b4427220d896348a0b741814ca72.dat)

3\. After configuring the permissions, you can `角色管理`authorize the corresponding roles on the page. The column will not be displayed for roles that are not authorized.  
![](https://lfs.k.topthink.com/lfs/5a2b158402eb2de9f18f083d9b8787b58797b651012e3d4b4c205d398a848289.dat)

## Test results

### Have permission

![](https://lfs.k.topthink.com/lfs/e0723c204f4605e5d1d3e3f328e0db0ec74f03062e0ecff2c1c900899d090bd0.dat)

### No permission

![](https://lfs.k.topthink.com/lfs/40034dc31182f77e89fd7896d8e7154f996d81f1bada4781635f3ef026230136.dat)
