import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue')
  },
  {
    path: '/privacidade/foco-no-treino',
    name: 'privacy-foco-no-treino',
    component: () => import('@/views/privacy/PrivacyPolicyView.vue')
  },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
