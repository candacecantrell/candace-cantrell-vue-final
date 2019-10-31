import User from './components/user/user.vue'
import Home from './components/home.vue'
export const routes = [
    { path: '/user', component: User }
    { path: '', component: Home }//empty path sets root route
]