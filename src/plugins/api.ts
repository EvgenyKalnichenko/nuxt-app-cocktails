import type { FetchOptions } from 'ofetch'
import { defineNuxtPlugin } from '#app'
import { $fetch } from 'ofetch'
import CocktailModule from '~/entities/cocktail/model/repository/cocktail'

export interface IApiInstance {
  cocktail: CocktailModule
}

export default defineNuxtPlugin({
    name: 'api-plugin',
    parallel: true,
    async setup() {
        const fetchOptions: FetchOptions = {
            baseURL: 'https://www.thecocktaildb.com/',
        }

        const apiFetcher = $fetch.create(fetchOptions)

        const modules: IApiInstance = {
            cocktail: new CocktailModule(apiFetcher),
        }

        return {
            provide: {
                api: modules,
            },
        }
    },
})
