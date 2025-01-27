<template>
  <v-app>
    <!-- Main Layout -->
    <v-row>
      <!-- Sidebar Column -->
      <v-col cols="3">
        <v-navigation-drawer
          class="bg-deep-purple"
          theme="dark"
          permanent
        >
          <!-- Navigation Items -->
          <v-list color="transparent">
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Dashboard"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-box"
              title="Account"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-plus"
              title="Add Renter"
            ></v-list-item>
          </v-list>

          <!-- Logout Button -->
          <template v-slot:append>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </v-col>

      <!-- Main Content Column -->
      <v-col cols="9">
        <v-card>
          <!-- App Bar -->
          <v-app-bar flat>
            <v-icon>mdi-home</v-icon>
            <span class="ml-2">Cashier</span>
          </v-app-bar>

          <!-- Main Content -->
          <v-main>
        <slot name="content"></slot>
      </v-main>

        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup></script>
