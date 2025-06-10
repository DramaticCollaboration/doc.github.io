---
order: 14
---

# Online multiple data sources

**How to configure online multiple data sources**  
First open the configuration management page: System Monitoring > Multiple Data Source Management  
![](https://lfs.k.topthink.com/lfs/b5c650b462e51865b3acd1a78fbd9882b9735fd6870db46d3ddadcc790b0c251.dat)  
1\. Added  
![](https://lfs.k.topthink.com/lfs/c2374cc16bdc6ad9c29bb946b50fa772a3d5cd115561a62755a5b859637406bb.dat)

> The data source code is unique and must start with a letter and can contain numbers, underscores, and hyphens.

After filling in the information, you can click Test to see if the configuration is correct. As shown in the figure below, if the test is successful, the configuration is correct.  
![](https://lfs.k.topthink.com/lfs/016ef4040b89aa787baa37f442530bcdc708c74816535d5262f2a4f3cdd1da25.dat)

2\. Edit  
If there are errors in the information, you can click Edit to modify it. Please note that the data source code cannot be changed.  
![](https://lfs.k.topthink.com/lfs/5e152a0522b5babe95901458aa5573991b87f21c725af25efbeb21f0f414fa71.dat)

Similarly, the configuration methods for Oracle and SQLServer databases are the same. Just select the corresponding database type and fill in the connected account and password.  
![](https://lfs.k.topthink.com/lfs/5826aeda2933206d76917a1758d208564bfade086a6d8d999b1999d8e02457b0.dat)

Note:  
If the displayed driver class and data source address are inconsistent with your database version, you can modify them yourself. **For example:**

### Several Differences Between MySQL 5.x and MySQL 8.0.X

_**Mysql5.x**_  
driver class: com.mysql.jdbc.Driver  
Data source address: jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=utf-8&useSSL=false  
_**Mysql8.0.X:**_  
Driver class: com.mysql.cj.jdbc.Driver  
Data source address: jdbc:mysql://127.0.0.1:3306/jeecg-boot?useUnicode=true&characterEncoding=UTF8&useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC

3\. Test  
online development > online report configuration  
![](https://lfs.k.topthink.com/lfs/5ae2999838d9cf91f45a54a06b3f92d0c631a354b4c6690d833e9fff47340313.dat)  
Edit: Configuring Data Sources  
![](https://lfs.k.topthink.com/lfs/dfe5c0517ac4ff5fdc1bf6d3160d9772613fd26561448b24c1d492dfea36245f.dat)  
Click 'Functional Test'  
![](https://lfs.k.topthink.com/lfs/c03b2c4258fb2841ee107475b179915af09ee92687ba6bfe625617d9d7bedadd.dat)  
If the following figure appears and the loading continues or the query fails, the data source configuration is incorrect.  
![](https://lfs.k.topthink.com/lfs/1ac909a8c564f4a59702a8beb2d9f2d08333f3257bf7439e41cbe994fcf4d579.dat)  
![](https://lfs.k.topthink.com/lfs/c8fc98199250a3870e08d5075bd1d8f82e633f23ea1ad4febe30a0725b157c22.dat)  
If the following figure appears, the data source configuration is correct.  
![](https://lfs.k.topthink.com/lfs/b8f12f5e9c9340ae1ac5503dc35df228a481cdceae9feb7d75cdbbde8a108332.dat)
