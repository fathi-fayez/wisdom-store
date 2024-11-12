import { defineStore } from 'pinia'

// Define interfaces for products and cart items

interface CartItem {
  id: number
  title: string
  price: number
  description: string
  discountPercentage: number
  category: string
  quantity: number
  images: string[]
  thumbnail: string
  stock: number
  rating: number
}




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

              this.cartItems[i].quantity = (this.cartItems[i].quantity || 0) + (product.quantity || 1)
          exists = true
          break
        }
      }
      if (!exists) {
        this.cartItems.push({ ...product })
      }
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
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
