/**
 * 客户端增强配置文件
 * 用于注册组件、添加路由钩子等客户端相关功能
 */
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 应用增强

    // 路由钩子
    router.beforeEach(to => {
      // 路由跳转前执行
      console.log('页面切换:', to.path)
    })

    router.afterEach(to => {
      // 路由跳转后执行
    })
  },

  setup() {
    // 在Vue应用设置后执行
  },

  rootComponents: [
    // 根组件，将被挂载到应用程序之外
  ],
})
