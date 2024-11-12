<template>
  <section>
    <v-container fluid>
      <div class="empty-cart-title text-center" v-if="!cartItems.length">
        <h1 style=" font-size: 50px; color: orange; height: 500px;" class="d-flex align-center justify-center">
          <span>Your Cart Is
            Empty
          </span><span><svg width="100" fill="orange" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path class="path1"
                d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
              </path>
              <path class="path2"
                d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
              </path>
              <path class="path3"
                d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z">
              </path>
            </svg></span>
        </h1>
        <v-btn @click="route.push({ name: 'homePage' })" style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199)
            " variant="outlined" density="compact" height="45" class="w-25">Go To Shop</v-btn>
      </div>



      <v-row v-else>
        <v-col cols="12">
          <v-breadcrumbs :items="['Home', 'Your cart']">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12">
          <v-card-title class="px-0 pr-2 d-flex justify-space-between align-center w-100"
            style="font-size: 35px; font-weight: bold">Your Cart
          </v-card-title>
          <div class="bar-container mt-4 position-relative" v-if="cartItems.length">
            <svg class="icon-shipping-truck" viewBox="0 0 40.55 24" width="30" fill="#F44336" :style="`position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${parseInt((calcTotal / 10000) * 100) <= 100
                ? parseInt((calcTotal / 10000) * 100)
                : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;
          `">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z">
                  </path>
                  <path class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z">
                  </path>
                  <path class="wheel" fill="white" d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z">
                  </path>
                  <path class="wheel" fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z">
                  </path>
                </g>
              </g>
            </svg>
            <v-progress-linear color="red" height="10" :model-value="parseInt((calcTotal / 10000) * 100) <= 100
              ? parseInt((calcTotal / 10000) * 100)
              : 100
              " striped>
            </v-progress-linear>
          </div>
          <v-card-text v-if="cartItems.length && 10000 - calcTotal > 0" class="px-0 pt-2" style="color: #6f6f6f">Only {{
            10000 -
            calcTotal }} away from Free Shipping
          </v-card-text>
        </v-col>
        <v-col cols="12" md="8">
          <v-table class="w-100">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%;">
                  <v-row class="align-center">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" alt="" />
                    </v-col>
                    <v-col cols="8">
                      <v-card-title class="px-0" style="white-space: pre-wrap; font-size: 14px; line-height: 1.2">{{
                        item.title
                      }} Sample - {{ item.category }}</v-card-title>
                      <v-card-text class="px-0" style="color: #6f6f6f">
                        Category: {{ item.category }}
                      </v-card-text>

                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%;"><v-card-text class="px-0">
                    ${{
                      Math.ceil(
                        item.price - item.price * (item.discountPercentage / 100),
                      )
                    }}
                  </v-card-text> </td>
                <td style="width: 15%;">
                  <div class="counter px-1" style="
                    border-radius: 30px;
                    border: 1px solid black;
                    width: fit-content;
                  ">
                    <v-icon size="22" @click="item.quantity > 1 ? item.quantity-- : false">mdi-minus</v-icon>
                    <input type=" number" style="
                      border: none;
                      outline: none;
                      width: 60px;
                      font-size: 12px;
                    " min="1" v-model="item.quantity" class="text-center py-3" />
                    <v-icon size="22" @click="item.quantity++">mdi-plus</v-icon>
                  </div>
                </td>
                <td style="width: 15%;">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100),
                    ) * item.quantity
                  }}
                </td>
                <td>

                  <v-icon @click="deleteItem(item.id)">mdi-close</v-icon>
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-divider length="100%" color="black"></v-divider>
          <v-card-text v-if="cartItems.length" class="px-0 pt-2 d-flex align-center ga-5" style="color: #6f6f6f">
            <span><svg width="30" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 179.94 179.96" class="icon icon-shield-check">
                <path d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"></path>
                <polygon class="cls-1" fill="white"
                  points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57">
                </polygon>
              </svg></span>
            <span> Secure Shopping
              Guarantee</span>
          </v-card-text>
          <img src="@/assets/images/cart-page-cards.webp" alt="" width="300">
        </v-col>
        <v-col cols="12" md="4" class="mt-8 mt-md-0">
          <v-card elevation="0">
            <v-card-title style="font-weight: bold;">
              Order SUMMARY
            </v-card-title>

            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex align-center justify-space-between">
              <span>Subtotal</span>
              <span class="font-weight-bold">$ {{ calcTotal }}</span>
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text>
              Get shipping estimate
            </v-card-text>
            <select name="" id="" class="w-100 pa-3"
              style="border: 1px solid #6f6f6f; border-radius: 30px; font-size: 14px;">
              <option :value="country" v-for=" country in countries" :key="country">{{ country }}</option>
            </select>
            <div class="state mt-4">
              <select name="" id="" class="pa-3"
                style="border: 1px solid #6f6f6f; border-radius: 30px; font-size: 14px; width: 55%; margin-right: 1%">
                <option :value="country" v-for=" country in countries" :key="country">{{ country }}</option>
              </select>
              <input class="pa-3" type="text"
                style="border: 1px solid #6f6f6f; border-radius: 30px; font-size: 14px;  width: 43%; margin-left: 1%">
            </div>
            <v-card-actions class="my-5">
              <v-btn style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            " variant="elevated" density="compact" height="45" class="w-100" color="blue" elevation="0">Calculate
                Shipping</v-btn>
            </v-card-actions>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text class="d-flex align-center justify-space-between">
              <span>Total</span>
              <span class="font-weight-bold">$ {{ calcTotal }}</span>
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-actions class="my-5 flex-column">
              <v-btn @click="toCheckout" style="
              text-transform: none;
              border-radius: 0;
              margin-bottom: 10px;
              " variant="outlined" density="compact" height="45" class="w-100" elevation="0">Proced To
                Check
                Out</v-btn>
              <v-btn @click="route.push({ name: 'homePage' })" style="
              text-transform: none;
              border-radius: 0;


              " variant="outlined" density="compact" height="45" class="w-100" elevation="0">Continue Shopping</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { cartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const route = useRouter()
const store = cartStore()
const getCartItems = store.getCartItems
const deleteItem = store.deleteItem
const setToLocalStorage = store.setToLocalStorage
const { cartItems } = storeToRefs(store)
const countries = ref(["Egypt", "Palestine", "Lebanon", "Seria", "Jordan"])


const calcTotal = computed(() => {
  let total = 0
  cartItems.value.forEach(product => {
    const discountedPrice =
      product.price * (1 - product.discountPercentage / 100)
    total += Math.ceil(discountedPrice * product.quantity)
  })
  return total
})

const toCheckout = () => {
  setToLocalStorage()
  route.push({ name: 'check_out' })

}

onMounted(() => {
  getCartItems()
})
</script>

<style>
.v-table__wrapper {
  height: 500px;
}
</style>
