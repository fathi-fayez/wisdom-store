import { defineStore } from 'pinia'
import axios from 'axios'

export const productsModule = defineStore('productsModule', {
  state: () => ({
    flashDeals: [] as any[],
    filteredProducts: [] as any[],
    groceriesProducts: [] as any[],
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
  },
})
