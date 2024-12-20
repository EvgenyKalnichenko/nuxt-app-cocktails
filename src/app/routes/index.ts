import type { NuxtPage } from '@nuxt/schema'

export const routes: NuxtPage[] = [
  {
    name: 'home',
    path: '/',
    redirect: '/cocktail/margarita/'
  },
  {
    name: 'cocktail',
    path: '/cocktail/:id?/',
    file: '~/pages/cocktail/index',
  }
]
