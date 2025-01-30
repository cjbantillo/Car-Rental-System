import { createRouter, createWebHistory } from 'vue-router';

// Auth Folder Views
import LoginView from '@/views/Auth/LoginView.vue';
import RegisterView from '@/views/Auth/RegisterView.vue';

// Admin
import AddDeleteCarView from '@/views/AddDeleteCarView.vue';
import AdminDashboardView from '@/views/AdminDashboardView.vue';
import AdminAccountView from '@/views/AdminAccountView.vue';

// Cashier
import CashierDashboard from '@/views/CashierDashboardView.vue';
import CashierAccountView from '@/views/CashierAccountView.vue';
import CashierAddRenterView from '@/views/CashierAddRenterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Auth
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
    // Admin
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboardView,
    },
    {
      path: '/add-delete-car-view',
      name: 'add-delete-car-view',
      component: AddDeleteCarView,
    },
    {
      path: '/admin-account-view',
      name: 'admin-account-view',
      component: AdminAccountView,
    },
    // Cashier
    {
      path: '/cashier',
      name: 'cashier',
      component: CashierDashboard,
    },
    {
      path: '/cashier-account-view',
      name: 'cashier-account-view',
      component: CashierAccountView,
    },
    {
      path: '/cashier-add-renter-view',
      name: 'cashier-add-renter-view',
      component: CashierAddRenterView,
    },
  ],
});

export default router;
