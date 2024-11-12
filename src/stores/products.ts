import { defineStore } from 'pinia'
import axios from 'axios'

// Define interfaces for products and categories
interface Product {
  id: number
  title: string
  price: number
  description: string
  discountPercentage: number
  category: string
  images: string[]
  thumbnail: string
  availabilityStatus: string
  stock: number
  rating: number
}

interface Category {
  title: string
  route: string
}

// Define the shape of your state
interface ProductsState {
  flashDeals: Product[]
  filteredProducts: Product[]
  groceriesProducts: Product[]
  categories: Category[]
  categorieProducts: Product[]
  singleProduct: Product | null
}

export const productsModule = defineStore('productsModule', {
  state: (): ProductsState => ({
    flashDeals: [],
    filteredProducts: [],
    groceriesProducts: [],
    categories: [
      { title: 'Beauty', route: 'beauty' },
      { title: 'Fragrances', route: 'fragrances' },
      { title: 'Furniture', route: 'furniture' },
      { title: 'Groceries', route: 'groceries' },
      { title: 'Home Decoration', route: 'home-decoration' },
      { title: 'Kitchen Accessories', route: 'kitchen-accessories' },
      { title: 'Mobile Accessories', route: 'mobile-accessories' },
    ],
    categorieProducts: [],
    singleProduct: null,
  }),

  actions: {
    async getProducts() {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        this.flashDeals = res.data.products.slice(0, 8) as Product[]
        this.filteredProducts = res.data.products.filter(
          (el: Product) => el.category === 'furniture',
        )
        this.groceriesProducts = res.data.products.filter(
          (el: Product) => el.category === 'groceries',
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
        this.categorieProducts = res.data.products as Product[]
      } catch (err) {
        console.error(err)
      }
    },

    async getSingleProduct(productId: any) {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        )
        this.singleProduct = res.data as Product
      } catch (err) {
        console.error(err)
      }
    },
  },
})
