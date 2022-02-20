import { shallowMount } from '@vue/test-utils'
import HeaderImage from '@/components/layout/Header/HeaderImage.vue'

export const mainClass = '.header-image'

export const finders = {
  headerImage: mainClass,
  headerImageFigure: mainClass + ' img',
}

describe('HeaderImage.vue', () => {
  it('Ao ser carregado o componente deve existir e ser visível', () => {
    const wrapper = shallowMount(HeaderImage)

    const headerImage = wrapper.find(finders.headerImage)

    expect(headerImage.exists()).toBeTruthy()
    expect(headerImage.isVisible()).toBeTruthy()
  })

  it('Ao ser carregado o componente de imagem deve ter como src o valor da variável "headerImage"', () => {
    const wrapper = shallowMount(HeaderImage)

    const headerImageFigure = wrapper.find(finders.headerImageFigure)

    expect(headerImageFigure.exists()).toBeTruthy()
    expect(headerImageFigure.isVisible()).toBeTruthy()

    const imageSrc = wrapper.vm.headerImage

    expect(headerImageFigure.attributes('src')).toEqual(imageSrc)
  })
})
