<script setup lang="ts">
    withDefaults(defineProps<{
        tag?: keyof HTMLElementTagNameMap
    }>(), {
        tag: 'div'
    })
</script>

<template>
    <component
        :is="tag"
        class="ui-container"
    >
        <slot />
    </component>
</template>

<style lang="scss">
.ui-container {
  max-width: 1024px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
