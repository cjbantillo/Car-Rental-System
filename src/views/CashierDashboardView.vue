<script setup>
import CashierNavigationLayout from '@/components/CashierLayout/CashierNavigationLayout.vue'
import { onMounted } from 'vue'
import DisplayRenter from '@/components/widgets/DisplayRenter.vue';
onMounted(async () => {
  // Fetch renters data if needed
})
</script>

<template>
  <CashierNavigationLayout>
    <!-- using slot -->
    <template v-slot:content>
      <v-container>
<!-- modal button  -->
 <DisplayRenter></DisplayRenter>
      </v-container>
    </template>
  </CashierNavigationLayout>
</template>
