import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import UiContainer from './UiContainer.vue'

describe('uiContainer', () => {
  it('должен рендериться корректно с тегом по умолчанию', async () => {
    const wrapper = await mountSuspended(UiContainer)
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })

  it('должен рендериться с переданным тегом section', async () => {
    const wrapper = await mountSuspended(UiContainer, {
      props: {
        tag: 'section',
      },
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })

  it('должен рендерить содержимое внутри слота', async () => {
    const wrapper = await mountSuspended(UiContainer, {
      slots: {
        default: () => 'Тестовый контент',
      },
    })

    expect(wrapper.html()).toContain('Тестовый контент')
  })
})
