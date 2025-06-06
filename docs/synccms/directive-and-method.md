---
order: 2
---

# Directive and Method

![](/cms/directive-and-method/001.png "logo") www.publiccms.com

**PublicCMS**

Directive and Method Manual

[1 Introduction to PublicCMS 3]()

[1.1 Profile 3]()

[1.2 License Agreement 3]()

[1.3 Access to PublicCMS 4]()

[2 Template directive and method overview 4]()

[2.1 Directive usage 4]()

[2.2 Method usage 4]()

[2.3 Authorization to third party’s application access to interface 5]()

[3 Template directive 5]()

[3.1 General data structure 5]()

[3.2 Namespace: api 5]()

[3.3 namespace: cms 10]()

[3.4 Namespace: log 39]()

[3.5 Namespace: oauth 43]()

[3.6 Namespace: sys 43]()

[3.7 Namespace: task 60]()

[3.8 Namespace: tools 63]()

[3.9 Namespace: trade 78]()

[3.10 Namespace: visit 86]()

[4 Template Method 92]()

[4.1 Method list 92]()

[5 Technical support 104]()

[5.1 Free technical support 104]()

[5.2 Commercial technical support 104]()

1. # <a name="_toc466562193"></a><a name="_toc466562780"></a><a name="_toc466563155"></a><a name="_toc466563476"></a><a name="_toc483039311"></a><a name="_toc22743461"></a><a name="_toc127369289"></a><a name="_toc127627962"></a>Introduction to PublicCMS
   1. ## <a name="_toc127369290"></a><a name="_toc127627963"></a>Profile
      PublicCMS is designed based on the latest 2023 Java technology with open source code and structure friendly to SEO. PublicCMS can operate/manage hundreds of thousands of data and PV easily. PublicCMS has been accepted and used by many famous companies and enterprises, and it owns 0.0005% of the total websites of the world. We provide free version and technical support , and we believe PublicCMS will be a good choice for great data website construction and big enterprise projects.

- PublicCMS is suitable for both dynamic website and static website;
- PublicCMS can support multi-site creation, with totally separate data and templates for each website.

1. ## <a name="_toc22743463"></a><a name="_toc127369291"></a><a name="_toc127627964"></a>License Agreement

| <p>1. Authorized rights</p><p>&emsp;1.1. Modify ,Copy and share PublicCMS and its source code;</p><p>&emsp;1.2. Get free authorization document based on prerequisite agreement, and use PublicCMS in non-business conditions ( for individual user only);</p><p>&emsp;1.3. Application of PublicCMS in business usage is allowed for at most 3 months. webpages developed must be marked with “Powered by PublicCMS”. The PublicCMS logo and license agreement must appear in an obvious position of the website.</p><p>&emsp;1.4. Application of PublicCMS in business usage should be authorized by the owner of the software by buying the authorization document. The company authorized should be the final user of the PublicCMS.</p><p>&emsp;1.5. Licensed users can Modify ,Copy and spread PublicCMS and its source code ;</p><p>&emsp;1.6. The license agreement applies only to the current version of the PublicCMS, earlier versions have their own license agreement;</p><p>2. Copyright</p><p>&emsp;2.1. The copyright of the software belongs to the official owner of the PublicCMS;</p><p>3. Disclaimer (of warranty)</p><p>&emsp;3.1. PublicCMS and its affiliated documents are provided with no responsibilities for any possible risk, and can not provide any warranties; </p><p>&emsp;3.2. Before using PublicCMS, one should fully understand it and assume its possible risks. We won`t provide any technical support or usage warranty, and are not responsible for any risks caused by using PublicCMS unless you have bought the technology support service. </p><p></p> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

1. ## <a name="_toc483039313"></a><a name="_toc22743464"></a><a name="_toc127369292"></a><a name="_toc127627965"></a>Access to PublicCMS
   Executable file download:

[https://www.publiccms.com/download.html]()

PublicCMS source code download:

`	`GITEE: <https://gitee.com/sanluan/PublicCMS>

`	`GITHUB: [https://github.com/sanluan/PublicCMS]()

1. # <a name="_toc127627966"></a>**Template directive and method overview**
   1. ## <a name="_toc127627967"></a>Directive usage
      Getting data through custom directive is the main way that Public CMS implements template customization, because directive are a special kind of data model in freemarker templates. Therefore, in addition to the import and include directive, the directive in the Public CMS template can be prefixed with "\_" or the “package name. short directive name” to distinguish from the data in the template. Also, the directive in the template can be invoked by js , json interfaces ,or other systems.

There are four main types of directive in the template:

- An directive to get a single or multiple entity directive based on the primary key
- An directive to query a list based on criteria
- Task schedule specific directive: This class of directive can only be used in task schedule scripts
- Function directive: This class of directive is used to complete a specific function and can be used in any template

Most of the directive and method support http interface access, but , requests to some sensitive data with interface permission protection need to carry the appToken parameter.

1. ## <a name="_toc127627968"></a>Method usage
   Method is a lightweight extension to a template that accepts zero or multiple parameters and returns a single piece of data. Method is also a special data model template, which is used for user data processing and extension field acquisition in PublicCMS. Most of the methods in the template can be invoked by js , json interfaces ,or other systems.
1. ## <a name="_toc127627969"></a>Authorization to third party’s application access to interface

- Create an application; Select the interfaces allowed to be accessed and set the Token validity period
- Use the key to obtain the authorization Token; After creating an application, you can view appKey and appSecret, and use them to request /api/appToken interfaces to obtain authorization tokens
- Issue the Token manually. If the validity date is not specified, the token is valid forever
- Use appToken to request protective interfaces to get the data

1. # <a name="_toc127627970"></a>**Template directive**
   CMS data directive is a kind of extension of FreeMarker, which is encapsulated and extended in PublicCMS.
1. ## <a name="_toc127627971"></a>General data structure
   page property list

| **Properties name** | **Type** | **Meaning**                 |
| :------------------ | :------- | :-------------------------- |
| **totalCount**      | int      | Total data                  |
| **pageSize**        | int      | Number of articles per page |
| **pageIndex**       | int      | Current page number         |
| **list**            | List     | Query result entity list    |
| **totalPage**       | int      | Total page count            |
| **firstResult**     | int      | First serial number         |
| **firstPage**       | boolean  | First page or not           |
| **lastPage**        | boolean  | Last page or not            |
| **nextPage**        | int      | Next page number            |
| **prePage**         | int      | Last page number            |

1. ## <a name="_toc127627972"></a>**Namespace: api**
   http Interface customization directive
1. ### **appClient: Client registration interface**
   parameter list

- uuid: device unique id
- clientVersion: Client version

Return result

Use example

```
<script>

$.getJSON('${site.dynamicPath}api/appClient?uuid=1&clientVersion=1.0&appToken= Interface access authorization Token ', function(data){

});

</script>
```

1. ### **appToken: Interface access authorization Token Query interface**
   Parameter list

- appKey: Application key
- appSecret :Application key

Return result

- appToken: Interface access authorization Token
- expiryDate: Expiration date
- error: Error message, when appKey, appSecret is empty or an error occurs, returns【secretError】

Examples:

```
<script>

$.getJSON('${site.dynamicPath}api/appToken?appKey=1&appSecret=1', function(data){

`  `$('article p em').text(data.clicks);

});

</script>
```

1. ### **autoLogin :Automatic login interface**
   Parameter list

- uuid :device unique id
- username: user name
- channel: Login channel

Return result

- result: Login result,【true,false】
- authToken: User login authorization
- expiryDate: Expiration date
- user: user information <a name="_hlt117849937"></a>[SysUser]()

Use example:

```
<script>

$.getJSON('${site.dynamicPath}api/autoLogin?uuid=1&username=admin&channel=web', function(data){

`    `console.log(result+","+authToken+","+user.nickname+","+expiryDate);

});

</script>
```

1. ### **bindingUser: Bind the user interface to the client**
   Parameter list

- uuid: device unique id
- channel: Client version

Return result

- result: Binding result

Use example

```
<script>

$.getJSON('${site.dynamicPath}api/bindingUser?uuid=1&channel=web&authToken= User login authorization &authUserId=1', function(data){

console.log(data.result);

});

</script>
```

1. ### **clearCache: Cache clearing interface**
   Use example

```
`  `<script>

`   `$.getJSON('${site.dynamicPath}api/clearCache&appToken=Interface access authorization Token', function(data){

`     `console.log("ok");

`   `});

` `</script>
```

1. ### **contentCheck: Content audit interface**
   Parameter list

- ids: multiple content id
- uncheck: Cancel audit, 【true,false】, Default is false

Renturn result

Use Example:

```
<script>

$.getJSON('${site.dynamicPath!}api/contentCheck?ids=1,2&authToken= User login authorization &authUserId=1&appToken= Interface access authorization Token', function(data){

});

</script>
```

1. ### **contentClick: Content click interface**
   Parameter list

- id: content id

Return Result

- clicks: number of Content clicks

Use Example

```
<script>

$.getJSON('${site.dynamicPath}api/contentClick?id=1', function(data){

`  `console.log(data.clicks);

});

</script>
```

1. ### **login: login interface**
   Parameter list

- username: device uniqueid
- password :user name
- encoding: Password encryption mode
- channel:: login channel

Return Result

- result: login result,【true,false】
- authToken: User login authorization
- expiryDate: Expiration date
- user: user information <a name="_hlt117849982"></a><a name="_hlt117867591"></a><a name="_hlt117867592"></a>[SysUser]()

Use Example

```
<script>

$.getJSON('${site.dynamicPath}api/login?username=admin&password=sha512encodingpassword&encoding=sha512&channel=web', function(data){

`    `console.log(result+","+authToken+","+user.nickname+","+expiryDate);

});

</script>
```

1. ### **myContentList: My content interface**
   Parameter list

- categoryId : category id, valid when parentId is empty
- containChild: Whether subcategories are included,【true,false】
- categoryIds: Multiple category ids, valid when categoryId is empty
- modelId: Multiple model id
- parentId: Parent content id
- onlyUrl: Outer chain,【true,false】
- hasImages: Have a image list,【true,false】
- hasFiles: Have a file list,【true,false】
- hasProducts: Have a product list,【true,false】
- startPublishDate: Start time of publish date,【2020-01-01 23:59:59】,【2020-01-01】
- endPublishDate: End time of publish date, no more than now when advanced options are disabled,【2020-01-01 23:59:59】,【2020-01-01】
- status :content status,【0: operation,1: published,2: pending review,3: rejected】
- emptyParent: advanced options, Whether the parent content id is empty,【true,false】, valid when parentId is empty
- orderField: Order field,【score: score, comments: number of comments, clicks: number of clicks, publishDate: publish date, updateDate: update date, checkDate: heck date】, by default, the top level is sorted backwards and the publication date is sorted by orderType
- orderType: order type,【asc: Positive order, desc: reverse order,】, The default is reverse order,
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: <a name="_hlt117867593"></a><a name="_hlt117867594"></a>[PageHandler]()
- page.list: List type, Query result entity list [CmsContent]()

Use Example

```
<script>

$.getJSON('${site.dynamicPath!}api/myContentList?pageSize=10&authToken=User login authorization&authUserId=1', function(data){

`    `console.log(data.totalCount);

});

</script>
```

1. ### ` `**refreshToken: Refreshing the appToken interface**
   Parameter list

- appToken: device uniqueid

Return Result

- authToken User login authorization
- expiryDate Expiration date
- error: Error message【needNotRefresh】

Use Example

```
<script>

$.getJSON('${site.dynamicPath}api/login?appToken=Interface access authorization Token', function(data){

`    `console.log(appToken+","+expiryDate);

});

</script>
```

1. ### **unBindingUser: The client unbinds the user interface**
   Parameter list

- uuid: device uniqueid
- channel: Client version

Return Result

- result :cancel binding result

Use Example

```
<script>

$.getJSON('${site.dynamicPath}api/unBindingUser?uuid=1&channel=web&authToken=User login authorization&authUserId=1', function(data){

console.log(data.result);

});

</script>
```

1. ## <a name="_toc127627973"></a>**namespace: cms**
   ` `CMS directive
1. ### **category: Categpry query directive**
   Parameter list

- id: category id, result return object [CmsCategory]()
- code: category code, valid when id is null and object is returned as a result
- absoluteURL: url processing for absolute paths defaults to true
- containsAttribute: valid when the id is not null, the default value is false, the result is an attribute extended data map(field encoding,value).
- Ids: multiple category ids, Comma or space interval, valid when id or code is null, map(id,object) is returned.

Use Example

```
<@cms.category id=1>${object.name}</@cms.category>

<@cms.category ids=1,2,3><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.category>

`   `<script>

`    `$.getJSON('${site.dynamicPath}api/directive/cms/category?id=1', function(data){

`      `console.log(data.name);

`    `});

`  `</script>
```

1. ### **categoryList: Category list query directive**
   Parameter list

- parentId :parent category id
- typeId: category type id
- absoluteURL: url processing is an absolute path and defaults to true
- queryAll: Query all,【true,false】,valid when parentId is empty
- advanced: Enable advanced options. The default is false
- disabled: Advanced Options: Disabled. Default is false
- hidden: Advanced Options: hide,【true,false】
- pageIndex: page number
- pageSize: number of articles per page

Return Result

- page: [PageHandler]()
- page.list: List type Query result Entity list, sorted in positive order, id reverse order [CmsCategory]()

Use Example

```
<@cms.categoryList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@cms.categoryList>

`   `<script>

`    `$.getJSON('${site.dynamicPath}api/directive/cms/categoryList?pageSize=10', function(data){

`      `console.log(data.totalCount);

`    `});

`  `</script>
```

1. ### **categoryModel: Category content model mapping query directive**
   Parameter list

- categoryId :category id, result return object [CmsCategoryModel]()
- modelId: content model id,valid when id is null and result return object
- modelIds: multiple content model id, valid when categoryId exists and modelId is empty, result return map(content model id,object)
- categoryIds: multiple category id, valid when categoryId does not exist and modelId exists, result return map(category id,object)

Use Example

```
<@cms.categoryModel categoryId=1 modelId='article'>${object.templatePath}</@cms.categoryModel>

<@cms.categoryModel categoryIds=1,2,3 modelId='article'><#list map as k,v>${k}:${v.templatePath}<#sep>,</#list></@cms.categoryModel>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/categoryModel?categoryId=1&modelId=article', function(data){

`     `console.log(data.templatePath);

`   `});

` `</script>
```

1. ### **categoryModelList: Category model mapping list query directive**
   Parameter list

- modelId :content model id
- categoryId: category id

Return Result

- list: List type, query result entity list [CmsCategoryModel]()

Use Example

```
<@cms.categoryModelList modelId='article'><#list page.list as a>${a.templatePath}<#sep>,</#list></@cms.categoryModelList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/categoryModelList?modelId=article', function(data){

`     `console.log(data[0].totalCount);

`   `});

` `</script>
```

1. ### **categoryType: Category type query directive**
   Parameter list

- id: category id, result return object [CmsCategoryType]()
- ids: multiple category id, Comma or space interval, valid when id or code is empty, result return map(id,object)

Use Example

```
<@cms.categoryType id=1>${object.name}</@cms.categoryType>

<@cms.categoryType ids=1,2,3><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.categoryType>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/categoryType?id=banner', function(data){

`     `console.log(data.name);

`   `});

` `</script>
```

1. ### **categoryTypeList: Category type list query directive**
   when there are no parameters available for query. This directive returns all results fixed and is not pageable

Return Result

- page: [PageHandler]()
- page.list: List type, Query result entity list [CmsCategoryType]()

Use Example

```
<@cms.categoryTypeList><#list page.list as a>${a.name}<#sep>,</#list></@cms.categoryTypeList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/categoryTypeList', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **comment: Comment query directive**
   Parameter list

- id: comment id, result return object [CmsComment]()
- ids: multiple id, Comma or space interval, valid when the id is null, result return map(id,object)

Use Example

```
<@cms.comment id=1>${object.text}</@cms.comment>

<@cms.comment ids=1,2,3><#list map as k,v>${k}:${v.text}<#sep>,</#list></@cms.comment>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/comment?id=1&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.text);

`   `});

` `</script>
```

1. ### **commentList: Comment list query directive**
   Parameter list

- userId: Post comment userid
- replyId: Be commented back id
- contentId: content id
- emptyReply: Whether the reply id is null, valid if the replyId is null. The default value is false
- replyUserId: id of the user being replied to
- advanced: Enable advanced options. The default is false
- status: Advanced options: Comment status, [1: Published,2: Pending review]
- checkUserId: Advanced options: Audit user id
- disabled: Advanced options: deleted comments,【true,false】
- orderField: order field ,【replies: number of replies ,scores: scores, checkDate: chesk date, updateDate:update date, createDate: create date】, The default top id is sorted by orderType
- orderType: order type,【asc:positive order ,desc:reverse order】, The default is in reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list List type Query result entity list [CmsComment]()

Use Example

```
<@cms.commentList contentId=1 pageSize=10><#list page.list as a>${a.text}<#sep>,</#list></@cms.commentList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/commentList?contentId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **content: Content query directive**
   Parameter list

- id: content id, result return object[CmsContent]()
- absoluteURL: url processing for absolute paths defaults to true
- absoluteId: rl processing for absolute paths defaults to true
- containsAttribute: valid when id is not empty, Default is false,result return attribute Content extension data map(field encoding,value)
- ids: multiple content id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.content id=1>${object.title}</@cms.content>

<@cms.content ids=1,2,3><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.content>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/content?id=1', function(data){

`     `console.log(data.title);

`   `});

` `</script>
```

1. ### **categoryFileList :Content file list query directive**
   Parameter list

- fileTypes: file type ,【image:Image,video:Video,audio:audio,other:other】
- image: Whether images, valid when fileTypes are empty,【true,false】
- contentId: content id
- userId: user id
- absoluteURL: url processing for absolute paths defaults to true
- orderField: order field ,【size: file size ,clicks: number of clicks】,default order positive order 、id positive order
- orderType: order type,【asc:positive order ,desc:reverse order】,default order is reverse order
- pageIndex: page number
- pageSize:: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type, Query result entity list [CmsContentFile]()

Use Example

```
<@cms.contentFileList contentId=1 pageSize=10><#list page.list as a>${a.filePath}<#sep>,</#list></@cms.contentFileList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/contentFileList?contentId=1&pageSize=10', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **contentList :Content list query directive**
   Parameter list

- categoryId: category id, valid when parentId is empty
- containChild Whether subcategories are included,【true,false】
- categoryIds: multiple category id, valid when categoryId is empty
- modelId: multiple model id
- parentId: parent content id
- onlyUrl: External link,【true,false】
- hasImages: Have a image list,【true,false】
- hasFiles: Have a file list,【true,false】
- hasProducts: Have a product list,【true,false】
- hasCover: have a cover,【true,false】
- userId: publish user id
- startPublishDate: start time of publish date,【2020-01-01 23:59:59】,【2020-01-01】
- endPublishDate: end time of publish date, can not be longer than now when Advanced options are disabled,【2020-01-01 23:59:59】,【2020-01-01】
- advanced: Enable advanced options. The default is false
- status Advanced options:content status,【0: operation,1: published,2: pending review,3: rejected】
- disabled Advanced options:Disabled state, default false
- emptyParent Advanced options: whether parent content id is empty,【true,false】,valid when parentId is empty
- title Advanced options: title
- absoluteURL: The url processing absolute path defaults to true
- absoluteId: id is treated as the ID of the referenced content, which defaults to true
- orderField: order field ,【score: score, comments: number of comment, clicks:number of clicks,publishDate:publish date ,updateDate:update date,checkDate:check date】,default topping order is reverse order、Publication dates are sorted by orderType
- orderType: order type,【asc:positive order ,desc:reverse order】,default order is reverse order
- firstResult: The starting position, starting at 1
- pageIndex: page number, valid when firstResult doesn’t exsist
- pageSize: Number of articles per page
- maxResults: Maximum result number

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsContent]()

Use Example

```
<@cms.contentList pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.contentList>

`  `<script>

`    `$.getJSON('${site.dynamicPath}api/directive/cms/contentList?pageSize=10', function(data){

`      `console.log(data.totalCount);

`    `});

</script>
```

1. ### **contentProduct: Product query directive**
   Parameter list

- id: content id ,result return object[CmsContentProduct]()
- absoluteURL: Treating cover as an absolute path defaults to true
- ids: multiple content id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.contentProduct id=1>${object.title}</@cms.contentProduct>

<@cms.contentProduct ids=1,2,3><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.contentProduct>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/contentProduct?id=1', function(data){

`     `console.log(data.title);

`   `});

` `</script>
```

1. ### **contentProductList: Product list query directive**
   Parameter list

- contentId: content id
- userId: publish user id
- title: title
- startPrice: start price
- endPrice: end price
- absoluteURL: Treating the cover image as an absolute path defaults to true
- orderField: order field ,【price:price,inventory:inventory,sales:sales】, The top ids are sorted by orderType by default
- orderType: order type,【asc:positive order ,desc:reverse order】, reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsContentProduct]()

Use Example

```
<@cms.contentProductList contentId=1 pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.contentProductList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/contentProductList?contentId=1&pageSize=10', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **contentQuoteList: Content quote list query directive**
   Parameter list

- quoteId:quote content id

Return Result:

- list: list type Query result entity list [CmsContent]()

Use Example

```
<@cms.contentQuoteList contentId=1 pageSize=10><#list list as a>${a.title}<#sep>,</#list></@cms.contentQuoteList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/contentQuoteList?contentId=1', function(data){

`    `console.log(data);

`  `});

</script>
```

1. ### **contentRelatedList: Content related list query directive**
   Parameter list

- contentId: content id
- relatedContentId: relate content id
- relationType: relation type
- relation: relation
- orderField: order field ,【clicks: clicks】, positive order by default 、idpositive order
- orderType: order type,【asc:positive order ,desc:reverse order】, reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsContentRelated]()

Use Example

```
<@cms.contentRelatedList contentId=1 pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.contentRelatedList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/contentRelatedList?contentId=1&pageSize=10', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **dictionaryData: Data dictionary data query directive**
   Parameter list

- dictionaryId: data dictionary id
- value: value, result return object [CmsDictionaryData]()
- values: multiple values,Comma or space interval, valid when value is null. result return map(id,object)

Use Example

```
<@cms.dictionaryData dictionaryId='data' value='1'>${object.text}</@cms.dictionaryData>

<@cms.dictionaryData dictionaryId values='1,2,3'><#list map as k,v>${k}:${v.text}<#sep>,</#list></@cms.dictionaryData>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/dictionaryData?dictionaryId=data&value=1', function(data){

`     `console.log(data.text);

`   `});

` `</script>
```

1. ### **dictionaryDataList: Data dictionary data list**
   Parameter list

- dictionaryId: dictionary id, Returns an empty result if null
- parentValue: Parent node value

Return Result

- list: list type Query result entity list [CmsDictionaryData]()

Use Example

```
<@cms.dictionaryDataList dictionaryId='data'><#list list as a>${a.text}<#sep>,</#list></@cms.dictionaryDataList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/cms/dictionaryDataList?dictionaryId=1&parentValue=text', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **dictionary: Data dictionary query directive**
   Parameter list

- id:value ,result return object[CmsDictionary]()
- ids: multiple values,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.dictionary id='data'>${object.name}</@cms.dictionary>

<@cms.dictionary values='data,data2'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.dictionary>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/dictionary?dictionaryId=data&value=1', function(data){

`     `console.log(data.name);

`   `});

` `</script>
```

1. ### **dictionaryExclude: Data dictionary exclusion rule query directive**
   Parameter list

- dictionaryId: data dictionary id
- excludeDictionaryId: Excluded dictionary, result return object[CmsDictionaryExclude]()
- excludeDictionaryIds: multiple excluded dictionary ,Comma or space interval,valid when excludeDictionaryId is empty,result return map(id,object)

Use Example

```
<@cms.dictionaryExclude dictionaryId='data' excludeDictionaryId='data1'>${object.id.excludeDictionaryId}</@cms.dictionaryExclude>

<@cms.dictionaryExclude dictionaryId='data' excludeDictionaryIds='data1,data2'><#list map as k,v>${k}:${v.id.excludeDictionaryId}<#sep>,</#list></@cms.dictionaryExclude>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/dictionaryExclude?dictionaryId=data&value=1', function(data){

`     `console.log(data.id.excludeDictionaryId);

`   `});

` `</script>
```

1. ### **dictionaryExcludeList: Data dictionary list of data**
   Parameter list

- dictionaryId: dictionary id
- excludeDictionaryId: excluded dictionary id

Return Result

- list: list type Query result entity list [CmsDictionaryExclude]()

Use Example

```
<@cms.dictionaryExcludeList dictionaryId='data'><#list list as a>${a.id.excludeDictionaryId}<#sep>,</#list></@cms.dictionaryExcludeList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/dictionaryExcludeList?dictionaryId=1&parentValue=text', function(data){

`  `console.log(data);

});

</script>
```

1. ### **dictionaryExcludeValue: Data dictionary exclusion value query directive**
   Parameter list

- dictionaryId: data dictionary id
- excludeDictionaryId: exluded dictionary
- value: dictionary value,result return object[CmsDictionaryExcludeValue]()
- values: multiple dictionary value,Comma or space interval, valid when value is empty,result return map(id,object)

Use Example

```
<@cms.dictionaryExcludeValue dictionaryId='data' excludeDictionaryId='data1' value='data1'>${object.excludeValues}</@cms.dictionaryExcludeValue>

<@cms.dictionaryExcludeValue dictionaryId='data' excludeDictionaryId='data1' values='1,2'><#list map as k,v>${k}:${v.excludeValues}<#sep>,</#list></@cms.dictionaryExcludeValue>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/dictionaryExcludeValue?dictionaryId=data&excludeDictionaryId=data1&value=1', function(data){

`     `console.log(data.excludeValues);

`   `});

` `</script>
```

1. ### **dictionaryList: Data dictionary list directive**
   Parameter list

- name: dictionary name
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsDictionary]()

Use Example

```
<@cms.dictionaryList name='data'><#list page.list as a>${a.name}<#sep>,</#list></@cms.dictionaryList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/cms/dictionaryList?name=data', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **editorHistory: Text history query directive**
   Parameter list

- id: category id,result return object [CmsEditorHistory]()
- ids: multiple comment id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.editorHistory id=1>${object.text}</@cms.editorHistory>

<@cms.editorHistory ids=1,2,3><#list map as k,v>${k}:${v.text}<#sep>,</#list></@cms.editorHistory>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/editorHistory?id=1&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.text);

`   `});

` `</script>
```

1. ### **editorHistoryList: content text history list query directive**
   Parameter list

- contentId: content id
- fieldname: field name
- userId: user id
- orderType: order type,【asc:positive order ,desc:reverse order】, By default, the publish date is in reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result page subattribute:

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsEditorHistory]()

Use Example

```
<@cms.editorHistoryList contentId=1 fieldName='text' pageSize=10><#list page.list as a>${a.text}<#sep>,</#list></@cms.editorHistoryList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/editorHistoryList?contentId=1&fieldName='text'&pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **facetSearch: Content list query directive**

- Parameter list: [CmsSearchDirective]()

Return Result

- page: Faceted search results [FacetPageHandler]()
- page.list: list type Query result entity list [CmsContent]()

Use Example

```
`  `<@cms.facetSearch word='cms' pageSize=10>

`  `<p> category: <#list page.facetMap.categoryId as k,v><@cms.category id=k>${object.name}</@cms.category>(${v})</#list></p>

`  `<p> model: <#list page.facetMap.modelId as k,v><@cms.model id=k>${object.name}</@cms.model>(${v})</#list></p>

`  `<#list page.list as a><p>${a.title}</p></#list>

`  `</@cms.facetSearch>



`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/facetSearch?word=cms&pageSize=10', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **model: Page fragment data query directive**
   Parameter list

- id: content model id,result return object [CmsModel]()
- ids: multiple content model id,Comma or space interval, valid when the id is null,result return map(id,object)

Use Example

```
<@cms.model id='article'>${object.name}</@cms.model>

<@cms.model ids='article,link,picture'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.model>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/cms/model?id=article', function(data){

`     `console.log(data.name);

`   `});

` `</script>
```

1. ### **modelList: Content model list query directive**
   Parameter list

- parentId: parent content model id
- queryAll :query all models, valid when parentId is empty,【true,false】,by default false
- hasChild :have submodel,【true,false】
- onlyUrl: outer link,【true,false】
- hasImages: Have a image list,【true,false】
- hasFiles: have file list,【true,false】

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsModel]()

Use Example

```
<@cms.modelList><#list page.list as a>${a.name}<#sep>,</#list></@cms.modelList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/modelList', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **place: Recommended data query directive**
   Parameter list

- id: Recommended data id,result return object [CmsPlace]()
- absoluteURL: Treating urls as absolute paths defaults to true
- containsAttribute: valid when id is not empty, default is false, result return attribute
- ids :multiple recommended data id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.place id=1>${object.title}</@cms.place>

<@cms.place ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.place>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/place?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.title);

`  `});

</script>
```

1. ### **placeList: Recommended data list query directive**
   Parameter list

- path: Page fragment path
- userId: user id
- advanced: Enable advanced options. The default is false
- status Advanced options: Data state,【0:operation,1:published,2: To be reviewed】
- disabled Advanced options: Disabled state, default is false
- startPublishDate: start time of publish date,【2020-01-01 23:59:59】,【2020-01-01】
- endPublishDate: end time of publish date, no more than now When advanced options are disabled,【2020-01-01 23:59:59】,【2020-01-01】
- itemType :data item type,【content:content ,category:category,custom:custom】
- itemId:data item id
- absoluteURL: The url and cover image are treated as absolute paths, which default to true
- orderField: order field ,【createDate:create date,clicks:number of clicks】, Publication dates are sorted by orderType by default
- orderType: order type,【asc:positive order ,desc:reverse order】, reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsPlace]()

Use Example

```
<@cms.placeList path='/1.html' pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.placeList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/placeList?path=/1.html&pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **search: Content list query directive**
   Parameter list

```
- word: Search terms, multiple search terms take the union results
- exclude: Exclusion vocabulary
- tagId: multiple tag id, take the union result when multiple labels are used
- categoryId: category id
- containChild: Contains subcategories, which are valid when categoryId is not empty
- categoryIds: multiple category id, valid when categoryId is not empty
- extendsValues: Multiple extended field values in format: [field code]: field value], e.g:extendsValues='isbn:value1,unicode:value2'
- dictionaryValues: Multiple data dictionary values, containing all child results if there is only the parent value, in the format of [field code]\_[field value],e.g: dictionaryValues='extend1\_value1,extend1\_value2'
- dictionaryUnion:  take the union result of data dictionary, valid when dictionaryUnion is not empty,【true,false】, The default is an intersection result
- highlight: Highlight keywords,【true,false】,default is false, When highlighting is enabled, the title, Author, Editor, description fields should be added ? no\_esc for the highlighted html to take effect, and cms automatically escapes the original value with html safety
- preTag: Highlight prefix, valid when highlighting is enabled. Default is "<b>"
- postTag: Highlighting suffix, valid when highlighting is enabled. Default is "</b>"
- projection: Projection result, [true,false], default is false
- phrase: Exact search, [true,false], defaults to false
- fields: Search field,【title:title, author:author, editor:editor, description:description, text:text,files:attachment,extends: Extended full-text data index】
- modelIds: multiple model id
- startPublishDate start time of publish date,【2000-01-01 23:59:59】,【2000-01-01】
- endPublishDate end time of publish date,【2000-01-01 23:59:59】,【2000-01-01】
- orderField: order field ,【clicks:number of clicks,reverse order,score:score,reverse order,publishDate:publish date,reverse order】, The default correlation is reverse order
- pageIndex: page number
- pageSize: Number of articles per page
- maxResults: Maximum result number
```

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsContent]()

Use Example

```
<@cms.search word='cms' pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.search>

`  `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/cms/search?word=cms&pageSize=10', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **survey: Questionnaire query directive**
   Parameter list

- id : questionnaire id, result return object [CmsSurvey]()
- ids: multiple questionnaire id,Comma or space interval, valid when the id is null,result return map(id,object)

Use Example

```
<@cms.survey id=1>${object.title}</@cms.survey>

<@cms.survey ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.survey>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/cms/survey?id=1', function(data){

`   `console.log(data.title);

` `});

` `</script>
```

1. ### **surveyList: Questionnaire list query directive**
   Parameter list

- userId: user id
- surveyType: survey type ,【exam: exam,survey: survey】
- startStartDate: start start date 【2020-01-01 23:59:59】,【2020-01-01】
- endStartDate: end start date,【2020-01-01 23:59:59】,【2020-01-01】
- startEndDate: start end date ,【2020-01-01 23:59:59】,【2020-01-01】
- endEndDate: end start date,【2020-01-01 23:59:59】,【2020-01-01】
- title: title
- disabled: disabled, false by defaut
- orderField: order field ,【votes: Number of participants, startDate: start date,endDate: end date,createTime: create time】, The default id is sorted by orderType
- orderType: order type,【asc:positive order ,desc:reverse order】, reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsSurvey]()

Use Example

```
<@cms.surveyList pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.surveyList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/cms/surveyList?pageSize=10', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **surveyQuestion: Survey question query directive**
   Parameter list

- id: Survey question id,result return object [CmsSurveyQuestion]()
- ids: multiple survey question id,Comma or space interval,valid when the id is null,result return map(id,object)
- absoluteURL: Treating the cover image as an absolute path, defaults to true
- advanced: Enable advanced options. The default is false

Use Example

```
<@cms.surveyQuestion id=1>${object.title}</@cms.surveyQuestion>

<@cms.surveyQuestion ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.surveyQuestion>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/cms/surveyQuestion?id=1&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.title);

` `});

` `</script>
```

1. ### **surveyQuestionItem: Survey Question Item query directive**
   Parameter list

- id: Survey Question id,result return object [CmsSurveyQuestionItem]()
- ids: multiple Survey Question id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.surveyQuestionItem id=1>${object.title}</@cms.surveyQuestionItem>

<@cms.surveyQuestionItem ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.surveyQuestionItem>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/cms/surveyQuestionItem?id=1', function(data){

`   `console.log(data.title);

` `});

` `</script>
```

1. ### **surveyQuestionItemList: Survey Question Item List query directive**
   Parameter list

- questionId: question id
- orderField: order field ,【votes: Number of votes received】, The default sort is in order
- orderType: order type,【asc:positive order ,desc:reverse order】, reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsSurveyQuestionItem]()

Use Example

```
<@cms.surveyQuestionItemList questionId=1 pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.surveyQuestionItemList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/surveyQuestionItemList?questionId=1&pageSize=10', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. ### **surveyQuestionList: Survey question list query directive**
   Parameter list

- surveyId: Survey id
- questionTypes: multiple question types,【radio: Single option ,select: Drop-down selection,checkbox: checkbox,text:text,file:file,picture:picture】
- absoluteURL: Treating the cover image as an absolute path defaults to true
- advanced: Enable advanced options. The default is false
- orderType: order type,【asc:positive order ,desc:reverse order】, The default is sort order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsSurveyQuestion]()

Use Example

```
<@cms.surveyQuestionList surveyId=1 pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.surveyQuestionList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/surveyQuestionList?surveyId=1&pageSize=10', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. ### **tag: Tag query directive**
   Parameter list

- id: tag id,result return object [CmsTag]()
- ids: multiple tag id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.tag id=1>${object.name}</@cms.tag>

<@cms.tag ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.tag>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/tag?id=1', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **tagList: Tag list query directive**
   Parameter list

- typeId: tag type id
- name:tag name
- advanced: Enable advanced options. The default is false
- orderField Advanced options:: order field ,【searchCount: Number of searches】, The default searchCount is sorted by orderType
- orderType: order type,【asc:positive order ,desc:reverse order】, reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsTag]()

Use Example

```
<@cms.tagList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@cms.tagList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/tagList?pageSize=10', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. ### **tagType: Tag Type query directive**
   Parameter list

- id: tag type id,result return object [CmsTagType]()
- ids: multiple tag type id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.tagType id=1>${object.name}</@cms.tagType>

<@cms.tagType ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.tagType>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/tagType?id=1', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **tagTypeList: Tag type list query directive**
   Parameter list

- name: Tag name
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsTagType]()

Use Example

```
<@cms.tagTypeList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@cms.tagTypeList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/tagTypeList?pageSize=10', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **userScore: User score query directive**
   Parameter list

- userId: user id
- itemType: Item type
- itemId: Item id,result return object [CmsUserScore]()
- itemIds: multiple Item id, Comma or space interval, valid when itemId is null,result return map(itemId,object)

Use Example

```
<@cms.userScore id=1>${object.scores}</@cms.userScore>

<@cms.userScore ids='1,2,3'><#list map as k,v>${k}:${v.scores}<#sep>,</#list></@cms.userScore>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userScore?id=1', function(data){

`  `console.log(data.scores);

});

</script>
```

1. ### **userScoreList: User score list query directive**
   Parameter list

- userId: user id
- itemType: item type
- itemId: item id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsUserScore]()

Use Example

```
<@cms.userScoreList userId=1 pageSize=10><#list page.list as a>${a.scores}<#sep>,</#list></@cms.userScoreList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userScoreList?userId=1&pageSize=10', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **userSurvey: User survey response query directive**
   Parameter list

- userId: user id
- surveyId: survey id,result return object [CmsUserSurvey]()
- surveyIds :multiple survey ids,Comma or space interval, Takes effect when surveyId is empty and userId is not,result return map(surveyId,object)
- userIds :multiple user id,Comma or space interval, valid when userId is empty and surveyId is not empty,result return map(userId,object)

Use Example

```
<@cms.userSurvey id=1>${object.score}</@cms.userSurvey>

<@cms.userSurvey ids='1,2,3'><#list map as k,v>${k}:${v.score}<#sep>,</#list></@cms.userSurvey>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userSurvey?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.score);

});

</script>
```

1. ### **userSurveyList: User Survey respond list query directive**
   Parameter list

- userId: user id
- surveyId: survey id
- orderField: order field ,【score:score,createDate:creat date】, The default createDate is sorted by orderType
- orderType: order type,【asc:positive order ,desc:reverse order】,by default reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsUserSurvey]()

Use Example

```
<@cms.userSurveyList userId=1 pageSize=10><#list page.list as a>${a.score}<#sep>,</#list></@cms.userSurveyList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userSurveyList?userId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **userSurveyQuestion: User Survey answer query directive**
   Parameter list

- userId: user id
- questionId: question id,result return object [CmsUserSurveyQuestion]()
- questionIds: multiple question id,Comma or space interval, This takes effect when questionId is empty and userId is not empty,result return map(questionId,object)
- userIds: multiple: user id,Comma or space interval,takes effect when userId is empty and questionId is not empty ,result return map(userId,object)

Use Example

```
<@cms.userSurveyQuestion id=1>${object.answer}</@cms.userSurveyQuestion>

<@cms.userSurveyQuestion ids='1,2,3'><#list map as k,v>${k}:${v.answer}<#sep>,</#list></@cms.userSurveyQuestion>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userSurveyQuestion?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.answer);

});

</script>
```

1. ### **userSurveyQuestionList: User Survey Question answer list query directive**
   Parameter list

- userId: user id
- questionId : question id
- surveyId : survey id
- orderField: order field ,【score: score,createDate:create date】, by default createDate is sorted in orderType
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsUserSurveyQuestion]()

Use Example

```
<@cms.userSurveyQuestionList userId=1 pageSize=10><#list page.list as a>${a.answer}<#sep>,</#list></@cms.userSurveyQuestionList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userSurveyQuestionList?userId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **userVote: User vote query directive**
   Parameter list

- userId: user id
- voteId: vote id,result return object [CmsUserVote]()
- voteIds: multiple vote id,Comma or space interval, valid when voteId is empty,result return map(voteId,object)

Use Example

```
<@cms.userVote id=1>${object.itemId}</@cms.userVote>

<@cms.userVote ids='1,2,3'><#list map as k,v>${k}:${v.itemId}<#sep>,</#list></@cms.userVote>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userVote?id=1', function(data){

`  `console.log(data.itemId);

});

</script>
```

1. ### **userVoteList: User vote list query directive**
   Parameter list

- userId: user id
- voteId: vote id
- orderType: order type,【asc:positive order ,desc:reverse order】, The creation date is reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsUserVote]()

Use Example

```
<@cms.userVoteList userId=1 pageSize=10><#list page.list as a>${a.ip}<#sep>,</#list></@cms.userVoteList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/userVoteList?userId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **vote: Vote query directive**
   Parameter list

- id: vote id,result return object [CmsVote]()
- ids: multiple vote id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.vote id=1>${object.title}</@cms.vote>

<@cms.vote ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.vote>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/vote?id=1', function(data){

`  `console.log(data.title);

});

</script>
```

1. ### **voteItem: Vote item query directive**
   Parameter list

- id: vote item id,result return object [CmsVoteItem]()
- ids: multiple vote item id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.voteItem id=1>${object.title}</@cms.voteItem>

<@cms.voteItem ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@cms.voteItem>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/voteItem?id=1', function(data){

`  `console.log(data.title);

});

</script>
```

1. ### **voteItemList: Vote item list query directive**
   Parameter list

- voteId: vote id
- orderField: order field ,【votes: number of votes, sort: sort,positive order 】, The default sort is in positive order
- orderType: order type,【asc:positive order ,desc:reverse order】,by default reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsVoteItem]()

Use Example

```
<@cms.voteItemList voteId=1 pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.voteItemList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/voteItemList?voteId=1&pageSize=10', function(data){

console.log(data.totalCount);

});

</script>
```

1. ### **voteList: Vote list query directive**
   Parameter list

- startStartDate: start start date,【2020-01-01 23:59:59】,【2020-01-01】
- endStartDate: end start date,【2020-01-01 23:59:59】,【2020-01-01】
- startEndDate: start end date,【2020-01-01 23:59:59】,【2020-01-01】
- endEndDate: end end date,【2020-01-01 23:59:59】,【2020-01-01】
- advanced: Enable advanced options. The default is false
- disabled Advanced options: Disabled. The default value is false
- title Advanced options: title
- orderField: order field ,【startDate: start date,endDate: end date,votes: turnout,createDate: create date】, The default id is sorted by orderType
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsVote]()

Use Example

```
<@cms.voteList pageSize=10><#list page.list as a>${a.title}<#sep>,</#list></@cms.voteList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/voteList?pageSize=10', function(data){

console.log(data.totalCount);

});

</script>
```

1. ### **word: Search word query directive**
   Parameter list

- id: Search word id,result return object [CmsWord]()
- ids: multiple Search word id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@cms.word id=1>${object.name}</@cms.word>

<@cms.word ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@cms.word>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/word?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **wordList: Search word list query directive**
   Parameter list

- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- advanced: Enable advanced options. The default is false
- hidden Advanced options: disabled,the default is false
- name Advanced options:name
- orderField Advanced options:order,【searchCount: search count,createDate: create date,id:id】searchCount defaults to orderType
- orderType: order type,【asc:positive order ,desc:reverse order】, the create date is in reverse order by default
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [CmsWord]()

Use Example

```
<@cms.wordList userId=1 pageSize=10><#list page.list as a>${a.ip}<#sep>,</#list></@cms.wordList>

<script>

$.getJSON('${site.dynamicPath}api/directive/cms/wordList?userId=1&pageSize=10', function(data){

console.log(data.totalCount);

});

</script>
```

1. ## <a name="_toc127627974"></a>**Namespace: log**
   Log directive
1. ### **logLoginList: Log login List query directive**
   Parameter list

- userId: user id
- startCreateDate :start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate :end create date【2020-01-01 23:59:59】,【2020-01-01】
- channel: login channel
- result: login result,【true,false】
- name: user name
- ip IP
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [LogLogin]()

Use Example

```
<@log.loginList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@log.loginList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/log/loginList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **logOperate: Log operate query directive**
   Parameter list

- id : log id,result return object [LogOperate]()
- ids: multiple log id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@log.operate id=1>${object.content}</@log.operate>

<@log.operate ids='1,2,3'><#list map as k,v>${k}:${v.content}<#sep>,</#list></@log.operate>

<script>

$.getJSON('${site.dynamicPath}api/directive/log/operate?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.content);

});

</script>
```

1. ### **logOperateList: Log operate list query directive**
   Parameter list

- channel: channel
- operate: operate code
- userId: user id
- startCreateDate :start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate :end create date【2020-01-01 23:59:59】,【2020-01-01】
- content: operate content
- name: user name
- ip IP
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [LogOperate]()

Use Example

```
<@log.operateList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@log.operateList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/log/OperateList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **logTask: Log task query directive**
   Parameter list

- id: log id,result return object [LogTask]()
- ids: multiple log id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@log.task id=1>${object.result}</@log.task>

<@log.task ids='1,2,3'><#list map as k,v>${k}:${v.result}<#sep>,</#list></@log.task>

<script>

$.getJSON('${site.dynamicPath}api/directive/log/task?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.result);

});

</script>
```

1. ### **logTaskList: Log task list query directive**
   Parameter list

- taskId: Log task ID
- startCreateDate :start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate :end create date【2020-01-01 23:59:59】,【2020-01-01】
- success: Execution result,【true,false】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [LogTask]()

Use Example

```
<@log.taskList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@log.taskList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/log/TaskList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **logUploadList: Log upload list query directive**
   Parameter list

- fileTypes: file types,【image,video,audio,document,other】
- image: whether image,【true,false】
- userId: user id
- channel: channel:
- originalName: original name:
- filePath: file path
- orderField: order field ,[createDate:create date,fileSize: file size], the ID order is in reverse order by default
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [LogUpload]()

Use Example

```
<@log.uploadList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@log.uploadList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/log/UploadList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **workload: Work load query directive**
   Parameter list

- channel: channel
- operate: operate code
- startCreateDate :start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate :end create date【2020-01-01 23:59:59】,【2020-01-01】
- workloadType: workload type【dept:department,user:user】, default department
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [Workload]()

Use Example

```
<@log.wordload pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@log.wordload>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/log/wordload?pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ## <a name="_toc127627975"></a>**Namespace: oauth**
   OAUTH directive
1. ### **oauthList: Oauth query directive**
   Return Result

- list return: login channel Name list

Use Example

```
<@oauth.list><#list list as a>${a}<#sep>,</#list></@oauth.list>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/oauth/list', function(data){

`    `console.log(data);

`  `});

</script>
```

1. ## <a name="_toc127627976"></a>**Namespace: sys**
   System directive
1. ### **sysAppClient: System App Client query directive**
   Parameter list

- id: Client id,result return object [SysAppClient]()
- ids: multiple Client id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.appClient id=1>${object.clientVersion}</@sys.appClient>

<@sys.appClient ids='1,2,3'><#list map as k,v>${k}:${v.clientVersion}<#sep>,</#list></@sys.appClient>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/appClient?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.clientVersion);

});

</script>
```

1. ### **sysAppClientList: System App Client list query directive**
   Parameter list

- advanced: Enable advanced options. The default is false
- disabled Advanced options:disabled,【true,false】,by default false
- channel: channel
- userId: user id
- startLastLoginDate: start Last Login Date,【2020-01-01 23:59:59】,【2020-01-01】
- endLastLoginDate: end Last Login Date,【2020-01-01 23:59:59】,【2020-01-01】
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderField: order field ,[lastLoginDate: last Login Date,createDate:create date],the create date is in reverse order by default
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysAppClient]()

Use Example

```
<@sys.appClientList pageSize=10><#list page.list as a>${a.uuid}<#sep>,</#list></@sys.appClientList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/appClientList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **sysApp: System App query directive**
   Parameter list

- id: APP id,result return object [SysApp]()
- ids: multiple APP id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.app id=1>${object.channel}</@sys.app>

<@sys.app ids='1,2,3'><#list map as k,v>${k}:${v.channel}<#sep>,</#list></@sys.app>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/app?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.channel);

});

</script>
```

1. ### **sysAppList: System App list query directive**
   Parameter list

- channel : channel
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysApp]()

Use Example

```
<@sys.appList pageSize=10><#list page.list as a>${a.channel}<#sep>,</#list></@sys.appList>
```

1. ### **sysAppTokenList: System App Token list query directive**
   Parameter list

- appId: APP id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysAppToken]()

Use Example

```
<@sys.appTokenList pageSize=10><#list page.list as a>${a.authToken}<#sep>,</#list></@sys.appTokenList>
```

1. ### **sysAuthorized: Role url authorization query directive**
   Parameter list

- roleIds: multiple role id
- url: url, If both roleIds and urls exist, the result returns true or false, indicating whether these roles have permissions on the url
- urls: multiple url, valid when roleIds exists and url is empty, result return map(url, true or false)

Use Example

```
<@sys.authorized roleIds='1,2,3' url='cmsContent/list'>${object}</@sys.authorized>

<@sys.authorized roleIds='1,2,3' urls='cmsContent/list,cmsCategory/list'><#list map as k,v>${k}:${v}<#sep>,</#list></@sys.authorized>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/authorized?roleIds=1,2,3&url=cmsContent/list&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **sysClusterList: System cluster list query directive**
   Parameter list

- startHeartbeatDate: start heart beat Date,【2020-01-01 23:59:59】,【2020-01-01】
- endHeartbeatDate: end heart beat Date,【2020-01-01 23:59:59】,【2020-01-01】
- master: Primary cluster or not,【true,false】,the default is false
- orderField: order field ,[createDate: Last login date,heartbeatDate:create date,id], by default the id is in reverse order
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysCluster]()

Use Example

```
<@sys.clusterList pageSize=10><#list page.list as a>${a.uuid}<#sep>,</#list></@sys.clusterList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/clusterList?pageSize=10', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **sysConfigData: Configuration data query directive**
   Parameter list

- code: configuration code,result return object [SysConfigData]()
- codes: multiple configuration,result return map(id,object)

Use Example

```
<@sys.configData code='site'>${object.register\_url}</@sys.configData>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/configData?code=site&appToken=Interface access authorizationToken', function(data){

` `console.log(data.register\_url);

});

</script>
```

1. ### **sysConfig: Configuration query directive**
   Parameter list

- code :configuration code,result return object [ConfigComponent.ConfigInfo]()

Use Example

```
<@sys.config code='site'>${object.description}</@sys.config>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/config?code=site&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.description);

});

</script>
```

1. ### **sysConfigFieldList: System configuration field list query directive**
   Parameter list

- code: configuration code

Return Result

- list: list type Query result entity list [SysExtendField]()

Use Example

```
<@sys.configFieldList pageSize=10><#list list as a>${a.name}<#sep>,</#list></@sys.configFieldList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/configFieldList?appToken=Interface access authorizationToken', function(data){

`    `console.log(data);

`  `});

</script>
```

1. ### **sysConfigList: System configuration list query directive**
   Return Result

- list: list type Query result entity list [ConfigComponent.ConfigInfo]()

Use Example

```
<@sys.configList><#list list as a>${a.code}<#sep>,</#list></@sys.configList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/configList?appToken=Interface access authorizationToken', function(data){

`    `console.log(data);

`  `});

</script>
```

1. ### **sysDept: System department query directive**
   Parameter list

- id: department id,result return object [SysDept]()
- ids: multiple department id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.dept id=1>${object.name}</@sys.dept>

<@sys.dept ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@sys.dept>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/dept?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **sysDeptItem: System department item authorization query directive**
   Parameter list

- deptId: department id
- ItemId: category id, When both deptId and ItemId exist, the result returns true or false, indicating whether the department has data rights for the content under the category
- ItemIds: multiple category id, valid when deptId exists and ItemId is empty,result return map(: category id,true or false)

Use Example

```
<@sys.deptItem deptId=1 ItemId=1>${object}</@sys.deptItem>

<@sys.deptItem deptId=1 ItemIds=1,2,3><#list map as k,v>${k}:${v}<#sep>,</#list></@sys.deptItem>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/deptItem?deptId=1&ItemId=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data);

`  `});

</script>
```

1. ### **sysDeptItemList: System department data authorization list query directive**
   Parameter list

- deptId: department id
- itemType: item type
- itemId :item id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list com.publiccms.entities.sys.SysDeptCategory

Use Example

```
<@sys.deptCategoryList deptId=1 pageSize=10><#list page.list as a>${a.id.deptId}<#sep>,</#list></@sys.deptCategoryList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/deptCategoryList?deptId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **sysDeptList: Department list query directive**
   Parameter list

- parentId: parent department id
- userId: person in charge id
- name: name
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysDept]()

Use Example

```
<@sys.deptList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@sys.deptList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/deptList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **sysDomain: Domain query directive**
   Parameter list

- id: Domain,result return object [SysDomain]()
- ids: multiple Domain,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.domain id='www.publiccms.com'>${object.name}</@sys.domaing>

<@sys.domain ids='www.publiccms.com,www.sanluan.com'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@sys.domain>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/domain?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **sysDomainList: Domain list query directive**
   Parameter list

- advanced: Enable advanced options. The default is false
- siteId Advanced options: site id
- wild Advanced options: Wildcard domain,【true,false】
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysDomain]()

Use Example

```
<@sys.domainList deptId=1 pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@sys.domainList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/domainList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.totalCount);

`  `});

</script>
```

1. ### **sysExtendFieldList: Extend Field list query directive**
   Parameter list

- extendId: Extend id
- inputType: multiple input type 【text: Input box,number:number,textarea: Multiline text,file: file,image: image,video: video,password: password,editor: Baidu editor,ckeditor:CK editor,tinymce:TinyMCE editor,kindeditor:KIND editor,date: date,datetime:time,color:color,alphaColor: A color with transparency,template: Template path,boolean: whether,user: user,dept:department,content:content,category: category,dictionary:data dictionary,categoryType: categoryType,tagType: tagType,vote:vote,survey: survey,tag:tag】
- searchable: searchable ,【true,false】

Return Result

- list: list type Query result entity list [SysExtendField]()

Use Example

```
<@sys.extendFieldList deptId=1 pageSize=10><#list list as a>${a.name}<#sep>,</#list></@sys.extendFieldList>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/sys/extendFieldList?extendId=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data);

`  `});

</script>
```

1. ### **lock: Lock query directive**
   Parameter list

- itemType: item type
- itemId: item id,result return object [SysLock]()
- itemIds: multiple item id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.lock id=1>${object.count}</@sys.lock>

<@sys.lock ids='1,2,3'><#list map as k,v>${k}:${v.count}<#sep>,</#list></@sys.lock>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/lock?id=1', function(data){

`  `console.log(data.count);

});

</script>
```

1. ### **sysModule: Module query directive**
   Parameter list

- id: Module id,result return object [SysModule]()
- ids: multiple Module id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.module id='page'>${object.url}</@sys.module>

<@sys.module ids='page,develop'><#list map as k,v>${k}:${v.url}<#sep>,</#list></@sys.module>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/module?id=page&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.url);

});

</script>
```

1. ### **sysModuleLang: Module Language query directive**
   Parameter list

- moduleId: Module id,result return object [SysModule]()
- lang: Language【zh:Chinese,en:English,ja:Japnese】

Use Example

```
<@sys.moduleLang moduleId='page' lang='zh'>${object}</@sys.moduleLang>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/moduleLang?moduleId=page&lang=zh', function(data){

` `console.log(data);

});

</script>
```

1. ### **sysModuleList: Module list query directive**
   Parameter list

- advanced: Enable advanced options. The default is false
- menu Advanced options: whether menu,【true,false】
- parentId: parent module id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysModule]()

Use Example

```
<@sys.moduleList parentId='page' pageSize=10><#list page.list as a>${springMacroRequestContext.getMessage('menu.'+a.id)}<#sep>,</#list></@sys.moduleList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/moduleList?parentId=page&pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysRole: Role query directive**
   Parameter list

- id: Role id,result return object [SysRole]()
- ids: multiple Role id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.role id=1>${object.name}</@sys.role>

<@sys.role ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@sys.role>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/role?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **sysRoleList: Role list query directive**
   Parameter list

- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysRole]()

Use Example

```
<@sys.roleList deptId=1 pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@sys.roleList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/roleList?deptId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysRoleModule: Role Module Authorization query directive**
   Parameter list

- roleIds: multiple role id
- moduleId: module id, If both roleIds and Moduleids exist, true or false is returned, indicating whether these roles have data rights for the module
- moduleIds: multiple module id, when roleIds exist and the moduleId is empty, result return map(module id,true or false)Use Example

```
<@sys.roleModule roleIds='1,2,3' modelId='page'>${object}</@sys.roleModule>

<@sys.roleModule deptId=1 pages='/index.html,/search'><#list map as k,v>${k}:${v}<#sep>,</#list></@sys.roleModule>

<script>

$.getJSON('${site.dynamicPath}api/directive/sys/roleModule?roleIds=1,2,3&modelId=page&appToken=Interface access authorizationToken', function(data){

`  `console.log(data);

});

</script>
```

1. ### **sysRoleModuleList: Role Module mapping list query directive**
   Parameter list

- roleId: role id
- moduleId: Module id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysRoleModule]()

Use Example

```
<@sys.roleModuleList roleId=1 pageSize=10><#list page.list as a>${a.id.roleId}<#sep>,</#list></@sys.roleModuleList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/sysDeptCategoryList?roleId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysRoleUserList: Role User list query directive**
   Parameter list

- roleId: Role id
- userId: user id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysRoleUser]()

Use Example

```
<@sys.roleUserList roleId=1 pageSize=10><#list page.list as a>${a.id.roleId}<#sep>,</#list></@sys.roleUserList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/roleUserList?roleId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysSite: Site query directive**
   Parameter list

- id: Site id,result return object [SysSite]()
- ids: multiple Site id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.site id=1>${object.name}</@sys.site>

<@sys.site ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@sys.site>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/site?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **sysSiteList: Site list query directive**
   Parameter list

- advanced: Enable advanced options. The default is false
- disabled Advanced options: disabled,【true,false】
- parentId: parent site id
- name:name
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysSite]()

Use Example

```
<@sys.siteList pageSize=10><#list page.list as a>${a.name}<#sep>,</#list></@sys.siteList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/siteList?pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysTask: Task query directive**
   Parameter list

- id: Task id,result return object [SysTask]()
- ids: multiple Task id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@sys.task id=1>${object.name}</@sys.task>

<@sys.task ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@sys.task>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/task?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **sysTaskList: Task list query directive**
   Parameter list

- status: status【0: Ready,1: executing,2: pause,3: error】
- startUpdateDate: start Update Date ,【2020-01-01 23:59:59】,【2020-01-01】
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysTask]()

Use Example

```
<@sys.taskList deptId=1 pageSize=10><#list page.list as a>${a.id.deptId}<#sep>,</#list></@sys.taskList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/taskList?deptId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysUser: User query directive**
   Parameter list

- id: user id,result return object [SysUser]()
- ids: multiple: user id,Comma or space interval,valid when the id is null,result return map(id,object)
- absoluteURL: Handle cover as an absolute path, the default is true

Use Example

```
<@sys.user id=1>${object.name}</@sys.user>

<@sys.user ids='1,2,3'><#list map as k,v>${k}:${v.name}<#sep>,</#list></@sys.user>

<script>

$.getJSON('//sys.publicsys.com/api/directive/sys/user?id=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.name);

});

</script>
```

1. ### **sysUserList: User list query directive**
   Parameter list

- advanced: Enable advanced options. The default is false
- disabled Advanced options:disabled,【true,false】, the default is false
- deptId: department id
- startRegisteredDate: start Registered Date ,【2020-01-01 23:59:59】,【2020-01-01】
- endRegisteredDate: end Registered Date ,【2020-01-01 23:59:59】,【2020-01-01】
- startLastLoginDate: start Last Login Date ,【2020-01-01 23:59:59】,【2020-01-01】
- endLastLoginDate: end Last Login Date,【2020-01-01 23:59:59】,【2020-01-01】
- superuser: superuser,【true,false】
- emailChecked: email checked ,【true,false】
- name: Nickname, username, email address
- orderField: order field ,【expiryDate:,createDate:,】, The create date is sorted by orderType by default
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [SysUser]()

Use Example

```
<@sys.userList deptId=1 pageSize=10><#list page.list as a>${a.nickname}<#sep>,</#list></@sys.userList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/userList?deptId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **sysUserTokenList: User login authorization list query directive**
   Parameter list

- userId: user id
- channel : channel
- orderField: order field ,【expiryDate:Expiration date,createDate:create date,】, The create date is sorted by orderType by default
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: <a name="_hlt117865596"></a>[PageHandler]()
- page.list: list type Query result entity list [SysUserToken]()

Use Example

```
<@sys.userTokenList userId=1 pageSize=10><#list page.list as a>${a.id.deptId}<#sep>,</#list></@sys.userTokenList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/sys/userTokenList?pageSize=10&authToken=user login Token&authUserId=user id', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ## <a name="_toc127627977"></a>**Namespace: task**
   Task planning directive can only be used in task planning scripts
1. ### **clearLog: Log cleaning directive**
   Parameter list

- clearDate start time of publish date,【2020-01-01 23:59:59】,【2020-01-01】, Default is 3 months before

Return Result

- resultmap: type
- result.loginLog: number of deleted login logs
- result.operateLog: number of deleted Operation logs
- result.taskLog: number of deleted task plan logs

Use Example

```
<@task.clearLog><#list result as k,v>${k}:${v}<#sep>,</#list></@task.clearLog>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/task/clearLog?appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **indexContent: Rebuild content index directive**
   Parameter list

- id: content id , valid when ids are empty
- ids: multiple content id

Use Example

```
<@task.indexContent id=1><</@task.indexContent>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/task/indexContent?id=1&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **publishCategory: Publish Category Static page directive**
   Parameter list

- id: category id
- ids: multiple category id
- pageIndex: At present, page number, the default is 1
- totalPage: max, page number, If null, only the current page is generated

Return Result

- mapmap: Type, key value, content id,Value is the generated result

Use Example

```
<@task.publishCategory id=1><#list map as k,v>${k}:${v}<#sep>,</#list></@task.publishCategory>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/task/publishCategory?id=1&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **publishContent: Publish Category Static page directive**
   Parameter list

- id: content id
- ids: multiple content id, valid when id is empty

Return Result

- mapmap: Type, key value, content id, Value is the generated result

Use Example

```
<@task.publishContent id=1><#list map as k,v>${k}:${v}<#sep>,</#list></@task.publishContent>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/task/publishContent?id=1&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **publishPage: Page static directive**
   Parameter list

- path: page path, Default value "/"

Return Result

- mapmap: Type, key value, page path, Value is the generated result

Use Example

```
<@task.publishPage><#list map as k,v>${k}:${v}<#sep>,</#list></@task.publishPage>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/task/publishPage?path=&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **publishPlace: Page fragment static directive**
   Parameter list

- path: page path, Default value "/"

Return Result

- mapmap: Type, key value, page path, Value is the generated result

Use Example

```
<@task.publishPlace><#list map as k,v>${k}:${v}<#sep>,</#list></@task.publishPlace>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/task/publishPlace?path=&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ## <a name="_toc127627978"></a>**Namespace: tools**
   A tool directive that accomplishes a specific function
1. ### **createCategoryFile: Create Category static file directive**
   Parameter list

- id: category id
- templatePath: template Path
- filePath: static file Path
- pageIndex: at present: page number, the default is 1
- totalPage: max: page number, If null, only the current page is generated

Return Result

- url: static file path

Use Example

```
<@tools.createCategoryFile id=1 templatePath='category.html' filePath='category/'+1+'.html'>${url}</@tools.createCategoryFile>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/createCategoryFile?id=1&templatePath=category.html&filePath=category/1.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **createContentFile: Create Content static file directive**
   Parameter list

- id: content id
- templatePath: template path
- filePath static file path
- pageIndex: at present: page number, the default is 1

Return Result

- urlstatic file path

Use Example

```
<@tools.createContentFile id=1 templatePath='content.html' filePath='content/'+1+'.html'>${url}</@tools.createContentFile>

<script>

$.getJSON('${site.dynamicPath}api/directive/tools/createContentFile?id=1&templatePath=content.html&filePath=content/1.html&appToken=Interface access authorizationToken', function(data){

`  `console.log(data);

});

</script>
```

1. ### **createLock: Create lock directive**
   Parameter list

- itemType: Lock item type
- itemId: Lock item id
- userId: lock user id
- counter: Use a counter, the default is false

Return Result

- object[SysLock]()

Use Example

```
<@tools.createLock itemType='content' itemId='1' userId='1'>${url}</@tools.createLock>

<script>

$.getJSON('${site.dynamicPath}api/directive/tools/createLock?itemType=content&itemId=1&userId=1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data);

});

</script>
```

1. ### **createTemplateFile: Create static file directive**
   Parameter list

- templatePath: template path
- filePath: static file path
- pageIndex: at present: page number,the default is 1
- parameters: parameter map

Return Result

- urlstatic file path

Use Example

```
<@tools.createTemplateFile templatePath='template.html' filePath='page/'+1+'.html' parameters={"parameter1","value1"}>${url}</@tools.createTemplateFile>

<script>

$.getJSON('${site.dynamicPath}api/directive/tools/createTemplateFile?id=1&templatePath=template.html&filePath=page/1.html&parameters\_parameter1=value1&appToken=Interface access authorizationToken', function(data){

`  `console.log(data);

});

</script>
```

1. ### **csrfToken: Anti-cross site request forgery token directive**
   Parameter list

- admin: whether background, the default is false

Return Result

- print token value

Use Example

```
<input type="hidden" name="\_csrf" value="<@tools.csrfToken/>"/>
```

1. ### **disk: Disk space and path directive**
   Return Result

- freeSpace: free space
- totalSpace: total space
- usableSpace: usable space
- rootPath: Absolute path

Use Example

```
<@tools.disk>${freeSpace}</@tools.disk>

<script>

$.getJSON('${site.dynamicPath}api/directive/tools/disk?appToken=Interface access authorizationToken', function(data){

` `console.log(data);

});

</script>
```

1. ### **diyMetadata diy: Metadata query directive**
   Parameter list

- itemType: Metadata type,【region,layout,module】
- itemId: Metadata id

Return Result

- object diy Metadata region[CmsRegion](),layout[CmsLayout](),module[CmsModule]()

Use Example

```
<@tools.diyMetadata itemType='region' itemId='00000000-0000-0000-0000-000000000000'>${object.name}</@tools.diyMetadata>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/diyMetadata?itemType=region&itemId=00000000-0000-0000-0000-000000000000&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.name);

` `});

` `</script>
```

1. ### **diyMetadataList diy: Metadata list query directive**
   Parameter list

- itemType: Metadata type,【region,layout,module】

Return Result

- list diy: Metadata list , region[CmsRegion](),layout[CmsLayout](),module[CmsModule]()

Use Example

```
<@tools.diyMetadataList itemType='region'><#list page.list as a>${a.name}<#sep>,</#list></@tools.diyMetadataList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/diyMetadataList?itemType=region&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.name);

` `});

` `</script>
```

1. ### **regionData: Diy Region Data query directive**
   Parameter list

- id: Region id
- categoryId: category id

Return Result

- object<a name="_hlt117865926"></a>[CmsRegionData]()

Use Example

```
<@tools.diyMetadata id='00000000-0000-0000-0000-000000000000'>${object.id}</@tools.diyMetadata>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/regionData?itemId=00000000-0000-0000-0000-000000000000&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.id);

` `});

` `</script>
```

1. ### **exception: Exception query directive**
   Return Result

- object: Exception string

Use Example

```
<@tools.exception>${object}</@tools.exception>
```

1. ### **executeScript: Script execution directive**
   Parameter list

- command: command 【sync.bat,sync.sh,backupdb.bat,backupdb.sh】
- parameters: Parameter array

Print the execution result

Use Example

```
<@tools.executeScript command='backupdb.bat'/>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/executeScript?command=backupdb.bat&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.id);

` `});

` `</script>
```

1. ### **fileBackupContent: Backup file content query directive**
   Parameter list

- type: file type【file,task,template】,the default is template
- path: file path

Return Result

- object: file content text

Use Example

```
<@tools.fileBackupContent type='file' path='index.html'>${object}</@tools.fileBackupContent>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileBackupContent?type=file&path=index.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **fileBackupList: File Backup list query directive**
   Parameter list

- type: file type, 【file,task,template】,the default is template
- path: file path
- orderField: order type【fileName,fileSize,modifiedDate,createDate】,the default is fileName

Return Result

- list: file list [CmsFileUtils.FileInfo]()

Use Example

```
<@tools.fileBackupList path='/'><#list list as a>${a.fileName}<#sep>,</#list></@tools.fileBackupList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileBackupList?path=/&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **fileContent: File Content query directive**
   Parameter list

- type: file type, 【file,task,template】, the default is template
- path: file path

Return Result

- object: file content text

Use Example

```
<@tools.fileContent path='index.html'>${object}</@tools.fileContent>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileContent?path=index.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **fileExists: File Exist query directive**
   Parameter list

- type: file type, 【file,task,template】,the default is template
- path: file path

Return Result

- result Boolean: Whether the type file exists

Use Example

```
<@tools.fileExists path='/'><#list list as a>${a}<#sep>,</#list></@tools.fileExists>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileExists?path=/&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **fileHistoryContent: File modification history content directive**
   Parameter list

- type: file type, 【file,task,template】 the default is template
- path: file path

Return Result

- object: file content text

Use Example

```
<@tools.fileHistoryContent type='file' path='index.html/2020-01-01\_01-01-000000'>${object}</@tools.fileHistoryContent>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileHistoryContent?type=file&path=index.html/2020-01-01\_01-01-000000&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **fileHistoryList: File modification history list query directive**
   Parameter list

- type: file type, 【file,task,template】,the default is template
- path: file path
- orderField: order type【fileName,fileSize,modifiedDate,createDate】, the default is fileName

Return Result

- list: file list [CmsFileUtils.FileInfo]()

Use Example

```
<@tools.fileHistoryList path='/'><#list list as a>${a.fileName}<#sep>,</#list></@tools.fileHistoryList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileHistoryList?path=/&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **fileList: File list query directive**
   Parameter list

- type: file type, 【file,task,template】, the default is template
- path: file path
- orderField: order type【fileName,fileSize,modifiedDate,createDate】, the default is fileName

Return Result

- list: file list [CmsFileUtils.FileInfo]()

Use Example

```
<@tools.fileList path='/'><#list list as a>${a.fileName}<#sep>,</#list></@tools.fileList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/fileList?path=/&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **includeLayout: Contains diy layout directive**
   Parameter list

- id: Layout id

Print contained result

Use Example

```
<@tools.includeLayout id='00000000-0000-0000-0000-000000000000'>${index},</@tools.includeLayout>
```

1. ### **includePlace: Contains page fragment directive**
   includePlace: Contains page fragment directive

Parameter list

- path: path

Print contained result

Use Example

```
<@tools.includePlace path='00000000-0000-0000-0000-000000000000'/>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/includePlace?path=00000000-0000-0000-0000-000000000000.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **includeRegion: Contains diy Region directive**
   Parameter list

- id: Layout id

Print contained result

Use Example

```
<@tools.includeRegion id='00000000-0000-0000-0000-000000000000' categoryId=1/>
```

1. ### **licenseVerify: Authorization file validation directive**
   Parameter list

- licenseData: Authorization file data

Return Result

- result: validation result,【true: Successful verification,false: Validation failure】

Use Example

```
<@tools.licenseVerify licenseData='content'>${url}</@tools.licenseVerify>

<script>

$.getJSON('${site.dynamicPath}api/directive/tools/licenseVerify?licenseData=content', function(data){

` `console.log(data);

});

</script>
```

1. ### **masterSite: Manage site judgment directive**
   Use Example

```
<@tools.masterSite>this is a master site</@tools.masterSite>
```

1. ### **memory: Memory monitor directive**
   Return Result

- freeMemory: free memory
- totalMemory: total memory
- maxMemory: max memory

Use Example

```
<@tools.memory>${totalMemory}</@tools.memory>

<script>

$.getJSON('${site.dynamicPath}api/directive/tools/memory?appToken=Interface access authorizationToken', function(data){

` `console.log(data);

});

</script>
```

1. ### **metadata: Metadata query directive**
   Parameter list

- path: template path

Return Result

- object: metadata [CmsPageMetadata]()

Use Example

```
<@tools.metadata path='index.html'>${object.alias}</@tools.metadata>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/metadata?path=index.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.alias);

` `});

` `</script>
```

1. ### **placeMetadata: Page fragment metadata query directive**
   Parameter list

- path: template path

Return Result

- object: Metadata [CmsPlaceMetadata]()

Use Example

```
<@tools.placeMetadata path='00000000-0000-0000-0000-000000000000'>${object.alias}</@tools.placeMetadata>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/placeMetadata?path=00000000-0000-0000-0000-000000000000.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.alias);

` `});

` `</script>
```

1. ### **sendEmail: Send mail directive**
   Parameter list

- email: multiple email address
- cc: multiple cc address
- bcc: multiple BCC address
- title: title
- templatePath: content template path
- content: email content , valid when template path is empty
- fileNames: multiple Attachment name
- filePaths: multiple: file path
- parameters: parameters map

Return Result

- result Whether to allow sending,【true,false】

Use Example

```
<@tools.sendEmail email='master@puliccms.com' title='title' content='content'/>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/placeMetadata?email=master@puliccms.com&title=title&content=content&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.alias);

` `});

` `</script>
```

1. ### **systemProperties: Server parameter directive**
   Return Result

- java.version: Java version number
- java.vendor: Java vendor specific string
- java.vendor.url: Java vendor URL
- java.home: Java installation directory
- java.class.version: Java class version number
- java.class.path: Java classpath
- os.name: Operating System Name
- os.arch: Operating System Architecture
- os.version: Operating System Version
- file.separator: File separator (SEPARATOR on Unix)
- path.separator: Path separator (":" on Unix)
- line.separator: Line separator ("\n" on Unix)
- user.name: User account name
- user.home: User home directory
- user.dir: User's current working directory

Use Example

```
<@tools.systemProperties>${.vars['java.version']}</@tools.placeMetadata>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/systemProperties?appToken=Interface access authorizationToken', function(data){

`   `console.log(data['java.version']);

` `});

` `</script>
```

1. ### **templatePlaceList: Template file page fragment list directive**
   Parameter list

- path: file path

Return Result

- list: file path list

Use Example

```
<@tools.templatePlaceList path='index.html'><#list list as a>${a}<#sep>,</#list></@tools.templatePlaceList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/templatePlaceList?path=index.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **templateRegionList: Template file page visual area list directive**
   Parameter list

- path: file path

Return Result

- list: visual area id list

Use Example

```
<@tools.templateRegionList path='index.html'><#list list as a>${a}<#sep>,</#list></@tools.templateRegionList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/templateRegionList?path=index.html&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **templateResult: Template render result directive**
   Parameter list

- parameters: parameters map
- templateContent: template content

print rendering result

Use Example

```
<@tools.templateResult templateContent='${name}' parameters={'name':'value'}/>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/templateResult?path=$%7Bname%7D&parameters\_name=value&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **templateSearchList: Template file search list directive**
   Parameter list

- path: file path
- word: search word

Return Result

- list: file list [CmsFileUtils.FileSearchResult]()

Use Example

```
<@tools.templateSearchList path='/' word='script'><#list list as a>${a.path}<#sep>,</#list></@tools.templateSearchList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/templateSearchList?path=/&word=script&appToken=Interface access authorizationToken', function(data){

`   `console.log(data);

` `});

` `</script>
```

1. ### **thumb: Thumbnail directive**
   Parameter list

- path: file path
- width: width
- height: height

print result: file path

Use Example

```
<@tools.thumb path='images/logo.jpg' width=100 height=100/>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/thumb?path=images/logo.jpg&width=100&height=100&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.deviceType);

` `});

` `</script>
```

1. ### **userAgent: user agent Analysis directive**
   Parameter list

- userAgent: user agent, Get the user agent of the current request when null

Return Result

- object.idid
- object.ip: client ip
- object.browser: browser
- object.browserGroup: browser Group
- object.browserType: browser type
- object.browserVersion: browser version
- object.operatingSystem: operating system
- object.operatingSystemGroup: operating system group
- object.deviceType: device type
- object.userAgentuser agent

Use Example

```
<@tools.userAgent>${a.deviceType}</@tools.userAgent>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/userAgent', function(data){

`   `console.log(data.deviceType);

` `});

` `</script>
```

1. ### **version: version directive**
   Return Result

- cms cms: edition
- revision: Revised edition
- authorizationEdition: authorization edition
- authorizationStartDate: authorization start date
- authorizationEndDate: authorization end date
- authorizationOrganization: authorization organization
- cluster: cluster id
- master: master cluster or not【true: master cluster,false: Common cluster】

Use Example

```
<@tools.version path='/'>${a.fileName}</@tools.version>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/tools/version', function(data){

`   `console.log(data.cms);

` `});

` `</script>
```

1. ## <a name="_toc127627979"></a>**Namespace: trade**
   commercial directive
1. ### **tradeAccount: Account query directive**
   Parameter list

- id: Account id，result return object [TradeAccount]()
- ids: multiple: Account id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.account id=1>${object.amount}</@trade.account>

<@trade.account ids=1,2,3><#list map as k,v>${k}:${v.amount}<#sep>,</#list></@trade.account>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/trade/account?id=1&appToken=Interface access authorizationToken', function(data){

`     `console.log(data.amount);

`   `});

` `</script>
```

1. ### **tradeAccountHistory: Account history query directive**
   Parameter list

- id: Account history id，result return object [TradeAccountHistory]()
- ids: multiple Account history id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.accountHistory id=1>${object.balance}</@trade.accountHistory>

<@trade.accountHistory ids=1,2,3><#list map as k,v>${k}:${v.balance}<#sep>,</#list></@trade.accountHistory>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/accountHistory?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.balance);

`  `});

</script>
```

1. ### **tradeAccountHistoryList: Account history list query directive**
   Parameter list

- accountId: Account id
- userId : oeration user id
- status: status,【0: pre-recharge,1: consumption,2: recharge,3: refund】
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is create datereverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradeAccountHistory]()

Use Example

```
<@trade.accountHistoryList pageSize=10><#list page.list as a>${a.amountChange}<#sep>,</#list></@trade.accountHistoryList>

`  `<script>

`   `$.getJSON('${site.dynamicPath}api/directive/trade/accountHistoryList?authToken=user login Token&authUserId=user id', function(data){

`     `console.log(data.totalCount);

`   `});

` `</script>
```

1. ### **tradeAccountList: Accountlist query directive**
   Parameter list

- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradeAccount]()

Use Example

```
<@trade.accountList pageSize=10><#list page.list as a>${a.amount}<#sep>,</#list></@trade.accountList>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/accountList?pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **tradeOrder: Order query directive**
   Parameter list

- id: Order id，result return object [TradeOrder]()
- ids: multiple Order id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.order id=1>${object.title}</@trade.order>

<@trade.order ids=1,2,3><#list map as k,v>${k}:${v.title}<#sep>,</#list></@trade.order>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/order?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.title);

`  `});

</script>
```

1. ### **tradeOrderHistory: History Order query directive**
   Parameter list

- id : Order Historyid，result return object [TradeOrderHistory]()
- ids: multiple Order History id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.orderHistory id=1>${object.amount}</@trade.orderHistory>

<@trade.orderHistory ids=1,2,3><#list map as k,v>${k}:${v.amount}<#sep>,</#list></@trade.orderHistory>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/orderHistory?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.amount);

`  `});

</script>
```

1. ### **tradeOrderHistoryList: Order History list query directive**
   Parameter list

- orderId : order id
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is create datereverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradeOrderHistory]()

Use Example

```
<@trade.orderHistoryList orderId=1 pageSize=10><#list page.list as a>${a.content}<#sep>,</#list></@trade.orderHistoryList>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/orderHistoryList?orderId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **tradeOrderList: Order list query directive**
   Parameter list

- userId: user id
- paymentId : payment id
- status: status ,【0: Pending,1: invalid order,2: paid,3: refunded,4: closed】
- processed : processed,【true,false】
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default publish date is in reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradeOrder]()

Use Example

```
<@trade.orderList pageSize=10><#list page.list as a>${a.amount}<#sep>,</#list></@trade.orderList>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/orderList?pageSize=10&authToken=user login Token&authUserId=user id', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **tradeOrderProduct: Order Product query directive**
   Parameter list

- id: Order Product id，result return object [TradeOrderProduct]()
- ids: multiple: Order Product id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.orderProduct id=1>${object.quantity}</@trade.orderProduct>

<@trade.orderProduct ids=1,2,3><#list map as k,v>${k}:${v.quantity}<#sep>,</#list></@trade.orderProduct>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/orderProduct?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.quantity);

`  `});

</script>
```

1. ### **tradeOrderProductList: Order Product list query directive**
   Parameter list

- orderId: Order id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradeOrderProduct]()

Use Example

```
<@trade.orderProductList orderId=1 pageSize=10><#list page.list as a>${a.productId}<#sep>,</#list></@trade.orderProductList>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/orderProductList?orderId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **tradePayment: Payment query directive**
   Parameter list

- id: Payment id，result return object [TradePayment]()
- ids: multiple Payment id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.payment id=1>${object.amount}</@trade.payment>

<@trade.payment ids=1,2,3><#list map as k,v>${k}:${v.amount}<#sep>,</#list></@trade.payment>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/payment?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.amount);

`  `});

</script>
```

1. ### **tradePaymentHistory: Payment History query directive**
   Parameter list

- id: Payment History id，result return object [TradePaymentHistory]()
- ids: multiple Payment History id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.paymentHistory id=1>${object.content}</@trade.paymentHistory>

<@trade.paymentHistory ids=1,2,3><#list map as k,v>${k}:${v.content}<#sep>,</#list></@trade.paymentHistory>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/paymentHistory?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.content);

`  `});

</script>
```

1. ### **tradePaymentHistoryList: Account list query directive**
   Parameter list

- paymentId: payment id
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is create datereverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradePaymentHistory]()

Use Example

```
<@trade.paymentHistory paymentId=1 pageSize=10><#list page.list as a>${a.content}<#sep>,</#list></@trade.paymentHistory>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/paymentHistory?paymentId=1&pageSize=10&appToken=Interface access authorizationToken', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **tradePaymentList: paymentI list query directive**
   Parameter list

- userId: user id
- tradeType: paymentI type,【recharge: recharge,product: product】
- serialNumber: serial number
- accountType: account type ,【account: account,alipay: alipay,wechat: wechat】
- accountSerialNumber: account serial number
- status status ,【0: to be paid,1: paid,2: to be refunded,3: refunded,4: closed】
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default publish data is in reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradePayment]()

Use Example

```
<@trade.paymentList pageSize=10><#list page.list as a>${a.amount}<#sep>,</#list></@trade.paymentList>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/paymentList?pageSize=10&authToken=user login Token&authUserId=user id', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ### **tradeRefund: Refund query directive**
   Parameter list

- id: refund id，result return object [TradeRefund]()
- ids: multiple refund id，Comma or space interval，valid when the id is null，result return map(id,object)

Use Example

```
<@trade.refund id=1>${object.amount}</@trade.refund>

<@trade.refund ids=1,2,3><#list map as k,v>${k}:${v.amount}<#sep>,</#list></@trade.refund>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/trade/refund?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.amount);

`  `});

</script>
```

1. ### **tradeRefundList: Refund list query directive**
   Parameter list

- userId: user id
- paymentId: payment id
- refundUserId: Refund operation user id
- status: status ,【0: to be paid,1: paid,2: to be refunded,3: refunded,4: closed】
- startCreateDate start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: order type,【asc:positive order ,desc:reverse order】,the default is create datereverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [TradeRefund]()

Use Example

```
<@trade.refundList pageSize=10><#list page.list as a>${a.amount}<#sep>,</#list></@trade.refundList>

<script>

$.getJSON('${site.dynamicPath}api/directive/trade/refundList?pageSize=10&authToken=user login Token&authUserId=user id', function(data){

` `console.log(data.totalCount);

});

</script>
```

1. ## <a name="_toc127627980"></a>**Namespace: visit**
   Access statistics directive
1. ### **visitDay: Access daily report query directive**
   Parameter list

- visitDate: visit date ,【2020-01-01】
- visitHour: visit hour ,【0-23】, when neither parameter is null, result return object [VisitDay]()

Use Example

```
<@visit.day visitDate='2020-01-01' visitHour=9>${object.pv}</@visit.day>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/visit/day?visitDate=2020-01-01&visitHour=9&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.pv);

`  `});

</script>
```

1. ### **visitDayList: Access daily report list query directive**
   Parameter list

- startVisitDate: start visit date ,【2020-01-01 23:59:59】,【2020-01-01】
- endVisitDate: end visit date,【2020-01-01 23:59:59】,【2020-01-01】
- hourAnalytics: hourly Analytics ,【true,false】,by default false
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [VisitDay]()

Use Example

```
<@visit.dayList hourAnalytics=false><#list page.list as a>${a.pv}<#sep>,</#list></@visit.dayList>

<script>

` `$.getJSON('${site.dynamicPath}api/directive/visit/dayList?hourAnalytics=false&appToken=Interface access authorizationToken', function(data){

`   `console.log(data.totalCount);

` `});

` `</script>
```

1. ### **visitHistory: Visit History record query directive**
   Parameter list

- id: record id,result return object [VisitHistory]()
- ids: multiple record id,Comma or space interval,valid when the id is null,result return map(id,object)

Use Example

```
<@visit.history id=1>${object.title}</@visit.history>

<@visit.history ids='1,2,3'><#list map as k,v>${k}:${v.title}<#sep>,</#list></@visit.history>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/visit/history?id=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.title);

`  `});

</script>
```

1. ### **visitHistoryList: Visit History record list query directive**
   Parameter list

- sessionId: Session id
- url: url
- startCreateDate: start create date,【2020-01-01 23:59:59】,【2020-01-01】
- endCreateDate :end create date【2020-01-01 23:59:59】,【2020-01-01】
- orderType: orderType: order type,【asc:positive order ,desc:reverse order】,the default create dater is in everse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [VisitHistory]()

Use Example

```
<@visit.historyList hourAnalytics=false><#list page.list as a>${a.url}<#sep>,</#list></@visit.historyList>

<script>

$.getJSON('${site.dynamicPath}api/directive/visit/historyList?hourAnalytics=false&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. ### **visitItem: Visit Item report query directive**
   Parameter list

- visitDate: visit date ,【2020-01-01】
- itemType: visit item type,【itemType in page statistics such as category,content,user】
- itemId: Visit Item id, when of the three parameters are null, result return object [VisitItem]()

Use Example

```
<@visit.item visitDate='2020-01-01' visitHour=9>${object.pv}</@visit.item>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/visit/item?visitDate=2020-01-01&itemType=content&itemId=1&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.pv);

`  `});

</script>
```

1. ### **visitItemList: Visit Item list query directive**
   Parameter list

- startVisitDate: start visit date ,【2020-01-01 23:59:59】,【2020-01-01】
- endVisitDate: end visit date ,【2020-01-01 23:59:59】,【2020-01-01】
- itemType: item type ,【itemType in page statistics such as category,content,user】
- itemId L item id
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [VisitItem]()

Use Example

```
<@visit.itemList itemType='content'><#list page.list as a>${a.pv}<#sep>,</#list></@visit.itemList>

<script>

$.getJSON('${site.dynamicPath}api/directive/visit/itemList?itemType=content&appToken=Interface access authorizationToken', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. ### **visitSession: Visit session report query directive**
   Parameter list

- visitDate: visit date ,【2020-01-01】
- sessionId: session id, when neither parameter is empty, result return object [VisitSession]()

Use Example

```
<@visit.session visitDate='2020-01-01' sessionId='xxxx-xxxx-xxxx'>${object.pv}</@visit.session>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/visit/session?visitDate=2020-01-01&sessionId=xxxx-xxxx-xxxx&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.pv);

`  `});

</script>
```

1. ### **visitSessionList: Visit session report list query directive**
   Parameter list

- sessionId: session id
- startVisitDate: start visit date,【2020-01-01 23:59:59】,【2020-01-01】
- endVisitDate: end visit date,【2020-01-01 23:59:59】,【2020-01-01】
- orderType orderType: order type,【asc:positive order ,desc:reverse order】,the default create date is in reverse order
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [VisitSession]()

Use Example

```
<@visit.sessionList><#list page.list as a>${a.pv}<#sep>,</#list></@visit.sessionList>

<script>

$.getJSON('${site.dynamicPath}api/directive/visit/sessionList?appToken=Interface access authorizationToken', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. ### **visitUrl: Visit URL report query directive**
   Parameter list

- visitDate: visit date ,【2020-01-01】
- urlMd5: Access website md5
- urlSha: Access website sha, when none of the three parameters are empty,result return object [VisitUrl]()

Use Example

```
<@visit.url visitDate='2020-01-01' urlMd5='md5' urlSha='sha'>${object.pv}</@visit.url>

` `<script>

`  `$.getJSON('${site.dynamicPath}api/directive/visit/url?visitDate=2020-01-01&urlMd5=MD5&urlSha=sha&appToken=Interface access authorizationToken', function(data){

`    `console.log(data.pv);

`  `});

</script>
```

1. ### **visitUrlList: Visit Url report list query directive**
   Parameter list

- startVisitDate: start visit date,【2020-01-01 23:59:59】,【2020-01-01】
- endVisitDate: end visit date,【2020-01-01 23:59:59】,【2020-01-01】
- pageIndex: page number
- pageSize: Number of articles per page

Return Result

- page: [PageHandler]()
- page.list: list type Query result entity list [VisitUrl]()

Use Example

```
<@visit.urlList><#list page.list as a>${a.pv}<#sep>,</#list></@visit.urlList>

<script>

$.getJSON('${site.dynamicPath}api/directive/visit/urlList?appToken=Interface access authorizationToken', function(data){

`  `console.log(data.totalCount);

});

</script>
```

1. # <a name="_toc127627981"></a>**Template Method**
   Template Method is the FreeMarker lightweight extension that also supports template definitions and java class implementations.
1. ## <a name="_toc127627982"></a>Method list

   1. ### **getCategoryAttribute: Get the category extension data**
      Parameter list

1. : category id

Return Result

- Attribute: Category extension data (field encoding,value)

Use Example

```
<#assign attribute=getCategoryAttribute(1)/<

${attribute.title!}

<script>

$.getJSON('${site.dynamicPath}api/method/getCategoryAttribute?parameters=1', function(data){

console.log(data.title);

});

</script>
```

1. ### **getCategoryAttributes: Get multiple category extension data**

   Parameter list

1. multiple category id

Return Result

- map(id,attribute: Category extension data (field encoding,value))

Use Example

```
<#assign attributeMap=getCategoryAttributes('1,2,3,4')/<

${attributeMap['1'].title!}

<script>

$.getJSON('${site.dynamicPath}api/method/getCategoryAttributes?parameters=1,2,3,4', function(data){

console.log(data);

});

</script>
```

1. ### **getContentAttribute: Get content extension data**

   Parameter list

1. content id

Return Result

- attribute: Content extension data (field encoding,value)

Use Example

```
<#assign attribute=getContentAttribute(1)/<

${(attribute.text?no\_esc)!}

<script>

$.getJSON('${site.dynamicPath}api/method/getContentAttribute?appToken=Interface access authorizationToken&parameters=1', function(data){

console.log(data.text);

});

</script>
```

1. ### **getContentAttributes: Get multiple content extension data**

   Parameter list

1. multiple content id

Return Result

- map(id,attribute: Content extension data (field encoding,value))

Use Example

```
<#assign attributeMap=getContentAttributes('1,2,3,4')/<

${attributeMap['1'].text?no\_esc!}

<script>

$.getJSON('${site.dynamicPath}api/method/getContentAttributes?appToken=Interface access authorizationToken&parameters=1,2,3,4', function(data){

console.log(data);

});

</script>
```

1. ### **getContentPage: Get text paging results**

   Parameter list

1. text
1. page number

Return Result

- page: [PageHandler]()
- text: text

Use Example

```
<#assign textPage=getContentPage(attribute.text,2)/<

${textPage.text?no\_esc!} current page :${textPage.page.pageIndex}

<script>

$.getJSON('${site.dynamicPath}api/method/getContentAttributes?parameters=text content &parameters=2', function(data){

console.log(data.text);

});

</script>
```

1. ### **getPlaceAttribute: Get the recommended data extension data**

   Parameter list

1. Recommended data id

Return Result

- attribute: Recommended data Extended data (field encoding,value)

Use Example

```
<#assign attribute=getContentAttribute(1)/<

${(attribute.description)!}

<script>

$.getJSON('${site.dynamicPath}api/method/getContentAttribute?appToken=Interface access authorizationToken&parameters=1', function(data){

console.log(data.description);

});

</script>
```

1. ### **getPlaceAttributes: Get multiple recommended data extension data**

   Parameter list

1. multiple recommended data id

Return Result

- map(id,attribute: Recommended data Extended data (field encoding,value))

Use Example

```
<#assign attributeMap=getPlaceAttributes('1,2,3,4')/<

${attributeMap['1'].description!}

<script>

$.getJSON('${site.dynamicPath}api/method/getPlaceAttributes?parameters=1,2,3,4', function(data){

console.log(data);

});

</script>
```

1. ### **getDate: Get a specific date**

   Parameter list

1. date type【thisSunday: this Sunday,thisMonday: this Monday,lastMonday: last Monday,lastSunday: last Sunday,nextMonday: next Monday,nextSunday: next Sunday】, Default current time
1. date,【2020-01-01 23:59:59】,【2020-01-01】, If null, the current date is taken

Return Result

- date: date

Use Example

```
${getDate('thisSunday','2020-01-01')}

<script>

$.getJSON('${site.dynamicPath}api/method/getDate?parameters=thisSunday&parameters=2020-01-01', function(data){

console.log(data);

});

</script>
```

1. ### **getFontList :Get the system fonts list**
   Return Result

- font list: front name list

Use Example

```
<#list getFontList() as font>${font}</#list>

<script>

$.getJSON('${site.dynamicPath}api/method/ getFontList?appToken=Interface access authorizationToken ', function(data){

console.log(data);

});

</script>
```

1. ### **getDictEnable: Get whether the dictionary is enabled**
   Return Result

- boolean: whether the dictionary is enabled

Use Example

```
${getDictEnable()}

<script>

$.getJSON('${site.dynamicPath}api/method/getDictEnable', function(data){

console.log(data);

});

</script>
```

1. ### **getDict: Get a dictionary of segmentation**
   Return Result

- string: Custom segmentation dictionary

Use Example

```
${getDict()}

<script>

$.getJSON('${site.dynamicPath}api/method/getDict?appToken=Interface access authorizationToken', function(data){

console.log(data);

});

</script>
```

1. ### **getHash: Get the hash value**

   Parameter list

1. string

Return Result

- string: hash value

Use Example

```
${getHash('aaa')}

<script>

$.getJSON('${site.dynamicPath}api/method/getHash?parameters=aaa', function(data){

console.log(data);

});

</script>
```

1. ### **getHtml: Get the remote page text**

   Parameter list

1. url
1. Parameter: map type or string type, If it is null, the request is made in get mode. If it is not null, the request is made in post mode
1. The request header is a map type

Return Result

- html: page text

Use Example

```
${getHtml('https://www.baidu.com/')}

${getHtml('https://www.baidu.com/',"body")}

${getHtml('https://www.baidu.com/',{"parameters1":"value1","parameters2":"value2"},{"headers1":"value1","headers2":"value2"})}

<script>

$.getJSON('${site.dynamicPath}api/method/getUrl?appToken=Interface access authorizationToken&parameters=https://www.baidu.com/', function(data){

console.log(data);

});

</script>
```

1. ### **getIpv4Number: Get the numeric value of the ip address**

   Parameter list

1. ip

Return Result

- number: number

Use Example

```
${getIpv4Number('127.0.0.1')}

<script>

$.getJSON('${site.dynamicPath}api/method/ getIpv4Number?parameters=127.0.0.1', function(data){

console.log(data);

});

</script>
```

1. ### **getIpv6Number: Get the numeric value of the ip address**

   Parameter list

1. ip

Return Result

- number string: Character format digit

Use Example

```
${getIpv6Number('FF01:0:0:0:0:0:0:1101')}

<script>

$.getJSON('${site.dynamicPath}api/method/ getIpv6Number?parameters=FF01:0:0:0:0:0:0:1101', function(data){

console.log(data);

});

</script>
```

1. ### **getKeywords: Get word segmentation results**

   Parameter list

1. Complete statement

Return Result

- list(string): word segmentation results set

Use Example

```
<#list getKeywords(' This is a paragraph ') as a>${a}<#sep>,</#list><

<script>

$.getJSON('${site.dynamicPath}api/method/getKeywords?parameters= This is a paragraph ', function(data){

console.log(data);

});

</script>
```

1. ### <a name="_hlk117867145"></a>**getLayoutStyle: Layout Style sheet**

   Parameter list

1. Style sheet containing /\* selecter \*/
1. The selector to be replaced

Return Result

- style:: The replaced style sheet

Use Example

```
${getLayoutStyle('/\* selecter \*/','.diy-layout')}

<script>

$.getJSON('${site.dynamicPath}api/method/getLayoutStyle?parameters=/\* selecter \*/&parameters=.diy-layout', function(data){

console.log(data);

});

</script>
```

1. ### **getLicenseData: Get License Data**
   Return Result

- string base64: Encoded authorization data

Use Example

```
${getLicenseData()}

<script>

$.getJSON('${site.dynamicPath}api/method/getLicenseData, function(data){

console.log(data);

});

</script>
```

1. ### **getLicense: Get License**
   Return Result

- license: License data [License]()

Use Example

```
${getLicense().domain}

<script>

$.getJSON('${site.dynamicPath}api/method/getLicense?appToken=Interface access authorizationToken, function(data){

console.log(data);

});

</script>
```

1. ### **getMd5: Get the md5 value**

   Parameter list

1. string

Return Result

- string md5 value

Use Example

```
${getMd5('aaa')}

<script>

$.getJSON('${site.dynamicPath}api/method/getMd5?parameters=aaa', function(data){

console.log(data);

});

</script>
```

1. ### **getPage: Get page url**

   Parameter list

1. url
1. pageIndex: page number figure
1. string: Paging parameter, dynamic url paging parameter name. If this parameter is null, static url paging result is returned

Return Result

- url: url with pagination

Use Example

```
${getPage('https://www.publiccms.com/introduction/index\_3.html',2)}

${getPage('https://search.publiccms.com/?word=cms',2,'pageIndex')}

<script>

$.getJSON('${site.dynamicPath}api/method/getHash?parameters=https://www.publiccms.com/introduction/index\_3.html&parameters=2', function(data){

console.log(data);

});

</script>
```

1. ### **getRandom Get random numbers**

   Parameter list

1. number: Maximum number, can be empty

Return Result

- number: random numbers

Use Example

```
${getRandom()}

${getRandom(100)}

<script>

$.getJSON('${site.dynamicPath}api/method/getRandom?parameters=100', function(data){

console.log(data);

});

</script>
```

1. ### **getSha1: Get sha1**

   Parameter list

1. string

Return Result

- string sha1 value

Use Example

```
${getSha1('aaa')}

<script>

$.getJSON('${site.dynamicPath}api/method/getSha1?parameters=aaa', function(data){

console.log(data);

});

</script>
```

1. ### **getSha256: Get sha256**

   Parameter list

1. string

Return Result

- string sha256 value

Use Example

```
${getSha256('aaa')}

<script>

$.getJSON('${site.dynamicPath}api/method/getSha256?parameters=aaa', function(data){

console.log(data);

});

</script>
```

1. ### **getSha512: Get sha512**

   Parameter list

1. string

Return Result

- string sha512 value

Use Example

```
${getSha512('aaa')}

<script>

$.getJSON('${site.dynamicPath}api/method/getSha512?parameters=aaa', function(data){

console.log(data);

});

</script>
```

1. ### **getSkipWord: Get dictionary ignore Word segmentation**
   Return Result

- string: dictionary ignore Word segmentation

Use Example

```
${getSkipWord()}

<script>

$.getJSON('${site.dynamicPath}api/method/getRandom?appToken=Interface access authorizationToken', function(data){

console.log(data);

});

</script>
```

1. ### **getSleep: Sleep for a while**

   Parameter list

1. number: Sleep time 0-60 seconds

Return Result

- boolean: Sleep or not

Use Example

```
${getSleep(5)}
```

1. ### **getTemplateResult: Get Template parsing result**

   Parameter list

1. Template content

Return Result

- string: parsing result

Use Example

```
${getTemplateResult('${.now}')}

<script>

$.getJSON('${site.dynamicPath}api/method/getDate?appToken=Interface access authorizationToken&parameters=${.now}', function(data){

console.log(data);

});

</script>
```

1. ### **getTextFromHtml: Get the text in html**

   Parameter list

1. html content

Return Result

- string: Text result

Use Example

```
${getTextFromHtml('<a href="http://www.publiccms.com/">publiccms</a>')}

<script>

$.getJSON('${site.dynamicPath}api/method/getTextFromHtml?parameters=<a href="http://www.publiccms.com/">publiccms</a>', function(data){

console.log(data);

});

</script>
```

1. ### **getUrl: Get the absolute url path**

   Parameter list

1. url prefix
1. url, When the second is empty, the first parameter is treated as the url

Return Result

- url: url with absolute path

Use Example

```
${getUrl(site.sitePath,'index.html')} ${getUrl('index.html')}

<script>

$.getJSON('${site.dynamicPath}api/method/getUrl?parameters=index.html', function(data){

console.log(data);

});

</script>
```

1. ### **getUUID: Get UUID**
   Return Result

- string: random uuid

Use Example

```
${getUUID()}

<script>

$.getJSON('${site.dynamicPath}api/method/getUUID', function(data){

console.log(data);

});

</script>
```

1. ### **getXml: Query xml node**

   Parameter list

1. string xml text

Return Result

- xml: xml model

Use Example

```
${getXml('<xml><data>value</data></xml>').xml.data}
```

1. # <a name="_toc127369304"></a><a name="_toc127627983"></a>**Technical support**
   1. ## <a name="_toc127369305"></a><a name="_toc127627984"></a>**Free technical support**
      PublicCMS official website: [https://www.publiccms.com/]()

QQ communication group: [Group one 191381542]() , [Group two 481589563]() , [Group three 638756883]() , [Group four 930992232]()

Freemarker files: [http://www.kerneler.com/freemarker2.3.23/]()

Online debugging FreeMarker: [https://www.sanluan.com/freemarker_test.html]()

1. ## <a name="_toc127369306"></a><a name="_toc127627985"></a>**Commercial technical support**
   You can get commercial technical support after buying the software usage authorization, and you can also buy the commercial technical support service alone.
