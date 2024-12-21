<script setup lang="ts">
    import type { Cocktail } from './../model/repository/type'

    defineProps<{
        cocktail: Cocktail
    }>()

    function extractIngredients(drink: Cocktail) {
        const ingredients: string[] = []

        for (const key in drink) {
            if (key.startsWith('strIngredient') && drink[key as keyof Cocktail]) {
                ingredients.push(drink[key as keyof Cocktail] as string)
            }
        }

        return ingredients
    }
</script>

<template>
    <article class="cocktail-detail">
        <h2>{{ cocktail.strDrink }}</h2>

        <ul class="cocktail-detail__list">
            <li>{{ cocktail.strCategory }}</li>
            <li>{{ cocktail.strAlcoholic }}</li>
            <li>{{ cocktail.strGlass }}</li>
        </ul>

        <h3>Instructions:</h3>
        <p>{{ cocktail.strInstructions }}</p>

        <h3>List ingredients:</h3>
        <ul class="cocktail-detail__list">
            <li
                v-for="(ingridient, index) in extractIngredients(cocktail)"
                :key="index"
            >
                {{ ingridient }}
            </li>
        </ul>

        <figure>
            <UiImage
                class="cocktail-detail__image"
                :src="cocktail.strDrinkThumb"
                :alt="cocktail.strDrink"
            />
            <figcaption>{{ cocktail.strDrink }} cocktail image</figcaption>
        </figure>
    </article>
</template>

<style lang="scss">
.cocktail-detail {

  & > * {
    margin-bottom: 16px;
  }

  &__image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    display: block;
  }
}
</style>
