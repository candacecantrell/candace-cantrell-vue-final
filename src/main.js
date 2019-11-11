import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import store from './store'

Vue.use(Router)
Vue.config.productionTip = false

/* const routes = new Router({
  routes: router,
  mode: 'history'
}) */

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
