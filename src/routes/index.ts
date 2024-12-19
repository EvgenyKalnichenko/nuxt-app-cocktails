import type { NuxtPage } from '@nuxt/schema'
import { cocktails } from './cocktails'

export const routes: NuxtPage[] = [
  ...cocktails
]
