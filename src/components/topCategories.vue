<template>
  <section class="my-16">
    <div class="banner">
      <h1 class="pt-10">Cyber Monday <span>Best Offers</span></h1>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="6" class="left-content">
            <h3>
              <span>save 10% more </span>on online <br />
              & in-store shopping with Superkart+
            </h3>
            <p>Limit one offer per guest. <a href="#">Get the offer</a></p>
          </v-col>
          <v-col cols="6" class="right-content">
            <h3>
              <span>change to claim gifts <br /> </span>inside every purchase
              above $199
            </h3>
            <p>Ends 7/7. Exclusions apply. <a href="#">Learn more</a></p>
          </v-col>
        </v-row>
        <v-col cols="12" class="bottom-content">
          <p>Vivamus dapibus odio metus, ac scelerisque urna condimentum id.</p>
          <a href="#">Start your order now</a>
        </v-col>
      </v-container>
    </div>
    <div class="categories">
      <div class="title mb-5 px-5 d-flex justify-center align-center">
        <h1 class="font-weight-bold flex-grow-1 text-center ml-6">
          Top Categories
        </h1>
        <a class="text-black" href="#">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center" elevation="0">
              <img :src="cat.image" alt="" />
              <v-card-text class="font-weight-bold">{{
                cat.title
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface item {
  title: string
  image: string
}

const categories = ref<item[]>([
  {
    title: 'Mobile phones',
    image:
      ' https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263',
  },
  {
    title: 'Labtops',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209',
  },
  {
    title: 'TVS',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137',
  },
  {
    title: 'PCs',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840',
  },
  {
    title: ' Audio & Video',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791',
  },
  {
    title: 'Gaming',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635',
  },
  {
    title: 'Home Appliances',
    image:
      ' https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882',
  },
  {
    title: 'Kitchen',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410',
  },
  {
    title: 'Cameras',
    image:
      'https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515',
  },
  {
    title: 'Consumables',
    image:
      ' https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964',
  },
  {
    title: 'Smart Homes',
    image:
      ' https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828',
  },
  {
    title: 'Accessories',
    image:
      ' https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367',
  },
])
</script>

<style scoped>
.banner {
  height: 350px;
  margin-bottom: 64px;
  background-image: url('../assets/images/why-shop-with-us-banner.webp');
  background-size: cover;
  text-align: center;
  color: white;
}
.banner .v-row {
  gap: 30px;
  flex-wrap: nowrap;
}
.banner h1 {
  font-weight: 900;
}
.banner h3 {
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
}
.left-content,
.right-content {
  background-color: rgb(181, 9, 255);
  height: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bottom-content {
  margin-top: 20px;
}
.bottom-content a {
  color: rgb(239, 205, 9);
}

span {
  color: aqua;
  font-weight: 900;
}
</style>
