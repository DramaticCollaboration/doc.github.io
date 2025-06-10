---
order: 2
---

# Visibility control

Implement JVxeTable list visibility permissions

## Configure permissions

1\. `authPre`Parameters are required to configure a permission prefix.  
![](https://lfs.k.topthink.com/lfs/7b2eae4fd90769f7944bd7890a4e93ed90a0eafc0ae6f944f90bbdf0c0795c38.dat)

> You can write anything you want here, but the one configured on the menu should correspond to the one above.

2\. On the menu management page, find the menu page where JVxeTable is located and add subordinate button permissions

- **The format of the authorization identifier** is: `authPre:columnKey`  
  For example, the one filled in here `authPre`is `vxe`, so it needs to `vxe:`start with , and the one after the colon is the key of the column,
- **Authorization strategy** to select`可见/可访问`  
  ![](https://lfs.k.topthink.com/lfs/247a023ec7e33c275fb35e10f8e0f92df4adbd0a4ae77d54c4897b17bea027ac.dat)  
  ![](https://lfs.k.topthink.com/lfs/605b849aceb827380186c2087505b710817f979c9ced449f30776e0fd5694c43.dat)

3\. After configuring the permissions, you can `角色管理`authorize the corresponding roles on the page. The column will not be displayed for roles that are not authorized.  
![](https://lfs.k.topthink.com/lfs/1f793e3ea9f5736c9f0c721db28504a3b7fb6db33e559a2af8dc03d03d914c42.dat)

## Test results

### Have permission

![](https://lfs.k.topthink.com/lfs/7611b613cddec880e39551fb68aa81ec09872b2a17f8a9276fbb5124c486401b.dat)

### No permission

![](https://lfs.k.topthink.com/lfs/7ff3fa7559be4f653a5a2be95b278dcaec875dfcff1c9b815a7b5284246b1623.dat)
