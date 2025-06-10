---
order: 4
---

# Create a new microservice module

This article aims to: quickly generate new microservice modules through the archetype command

## Generate New Module

`mvn`Generate microservice module through command `jeecg-module-erp`  
Important: `包名规则 org.jeecg.modules.*` Do not change, otherwise the bean cannot be scanned!

## mvn Command

```
//注意:windows下可直接复制执行， Linux/Macos下  ^ 修改成  \

mvn archetype:generate ^
   -DgroupId=org.jeecg.modules.erp ^
   -Dmodule=erp^
   -Dmodule-up-first=Erp^
   -DartifactId=jeecg-module-erp ^
   -Dversion=3.7.0^
   -DarchetypeGroupId=org.jeecgframework.archetype ^
   -DarchetypeArtifactId=jeecg-cloud-gen ^
   -DarchetypeVersion=3.5.0
```

copy

> Important reminder:  
> DarchetypeVersion version number `3.5.0`is fixed, do not change it

## Integration steps

### 1\. Generate project structure

![](https://lfs.k.topthink.com/lfs/f2709b2d4faaa8ac8567c9b8ff47dbbc82f197776f8cab5c8133e57cd9e20e90.dat)

### 2\. How to start a project

1.  Modify the startup port  
    custom port, modify `jeecg-module-{模块名}-start/application.yml`the properties `server.port`  
    through IDEA right click execution class: `jeecg-module-{模块名}-start/org.jeecg.Jeecg{模块名}CloudApplication`Start the project  
    to access the service module interface address: [http://127.0.0.1:{port}](http://127.0.0.1:%7B%E7%AB%AF%E5%8F%A3%7D)  
    ![](https://lfs.k.topthink.com/lfs/2de28adb9a8e1d11cd071f3c8352c31265ff89a859a1170a4cff1011d339215d.dat)

2.  Start the module by command

> Reminder: The prerequisite is to `jeecg-boot-parent`install it to the local warehouse.

```
cd  jeecg-module-{模块名}
mvn clean install
cd jeecg-module-{模块名}-start\target
java -Dfile.encoding=utf-8 -Djava.security.egd=file:/dev/./urandom -jar jeecg-module-{模块名}-start.jar
```

copy

Startup Success  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1658376465480.png)  
Found this service in nacos  
![](https://lfs.k.topthink.com/lfs/4936eee17f01be2d8a88649518fd5a0acefc37a5413806956f0d74bc0dfb34cf.dat)

3.  Add a routing gateway  
    to the system monitoring - routing gateway menu

![](https://lfs.k.topthink.com/lfs/d170585d935b4db55997a1d5ae7644289d4f50e8749cc7eac62766e24e48c957.dat)  
Click Add Microservice Module  
![](https://lfs.k.topthink.com/lfs/2640f9229d2d5dea906d3c71e33fa06b6a5bdd7ffa18dfdb22044b0ecee8ad64.dat)

4.  Access gateway address

> Seeing the generated new module through gateway means that the configured gateway has taken effect. Now you can play with the interface interoperability between services.

![](https://lfs.k.topthink.com/lfs/5d64da16aca2239cb8030b07b5919600786a77ad507d6472d45ebe70e3ae9236.dat)

5.  If you need to call the API of the system module, please introduce

```
<!--system cloud api-->
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-system-cloud-api</artifactId>
</dependency>
```
