---
order: 2
---

# Swagger usage

> Preface: Using swagger requires simulating login to obtain token, which is the premise of testing the interface.

1\. Start the system project and access the path  
[http://localhost:8080/jeecg-boot](http://localhost:8080/jeecg-boot)

2\. Get the verification code, follow the picture, enter the value of the parameter key, enter 123 here, click Send, and get the verification code picture  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1653553934872.png)  
![](https://lfs.k.topthink.com/lfs/0afddc878554a550c1492217d4a92c1530d427590fce557a45a2f8bc6272c7d7.dat)

3\. Log in and get a token  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1653554168838.png)

Login Parameter Description

| parameter | illustrate                                                                           |
| --------- | ------------------------------------------------------------------------------------ |
| captcha   | Verification Code                                                                    |
| checkKey  | The verification code is the value of the key entered, which is 123 in this example. |
| password  | login password                                                                       |
| username  | Login User Account                                                                   |

4\. Get the token, follow the instructions, and save the token information to the request header  
![](https://lfs.k.topthink.com/lfs/570538323625a3acd733e84d873a628796e9f4afdc21283c89bd0ff5121064cd.dat)

5\. Test interface-new  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1653554266050.png)

6\. Test interface - query by name and get the user's id  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1653554286865.png)

![](https://lfs.k.topthink.com/lfs/40e13e54ca6e95420a269af7fbdf4b3964986995b2fe389a724abb3ac916574d.dat)

7\. Test interface - modify and enter the above id and new name, and you can modify the name according to the id  
![](https://lfs.k.topthink.com/lfs/2f11c2d6601872cbc27105036c49be4f3a58b1e5e9adca8d0db415ef22e36745.dat)

8\. Query by id and enter the above id  
![](https://lfs.k.topthink.com/lfs/398ca4a0b6242c8b48bfe0ee55fc6ccc94447226000536a16abc3325c47a49ba.dat)

9\. Delete by id  
![](https://lfs.k.topthink.com/lfs/25ebec309a5daa08df29b8382e28a43746a7df49398a91b63d8a4fb201369376.dat)  
Query again, result is empty  
![](https://lfs.k.topthink.com/lfs/3c67e20775450ec76f1f1f4df336a498bfc39e9b226525c643861d09402e797c.dat)
