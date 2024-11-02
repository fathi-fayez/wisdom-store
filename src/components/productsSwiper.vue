<template>
  <section class="my-16">
    <div class="title mb-5 px-5 d-flex justify-space-between align-center">
      <h1 :class="[`font-weight-bold text-${titleColor}`]">{{ title }}</h1>
      <a class="text-black" href="#">Shop All</a>
    </div>
    <v-cotainer fluid v-if="!products.length">
      <v-col cols="12" class="mt-16">
        <v-row>
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="card, article, button"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-cotainer>
    <swiper
      :modules="[Pagination, Navigation, Autoplay]"
      :slides-per-view="4"
      :space-between="10"
      :pagination="{ clickable: true }"
      navigation
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="pb-10"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5" style="user-select: none">
          <div class="image-container position-relative">
            <img
              :src="
                showenItem[item.title] ? showenItem[item.title] : item.thumbnail
              "
              style="width: 100%; height: 300px"
              alt=""
            />
            <v-btn
              @click="openQuickView(item)"
              class="quick-view-btn"
              density="compact"
              width="80"
              height="40"
              variant="outlined"
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
                border-radius: 30px;
                transition: 0.2 all ease-in-out;
                opacity: 0;
              "
              >Quick View</v-btn
            >
          </div>
          <v-card-text class="pl-0 font-weight-bold">
            ({{ item.title }})
            {{
              item.description.split(' ').length <= 10
                ? item.description
                : item.description.split(' ').slice(0, 9).join(' ') + ' ...'
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="small"
            density="compact"
          >
          </v-rating>
          <v-card-text class="pl-0">
            <del>${{ item.price }}</del> From
            <span class="text-red text-h6 font-weight-bold"
              >${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100),
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
              @click="
                $router.push({
                  name: 'product_details',
                  params: { productId: item.id },
                })
              "
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
  </section>
</template>

<script setup>
import { ref, defineProps, inject } from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination, Navigation, Autoplay } from 'swiper'

const showenItem = ref({})
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
  },
  titleColor: {
    type: String,
  },
})

const openDialog = inject('openDialog')

const openQuickView = item => {
  openDialog(item)
}
</script>

<style scoped>
/* Use ::v-deep to target Swiper's internal classes */
::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  color: #000000;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.3s;
  position: absolute;
  top: 250px;
}

::v-deep .swiper-button-next::after,
::v-deep .swiper-button-prev::after {
  font-size: 25px;
}

::v-deep .swiper-button-next:hover,
::v-deep .swiper-button-prev:hover {
  opacity: 1;
}

::v-deep .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}

.image-container:hover .quick-view-btn {
  opacity: 1 !important;
}
</style>
