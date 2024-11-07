<template>
  <v-app-bar>
    <v-container fluid>
      <v-row class="align-center">
        <v-col cols="4">
          <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-col>
        <v-col cols="4">
          <img style="width: 150px;" src="@/assets/images/footer-logo.webp" alt="" />
        </v-col>
        <v-col cols="4" class="text-end">
          <svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"
            role="presentation" class="icon icon-account me-sm-7">
            <path
              d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z">
            </path>
          </svg>
          <svg @click="openCart" style="cursor: pointer;" width="30" viewBox="0 0 30 30" class="icon icon-cart"
            enable-background="new 0 0 30 30">
            <g>
              <g>
                <path
                  d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z">
                </path>
              </g>
            </g>
          </svg>
          <v-badge v-if="cartItems.length" location="right top" color="black" offset-y="-5"
            :content="cartItems.length"></v-badge>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { cartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
const shoppingCartStore = cartStore()
const { cartItems } = storeToRefs(shoppingCartStore)
const toggleMenu = inject('toggleMenu')
const toggleDrawer = inject('toggleDrawer')

const openMenu = () => {
  toggleMenu()
}
const openCart = () => {
  toggleDrawer()
}
</script>

<style>
@media (max-width: 600px) {
  img {
    width: 130px !important
  }
}
</style>
