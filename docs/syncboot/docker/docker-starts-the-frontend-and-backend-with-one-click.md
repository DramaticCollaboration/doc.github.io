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

![](/images/335c815c5c7b8d084c00b8de32d9b980be89d23dd8e2c8495adbf58823daa09b.png)

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
![](/images/c27f77c8b095df558b004b67894ea6a89c588891b230cb529d417cc8c24f136c.png)

Execute docker command

```
docker-compose up -d
```

copy

Docker group started successfully  
![](/images/a0c59b8105f591bd2bf4b79e390bf667340e5f35a3fec38a9b74c1561109488f.png)

### 7\. Accessing the system

> Wait for 1 minute, after the MySQL data is initialized, access the system

- [http://localhost:80](http://localhost:80)

![](/images/34b4250333e185e51cfe772286bde21bbb9e5e277834880e20c95077768095f2.png)
