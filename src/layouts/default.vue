<script setup lang="ts">
    import UiNavMenu from '~/shared/components/UiNavMenu/UiNavMenu.vue'

    const menu = [
        { name: 'Маргарита', path: '/cocktail/margarita' },
        { name: 'Мохито', path: '/cocktail/mojito' },
        { name: 'A1', path: '/cocktail/a1' },
        { name: 'Кир', path: '/cocktail/kir' },
    ]
</script>

<template>
    <div class="layout-default">
        <div class="layout-default__sidebar">
            <UiNavMenu
                class="layout-default__sticky"
                :items="menu"
            />
        </div>
        <main class="layout-default__container">
            <slot />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.layout-default {
  display: grid;
  grid-gap: 16px;
  grid-template-areas: "sidebar container";
  grid-template-columns: 330px calc(100% - 330px);
  max-width: 1024px;
  margin: auto;
  padding: 8px 0;

  @include sm-screen {
    grid-template-columns: 1fr;
    grid-template-areas: "sidebar" "container";
  }

  &__sticky {
    position: sticky;
    top: 8px;
  }
}
</style>
