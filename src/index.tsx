import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/reset.css'
import './styles/index/index.css'
import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './features/shop'
import cartVisibilityReducer from './features/cart_visibility'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cartVisibility: cartVisibilityReducer,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
