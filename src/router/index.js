import { createRouter, createWebHistory } from 'vue-router'
import admin from '@/views/AdminDashboardView.vue'
import cashier from '@/views/CashierDashboard.vue'
import login from '@/views/LoginView.vue'
import register from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component:login ,
    },
    {path: '/register',
    name: 'register',
    component: register,
  },
    {
      path: '/cashier',
      name: 'cashier',
      component: cashier,
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    }


  ],
})

export default router
