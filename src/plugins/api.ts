import type { FetchOptions } from 'ofetch'
import { defineNuxtPlugin } from '#app'
import { $fetch } from 'ofetch'
import CatalogModule from '~/app/repository/modules/catalog/catalog'

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

        /** create a new instance of $fetcher with custom option */
        const apiFetcher = $fetch.create(fetchOptions)

        /** an object containing all repositories we need to expose */
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
