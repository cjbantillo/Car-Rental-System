import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/AdminDashboardView.vue'
import cashier from '@/views/CashierDashboard.vue'
import login from '@/views/LoginView.vue'
import register from '@/views/RegisterView.vue'

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
router.addRoute({
  path: '/login',
  name: 'login',
  component: login,
})

router.addRoute({
  path: '/register',
  name: 'register',
  component: register,
})
