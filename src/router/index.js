import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboardView from '@/views/AdminDashboardView.vue';
import CashierDashboard from '@/views/CashierDashboard.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: CashierDashboard,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboardView,
    },
  ],
});

export default router;
