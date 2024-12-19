import type { FetchOptions } from 'ofetch'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { $fetch } from 'ofetch'
import CatalogModule from '~/app/repository/modules/catalog/catalog'

export interface IApiInstance {
    catalog: CatalogModule
}

export default defineNuxtPlugin({
    name: 'api-plugin',
    parallel: true,
    async setup() {
        const runtimeConfig = useRuntimeConfig()
        const fetchOptions: FetchOptions = {
            baseURL: runtimeConfig.public.NUXT_API_BASE,
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
