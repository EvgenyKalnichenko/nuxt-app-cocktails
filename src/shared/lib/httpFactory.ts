// https://www.vuemastery.com/blog/api-management-in-nuxt-3-with-typescript/#what-is-a-repository-design-pattern
import type { $Fetch, FetchOptions } from 'ofetch'

class HttpFactory {
    private $fetch: $Fetch

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher
    }

    /**
     * method - CALL, GET, POST, PUT
     * URL
     */
    async call<T>(url: string, options: FetchOptions = {}): Promise<T> {
        const $res = await this.$fetch(url, { ...options })
        return $res
    }

    async get<T>(
        url: string,
        options: FetchOptions = {},
    ): Promise<T> {
        return await this.call(`${url}`, {
            method: 'GET',
            ...options,
        })
    }
}

export default HttpFactory
