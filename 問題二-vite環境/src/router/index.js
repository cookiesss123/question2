import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../views/FrontLayout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
