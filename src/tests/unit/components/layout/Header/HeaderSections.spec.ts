import { shallowMount } from '@vue/test-utils'
import HeaderSections from '@/components/layout/Header/HeaderSections.vue'
import { Section } from '@/utils/sections'
import { finders as headerLinkFinders } from './HeaderLink.spec'

export const mainClass = '.header-sections'

export const finders = {
  headerSections: mainClass,
}

const baseSections: Section[] = [
  {
    id: 'secao-1',
    title: 'Seção 1',
    icon: 'user',
    color: 'red',
  },
  {
    id: 'secao-2',
    title: 'Seção 2',
    icon: 'user',
    color: 'blue',
  },
  {
    id: 'secao-3',
    title: 'Seção 3',
    icon: 'user',
    color: 'green',
  },
]

describe('HeaderSections.vue', () => {
  it('Ao ser carregado o componente deve existir e ser visível', () => {
    const wrapper = shallowMount(HeaderSections)

    const headerSections = wrapper.find(finders.headerSections)

    expect(headerSections.exists()).toBeTruthy()
    expect(headerSections.isVisible()).toBeTruthy()
  })

  it('Ao ser passado seções customizadas devem existir um componente de HeaderLink pra cada', () => {
    const wrapper = shallowMount(HeaderSections, {
      props: {
        sections: baseSections,
      },
    })

    const headerSectionsLinks = wrapper.findAll(headerLinkFinders.headerLink)

    expect(headerSectionsLinks.length).toEqual(baseSections.length + 1)
  })
})
