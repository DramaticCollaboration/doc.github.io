---
order: 2
---

# Unified file upload rules

jeecg-boot provides file and image upload functions. The first two files have introduced MinIO and OSS configuration. Now you can choose the upload method according to your needs.

## You can switch the image/file storage mode in the yml file

![](https://lfs.k.topthink.com/lfs/47fd75003c5332a332adc58d7ee1451481f4b66b921ee92ce06762639ced7c0a.dat)  
local is local storage, and jeecg.path.upload also needs to be configured.  
minio is to use MinIO online storage.  
alioss is to use Alibaba Cloud online storage.

## Access path

```
http://127.0.0.1:8080/jeecg-boot/sys/common/upload
```

copy

```
@PostMapping(value = "/upload")
public Result<?> upload(HttpServletRequest request, HttpServletResponse response) {
   Result<?> result = new Result<>();
   String savePath = "";
   String bizPath = request.getParameter("biz");
   MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
   MultipartFile file = multipartRequest.getFile("file");// 获取上传文件对象
```

copy

## Send parameter description

| name | type   | illustrate                                   |
| ---- | ------ | -------------------------------------------- |
| we   | String | Custom file storage path, alioss is required |
