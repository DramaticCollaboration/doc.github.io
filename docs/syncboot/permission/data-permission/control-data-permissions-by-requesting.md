---
order: 8
---

# Control data permissions by requesting

## Method B: Implement data permissions by requesting URL

> A permission menu needs to be configured for each request, which is a bit troublesome for simple pages;  
> but it also has its own advantages. If a routing page has multiple lists and permission control needs to be performed separately, this solution is needed.

### 1\. Add annotations

Add annotations to the background request method `@PermissionData`(as shown below)  
Design purpose: In order to improve the efficiency of the system, you can specify the logic of request permission filtering, rather than killing all requests with one stick and letting all requests filter permissions  
![](/images/de0db430877afc8b226aa2591cb28a0037c61292f8abfd92c5176d41cf2ab0dc.png)

### 2\. Added secondary data permission menu

Enter \[System Management\]-->\[Menu Management\] interface and add a new permission menu (as shown below)  
![](/images/95e477d4809ba46a79fab85dc308379c73f81ff48c4ee6ef4d4df6fe1802fad3.png)

### 3\. Configure data permission rules

Find the menu added in step 2, click Data Rules in the Operation column, and configure _to only query users with a user account number of 1_ (as shown below)  
![](/images/fe3298b9d41d79bb6abfc51c84e00a7740fcb1ec2ff5a78d2b3bc1796c3734e0.png)

### 4\. Role Authorization

Go to \[System Management\]-->\[Role Management\] interface to find the role corresponding to the current user, click More->Authorization Operations, find the step 2 menu in the pop-up box on the right, click it, check the permission rules, and save (as shown below)  
![](/images/e98bfcd4e4c62214f01c7328d6d53fab0a163a0bafa763e5e39be0624eb4e36d.png)

### 5\. Testing

Log out and log back in to the system, access the user management interface and find that the data has been filtered, that is, the permissions are effective!
