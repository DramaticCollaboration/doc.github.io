---
order: 4
---

# Alibaba Cloud OSS Configuration

jeecg-boot provides files and images to upload to Alibaba Cloud OSS.

## Register an OSS account

[How to apply for an Alibaba Cloud account](https://blog.csdn.net/legend12300/article/details/51130877)

## Create a bucket

When creating a bucket, you can set the bucket name, read and write mode, and Endpoint according to the selected region.  
![](https://lfs.k.topthink.com/lfs/4d655524c17c4e9316bbb4b59e105ae411f44c8e2b37eefc9263642ba7ea9b9b.dat)  
![](https://lfs.k.topthink.com/lfs/fb62f80c0c690bf02014e3ee10480500e606093d9a70995470c53ee0ee8eb7a8.dat)  
![](https://lfs.k.topthink.com/lfs/8fa9c9fed3618002540099c25d8055cb2398906b7f1327fd21595eed47030c8f.dat)

## Set access policy (important)

After creating a bucket, you can create an access policy in the bucket details to authorize other users to access OSS resources. For more policy settings, see Alibaba Cloud Documentation.  
![](https://lfs.k.topthink.com/lfs/0537cbf58408be2bce0ee0d9b3a90446d8f00e2014c5e0152fb5f0224638bc48.dat)  
![](https://lfs.k.topthink.com/lfs/75df6b2c92b2b5a7434b8eb21b044d65c3ef8d69acc4fd90e722fced02500d49.dat)  
You can also set the bucket access policy in the code

```
设置权限(公开读)
ossClient.setBucketAcl(newBucket, CannedAccessControlList.PublicRead);
```

copy

## yml file configuration

After registering an account, set OSS access in the yml file  
![](https://lfs.k.topthink.com/lfs/1bdb3b991fd099bc2b2a8d8adaa591b5f4e6b5449a1c78806cab27f1962c4fd9.dat)  
Parameter Description

| name                                                                                                                                | illustrate                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| endpoint                                                                                                                            | OSS endpoint The endpoint selected based on the region when creating a bucket      |
| accessKey                                                                                                                           | Alibaba Cloud API key                                                              |
| secretKey                                                                                                                           | The accessKeySecret of the account                                                 |
| bucketName                                                                                                                          | Alibaba Cloud Bucket Name                                                          |
| staticDomain                                                                                                                        | The OSS access domain name set by the server. If not, the default endpoint is used |
| How to obtain: After logging in to your Alibaba Cloud account, you can obtain it in User Management Security Information Management |                                                                                    |
| ![](https://lfs.k.topthink.com/lfs/365fd3ab462eadab33c01611f9989ab5a8df32ebdd929ed84bae1840e404af28.dat)                            |                                                                                    |
