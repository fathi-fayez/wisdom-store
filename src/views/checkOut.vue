<template>
  <section>
    <v-container fluid>
      <v-row>
        <v-col cols="7"></v-col>
        <v-col cols="5">
          <v-card color="gray-lighten-3" elevation="0">
            <v-card v-for="item in cartItems" :key="item.id">
              <img :src="item.thumbnail" alt="">
              <div class="title-container">
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>{{ item.category }}</v-card-text>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import { cartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
const store = cartStore()
const { cartItems } = storeToRefs(store)
</script>

<style></style>
