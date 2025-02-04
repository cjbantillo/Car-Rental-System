<script setup>
import { ref, onMounted } from 'vue';

// Local state for new car input
const newCar = ref({
  car_template_number: '',
  car_model: '',
});

// Local state for cars list
const cars = ref([
  { id: 1, car_template_number: 'T001', car_model: 'Model X' },
  { id: 2, car_template_number: 'T002', car_model: 'Model Y' },
]);

// Simulate fetching cars (local data)
onMounted(() => {
  fetchCars();
});

// Fetch cars (local data)
function fetchCars() {
  console.log("Fetched Cars:", cars.value); // Debugging
}

// Add a new car
function addCar() {
  if (!newCar.value.car_template_number || !newCar.value.car_model) {
    alert('Please fill in all fields.');
    return;
  }

  const newId = cars.value.length + 1; // Generate a new ID
  const car = {
    id: newId,
    car_template_number: newCar.value.car_template_number,
    car_model: newCar.value.car_model,
  };

  cars.value.push(car); // Add the new car to the list
  newCar.value = { car_template_number: '', car_model: '' }; // Reset the form
  console.log("Added Car:", car); // Debugging
}

// Delete a car
function deleteCar(id) {
  cars.value = cars.value.filter((car) => car.id !== id);
  console.log("Deleted Car with ID:", id); // Debugging
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
/* Add custom styles if needed */
</style>
