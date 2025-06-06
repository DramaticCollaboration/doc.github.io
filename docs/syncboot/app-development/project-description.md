---
order: 2
---

# Project Description

> SyncBoot - APP mobile solution, using uniapp framework, one code for multiple terminals, supporting APP, mini-programs, H5 at the same time! It has achieved perfect docking with [SyncBoot low-code platform](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fjeecgboot%2Fjeecg-boot) ! Currently, basic functions such as login, user information, address book, announcement, mobile homepage, nine-square grid, etc. have been realized. Please expand more functions by yourself.  
> For detailed introduction, see: [http://jeecg.com/appIndex](http://jeecg.com/appIndex)

## Effect Preview

## Development Specifications

uni-app uses the syntax of Vue + the tags and APIs of mini-programs. In order to achieve multi-terminal compatibility, uni-app has agreed on the following development specifications by comprehensively considering factors such as compilation speed and running performance:

- Page File Wizard [Vue Single File Component (SFC) Specification](https://vue-loader.vuejs.org/zh/spec.html)
- The component label is close to the mini program specification, see uni-app component specification for details
- The interconnection capability (JS API) is close to the WeChat applet specification, but you need to replace wx with uni, see the uni-app interface specification for details
- Data binding and event handling are the same as Vue.js specifications, and the life cycle of App and page is supplemented
- To be compatible with multiple terminals, it is recommended to use flex layout for development

## Directory Structure

![](https://lfs.k.topthink.com/lfs/bf128a5b2ec84420526780440d755b07bf96e53d5a228e366a948cbc2fb0b024.dat)

### 1\. A uni-app project contains the following directories and files by default

> ┌─components uni-app component directory│  
> └─comp-a.vue Reusable a component  
> ├─hybrid Directory for storing local web pages, [see for details](https://uniapp.dcloud.io/component/web-view)  
> ├─platforms Directory for storing platform-specific pages, [see for details](https://uniapp.dcloud.io/platform?id=%E6%95%B4%E4%BD%93%E7%9B%AE%E5%BD%95%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)  
> ├─pages Directory for storing business page files  
> │├─index  
> ││ └─index.vue index page  
> │├─list  
> ││ └─list.vue list page  
> ├─static Directory for storing static resources (such as pictures, videos, etc.) referenced by the application. \*\*Note:\*\* Static resources can only be stored here  
> ├─wxcomponents Directory for storing mini-program components, [see](https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)  
> ├─main.js Vue initialization entry file  
> ├─App.vue Application configuration, used to configure the global style of the App and monitor [the application life cycle](https://uniapp.dcloud.io/frame?id=%E5%BA%94%E7%94%A8%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)  
> ├─manifest.json Configure the application name, appid, logo, version and other packaging information, [see](https://uniapp.dcloud.io/collocation/manifest)  
> └─pages.json Configure page routing, navigation bar, tabs and other page information, [see](https://uniapp.dcloud.io/collocation/pages)

### 2.jeecg-boot-uniapp project, including other directories that are not uni-app projects by default

```
┌─_docs 项目的一些文档日志存放目录
├─api    请求服务端的接口文件存放目录
├─common   通用的文件
│├─luch-request 存放的是大神封装的request请求插件目录
│├─router  存放路由配置的目录
│├─service  存放请求拦截和开发环境配置
│├─util 存放的一些工具类
├─plugin  存放项目插件的目录
└─store 状态管理目录
```

copy
