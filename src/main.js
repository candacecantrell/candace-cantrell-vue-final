import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
