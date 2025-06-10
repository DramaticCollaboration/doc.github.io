---
order: 12
---

# Micro frontend (qiankun) integration

vue3-admin-jeecg has integrated qiankun by default. For detailed instructions, please refer to [the qiankun official website](https://qiankun.umijs.org/zh/) . The integration steps are as follows

## 1\. Install [Qiankun](https://qiankun.umijs.org/zh)

Create a qiankun-jeecg folder in the outer layer of the front-end project and copy vue3-admin-jeecg to this folder as shown below  
![](https://lfs.k.topthink.com/lfs/a42b7782b079d05349a8a7f39a7c19ca9cf9c4fda5c5c274250a60dd9f0fa777.dat)

Enter the qiankun-vue3-jeecg/vue3-admin-jeecg directory and execute the following command

```
pnpm add qiankun
```

copy

## 2\. Register the micro application in the main application

- **Release the commented code in the src/qiankun/apps.ts file**

```
/**
 *微应用apps
 * @name: 微应用名称 - 具有唯一性
 * @entry: 微应用入口.必选 - 通过该地址加载微应用，
 * @container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
 * @activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
 */
//子应用列表
const _apps = [];
for (const key in process.env) {
    if (key.includes('VUE_APP_SUB_')) {
        const name = key.split('VUE_APP_SUB_')[1];
        const obj = {
            name,
            entry: process.env[key],
            container: '#content',
            activeRule: name,
        };
        _apps.push(obj)
    }
}
export const apps = _apps;
```

copy

- **Release the commented code in the src/qiankun/state.ts file**

```
/**
 *公共数据
 */
import {initGlobalState} from 'qiankun';
import {store} from '/@/store';
import {router} from '/@/router';
import { getToken } from '/@/utils/auth';
//定义传入子应用的数据
export function getProps() {
    return {
        data: {
            publicPath:'/',
            token: getToken(),
            store,
            router
        }
    }
}

/**
 * 定义全局状态，并返回通信方法,在主应用使用，微应用通过 props 获取通信方法。
 * @param state 主应用穿的公共数据
 */
export function initGlState(info = {userName: 'admin'}) {
    // 初始化state
    const actions = initGlobalState(info);
    // 设置新的值
    actions.setGlobalState(info);
    // 注册 观察者 函数 - 响应 globalState 变化，在 globalState 发生改变时触发该 观察者 函数。
    actions.onGlobalStateChange((newState, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.info("newState", newState)
        console.info("prev", prev)
        for (const key in newState) {
            console.info("onGlobalStateChange", key)
        }
    });
}
```

copy

- **Release the commented code in the src/qiankun/index.ts file**

```
/**
 * qiankun配置
 */
import {registerMicroApps, setDefaultMountApp, start, runAfterFirstMounted, addGlobalUncaughtErrorHandler} from 'qiankun';
import {apps} from './apps';
import {getProps, initGlState} from './state';
/**
 * 重构apps
 */
function filterApps() {
    apps.forEach((item) => {
        //主应用需要传递给微应用的数据。
        item.props = getProps();
        //微应用触发的路由规则
        item.activeRule = genActiveRule('/' + item.activeRule);
    });
    return apps;
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
}

/**
 * 微应用注册
 */
function registerApps() {
    const _apps = filterApps();
    registerMicroApps(_apps,
        {
            beforeLoad: [
                loadApp => {
                    console.log('before load', loadApp);
                }
            ],
            beforeMount: [
                mountApp => {
                    console.log('before mount', mountApp);
                }
            ],
            afterMount: [
                mountApp => {
                    console.log('before mount', mountApp);
                }
            ],
            afterUnmount: [
                unloadApp => {
                    console.log('after unload', unloadApp);
                }
            ]
        });
    // 设置默认子应用,与 genActiveRule中的参数保持一致
    // setDefaultMountApp();
    // 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
    runAfterFirstMounted(() => console.log('开启监控'));
    // 添加全局的未捕获异常处理器。
    addGlobalUncaughtErrorHandler(event => console.log(event));
    // 定义全局状态
    initGlState();
    //启动qiankun
    start({});
}
export default registerApps;
```

copy

- **Release the code commented onMounted in the src/layouts/default/content/index.vue file** ( _introduce the qiankun registration file_ )

```
<div id="content" class="app-view-box" v-if="openQianKun=='true'"></div>
```

copy

```
onMounted(() => {
   //注册openQianKun
    if (openQianKun=='true') {
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            registerApps();
        }
    }
});
```

copy

- **Set the global control switch**  
  . In the .env file, set the qiankun global control switch to true

```
VITE_GLOB_APP_OPEN_QIANKUN=true
```

copy

- **Set the sub-application entry address. Set the sub-application entry address of** **the development environment**  
  in the .env.development file . (The routing address should be consistent with the end of VITE_APP_SUB\_, such as qiankun-app below)

```
#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,qiankun-app为子应用的项目名称,也是子应用的路由父路径
VITE_APP_SUB_qiankun-app = '//localhost:8001/qiankun-app'。

```

copy

The .env.production file sets the entry address of **the production environment** application. (The routing address should be consistent with the end of VITE_APP_SUB\_, such as qiankun-app below)

```
#微前端qiankun应用,命名必须以VITE_APP_SUB_开头,qiankun-app为子应用的项目名称,也是子应用的路由父路径
VITE_APP_SUB_qiankun-app = '线上地址/qiankun-app'
```

copy

- **src/main.ts add registerApps()**  
  ![](https://lfs.k.topthink.com/lfs/411480376f634e11bc18881850447ef4a9ba708d47768a624ca1ebaf16ef96e2.dat)

```
+ import registerApps from '/@/qiankun/index';

async function bootstrap() {
+  registerApps();
}
```

copy

- **Modify the package output location**  
  Modify the outputDir content definition in vue3-admin-jeecg/build/constant.ts, and output the packaged content to the main directory under the qiankun-vue3-jeecg folder

```
export const OUTPUT_DIR = '../dist/main';
```

copy

- **Add the global startup package file (package.json)** storage location as shown below

The file contents are as follows

```
{
  "name": "qiankun-jeecg",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "install": "npm-run-all install:* ",
    "install:main": "cd ant-design-jeecg-vue && npm install",
    "install:sub01": "cd jeecg-app-1 && npm install ",
    "start": "npm-run-all start:* ",
    "start:main": "cd ant-design-jeecg-vue && start cmd /k npm run serve",
    "start:sub01": "cd jeecg-app-1 && start cmd /k npm run serve",
    "build": "npm-run-all build:* ",
    "build:main": "cd ant-design-jeecg-vue && npm run build",
    "build:sub01": "cd jeecg-app-1 && npm run build"
  },
  "devDependencies": {
    "npm-run-all": "^4.1.5"
  }
}

```

copy

## 3 Sub-application transformation

- Create a new public-path.js file in the sub-application src directory with the following content

```
//用于修改运行时的 publicPath
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```

copy

- Modify the main.js file

```
function render(props = {}) {
    const {container} = props;
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

/**
 * 非qiankun独立启动
 */
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props) {
  common.setCommonData(props)
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  common.initGlState(props)
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
    common.setCommonData(props)
    common.initGlState(props)
}

```

copy

- Packaging configuration modification ( `vue.config.js`)

```
const { name } = require('./package');
module.exports = {
  devServer: {
    headers: {
      // 主应用获取子应用时跨域响应头
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
```

copy

- The complete configuration of sub-application vue.config.js is as follows

```
const path = require("path");
const packageName = require("./package.json").name;
const node_env = process.env.NODE_ENV === "production";
// const baseUrl = process.env.VUE_APP_BASE_URL;
const baseUrl = "/";
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  //打包输入目录
  outputDir: `../dist/${packageName}`,
  publicPath: node_env ? baseUrl : "/",
  assetsDir: "static",
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
    host:'localhost',
    port: 8092,
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
};
```

copy

## Effect:

![](https://lfs.k.topthink.com/lfs/99e8a7fc666bf92b690c5ed9cd5bbf8272ec9952ee2df72ab50a5599fae3ec91.dat)

#### Notice

- jeecgBoot-vue3 can currently only be used as the main application, not as a sub-application.
