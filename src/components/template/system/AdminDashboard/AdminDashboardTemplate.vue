<script setup>
// Define the headers for the v-data-table
const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Species', value: 'species' },
  { text: 'Diet', value: 'diet' },
  { text: 'Habitat', value: 'habitat' },
];

// Define the items (data) for the table
const items = [
  {
    name: 'African Elephant',
    species: 'Loxodonta africana',
    diet: 'Herbivore',
    habitat: 'Savanna, Forests',
  },
  // Add more items as needed
];
</script>

<template>
  <v-app>
    <!-- Application Bar -->
    <v-app-bar app scroll-behavior="hide">
      <v-app-bar-title>Admin Dashboard</v-app-bar-title>
    </v-app-bar>

  <!-- Main Content -->
  <v-container>
    <!-- Data Table -->
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <!-- Optional Top Slot for Custom Content -->
        <template v-slot:top >
          <v-toolbar flat>
            <v-toolbar-title>Admin Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Add actions or buttons here if needed -->
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>
