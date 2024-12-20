import type { Cocktail } from './model/repository/type'
import { cocktailMenu } from './consts/coctailsMenu'
import CocktailModule from './model/repository/cocktail'
import { useQueryCocktail } from './model/services/useQueryCocktail'
import CocktailDetail from './ui/CocktailDetail.vue'

export {
  type Cocktail,
  CocktailDetail,
  cocktailMenu,
  CocktailModule,
  useQueryCocktail
}
