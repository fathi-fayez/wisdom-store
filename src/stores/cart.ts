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
        this.cartItems.push(product)
      }
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
      console.log(this.cartItems)
    },
  },
})
