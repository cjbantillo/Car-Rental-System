<template>
  <v-container class="account-container">
    <v-row>
      <v-col>
      <v-card class="pa-6 mx-auto" max-width="600" elevation="4">
        <v-card-title class="text-h4 mb-4" style="color: #008080">
          Admin Account
        </v-card-title>

        <!-- Account Information Form -->
        <v-form @submit.prevent="updateAccountInfo">
          <v-text-field
            v-model="username"
            label="Username"
            type="username"
            outlined
            class="mb-4"
            bg-color="#f5f5f5"
          ></v-text-field>

          <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
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
      </v-col>
      <!-- // Register Form -->
      <v-col>
      <RegisterForm />
    </v-col>
    </v-row>
  </v-container>

  <v-container >
    <v-row class="pa-6 mx-auto" max-width="600" elevation="4">
      <h1>Cashier Accounts</h1>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="car in cars" :key="car.id">
              <td>{{ car.car_template_number }}</td>
              <td>{{ car.car_model }}</td>
              <td>
                <v-btn @click="deleteCar(car.id)" color="error">Delete</v-btn>
                <v-btn @click="deleteCar(car.id)" color="Primary">Edit</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/plugins/supabase'
import RegisterForm from '../AssignCashier/RegisterForm.vue'
const username = ref('')
const showConfirmation = ref(false)
const visible = ref(false)
// Fetch user data on component mount
onMounted(async () => {
  await fetchUserData()
})

// Fetch user data from Supabase
const fetchUserData = async () => {
  const { user } = supabase.auth.session.value
  if (!user) return alert('User not found')

  const { data } = await supabase.from('profiles').select('username').eq('id', user.id).single()
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
