import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import { /* useState, */ useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from './features/products'
import styled from 'styled-components'

export default function App() {
  // const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then(({ data }) => dispatch(setProducts(data)))
      .catch(err => console.dir(err))
    // .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <AppWrapper>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/shopping-cart/' component={Home} />
          <Route exact path='/shopping-cart/products' component={Products} />
          <Route exact path='/shopping-cart/contact' component={Contact} />
        </Switch>
      </Router>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  height: 100vh;
`
