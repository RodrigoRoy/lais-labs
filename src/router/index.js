import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LabsView from '../views/LabsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    component: LabsView
  }
]

const router = new VueRouter({
  routes
})

export default router
