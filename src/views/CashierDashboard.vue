<template>
  <CashierNavigationLayout>
    <!-- using slot -->
    <template v-slot:content>
      <v-container>
        <!-- Add your main content here -->
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, asperiores!</p>
      </v-container>
    </template>
  </CashierNavigationLayout>
  </template>

  <script setup>
  import CashierNavigationLayout from '@/components/CashierLayout/CashierNavigationLayout.vue';
  </script>
