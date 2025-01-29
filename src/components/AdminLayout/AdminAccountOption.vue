<script>
import { supabase } from '@/plugins/supabase';

export default {
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      showConfirmation: false,
    };
  },
  async created() {
    await this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const user = supabase.auth.user();
      if (user) {
        this.email = user.email;
        // Fetch additional user data (first name, last name) from your database
        const { data } = await supabase
          .from('auth.users')
          .select('first_name, last_name')
          .eq('id', user.id)
          .single();

        if (data) {
          this.firstName = data.first_name;
          this.lastName = data.last_name;
        }
      }
    },
    updateAccountInfo() {
      this.showConfirmation = true;
    },
    async confirmChanges() {
      const user = supabase.auth.user();
      if (user) {
        const { error } = await supabase
          .from('auth.users')
          .update({ first_name: this.firstName, last_name: this.lastName })
          .eq('id', user.id);

        if (!error) {
          alert('Account information updated successfully!');
        } else {
          alert('Error updating account information.');
        }
      }
      this.showConfirmation = false;
    },
    cancelChanges() {
      this.showConfirmation = false;
    },
  },
};
</script>

<template>
  <div>
    <h1>Account Information</h1>
    <form @submit.prevent="updateAccountInfo">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" readonly />
      </div>
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="lastName" />
      </div>
      <button type="submit">Save Changes</button>
    </form>

    <div v-if="showConfirmation" class="confirmation-popup">
      <p>Are you sure you want to proceed with changing your account information?</p>
      <button @click="confirmChanges">Yes</button>
      <button @click="cancelChanges">No</button>
    </div>
  </div>
</template>



<style scoped>
.confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
