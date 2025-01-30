<template>
  <div>
    <h1>Add New Renter</h1>
    <form @submit.prevent="addRenter">
      <div>
        <label for="renterName">Renter Name:</label>
        <input type="text" id="renterName" v-model="renterName" required />
      </div>
      <div>
        <label for="renterContact">Contact Number:</label>
        <input type="text" id="renterContact" v-model="renterContact" required />
      </div>
      <div>
        <label for="rentedDate">Rented Date:</label>
        <input type="date" id="rentedDate" v-model="rentedDate" required />
      </div>
      <div>
        <label for="returnDate">Return Date:</label>
        <input type="date" id="returnDate" v-model="returnDate" required />
      </div>
      <button type="submit" :disabled
    </form>
  </div>
</template>

<script>
import { supabase } from '../../plugins/supabase';

export default {
  data() {
    return {
      renterName: '',
      renterContact: '',
      rentedDate: '',
      returnDate: '',
    };
  },
  methods: {
    async addRenter() {
      const {  error } = await supabase
        .from('car_rents')
        .insert([
          {
            renter_name: this.renterName,
            renter_contact_num: this.renterContact,
            rented_date: this.rentedDate,
            return_date: this.returnDate,
          },
        ]);

      if (error) {
        alert('Error adding renter: ' + error.message);
      } else {
        alert('Renter added successfully!');
        this.resetForm();
      }
    },
    resetForm() {
      this.renterName = '';
      this.renterContact = '';
      this.rentedDate = '';
      this.returnDate = '';
    },
  },
};
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}
</style>
