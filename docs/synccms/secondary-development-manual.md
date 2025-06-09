---
order: 3
---

# Secondary Development

**SyncCMS**

Secondary Development

# **Contents**

[1 Introduction to SyncCMS 1]()

[1.1 Profile 1]()

[1.2 License Agreement 1]()

[1.3 Get SyncCMS 2]()

[1.4 Directories 2]()

[2 Fast Compiling and Running 3]()

[2.1 Compiling and Running 3]()

[2.2 Custormize Operation Mode 3]()

[3 Development Tools Integration 3]()

[3.1 Eclipse Maven Project Import 4]()

[3.2 Idea Project Import 12]()

[3.3 Program Configuration 14]()

[3.4 Project Debugging 15]()

[3.5 Project Release 21]()

[3.6 Run the Project 25]()

[4 Secondary Development 26]()

[4.1 Introduction to the Project 26]()

[4.2 Hibernate Entity Automatic Generation 31]()

[4.3 Automatic Generation of Logical Code and Page 31]()

[4.4 Mybatis Codes Automatic Generation 34]()

[4.5 Directive and Function Development 35]()

[4.6 Development of data export function 38]()

[5 Technical support 44]()

[5.1 Free Technical Support 44]()

[5.2 Commercial Technical Support 44]()

1. # <a name="_toc122375211"></a>**Introduction to SyncCMS**
   1. ## <a name="_toc118193146"></a><a name="_toc122375212"></a>**Profile**
      SyncCMS is designed based on the latest 2023 Java technology with open source code and structure friendly to SEO. SyncCMS can operate/manage hundreds of thousands of data and PV easily. SyncCMS has been accepted and used by many famous companies and enterprises, and it owns 0.0005% of the total websites of the world. We provide free version and technical support , and we believe SyncCMS will be a good choice for great data website construction and big enterprise projects.

- SyncCMS is suitable for both dynamic website and static website;
- SyncCMS can support multi-site creation, with totally separate data and templates for each website.

1. ## <a name="_toc22743463"></a><a name="_toc118193147"></a><a name="_toc122375213"></a>**License Agreement**

| <p>1. Authorized rights</p><p>&emsp;1.1. Modify ,Copy and share SyncCMS and its source code;</p><p>&emsp;1.2. Get free authorization document based on prerequisite agreement, and use SyncCMS in non-business conditions ( for individual user only);</p><p>&emsp;1.3. Application of SyncCMS in business usage is allowed for at most 3 months. webpages developed must be marked with “Powered by SyncCMS”. The SyncCMS logo and license agreement must appear in an obvious position of the website.</p><p>&emsp;1.4. Application of SyncCMS in business usage should be authorized by the owner of the software by buying the authorization document. The company authorized should be the final user of the SyncCMS.</p><p>&emsp;1.5. Licensed users can Modify ,Copy and spread SyncCMS and its source code ;</p><p>&emsp;1.6. The license agreement applies only to the current version of the SyncCMS, earlier versions have their own license agreement;</p><p>2. Copyright</p><p>&emsp;2.1. The copyright of the software belongs to the official owner of the SyncCMS;</p><p>3. Disclaimer (of warranty)</p><p>&emsp;3.1. SyncCMS and its affiliated documents are provided with no responsibilities for any possible risk, and can not provide any warranties; </p><p>&emsp;3.2. Before using SyncCMS, one should fully understand it and assume its possible risks. We won`t provide any technical support or usage warranty, and are not responsible for any risks caused by using SyncCMS unless you have bought the technology support service. </p><p></p> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc483039313"></a><a name="_toc22743464"></a><a name="_toc118193148"></a><a name="_toc122375214"></a>**Get SyncCMS**
   Executable file download:

[https://www.SyncCMS.com/download.html]()

SyncCMS source code download:

`	`GITEE: <https://gitee.com/sanluan/SyncCMS>

`	`GITHUB: [https://github.com/sanluan/SyncCMS]()

1. ## <a name="_toc22743465"></a><a name="_toc118193149"></a><a name="_toc122375215"></a>**Directories**

| <p>data/SyncCMS</p><p>SyncCMS.war</p> |
| ------------------------------------- |

- SyncCMS-parent is the source code of SyncCMS
- data/SyncCMS is the data directory of SyncCMS

  sub- directories:

  | <p>indexes: Full-text search engine, automatically created by the system;</p><p>task: Script for task plan</p><p>template: Directories for templates</p><p>web: Directories for static website and resource documents</p> |
  | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

1. # **<a name="_toc122375216"></a>Fast Compiling and Running**
   1. ## <a name="_toc122375217"></a>**Compiling and Running**
      Make sure that your operation system has jdk1.8 or later edition,V5 need Jdk17 or later, and execute the following command:

| <p>cd SyncCMS-parent</p><p>mvnw clean package</p><p>cd SyncCMS/target</p><p>java -jar SyncCMS.war</p> |
| ----------------------------------------------------------------------------------------------------- |

Visit the program page [http://localhost:8080/](), then configure and initialize the database according to the prompts of the page.

The access route of the management background is [http://localhost:8080/admin/](), and the administrator account /passwords: admin/admin are built in the data script.

1. ## <a name="_toc122375218"></a>**Custormize Operation Mode**

- Windows start command

| java -jar -Dfile.encoding="UTF-8" -Dcms.port=8080 -Dcms.contextPath=/SyncCMS -Dcms.filePath="%cd%\data\SyncCMS" SyncCMS.war |
| --------------------------------------------------------------------------------------------------------------------------- |

- linux start command

| java -jar -Dfile.encoding="UTF-8" -Dcms.port=8080 -Dcms.contextPath=/SyncCMS -Dcms.filePath="`pwd`/data/SyncCMS" SyncCMS.war |
| ---------------------------------------------------------------------------------------------------------------------------- |

- running in tomcat

Rename the “SyncCMS.war.original” as “SyncCMS.war” or” ROOT.war”( the context route is /), move the file to the tomcat webapps directory , the -Dcms.filePath parameter is still valid.

- running in docker

execute the command：

| docker run -d -p 8080:8080 sanluan/SyncCMS |
| ------------------------------------------ |

Mirror image warehouse：https://hub.docker.com/r/sanluan/SyncCMS/

- build your image

execute the command：

| <p>docker build -t mySyncCMS .</p><p>docker run -d -p 8080:8080 mySyncCMS</p> |
| ----------------------------------------------------------------------------- |

1. # <a name="_toc22745488"></a><a name="_toc122375219"></a>**Development Tools Integration**
   After importing SyncCMS in Development Tools, you can Compile and modify its source codes freely and do further development.
1. ## <a name="_toc122375220"></a>**Eclipse Maven Project Import**
   Eclipse Download address: [https://www.eclipse.org/downloads/]()
1. ### <a name="_hlk118107855"></a>**Procedure**

- First, choose “Import” under the File menu

- Choose “Maven->Existing Maven Projects” in the pop-up dialog box ( import existing Maven Project)

- Choose ”SyncCMS-parent” under the pull-down menu of root directory

- Click “ finish” to complete the import.

1. ### **Development Tools Configuration**
   Development Tools Configuration is to make it easier for you to develop SyncCMS, and keep the codes style alike.

- #### **Character Encoding Setting**

  Encoding of the project is in UTF-8 format

- #### **Verification Setting**
  Eclipse code validation does not validate syntax such as html and freemarker mix and will report false errors. Uncheck the Validator below to help find the true error message

Client-side JavaScript

HTML Syntax Validator

JavaScript Validation

JSP Content Validator

XML Validator

- #### **Import Formative Files (optional)**
  Select ”Preferences” under the window menu:

Expand the “Java->Code Style->Formatte” TAB , and click “Import” button.

Select java.xml file.

Import “js.xml” to “JavaScript->Code Style->Formatter” in similar way.D

- #### **Development Tools Plug-in (optional)**
  The Eclipse plug-in of FreeMarker editor is in the jboss tools.

[http://download.jboss.org/jbosstools/updates/stable/]() (choose the IDE version )

Install the FreeMarker IDE plugin after keyword filter;

Tips: FreeMarker IDE updates slow and is not very stable. It can not speed the development for techiest familiar with FreeMarker, so only beginners of FreeMarker are advised to use it.

1. ## <a name="_toc122375221"></a>**Idea Project Import**
   Idea download address：[https://www.jetbrains.com/idea/download/]()
1. ### **Operating Steps**

- First, click the Open button on the welcome page

- Select “SyncCMS-parent” directory，click “OK”

- Wait for the complete import of the idea maven plug-in. Sometimes you may need to manually select to enable maven or gradle plug-ins.

1. ### **Precautions**
   You need to set up the working directory first before executing any class though main method. Otherwise, startup static resources cannot be loaded or wrong file paths would appear.

Find “Edit Configurations” in “Run” menu, then modify “working directory” to the path where SyncCMS module resides.

1. ## <a name="_toc122375222"></a>**Program Configuration**
   Project configuration files are under the “SyncCMS/src/main/resources” menu.

cms.properties are CMS configuration file.

| Configurations              | Discription                          | Remarks                                                                                                                                    |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| cms.filePath                | Absolute path for CMS data directory |                                                                                                                                            |
| cms.masterSiteIds           | Mmanagement website ID               | different ID should be separated by a half-angle comma                                                                                     |
| cms.defaultSiteId           | Default website ID                   |                                                                                                                                            |
| cms.tokenizerFactory        | Default Tokenizer : hmmchinese       | keyword,letter,lowercase, whitespace,edgengram, ngram, pathhierarchy, pattern, classic,standard, ax29urlemail, thai, wikipedia, hmmchinese |
| cms.task.threadCount        | Task scheduling thread count         |                                                                                                                                            |
| cms.multipart.maxUploadSize | Maxmium for uploaded files           |                                                                                                                                            |

`	`The cms.filePath in Configurations column can be configure by -Dcms.filePath parameter.

If there are no install.lock under the data directory or the configuration is wrong, the installment interface will be popped-up by default after visiting the program. Fill the information of the database, and choose to initialize or update data base. You can also initialize or update data base manually later.

<a name="_hlk132188140"></a>Database initialization script, upgrade script in the source code:

“SyncCMS-parent/SyncCMS-core/src/main/resources/initialization/sql” directory;

The initialization script is “init.sql” and the upgrade script is “{old version}-{new version}.sql”

The sample data corresponds to the script “data/SyncCMS/SyncCMS .sql”

1. ## <a name="_toc122375223"></a>**Project Debugging**
   1. ### **Traditional Debugging**
      Debugging in development tools can be done through Unit testing by writing test code or run the project in web container and debug online. Online testing is better choice for template debugging.

Choose the “Preferences” item under the Window pull-down menu, and spread to the “Server->Runtime Environments” TAB, and add a container newer than Tomcat8.0

Right-click on the project , select “Debug on Server” under the “Debug As” menu, or choose “Run on Server” under the “Run As” menu.

Select the newly added container, and click “Finish” button to complete.

Now you can debug or run the project.

You can also select “Other” item from the “Show View” submenu in the “Window” menu.

Click “Servers” /Open the” servers “view

Manage the container and all the projects running or being debugged in it.

1. ### **SpringBoot Debugging**

   Find ”boot.SprintBootApplication” class in SyncCMS project, select “debug” or “run” according to your needs and execute “Main” method.

1. ## <a name="_toc122375224"></a>**Project Release**

   1. ### **Script Release**
      Execute the “mvn package” or “gradle war” order in “SyncCMS-parent” directory , generate the executable file “SyncCMS-parent/SyncCMS/target/ SyncCMS.war”.

1. ### **Eclipse Project Release**

- Right-click on SyncCMS project, then select "Export" in the pull-down menu, and select "War file" on the sub menu.

- Select the path to Save war package and click “Finish” to complete.

1. ### **Eclipse Maven Project Release**

- Right-click on SyncCMS-parent project, then select "Run As" in the pull-down menu, and select "Maven build.." on the sub menu.

- Input clean package, and click Run

- If compiled successfully, you can find the war package under the “target” directory of SyncCMS project .

1. ### **Eclipse Gradle Project Release**

- Right- click on SyncCMS-parent project, and select "Run As" on the pull-down menu, then select "Gradle build.." on the sub menu.
- Input war.
- Find war file under the build directory.

  1.  ## <a name="_toc122375225"></a>**Run the Project**
           1. ### **Traditional Way to Run the Project**
      Put “SyncCMS.war” under the ”webapps” directory of tomcat or the corresponding directory of other containers.

1. ### **SpringBoot Way to Run the Project**

   Execute the command of “java -jar SyncCMS.war”

1. # <a name="_toc122375226"></a>**Secondary Development**

   1. ## <a name="_toc122375227"></a>**Introduction to the Project**

1. ### **Managment Background UI Framework Design Ideas**
   Management background UI interface uses dwz UI framework, the whole Management background interface is a unified page. All workspace TAB content is obtained through ajax request, and is then appended to the background page as an html fragment. Initiate the “js effect” of the appended pages. Rendering pages interactively is a much simpler process than json.
1. ### **Project Design Ideas**
   SyncCMS use the following softwares and their packages: SpringMVC, Spring Boot, Hibernate, Hibernate Search, Mybatis, FreeMarker, Mysql jdbc, c3p0, jedis, jackson, quartz, Apache commons. Package dependencies, project compilation, etc., are handled by Maven and gradle.

Software requests are responded to by multiple servlets : management Servlet，front Servlet，interface Servlet，static file Servlet，install Servlet.

Management Servlet，front Servlet，interface Servlet are handled by DispatcherServlet of SpringMVC. IndexAdminController, IndexController maps the default request handling, so they have the lowest priority. The request processing logic is to directly append the page template corresponding to the request path. The page template rendering process can be extended using FreeMarker directives to obtain the required data, reducing the frequency of changes in the control layer. It realizes the maximum reuse of JAVA code in view layer . The form is processed in the traditional SpringMVC Controller receiving and processing manner.

1. ### **Naming Convention and Project Structure**
   Java code：

| <p> .common tools and Resolver package</p><p> .base fudmental package</p><p> .datasource data source package</p><p> .directive directive base package</p><p> .cache cache package</p><p> .constants Constants define packages</p><p> .handler Paging processing, query processing, FreeMarker exception and other processor packages</p><p> .generator code generation tool package</p><p> .search Full-text search component package</p><p> .servlet Servlet package</p><p> .tools tools package</p><p> .view view layer base package</p><p> .entities Entity package</p><p> .logic logic package</p><p> .component component package</p><p> .dao Database operation package</p><p> .service Transaction and logical encapsulation package</p><p> .controller controller package</p><p> .web front website controller package</p><p> .admin management interface controller package</p><p> .api interface controller package</p><p> .views view package</p><p> .directive freemaker user-defined directive package-freemaker</p><p> .method freemaker user-defined method package</p><p> .pojo Form entity package</p><p>.boot SpringBoot entrance package</p><p>config.spring Spring configuration package</p><p>config.initializer Servlet loader</p> |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Resources file ：

| <p>resources</p><p>`	`config configuration file</p><p>`	`language language file</p><p>`	`templates template file</p><p>`			`admin management template file</p><p>`			`ftl auto-loaded freemarker template</p><p>`			`web front page templete (Lower priority to template in the data directory)</p><p>`	`cms.properties cms configuration files</p><p>`	`log4j2.properties dairy configuration files</p><p>webapp </p><p>error http error page( only effective when deployed in traditional web container)</p><p>`	`META-INF java application description files</p><p>`	`resource management interface static resource files</p><p>`	`WEB-INF java applicationSecurity directory</p><p>`	`index.html prompt page for incomplete project</p> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ### **Start the Process**

   After starting the container, the container will load the application’s web.xml, scan The implementation class of ServletContainerInitializer, began to initialize the spring and the spring s initialize multiple initializers of SyncCMS separately and register the configuration class .

1. ### **Request Processing Flow**

   When the browser sends a request, SpringMVC first searches whether there is a Controller corresponding to request path according to request mapping rule. If yes, the Controller handles the request; If no, IndexController.page method handles the request. This method first loads the template metadata corresponding to the path to determines whether dynamic visit is allowed. If yes, the template path is returned. If no, a 404 error is returned

1. ### **Processing Template Paths**
1. ## <a name="_toc122375228"></a>**Hibernate Entity Automatic Generation**

   Use code in the project to generate

1. Configurate Database information

   Modify the total database information of configuration file: SyncCMS\src\test\resources\hibernate\hibernate.properties.

1. com.SyncCMS.common.generator. EntitysGenerator generate entity file;
1. Refresh to see the newly generated code;

1. ## <a name="_toc122375229"></a>**Automatic Generation of Logical Code and Page**
   This generation method will automatically generate self-definition directive after marking the hibernate entity. Controller、Service、Dao、html are the main generation methods during the developing period of CMS.

1 For entity property, use com.SyncCMS.common.generator.annotation.GeneratorColumn to mark class tag.

| **Annotation properties** | **Meaning**                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| **condition**             | whether used to search conditions                                             |
| **order**                 | whether used to rank                                                          |
| **like**                  | Check whether the conditions are like matches                                 |
| **or**                    | Check whether the query condition is the or logic                             |
| **name**                  | Field name, same when or is true, field name is the same set of or conditions |
| **title**                 | True Meaning of Fields                                                        |

1 Use com.SyncCMS.common.generator.SourceGenerator to generate code file;

1 Refresh the project to see the generated code

1. ## <a name="_toc122375230"></a>**Mybatis Codes Automatic Generation**

   1 Modify the relative database property of “src/test/resources/generator/mybatis/generatorConfig.xml” to make sure the data base is correct and can be connected；
   1 ` `open the files of “src/test/java/com/SyncCMS/common/generator/MybatisGenerator.java”
   1 Running the main function to generate Mybatis code file
   1 Refresh the project to see the generated code

1. ## <a name="_toc122375231"></a>**Directive and Function Development**
   Directive is an extension of FreeMarker. Directives can either be defined in a template or implemented using java classes. In SyncCMS, the directive extension method of FreeMarker is encapsulated and extended .

Function is a FreeMarker lightweight extension that also supports template definitions and java class implementations.

These directives and functions can be invoked in templates or http requests. The parameter rules are also consistent. Implement the httpEnabled method and return false disables http and Implement the needAppToken method return true enables security authentication. Only authorized applications in ” background maintenance->application authorization” can request only through their tokens.

This section focuses on the encapsulation of java class extensions in SyncCMS. An instruction needs to inherit [com.SyncCMS.common.base.AbstractTemplateDirective](https://www.SyncCMS.com/upload/api/com/SyncCMS/common/base/AbstractTemplateDirective.html) class and implements the public void execute(RenderHandler handler) throwsIOException,Exception; method; Add @Component annotation and put in an “com. SyncCMS “package (can be modified through the [config.spring.ApplicationConfig](t)’s @ ComponentScan by increasing annotations or modifying the package name). You've completed the encapsulation of an instruction.

For example：

```
|<p>**package** com.SyncCMS.views.directive.tools;</p><p> </p><p>**import** java.io.IOException;</p><p> </p><p>**import** com.SyncCMS.common.base.AbstractTemplateDirective;</p><p>**import** org.springframework.stereotype.Component;</p><p> </p><p>**import** com.SyncCMS.common.handler.RenderHandler;</p><p> </p><p>/\*\*</p><p>` `\* </p><p>` `\* MemoryDirective Technical Framework Version directive</p><p>` `\*</p><p>` `\*/</p><p>@Component</p><p>**public** **class** MemoryDirective **extends** AbstractTemplateDirective {</p><p> </p><p>`    `@Override</p><p>`    `**public** **void** execute(RenderHandler handler) **throws** IOException, Exception {</p><p>`        `Runtime runtime = Runtime.getRuntime();</p><p>`        `handler.put("freeMemory", runtime.freeMemory());</p><p>`        `handler.put("totalMemory", runtime.totalMemory());</p><p>`        `handler.put("maxMemory", runtime.maxMemory());</p><p>`        `handler.render();</p><p>`    `}</p><p> </p><p>}</p>|
| :- |
```

SyncCMS automatically completes the registration of directives during startup. The directive name is the class name removed of Cms, Directive character and the prefix of the last package name ; first letter in lower case; the namespace is the last package name.

Example for invoking.

```
|<p><@tools.memory></p><p><**p**><**label**>total memory</**label**>:${totalMemory}</**p**></p><p><**p**><**label**>max memory</**label**>:${maxMemory}</**p**></p><p><**p**><**label**>free memory</**label**>:${freeMemory}</**p**></p><p></@tools.memory></p><p>or</p><p><**p**><**label**>total memory </**label**>:<**span** class="total"></**span**></**p**></p><p><**p**><**label**>max memory</**label**>:<**span** class="max"></**span**>}</**p**></p><p><**p**><**label**>free memory</**label**>:<**span** class="free"></**span**></**p**></p><p><**script**></p><p>$.getJSON('//cms.SyncCMS.com/api/directive/memory', function(data){    </p><p>`  `$('.total').val(data.totalMemory);</p><p>`  `$('.max').val(data.maxMemory);</p><p>`  `$('.free').val(data.freeMemory);</p><p>});</p><p></**script**></p>|
| :- |
```

SyncCMS encapsulates the processing of template directive data aliases and the use of aliases：

```
|<p><@tools.memory;total,max,free></p><p><p><label>total memory</label>:${total}</p></p><p><p><label>max memory</label>:${max}</p></p><p><p><label>free memory</label>:${free}</p></p><p></@tools.memory></p>|
| :- |
```

The encapsulation of SyncCMS also completed the recovery of template variables. Therefore, these variables could not be obtained after the instruction, which could be simply understood as the closure principle. If the same variable exists in the previous article, this variable will also be reducted. For example:

```
|<p><!-- There is no “object” variable --></p><p><@cms.category id=1> <!-- The “category” directive queries classified entities based on the input parameter “id” and exports the result as “object” --></p><p>`    `<!-- The “object” variable represents the classified entity with “id” 1 --></p><p>`    `<@cms.content id=1>  <!-- The “content” directive queries classified entities based on the input parameter “id” and exports the result as “object” --></p><p>`        `<!-- The “object” variable represents the classified entity with “id” 1 --></p><p>`    `</@cms.content></p><p>`    `<!-- The “object” variable represents the classified entity with “id” 1 --></p><p></@cms.category></p><p><!-- There is no “object” variable --></p>|
| :- |
```

RenderHandler is an operation that encapsulates the input and output parameters of an instruction. See the source code or api documentation for more apis.

handler.getLong("id")，You get an input parameter id of type long；

handler.put("object", entity)，Variables can be exported;

handler.render()，You can render the contents of the template contained in the directive. If a directive does not excute render(), the templates contained in the directive will not be rendered. A common usage scenario：

```
|<@cms.content id=-1> contents here will not be output and executed </@cms.content>|
| :- |
```

An instruction needs to inherit [com.SyncCMS.common.base.BaseMethod](t) class and implements public Object exec(@SuppressWarnings("rawtypes") List arguments) throws TemplateModelException method; Add @Component annotation and put in an “com. SyncCMS “ package.

Functions can take multiple arguments and are placed in arguments. BaseMethod encapsulates the value methods for common argument types. After processing the data, you can return them directly. For example ：

```
|<p>**package** com.SyncCMS.views.method.tools;</p><p> </p><p>**import** java.util.List;</p><p> </p><p>**import** org.springframework.stereotype.Component;</p><p> </p><p>**import** com.SyncCMS.common.base.BaseMethod;</p><p>**import** com.SyncCMS.common.tools.CommonUtils;</p><p>**import** com.SyncCMS.common.tools.VerificationUtils;</p><p> </p><p>**import** freemarker.template.TemplateModelException;</p><p> </p><p>/\*\*</p><p>` `\*</p><p>` `\* GetMd5Method</p><p>` `\* </p><p>` `\*/</p><p>@Component</p><p>**public** **class** GetMd5Method **extends** BaseMethod {</p><p> </p><p>`    `@SuppressWarnings("unchecked")</p><p>`    `@Override</p><p>`    `**public** Object exec(@SuppressWarnings("rawtypes") List arguments) **throws** TemplateModelException {</p><p>`        `String string = getString(0, arguments);</p><p>`        `**if** (CommonUtils.notEmpty(string)) {</p><p>`            `**return** VerificationUtils.md5Encode(string);</p><p>`        `}</p><p>`        `**return** **null**;</p><p>`    `}</p><p>     </p><p>`    `@Override</p><p>`    `**public** **boolean** needAppToken() {</p><p>`        `**return** **false**;</p><p>`    `}</p><p> </p><p>`    `@Override</p><p>`    `**public** **int** minParametersNumber() {</p><p>`        `**return** 1;</p><p>`    `}</p><p>}</p>|
| :- |
```

SyncCMS automatically completes the registration of function during startup. The function name is the class name removed of Method character; first letter in lower case;

Example for invoking.

| ${getMd5("string")!} |
| :------------------- |

1. ## <a name="_toc122375232"></a>**Development of data export function**
   SyncCMS does a implified encapsulation to excel’s export function. The returning of the view name to <a name="_hlt118730905"></a><a name="_hlt118730906"></a>[com.SyncCMS.common.view.ExcelView](https://www.SyncCMS.com/upload/api/com/SyncCMS/common/view/ExcelView.html) can complete the rendering of excel file. This construction method has two parameters, the file name and consumers. The consumer is used to construct the data body, and the file name can also be passed in a subsequent method. If there is no file name, the request path export may be taken as the file name

```
|<p>@RequestMapping("export")</p><p>**public** ExcelView export() {</p><p>`    `ExcelView view = **new** ExcelView(workbook -> {</p><p>`        `Sheet sheet = workbook.createSheet("sheetname");</p><p>`        `**int** i = 0, j = 0;</p><p>`        `Row row = sheet.createRow(i++);</p><p>`        `row.createCell(j++).setCellValue("id");</p><p>`        `row.createCell(j++).setCellValue("title");</p><p>`        `row = sheet.createRow(i++);</p><p>`        `row.createCell(j++).setCellValue("id");</p><p>`        `row.createCell(j++).setCellValue("title");</p><p>`    `});</p><p>`    `view.setFilename("filename");</p><p>`    `**return** view;</p><p>}</p>|
| :- |
```

In the actual development, we need to query the data body according to the request parameters, and the excel header and file name need to be internationalized. For example:

```
|<p>**package** com.SyncCMS.controller.admin.cms;</p><p> </p><p>**import** java.io.Serializable;</p><p>**import** java.text.DateFormat;</p><p>**import** java.util.ArrayList;</p><p>**import** java.util.Date;</p><p>**import** java.util.HashMap;</p><p>**import** java.util.List;</p><p>**import** java.util.Locale;</p><p>**import** java.util.Map;</p><p> </p><p>**import** javax.servlet.http.HttpServletRequest;</p><p> </p><p>**import** org.apache.commons.logging.Log;</p><p>**import** org.apache.commons.logging.LogFactory;</p><p>**import** org.apache.poi.ss.usermodel.Row;</p><p>**import** org.apache.poi.ss.usermodel.Sheet;</p><p>**import** org.springframework.beans.factory.annotation.Autowired;</p><p>**import** org.springframework.format.annotation.DateTimeFormat;</p><p>**import** org.springframework.stereotype.Controller;</p><p>**import** org.springframework.ui.ModelMap;</p><p>**import** org.springframework.web.bind.annotation.RequestAttribute;</p><p>**import** org.springframework.web.bind.annotation.RequestMapping;</p><p>**import** org.springframework.web.servlet.support.RequestContextUtils;</p><p> </p><p>**import** com.SyncCMS.common.annotation.Csrf;</p><p>**import** com.SyncCMS.common.constants.CommonConstants;</p><p>**import** com.SyncCMS.common.handler.PageHandler;</p><p>**import** com.SyncCMS.common.tools.CommonUtils;</p><p>**import** com.SyncCMS.common.tools.DateFormatUtils;</p><p>**import** com.SyncCMS.common.tools.ExtendUtils;</p><p>**import** com.SyncCMS.common.tools.LanguagesUtils;</p><p>**import** com.SyncCMS.common.view.ExcelView;</p><p>**import** com.SyncCMS.entities.cms.CmsPlace;</p><p>**import** com.SyncCMS.entities.cms.CmsPlaceAttribute;</p><p>**import** com.SyncCMS.entities.sys.SysExtendField;</p><p>**import** com.SyncCMS.entities.sys.SysSite;</p><p>**import** com.SyncCMS.entities.sys.SysUser;</p><p>**import** com.SyncCMS.logic.component.site.SiteComponent;</p><p>**import** com.SyncCMS.logic.component.template.MetadataComponent;</p><p>**import** com.SyncCMS.logic.component.template.TemplateComponent;</p><p>**import** com.SyncCMS.logic.service.cms.CmsPlaceAttributeService;</p><p>**import** com.SyncCMS.logic.service.cms.CmsPlaceService;</p><p>**import** com.SyncCMS.logic.service.log.LogOperateService;</p><p>**import** com.SyncCMS.logic.service.sys.SysUserService;</p><p>**import** com.SyncCMS.views.pojo.entities.CmsPlaceMetadata;</p><p> </p><p>/\*\*</p><p>` `\* </p><p>` `\* cmsPlaceController</p><p>` `\*</p><p>` `\*/</p><p>@Controller</p><p>@RequestMapping("cmsPlace")</p><p>**public** **class** CmsPlaceAdminController {</p><p>`    `**protected** **final** Log log = LogFactory.getLog(getClass());</p><p>`    `@Autowired</p><p>`    `**private** CmsPlaceService service;</p><p>`    `@Autowired</p><p>`    `**private** CmsPlaceAttributeService attributeService;</p><p>`    `@Autowired</p><p>`    `**private** SysUserService sysUserService;</p><p>`    `@Autowired</p><p>`    `**private** MetadataComponent metadataComponent;</p><p>`    `@Autowired</p><p>`    `**protected** LogOperateService logOperateService;</p><p>`    `@Autowired</p><p>`    `**protected** SiteComponent siteComponent;</p><p> </p><p>`    `/\*\*</p><p>`     `\* @param site</p><p>`     `\* @param path</p><p>`     `\* @param userId</p><p>`     `\* @param status</p><p>`     `\* @param itemType</p><p>`     `\* @param itemId</p><p>`     `\* @param startPublishDate</p><p>`     `\* @param endPublishDate</p><p>`     `\* @param orderField</p><p>`     `\* @param orderType</p><p>`     `\* @param request</p><p>`     `\* @param model</p><p>`     `\* @return view name</p><p>`     `\*/</p><p>`    `@RequestMapping("export")</p><p>`    `// csrf validation</p><p>`    `@Csrf</p><p>`    `// Automatic assembly of date fields requires declaration of the format</p><p>`    `**public** ExcelView export(@RequestAttribute SysSite site, String path, Long userId, Integer[] status, String itemType,</p><p>`            `Long itemId, @DateTimeFormat(pattern = "yyyy-MM-dd") Date startPublishDate,</p><p>`            `@DateTimeFormat(pattern = "yyyy-MM-dd") Date endPublishDate, String orderField, String orderType,</p><p>`            `HttpServletRequest request, ModelMap model) {</p><p>`        `**if** (CommonUtils.notEmpty(path)) {</p><p>`            `path = path.replace("//", CommonConstants.SEPARATOR);</p><p>`        `}</p><p>`        `// Get internationalization information from the request, or based on user, site Settings, and so on</p><p>`        `Locale locale = RequestContextUtils.getLocale(request);</p><p> </p><p>`        `String filePath = siteComponent.getWebTemplateFilePath(site, TemplateComponent.INCLUDE\_DIRECTORY + path);</p><p>`        `CmsPlaceMetadata metadata = metadataComponent.getPlaceMetadata(filePath);</p><p>         </p><p>`        `// Data query</p><p>`        `PageHandler page = service.getPage(site.getId(), userId, path, itemType, itemId, startPublishDate, endPublishDate,</p><p>`                `CommonUtils.getMinuteDate(), status, **false**, orderField, orderType, 1, PageHandler.MAX\_PAGE\_SIZE);</p><p>`        `@SuppressWarnings("unchecked")</p><p>`        `List<CmsPlace> entityList = (List<CmsPlace>) page.getList();</p><p>         </p><p>`        `// Related data primary key assembly</p><p>`        `Map<String, List<Serializable>> pksMap = **new** HashMap<>();</p><p>`        `**for** (CmsPlace entity : entityList) {</p><p>`            `List<Serializable> userIds = pksMap.computeIfAbsent("userIds", k -> **new** ArrayList<>());</p><p>`            `List<Serializable> ids = pksMap.computeIfAbsent("ids", k -> **new** ArrayList<>());</p><p>`            `userIds.add(entity.getUserId());</p><p>`            `userIds.add(entity.getCheckUserId());</p><p>`            `ids.add(entity.getId());</p><p>`        `}</p><p>`        `// Related data query and assembly, reduce the database query times</p><p>`        `Map<Serializable, SysUser> userMap = **new** HashMap<>();</p><p>`                `Map<Serializable, CmsPlaceAttribute> attributeMap = **new** HashMap<>();</p><p>`        `**if** (**null** != pksMap.get("userIds")) {</p><p>`            `List<Serializable> userIds = pksMap.get("userIds");</p><p>`            `List<SysUser> entitys = sysUserService.getEntitys(userIds.toArray(**new** Serializable[userIds.size()]));</p><p>`            `**for** (SysUser entity : entitys) {</p><p>`                `userMap.put(entity.getId(), entity);</p><p>`            `}</p><p>`            `List<Serializable> ids = pksMap.get("ids");</p><p>`                        `List<CmsPlaceAttribute> attributes = attributeService.getEntitys(ids.toArray(**new** Serializable[ids.size()]));</p><p>`                        `**for** (CmsPlaceAttribute attribute : attributes) {</p><p>`                            `attributeMap.put(attribute.getPlaceId(), attribute);</p><p>`                        `}</p><p>`        `}</p><p> </p><p>`        `ExcelView view = **new** ExcelView(workbook -> {</p><p>`            `Sheet sheet = workbook</p><p>                    .createSheet(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.content"));</p><p>`            `**int** i = 0, j = 0;</p><p>`            `// Create a header row and add a field</p><p>`            `Row row = sheet.createRow(i++);</p><p> </p><p>`            `row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.id"));</p><p>`            `row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.title"));</p><p>`            `row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.url"));</p><p>`            `row.createCell(j++).setCellValue(</p><p>`                    `LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.content.promulgator"));</p><p>`            `row.createCell(j++)</p><p>                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.clicks"));</p><p>`            `row.createCell(j++)</p><p>                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.publish\_date"));</p><p>`            `row.createCell(j++)</p><p>                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.create\_date"));</p><p>`            `row.createCell(j++)</p><p>                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.status"));</p><p>`            `row.createCell(j++)</p><p>                    .setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale, "page.inspector"));</p><p>`            `// Add a field column for extended data</p><p>`            `**if** (CommonUtils.notEmpty(metadata.getExtendList())) {</p><p>`                `**for** (SysExtendField extend : metadata.getExtendList()) {</p><p>`                    `row.createCell(j++).setCellValue(extend.getName());</p><p>`                `}</p><p>`            `}</p><p> </p><p>`            `SysUser user;</p><p>`            `CmsPlaceAttribute attribute;</p><p>`            `DateFormat dateFormat = DateFormatUtils.getDateFormat(DateFormatUtils.FULL\_DATE\_FORMAT\_STRING);</p><p>`            `// Data is traversed and written line by line</p><p>`            `**for** (CmsPlace entity : entityList) {</p><p>`                `row = sheet.createRow(i++);</p><p>`                `j = 0;</p><p>`                `row.createCell(j++).setCellValue(entity.getId().toString());</p><p>`                `row.createCell(j++).setCellValue(entity.getTitle());</p><p>`                `row.createCell(j++).setCellValue(entity.getUrl());</p><p>`                `user = userMap.get(entity.getUserId());</p><p>`                `row.createCell(j++).setCellValue(**null** == user ? **null** : user.getNickName());</p><p>`                `row.createCell(j++).setCellValue(String.valueOf(entity.getClicks()));</p><p>`                `row.createCell(j++).setCellValue(dateFormat.format(entity.getPublishDate()));</p><p>`                `row.createCell(j++).setCellValue(dateFormat.format(entity.getCreateDate()));</p><p>                 </p><p>`                `row.createCell(j++).setCellValue(LanguagesUtils.getMessage(CommonConstants.applicationContext, locale,</p><p>`                        `"page.status.place.data." + entity.getStatus()));</p><p> </p><p>`                `// Related data unpacking and use</p><p>`                `user = userMap.get(entity.getCheckUserId());</p><p>`                `row.createCell(j++).setCellValue(**null** == user ? **null** : user.getNickName());</p><p>                 </p><p>`                `// Extended data traversal writes</p><p>`                `**if** (CommonUtils.notEmpty(metadata.getExtendList())) {</p><p>`                    `attribute = attributeMap.get(entity.getId());</p><p>`                    `Map<String, String> map = ExtendUtils.getExtendMap(**null** == attribute ? **null** : attribute.getData());</p><p>`                    `**for** (SysExtendField extend : metadata.getExtendList()) {</p><p>`                        `row.createCell(j++).setCellValue(map.get(extend.getId().getCode()));</p><p>`                    `}</p><p>`                `}</p><p>`            `}</p><p>`        `});</p><p>`        `DateFormat dateFormat = DateFormatUtils.getDateFormat(DateFormatUtils.SHORT\_DATE\_FORMAT\_STRING);</p><p>`        `// setting the file name</p><p>`        `view.setFilename(metadataComponent.getPlaceMetadata(filepath).getAlias()+"\_"+dateFormat.format(**new** Date()));</p><p>`        `**return** view;</p><p>`    `}</p><p> </p><p>}</p>|
```

| :- |

1. # <a name="_toc122375233"></a>**Technical support**
   1. ## <a name="_toc118193161"></a><a name="_toc122375234"></a>**Free Technical Support**
      SyncCMS official website：[https://www.SyncCMS.com/]()

QQ communication group：[191381542](https://shang.qq.com/wpa/qunwpa?idkey=8a633f84fb2475068182d3c447319977faca6a14dc3acf8017a160d65962a175) , [481589563]() , [638756883](https://shang.qq.com/wpa/qunwpa?idkey=0ed046f258b0dcb1e6c295e1633f8532bf0d38a65ca1d35f820badaaea44ce41)

Freemarker files：<http://www.kerneler.com/freemarker2.3.23/>

Online debuggingFreeMarker：<https://www.sanluan.com/freemarker_test.html>

1. ## <a name="_toc118193162"></a><a name="_toc122375235"></a>**Commercial Technical Support**
   You can get commercial technical support after buying the software usage authorization, and you can also buy the commercial technical support service alone.
