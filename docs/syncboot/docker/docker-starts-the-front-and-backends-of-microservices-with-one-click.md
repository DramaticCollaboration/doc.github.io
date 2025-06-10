---
order: 3
---

# Docker starts the front and back ends of microservices with one click

### 1\. Download the project

```
git clone https://github.com/jeecgboot/SyncBoot.git
```

copy

### 2\. Compile the background project

Enter the backstage

```
cd SyncBoot/jeecg-boot
```

copy

Compile

```
mvn clean install -Pdev,SpringCloud
```

copy

### 3\. Modify the front-end configuration

> Modify the configuration file: jeecgboot-vue3/.env.production

```
VITE_GLOB_DOMAIN_URL=http://jeecg-boot-gateway:9999
```

copy

### 4\. Compile the front-end project

Enter the front end

```
cd SyncBoot/jeecgboot-vue3
```

copy

Compile

```
pnpm i
pnpm run build
```

copy

### 5\. Modify the front-end Dockerfile

> Modify the configuration file: jeecgboot-vue3/Dockerfile

- Replace the Host's jeecg-boot-system with jeecg-boot-gateway
- `http://jeecg-boot-system:8080/jeecg-boot`Change proxy_pass to`http://jeecg-boot-gateway:9999`

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

> Note: location and proxy_pass end with `/`, otherwise gateway access will fail.

### 6\. Start the image container group

Enter the SyncBoot root path

Execute docker command

```
docker-compose -f docker-compose-cloud.yml up -d
```

copy

Docker group started successfully

### 7\. Accessing the system

> Wait for 1 minute, after the MySQL data is initialized, access the system

- [http://localhost:80](http://localhost:80)
