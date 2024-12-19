<script setup lang="ts">
    import { useQuery } from '@tanstack/vue-query'
    import { CocktailDetail } from '~/entities/cocktail'

    const { $api } = useNuxtApp()

    const route = useRoute()

    const catalogId = computed(() => String(route.meta.id || route.params.id))

    const { data, suspense } = useQuery({
        queryKey: ['catalog', catalogId],
        queryFn: async () => await $api.catalog.getCocktail(catalogId.value),
        staleTime: Infinity,
    })

    await suspense()
</script>

<template>
    <div class="page-cocktail">
        <div class="page-cocktail__grid">
            <CocktailDetail
                v-for="cocktail in data?.drinks"
                :key="cocktail.idDrink"
                class="page-cocktail__item"
                :cocktail="cocktail"
            />
        </div>
        <div v-if="!data?.drinks">
            Ничего не найдено
            <NuxtLink to="/">
                На главную
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-cocktail {
  &__item {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #fff;

    &:last-child {
      border: none;
    }
  }
}
</style>
