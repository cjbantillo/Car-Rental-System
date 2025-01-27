import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '@/views/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AdminDashboard,
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminDashboard,
    },
  ],
})

export default router
