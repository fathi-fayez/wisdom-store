import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'

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
      component: () => import('@/views/productCategories.vue'),
    },
    {
      path: '/products/product-details/:productId',
      name: 'product_details',
      component: () => import('@/views/productDetails.vue'),
    },
    {
      path: '/cart-page',
      name: 'cart_Page',
      component: () => import('@/views/cartPage.vue'),
    },
    {
      path: '/checkOut',
      name: 'check_out',
      component: () => import('@/views/checkOut.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
