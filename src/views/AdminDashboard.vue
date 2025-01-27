<template>
<AdminNavigationLayout>
  <!-- using slot -->
  <template v-slot:content>
    <v-container>
      <!-- Add your main content here -->
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, asperiores!</p>
    </v-container>
  </template>
</AdminNavigationLayout>
</template>

<script setup>
import AdminNavigationLayout from '@/components/AdminLayout/adminNavigationLayout.vue';
</script>
