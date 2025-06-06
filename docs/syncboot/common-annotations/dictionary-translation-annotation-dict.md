---
order: 2
---

# Dictionary translation annotation @Dict

> Dictionary translation annotation @Dict: used for dictionary translation of list fields (for example, if the value of the field sex is 1, a translation field sex_dictText with the value 'male' will be automatically generated)

#### 1\. Functional Description

Translate the value of a column in the database into the corresponding text description according to the dictionary configuration.  
For example: The user table has a field: gender. The 1 and 2 stored in the database represent male and female respectively. When the data is queried and displayed in the list, 1 and 2 need to be translated into male and female. This requires the use of @Dict

#### 2\. Instructions for use (taking the gender column of user management translation as an example)

1.Configure dictionary  
![](https://lfs.k.topthink.com/lfs/0a6ce98c456f0316df6cda91bb976d12aeb8a3453a9d0a04284a70f2e7809422.dat)  
![](https://lfs.k.topthink.com/lfs/2c2b7659c6614f2eaae85d989cb1710d82a5f2aa2880693a5ed9ae111a72e98c.dat)  
2\. Annotate the backend entity attributes (here dicCode corresponds to the above dictionary code)

```
 /**
  * 性别（1：男 2：女）
  */
 @Dict(dicCode = "sex")
  private Integer sex;
```

copy

3\. Define the column in the front end ( **the original field name of dataIndex here is sex, and it needs to be defined as sex_dictText, that is, the original field name + '\_\_dictText'** )

```
 columns: [
    //...省略其他列
    {
     title: '性别',
     align: "center",
     width: 80,
     dataIndex: 'sex_dictText'
     }]
```

copy

4\. Dictionary table translation usage

```
@Dict(dicCode = "id",dictTable="sys_user",dicText="realname")
```

copy

screenshot:  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687780987796.png)
