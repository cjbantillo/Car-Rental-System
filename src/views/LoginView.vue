<script setup>
import { ref } from 'vue'
import { supabase } from '../plugins/supabase'
import { useRouter } from 'vue-router'

const router = useRouter()
const visible = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    // Validate inputs
    if (!email.value || !password.value) {
      error.value = 'Please fill out all fields.'
      return
    }

    // Sign in with Supabase
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (authError) {
      throw authError
    }

    // Retrieve the user's role from the user metadata
    const userRole = data.user.user_metadata.role

    // Route based on role
    if (userRole === 'admin') {
      router.push({ name: 'admin' }) // Redirect to admin dashboard
    } else if (userRole === 'cashier') {
      router.push({ name: 'cashier' }) // Redirect to cashier dashboard
    } else {
      error.value = 'Unauthorized role.'
    }
  } catch (err) {
    error.value = 'Login failed: ' + err.message
  }
}
</script>

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Welcome User! Please login to your account.😊
        </v-card-text>
      </v-card>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="login">
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link class="text-blue text-decoration-none" to="/register">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
