<template>
  <section>
    <h1 class="font-weight-bold text-red py-15 pl-5">Flash Deals</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img :src="showenItem[item.title] ? showenItem[item.title] : item.thumbnail"
              style="width: 100%; height: 300px;" alt="">
            <v-card-text class="pl-0">
              ({{ item.title }})
              {{ item.description.split(" ").length <= 10 ? item.description :
                item.description.split(" ").slice(0, 9).join(" ") + " ..." }} </v-card-text>
                <v-rating v-model="item.rating" half-increments readonly color="yellow-darken-2" size="small"
                  density="compact">
                </v-rating>
                <v-card-text class="pl-0">
                  <del>${{ item.price }}</del> From <span class="text-red text-h6 font-weight-bold">${{
                    Math.ceil(item.price -
                      item.price
                      *
                      (item.discountPercentage /
                        100)) }}</span>
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]">
                  <v-btn v-for="(pic, i) in item.images" :key="i" :value="pic">
                    <img :src="pic" alt="" width="30" height="30" style="border-radius: 50%; border: 1px solid black;">
                  </v-btn>
                </v-btn-toggle>
                <div>
                  <v-btn density="combact" class="py-3 px-9" style="text-transform: none; border-radius: 30px "
                    variant="outlined">Choose
                    Option</v-btn>
                </div>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const showenItem = ref({})
const props = defineProps({
  products: {
    type: Array,
    required: true

  }

})

</script>

<style></style>
