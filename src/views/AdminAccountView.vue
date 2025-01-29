<script setup>
import AdminNavigationLayout from '@/components/AdminLayout/AdminNavigationLayout.vue';
import AdminAccountOption from '@/components/AdminLayout/AdminAccountOption.vue';
</script>

<template>
  <AdminNavigationLayout>
    <template v-slot:content>
      <v-container>
        <AdminAccountOption  />
      </v-container>
    </template>
  </AdminNavigationLayout>
</template>
