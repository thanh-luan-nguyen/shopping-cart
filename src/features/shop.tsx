import { createSlice } from '@reduxjs/toolkit'

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

interface CartItem {
  id: number
  quantity: number
}

const initialStateValue = {
  products: Array<Product>(),
  cart: Array<CartItem>(),
}

const shopSlice = createSlice({
  name: 'shop',
  initialState: { value: initialStateValue },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      const products = action.payload.filter(
        (product: any) =>
          product.category === `men's clothing` ||
          product.category === `women's clothing`
      )
      state.value = { ...state.value, products: products }
    },
    ADD_TO_CART: (state, action) => {
      const id = action.payload
      if (state.value.cart.some((p: any) => p.id === id)) {
        state.value = {
          ...state.value,
          cart: state.value.cart.map(i =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      } else {
        state.value = {
          ...state.value,
          cart: [...state.value.cart, { id: id, quantity: 1 }],
        }
      }
    },

    REMOVE_FROM_CART: (state, action) => {
      const id = action.payload
      state.value = {
        ...state.value,
        cart: state.value.cart.map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        ),
      }
      const updatedItem: any = state.value.cart.find(i => i.id === id)
      if (updatedItem.quantity < 1) {
        state.value = {
          ...state.value,
          cart: state.value.cart.filter(i => i.id !== id),
        }
      }
    },
  },
})

export default shopSlice.reducer

export const { SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } = shopSlice.actions
