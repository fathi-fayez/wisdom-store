<template>
  <div>
    <headerComponent />
    <theFeatures />
    <topOffers />
    <productComponent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="blue"
    />
    <topCategories />
    <newProducts :products="filteredProducts" />
    <qualityFeatures />
    <productComponent
      :products="groceriesProducts"
      title="Groceries Products"
      titleColor="black"
    />
    <whyShopWithUs />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import headerComponent from '../components/headerComponent.vue'
import theFeatures from '../components/theFeatures.vue'
import topOffers from '../components/topOffers.vue'
import productComponent from '@/components/productsSwiper.vue'
import topCategories from '@/components/topCategories.vue'
import newProducts from '@/components/newProducts.vue'
import qualityFeatures from '@/components/qualityFeatures.vue'
import whyShopWithUs from '@/components/whyShopWithUs.vue'

import { productsModule } from '@/stores/products'
import { storeToRefs } from 'pinia'
const store = productsModule()
const { flashDeals, filteredProducts, groceriesProducts } = storeToRefs(store)
const getProducts = store.getProducts

onMounted(() => {
  getProducts()
})
</script>

<style></style>
