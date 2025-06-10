---
order: 2
---

# How to install new dependencies

## How to use native plugins from the "Plugin Market" in the uniapp project

Plugin Market: [http://ext.dcloud.net.cn/?cat1=5&cat2=51](http://ext.dcloud.net.cn/?cat1=5&cat2=51)

#### 1\. Step 1: First, create a new uniapp project in HBuilder x. If a uniapp project has already been built, skip this step.

![](https://lfs.k.topthink.com/lfs/ca7c3a9b0d518c552585d43a0d6ae91fd8f260efd9c55def62176cfdb9d594b5.dat)  
![](https://lfs.k.topthink.com/lfs/98448016acf372a1b38ceecdbd3f06c69a69afeed751ffb92f03128d27970a89.dat)

#### 2\. Step 2: Select the native plug-in you need in the "Plug-in Market" --> Choose to use HbuildX to import the plug-in --> A uniapp application selection box pops up, check the uniapp project in which you want to use the plug-in.

![](https://lfs.k.topthink.com/lfs/c9909f4f724d53e592b8f2891af86277364730adc740f046465f78ccc37d0943.dat)  
![](https://lfs.k.topthink.com/lfs/d7a819282865bf293f00b3db528af53319f2995c8ae2c7a9c5c2f3fec0fab017.dat)

#### 3\. Step 3: After selecting the project, click Confirm and it will automatically download to the specified folder

![](https://lfs.k.topthink.com/lfs/dd4f096e370ac26ea4cafb7aba6d2843f6372d280f78fe9a2bcfb62969762796.dat)

#### 4\. Step 4: Just quote it in the page where you need to use it

# uni-app - Install third-party packages using npm

Official documentation: [https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)

If your project is created by HBuilder, you need to follow the steps below to install the package (projects created by cli can be installed directly by npm).

#### Initialize the project

If the project has not used npm to manage dependencies (there is no package.json file in the project root directory), first execute the command in the project root directory to initialize the npm project, type the following command:

```
npm init -y
```

copy

There will be an additional package.json file in the root directory.

#### Finish

```
安装完成后，根目录会多出一个 node_modules 文件夹。
```

copy

At this point, you can install the package using npm as normal.
