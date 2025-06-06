---
order: 2
---

# common problem

### 1\. Start error through npm install

Error Conditions  
![](https://lfs.k.topthink.com/lfs/fc5a98ada40e6d89948d6c8f931267075a4007c196c24b159e8df00f6f01eaf1.dat)  
Solution: Enter the prompted path \*\*\\node_modules\\vite-plugin-mock\\node_modules\\esbuild  
and execute the command: `node install.js`  
restart it.

### 2\. Start error through npm install

![](https://lfs.k.topthink.com/lfs/9d12e709e0ce79312575c55b26b632bf2a56b3205ddf360dd065ea0631fadba7.dat)  
You can use this command:

```
npm install --ignore-scripts
```

copy

### 3\. The front-end refresh fails to enter the login page

Error `props.ts:15 Uncaught (in promise) SyntaxError: Unexpected token '='`  
screenshot:![](https://lfs.k.topthink.com/lfs/5db1d2ebfbb40f08f562988f30a3b59843c0f3668506b276e55a411a33cbf4e2.dat)

Reason: The Google Chrome version is too low. Upgrade the browser.  
For example, the version here is too low.  
![](https://lfs.k.topthink.com/lfs/c59af7d08750c4b9fb2dbfbb9f38f385fce487fba8cfb5108271ff67bcbd9fb9.dat)

### 4\. How to disable all forms

Just add this attribute  
![Enter image description](https://foruda.gitee.com/images/1666167458682518459/ce00553f_57093.png "Screenshots")

Effect  
![Enter image description](https://foruda.gitee.com/images/1666167478035678331/06ce9998_57093.png "Screenshots")

### 5\. How to customize the sorting of table lists

```
  defSort: {
        column: 'id',
        order: 'desc',
      },
```

copy

Reference example:  
![](https://lfs.k.topthink.com/lfs/504ac3c2d5be60e034173c51b7f56c613e810d6169fbdd79b9be3f771a40476e.dat)

### 6\. How to delete unnecessary demos and make a streamlined version

[http://help.jeecg.com/2dev/mini.html](http://help.jeecg.com/2dev/mini.html)

### 7\. When writing JS in idea, it becomes popular and prompts statement expected

[https://blog.csdn.net/mlsama/article/details/80633009](https://blog.csdn.net/mlsama/article/details/80633009)

### 8\. Drawer's setDrawerProps does not work (the value will be restored)

![Screenshot-2.png](https://tcs.teambition.net/thumbnail/312f1c7107e7c432857cb72b3de6895f99f3/w/1532/h/835)

### 9.pnpm installation dependency error

mistake: `node\_modules\\vite\\node\_modules\\esbuild\\esbuild.exe ENOENT`

Solution: [https://blog.csdn.net/weixin_41760500/article/details/119885574](https://blog.csdn.net/weixin_41760500/article/details/119885574)  
Command:`node ./node_modules/esbuild/install.js`

### 10\. After installing pnpm, the access prompt shows that dependencies are missing

![](https://lfs.k.topthink.com/lfs/854150c2ca42a048da7f953be0b9344e955f9f35e904b9c673cd8b656c44e5c6.dat)  
Solution: [https://stackoverflow.com/questions/70597494/pnpm-does-not-resolve-dependencies](https://stackoverflow.com/questions/70597494/pnpm-does-not-resolve-dependencies)

### 11\. Error in pnpm install

mistake:`ERR\_PNPM\_PEER\_DEP\_ISSUES Unmet peer dependencies`

[http://ms521.cn/index.php/Home/Index/article/aid/271](http://ms521.cn/index.php/Home/Index/article/aid/271)

### 12.vue3 is not fully displayed in dark mode

> Error example:

![](https://lfs.k.topthink.com/lfs/12a22a68c0beb4a3af759525b1c75f235cb3bb328ede21c7cb11888bf7702f32.dat)

> solution:

The font color and background color in the style are `@变量名称`replaced by

```
color: @text-color;
background-color: @component-background;
```

copy

![](https://lfs.k.topthink.com/lfs/757ba3b7a561cb9ebec4a5900edb6d1e8aef4de3ed8dc830a5f45307c9665702.dat)

> Common style variable names can be `bulid->vite->plugin->themes.ts`found in the directory, `darkModifyVars`which are used to override the styles in antd

![](https://lfs.k.topthink.com/lfs/6243de428df627854e0bee6ef73c6a9f1851c9e420be6df2d1048f31cd44a985.dat)

> For more style variable names, please refer to the catalog`node_modules/es/style/themes/default.less`

![](https://lfs.k.topthink.com/lfs/84b3470de2d99eb11d2cff0748f999686516b7ba4cc2b890fb9cf9224134f353.dat)  
The effect after the transformation is completed  
![](https://lfs.k.topthink.com/lfs/b9286acbaa734801778f6668931b7f2875e3fc348c22ae0ef61d92a4c7a13043.dat)

### 13\. Abnormal interface layout of the "Delete Button" in the operation column

> Related issues

[https://github.com/jeecgboot/jeecgboot-vue3/issues/458](https://github.com/jeecgboot/jeecgboot-vue3/issues/458)

> Screenshot of the problem:

![](https://lfs.k.topthink.com/lfs/7499ab6eb330560546fedb9e7e07d93ce7e97abe13b510aa0113b009c60147e3.dat)

> Solution: Find `popConfirm`the fill attribute`placement: 'left'`

```
placement: 'left',
```

copy

![](https://lfs.k.topthink.com/lfs/05b7cf6fa31cf3e081f33f52d3bdd41d9e0857727e57dab5f48f80d4865d55d8.dat)

> Effect screenshots

![](https://lfs.k.topthink.com/lfs/70c5118b9f6986c1bcd930a388cd3706f5c8ea0b10382a01790572cbac2286eb.dat)

### 14\. When downloading dependencies in centos7 using pnpm i, mozjpeg dependencies cannot be downloaded

[https://github.com/jeecgboot/jeecgboot-vue3/issues/433#issuecomment-1510470534](https://github.com/jeecgboot/jeecgboot-vue3/issues/433#issuecomment-1510470534)

### 15\. Date blocking issue

> Problem screenshot:  
> Pull down to display the component, and the page is misaligned and blocked when scrolling  
> ![](https://lfs.k.topthink.com/lfs/77439b85b4a1988e04735417707ba9fa4125072130fb0c29a662ce74ab76c7d2.dat)

> Solution: Mount the component on the parent node

```
getPopupContainer: (node) => node.parentNode,
```

copy

> Effect screenshots  
> ![](https://lfs.k.topthink.com/lfs/c9d388cf1897ce0d36efc49f85a733d5b3009f303ab1e82524a1295f57d55ba4.dat)

### 16.NextTick function

In Vue 3, `nextTick`methods are used to execute callback functions after the DOM is updated. Its function is to perform some operations after the next DOM update cycle ends to ensure that you can get the latest results when operating the updated DOM elements.  
`nextTick`Methods can be used in the following situations:

1.  Manipulate DOM elements immediately after updating data.
2.  Execute some logic or trigger some side effects after updating the component.
3.  Get the updated DOM element's size or position after updating.

There are two ways to use `nextTick`the method:  
1\. Use the callback function:

```
nextTick(()=>
//在DOM更新后执行的操作
}):
```

copy

2\. Using Promise:

```
nextTick().then(()=>
//在DOM更新后执行的操作
})
```

copy

No matter which method is used, the passed callback function or Promisel callback will be called after the next DOM update cycle. This ensures that Vue has completed the corresponding DOM update after the data changes.

It should be noted that `nextTick`the method is executed asynchronously, so there is no guarantee that the callback function will be executed immediately. If you need to wait for nextTick to complete, you can use the await keyword or the .then() method to wait for the Promise to complete.

### 17\. Multiple tables on one page, the display of columns will affect each other

> Related issues

[https://github.com/jeecgboot/jeecgboot-vue3/issues/1064](https://github.com/jeecgboot/jeecgboot-vue3/issues/1064)

> Screenshot of the problem

> Solution: `tableProps`Set different settings under different circumstances `checkKey`to solve the problem

![](https://lfs.k.topthink.com/lfs/7f7f7de6f54090df4230361aeeac7936454ce7806ab78bb44beb99625ee7c247.dat)

```
tableSetting: { cacheKey: 'depart_user_departInfo' },
```

copy
