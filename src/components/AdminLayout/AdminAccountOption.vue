<script setup>
import { ref } from 'vue';
import RegisterForm from '../AssignCashier/RegisterForm.vue';

// Local state for username and password
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const visible = ref(false);

// Local state for confirmation dialog
const showConfirmation = ref(false);

// Local state for cashier accounts
const cashierAccounts = ref([
  { id: 1, username: 'cashier1', password: 'password1' },
  { id: 2, username: 'cashier2', password: 'password2' },
]);

// State for controlling the RegisterForm dialog
const showRegisterForm = ref(false);

// Show confirmation dialog
const updateAccountInfo = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }
  showConfirmation.value = true;
};

// Confirm changes and update local state
const confirmChanges = () => {
  try {
    // Update local state (e.g., username and password)
    alert('Account information updated successfully!');
    console.log('Updated Username:', username.value);
    console.log('Updated Password:', password.value);
  } catch (error) {
    alert('Error updating account information: ' + error.message);
  } finally {
    showConfirmation.value = false;
  }
};

// Cancel changes
const cancelChanges = () => {
  showConfirmation.value = false;
};

// Delete a cashier account
const deleteCashierAccount = (id) => {
  cashierAccounts.value = cashierAccounts.value.filter(account => account.id !== id);
};

// Edit a cashier account (placeholder function)
const editCashierAccount = (id) => {
  const account = cashierAccounts.value.find(account => account.id === id);
  if (account) {
    alert(`Edit account with username: ${account.username}`);
  }
};

// Open the RegisterForm dialog
const openRegisterForm = () => {
  showRegisterForm.value = true;
};

// Close the RegisterForm dialog
const closeRegisterForm = () => {
  showRegisterForm.value = false;
};
</script>

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
              outlined
              class="mb-4"
              bg-color="#f5f5f5"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              label="Password"
              outlined
              class="mb-4"
              bg-color="#f5f5f5"
              @click:append-inner="visible = !visible"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              label="Confirm Password"
              outlined
              class="mb-4"
              bg-color="#f5f5f5"
              @click:append-inner="visible = !visible"
            ></v-text-field>

            <v-btn type="submit" color="teal" block large :disabled="!username || !password || !confirmPassword">
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
    </v-row>
  </v-container>

  <v-container>
    <v-row class="pa-6 mx-auto" max-width="600" elevation="4">
      <h1>Cashier Accounts</h1>
      <v-col cols="12">
        <v-btn color="primary" @click="openRegisterForm">Add Cashier Account</v-btn>
        <v-table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in cashierAccounts" :key="account.id">
              <td>{{ account.username }}</td>
              <td>{{ account.password }}</td>
              <td>
                <v-btn @click="editCashierAccount(account.id)" color="primary" class="mr-2">Edit</v-btn>
                <v-btn @click="deleteCashierAccount(account.id)" color="error">Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>

  <!-- RegisterForm Dialog -->
  <v-dialog v-model="showRegisterForm" max-width="600">
    <v-card>
      <v-card-title class="text-h5" style="color: #008080">Add Cashier Account</v-card-title>
      <v-card-text>
        <RegisterForm @close="closeRegisterForm" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="coral" @click="closeRegisterForm">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

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
