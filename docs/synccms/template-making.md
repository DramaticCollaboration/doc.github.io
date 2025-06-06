---
order: 4
---

# Template Making

**Public CMS**

Template Making Manual

[1 Introduction to SyncCMS 4](#_toc127370731)

[1.1 Profile 4](#_toc127370732)

[1.2 License Agreement 4](#_toc127370733)

[1.3 Access to SyncCMS 5](#_toc127370734)

[2 Template Usage 5](#_toc127370735)

[2.1 Overview 5](#_toc127370736)

[2.2 Ordinary page template 5](#_toc127370737)

[2.3 Category page template 9](#_toc127370738)

[2.4 Content page template 16](#_toc127370739)

[2.5 Task plan script 20](#_toc127370740)

[2.6 Template Fragements 21](#_toc127370741)

[2.7 Page Fragements 22](#_toc127370742)

[3 Template language 27](#_toc127370743)

[3.1 Profile/Overview 27](#_toc127370744)

[3.2 Template Syntax 28](#_toc127370745)

[3.3 Data instruction extension 29](#_toc127370746)

[3.4 Entity Query Instruction 29](#_toc127370747)

[3.5 List query instruction 29](#_toc127370748)

[3.6 Function Extension 30](#_toc127370749)

[3.7 Macro definition 31](#_toc127370750)

[3.8 Aliases and scopes 31](#_toc127370751)

[3.9 Template manual 31](#_toc127370752)

[4 Template data 32](#_toc127370753)

[4.1 Common Data 32](#_toc127370754)

[4.2 Common Data of Web Templates 33](#_toc127370755)

[4.3 Static template common data 33](#_toc127370756)

[4.4 Static classification Template Data 33](#_toc127370757)

[4.5 Static content Template Data 34](#_toc127370758)

[4.6 Recommended bit data 34](#_toc127370759)

[4.7 Dynamic template common data 34](#_toc127370760)

[4.8 Dynamic Template Parameter Data 35](#_toc127370761)

[4.9 Site Configuration Data 35](#_toc127370762)

[5 Multiple sites and multiple domain names 36](#_toc127370763)

[5.1 Multiple sites 36](#_toc127370764)

[5.2 Multiple domain names 38](#_toc127370765)

[6 Feature Application 40](#_toc127370766)

[6.1 Template Examples 40](#_toc127370767)

[6.2 Template Help 42](#_toc127370768)

[6.3 Searching and Replacing Templates in Batches 43](#_toc127370769)

[6.4 Device Adaptation 44](#_toc127370770)

[6.5 Internationalization 47](#_toc127370771)

[6.6 Visual layout 48](#_toc127370772)

[6.7 Quick Maintenance 51](#_toc127370773)

[6.8 Website Access Statistics 52](#_toc127370774)

[7 Technical support 53](#_toc127370775)

[7.1 Free Technical Support 53](#_toc127370776)

[7.2 Commercial Technical Support 53](#_toc127370777)

1. # <a name="_toc122374956"></a><a name="_toc127370731"></a>**Introduction to SyncCMS**
   1. ## <a name="_toc122374957"></a><a name="_toc127370732"></a>**Profile**
      SyncCMS is designed based on the latest 2023 Java technology with open source code and structure friendly to SEO. SyncCMS can operate/manage hundreds of thousands of data and PV easily. SyncCMS has been accepted and used by many famous companies and enterprises, and it owns 0.0005% of the total websites of the world. We provide free version and technical support , and we believe SyncCMS will be a good choice for great data website construction and big enterprise projects.

- SyncCMS is suitable for both dynamic website and static website;
- SyncCMS can support multi-site creation, with totally separate data and templates for each website.

1. ## <a name="_toc22743463"></a><a name="_toc122374958"></a><a name="_toc127370733"></a>**License Agreement**

| <p>1. Authorized rights</p><p>&emsp;1.1. Modify ,Copy and share SyncCMS and its source code;</p><p>&emsp;1.2. Get free authorization document based on prerequisite agreement, and use SyncCMS in non-business conditions ( for individual user only);</p><p>&emsp;1.3. Application of SyncCMS in business usage is allowed for at most 3 months. webpages developed must be marked with “Powered by SyncCMS”. The SyncCMS logo and license agreement must appear in an obvious position of the website.</p><p>&emsp;1.4. Application of SyncCMS in business usage should be authorized by the owner of the software by buying the authorization document. The company authorized should be the final user of the SyncCMS.</p><p>&emsp;1.5. Licensed users can Modify ,Copy and spread SyncCMS and its source code ;</p><p>&emsp;1.6. The license agreement applies only to the current version of the SyncCMS, earlier versions have their own license agreement;</p><p>2. Copyright</p><p>&emsp;2.1. The copyright of the software belongs to the official owner of the SyncCMS;</p><p>3. Disclaimer (of warranty)</p><p>&emsp;3.1. SyncCMS and its affiliated documents are provided with no responsibilities for any possible risk, and can not provide any warranties; </p><p>&emsp;3.2. Before using SyncCMS, one should fully understand it and assume its possible risks. We won`t provide any technical support or usage warranty, and are not responsible for any risks caused by using SyncCMS unless you have bought the technology support service. </p><p></p> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc483039313"></a><a name="_toc22743464"></a><a name="_toc122374959"></a><a name="_toc127370734"></a>**Access to SyncCMS**
   Executable file download:

<https://www.SyncCMS.com/download.html>

SyncCMS source code download:

`	`GITEE: <https://gitee.com/sanluan/SyncCMS>

`	`GITHUB: <https://github.com/sanluan/SyncCMS>

1. # <a name="_toc127370735"></a>**Template Usage**
   1. ## <a name="_toc127370736"></a>**Overview**
      The main usages of template in Public CMS

- ordinary page templates
- content page templates
- category page template
- task plan script
- template fragments
- page fragments

  In the construction of a website project, analysis of the three different types of pages (ordinary page, classified page, content page) can help you create a website more quickly and systematically. The flexible use of template fragments, page fragments, task planning script can make your website template logic more reasonable.

  1. ## <a name="_toc127370737"></a>**Ordinary page template**
     Ordinary page templates are usually used to display relatively fixed content, such as the home page, about us, contact us, etc.

Such pages are not paginated except for display, and may display a portion of systematic content, such as the latest articles. This type of content usually uses instructions to fetch data directly and present it. There may also be one or more fragmented content, such as the focus map in the home page, the comments section in Contact us, and so on. This kind of fragmented contents usually uses the way of page fragments to achieve the management of these contents.

1. ### **Dynamic access**

   To use ordinary template in a dynamic way, you need to set the background template metadata to allow dynamic access.

1. ### **Static**

   To make an ordinary page template static, enable static in the background template metadata and set the publishing path to the required access path.

1. ### **Dynamic template parameter transfer and use**
   Dynamic template parameter passing is simple. It is similar to dynamic parameter passing in other technologies. As long as you request the template, you add "? Parameter name = parameter value & Parameter name 2= Parameter value 2".

Due to security requirements and cache control requirements, SyncCMS’s platform site templates need to set acceptable parameters in template metadata.

Parameter types can be text, number, multiline text, content, category, and user.

When the text is selected, the system will automatically process the line break character in the field, and the number will be converted to the numeric type. If the conversion fails, the page request will return 404;

When multiline text is selected, nothing is done to the parameters;

When the content is selected, the system will automatically query the corresponding parameters of the content entity,. when the entity does not exist, has been disabled, or is not on the site, page request return 404;

When the category or the user is selected, the processing logic is similar to the content.

Name is the name of the parameter in the url. If required is checked, a valid parameter must be passed. Otherwise, 404 will be returned.

The alias is the name of the variable in the template. If the parameter is null, use the parameter name as the variable name.

After the array is checked, the variable will exist as an array in the template. You can pass multiple parameters with the same name to pass multiple variables.

For example, the dynamic template content.html metadata setting allows dynamic access:

Dynamic request address:

content.html?id=1&pageIndex=2&tagIds=1&tagIds=2&tagIds=3

or REST Style request address：

content/1_2?tagIds=1&tagIds=2&tagIds=3

Use the following variables in template:

${pageIndex} or <@\_contentList pageIndex=pageIndex></@\_contentList>

The green pageIndex is the variable after converting the url transfer parameter pageIndex to a number. The red pageIndex is the name of the directive parameter

content is the content entity queried by the id of the transfer parameter of url.

<#if tagIds?has_content><#list tagIds as t>${t}<#sep>,</#list></#if>

tagIds is the result of converting the url transfer parameter tagIds into an array

1. ### **Extended field**
   <a name="_hlk118125489"></a>Template metadata can be extended in template metadata.

When editing the template, you can click on Template Properties-> Extend the field in the Template Help. Modify the code logic to use these extension fields in an appropriate manner, where all extension field types are stored in string format.

For example, the extention field name ：title

| ${(metadata.extendData.title)!} |
| :------------------------------ |

Select this page in Page->Page management for maintainance

1. ## <a name="_toc466562180"></a><a name="_toc466562767"></a><a name="_toc466563142"></a><a name="_toc466563463"></a><a name="_toc127370738"></a>**Category page template**

   The category page template is usually used to display the articles entered in the background and other classified information. The Public CMS supports dynamic display of content and staticize the content for one or more copies.

1. ### **Dynamic access**
   In dynamic display, you need pass at least one category id parameter to the template to facilitate the use of directives in the template to get content-related data.

When the category page template is used in dynamic mode, it needs to be set to allow dynamic access in the background template metadata and set acceptable parameters. The category id should be passed to this parameter when the template is used in other templates.

And clear the static template in the category Settings. Set the access path of the category page to the template path above. The parameter name is the acceptable parameter name above, and the value is ${category.id}.

The corresponding dynamic address to the template metadata confugration above: category/category.html?id=${category.id}

or REST style address：category/category/${category.id}

1. ### **Static**
   You do not need to select Enable statics for template metadata

To staticize Category page template, you need to set up a static template for category management in the background, and configurate static style Category page accessing path. The configurated template will be used to generate static page for category when the categories are saved, the categories home page is generated in batches, the categories page is generated, and the task plan is generated.

1. ### **Dynamic Paging**
   Dynamic paging needs to pass paging parameter name in the third parameter of getPage function.

```
|<p><div></p><p>`    `<#assign</p><p>`        `start=*1*</p><p>`        `end=*page.totalPage*</p><p>`    `/></p><p>`    `<#if (page.pageIndex-5) gt start></p><p>`        `<#assign start=*page.pageIndex-4*/></p><p>`    `</#if></p><p>`    `<#if (page.pageIndex+5) lt end></p><p>`        `<#assign end=*page.pageIndex+4*/></p><p>`    `</#if></p><p>`    `<#if !page.firstPage></p><p>`        `<a href=*"${getPage(category.url,page.prePage,'pageIndex')}"*>Previous page</a></p><p>`    `<#else></p><p>`        `<span>Previous page</span></p><p>`    `</#if></p><p>`    `<#if start gt 1></p><p>`        `<a href=*"${category.url}"*>1</a> ...</p><p>`    `</#if></p><p>`    `<#list start..end as n></p><p>`        `<#if n=*page.pageIndex*></p><p>`            `${n}</p><p>`        `<#else></p><p>`            `<a href=*"${getPage(category.url,n,'pageIndex')}"*>${n}</a></p><p>`        `</#if></p><p>`    `</#list></p><p>`    `<#if end lt page.totalPage></p><p>        ... <a href=*"${getPage(category.url,page.totalPage,'pageIndex')}"*>${page.totalPage}</a></p><p>`    `</#if></p><p>`    `<#if !page.lastPage></p><p>`        `<a href=*"${getPage(category.url,page.nextPage,'pageIndex')}"*>Next page</a></p><p>`    `<#else></p><p>`        `<span>Next page</span></p><p>`    `</#if></p><p></div></p>|
| :- |
```

1. ### **Static Paging**
   Static paging only needs to pass the following two parameters : the current page url and page number

```
|<p><div data-diy=*"task"*></p><p>`    `<#assign</p><p>`        `start=*1*</p><p>`        `end=*page.totalPage*</p><p>`    `/></p><p>`    `<#if (page.pageIndex-5) gt start></p><p>`        `<#assign start=*page.pageIndex-4*/></p><p>`    `</#if></p><p>`    `<#if (page.pageIndex+5) lt end></p><p>`        `<#assign end=*page.pageIndex+4*/></p><p>`    `</#if></p><p>`    `<#if !page.firstPage></p><p>`        `<a href=*"${getPage(url,page.prePage)}"*>Previous page</a></p><p>`    `<#else></p><p>`        `<span>Previous page</span></p><p>`    `</#if></p><p>`    `<#if start gt 1></p><p>`        `<a href=*"${url}"*>1</a> ...</p><p>`    `</#if></p><p>`    `<#list start..end as n></p><p>`        `<#if n=*page.pageIndex*></p><p>`            `${n}</p><p>`        `<#else></p><p>`            `<a href=*"${getPage(url,n)}"*>${n}</a></p><p>`        `</#if></p><p>`    `</#list></p><p>`    `<#if end lt page.totalPage></p><p>        ... <a href=*"${getPage(url,page.totalPage)}"*>${page.totalPage}</a></p><p>`    `</#if></p><p>`    `<#if !page.lastPage></p><p>`        `<a href=*"${getPage(url,page.nextPage)}"*>Next page</a></p><p>`    `<#else></p><p>`        `<span>Next page</span></p><p>`    `</#if></p><p></div></p>|
| :- |
```

1. ### **Extension field**
   You can use category type to manage category extension field.

Modify or add category type in the Develop -> Configuration management-->Category type.

Edit category template, and use extension field. All extended field types are stored in string format.

```
|<p><#assign attribute=getCategoryAttribute(category.id)/> <#-- On the static category page, you can use attribute objects. On the dynamic category page, you need to obtain attribute objects --></p><p>${(attribute.text?no\_esc)!}  <#-- To output an editor field, use no\_esc to declare no safe escape --></p><p>${getUrl(attribute.url)!}  <#-- Attachments need to be converted to absolute paths using getUrl --></p>|
| :- |
```

Then in Category Management, add the category selection to add the category type you just created.

You can also change an already created category to this category type. Then double-click the blank area or click the Modify category button to enter the category editing page.

Then you can start to edit the properties you just added.

1. ### **Content contribution**
   You can set the content contribution function of Category open to allow users submitting content data without logging in the background. The content contribution function requires users to log in the website.

First of all , set up category management to allow contribution.

To obtain contribution code in category management or in Template help->Contribution form.

You can paste the contribution code to any dynamic template. You can select “log in necessary” to set up the metadata of the template . The title is required in the contribution field. Use js or css to control style and interaction.

1. ## <a name="_toc127370739"></a>**Content page template**

   The content page template is usually used to display the articles entered in the background and other classified information. The Public CMS supports dynamic display of content and staticize the content for one or more copies.

1. ### **Dynamic access**
   In dynamic display, you need pass at least one content id parameter to the template to facilitate the use of directives in the template to get content-related data.

Set up to allow dynamic access in the background template metadata and set acceptable parameters. The category id should be passed to this parameter when the template is used in other templates.

Select the conresponding template in category and clear up the static template . Set the access path of the content page to the template path above. The parameter name is the acceptable parameter name above, and the value is ${content.id}.

The corresponding dynamic address to the template metadata confugration above is: content.html?id=${content.id}

or REST style address：content/${content.id}

1. ### **Static**
   You don’t need to select “enable static” for content template metadata setting.

To staticize content page template, you need to set up publishable content model for category management in the background(Select “Show Advanced Options” next to “Save” button in the upper right corner to display the TAB page) , select static template for the publishable content model and configurate static style content page accessing path. The configurated template will be used to generate static page for content when the contents are saved, the contents are generated in batches, and the task plan is generated.

1. ### <a name="_toc466562181"></a><a name="_toc466562768"></a><a name="_toc466563143"></a><a name="_toc466563464"></a>**Numbers of clicks update**
   Content clicks are usually updated in the content page using js.

```
|<p><article></p><p><p>Views:<em>loading...</em></p></p><p></article></p><p><script></p><p>`    `$.getJSON('${site.dynamicPath!}api/contentClick?id=${content.id}', **function**(data){</p><p>`        `$('article p em').text(data.clicks);</p><p>`    `});</p><p></script></p>|
| :- |
```

1. ### **Rich text content style control**
   Editor can modify content style and picture size in content text. To prevent the layout adjustments in the editor from affecting the overall style of the site, you can refer to the following style controls.

```

|<p><style></p><p>*.clearfix::after*{display: *block*;clear: *both*;content: *""*;}</p><p>**article** *#content* **img,article** *#content* **table** {max-width:*100%*;}</p><p>**article** *#content*{**width***:100*%;*overflow:* **auto**;}</p><p></style></p><p><article></p><p><div id=*"content"* class=*"clearfix"*>${(text?no\_esc)!}</div></p><p></article></p><p><script src=*"${site.dynamicPath}resource/plugins/ueditor/ueditor.parse.min.js"*></script></p><p><script></p><p>uParse('#content',{rootPath: '${site.dynamicPath}resource/ueditor/'});</p><p></script></p>|
| :- |
```

1. ### **Extention fields**
   You can use content model and category to manage content extension field.

Modify or add content model in the Development -> configuration management-->Content model management.

Or modify or add category in Content->Category management( Switch to the publishable Content Model management TAB and check the content that is allowed to be published).

Edit content template, and use extension field. All extended field types are stored in string format.

```
|<p><#assign attribute=getContentAttribute(content.id)/> <#-- On the static content page, you can use attribute objects. On the dynamic content page, you need to obtain attribute objects --></p><p>${(attribute.text2?no\_esc)!}  <#-- To output an editor field, use no\_esc to declare no safe escape -->${getUrl(attribute.file)!}  <#-- Attachments need to be converted to absolute paths using getUrl --></p>|
| :- |
```

You can maintain those extented fields in corresponding content maintainance page.

1. ## <a name="_toc127370740"></a>**Task plan script**

   Task plan script is used in Public CMS task plan and data operations are performed under ordinary directives and task plan special directives and is scheduled by a task schedule, such as a periodic generation in a static site.

1. ## <a name="_toc127370741"></a>**Template Fragements**
   Template fragments are the freemarker template engine's template reuse solution. There are two ways to use template fragments: include and import.

Template fragment inclusion is the extraction of a template statement into a separate file that can be included by different templates. You can reuse a portion of the template, reducing the total amount of code and the amount of work required to modify the repetitive content. The variables in the template context above can be used directly in the included template fragment.

When you import a template, you need to name it a namespace, and when you use a variable or function or directive definition in the template, you need to take the namespace with you. The import method can effectively avoid contamination of context variable names.

More files and documents about namespaces:

<http://www.kerneler.com/freemarker2.3.23/dgui_misc_namespace.html>

1. ## <a name="_toc127370742"></a>**Page Fragements**

   Page fragments are introduced by Public CMS in product design. Each page fragment is a complete page, which is parsed into text (such as html) and then embedded in the page that references it. When it renders, you can't get the variable of the template that references it. After SSI is enabled, page fragments can be generated periodically through the task plan. The page fragment reference in the template will print only one ssi directive, which will be dynamically included by services such as nginx when requesting html. This can greatly improve the speed of template rendering.

1. ### **Recommended bits**

   Page fragments can also be bound to an extensible data list by setting the number of valid data in the metadata. Page fragments bound with data are generally referred to as recommendation bits, such as focus map, friendship link, editing recommended articles, etc., which can be realized by using recommendation bits. Developers can develop less background management functions, because fragmented data display and maintenance can be realized by adding page fragments in the background .

1. ### **Extended field**
   You can manage the page fragment metadata extended fields in editing page fragment metadata under Development-> Page fragment management template .

Click the template properties ( in the Template Help) -> The extension fields to edit the page fragment template,, and modify the code logic to use these extension fields in an appropriate manner. All extended field types are stored in string format.

For example: extended field encoding slogin

```
|${(metadata.extendData.slogan)!}|
| :- |
```

Select this Page fragment in Page ->Page fragment management for maintenance .

1. ### **Extended Field for Recommended Bits**
   When editing page fragment metadate in Development -> Page fragment template, you can manage the extended field for recommended bits ( This parameter is displayed only when the number of data bars is greater than 0).

Edit page fragment template, and use the extended fields, and all extended field types are stored in sting format.

```
|<p><#list page.list as a></p><p><#assign attribute=getPlaceAttribute(a.id)/></p><p>${(attribute.description)!}</p><p>${getUrl(attribute.file)!}  <#-- Attachments need to be converted to absolute paths using getUrl --></p><p></#list></p>|
| :- |
```

Select this page fragment in Page->Page fragment management to modify the recommended bit data.

1. ### **Recommended bit contribution**
   When editing page fragment template metadate in Development -> Page fragment template, you can manage the recommended bit contribution.

Check to allow contributions, and decide whether to check to allow anonymous contributions according to the actual needs . You can also set the front desk maintenance personnel, and these users don’t need to log in the background management of the contribution data for audit, revocation audit, delete and other management operations.

Obtain contribution code and front desk maintenance function code in Template help->Contribution form.

Paste it into any template. If anonymous contributions are not allowed, you need to use dynamic template for contributions, and this dynamic template can be set you need to log in to set the metadata, the title of the contribution field is required, and use js or css for style and interactive control with the form.

1. # <a name="_toc127370743"></a>**Template language**
   1. ## <a name="_toc127370744"></a>**Profile/Overview**
      SyncCMS uses the FreeMarker template engine to render the templates, and this template has perfect data processing, logical judgment function. It uses a simple, proprietary language. The SyncCMS program stores and queries data, and then the template displays the prepared data.

SyncCMS extends the data instructions and functions of FreeMarker.

1. ## <a name="_toc127370745"></a>**Template Syntax**
   Template syntax is the part of a template that is parsed by the template engine. Identifying template syntax helps you understand the operating mechanism and working principle of SyncCMS.

A template (= FTL program) is a mix of the following sections:

- **Text**: Text that will be printed to the output as is.
- **Interpolation**: These sections will be replaced with a calculated value in the output. Interpolations are delimited by ${ and } (or with #{ and }, but that shouldn't be used anymore; see more here).
- **FTL tags**: FTL tags are a bit similar to HTML tags, but they are instructions to FreeMarker and will not be printed to the output.
- **Comments**: Comments are similar to HTML comments, but they are delimited by <#-- and -->. Comments will be ignored by FreeMarker, and will not be written to the output.

Let's see a concrete template. I have marked the template's components with colors: text, interpolation, FTL tag, comment. With the _[BR]_-s I intend to visualize the line breaks.

```
<html>*[BR]*

<head>*[BR]*

`  `<title>Welcome!</title>*[BR]*

</head>*[BR]*

<body>*[BR]*

`  `<#-- Greet the user with his/her name -->*[BR]*

`  `<h1>Welcome ${user}!</h1>*[BR]*

`  `<p>We have these animals:*[BR]*

`  `<ul>*[BR]*

`  `<#list animals as animal>*[BR]*

`    `<li>${animal.name} for ${animal.price} Euros*[BR]*

`  `</#list>*[BR]*

`  `</ul>*[BR]*

</body>*[BR]*

</html>
```

1. ## <a name="_toc127370746"></a>**Data instruction extension**
   Getting data through custom instructions is the main way that Public CMS implements template customization, because directives are a special kind of data model in freemarker templates. Therefore, in addition to the import and include directives, the directives in the Public CMS template can be prefixed with "\_" or the “package name. short instruction name” to distinguish from the data in the template. Also, the instructions in the template can be invoked by js , json interfaces ,or other systems.

There are four main types of instructions in the template:

- An instruction to get a single or multiple entitiy instructions based on the primary key
- An instruction to query a list based on criteria
- Task schedule specific directives: This class of directives can only be used in task schedule scripts
- Function instructions: This class of instructions is used to complete a specific function and can be used in any template

  You can modify a template by using the template creation help provided by the background template editing function of the Public CMS, or by viewing the instruction function user manual for instructions on how to use instructions.

  1. ## <a name="_toc127370747"></a>**Entity Query Instruction**
     Query a single entity

| <p><#assign id=1/></p><p><@\_ Instruction name id= id >${object. attribute }</@\_ Instruction name ></p><p>或</p><p><@ package name. short instruction name id= id >${object. attribute }</@ package name. short instruction name ></p> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Or Query multiple entities

| <p><#assign ids=’1,2,3’/></p><p><@\_ Instruction name ids= ids>${map[‘1’].id}</@\_ Instruction name ></p><p>或</p><p><@ package name. Instruction name ids= ids>${map[‘1’].id}</@ package name. Instruction name ></p> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc466562196"></a><a name="_toc466562783"></a><a name="_toc466563158"></a><a name="_toc466563479"></a><a name="_toc127370748"></a>**List query instruction**
   These instructions all have two parameters, pageIndex and count, which respectively represent the current page number and the number of items on each page. The query result is Page.

Query list data

| <p><@\_ Instruction name pageIndex=1 count=10></p><p><#list page.list as a></p><p>`	`${a? counter}:${a.id}<#if a?has_next>,</#if></p><p></#list></p><p></@\_ Instruction name ></p><p>or</p><p><@ package name. short instruction name pageIndex=1 count=10></p><p><#list page.list as a></p><p>`	`${a? counter}:${a.id}<#if a?has_next>,</#if></p><p></#list></p><p></@ package name. short instruction name ></p> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

page Attribute list

| **Properties**  | **Type** | **Meaning**                  |
| :-------------- | :------- | :--------------------------- |
| **totalCount**  | int      | Total data                   |
| **pageSize**    | int      | Number of articles per page  |
| **pageIndex**   | int      | Current page number          |
| **list**        | List     | Query the result entity list |
| **totalPage**   | int      | Total page count             |
| **firstResult** | int      | First serial number          |
| **firstPage**   | boolean  | First page or not            |
| **lastPage**    | boolean  | Last page or not             |
| **nextPage**    | int      | Next page number             |
| **prePage**     | int      | Last page number             |

1. ## <a name="_toc127370749"></a>**Function Extension**
   Function extension is a lightweight form of freemarker extension . A function can accept multiple parameters but only have one output.

In Public CMS, relatively simple data acquisition and the processing of some variables are usually implemented by methods. You can use the template making help provided by the template editing function in Public CMS background to use the function. You can also check the instruction function manual for instructions on how to use them.

For example:

Get the content extension properties

| <#assign attribute=getContentAttribute(id)/> |
| :------------------------------------------- |

1. ## <a name="_toc127370750"></a>**Macro definition**
   You can encapsulate a piece of template code as a macro definition for the purpose of reusing code or completing recursive calls.

For example:

```
|<p><#macro bread category></p><p>`    `<#if category.parentId?has\_content></p><p>`        `<@cms.category id=category.parentId></p><p>`            `<@bread object/></p><p>`            `<a href=*"${object.url!}"* target=*"\_blank"*>${object.name}</a> &gt;</p><p>`        `</@cms.category></p><p>`    `</#if></p><p></#macro></p><p><@bread category/> <a href=*"${(category.url)!}"* target=*"\_blank"*>${(category.name)!}</a></p>|
| :- |
```

Output effect :Introduction > Questions

More documents：<http://www.kerneler.com/freemarker2.3.23/dgui_misc_userdefdir.html>

1. ## <a name="_toc127370751"></a>**Aliases and scopes**
   When the variable output in the instruction is the same as the variable above, the variable name inside the instruction represents the variable output by the instruction, and the variable name is reset to the value represented by the variable above at the end of the instruction.

In order to maintain uniformity, most output variables in the system are set to object,page,list,result and other variable names with no clear meaning. When calling the instruction, you can specify the alias of these variables, and these variables and variable aliases will be reclaimed at the end of the instruction.

To continue using a variable after the directive ends, define a new variable name with assign.

For example:

| <p><#assign id=1/></p><p><@cms.content id=id;content>${content.title}</@cms.content > The following output will indicate that content does not exist ${content.title}</p><p><@cms.content id=id><#assign content=object/>${content.title}</@cms.content > The following output prints the title of the content ${content. title }</p> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

1. ## <a name="_toc127370752"></a>**Template manual**
   The FreeMarker manual provides a systematic introduction to template logic and common data processing rules. Reading through the manual will allow you to quickly find the help you need in your template writing process.

Common template manual help index：

Template tutorial：

`	`Instruction：<http://www.kerneler.com/freemarker2.3.23/dgui_template_directives.html>

`	`Expression：<http://www.kerneler.com/freemarker2.3.23/dgui_template_exp.html>

`	`interpolation：<http://www.kerneler.com/freemarker2.3.23/dgui_template_valueinsertion.html>

`	`Reserved keyword：<http://www.kerneler.com/freemarker2.3.23/ref_reservednames.html>

`	`Define variables in the template：<http://www.kerneler.com/freemarker2.3.23/dgui_misc_var.html>

Use help：

`	`Built-in function reference <http://www.kerneler.com/freemarker2.3.23/ref_builtins.html>

`	`Instruction reference <http://www.kerneler.com/freemarker2.3.23/ref_directives.html>

`	`Special variable：<http://www.kerneler.com/freemarker2.3.23/ref_specvar.html>

1. # <a name="_toc127370753"></a>**Template data**
   Use <#list .data_model?keys as k>${k}</#list> in template to output the name of the data model variable for the current template , you can see which variables are directly available in the current template.

In dynamic templates you might get the following information:

site,RequestParameters,springMacroRequestContext,Request,JspTaglibs,org.springframework.validation.BindingResult.metadata,include,Session,Application,base,import,user,metadata

In ststic templates you might get the following information:

site,import,url,include,metadata

Import,include are the built-in import and include directives of Public CMS; RequestParameters, springMacroRequestContext, Request, JspTaglibs, org.springframework.validation.BindingResult.metadata, Session, Application are objects injected into the dynamic template by springmvc framework. Public CMS provides you with many convenient solutions. When it cannot meet your needs, you can use the objects provided by the framework to complete more complex business implementation.

1. ## <a name="_toc127370754"></a>**Common Data**

- site: site

| **Property**    | **Type** | **Name**                     |
| :-------------- | :------- | :--------------------------- |
| **id**          | int      | Site ID                      |
| **name**        | string   | Site name                    |
| **useStatic**   | boolean  | Enable statics               |
| **sitePath**    | string   | Static site access address   |
| **useSsi**      | boolean  | Enable server-side inclusion |
| **dynamicPath** | string   | Dynamic site access address  |
| **disabled**    | boolean  | Disabled                     |

- siteAttribute: Site extension attribute

You can modify the configuration of siteAttribute to perform extended field management in development->Configuration management ->site configuration management. You can modify the configuration data of siteAttribute in Maintenance -> site configuration .

For example, extend field encoding searchPath

| ${(siteAttribute.searchPath)!} |
| :----------------------------- |

1. ## <a name="_toc127370755"></a>**Common Data of Web Templates**

- metadata: metadate

| **Property**        | **Type** | **Name**                      | **Example**                                  |
| :------------------ | :------- | :---------------------------- | :------------------------------------------- |
| **alias**           | string   | Template name                 |                                              |
| **publishPath**     | string   | Publishing path               |                                              |
| **useDynamic**      | boolean  | Dynamic access or not         |                                              |
| **needLogin**       | boolean  | Whether to log in             |                                              |
| **acceptParamters** | string   | List of acceptable parameters |                                              |
| **cacheTime**       | int      | Cache time                    |                                              |
| **extendList**      | list     | Extended field list           |                                              |
| **extendDataList**  | list     | Extended data list            |                                              |
| **extendData**      | map      | Extended data hash table      | ${metadata.extendData. extended field name } |

1. ## <a name="_toc127370756"></a>**Static template common data**
   url: Static path of template.

When you static content and classification, because static file has not been created, you will get null value when reading the url property in the template. If you want to display the address of current page, you need to use ${url}.

1. ## <a name="_toc127370757"></a>**Static classification Template Data**
   category: category entity

attribute: category extend

pageIndex: current page number

1. ## <a name="_toc127370758"></a>**Static content Template Data**
   content: content entity

category: category entity

attribute: content extension

page: pagination

text: text

1. ## <a name="_toc127370759"></a>**Recommended bit data**
   page: Paged data
1. ## <a name="_toc127370760"></a>**Dynamic template common data**

- base: the root path of the current dynamic site

For example :

| <a href=”${base}”> Return to home page </a> |
| :------------------------------------------ |

- user: current login user

| **Property**        | **Type** | **Name**                            | **Example**                                                     |
| :------------------ | :------- | :---------------------------------- | :-------------------------------------------------------------- |
| **id**              | int      | User ID                             |                                                                 |
| **siteId**          | int      | Site ID                             |                                                                 |
| **name**            | string   | User Name                           |                                                                 |
| **nickname**        | string   | Nick name                           | <#if user??> hello，${user.nickname}<#else>not logged in </#if> |
| **deptId**          | int      | Department ID                       |                                                                 |
| **roles**           | string   | Role ID                             |                                                                 |
| **email**           | string   | Email address                       |                                                                 |
| **emailChecked**    | boolean  | The email address has been verified |                                                                 |
| **superuserAccess** | boolean  | Administrator rights                |                                                                 |
| **disabled**        | boolean  | Disabled                            |                                                                 |
| **lastLoginDate**   | date     | Last login date                     |                                                                 |
| **lastLoginIp**     | string   | Last login IP address               |                                                                 |
| **loginCount**      | int      | Number of logins                    |                                                                 |
| **registeredDate**  | date     | Date of registration                |                                                                 |

1. ## <a name="_toc127370761"></a>**Dynamic Template Parameter Data**
   In the Public CMS background, you can set the parameters that the template can receive. The request parameters accepted by “http” when requesting a template are placed in the template's data model, which you can use directly using the parameter names.

For example:

| <p>We set “id” as an acceptable parameter in one of the template metadata.</p><p></p><p>We can use ${id} to output the value of the parameter in template. If this ”id” is the content ID, we can use <@\_content id=id>${object.title}</@\_content> to get the corresponding content for the id and output the title of the content.</p> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc127370762"></a>**Site Configuration Data**
   Under Development->Configuration management-> Site configuration management, you can manage the extend field of system configuration items, add or modify configurations.

On the Template Edit page, click to use these site configure properties under Template Help.

Under Maintenance->Site Configuration, you can maintain the extension fields of system configuration and user-defined configuration extension fields.

1. # <a name="_toc483039326"></a><a name="_toc126684032"></a><a name="_toc127370763"></a>**Multiple sites and multiple domain names**
   Each set of SyncCMS services can support simultaneous access to more than 30,000 sites. Each site can have multiple domain names
1. ## <a name="_toc126684033"></a><a name="_toc127370764"></a>**Multiple sites**
   Each site can not be affacted by another, and users, templates and files are independent.
1. ### **Site management**
   SyncCMS distinguishs different sites by site configuration and domain name information. If there isn’t corresponding domain name ,the corresponding site of “cms.defaultSiteId” in the configuration file” cms.properties” will be visited instead. So do not delete the site ,otherwise your visiting will be error .

The administrative rights for the multiple sites management are based on the site corresponding to “cms.masterSiteIds” in “cms.properties”. There should be at least one site that has site management.

1. ### **Distinguishing Sites**

   If you can not identify which site you are accessing when managing multiple sites , it may misunderstanding and human error may occur. The site you are visiting can be identified by the title of the background login page or the site name above the username entry box. If the actual visit does not meet expectations, you can adjust the “background site -> site Maintenance -> Domain name management” to adjust the corresponding relations between domain names and sites.

1. ### **Creating new site**
   At a site with site administration rights，click “site maintanance ->add site”. The domain name should be a domain name or ip that can access the server where the SyncCMS resides. Fill in the dynamic site address, static site address based on the actual situation.

After saving the above steps, enter the dynamic address of the new site in the browser. The access to the new site should be 404, because the new site has nothing. Add” /admin/” to the dynamic address to visit the background, using the user name and password of the new site to log in.

For example：

1. when we are developing locally , start the project and visit http://localhost:8080/ to access the project's default site, and access to the background of http://localhost:8080/admin/ access to the background.
1. Click the manu site->site management->add site, fill in the information and save. The domain name could be” localhost,127.0.0.1,dev.SyncCMS.com” or its subdomain and ip. Here let’s take’ site2.dev.SyncCMS.com” for example.
1. Visite”http://site2.dev.SyncCMS.com/admin/”，you can see the new site background, and you are free to modify and customize the new site.

Cms provides a quick configuration approach. The defaut static configuration button and default dynamic configuration can automatically generate site configuration according to the domain name of the current background you are accessing.

Before creating a new site, access the background using the expected domain name of the new site, click defaut configuration “ http://site2.dev.SyncCMS.com:8080/ admin/”.

1. ### **Child site**
   The child site will share the content model and data dictionary of the parent site

When the site group option is selected in the primary site domain name, the site directory of the subsite is valid. The access path of all subsites is the parent site path + subsite directory

In this case, parentSite can be used to obtain information about the parent site in all sub-site templates, and all api interfaces should also be specified: ${site.dynamicPath}api\_path?currentSiteId=${site.id}&otherParameters=values

1. ## <a name="_toc126684034"></a><a name="_toc127370765"></a>**Multiple domain names**
   One site can have several domain names, and each domain name can configure different template root directory.
1. ### **Domain name management**
   In site->site maintenance->site management, click the domain name list, you can view the domain name used by the current site and the corresponding template root directory.

For example:

Accessing SyncCMS through “search.SyncCMS.com”, you are access the template under the search directory; Accessing SyncCMS through “cms.SyncCMS.com”, you are access the template under the member directory;

1. ### ` `**Possible Errors caused by binding a domain name to the root directory**
   Suppose the dynamic site address in the site peoperty ueses the domain names bound to the root directory, minor errors could be caused and should be adjusted according to the situation. Such errors can only happen while operating in the background and won’t affect the other functions, so the management people should pay attention.

For example

The dynamic page view button in page management points to the wrong url.

In the page fragment data selection, the dynamic page url here does not go to the page you selected.

1. # <a name="_toc127370766"></a>**Feature Application**
   1. ## <a name="_toc127370767"></a>**Template Examples**
      `	`The template sample provides concise implementations of various requirement scenarios.

`	`Expand the template example, and you can see examples of multi-language home page and switching, category page, content page, comment page, search page, login page, registration page, voting page, and sitemap.

Click on these examples and then click the Save button to get a simple, directly accessible page (content page, category page dynamic templates require url parameters; Static templates need to be statically configured and published in the category before they can be accessed.

1. ## <a name="_toc127370768"></a>**Template Help**
   `	`Template help is an effective template editing aid provided by the template editing page, including output variables; Common instructions and methods; Configuration parameters; Submission form

The output variables include: metadata extension parameter of the current template, static page data attribute, site attribute, global site extension attribute, etc

Common instructions and methods include: common entity query, list query, tool instruction, extended field query function, tool function, etc. Click these instructions or functions to get a simple example and common parameter usage description

The configuration parameters include: All site configuration items

The submission form includes: the content submission form of the category that allows the submission and the recommended bit page fragment data submission form that allows the submission

1. ## <a name="_toc127370769"></a>**Searching and Replacing Templates in Batches**
   Enter the search content in the template content search box and click the "Search" button

`	`View the search results, modify the replacement content, uncheck the results that do not need to be replaced as required, and click the "Replace" button to batch replace the search results

`	`Batch search and replacement can improve the template making speed

1. ## <a name="_toc127370770"></a>**Device Adaptation**
   There are various solutions for different devices adaptation: responsive layout, rendering template adaptation, and page hopping adaptation.
1. ### **Dynamic Rendering Templates adaptation**
   In dynamic access, you can use the userAgent command in the template to obtain device-related information for adaptation.

Device type adaptation

| <p><@\_userAgent></p><p><#switch object.deviceType></p><p>`	`<#case "COMPUTER" ></p><p>`		`PC Adaptation processing</p><p>`		`<#break></p><p>`	`<#case "MOBILE" ></p><p>`		`Mobilephone Adaptation processing</p><p>`		`<#break></p><p>`	`<#case "TABLET" ></p><p>`		`Tablet Adaptation processing</p><p>`		`<#break></p><p>`	`<#case "WEARABLE" ></p><p>`		`Wearable device adaptation processing</p><p>`		`<#break></p><p>`	`<#case "DMR" ></p><p>`		`Digital media receiver adaptation processing</p><p>`		`<#break></p><p>`	`<#case "GAME_CONSOLE" ></p><p>`		`Game console adaptation processing</p><p>`		`<#break></p><p>`	`<#case "UNKNOWN" ></p><p>`		`Device adaptation is not identified</p><p>`		`<#break></p><p>`	`<#default></p><p>`		`Default processing</p><p></#switch></p><p></@\_userAgent></p> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

<a name="_toc466562183"></a><a name="_toc466562770"></a><a name="_toc466563145"></a><a name="_toc466563466"></a>Operating system adaptation object.operatingSystemGroup

| **Value**             | **Type**                           |
| :-------------------- | :--------------------------------- |
| **WINDOWS**           | windows operating system           |
| **ANDROID**           | Android operating system           |
| **CHROME_OS**         | chrome operating system            |
| **WEBOS**             | webos operating system             |
| **PALM**              | palm operating system              |
| **MEEGO**             | Nokia meego operating system       |
| **IOS**               | IOS operating system               |
| **MAC_OS_X**          | mac os x operating system          |
| **MAC_OS**            | mac os operating system            |
| **MAEMO**             | Nokia maemo operating system       |
| **BADA**              | Samsung bada operating system      |
| **GOOGLE_TV**         | Google TV operating system         |
| **KINDLE**            | kindle operating system            |
| **LINUX**             | linux operating system             |
| **SYMBIAN**           | Symbian operating system           |
| **SERIES40**          | Nokia s40 operating system         |
| **SUN_OS**            | sun os operating system            |
| **PSP**               | psp operating system               |
| **WII**               | Wii game console operating system  |
| **BLACKBERRY**        | Blackberry operating system        |
| **BLACKBERRY_TABLET** | Blackberry tablet operating system |
| **ROKU**              | Roku TV operating system           |
| **PROXY**             | Agency                             |
| **UNKNOWN_MOBILE**    | Unknown mobile operating system    |
| **UNKNOWN_TABLET**    | Unknown tablet operating system    |
| **UNKNOWN**           | Unknown operating system           |

Browser adaptation object. browserType

| **Value**         | **Type**                   |
| :---------------- | :------------------------- |
| **OUTLOOK**       | Outlook                    |
| **IE**            | IE Browser                 |
| **EDGE**          | Edge Browser               |
| **CHROME**        | Chrome Browser             |
| **SAFARI**        | Safari Browser             |
| **OPERA**         | Opera Browser              |
| **APPLE_WEB_KIT** | Apple App embedded browser |
| **LOTUS_NOTES**   | Lotus Notes                |
| **FIREFOX**       | Firefox Browser            |
| **MOZILLA**       | Mozilla Browser            |

1. ### **Static Adaptation**
   Static adaptation mainly generates different versions of pages for content, and uses javascript to determine information such as device type to skip when the browser visits, or users can choose different versions to browse.

Only one entry static template and static file path can be configured for each category or content. You can call the createTemplateFile, createCategoryFile, and createContentFile directives in the entry static template to generate other versions of static pages.

For example:

| <p><@\_createContentFile id=content.id templatePath=’/system/content_mobile.html’ filePath=”/m/${content.id}.html” pageIndex=pageIndex> Mobile version page:${url}</@ \_createContentFile></p><p><@\_createContentFile id=content.id templatePath=’/system/content_pad.html’ filePath=”/p/${content.id}.html” pageIndex=pageIndex> Tablet version page:${url}</@ \_createContentFile></p> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

1. ## <a name="_toc127370771"></a>**Internationalization**
   1. ### **Overview**
      Website internationalization can be achieved in different ways. One is to make a number of completely independent site, or the same site with different template directory. This way is relatively simple and has no difference with the traditional website production; One is dynamic template, which uses the internationalization feature of freemarker template engine to implement international naming of templates. You can also use the preceding methods at the same time. The official website 2demo is created using two methods: different template directories on the same site and internationalizing template names.
1. ### **Multisite mode**
   In site management, create multiple sites, create templates in different languages, and assign different administrators to maintain them. Then each site can achieve language switching directly through hyperlinks or js jump, wherein simplified Chinese, traditional Chinese are recommended to directly use js to implement specific Chinese character replacement for page text.
1. ### **Multi-template directory mode**
   Create multiple directories in a template. Each directory is made in a different language. When creating categories ,you can use one or multiple categories based on the actual situation. When using a set of categories, it is required that each category must maintain material in multiple languages. You can use the extended field mode to expand material storage fields of multiple languages. Then maintenance personnel maintain materials of multiple languages for the same content or category. When multiple sets of categories are used, each set of templates uses its own independent category-content system ,which is maintained and managed in a unified background. The switching mode is similar to that of multiple sites.
1. ### **Internationalized Template Naming Method**
   You can refer to the home page and Chinese home page examples in the background template management example. Internationalize and name the template. Then the template engine can realize international language switching

Full internationalized template name :index_zh_CN.html. index is the file name. zh_CN is the language identifier, and.html is the file suffix. The language identifier is divided into two parts: language and region. For example, zh and CN respectively identify Chinese characters.

When locale is set to zh_CN and the user accesses index.html, the template engine preferently loads index_zh_CN.html, if it is not found, then loads index_zh.html, if it is not found, then loads index.html, if it is still not found or the template exists or the index.html template metadata does not have dynamic access enabled, and users get a 404 error.

Common language item

| **Languages**           | **Language value** |
| :---------------------- | :----------------- |
| **ENGLISH**             | en                 |
| **UK ENGLISH**          | en_GB              |
| **US ENGLISH**          | en_US              |
| **CANADA**              | en_CA              |
| **FRENCH**              | fr,fr_FR           |
| **CANADA RENCH**        | fr_CA              |
| **GERMAN**              | de,de_DE           |
| **ITALIAN**             | it,it_IT           |
| **JAPANESE**            | ja,ja_P            |
| **KOREAN**              | ko,ko_KR           |
| **Chinese**             | zh                 |
| **Simplified Chinese**  | zh_CN              |
| **Traditional Chinese** | zh_TW              |

- Tips

  When internationalized naming is used, dynamic access should not be allowed for the template metadata with language suffixes. The metadata obtained from the template is also the metadata of the template without language suffixes. For example, the metadata obtained from the index_zh_CN.html template is the metadata of index.html

  1.  ## <a name="_toc127370772"></a>**Visual layout**
           1. ### **Visual area management**
      `	`Click Add or click existing area to modify, and fill in the name. If the area displays different layout modules for different category pages, you can choose to bind category types. If the visual area binds a category type, when the visual region is invoked , the category id parameter for that category type should be passed

1. ### **Visual layout management**

   `	`Click Add or click the existing area to modify, fill in the name, modify the layout related html, click the "Insert Position" button in the appropriate location, Insert the code ”<#-- position -->”. When the page is rendered, this code will be replaced by the visual module reference code corresponding to the location; To modify the style, click and Insert CSS selector in front of these stylesheets and prefix them with the code "/\* selecter \*/". This code under Page -> Page visualization is replaced with a specific stylesheet prefix to ensure that the style affects only the portion of the visualization area layout that the staff sees.

1. ### **Visual Module Management**

   `	`Click Add or click the existing area to modify, fill in the name, upload the cover image, and select the corresponding page fragment; Cover image only display effect when preview the module under Page->Page visual configuration . When the Copy check box option is checked, the visualization module copies one piece of the page each time it is used in a different visualization area.

1. ### **Visual area configuration**

   `	`Select the visual area for maintenance, first drag the layout in the blank visual area, then drag the module to a different area of the layout; It can also adjust the existing layout and module sequence of the visualization area. Click the button of the maintenance function of the existing module for data maintenance

1. ## <a name="_toc127370773"></a>**Quick Maintenance**
   1. ### **Quick maintenance driver code**
      `	`Visual page layout supports need the definition of itemString (content page, category page and other pages with corresponding data items) and templatePath and the introduction of js

```
|<p><script></p><p>` `**var** itemString="itemType=category&itemId=${category.id}";</p><p>` `**var** templatePath='${.current\_template\_name?keep\_after('/')}';</p><p></script></p><p><script src=*"${site.dynamicPath}resource/js/cms.support.js"*></script></p>|
| :- |
```

- Function menu

`	`Add diy tags to the page elements in the template

```
|data-diy=*"category"* data-diy-id=*"${(category.id)!}"*|
| :- |
```

`	`The values of data-diy and data-diy-id support:

| **data-diy**       | **Function menu**        | **itemTyp appliese** | **data-diy-id** | **value of data-diy-id**  |
| :----------------- | :----------------------- | :------------------- | :-------------- | :------------------------ |
| **category**       | Category Management      | All                  | optional        | Category id               |
| **comment**        | Comment Management       | content              | NA              |                           |
| **content**        | Content Management       | content、category    | optional        | Content id                |
| **child-category** | Subcategory Management   | category             | NA              |                           |
| **page**           | Page Management          | All                  | NA              |                           |
| **region**         | Visual Management        | All                  | Required        | Area id                   |
| **place**          | Page fragment Management | All                  | Required        | Page fragment path        |
| **user**           | User Management          | All                  | optional        | User id                   |
| **config**         | Configuration Management | `	`All                | optional        | Configuration item coding |
| **task**           | Plan task Management     | All                  | NA              |                           |

- Function button

  Add diy tag to the parent element , and add diy-item tag to the children elements

```
|<p><@cms.categoryList></p><p><ul data-diy=”category”></p><p>`    `<#list page.list as a></p><p>`        `<li data-diy-item=”${a.id}”><a href=”${a.url}”>${a.name}</a></li></p><p>`    `</#list></p><p></ul></p><p></@cms.categoryList></p>|
| :- |
```

The values of data-diy and data-diy-itemsupport:

| **data-diy**                 | **Function button**        | **value of data-diy-**item |
| :--------------------------- | :------------------------- | :------------------------- |
| **category, child-category** | Edit category              | Category id                |
| **comment**                  | Edit comment,Reply comment | Comment id                 |
| **content**                  | Edit content               | Content id                 |
| **place**                    | Edit recommend data        | Recommend data id          |
| **user**                     | Edit user                  | User id                    |

1. ### **Quick maintenance**

   `	`Click to enter the website quick maintenance mode. When you visit different pages in this window, the upper menu will be dynamically numbered. You can also use the mouse to row over the maintainable elements of the webpage, and the corresponding menu will pop up. Click the menu item to quickly manage the relevant data or content of the website

1. ## <a name="_toc127370774"></a>**Website Access Statistics**
   `	`Website access statistics support needs to define itemString (content page, category page and other pages with corresponding data items), introduce js, and call statistical code

```
|<p><script></p><p>` `**var** itemString="itemType=category&itemId=${category.id}";</p><p></script></p><p><script src=*"${site.dynamicPath}resource/js/cms.support.js"*></script></p><p><script></p><p>`    `**var** ca = cmsAnalytics();</p><p>`    `**var** url='${site.dynamicPath}api/visit/record';</p><p>`    `**if**("string" ==**typeof** itemString){</p><p>`        `url=url+"?"+itemString;</p><p>`    `}</p><p>`    `ca.setDomain('${domain.name}');</p><p>`    `ca.setPath('/');</p><p>`    `ca.report(url);</p><p></script></p>|
| :- |
```

1. # <a name="_toc118798938"></a><a name="_toc127370775"></a>**Technical support**
   1. ## <a name="_toc118193161"></a><a name="_toc118798939"></a><a name="_toc127370776"></a>**Free Technical Support**
      Public CMS official website：<https://www.SyncCMS.com/>

QQ communication group：[191381542](https://shang.qq.com/wpa/qunwpa?idkey=8a633f84fb2475068182d3c447319977faca6a14dc3acf8017a160d65962a175) , [481589563](https://shang.qq.com/wpa/qunwpa?idkey=c5bd272056925b95dc9b1449050926edb79eb328b00eaaa9024e358ab94891c8) , [638756883](https://shang.qq.com/wpa/qunwpa?idkey=0ed046f258b0dcb1e6c295e1633f8532bf0d38a65ca1d35f820badaaea44ce41)

Freemarker files：<http://www.kerneler.com/freemarker2.3.23/>

Online debuggingFreeMarker：<https://www.sanluan.com/freemarker_test.html>

1. ## <a name="_toc127370777"></a>**Commercial Technical Support**
   You can get commercial technical support after buying the software usage authorization, and you can also buy the commercial technical support service alone.
