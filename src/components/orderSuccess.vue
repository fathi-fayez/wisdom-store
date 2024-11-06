<template>
  <div>
    <v-dialog v-model="popup" width="50%">
      <v-card class="text-center py-7">
        <div class="text-center">
          <v-icon size="75" color="green"
            style="background: white; width: 100px; height: 100px; border-radius: 50%; font-size: 76px; border: 1px solid green;">mdi-check</v-icon>
        </div>
        <v-card-title style="font-size: 30px; font-weight: bold">Order Placed Successfuly!</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, neque necessitatibus? Cupiditate
          illo ipsa aliquid aliquam dolores, similique autem iusto magni dolorem nemo qui? Praesentium repudiandae
          debitis possimus quis quod.</v-card-text>
        <v-card-actions>
          <v-btn @click="resetItems">Got It</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue';
import { cartStore } from '@/stores/cart'
import { useRouter } from 'vue-router';
const route = useRouter()
const store = cartStore()
const resetData = store.resetItems

const props = defineProps({
  popup: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:popup']);
const popup = ref(props.popup);


watch(
  () => props.popup,
  (newVal) => {
    popup.value = newVal;
  }
);
// Watch the local popup ref and emit changes to the parent
watch(popup, (newVal) => {
  emit('update:popup', newVal);
});

const resetItems = () => {
  popup.value = false
  resetData()
  route.push({ name: 'homePage' })

}
</script>

<style></style>
