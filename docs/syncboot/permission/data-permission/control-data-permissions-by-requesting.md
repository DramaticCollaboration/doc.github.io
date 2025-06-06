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

### 2\. Added secondary data permission menu

Enter \[System Management\]-->\[Menu Management\] interface and add a new permission menu (as shown below)

### 3\. Configure data permission rules

Find the menu added in step 2, click Data Rules in the Operation column, and configure _to only query users with a user account number of 1_ (as shown below)

### 4\. Role Authorization

Go to \[System Management\]-->\[Role Management\] interface to find the role corresponding to the current user, click More->Authorization Operations, find the step 2 menu in the pop-up box on the right, click it, check the permission rules, and save (as shown below)

### 5\. Testing

Log out and log back in to the system, access the user management interface and find that the data has been filtered, that is, the permissions are effective!
