---
order: 5
---

# Docker starts the front end

## 1\. Docker image starts the front end (docking the single backend)

### 1\. Download the project

```
git clone https://github.com/jeecgboot/SyncBoot.git
```

copy

### 2\. Configure host

> Reminder: Please note that you need to `127.0.0.1`replace with the real IP, such as `192.`the beginning, otherwise the backend will not work.

```
127.0.0.1 jeecg-boot-system
127.0.0.1 jeecg-boot-gateway
```

copy

You can use the tool [SwitchHosts](https://download.csdn.net/download/zhangdaiscott/88918530) to quickly configure the host.

![](/images/2d67421b7badd2e7c7dda0aeef28b677fa69d6059d1b4c88f7fd566ee5a8cae8.png)

### 3\. Configure the backend domain name (can be ignored)

Enter the front-end project

```
cd SyncBoot/jeecgboot-vue3
```

copy

Revise`.env.production`

```
VITE_GLOB_API_URL=/jeecgboot
VITE_GLOB_DOMAIN_URL=http://jeecg-boot-system:8080/jeecg-boot
```

copy

> The jeecg-boot-system here corresponds to the domain name configuration of the host.

### 4\. Enter the project root directory and execute the compile command

```
pnpm i
npm run build
```

copy

### 5\. Build the image

```
docker build -t jeecgboot-vue3 .
```

copy

### 6\. Start the image

```
docker run --name jeecgboot-vue3-nginx --network jeecg_boot -p 80:80 -d jeecgboot-vue3
```

copy

> Note: If the startup prompt is displayed `docker: Error response from daemon: network jeecg_boot not found`, you need to start the background docker first.

### 7\. Access the front-end project

[http://localhost:80](http://localhost:80)

### 8\. Start the background project

[Docker Monolith Backend](up.html)

### 9\. Change the background host address to IP

> If you cannot get the verification code, please change the host in the background to the real IP address, and do not use 127.0.0.1.  
> Refer to the figure below, and restart the front-end docker after changing it.

![](/images/9a56f70648b1a25b1a55083e5794448496f7b306bafa967b16b7baef008edc2a.png)  
After restarting, refresh the page to get the verification code.

---

## 2\. Docker image starts the front end (connecting to the microservice backend)

> The previous steps are the same as for monomers, only the differences are written here

### 1\. Change the backend domain name to the gateway address

.env.production

```
VITE_GLOB_API_URL=/jeecgboot
VITE_GLOB_DOMAIN_URL=http://jeecg-boot-gateway:9999
```

copy

[Docker starts the microservice background](springcloud.html)

### 2\. Modify the Dockerfile file

Replace jeecg-boot-system with jeecg-boot- `http://jeecg-boot-system:8080/jeecg-boot`gateway`http://jeecg-boot-gateway:9999`

```
location   /jeecgboot/ {
         # 必须有/
         proxy_pass              http://jeecg-boot-gateway:9999/;
         proxy_redirect          off;
         proxy_set_header        Host jeecg-boot-gateway;
         proxy_set_header        X-Real-IP \$remote_addr;
         proxy_set_header        X-Forwarded-For \$proxy_add_x_forwarded_for;
  }
```

copy

> Note: In the microservice deployment Dockerfile, both location and proxy_pass must end with /, otherwise the gateway connection will report an error.

### 3\. Enter the project root directory and execute the compile command

```
npm run build
```

copy

### 4\. Build the image

```
docker build -t jeecgboot-vue3 .
```

copy

### 5\. Start the image

```
docker run --name jeecgboot-vue3-nginx --network jeecg_boot -p 80:80 -d jeecgboot-vue3
```

copy

> Note: If the startup prompt is displayed `docker: Error response from daemon: network jeecg_boot not found`, you need to start the background docker first.

### 7\. Access the front-end project

[http://localhost:80](http://localhost:80)
