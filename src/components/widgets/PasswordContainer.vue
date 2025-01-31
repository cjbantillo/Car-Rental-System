<script setup>
import { ref } from 'vue'
const password = ref('')
const confirmPassword = ref('')

const updatePassword = () => {
  if (password.value === confirmPassword.value) {
    alert('Password updated successfully!')
    password.value = ''
    confirmPassword.value = ''
  } else {
    alert('Passwords do not match. Please try again.')
  }
}
</script>

<template>
  <!-- Password Update Form -->
  <v-card class="pa-6 mx-auto" max-width="900" elevation="4">
    <v-card-title class="text-h4 mb-4" style="color: #008080"> Update Password </v-card-title>

    <v-form @submit.prevent="updatePassword" class="mt-6">
      <v-text-field
        v-model="password"
        label="New Password"
        type="password"
        outlined
        class="mb-4"
        bg-color="#f5f5f5"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        outlined
        class="mb-4"
        bg-color="#f5f5f5"
      ></v-text-field>

      <v-btn
        type="submit"
        color="teal"
        block
        large
        :disabled="!password || password !== confirmPassword"
      >
        Update Password
      </v-btn>
    </v-form>
  </v-card>
</template>
