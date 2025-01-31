<template>
  <v-container class="account-container">
    <v-card class="pa-6 mx-auto" max-width="600" elevation="4">
      <v-card-title class="text-h4 mb-4" style="color: #008080"> Account Information </v-card-title>

      <!-- Account Information Form -->
      <v-form @submit.prevent="updateAccountInfo">
        <v-text-field
          v-model="username"
          label="Username"
          type="username"
          readonly
          outlined
          class="mb-4"
          bg-color="#f5f5f5"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          outlined
          clearable
          class="mb-4"
          bg-color="#f5f5f5"
        ></v-text-field>

        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          outlined
          clearable
          class="mb-4"
          bg-color="#f5f5f5"
        ></v-text-field>

        <v-btn type="submit" color="teal" block large :disabled="!firstName || !lastName">
          Save Changes
        </v-btn>
      </v-form>
    </v-card>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="showConfirmation" max-width="500">
      <v-card>
        <v-card-title class="text-h6" style="color: #008080"> Confirm Changes </v-card-title>
        <v-card-text>
          Are you sure you want to proceed with changing your account information?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="coral" @click="cancelChanges">No</v-btn>
          <v-btn color="teal" @click="confirmChanges">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const username = ref('')
const showConfirmation = ref(false)

// Fetch user data on component mount
onMounted(async () => {
  await fetchUserData()
})

// Fetch user data from Supabase
const fetchUserData = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      username.value = user.username

      const { data } = await supabase
        .from('auth.users')
        .select('username')
        .eq('id', user.id)
        .single()

      if (data) {
        username.value = data.username
      }
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

// Show confirmation dialog
const updateAccountInfo = () => {
  showConfirmation.value = true
}

// Confirm changes and update user data
const confirmChanges = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (user) {
      const { error } = await supabase
        .from('auth.users')
        .update({ first_name: firstName.value, last_name: lastName.value })
        .eq('id', user.id)

      if (!error) {
        alert('Account information updated successfully!')
      } else {
        throw error
      }
    }
  } catch (error) {
    alert('Error updating account information: ' + error.message)
  } finally {
    showConfirmation.value = false
  }
}

// Cancel changes
const cancelChanges = () => {
  showConfirmation.value = false
}
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
