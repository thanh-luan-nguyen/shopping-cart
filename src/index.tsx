import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/reset.css'
import './styles/index/index.css'
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/products'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    products: productsReducer,
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
