import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { TOGGLE_CART_VISIBILITY } from '../features/cart_visibility'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../features/shop'

export default function Cart({ visibility }: { visibility: boolean }) {
  const dispatch = useDispatch()
  
  const products = useSelector(({ shop }: { shop: any }) => shop.value.products)
  const cartItems = useSelector(({ shop }: { shop: any }) => shop.value.cart)

  const renderCartItems = cartItems.map((i: any) => {
    const product = products.find((p: any) => p.id === i.id)
    const subTotal = (i.quantity * product.price).toFixed(2)
    return (
      <div className='item' key={i.id}>
        <img src={product.image} alt={product.title} />
        <aside>
          <h5>{product.title.slice(0, 20)}...</h5>
          <div className='price'>${product.price}</div>
          <div className='quantity'>
            <i
              className='far fa-minus-square'
              onClick={() => {
                dispatch(REMOVE_FROM_CART(i.id))
              }}
            ></i>
            <span>{i.quantity}</span>
            <i
              className='far fa-plus-square'
              onClick={() => {
                dispatch(ADD_TO_CART(i.id))
              }}
            ></i>
          </div>
          <div className='sub-total'>
            <strong>Sub Total:</strong> ${subTotal}
          </div>
        </aside>
      </div>
    )
  })

  const totalPrice = cartItems
    .reduce((prev: any, curr: any) => {
      const price = products.find((p: any) => p.id === curr.id).price
      return prev + curr.quantity * price
    }, 0)
    .toFixed(2)

  return (
    <Wrapper visibility={visibility ? 1 : 0}>
      <i
        className='fas fa-times'
        onClick={() => dispatch(TOGGLE_CART_VISIBILITY())}
      ></i>
      <section>{renderCartItems}</section>
      <h3>Total: ${totalPrice}</h3>
      <button>Checkout</button>
    </Wrapper>
  )
}

const Wrapper = styled('aside')<{ visibility: number }>`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 30rem;
  max-width: 100%;
  padding: 1rem;
  z-index: 200;
  overflow-y: auto;
  background-color: white;
  margin-right: ${props => (props.visibility ? '0' : '-30rem')};
  transition: 0.5s ease-in-out;
  i {
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
  section {
    margin-top: 1rem;
    .item {
      height: 11rem;
      padding: 0.8rem 1.3rem;
      display: flex;
      justify-content: space-between;
      img {
      }
      aside {
        width: 15rem;
        display: grid;
        place-items: center;
        padding-block: 0.5rem;
        h5 {
          font-weight: 700;
          font-size: 1.1rem;
        }
        .price {
        }
        .quantity {
          display: flex;
          align-items: center;
          span {
            width: 1rem;
            text-align: center;
          }
          i {
            margin-inline: 1.2rem;
            font-size: 1.5rem;
            &:hover {
              color: #0080009b;
            }
            &:first-of-type:hover {
              color: #ff00009b;
            }
          }
        }
        .sub-total {
          text-align: center;
          width: 55%;
          border-top: 1px solid grey;
          padding-top: 0.8rem;
          line-height: 1.2;
          strong {
            font-weight: 600;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
  h3,
  button {
    font-size: 2rem;
    margin-top: 1.3rem;
    font-weight: 700;
  }
  h3 {
    text-align: center;
  }
  button {
    width: 100%;
    border-radius: 5px;
    color: white;
    border: none;
    background-color: black;
    padding: 0.5rem 1.5rem;
    &:hover {
      cursor: pointer;
      background-color: #000000b0;
    }
  }
`
