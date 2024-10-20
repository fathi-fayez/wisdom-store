<template>
  <nav>
    <v-app-bar
      ><v-app-bar-nav-icon @click="closeDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </nav>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const toggleDrawer = inject('toggleDrawer')

const closeDrawer = () => {
  toggleDrawer()
}
</script>

<style></style>
