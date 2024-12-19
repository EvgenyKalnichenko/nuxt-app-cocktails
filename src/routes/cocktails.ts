import type { NuxtPage } from '@nuxt/schema'

export const cocktails: NuxtPage[] = [
  {
    name: 'home',
    path: '/',
    file: '~/pages/cocktail/index',
    meta: {
      id: 'margarita'
    }
  },
  {
    name: 'catalog',
    path: '/cocktail/:id?/',
    file: '~/pages/cocktail/index',
  }
]
