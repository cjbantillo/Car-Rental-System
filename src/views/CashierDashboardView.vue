<script setup>
import CashierNavigationLayout from '@/components/CashierLayout/CashierNavigationLayout.vue'
import RentersWidgets from '@/components/widgets/RentersWidgets.vue'
import { ref, onMounted } from 'vue'

// Define renters here or fetch it from an API
const renters = ref([])

onMounted(async () => {
  // Fetch renters data if needed
})
</script>

<template>
  <CashierNavigationLayout>
    <!-- using slot -->
    <template v-slot:content>
      <v-container>
        <!-- Pass renters as a prop -->
        <RentersWidgets :renters="renters" />
      </v-container>
    </template>
  </CashierNavigationLayout>
</template>
