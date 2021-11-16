interface Section {
  title: string
  icon: string
  id: string
}

const routes: Section[] = [
  {
    title: 'Sobre mim',
    icon: 'person',
    id: 'about',
  },
  {
    title: 'Conhecimentos',
    icon: 'account_balance',
    id: 'knowledges',
  },
  {
    title: 'Projetos',
    icon: 'dashboard',
    id: 'projects',
  },
  {
    title: 'Contatos',
    icon: 'phone',
    id: 'social',
  },
]

export default routes
