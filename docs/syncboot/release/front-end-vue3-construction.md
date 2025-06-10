---
order: 2
---

# Front-end vue3 construction

> This document is the simplest and quickest deployment document

## 1\. Configure the backend interface and compile the project

1.  Configure the background interface address

- Revise`.env.production`

```
VITE_GLOB_API_URL=/jeecgboot
VITE_GLOB_DOMAIN_URL=http://api3.boot.jeecg.com
```

copy

> Important reminder: Please `api3.boot.jeecg.com`change to your own backend domain name.

2.  Compile and package the project

- Enter the root directory

```
cd jeecgboot-vue3
```

copy

- Package compilation

```
pnpm install
pnpm run build
```

copy

- Packaging success

## 2\. Deploy the front end through nginx

Important instructions for forwarding requests to the backend interface through nginx configuration :

- `boot3.jeecg.com`This is the official Vue3 front-end demonstration address. Please `boot3.jeecg.com`replace all the following with your own front-end domain name.
- `/jeecgboot/`This corresponds to `步骤一.1`the parameter in `VITE_GLOB_API_URL`, which can be left unchanged to avoid pitfalls.

```
upstream boot3.jeecg.com {
  server 127.0.0.1:80;
 }
server {
    listen       80;
    server_name  boot3.jeecg.com;
    #前端打的dist资源存放目录
    root		 /srv/www/project;

    location / {
         # 用于配合 browserHistory使用
		 try_files $uri $uri/ /index.html;
    }

	location  /jeecgboot/ {
		#后台接口地址(我们部署去掉了/jeecg-boot项目名，如果你有请加上）
		proxy_pass         http://127.0.0.1:8080/;
		proxy_redirect off;
		#真实IP获取
		proxy_set_header  Host             $host;
		proxy_set_header  X-Real-IP        $remote_addr;
		set $my_proxy_add_x_forwarded_for $proxy_add_x_forwarded_for;
		if ($proxy_add_x_forwarded_for ~* "127.0.0.1"){
		   set $my_proxy_add_x_forwarded_for $remote_addr;
		}
		proxy_set_header   X-Forwarded-For $my_proxy_add_x_forwarded_for;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

}
```

copy

## 3\. Front-end dist description

Put the dist content `/srv/www/project`in the directory of the server.  
`/srv/www/project`Customization is allowed, but it needs to be consistent with the configuration in nginx.

## 4\. Modify the background configuration after compilation

```
dist\_app.config.js
```

copy

## 5\. Other Techniques

1.  The front end does not cache HTML to prevent the cache from continuing to take effect after the program is updated

```
    location / {
         # 不缓存html，防止程序更新后缓存继续生效
          if ($request_filename ~* .*\.(?:htm|html)$) {
            add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
            access_log on;
          }
    }
```

copy
