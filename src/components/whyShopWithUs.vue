<template>
  <section class="my-16">
    <h1 class="title pt-16"><span>Why shop</span> with us?</h1>
    <v-container fluid>
      <v-row class="mt-5">
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" color="transparent">
            <img src="@/assets/images/free-shipping.png" alt="" />
            <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 900">Free Shipping On First
              Order</v-card-title>
            <v-card-text>Praesent suscipit mattis facilisis.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" color="transparent">
            <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 900">Weekly Flash Sale
            </v-card-title>
            <v-card-text>Praesent suscipit mattis facilisis.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" color="transparent">
            <img src="@/assets/images/discount.png" alt="" />
            <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 900">Anual Payment
              Discount</v-card-title>
            <v-card-text>Praesent suscipit mattis facilisis.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card elevation="0" color="transparent">
            <img src="@/assets/images/cash-back.png" alt="" />
            <v-card-title style="white-space: pre-wrap; line-height: 1.2; font-weight: 900">Cashback Reward
              Program</v-card-title>
            <v-card-text>Praesent suscipit mattis facilisis.</v-card-text>
            <a href="#">Learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
section {
  min-height: 450px;
  background-image: url('../assets/images/why-shop-with-us-banner.webp');
  background-size: cover;
  text-align: center;
  color: white;
}

.title {
  font-size: 40px;
}

span {
  color: aqua;
  font-weight: 900;
}

a {
  color: white;
  font-size: 18px;
}
</style>
