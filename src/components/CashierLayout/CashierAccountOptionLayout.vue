<template>
  <v-container class="account-container">
    <!-- Account Information Form -->
    <v-card class="pa-6 mx-auto mb-6" max-width="900" elevation="4">
      <v-card-title class="text-h4 mb-4" style="color: #008080;">
        Cashier Account Information
      </v-card-title>

      <v-form @submit.prevent="updateAccountInfo" class="account-form">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          readonly
          outlined
          class="mb-4"
          bg-color="#f5f5f5"
        ></v-text-field>

        <v-text-field
          v-model="fullName"
          label="Full Name"
          outlined
          readonly
          class="mb-4"
          bg-color="#f5f5f5"
        ></v-text-field>

      </v-form>
    </v-card>

  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('cashier@example.com');

const fullName = ref('John Doe');

const showConfirmation = ref(false);


const updateAccountInfo = () => {
  showConfirmation.value = true;
};


</script>

<style scoped>
.account-container {
  background-color: #f5f5f5;
  padding: 2rem;
  min-height: 100vh;
}

/* Custom Vuetify color overrides */
:deep(.v-btn--teal) {
  background-color: #008080 !important;
  color: white !important;
}

:deep(.v-btn--coral) {
  background-color: #ff7f50 !important;
  color: white !important;
}
</style>
