<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
        voluptatibus fuga nemo expedita consequatur, illo nesciunt. Provident
        quibusdam, dignissimos vel consequuntur, laborum tempora architecto
        maxime optio enim sunt illum repudiandae?
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { inject } from 'vue'

const isDrawerOpen = inject('isDrawerOpen')
const drawer = ref<any>(isDrawerOpen)
</script>

<style></style>
