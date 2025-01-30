<script setup>
import CashierNavigationLayout from '@/components/CashierLayout/CashierNavigationLayout.vue';
import CashierAccountOption from '@/components/CashierLayout/CashierAccountOptionLayout.vue';
</script>

<template>
  <CashierNavigationLayout>
    <template v-slot:content>
      <CashierAccountOption />
    </template>
  </CashierNavigationLayout>
</template>
