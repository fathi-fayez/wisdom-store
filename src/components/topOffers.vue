<template>
  <section>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4"><img src="../assets/images/playstations.webp" alt="" /></v-col>
        <v-col cols="12" md="4">
          <img src="../assets/images/headset.webp" alt="" /></v-col>
        <v-col cols="12" md="4">
          <img src="../assets/images/chairs.webp" alt="" /></v-col>
        <v-col cols="6" class="">
          <img src="../assets/images/iphones.webp" alt="" /></v-col>
        <v-col cols="6" class="">
          <img src="../assets/images/laptops.webp" alt="" /></v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
section {
  background-color: var(--gray-color);
  padding: 40px 20px;
}

img {
  width: 100% !important;
  transition: 0.3s;
  cursor: pointer;
}

img:hover {
  transform: scale(1.03);
}
</style>
