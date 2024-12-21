import type { ComputedRef } from 'vue'
import { useQuery } from '@tanstack/vue-query'

export const QUERY_KEY_COCKTAIL = 'cocktail'

export const useQueryCocktail = (catalogId: ComputedRef<string>) => {
  const { $api } = useNuxtApp()

  const { data, suspense, isError } = useQuery({
    queryKey: [QUERY_KEY_COCKTAIL, catalogId],
    queryFn: async () => await $api.cocktail.getCocktail(catalogId.value),
    staleTime: Infinity,
    retry: 2,
  })

  return {
    data,
    suspense,
    isError
  }
}
