import { About, Knowledge, Multi, Project, Social } from '@/types'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import ApiService from '@/services/ApiService'

export interface MainState extends Multi {
  loaded: boolean
}

export const key: InjectionKey<Store<MainState>> = Symbol()

const api = new ApiService()

export const store = createStore<MainState>({
  state: {
    loaded: false,
    about: null,
    knowledges: [],
    projects: [],
    social: [],
  },
  mutations: {
    SET_LOADED(state, value: boolean) {
      state.loaded = value
    },
    UPDATE_ABOUT(state, value: null | About) {
      state.about = value
    },
    UPDATE_KNOWLEDGES(state, value: Knowledge[]) {
      state.knowledges = value
    },
    UPDATE_PROJECTS(state, value: Project[]) {
      state.projects = value
    },
    UPDATE_SOCIAL(state, value: Social[]) {
      state.social = value
    },
  },
  actions: {
    getInformations({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .getInformations()
          .then((multi) => {
            const { about, knowledges, projects, social } = multi
            commit('UPDATE_ABOUT', about)
            commit('UPDATE_KNOWLEDGES', knowledges)
            commit('UPDATE_PROJECTS', projects)
            commit('UPDATE_SOCIAL', social)
            commit('SET_LOADED', true)

            resolve(multi)
          })
          .catch((error) => {
            console.error('Store error', error)
            commit('SET_LOADED', false)
            reject(error)
          })
      })
    },
  },
})

export function useStore(): Store<MainState> {
  return baseUseStore(key)
}
