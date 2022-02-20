import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/layout/Footer/index.vue'

export const mainClass = '.footer'

export const finders = {
  footer: mainClass,
}

describe('Footer.vue', () => {
  const wrapper = shallowMount(Footer)

  it('Ao ser carregado o componente deve existir e ser visível', () => {
    const footerElement = wrapper.find(finders.footer)

    expect(footerElement.exists()).toBeTruthy()
    expect(footerElement.isVisible()).toBeTruthy()
  })

  it('O valor da variável "message" deve ser exibido em tela', () => {
    const footerElement = wrapper.find(finders.footer)
    const messageData = wrapper.vm.message

    expect(footerElement.text()).toEqual(messageData)
  })
})
