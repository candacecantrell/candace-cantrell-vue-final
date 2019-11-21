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
    challenges: {
      sendActivity: []
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    sendChallenges (state) {
      return state.challenges.sendActivity
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    },
    storeChallenge (state, challenges) {
      return (state.challenges = challenges)
    }
  },
  actions: {
    userLoggedIn ({ commit }, user) {
      commit('storeUser', user)
      // route to new page
      // routes.push('/loginPage')
      router.push({ name: 'loginPage' })
    },
    addToList ({ commit }, challenges) {
      commit('storeChallenge', challenges)
      router.push({ name: 'listPage' })
    }
  }
})
