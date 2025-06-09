---
order: 1
---

# Deployment Guide

**SyncCMS**

Deployment manual

# **Contents**

[1. Introduction to SyncCMS 1]()

[1.1. Profile 1]()

[1.2. License Agreement 1]()

[1.3. Access to SyncCMS 2]()

[1.4. Directories 2]()

[2. Deployments 3]()

[2.1. Operating Environment 3]()

[2.2. Deployment Option 3]()

[2.3. Container 6]()

[2.4. Deployment steps 7]()

[2.5. User-defined visiting method 8]()

[2.6. Cluster Deployment 10]()

[2.7. Solutions to common problems 11]()

[3. The Migration 12]()

[3.1. The migration online 12]()

[4. Technical support 13]()

[4.1. Free technical support 13]()

[4.2. Commercial technical support 13]()

1. # <a name="_toc483039311"></a><a name="_toc22743461"></a> **<a name="_toc127369289"></a>Introduction to SyncCMS**
   1. ## <a name="_toc127369290"></a>**Profile**
      SyncCMS is designed based on the latest 2023 Java technology with open source code and structure friendly to SEO. SyncCMS can operate/manage hundreds of thousands of data and PV easily. SyncCMS has been accepted and used by many famous companies and enterprises, and it owns 0.0005% of the total websites of the world. We provide free version and technical support , and we believe SyncCMS will be a good choice for great data website construction and big enterprise projects.

- SyncCMS is suitable for both dynamic website and static website;
- SyncCMS can support multi-site creation, with totally separate data and templates for each website.

1. ## <a name="_toc22743463"></a><a name="_toc127369291"></a>**License Agreement**

| <p>1. Authorized rights</p><p>&emsp;1.1. Modify ,Copy and share SyncCMS and its source code;</p><p>&emsp;1.2. Get free authorization document based on prerequisite agreement, and use SyncCMS in non-business conditions ( for individual user only);</p><p>&emsp;1.3. Application of SyncCMS in business usage is allowed for at most 3 months. webpages developed must be marked with “Powered by SyncCMS”. The SyncCMS logo and license agreement must appear in an obvious position of the website.</p><p>&emsp;1.4. Application of SyncCMS in business usage should be authorized by the owner of the software by buying the authorization document. The company authorized should be the final user of the SyncCMS.</p><p>&emsp;1.5. Licensed users can Modify ,Copy and spread SyncCMS and its source code ;</p><p>&emsp;1.6. The license agreement applies only to the current version of the SyncCMS, earlier versions have their own license agreement;</p><p>2. Copyright</p><p>&emsp;2.1. The copyright of the software belongs to the official owner of the SyncCMS;</p><p>3. Disclaimer (of warranty)</p><p>&emsp;3.1. SyncCMS and its affiliated documents are provided with no responsibilities for any possible risk, and can not provide any warranties; </p><p>&emsp;3.2. Before using SyncCMS, one should fully understand it and assume its possible risks. We won`t provide any technical support or usage warranty, and are not responsible for any risks caused by using SyncCMS unless you have bought the technology support service. </p><p></p> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc483039313"></a><a name="_toc22743464"></a><a name="_toc127369292"></a>**Access to SyncCMS**
   Executable file download:

[https://www.SyncCMS.com/download.html]()

SyncCMS source code download:

`	`GITEE: <https://gitee.com/sanluan/SyncCMS>

`	`GITHUB: [https://github.com/sanluan/SyncCMS]()

1. ## <a name="_toc22743465"></a><a name="_toc127369293"></a>**Directories**

| <p>data/SyncCMS</p><p>SyncCMS.war</p> |
| ------------------------------------- |

- data/SyncCMS` s sub- directories:

`	`Indexes: Full-text search engine, automatically created by the system;

Task: Script for task plan

Template: Directories for templates

Web: Directories for static website and resource documents

- SyncCMS is an excecutable program, whose codes can be operated by J2EE web container or java –jar SyncCMS.war.

1. # **<a name="_toc22743466"></a> <a name="_toc127369294"></a>Deployments**
   1. ## <a name="_toc127369295"></a>**Operating Environment**
      SyncCMS Operating Deployment

1 Required software

Java8+ (<a name="_hlt117845886"></a><a name="_hlt117845887"></a>[http://www.oracle.com/technetwork/java/javaee/downloads/index.html]())

V5 need java17+

Mysql5.0+ ([http://dev.mysql.com/downloads/mysql]())

1 optional software

nginx([http://nginx.org/en/download.html]())/apache (<http://httpd.apache.org/download.cgi)/IIS>

tomcat8.0+(<http://tomcat.apache.org/>)/jetty9.0+([http://www.eclipse.org/jetty/downloads.php]())

V5 need tomcat10+\jetty11+

Please choose web containers like tomcat，jetty when deploying SyncCMS in a traditional way.

1. ## <a name="_toc127369296"></a>**Deployment Option**
   SyncCMS has many different ways of Deployment to meet different needs. Option 1 is more preferable while option 2 &3 is only suitable for dynamic web container such as tomcat, which will cause a lot of resource waste when being used to deal with static resources and are restrictive to concurrent performance. So option 2 &3 are suggested to be used in development or test environment .

Deployment Option 1

To use CMS dynamic website and static function, you are to use tomcat web container together with nginx. Nginx can provide reverse proxy to tomcat web container, and provide resource file, accessing to static website , and SSI support to dynamic and static webpage request;

Deployment Option 2

To use CMS dynamic and static function, you can only choose to use tomcat web container. The static function is optional.

Deployment Option 3

Deploy by Spring Boot, and use flushbonading website container like Tomcat in SyncCMS . Deployment Option 3 can also be done together with the support of Nginx.

1. ### **Deployment Option 1**

SyncCMS runs in web containers like Tomcat which can support Servlet3.0. Template files, static files, full-text indexes are reserved independently in server disk. Static files are published by HTTP server program as basic HTTP service. It provides access to resource files like websites or pictures. The web container of SyncCMS provides reverse proxy through HTTP server program, and provide HTTP service ,Background management interface and dynamic web visiting.

1. ### ` `**Deployment Option 2**

SyncCMS runs in web containers like Tomcat which can support Servlet3.0, and provides Background management interface and dynamic web visiting. Static files can also provide webpages and picture visiting through SyncCMS.

1. ### **Deployment Option 3**

SyncCMS is activated through embedded container, and provides background management interface and dynamic web visiting.

1. ## <a name="_toc22743467"></a><a name="_toc127369297"></a>**Container**
   1. ### **Docker deployment**
      Run the following command to pull and run the latest official image:

| docker run -d -p 8080:8080 sanluan/SyncCMS |
| ------------------------------------------ |

Build the image yourself and run it (where mySyncCMS is the image name) in the directory where DcokerFile is located:

| <p>docker build -t mySyncCMS .</p><p>docker run -d -p 8080:8080 mySyncCMS</p> |
| ----------------------------------------------------------------------------- |

1. ### **Docker cmpose** **deployment**
   Run the following command in the directory where docker-compose.yml is located:

| docker-compose up -d |
| -------------------- |

According to docker-compose.yml configuration, fill in the database address: mysql-cms and the database account password: SyncCMS/password! @ #

1. ## <a name="_toc127369298"></a>**Deployment steps**
   <a name="_toc477198947"></a>Take Deployment option 1 for example.
1. ### **Project configuration**
   Project configuration files are under the directories of WEB-INF/classes

cms.properties are configuration files for CMS

| Configurations              | Discription                          | Remarks                                                                                                                                    |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| cms.filePath                | Absolute path for CMS data directory |                                                                                                                                            |
| cms.masterSiteIds           | Mmanagement website ID               | different ID should be separated by a half-angle comma                                                                                     |
| cms.defaultSiteId           | Default website ID                   |                                                                                                                                            |
| cms.tokenizerFactory        | Default Tokenizer : hmmchinese       | keyword,letter,lowercase, whitespace,edgengram, ngram, pathhierarchy, pattern, classic,standard, ax29urlemail, thai, wikipedia, hmmchinese |
| cms.task.threadCount        | Task scheduling thread count         |                                                                                                                                            |
| cms.multipart.maxUploadSize | Maxmium for uploaded files           |                                                                                                                                            |

The configuration item of “cms.filePath “ can be specified at startup with the” -Dcms.filePath “ parameter.

1. ### **Deployment of SyncCMS**

   Put the war files under the “webapps” directory of the container, and then start the container.

1. ### **Initialization data**
   If the ” install.lock “ doesn’t exist under the data directory or the configuration information of the data base is wrong, the installment interface will be popped-up by default after visiting the program. Fill in the database information as prompted , and initialize or update data base. You can also initialize or update data base manually.

Database initialization script, upgrade script in the source code:

“SyncCMS-parent/SyncCMS-core/src/main/resources/initialization/sql” directory;

The initialization script is “init.sql” and the upgrade script is “{old version}-{new version}.sql”

The sample data corresponds to the script “data/SyncCMS/SyncCMS .sql”

1. ### **Visit SyncCMS**
   Please visit the engineering route of SyncCMS published through tomcat.
1. ## <a name="_toc127369299"></a>**User-defined visiting method**
   1. ### **Context path and port**
      In SyncCMS , the default context is /，the default port is 8080, the accessing program route is <http://localhost:8080/>

In deployment option 2, modifying the port attribute of the Connector tag in the conf/server.xml file can modify the port; modifying the name of the war under the webapps directory can modify the context of application. If you want to let the context of application be /, you should change the name of the war to ROOT.war, and delete the original directory of the ROOT.

For example：

| <p>`    `<Connector port="80" protocol="HTTP/1.1"</p><p>`               `connectionTimeout="20000"</p><p>`               `redirectPort="8443" /></p> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |

The corresponding access route is：[http://localhost/]()

In deployment option 3, to activate the Parameters in the script, the default context is -Dcms.contextPat，the default port is -Dcms.port. If you want to let the context of application be /, you should change the parameter -Dcms.contextPath=.

For example：

| java -jar -server -Dcms.port=80 -Dcms.contextPath= SyncCMS.war |
| -------------------------------------------------------------- |

The corresponding access route is：http://localhost/

1. ### **Configuration of the third party WEB service**
   Ordinarily, we use the nginx、apache program instead of java program for monitoring the 80 or 443 port, and reverse proxy to java program, so does deployment option 1.

SyncCMS provides WEB service configuration template from third party.

In the site background which has site management rights, you can click site->Site maintenance -> site management, and modify the setup of the site and delete the port information, as follows

Then click the “third party WEB service configuration” to get the corresponding nginx configuration of the site, and then copy it to the nginx configuration file as prompted. You have to configure differently for each site.

For the first time configuration, don’t forget the general configuration of the reverse proxy below. In one combination of nginx & SyncCMS, only one such configuration is required.

According to the context of line of 4、7、8 in the nginx configutation, you can easily enable the https for an website .

If SyncCMS is running in tomcat , then the browser request nginx protocol header is https, while nginx request tomcat protocol header is still https. Similar problem happens when it comes to the real browser ip or the request of the domain name.

To solve the problem, you need to turn on a configuration for tomcat, which makes nginx tell tomcat the real protocol header, client ip, and request domain name, and then tomcat tells SyncCMS.

1. ## <a name="_toc127369300"></a>**Cluster Deployment**
   1. ### **Data Directory Sharing**
      Cluster deployment requires sharing data directories with multiple CMS processes or synchronizing a real-time data directory to all other nodes.
1. ### **Modifying The Search Engine**
   The SyncCMS default search engine uses the index file of the indexes directory in the lucene Read/Write data directory. If multiple processes read/write index files, a conflict may occur. You are advised to change the search engine to elasticsearch and modify the cms.properties file:

| <p>cms.tokenizerFactory=standard #or some other elasticsearch installed word divider</p><p>cms.hibernate.configFilePath=config/hibernate-elasticsearch.properties</p> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Some default configurations and recommended ones are provided in config/hibernate-elasticsearch.properties. You can also modify these configuration items according to your actual situation:

| **Configuration items**                                                | **Default value**     | **Meaning**                                                                           |
| ---------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------- |
| **hibernate.search.backend.uris**                                      | http://localhost:9200 | elasticsearch service address, multiple service address can be separated by Spaces    |
| **hibernate.search.backend.schema_management.minimal_required_status** | yellow                | elasticsearch minimum level, usually can only reach the yellow single node deployment |
| **hibernate.search.backend.username**                                  |                       | User name of elasticsearch                                                            |
| **hibernate.search.backend.password**                                  |                       | Password of elasticsearch                                                             |

1. ### **Reverse Proxy**
   In the example of nginx, enter the LAN addresses of all nodes in the reverse proxy. The ip_hash policy is recommended

| <p>upstream cms {</p><p>`    `# Fill in the real address and port of the CMS. Cluster can be enabled using the following configuration with multiple lines</p><p>`    `ip_hash;</p><p>`    `server 192.168.0.1:8080 weight=1;</p><p>`    `server 192.168.0.2:8080 weight=1;</p><p>}</p> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc127369301"></a>**Solutions to common problems**
   1. ### **Customize data directories in the tomcat script**
      catalina.sh（on linux）

| JAVA_OPTS="$JAVA_OPTS $JSSE_OPTS" |
| --------------------------------- |

Change to

| JAVA_OPTS="$JAVA_OPTS $JSSE_OPTS -Dcms.filePath=/data/mydatafile/" |
| ------------------------------------------------------------------ |

catalina.bat（on Windows）

| set "JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS%" |
| --------------------------------------- |

Change to

| set "JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS% -Dcms.filePath=/data/mydatafile/" |
| ------------------------------------------------------------------------ |

1. ### **Resolve Garbled Characters in tomcat Static Files on windows**
   Add -Dfile.encoding="UTF-8"
1. # ` `**<a name="_toc127369302"></a>The Migration**
   1. ## <a name="_toc127369303"></a>**The migration online**
      After local or LAN development is complete, formal deployment to the server requires a complete migration.
1. ### **Program, database script, data directory**
1. Export the database script and import it into the server database.
1. Copy the data directory to the server, and modify the database.properties under the data directory according to the database information, among which the dbc.encryptPassword is the Encrypted database password. The encryption and decryption methods are in the com.SyncCMS.common.generator.PassowrdGenerator.java category under the SyncCMS-parent\SyncCMS\src\test\java directory of the SyncCMS program. This category have main method that you can run directly. Input 1 then click enter then input password then click enter to get the encrypted password. Input 2 then click enter then input encrypted password then click enter to get the decrypted password.

   You can delete the” jdbc.encryptPassword” line , and add “jdbc.password={unencrypt password}”.

1. Copy the program to the server, and modify the path” cms.filePath” in the “cms.properties” according to the database directory. This path should be a complete absolute path.
   1. ### **Changing site Settings**
1. Modify the site Settings to the actual path or expected path, and configure the third-party WEB service based on actual requirements.
1. Change the site domain name to the actual domain name.
1. Run SQL, and update the old site path in the Content data, such as the text, to the new site path.
1. Execute the task plan or manually rebuild the content, categories, webpages and so on, and Re-generate as many times as necessary to ensure that the urls of all the pages on your site are correct, and rebuild the full-text index according to actual requirments.

1. # <a name="_toc127369304"></a>**Technical support**
   1. ## <a name="_toc127369305"></a>**Free technical support**
      SyncCMS official website：[https://www.SyncCMS.com/]()

QQ communication group：[Group one 191381542](https://qm.qq.com/cgi-bin/qm/qr?k=xoxCUvv7bDCFQ8AAqaoWB1JsLz0L90qn) , [Group two 481589563]() , [Group three 638756883]() , [Group four 930992232](https://qm.qq.com/cgi-bin/qm/qr?k=lsFbfVpj3yqWuY92GYkOG1esbyPNS7O3)

Freemarker files：[http://www.kerneler.com/freemarker2.3.23/]()

Online debuggingFreeMarker：<https://www.sanluan.com/freemarker_test.html>

1. ## <a name="_toc127369306"></a>**Commercial technical support**
   You can get commercial technical support after buying the software usage authorization, and you can also buy the commercial technical support service alone.
