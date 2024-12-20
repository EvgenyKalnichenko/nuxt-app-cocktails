import type { ComputedRef } from 'vue'
import type CocktailModule from './../repository/cocktail'
import { useQuery } from '@tanstack/vue-query'

export const QUERY_KEY_COCKTAIL = 'cocktail'

export const useQueryCocktail = (catalogId: ComputedRef<string>, $api: CocktailModule) => {
  const { data, suspense, isError } = useQuery({
    queryKey: [QUERY_KEY_COCKTAIL, catalogId],
    queryFn: async () => await $api.getCocktail(catalogId.value),
    staleTime: Infinity,
    retry: 2,
  })

  return {
    data,
    suspense,
    isError
  }
}
