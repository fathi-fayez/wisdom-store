<template>
  <v-layout class="flex-column">
    <CartComponent />
    <MenuDrawer />
    <AppNav v-show="windowWidth > 990 && route.name != 'check_out'" />
    <FixedNav v-show="windowWidth > 990 && route.name != 'check_out'" />
    <responsiveNav v-show="windowWidth <= 990 && route.name != 'check_out'" />
    <v-main :class="route.name == 'check_out' ? 'm-0' : (windowWidth <= 990 ? 'low-margin' : 'high-margin')">

      <slot></slot>
    </v-main>
    <AppFooter v-show="route.name != 'check_out'" />
  </v-layout>
</template>

<script setup lang="ts">
import CartComponent from '@/components/global/CartComponent.vue'
import AppFooter from '@/components/global/AppFooter.vue'
import AppNav from '@/components/global/AppNav.vue'
import FixedNav from '@/components/global/FixedNav.vue'
import responsiveNav from '@/components/global/ResponsiveNav.vue'
import MenuDrawer from '@/components/global/MenuDrawer.vue'
import { ref, provide, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const isDrawerOpen = ref<boolean>(false)
const toggleDrawer = (): void => {
  isDrawerOpen.value = !isDrawerOpen.value
}
const isMenuOpen = ref<boolean>(false)
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

provide('isDrawerOpen', isDrawerOpen)
provide('isMenuOpen', isMenuOpen)

provide('toggleDrawer', toggleDrawer)
provide('toggleMenu', toggleMenu)

const windowWidth = ref<number>(0)

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.onresize = () => {
    windowWidth.value = window.innerWidth
  }

})
</script>
<style>
.high-margin {
  margin-top: 156px !important;
}

.low-margin {
  margin-top: 65px !important;
}
</style>
