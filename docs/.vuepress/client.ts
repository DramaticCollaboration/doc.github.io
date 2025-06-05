/**
 * Client-side enhancement profiles
 * It is used to register components, add routing hooks, and other client-related functions
 */
import { defineClientConfig } from 'vuepress/client'

// Import global styles
import './styles/index.scss'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // Apply enhancements

    // Routing hooks
    router.beforeEach(to => {
      // Execute the route before the redirect
      console.log('Page switching:', to.path)
    })

    router.afterEach(to => {
      // The route is executed after the route is redirected
    })
  },

  setup() {
    // Execute after the Vue app is set up
  },

  rootComponents: [
    // The root component, which will be mounted outside of the application
  ],
})
