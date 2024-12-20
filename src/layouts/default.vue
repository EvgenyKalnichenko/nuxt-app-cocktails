<script setup lang="ts">
    const menu = [
        { name: 'Margarita', path: '/cocktail/margarita' },
        { name: 'Mojito', path: '/cocktail/mojito' },
        { name: 'A1', path: '/cocktail/a1' },
        { name: 'Kir', path: '/cocktail/kir' },
    ]

    const isShowMenu = ref(false)
    const iconName = computed(() => isShowMenu.value ? 'close' : 'menu')
</script>

<template>
    <UiContainer class="layout-default">
        <header class="layout-default__header">
            <div>Logo</div>
            <UiIcon
                :name="iconName"
                @click="isShowMenu = !isShowMenu"
            />
        </header>
        <aside
            class="layout-default__sidebar"
            :class="{ 'layout-default__sidebar--show': isShowMenu }"
        >
            <div class="layout-default__sticky">
                <UiNavMenu :items="menu" />
            </div>
        </aside>
        <main class="layout-default__container">
            <slot />
        </main>
    </UiContainer>
</template>

<style lang="scss">
.layout-default {
  display: grid;
  grid-gap: 16px;
  grid-template-areas: "sidebar container";
  grid-template-columns: 330px 1fr;
  margin: auto;
  padding-top: 16px;

  @include sm-screen {
    grid-template-columns: 1fr;
    grid-template-areas: "sidebar" "container";
    gap: 16px;
    padding-top: 75px;
  }

  &__sticky {
    position: sticky;
    top: 16px;
  }

  &__header {
    display: none;

    @include sm-screen {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 1px 0 rgb(255 255 255 / 32%);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 16px;
      background-color: var(--base-background);
      z-index: 2;
    }
  }

  &__sidebar {
    @include sm-screen {
      pointer-events: none;
      background-color: var(--base-background-secendary);
      padding: 12px 0;
      transform: translateY(-100%);
      transition: opacity 0.3s ease, transform 0.3s ease;
      top: 55px;
      left: 0;
      width: 100%;
      z-index: 1;
      position: fixed;

      &--show {
        pointer-events: all;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
