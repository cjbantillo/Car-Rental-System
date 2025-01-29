<script setup>
import AdminNavigationLayout from '@/components/AdminLayout/AdminNavigationLayout.vue';
import RentersWidgets from '@/components/widgets/RentersWidgets.vue';
import { ref, onMounted } from 'vue';

// Define renters here or fetch it from an API
const renters = ref([]);

onMounted(async () => {
  // Fetch renters data if needed
});
</script>

<template>
  <AdminNavigationLayout>
    <template v-slot:content>
      <v-container>
        <!-- Pass renters as a prop -->
        <RentersWidgets :renters="renters" />
      </v-container>
    </template>
  </AdminNavigationLayout>
</template>
