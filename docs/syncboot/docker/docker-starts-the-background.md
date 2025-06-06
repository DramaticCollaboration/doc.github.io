---
order: 4
---

# Docker starts the background

### 1\. Download the project

```
git clone https://github.com/jeecgboot/SyncBoot.git
```

copy

### 2\. Local configuration host

```
# jeecgboot
127.0.0.1   jeecg-boot-mysql
127.0.0.1   jeecg-boot-redis
127.0.0.1   jeecg-boot-system
```

copy

> Note: If MySQL and Redis are installed locally, stop the local services before starting the container, otherwise there will be port conflicts.

```
 net stop redis
 net stop mysql
```

copy

### 3\. Modify database and redis configuration

```
cd jeecg-boot\jeecg-module-system\jeecg-system-start\src\main\resources
```

copy

Modify `application-dev.yml`the database connection and redis connection, and change the connection to host mode

### 4\. Enter the root directory of the jeecg-boot project and execute the Maven packaging command

Enter the project

```
cd SyncBoot/jeecg-boot
```

copy

```
mvn clean install
```

copy

### 5\. Enter the jeecg-boot root path, execute the docker command, and start the image container group

```
docker-compose up -d
```

copy

The generated mirror group effect:

### 6\. Access the backend interface address

> Please wait for one minute until the Docker container is started and visit the following link

[http://jeecg-boot-system:8080/jeecg-boot/doc.html](http://jeecg-boot-system:8080/jeecg-boot/doc.html)  
See the following interface document, indicating that the background startup is successful

## Additional Documentation

### 1\. Rebuild the image \_\_ container group

```
docker-compose build
```

copy

> When you change the local code, you can rebuild the image with this command.
