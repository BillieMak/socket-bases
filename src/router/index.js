import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticated from './auth-guard'

const routes = [
 
  {
    path: '/',
    name: 'chat',
    beforeEnter:[isAuthenticated],
    component: () => import(/* webpackChunkName: "LayoutView" */ '../layout/LayoutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
