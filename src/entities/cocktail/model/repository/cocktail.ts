import type { GetCocktailResponse } from './type'
import HttpFactory from '~/shared/lib/httpFactory'

class CocktailModule extends HttpFactory {
    /**
     * Получение информации о коктейле
     */
    async getCocktail(code: string) {
        return await this.get<GetCocktailResponse>(`api/json/v1/1/search.php?s=${code}`)
    }
}

export default CocktailModule
