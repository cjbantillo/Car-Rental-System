<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/plugins/supabase';

// Define cars as a reactive reference
const cars = ref([]);

// Fetch cars data from Supabase when the component is mounted
onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('cars') // Replace 'cars' with your actual table name
      .select('*'); // Select all columns or specify the ones you need

    if (error) throw error;
    cars.value = data; // Update the reactive cars array
  } catch (error) {
    console.error('Error fetching cars:', error);
  }
});

// Function to delete a car
const deleteCar = async (id) => {
  try {
    // Delete the car from Supabase
    const { error } = await supabase
      .from('cars') // Replace 'cars' with your actual table name
      .delete()
      .eq('id', id); // Delete the car with the matching ID

    if (error) throw error;

    // Update the local cars array
    cars.value = cars.value.filter(car => car.id !== id);
  } catch (error) {
    console.error('Error deleting car:', error);
  }
};
</script>

<template>
  <v-row>
    <v-col class="d-flex justify-end">
      <v-btn class="primary" variant="tonal">Add Renter</v-btn>
    </v-col>
  </v-row>

  <v-row>
    <v-divider></v-divider>
    <v-col cols="12">
      <v-table>
        <thead>
          <tr>
            <th>Renter Name</th>
            <th>Contact Number</th>
            <th>Rented Date</th>
            <th>Return Date</th>
            <th>Car Model</th>
            <th>Amount</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in cars" :key="car.id">
            <!-- Update these fields to match your data structure -->
            <td>{{ car.renter_name }}</td>
            <td>{{ car.contact_number }}</td>
            <td>{{ car.rented_date }}</td>
            <td>{{ car.return_date }}</td>
            <td>{{ car.car_model }}</td>
            <td>{{ car.amount }}</td>
            <td>{{ car.details }}</td>
            <td>
              <v-btn @click="deleteCar(car.id)" color="error">Delete</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>
