import Vue from 'vue'
import Router from 'vue-router'
import loginForm from './components/loginForm.vue'
import loginPage from './components/loginPage.vue'
import listPage from './components/listPage.vue'
Vue.use(Router)
// import User from './components/user/user.vue'

/* export const routes = [
  // { path: '/user', component: User }
  { path: '', component: loginForm }, // empty path sets root route
  { path: '/loginPage', name: 'loginPage', component: loginPage }
] */
export default new Router({
  routes: [
    // { path: '/user', component: User }
    { path: '', name: 'loginForm', component: loginForm }, // empty path sets root route
    { path: '/loginPage', name: 'loginPage', component: loginPage },
    { path: '/listPage', name: 'listPage', component: listPage }
  ]
})
