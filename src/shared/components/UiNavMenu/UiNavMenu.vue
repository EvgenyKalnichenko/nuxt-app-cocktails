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
    background-color: gray;
    transition: var(--transition) background-color;
  }
}
</style>
