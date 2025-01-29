<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/plugins/supabase' // Update this path to match your supabase.js location
import { VTable } from 'vuetify/components'

const newCar = ref({
  car_template_number: '',
  car_model: '',
})

const cars = ref([])

onMounted(async () => {
  await fetchCars()
})

async function fetchCars() {
  const { data, error } = await supabase.from('car_details').select('*')
  if (error) console.error('Error fetching cars:', error)
  else cars.value = data
}

async function addCar() {
  const { data, error } = await supabase.from('car_details').insert([newCar.value])
  if (error) {
    console.error('Error adding car:', error)
  } else {
    cars.value.push(data[0])
    newCar.value = { car_template_number: '', car_model: '' }
  }
}

async function deleteCar(id) {
  const { error } = await supabase.from('car_details').delete().match({ id })
  if (error) {
    console.error('Error deleting car:', error)
  } else {
    cars.value = cars.value.filter((car) => car.id !== id)
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Admin Car Management</h1>
        <v-form @submit.prevent="addCar">
          <v-text-field
            v-model="newCar.car_template_number"
            label="Template Number"
            required
          ></v-text-field>
          <v-text-field v-model="newCar.car_model" label="Model" required></v-text-field>
          <v-btn type="submit" color="primary">Add Car</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>Template Number</th>
              <th>Model</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="car in cars" :key="car.id">
              <td>{{ car.car_template_number }}</td>
              <td>{{ car.car_model }}</td>
              <td>
                <v-btn @click="deleteCar(car.id)" color="error">Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Add your custom styles here */
</style>
