import { createRouter, createWebHistory } from 'vue-router'
// import LoginView from '@/views/LoginView.vue'
import AdminDashboardTemplate from '@/components/template/AdminDashboard/AdminDashboardTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: LoginView,
    // },
    {
      path: '/',
      name: 'Dashboard',
      component: AdminDashboardTemplate,
    },

  ],
})

export default router
