import { createSlice } from '@reduxjs/toolkit'

const initialStateValue: boolean = false

const cartVisibilitySlice = createSlice({
  name: 'cart visibility',
  initialState: { value: initialStateValue },
  reducers: {
    TOGGLE_CART_VISIBILITY: state => {
      state.value = !state.value
    },
  },
})

export default cartVisibilitySlice.reducer

export const { TOGGLE_CART_VISIBILITY } = cartVisibilitySlice.actions
