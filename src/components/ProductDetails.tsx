import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import globalValues from '../utils/globalValues'
import Footer from './Footer'
import { ADD_TO_CART } from '../features/shop'

export default function ProductDetails() {
  const { id }: { id: string } = useParams()
  const products = useSelector(({ shop }: { shop: any }) => shop.value.products)
  const product = products.find((p: any) => p.id == id)

  const dispatch = useDispatch()

  const history = useHistory()

  return (
    <Wrapper>
      <div className='content'>
        <img src={product.image} alt={product.title} />
        <aside>
          <h3>{product.title}</h3>
          <span>${product.price}</span>
          <p>{product.description.slice(0, 250)}...</p>
          <button onClick={() => dispatch(ADD_TO_CART(product.id))}>
            <i className='fas fa-cart-plus'></i> Add to Cart
          </button>
          <button onClick={() => history.goBack()}>
            <i className='fas fa-undo'></i> Return
          </button>
        </aside>
      </div>
      <Footer color='black' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  min-height: ${globalValues.main_body_height};
  overflow: auto;
  .content {
    border-radius: 10px;
    max-width: ${globalValues.navbar_content_max_width};
    margin: 2rem auto 7rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-inline: 3rem;
    @media (max-width: 910px) {
      flex-direction: column;
      img {
        margin-bottom: 5rem;
      }
    }

    img,
    aside {
      width: 30rem;
      max-width: 100%;
    }
    aside {
      height: 40rem;
      display: flex;
      justify-content: center;
      flex-flow: column;

      h3 {
        font-size: 2.5rem;
        border-bottom: 1px black solid;
        padding-bottom: 0.5rem;
      }
      span,
      p {
        padding-top: 1.5rem;
        font-size: 1.5rem;
        &::before {
          font-weight: 600;
        }
      }
      span {
        display: inline-block;
        &::before {
          content: 'Price: ';
          font-weight: 600;
        }
      }
      p {
        line-height: 1.3;
        text-align: justify;
        &::before {
          content: 'Description: ';
          font-weight: 600;
        }
      }
      button {
        margin-top: 2.5rem;
        border: none;
        background-color: black;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem 1.5rem;
        border-radius: 30px;
        width: 100%;
        &:hover {
          ${globalValues.button_hover_effect}
        }
        &:last-of-type {
          margin-top: 1rem;
        }
        i {
          margin-right: 1rem;
        }
      }
    }
  }
  ${globalValues.page_switch}
`
