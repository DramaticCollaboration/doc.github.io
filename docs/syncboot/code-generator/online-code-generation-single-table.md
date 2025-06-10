---
order: 2
---

# Online code generation single table

### 1\. Create a table online through the online form

Find the menu `在线开发 -> Online表单开发`, configure the form online, click Synchronize Database, and a table will be generated in the database.  
![](https://lfs.k.topthink.com/lfs/bf12c14ba0becf7f9da238b37b3570b20f15594fe0b33c3b2cd6cb661d5183e2.dat)

### 2\. Generate code interface

Click the code generation button above the online form, select the form to be generated, and then the code generation interface will be displayed.

![](https://lfs.k.topthink.com/lfs/6f655048efe90c2f5996467c2f90bd54bb37cc8d11795c867833a9cad57c3cdc.dat)

![](https://lfs.k.topthink.com/lfs/02a9b1688f5f75fd1c1a367d7a04a333b75ddb51f89c2bac3e53ed895fd8ac65.dat)

![](https://lfs.k.topthink.com/lfs/51f3169ccd90982a764fbd2dc488a243af387b82cb8204c2620712f554637787.dat)

Code structure generated into the background project  
![](https://lfs.k.topthink.com/lfs/d76efe54e05f9ed79c2b45e1325d12f16874adad7082168f642087e29055dc0a.dat)

### 3\. Copy the generated front-end code to the front-end project

Put the generated front-end code in the view folder of the front-end project`自定义的子包名`

![](https://lfs.k.topthink.com/lfs/12a94fa3105b43ab7ed03f0ba8cd11f3592d8e52545b52ca016281f0f4995a0c.dat)

## 4\. Execute menu SQL

Executing the generated SQL will insert the menu and the permissions corresponding to this function  
![](https://lfs.k.topthink.com/lfs/0cb0c56c1511615aca803fc7bf32819dfeac07fce1ef02739f8335cecb0db271.dat)

execution succeed  
![](https://lfs.k.topthink.com/lfs/55dcc0429b34c09a1f6d3b16c257378de998b99a88bfcd5eeaaf1d8b2edc393a.dat)

## 5\. Role authorization

After successful authorization, refresh the page to see the newly added menu  
![](https://lfs.k.topthink.com/lfs/4f7b7c3903a2970f005ca023f8b3aa81fc80a02e793d9cc2b5d65b85f0e45608.dat)

Restart the background to access the menu function  
![](https://lfs.k.topthink.com/lfs/43733f1d2814ca155f5f210b537316edcc496f5879742405b45a848a6d9d0a99.dat)

## common problem

1.  If you encounter this problem, you need to restart the background  
    ![](https://lfs.k.topthink.com/lfs/87de18cc0364773e2d03f74ef16ec34169138b7430090b49971514ada721421e.dat)

2.  Two form styles  
    Choose different form styles, and the generated front-end directory names are different, namely `vue3`and`vue3Native`  
    ![](https://lfs.k.topthink.com/lfs/42b0c47fa533354a3586b8a16b9668b8cd308b74bec98f96313257a17a1f7c98.dat)

3.  Code generation supports models  
    such as single table, tree table, one-to-many model and different styles of code generation
