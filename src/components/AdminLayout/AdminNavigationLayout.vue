<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer class="bg-deep-purple" theme="dark" permanent>
      <!-- Navigation Items -->
      <v-list>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" to="/admin"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
        <v-list-item prepend-icon="mdi-car" title="Add Car / Delete Car" to="/add-delete-car"></v-list-item>
      </v-list>

      <!-- Logout Button -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- App Bar and Main Content -->
    <v-app-bar flat>
      <v-icon>mdi-home</v-icon>
      <span class="ml-2">Welcome Admin</span>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <slot name="content"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// No script logic needed for this layout component
</script>

<style scoped>
/* Add custom styles if needed */
</style>
