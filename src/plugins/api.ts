import type { FetchOptions } from 'ofetch'
import { defineNuxtPlugin } from '#app'
import { $fetch } from 'ofetch'
import CatalogModule from '~/app/repository/modules/cocktail/cocktail'

export interface IApiInstance {
    catalog: CatalogModule
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
            catalog: new CatalogModule(apiFetcher),
        }

        return {
            provide: {
                api: modules,
            },
        }
    },
})
