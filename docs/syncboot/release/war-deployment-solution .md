---
order: 7
---

# WAR deployment solution

> Version: 3.5+

## Formal environment deployment

> Adopt nginx+tomcat deployment solution.  
> Backend service is published to tomcat.  
> Frontend is deployed to nginx.

### 1\. Backend project jeecg-boot war package

#### (1) Before building the war package for the background project jeecg-system-start, make the following changes

1\. The project format in the pom.xml file is set to war

```
<packaging>war</packaging>
```

copy

The reference configuration is as follows:  
![](/images/f2c827f8e51a19185e246cbf2f1f4d893aa592aacc779aa68da6520368e25656.png)

2\. Delete the plugin spring-boot-maven-plugin in the pom.xml file and  
configure the following deletion

```
<build>
   <plugins>
	<plugin>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-maven-plugin</artifactId>
	</plugin>
   </plugins>
</build>
```

copy

3\. Comment out the ServerEndpointExporter registration method  
path of WebSocketConfig:`jeecg-boot-base/jeecg-boot-base-core/org.jeecg.config.WebSocketConfig`

![](/images/e5f32fa8b3b4afede906b5440e38e87f783b74f3f26c54e5f9b8ce694dd4ee70.png)

4\. Modify the configuration file application-prod.yml

- a. Modify database connection
- b. Modify cache redis configuration
- c. Modify the upload attachment configuration  
  ![](/images/image_1687780527525.png)
- d. Switch to production mode packaging  
  ![](/images/78d33015f60e37d29e116c5e556f126bcdf086302efb8c9546c8339c07bb7135.png)

First execute the install operation of jeecg-boot-parent  
![](/images/dc385a6c882ebb0205dd7cac03967cd7e73d37ee2ef082bba79bae476076a046.png)  
Then maven package war package  
![](/images/e71dd8947a0b76ae8793ae40dd7e4e39d0fe6934eb65427ecbcce6f53c35ab2b.png)

### 2\. Deploy the background project jeecg-boot to tomcat

1\. Set the tomcat port number to 8080 and set the tomcat encoding URIEncoding="UTF-8"  
2\. Deploy the project to the tomcat directory webapps/jeecg-boot project directory.  
After deployment, access the project interface address through [http://localhost:8080/jeecg-boot/doc.html](http://localhost:8080/jeecg-boot/doc.html) , indicating that the deployment is successful! !

```
注意：
1.tomcat解压war后的目录名称即你访问的根路径，这里是jeecg-boot
```

copy

### 3\. Front-end Vue3 project `jeecgboot-vue3`build and packaging

- 1\. Modify the interface address configuration `.env.production`

```
# 跨域代理，您可以配置多个 ,请注意，没有换行符
VITE_PROXY = [["/jeecgboot","http://localhost:8080/jeecg-boot"],["/upload","http://localhost:3300/upload"]]

#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot
```

copy

- 2\. Build and package  
  Use the build command to package the project

![](/images/a026d0cf82b29f8009bfc791b61ffde147537b86df32988ef73ddfb1c96159ac.png)

After the build is completed, a dist directory will be generated.

- 3\. Nginx deploys the front-end project  
  and copies the code under dist to the html directory under the nginx installation directory.

### 4\. Nginx configuration of front-end Vue3 project

> Solution description: Configure a domain name on the front end and a domain name on the back end, and map them separately through nginx.

- Example: Java API service domain name `api.boot.jeecg.com`is mapped to port 8080 through ngnix
- In the example: vue3 front-end domain name`boot.jeecg.com`

> Reminder: Please replace the domain name involved in the configuration `api.boot.jeecg.com` `boot.jeecg.com`with your own domain name

#### Front-end nginx configuration

- nginx listens on port 80
- Bind domain name (example): boot.jeecg.com

```
server {
		listen       80;
		server_name  前端访问域名;
		#解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题
		location / {
			root   html;
			index  index.html index.htm;
			if (!-e $request_filename) {
				rewrite ^(.*)$ /index.html?s=$1 last;
				break;
			}
		}
	}
```

copy

#### Backend nginx configuration

- nginx listens on port 80
- Bind domain name (example): api.boot.jeecg.com

```
    upstream api.boot.jeecg.com {
      server 127.0.0.1:8080;
     }

    server {
        listen       80;
        server_name  api.boot.jeecg.com;
        location / {
            root   html;
            index  index.html index.htm;
			proxy_pass  http://api.boot.jeecg.com;

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

> Reminder: Some versions of nginx configuration require the addition of Upgrade and Connection protocol headers, otherwise WebSocket will fail with 404.

5\. Access the application

Access the project through `http://你的前端域名`, and the following page will appear, indicating success.  
Account/password: admin/123456

![](/images/image_1681396415192.png)
