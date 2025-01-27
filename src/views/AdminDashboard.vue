<template>
<admin-layout>
  <!-- using slot -->
  <template v-slot:content>
    <v-container>
      <!-- Add your main content here -->
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, asperiores!</p>
    </v-container>
  </template>
</admin-layout>
</template>

<script setup>
import AdminLayout from '@/components/admin-layout/adminNavigationLayout.vue';
</script>
