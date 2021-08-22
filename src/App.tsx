import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SET_PRODUCTS } from './features/shop'
import styled from 'styled-components'
import Cart from './components/Cart'
import Screen from './components/Screen'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(({ data }) => dispatch(SET_PRODUCTS(data)))
      .catch(err => console.dir(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const visibility: boolean = useSelector(
    ({ cartVisibility }: { cartVisibility: any }) => cartVisibility.value
  )
  return (
    <AppWrapper>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/shopping-cart/' component={Home} />
          <Route exact path='/shopping-cart/products' component={Products} />
          <Route exact path='/shopping-cart/contact' component={Contact} />
        </Switch>
        <Cart visibility={visibility} />
        <Screen visibility={visibility} />
      </Router>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`
