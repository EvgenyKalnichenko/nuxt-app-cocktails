import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import UiIcon from './UiIcon.vue'

describe('uiIcon Component', () => {
  it('компонент рендерится если передать name', async () => {
    const wrapper = await mountSuspended(UiIcon, {
      props: {
        name: 'menu',
      },
    })

    await nextTick()

    const iconElement = wrapper.find('.ui-icon')
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.classes()).toContain('ui-icon--fill')

    const svgElement = wrapper.find('svg')
    expect(svgElement.exists()).toBe(true)
  })
})
