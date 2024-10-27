import { defineStore } from 'pinia'
import axios from 'axios'

export const productsModule = defineStore('productsModule', {
  state: () => ({
    flashDeals: [] as any[],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        this.flashDeals = res.data.products.slice(0, 8)
      } catch (err) {
        console.error(err)
      }
    },
  },
})
