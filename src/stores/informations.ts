import { defineStore } from 'pinia'
import type { About, Experience, Knowledge, Project, Social } from '@/types'
import api from '@/api'

interface InformationsState {
  about: About | null
  experiences: Experience[] | null
  knowledges: Knowledge[] | null
  projects: Project[] | null
  social: Social[] | null
  loaded: boolean
}

export const useInformationsStore = defineStore({
  id: 'informations',
  state: (): InformationsState => ({
    about: null,
    knowledges: null,
    experiences: null,
    projects: null,
    social: null,
    loaded: false,
  }),
  actions: {
    /**
     * Busca todas as informações no API
     */
    async fetchInformations() {
      try {
        const { about, knowledges, experiences, projects, social } =
          await api.getInformations()

        this.about = about
        this.knowledges = knowledges
        this.experiences = experiences
        this.projects = projects
        this.social = social
        this.loaded = true

        await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
      } catch (error) {
        console.log('Erro ao buscar informações', error)
        this.loaded = false
      }
    },
  },
})
