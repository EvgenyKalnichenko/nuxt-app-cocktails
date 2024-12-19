<script setup lang="ts">
    import { useLazyLoad } from './useLazyLoad'

    const props = withDefaults(defineProps<{
        src: string
        alt?: string
        lazy?: boolean
        aspectRatio?: string | [number, number]
    }>(), {
        lazy: true
    })

    const isLoaded = ref(false)
    const imageRef = ref<HTMLImageElement | null>(null)

    const classess = computed(() => ({ loaded: isLoaded.value, lazy: props.lazy }))

    const srcAttribute = computed(() => {
        return props.lazy ? 'data-src' : 'src'
    })

    const onLoad = () => {
        isLoaded.value = true
    }

    const { initLazyLoad, destroyLazyLoad } = useLazyLoad(imageRef, '400px')

    onMounted(() => {
        if (props.lazy) initLazyLoad()
    })

    onUnmounted(() => {
        if (props.lazy) destroyLazyLoad()
    })
</script>

<template>
    <img
        ref="imageRef"
        class="ui-image"
        v-bind="$attrs"
        :[srcAttribute]="src"
        :alt="alt"
        :class="classess"
        data-allow-mismatch
        @load="onLoad"
    />
</template>

<style lang="scss">
.ui-image {
  &.lazy {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.lazy.loaded {
    opacity: 1;
  }
}
</style>
