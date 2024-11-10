import { defineStore } from 'pinia'

// Define interfaces for products and cart items
interface Product {
  id: number
  title: string
  price: number
  quantity?: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface CartItem extends Product {}

// Define the shape of the state
interface CartState {
  cartItems: CartItem[]
  snackbar: boolean
}

export const cartStore = defineStore('cartStore', {
  state: (): CartState => ({
    cartItems: [],
    snackbar: false,
  }),

  actions: {
    addProductToCart(product: CartItem) {
      let exists = false
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === product.id) {
          this.cartItems[i].quantity += product.quantity
          exists = true
          break
        }
      }
      if (!exists) {
        this.cartItems.push({ ...product })
      }
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
      console.log(this.cartItems[0]?.quantity)
    },

    getCartItems() {
      const storedItems = localStorage.getItem('cart-items')
      if (storedItems) {
        this.cartItems = JSON.parse(storedItems)
      }
    },

    deleteItem(id: number) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
    },

    openSnackbar() {
      this.snackbar = true
      setTimeout(() => {
        this.snackbar = false
      }, 3000)
    },

    setToLocalStorage() {
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
    },

    resetItems() {
      this.cartItems = []
      localStorage.removeItem('cart-items')
    },
  },
})
