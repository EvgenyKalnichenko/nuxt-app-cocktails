<script setup lang="ts">
    import { computed } from 'vue'

    interface Props {
        to: string
        variant?: 'primary' | 'secondary'
        weight?: 'regular' | 'medium' | 'bold' | null
        underline?: boolean
        uppercase?: boolean
        size?: 'small' | 'medium'
        isDisabled?: boolean
    }

    const props = withDefaults(defineProps<Props>(), {
        variant: 'primary',
        weight: 'regular',
        underline: false,
        size: 'medium',
        uppercase: false,
        isDisabled: false,
    })

    const classes = computed(() => [
        'ui-link',
        `ui-link--${props.variant}`,
        `ui-link--weight-${props.weight}`,
        `ui-link--size-${props.size}`,
        {
            'ui-link--underlined': props.underline,
            'ui-link--uppercase': props.uppercase,
            'ui-link--disabled': props.isDisabled,
        },
    ])
</script>

<template>
    <NuxtLink
        v-bind="$attrs"
        :to="to"
        :class="classes"
    >
        <slot />
    </NuxtLink>
</template>

<style lang="scss">
.ui-link {
  text-decoration: none;

  @include hover {
    opacity: 0.7;
  }

  &--primary {
    color: var(--text-primary);
  }

  &--secondary {
    color: var(--text-secondary);
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--underlined {
    border-bottom: 1px solid currentcolor;

    &:hover,
    &:focus {
      border-bottom-color: transparent;
    }
  }

  &--weight-regular {
    font-weight: 400;
  }

  &--weight-medium {
    font-weight: 500;
  }

  &--weight-bold {
    font-weight: 600;
  }

  &--size-small {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
  }

  &--size-medium {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
  }

  &--disabled {
    opacity: 0.85;
    pointer-events: none;
  }
}
</style>
