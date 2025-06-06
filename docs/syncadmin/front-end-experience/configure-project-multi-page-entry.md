---
order: 15
---

# Configure project multi-page entry

#### 1\. Create a new home.html in the project root directory

![](https://lfs.k.topthink.com/lfs/e6b51f745d26d9957dab84678eae92ad7ae9c92b07086954516cb6b14d676294.dat)

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title><%= title %></title>
	</head>
	<body>
		<div id="app">
		</div>
	</body>
</html>

```

copy

#### 2\. Create a new multiPage/home directory and App.vue and main.ts files in the src directory

![](https://lfs.k.topthink.com/lfs/5387d0bd3eb67a03f6adfb1e24a48e50aa305663eb6118877ca9efa98b24b85f.dat)

```
<template>
  <div>home 页面</div>
</template>
<script setup lang="ts"></script>
<style scoped>
  div {
    background-color: red;
    color: #fff;
  }
</style>
```

copy

```
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
app.mount('#app');

```

copy

#### 3\. Replace htmlPlugin in build/vite/plugin/html.ts

```
const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    pages: [
      {
        entry: `src/main.ts`,
        template: `index.html`,
        filename: 'index.html',
        injectOptions: {
          // 修改模板html的标题
          data: {
            title: VITE_GLOB_APP_TITLE,
          },
          // 将app.config.js文件注入到模板html中
          tags: isBuild
            ? [
                {
                  tag: 'script',
                  attrs: {
                    src: getAppConfigSrc(),
                  },
                },
              ]
            : [],
        },
      },
      {
        entry: `src/multiPage/home/main.ts`,
        template: `home.html`,
        filename: 'home.html',
        injectOptions: {
          // 向ejs模板中注入数据
          data: {
            title: 'home',
          },
        },
      },
    ],
  });
```

copy

![](https://lfs.k.topthink.com/lfs/b51a9eca23d0fe4d30add2aa181dfd71df34e14889b0953f6d35d0ab66f2307c.dat)

#### Effect:

![](https://lfs.k.topthink.com/lfs/cee8c3e14b1af5d1af0016fd0c71b6103dbc9ce5c8e9d5c6c3560279ff4f6252.dat)
