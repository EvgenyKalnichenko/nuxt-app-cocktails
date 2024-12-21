<script setup lang="ts">
    import { CocktailDetail, useQueryCocktail } from '~/entities/cocktail'

    const route = useRoute()

    const catalogId = computed(() => String(route.params.id))

    const {
        suspense,
        data,
        isError
    } = useQueryCocktail(catalogId)

    await suspense()
</script>

<template>
    <div class="page-cocktail">
        <section
            v-if="isError"
            class="page-cocktail__error"
        >
            <p>Что то пошло не так...</p>
        </section>
        <template v-else>
            <section class="page-cocktail__grid">
                <CocktailDetail
                    v-for="cocktail in data?.drinks"
                    :key="cocktail.idDrink"
                    class="page-cocktail__item"
                    :cocktail="cocktail"
                />
            </section>
            <section
                v-if="!data?.drinks"
                class="page-cocktail__empty"
            >
                <p>
                    Ничего не найдено <br />
                    <UiLink to="/">
                        На главную
                    </UiLink>
                </p>
            </section>
        </template>
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

  &__error {
    color: var(--text-danger);
  }

  &__empty {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
