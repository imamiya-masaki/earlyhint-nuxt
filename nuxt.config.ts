import type { NuxtPage } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    writeEarlyHints: true
  },
  app: {
    head: {
      script: [
        {
          src: 'https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js',
          async: true
        },
      ]
    }
  },
  hooks: {
    'pages:extend' (pages) {
      function setMiddleware (pages: NuxtPage[]) {
        for (const page of pages) {
          if (/* some condition */ true) {
            page.meta ||= {}
            // Note that this will override any middleware set in `definePageMeta` in the page
            page.meta.middleware = ['routeoption']
          }
          if (page.children) {
            setMiddleware(page.children)
          }
        }
      }
      setMiddleware(pages)
    }
  }
})
