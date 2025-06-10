---
order: 2
---

# Docker starts the frontend and backend with one click

### 1\. Download the project

```
git clone https://github.com/jeecgboot/SyncBoot.git
```

copy

### 2\. Modify the background configuration

```
cd jeecg-boot\jeecg-module-system\jeecg-system-start\src\main\resources
```

copy

Modify the database and redis connections in application-dev.yml  
to `jeecg-boot-mysql`and`jeecg-boot-redis`

### 3\. Compile the background project

Enter the backstage

```
cd SyncBoot/jeecg-boot
```

copy

Compile

```
mvn clean install
```

copy

### 4\. Modify the front-end configuration

> This is the default configuration at present, if you have not modified it, it will be ignored.

Modify the configuration file: jeecgboot-vue3/.env.production

```
VITE_GLOB_DOMAIN_URL=http://jeecg-boot-system:8080/jeecg-boot
```

copy

### 5\. Compile the front-end project

Enter the front end

```
cd SyncBoot/jeecgboot-vue3
```

copy

Compile

```
pnpm i
npm run build
```

copy

### 6\. Start the image container group

Enter the SyncBoot root path

Execute docker command

```
docker-compose up -d
```

copy

Docker group started successfully

### 7\. Accessing the system

> Wait for 1 minute, after the MySQL data is initialized, access the system

- [http://localhost:80](http://localhost:80)
