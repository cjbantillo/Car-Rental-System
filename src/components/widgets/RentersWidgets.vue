<template>
  <v-card class="renters-widget">
    <v-card-title class="headline">Car Renters Information</v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="renters" :items-per-page="5" class="elevation-1">

        <template v-slot:item.rented_date="{ item }">
          {{ formatDate(item.rented_date) }}
        </template>
        <template v-slot:item.return_date="{ item }">
          {{ formatDate(item.return_date) }}
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/plugins/supabase'

const renters = ref([])

const headers = [
  { title: 'Car Model', key: 'car_model' },
  { title: 'Template Number', key: 'car_template_number' },
  { title: 'Rented by', key: 'renter_name' },
  { title: 'Contact Number', key: 'renter_contact_number' },
  { title: 'Date Rented', key: 'rented_date' },
  { title: 'Return Date', key: 'return_date' },
  { title: 'Payment Method', key: 'payment_method' },
  { title: 'Amount', key: 'amount' },
  { title: 'Reference Number', key: 'reference_number' },
  { title: 'Input by', key: 'auth_user_email' },
]

const fetchRenters = async () => {
  try {
    const { data, error } = await supabase
      .from('car_rents') // Ensure this matches your table name
      .select(`
        id,
        rented_date,
        return_date,
        renter_name,
        renter_contact_number,
        car_details:car_id (car_template_number, car_model, car_status),
        payment_methods:payment_method_id (payment_method, amount, reference_number),
        auth_users:auth_id (email)
      `);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    renters.value = data.map(renter => ({
      id: renter.id,
      rented_date: renter.rented_date,
      return_date: renter.return_date,
      renter_name: renter.renter_name,
      renter_contact_number: renter.renter_contact_number,
      car_template_number: renter.car_details.car_template_number,
      car_model: renter.car_details.car_model,
      car_status: renter.car_details.car_status,
      payment_method: renter.payment_methods.payment_method,
      amount: renter.payment_methods.amount,
      reference_number: renter.payment_methods.reference_number,
      auth_user_email: renter.auth_users.email
    }));
  } catch (err) {
    console.error('Error fetching renters:', err);
  }
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

onMounted(() => {
  fetchRenters()
})
</script>

<style scoped>
.renters-widget {
  margin: 16px;
  max-width: 100%;
}
</style>
