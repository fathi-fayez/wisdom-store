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
              <v-skeleton-loader
                type="card, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="7" class="mt-16">
          <swiper
            :modules="[Pagination]"
            :slides-per-view="3"
            :space-between="10"
            :pagination="{ clickable: true }"
            class="pb-10"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5" style="user-select: none">
                <img
                  :src="
                    showenItem[item.title]
                      ? showenItem[item.title]
                      : item.thumbnail
                  "
                  style="width: 100%; height: 300px"
                  alt=""
                />
                <v-card-text class="pl-0 font-weight-bold">
                  ({{ item.title }})
                  {{
                    item.title + ' ' + item.description.split(' ').length <= 7
                      ? item.description
                      : item.description.split(' ').slice(0, 4).join(' ') +
                        ' ...'
                  }}
                </v-card-text>
                <v-card-text class="pl-0">
                  <del>${{ item.price }}</del> From
                  <span class="text-red text-h6 font-weight-bold"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100),
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]">
                  <v-btn
                    rounded="xl"
                    size="x-small"
                    v-for="(pic, i) in item.images"
                    :key="i"
                    :value="pic"
                  >
                    <img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="border-radius: 50%; border: 1px solid black"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div>
                  <v-btn
                    density="combact"
                    class="py-3 px-9 w-75"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      display: block;
                      margin: 20px auto;
                    "
                    variant="outlined"
                    >Choose Option</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
          </swiper>
        </v-col>
        <v-col cols="5"
          ><img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination } from 'swiper'
const showenItem = ref({})
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>

<style></style>
