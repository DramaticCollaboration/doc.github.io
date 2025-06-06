---
order: 4
---

# Cross-domain processing

## cause

The reason for cross-domain is that the front-end address and the back-end interface are not from the same source, which causes ajax to fail to send

Problems with non-homologous origins

1.  Cookies, LocalStorage and IndexDB cannot be obtained
2.  DOM cannot be obtained
3.  AJAX request could not be sent

Homologous conditions

**The same source means the protocol** , **port** , and **host** are the same

On the contrary, if **any one** of them is different, they are different sources.

## Solution

**Local development cross-domain**

Local development is generally handled in the following 3 ways

1.  vite's proxy
2.  Enable cors in the background
3.  Forwarding requests using nginx

The first method is built into the project. For details, please refer to [Server-side Interaction-Local Development Environment Interface Address Modification](#!)

**Cross-domain production environment**

The production environment is generally handled in the following two ways

1.  Enable cors in the background
2.  Forwarding requests using nginx

**Enabling cors in the background does not require any changes to the front end**

nginx configuration file can view [nginx configuration](https://doc.vvbin.cn/guide/deploy.html#%E4%BD%BF%E7%94%A8-nginx-%E5%A4%84%E7%90%86%E8%B7%A8%E5%9F%9F)
