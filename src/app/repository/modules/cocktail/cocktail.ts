import type { GetCocktailResponse } from '~/app/repository/modules/cocktail/type'
import HttpFactory from '~/app/repository/factory'

class CatalogModule extends HttpFactory {
    /**
     * Получение информации о коктейле
     */
    async getCocktail(code: string) {
        return await this.get<GetCocktailResponse>(`api/json/v1/1/search.php?s=${code}`)
    }
}

export default CatalogModule
