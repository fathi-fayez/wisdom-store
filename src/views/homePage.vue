<template>
  <div>
    <headerComponent />
    <theFeatures />
    <topOffers />
    <FlashDeals :products="flashDeals" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import headerComponent from "../components/headerComponent.vue"
import theFeatures from "../components/theFeatures.vue"
import topOffers from "../components/topOffers.vue"
import FlashDeals from "@/components/FlashDeals.vue";
import { productsModule } from "@/stores/products";
import { storeToRefs } from "pinia";
const store = productsModule()
const { flashDeals } = storeToRefs(store)
const getProducts = store.getProducts

onMounted(() => {
  getProducts()

})
</script>

<style></style>
