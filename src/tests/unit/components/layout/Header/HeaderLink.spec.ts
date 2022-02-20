import { shallowMount } from '@vue/test-utils'
import HeaderLink from '@/components/layout/Header/HeaderLink.vue'

export const mainClass = '.header-link'

export const finders = {
  headerLink: mainClass,
  icon: mainClass + '__icon',
  title: mainClass + '__title',
}

describe('HeaderLink.vue', () => {
  it('Ao ser carregado o componente deve existir e ser visível', () => {
    const wrapper = shallowMount(HeaderLink)

    const headerLinkElement = wrapper.find(finders.headerLink)

    expect(headerLinkElement.exists()).toBeTruthy()
    expect(headerLinkElement.isVisible()).toBeTruthy()
  })

  it('Ao ser passado a propriedade "icon" deve aparecer um material icon na tela com o mesmo valor', () => {
    const props = {
      icon: 'user',
    }
    const wrapper = shallowMount(HeaderLink, {
      props,
    })

    const iconElement = wrapper.find(finders.icon)

    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.isVisible()).toBeTruthy()

    expect(iconElement.text()).toEqual(props.icon)
    expect(iconElement.text()).not.toEqual('invalid-' + props.icon)
  })

  it('Ao ser passado a propriedade "title" um texto deve ser exibido na tela', () => {
    const props = {
      title: 'Valor do Título',
    }
    const wrapper = shallowMount(HeaderLink, {
      props,
    })

    const titleElement = wrapper.find(finders.title)

    expect(titleElement.exists()).toBeTruthy()
    expect(titleElement.isVisible()).toBeTruthy()

    expect(titleElement.text()).toEqual(props.title)
    expect(titleElement.text()).not.toEqual('invalid-' + props.title)
  })
})
