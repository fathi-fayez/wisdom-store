<template>
  <section class="mt-16">
    <h1 class="ms-4 mb-5 font-weight-bold">Product Details</h1>
    <v-container>
      <v-row>
        <v-col cols="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            alt=""
            height="500"
          />
          <v-tabs center-active height="220" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img :src="img" width="100" height="200" alt="" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-6">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div class="rating-container d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="small"
                density="compact"
              >
              </v-rating>
              <span class="mt-1" style="font-size: 14px"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="font-size: 14px">
              {{ singleProduct.description }}
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="font-size: 14px">
              Brand: {{ singleProduct.brand }}
            </v-card-text>
            <v-card-text class="px-0 pt-0" style="font-size: 14px">
              Availabilty: {{ singleProduct.availabilityStatus }}
            </v-card-text>
            <v-card-text class="pl-0">
              <del>${{ singleProduct.price }}</del> From
              <span class="text-h6 font-weight-bold"
                >${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100),
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
            <v-card-actions class="mt-7 w-100 px-0">
              <v-btn
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
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { productsModule } from '@/stores/products'
import { storeToRefs } from 'pinia'
const route = useRoute()
const store = productsModule()
const { singleProduct } = storeToRefs(store)
const tab = ref('')
const quantity = ref(1)
const getSingleProduct = store.getSingleProduct
const productId = ref(route.params.productId)

watch(
  () => route.params.productId,
  async newProductId => {
    // loading.value = true
    await getSingleProduct(newProductId)
    // loading.value = false
  },
)

onMounted(async () => {
  // loading.value = true
  await getSingleProduct(productId.value)
  // loading.value = false
})
</script>

<style></style>
