<template>
  <header>
    <v-container>
      <v-row>
        <v-col cols="6" class="landing-text">
          <h1>
            <span> Huge Saving </span> on <br />
            UHD Televisions
          </h1>
          <p>Sale up to 70% off on selected items*</p>
          <v-btn>Shop Now</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  background-image: url('@/assets/images/banner-bg.jpg');
  background-size: cover;
  height: 490px;
}

.landing-text {
  padding: 40px 0 0 100px;
  color: white;
}

.landing-text h1 {
  font-size: 50px;
  font-weight: 900;
}

.landing-text span {
  color: rgb(0, 234, 255);
  font-weight: 900;
}

.landing-text p {
  margin: 20px 0;
}

.landing-text button {
  background-color: transparent;
  padding: 30px 50px;
  margin-top: 40px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 30px;
  text-transform: none;
}
</style>
