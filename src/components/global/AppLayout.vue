<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import CartDrawer from './cartDrawer.vue'
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'
import { ref, provide } from 'vue'

const isDrawerOpen = ref(true)
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

provide('isDrawerOpen', isDrawerOpen)
provide('toggleDrawer', toggleDrawer)
</script>
<style></style>
