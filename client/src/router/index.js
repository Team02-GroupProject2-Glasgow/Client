import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import GamePage from '../views/GamePage.vue'
import WelcomePage from '../views/WelcomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
