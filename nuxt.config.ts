// https://nuxt.com/docs/api/configuration/nuxt-config
import { routes } from './src/routes/index'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  srcDir: 'src/',

  modules: ['@nuxt/test-utils/module'],

  runtimeConfig: {
    public: {
      NUXT_API_BASE: process.env.NUXT_API_BASE,
    },
  },

  hooks: {
    'pages:extend': async function (pages) {
      pages.splice(0, pages.length, ...routes)
    },
  },

  // Глобальные стили
  css: ['@/app/assets/style/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/app/assets/style/mixins.scss" as *;
          `,
        },
      },
    },
    resolve: {
      dedupe: ['vue'],
    },
  },

  components: [
    { path: '~/shared/components/', pathPrefix: false },
  ],
})
