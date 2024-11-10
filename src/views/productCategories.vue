<template>
  <section>
    <v-container fluid>
      <h1 class="text-center font-weight-bold -10">{{ route.params.title }}</h1>
      <v-row v-if="loading" class="mt-5">
        <v-col cols="3" v-for="num in 4" :key="num">
          <v-skeleton-loader type="card, article, button"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="item in categorieProducts" :key="item.id">
          <v-card elevation="0" class="pb-5" style="user-select: none">
            <div class="image-container position-relative">
              <img :src="showenItem[item.title]
                ? showenItem[item.title]
                : item.thumbnail
                " style="width: 100%; height: 300px" alt="" />
              <v-btn @click="openQuickView(item)" class="quick-view-btn" density="compact" width="120" height="40"
                variant="outlined" style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background-color: white;
                  border-radius: 30px;
                  transition: 0.2 all ease-in-out;
                  opacity: 0;
                ">Quick View</v-btn>
            </div>
            <v-card-text class="pl-0 font-weight-bold">
              {{ `(${item.title}) ${item.description}`.length <= 70 ? `(${item.title}) ${item.description}` :
                `(${item.title}) ${item.description}`.substring(0, 70) + "..." }} </v-card-text>
                <v-rating v-model="item.rating" half-increments readonly color="yellow-darken-2" size="small"
                  density="compact">
                </v-rating>
                <v-card-text class="pl-0">
                  <del>${{ item.price }}</del> From
                  <span class="text-red text-h6 font-weight-bold">${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100),
                    )
                  }}</span>
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]">
                  <v-btn rounded="xl" size="x-small" v-for="(pic, i) in item.images" :key="i" :value="pic">
                    <img :src="pic" alt="" width="30" height="30" style="border-radius: 50%; border: 1px solid black" />
                  </v-btn>
                </v-btn-toggle>
                <div>

                  <v-btn @click="
                    $router.push({
                      name: 'product_details',
                      params: { productId: item.id },
                    })
                    " class="py-3 px-9 w-75" style="
                  text-transform: none;
                  border-radius: 30px;
                  display: block;
                  margin: 20px auto;
                " variant="outlined">Choose Option</v-btn>
                </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
import { productsModule } from '@/stores/products'
import { storeToRefs } from 'pinia'
const store = productsModule()
const { categorieProducts } = storeToRefs(store)
const getProductsByCategory = store.getProductsByCategory
const route = useRoute()
const productsCategory = ref(route.params.category)
const showenItem = ref({})
const loading = ref(false)

const openDialog = inject('openDialog')

const openQuickView = item => {
  openDialog(item)
}

watch(
  () => route.params.category,
  async newCategory => {
    loading.value = true
    await getProductsByCategory(newCategory)
    loading.value = false
  },
)

onMounted(() => {
  loading.value = true
  getProductsByCategory(productsCategory.value)
  loading.value = false
})
</script>

<style scoped>
.image-container:hover .quick-view-btn {
  opacity: 1 !important;
}

img {
  width: 100% !important;
}
</style>
