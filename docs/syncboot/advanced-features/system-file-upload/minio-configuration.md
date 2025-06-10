---
order: 3
---

# MinIO Configuration

jeecg-boot provides files and images to upload to MinIO.

## MinIO installation and deployment

Official documentation: [https://docs.min.io/docs/minio-quickstart-guide.html](https://docs.min.io/docs/minio-quickstart-guide.html)

## Configure MinIO bucket access policy

- If you set \* ReadOnly, all users can access the file through the file path, and there is no need to set an access policy for private buckets.  
  ![](https://lfs.k.topthink.com/lfs/3338251179d946d9b5e5561facb2afcfdf3f5f7cde13bb63c89c5c5612ebd831.dat)

## yml file configuration

Set MinIO configuration in yml file  
![](https://lfs.k.topthink.com/lfs/79c79613398284b2cf86cc2bfaa2e6f72facfe68917297199b07c0ad25f7761f.dat)  
Parameter Description

| name       | illustrate                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------- |
| mini_url   | MinIO access path (ip or domain name)                                                        |
| minio_name | account                                                                                      |
| minio_pass | password                                                                                     |
| bucketName | If the MinIO bucket name is not created, a bucket will be created first when uploading files |
