<template>
  <div>
    <app-Layout>
      <router-view></router-view>
      <quickViewDialog />
    </app-Layout>
    <v-snackbar v-model="snackbar" location="left bottom">
        Item added to your cart successfuly <v-icon color="green" class="ms-2">mdi-check-circle</v-icon>
      </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { cartStore } from './stores/cart';
import { storeToRefs } from 'pinia';
const store = cartStore()
const {snackbar} = storeToRefs(store)
import appLayout from './components/global/AppLayout.vue'
import quickViewDialog from '@/components/quickViewDialog.vue'
const selectedProductData = ref({})

const isDialogOpen = ref(false)
const openDialog = item => {
  isDialogOpen.value = true
  selectedProductData.value = item
}

provide('isDialogOpen', isDialogOpen)
provide('openDialog', openDialog)
provide('selectedProductData', selectedProductData)
</script>

<style scoped></style>
