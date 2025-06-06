---
order: 3
---

# Tenant Function Introduction

> Upgrade description: Overall logic transformation of tenants,`v3.5.3+生效`

> **The main functions include:** adding/editing/deleting tenants, inviting/removing users for tenants, restoring deleted tenants, and setting product packages for tenants (the concept of tenant permissions: similar to the authorization of the role menu)

## 1\. Role `平台管理员`Owned Tenant Menu

> Creation and maintenance of tenant lists, creation and maintenance of tenant default packages.

### 1\. Add/edit/delete a tenant

- ① Tenant management portal
- ② New tenants
- ③ Edit tenant/delete tenant

![](https://lfs.k.topthink.com/lfs/a08cae7c16b91f63754422389c8613076c5c6010bdfd818beb22e1aea941b047.dat)

Tenant product package maintenance is used to allocate permissions to tenant personnel.

> **Package:** Set menu permissions for different users under a tenant, so that each user sees a different menu after logging in

![](https://lfs.k.topthink.com/lfs/6299a8f11b6c1cbeef83716b8ad6a49472609d1d7be68d7160057d513cb0d149.dat)

- \[1\]. Package permission settings  
  ![](https://lfs.k.topthink.com/lfs/bdd3e158e88f3c5dcb182f91981550a121ed887cfb0ff5059f11ecc439fbb146.dat)

- \[2\]. Package settings user  
  ![](https://lfs.k.topthink.com/lfs/91c8b842f839083607ca1a5d5ffee8d5c849a65bf9851d5190ae31cccb5ed90d.dat)

### 2\. How to create a tenant default package

- The super administrator can maintain a batch of `租户默认套餐包`permissions in advance, so that when a tenant is created, it will be created by default for the new tenant `默认租户套餐`, saving repeated configuration work.

![](https://lfs.k.topthink.com/lfs/5c1d8574a95eb5bb1d62a2eb07198ae789702571723a0b59973722157e09fd80.dat)

- Added default tenant package
- Modify the tenant default package
- Delete the tenant default plan

### 3\. Tenant Recycling Station

- Click Recycle Bin in Tenant Management  
  ![](https://lfs.k.topthink.com/lfs/4eee76fb8138e4fb5b72f9fa440449e87ea6ef67a04742d6669000d496233e23.dat)

## 2\. Role `租户管理员`Owned Tenant Menu

> Tenant administrator, has the menus: My Tenant, Tenant User, Tenant Role, and supports adding users

### 1\. My tenants

#### 1.1 Basic Operations

- Allow: invite users, remove users, edit packages, set package permissions for users
- ① Enter my tenant page
- ② Invite users
- ③ Maintenance Package
- ④ User please leave

![](https://lfs.k.topthink.com/lfs/139e44329327f8659f607e9f5e7ce73a5952fd64993e0e8738b654abdff0be57.dat)

#### 1.2 Invite users to join a tenant

- Select one or more records, click Invite User to Join (①), enter the user's mobile phone number, and click the Confirm button (②) to directly invite the user to join this tenant.  
  ![](https://lfs.k.topthink.com/lfs/13087b491c649c551c305e185d3c22d0c50bd888755e814d975ec1212cc1e989.dat)

#### 1.3 Tenant Package Set-up Personnel

> **Package:** Set menu permissions for different users under a tenant so that each user sees a different menu after logging in

- In Tenant Management, select a record and click Package
- ①② Open the package pop-up window

![](https://lfs.k.topthink.com/lfs/996151742b4a4a48bb55d4fed3065eb1f90df295c9f511ac7b6f13ba3a9e6a96.dat)

> Set up users for a plan

- Click the product package for which you want to set up users (①), then click Invite User (②)

![](https://lfs.k.topthink.com/lfs/56a38dfbf0a1a0df2f9d82d97d06cfaed13d0e269cd0a9a044caa54453e95656.dat)

- Can remove users

![](https://lfs.k.topthink.com/lfs/b4f06a4518f5a18585943ffeccee98ea4a6a917c5b77a392bb2eb2705617a9e2.dat)

### 2\. Tenant users

> Displays the users of the currently logged in tenant

- No new additions are allowed, only editing of personnel is allowed (tenants cannot be changed), please leave the user
- ① Enter the tenant user page
- ② Resignation information
- ③ Edit User
- ④ Move the mouse to More and a "Leave" button will appear.

![](https://lfs.k.topthink.com/lfs/4295d794da47ab3874fc63881a04cbc5890c77b8a5d87ac4f8c1ab2e5d17d46c.dat)

### 3\. Tenant roles

> First, a hidden role is assigned to registered tenant users by default `test`. Note that this role is hidden and is used to set some default permissions.  
> Second, tenant administrators can customize the role and assign it to tenants.

- Maintain the roles of the current tenant
- ① Enter the tenant role page
- ② Add tenant roles
- ③ Set user for current role
- ④ Move the mouse up and down to edit, view, and delete tenant roles.

![](https://lfs.k.topthink.com/lfs/4a445803d260cd57da0464f95bb657eb3b4c2e4e0deec07ebf07d04c16ea9bb4.dat)
