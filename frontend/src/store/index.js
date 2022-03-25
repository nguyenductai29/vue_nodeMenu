import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as modules from './modules'

Vue.use(Vuex)

const SESSION_KEY = 'smatApp'

const getInitState = () => ({
  auth: null,
  title: null
})

export default new Vuex.Store({
  state: getInitState(),
  modules: modules,
  mutations: {
    setInitState: (state) => Object.assign(state, getInitState()),
    setAuth: (state, auth) => Vue.set(state, 'auth', auth),
    setTitle: (state, title) => Vue.set(state, 'title', title)
  },
  actions: {
    initState: ({ dispatch, commit }) => Object.keys(modules).forEach(module => dispatch(`${module}/initState`)),
    setAuth: ({ commit }, auth) => commit('setAuth', auth),
    setTitle: ({ commit }, title) => commit('setTitle', title)
  },
  getters: {
    menuPath: (state) => {
      switch (state.auth) {
        case 0: return Vue.prototype.$path.MENU
        case 1: return Vue.prototype.$path.MASTER_MENU
        case 2: return Vue.prototype.$path.REFERENCE_MENU
      }
    },
    title: (state) => state.title
  },
  plugins: [createPersistedState({
    key: SESSION_KEY,
    storage: window.sessionStorage
  })]
})
