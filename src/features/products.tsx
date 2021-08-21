import { createSlice } from '@reduxjs/toolkit'

const initialStateValue: any = []

const productSlice = createSlice({
  name: 'product',
  initialState: { value: initialStateValue },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload.filter(
        (product: any) =>
          product.category === `men's clothing` ||
          product.category === `women's clothing`
      )
    },
  },
})

export default productSlice.reducer

export const { setProducts } = productSlice.actions
