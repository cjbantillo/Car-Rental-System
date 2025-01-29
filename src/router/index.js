import { createRouter, createWebHistory } from 'vue-router';

// Auth Folder Views
import LoginView from '@/views/Auth/LoginView.vue';
import RegisterView from '@/views/Auth/RegisterView.vue';

// Cashier
import CashierDashboard from '@/views/CashierDashboard.vue';

// Admin
import AddDeleteCar from '@/views/AddDeleteCarView.vue';
import AdminDashboardView from '@/views/AdminDashboardView.vue';
import AdminAccountView from '@//views/AdminAccountView.vue';

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
    {
      path: '/add-delete-car',
      name: 'add-delete-car',
      component: AddDeleteCar,
    },
    {
      path: '/admin-account-view',
      name: 'admin-account-view',
      component: AdminAccountView,
    },
  ],
});

export default router;
