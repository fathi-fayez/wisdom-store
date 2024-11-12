<template>
  <section class="my-16">
    <div class="title mb-5 px-5 d-flex justify-space-between align-center">
      <h1 class="font-weight-bold">New Products</h1>
      <a class="text-black" href="#">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col v-if="!products.length" cols="7" class="mt-16">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader type="card, article, button"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="12" lg="7" class="mt-16">
          <swiper :modules="[Pagination]" :slides-per-view="3" :space-between="10" :pagination="{ clickable: true }"
            :breakpoints="breakPoints" class="pb-10">
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5" style="user-select: none">
                <img :src="showenItem[item.title]
                  ? showenItem[item.title]
                  : item.thumbnail
                  " style="width: 100% !important; height: 300px" alt="" />
                <v-card-text class="pl-0 font-weight-bold">
                  {{ `(${item.title}) ${item.description}`.length <= 60 ? `(${item.title}) ${item.description}` :
                    `(${item.title}) ${item.description}`.substring(0, 60) + "..." }}</v-card-text>
                    <v-card-text class="pl-0">
                      <del>${{ item.price }}</del> From
                      <span class="text-red text-h6 font-weight-bold">${{
                        Math.ceil(
                          item.price -
                          item.price * (item.discountPercentage / 100),
                        )
                      }}</span>
                    </v-card-text>
                    <v-btn-toggle v-model="showenItem[item.title]" mandatory>
                      <v-btn rounded="xl" size="x-small" v-for="(pic, i) in item.images" :key="i" :value="pic">
                        <img :src="pic" alt=""
                          style="width: 50px !important;border-radius: 50%; border: 1px solid black" />
                      </v-btn>
                    </v-btn-toggle>
                    <div>
                      <v-btn @click="
                        $router.push({
                          name: 'product_details',
                          params: { productId: item.id },
                        })
                        " density="compact" class="py-3 px-9 w-75" style="
                      text-transform: none;
                      border-radius: 30px;
                      display: block;
                      margin: 20px auto;
                    " variant="outlined">Choose Option</v-btn>
                    </div>
              </v-card>
            </swiper-slide>
          </swiper>
        </v-col>
        <v-col class="order-1" cols="12" lg="5"><img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination } from 'swiper'

interface Product {
  id: number
  title: string
  price: number
  description: string
  discountPercentage: number
  category: string
  images: string[]
  thumbnail: string
  stock: number
  rating: number
}

// Define the type for each breakpoint
type Breakpoint = {
  slidesPerView: number;
};

// Define the type for the entire breakPoints object
type BreakPoints = {
  [key: number]: Breakpoint; // Index signature for dynamic keys
};

const showenItem = ref<Record<string, string>>({})
const props = defineProps({
  products: {
    type: Array as () => Product[],

    required: true,
  },
})
const breakPoints = ref<BreakPoints>({
  0: { slidesPerView: 1 },
  580: { slidesPerView: 2 },
  990: { slidesPerView: 3 },
})

</script>

<style></style>
