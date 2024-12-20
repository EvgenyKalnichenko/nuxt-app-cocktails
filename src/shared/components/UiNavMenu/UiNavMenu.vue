<script setup lang="ts">
    interface MenuItem {
        name: string
        path: string
    }

    defineProps<{
        items: MenuItem[]
    }>()
</script>

<template>
    <nav class="ui-nav-menu">
        <NuxtLink
            v-for="item in items"
            :key="item.path"
            :to="item.path"
            class="ui-nav-menu__item"
        >
            {{ item.name }}
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
.ui-nav-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__item {
    padding: 8px 16px;
    border-radius: 12px;
    background-color: var(--base-background-secendary);
    transition: var(--transition) opacity;

    @include hover {
      opacity: 0.75;
    }

    &.router-link-active {
      background-color: var(--text-accent);
      opacity: 1;
    }
  }
}
</style>
