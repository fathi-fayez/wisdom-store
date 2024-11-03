import { defineStore } from 'pinia'

export const cartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addProductToCart(product: string[]) {
      let exists = false
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == product.id) {
          this.cartItems[i].quantity += product.quantity
          exists = true
          break
        }
      }
      if (!exists) {
        this.cartItems.push(JSON.parse(JSON.stringify(product)))
      }
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
      console.log(this.cartItems[0].quantity)
    },
    getCartItems() {
      if (localStorage.getItem('cart-items')) {
        this.cartItems = JSON.parse(localStorage.getItem('cart-items'))
      }
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == id) {
          this.cartItems.splice(i, 1)
          break
        }
      }
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
    },
  },
})
