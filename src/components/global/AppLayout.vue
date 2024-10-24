<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <AppNav />
      <FixedNav />
      <v-main class="mt">
        <slot></slot>
      </v-main>
      <!-- <AppFooter /> -->
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import CartDrawer from './CartDrawer.vue'
import AppNav from './AppNav.vue'
import FixedNav from './FixedNav.vue'
// import AppFooter from './AppFooter.vue'
import { ref, provide } from 'vue'

const isDrawerOpen = ref(false)
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

provide('isDrawerOpen', isDrawerOpen)
provide('toggleDrawer', toggleDrawer)
</script>
<style>
.mt {
  margin-top: 156px !important;
}
</style>
