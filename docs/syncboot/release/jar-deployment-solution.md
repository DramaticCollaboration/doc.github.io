---
order: 3
---

# JAR deployment solution

> Version: 3.5+

## Server Recommendations

> Recommended general server configuration: 4 cores + 8G memory + 50G hard disk. Of course, the higher the configuration, the better, and you `2核/4GB`can also run it to save costs;

## Formal environment deployment

> - Backend services run as JAR
> - Dist of front-end project build is deployed to nginx

### 1\. JAR package of jeecg-boot project

- 1\. Modify the configuration file application-prod.yml

> Modify database connection, cache redis, upload attachments and other configurations

- 2\. Switch Maven to production mode

- 3\. Packaging through jeecg-boot-parent

- 4\. Get `jeecg-system-start-{版本号}.jar`the package

### 2\. Start the backend through JAR

Start the project by command

```
Window启动命令：
java -jar jeecg-system-start-3.5.0.jar

Linux下后台进程启动命令：
nohup java -jar jeecg-system-start-3.5.0.jar >catalina.out 2>&1 &

关掉项目：
ps -ef|grep java
kill 进程号
```

copy

### 3\. Deploy Vue3 front-end through nginx

#### 3.1 nginx configuration front end

Configuration instructions:

- `boot3.jeecg.com`This is the official Vue3 front-end demo address. Please `boot3.jeecg.com`replace all the following with your own front-end domain name.
- `/jeecgboot/`The following `proxy_pass`corresponds to `通过 nginx 配置请求转发到后台接口`

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

#### 3.2 Front-end dist location description

Put the dist content `/srv/www/project`in the directory of the server.  
`/srv/www/project`Customization is allowed, but it needs to be consistent with the configuration in nginx.

### 4\. Access the application

Access the project via: [http://your domain name](#!) , the following page will appear, use the account/password: admin/123456 to log in successfully

### 5\. Backend configuration of independent API domain name (nginx mapping)

- nginx listens on port 80
- Bind domain name (example): api3.boot.jeecg.com

```
    upstream api3.boot.jeecg.com {
      server 127.0.0.1:8080;
     }

    server {
        listen       80;
        server_name  api3.boot.jeecg.com;
        location / {
            root   html;
            index  index.html index.htm;
			proxy_pass  http://api3.boot.jeecg.com;

			#ip remote_addr
			proxy_set_header X-Forwarded-Scheme  $scheme;
			proxy_redirect    off;
			proxy_set_header  Host             $host;
			proxy_set_header  X-Real-IP        $remote_addr;
			proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
        }
    }
```

copy

### 6\. Websocket Configuration

> Reminder: Some versions of nginx configuration require the addition of Upgrade and Connection protocol headers, otherwise WebSocket will fail with 404.

```
 #支持websocket得这么写，不然CentOS上可能失败
 # proxy_http_version 1.1;
 proxy_set_header Upgrade $http_upgrade;
 proxy_set_header Connection "upgrade";
```

copy
