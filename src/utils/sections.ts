interface Section {
  title: string
  icon: string
  color: string
  id: string
}

const routes: Section[] = [
  {
    title: 'Sobre mim',
    icon: 'person',
    color: '#3174cc',
    id: 'about',
  },
  {
    title: 'Conhecimentos',
    icon: 'account_balance',
    color: '#ccb231',
    id: 'knowledges',
  },
  {
    title: 'Projetos',
    icon: 'dashboard',
    color: '#6c31cc',
    id: 'projects',
  },
  {
    title: 'Contatos',
    icon: 'phone',
    color: '#cc314b',
    id: 'social',
  },
]

export default routes
