import Vue from 'vue'
import Vuex from 'vuex'
// import { routes } from './routes'
import Router from 'vue-router'
import router from './routes'
// import vuetify from './plugins/vuetify'

Vue.use(Vuex)
Vue.use(Router)

export default new Vuex.Store({
  state: {
    user: {
      username: '',
      email: '',
      password: ''
    },
    saveList: {
      sendShow: []
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    saveList (state) {
      return state.saveList
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    },
    storeList (state, saveList) {
      return (state.saveList = saveList)
    }
  },
  actions: {
    userLoggedIn ({ commit }, user) {
      commit('storeUser', user)
      // route to new page
      // routes.push('/loginPage')
      router.push({ name: 'loginPage' })
    },
    storeToList ({ commit }, saveList) {
      commit('storeList', saveList)
      router.push({ name: 'listPage' })
    }
  }
})
