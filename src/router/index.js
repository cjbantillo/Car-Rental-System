import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/AdminDashboard.vue'
import cashier from '@/views/CashierDashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: cashier,
    },

  ],
})

export default router
