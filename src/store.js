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
    showList: {
      sendShow: ''
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    sendChallenges (state) {
      return state.showList.sendShow
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    },
    storeChallenge (state, sendShow) {
      return (state.sendShow = sendShow)
    }
  },
  actions: {
    userLoggedIn ({ commit }, user) {
      commit('storeUser', user)
      // route to new page
      // routes.push('/loginPage')
      router.push({ name: 'loginPage' })
    },
    addToList ({ commit }, sendShow) {
      commit('storeShowList', sendShow)
      router.push({ name: 'listPage' })
    }
  }
})
