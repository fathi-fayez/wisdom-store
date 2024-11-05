<template>
  <v-layout class="flex-column">
    <CartDrawer />
    <AppNav v-if="route.name != 'check_out'" />
    <FixedNav v-if="route.name != 'check_out'" />
    <v-main :class="{ mt: route.name != 'check_out' }">
      <slot></slot>
    </v-main>
    <AppFooter v-if="route.name != 'check_out'" />
  </v-layout>
</template>

<script setup lang="ts">
import CartDrawer from './CartDrawer.vue'
import AppFooter from '@/components/global/AppFooter.vue'
import AppNav from './AppNav.vue'
import FixedNav from './FixedNav.vue'
import { ref, provide } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

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
