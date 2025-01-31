<template>
  <v-sheet class="d-flex justify-center align-center h-screen bg-light-gray">
    <v-card class="mx-auto" max-width="400" elevation="5" rounded="lg">
      <v-card-title class="text-center text-teal text-h5 font-weight-bold py-4">
        User Registration
      </v-card-title>

      <v-container>
        <!-- Username Input -->
        <v-text-field
          v-model="username"
          color="teal"
          label="Username"
          variant="outlined"
          :disabled="isLoading"
          aria-label="Username"
        ></v-text-field>
        <v-text-field
          v-model="email"
          variant="outlined"
          :disabled="isLoading"
          aria-label="Username"
          hidden
        ></v-text-field>

        <!-- Password Input -->
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          v-model="password"
          color="teal"
          label="Password"
          placeholder="Enter your password"
          variant="outlined"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="visible = !visible"
          :disabled="isLoading"
          aria-label="Password"
        ></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <!-- Submit Button -->
      <v-card-actions class="px-4 py-3">
        <v-spacer></v-spacer>
        <v-btn
          color="coral"
          @click="registerUser"
          :loading="isLoading"
          :disabled="isLoading"
          aria-label="Complete Registration"
        >
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>

      <!-- Error and Success Messages -->
      <v-alert v-if="error" type="error" class="mx-4 mb-4">{{ error }}</v-alert>
      <v-alert v-if="success" type="success" class="mx-4 mb-4">{{ success }}</v-alert>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../../plugins/supabase'
import { useRouter } from 'vue-router'

// Refs for form inputs and states
const visible = ref(false)
const email = ref('')
const username = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const isLoading = ref(false)

// Initialize the router
const router = useRouter()

// Function to handle form submission
const registerUser = async () => {
  try {
    // Validate form inputs
    if (!username.value || !password.value) {
      error.value = 'Please fill out all fields.'
      return
    }

    // Validate password strength (at least 6 characters)
    if (password.value.length < 6) {
      error.value = 'Password must be at least 6 characters long.'
      return
    }

    // Set loading state
    isLoading.value = true

    // Sign up the user using Supabase Auth
    const { error: authError } = await supabase.auth.signUp({
      username: username.value,
      password: password.value,
      options: {
        data: {
          username: username.value,
          role: 'admin', // Add a role field to user metadata
        },
      },
    })

    if (authError) {
      throw authError
    }

    // Clear form and show success message
    username.value = ''
    password.value = ''
    success.value = 'Registration successful! Please check your email to confirm your account.'
    error.value = ''

    // Redirect to the login page after 3 seconds
    setTimeout(() => {
      router.push({ name: 'login' }) // Replace 'login' with the name of your login route
    }, 3000)
  } catch (err) {
    error.value = 'Error during registration: ' + err.message
    success.value = ''
  } finally {
    // Reset loading state
    isLoading.value = false
  }
}
</script>

<style scoped>
.bg-light-gray {
  background-color: #f5f5f5; /* Light gray background */
}

.text-teal {
  color: #008080; /* Teal color for text */
}
</style>
