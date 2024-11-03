<template>
  <div>
    <app-Layout>
      <router-view></router-view>
      <quickViewDialog />
      <v-snackbar v-model="bar">
        Item added to
        <v-btn flat color="primary" @click.native="bar = false">Close</v-btn>
      </v-snackbar>
    </app-Layout>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import appLayout from './components/global/AppLayout.vue'
import quickViewDialog from '@/components/quickViewDialog.vue'
const selectedProductData = ref({})

const isDialogOpen = ref(false)
const bar = ref(true)
const openDialog = item => {
  isDialogOpen.value = true
  // console.log(item)
  selectedProductData.value = item
}

provide('isDialogOpen', isDialogOpen)
provide('openDialog', openDialog)
provide('selectedProductData', selectedProductData)
</script>

<style scoped></style>
