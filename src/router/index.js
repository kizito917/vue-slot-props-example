import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/Slots.vue')
    },
    {
        path: '/props',
        name: 'props',
        component: () => import('../views/Props.vue')
    }
  ]
})

export default router
