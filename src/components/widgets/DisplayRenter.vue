<script setup></script>
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
            <!--<th>Car Template</th>-->
            <!--<th>Payment Method</th>-->
            <th>Amount</th>
            <th>Details</th>
            <!--<th>Reference Number</th>-->
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
</template>
