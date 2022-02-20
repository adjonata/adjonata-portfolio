import { shallowMount } from '@vue/test-utils'
import FloatingButton from '@/components/layout/FloatingButton/index.vue'

export const mainClass = '.floating-button'

export const finders = {
  button: mainClass,
}

describe('FloatingButton.vue', () => {
  it('Ao ser carregado o componente deve existir', () => {
    const wrapper = shallowMount(FloatingButton)

    const buttonElement = wrapper.find(finders.button)

    expect(buttonElement.exists()).toBeTruthy()
  })
})
