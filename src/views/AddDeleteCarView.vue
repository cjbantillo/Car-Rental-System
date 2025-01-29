
<script setup>
import AdminNavigationLayout from '@/components/AdminLayout/AdminNavigationLayout.vue'
import AddDeleteCar from '@/components/AdminLayout/AddDeleteCar.vue'



</script>
<template>
  <AdminNavigationLayout>
    <template v-slot:content>
      <v-container>
        <!-- Pass renters as a prop -->
        <AddDeleteCar/>
      </v-container>
    </template>
  </AdminNavigationLayout>
</template>
