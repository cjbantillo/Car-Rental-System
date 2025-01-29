<template>
  <div>
    <h1>Admin Car Management</h1>
    <form @submit.prevent="addCar">
      <input v-model="newCar.make" placeholder="Make" required />
      <input v-model="newCar.model" placeholder="Model" required />
      <input v-model="newCar.year" placeholder="Year" required />
      <button type="submit">Add Car</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in cars" :key="index">
          <td>{{ car.make }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>
            <button @click="deleteCar(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCar: {
        make: '',
        model: '',
        year: '',
      },
      cars: [],
    }
  },
  methods: {
    addCar() {
      this.cars.push({ ...this.newCar })
      this.newCar.make = ''
      this.newCar.model = ''
      this.newCar.year = ''
    },
    deleteCar(index) {
      this.cars.splice(index, 1)
    },
  },
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
