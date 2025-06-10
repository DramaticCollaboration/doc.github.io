---
order: 5
---

# Maven Private 서버 설정

> SYNC has a custom JAR package, which is placed on its own Maven private server, so sometimes download failures may occur.

Generally, if you encounter a download failure, it is because the user has set up a local mirror, which makes it impossible to download resources from the SYNC private server.  
Please refer to the following method to configure the mirror exclusion.

### 1\. Find Maven's home conf/settings.xml,

Add the following Alibaba Cloud Maven image to the tag (delete your own image configuration). The final result is as follows :

```
<mirrors>
       <mirror>
            <id>nexus-aliyun</id>
            <mirrorOf>*,!jeecg,!jeecg-snapshots,!getui-nexus</mirrorOf>
            <name>Nexus aliyun</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public</url>
        </mirror>
 </mirrors>
```

copy

- The key point of this configuration is this sentence. `<mirrorOf>*,!jeecg,!jeecg-snapshots</mirrorOf>`  
  If you do not add this sentence, all dependencies will be downloaded from the Alibaba Cloud warehouse by default. After adding it, the jeecg dependency package can be downloaded from the jeecg private server.

### 2\. Add the mirror addresses of aliyun and jeecg to the project

```
<repositories>
   <repository>
           <id>aliyun</id>
           <name>aliyun Repository</name>
           <url>https://maven.aliyun.com/repository/public</url>
           <snapshots>
         <enabled>false</enabled>
      </snapshots>
       </repository>
   <repository>
           <id>jeecg</id>
           <name>jeecg Repository</name>
           <url>https://maven.jeecg.org/nexus/content/repositories/jeecg</url>
           <snapshots>
         <enabled>false</enabled>
      </snapshots>
   </repository>
</repositories>
```

copy
