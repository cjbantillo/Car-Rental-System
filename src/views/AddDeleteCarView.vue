
<script setup>
import AdminNavigationLayout from '@/components/AdminLayout/AdminNavigationLayout.vue'
import AddDeleteCar from '@/components/AdminLayout/AddDeleteCar.vue'



</script>
<template>
 <AdminNavigationLayout>
  <template v-slot:content>
    <AddDeleteCar />
  </template>
</AdminNavigationLayout>
</template>
