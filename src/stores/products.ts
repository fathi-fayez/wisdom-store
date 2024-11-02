import { defineStore } from 'pinia'
import axios from 'axios'

export const productsModule = defineStore('productsModule', {
  state: () => ({
    flashDeals: [] as any[],
    filteredProducts: [] as any[],
    groceriesProducts: [] as any[],
    categories: [
      { title: 'Beauty', route: 'beauty' },
      { title: 'Fragrances', route: 'fragrances' },
      { title: 'Furniture', route: 'furniture' },
      { title: 'Groceries', route: 'groceries' },
      { title: 'Home Decoration', route: 'home-decoration' },
      { title: 'Kitchen Accessories', route: 'kitchen-accessories' },
      { title: 'Mobile Accessories', route: 'mobile-accessories' },
    ],
    categorieProducts: [] as any[],
    singleProduct: '',
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        this.flashDeals = res.data.products.slice(0, 8)
        this.filteredProducts = res.data.products.filter(
          (el: any) => el.category === 'furniture',
        )
        this.groceriesProducts = res.data.products.filter(
          (el: any) => el.category === 'groceries',
        )
      } catch (err) {
        console.error(err)
      }
    },

    async getProductsByCategory(category: string) {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}?limit=20`,
        )
        this.categorieProducts = res.data.products
      } catch (err) {
        console.error(err)
      }
    },
    async getSingleProduct(productId: any) {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        )
        this.singleProduct = res.data
      } catch (err) {
        console.error(err)
      }
    },
  },
})
