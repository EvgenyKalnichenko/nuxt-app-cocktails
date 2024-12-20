<script setup lang="ts">
    const props = withDefaults(defineProps<{
        name: string
        filled?: boolean
    }>(), { filled: false })

    const icon = ref<string | Record<string, unknown>>('')
    const hasStroke = ref(false)

    async function getIcon() {
        try {
            const iconsImport = import.meta.glob('/app/assets/icons/**/**.svg', {
                query: '?raw',
                import: 'default',
                eager: false,
            })

            const rawIcon = await iconsImport[`/app/assets/icons/${props.name}.svg`]() as string
            if (rawIcon.includes('stroke')) hasStroke.value = true
            icon.value = rawIcon
        } catch (error) {
            console.error('Error loading icons:', error)
        }
    }

    await getIcon()

    watchEffect(getIcon)
</script>

<template>
    <span
        class="ui-icon"
        :class="{ 'ui-icon--fill': !filled, 'ui-icon--stroke': hasStroke && !filled }"
        v-html="icon"
    />
</template>

<style lang="scss">
.ui-icon {
  display: inline-flex;

  svg {
    width: inherit;
    height: inherit;
  }
}
</style>
