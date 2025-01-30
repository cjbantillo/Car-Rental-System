<script setup>
import CashierNavigationLayout from '@/components/CashierLayout/CashierNavigationLayout.vue';
import CashierAddRenter from '@/components/CashierLayout/CashierAddRenterLayout.vue';
</script>

<template>
  <CashierNavigationLayout>
    <template v-slot:content>
      <CashierAddRenter />
    </template>
  </CashierNavigationLayout>
</template>
