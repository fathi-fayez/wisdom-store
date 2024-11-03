<template>
  <section class="mt-16">
    <v-dialog v-model="dialog">
      <v-icon
        style="
          position: absolute;
          top: 8px;
          right: 229px;
          background-color: black;
          color: white;
          cursor: pointer;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-container>
        <v-row class="bg-white py-10">
          <v-col cols="7">
            <img :src="product.thumbnail" class="w-100" alt="" height="500" />
          </v-col>
          <v-col cols="5" class="pt-0 pl-6">
            <v-card elevation="0">
              <v-card-title
                class="px-0"
                style="
                  font-size: 19px;
                  font-weight: bold;
                  white-space: pre-wrap;
                "
                >({{ product.title }}) Sample - {{ product.category }} For
                Sale</v-card-title
              >
              <div
                class="rating-container d-flex align-center"
                style="gap: 10px"
              >
                <v-rating
                  v-model="product.rating"
                  half-increments
                  readonly
                  color="yellow-darken-2"
                  size="small"
                  density="compact"
                >
                </v-rating>
                <span class="mt-1" style="font-size: 14px"
                  >Stock: {{ product.stock }}</span
                >
              </div>
              <v-card-text class="px-0" style="font-size: 14px">
                {{ product.description }}
              </v-card-text>
              <v-card-text class="px-0 pt-0" style="font-size: 14px">
                Brand: {{ product.brand }}
              </v-card-text>
              <v-card-text class="px-0 pt-0" style="font-size: 14px">
                Availabilty: {{ product.availabilityStatus }}
              </v-card-text>
              <v-card-text class="pl-0">
                <del>${{ product.price }}</del> From
                <span class="text-h6 font-weight-bold"
                  >${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100),
                    )
                  }}</span
                >
              </v-card-text>
              <v-card-text class="pl-0"> Quantity </v-card-text>
              <div
                class="counter px-1"
                style="
                  border-radius: 30px;
                  border: 1px solid black;
                  width: fit-content;
                "
              >
                <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                  >mdi-minus</v-icon
                >
                <input
                  type=" number"
                  style="
                    border: none;
                    outline: none;
                    width: 60px;
                    font-size: 13px;
                  "
                  min="1"
                  v-model="quantity"
                  class="text-center py-3"
                />
                <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
              </div>
              <v-card-text
                >Subtotal: ${{
                  Math.ceil(
                    product.price -
                      product.price * (product.discountPercentage / 100),
                  ) * quantity
                }}</v-card-text
              >
              <v-card-actions class="mt-7 w-100 px-0">
                <v-btn
                  @click="addItem(product)"
                  variant="outlined"
                  style="
                    text-transform: none;
                    width: 75%;
                    border-radius: 30px;
                    background-color: black;
                    color: white;
                  "
                  density="compact"
                  height="45"
                >
                  Add To Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import { cartStore } from '@/stores/cart'
const store = cartStore()
const addToCart = store.addProductToCart
const addItem = item => {
  item.quantity = quantity.value
  addToCart(item)
}
const dialog = inject('isDialogOpen')
const product = inject('selectedProductData')
const quantity = ref(1)
</script>

<style></style>
