import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'
import categoryPage from '@/views/productsCategory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
    },
    {
      path: '/products/:category/:title',
      name: 'categoryPage',
      component: categoryPage,
    },
  ],
})

export default router
