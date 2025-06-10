---
order: 4
---

# Enable Nginx compression

> Enable Nginx compression to solve the problem of slow front-end access

Add the following snippet to http in nginx.conf

```
    # gzip config
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";
```

copy

Reference image:

Reference link: [https://github.com/zhangdaiscott/jeecg-boot/issues/88](https://github.com/zhangdaiscott/jeecg-boot/issues/88)
