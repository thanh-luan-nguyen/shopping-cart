import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_TO_CART } from '../features/shop'
import styled from 'styled-components'
import globalValues from '../utils/globalValues'
import Footer from './Footer'

export default function Products() {
  const dispatch = useDispatch()

  /* query */
  const page = globalValues.useQuery().get('page')

  const products = useSelector(({ shop }: { shop: any }) => shop.value.products)
  console.log(products)

  const renderProducts = products
    .filter((p: any, i: number) => (page ? i > 5 : i <= 5))
    .map((p: any) => (
      <div className='card' key={p.id}>
        <div className='image'>
          <img src={p.image} alt={p.title.slice(0, 10)} />
        </div>
        <div className='info'>
          <figcaption>
            <Link to={`/shopping-cart/products/${p.id}`}>{p.title}</Link>
            <span>${p.price}</span>
          </figcaption>

          <div>
            <Link to={`/shopping-cart/products/${p.id}`}>
              <button>
                <i className='fas fa-info-circle'></i> View details
              </button>
            </Link>
            <button onClick={() => dispatch(ADD_TO_CART(p.id))}>
              <i className='fas fa-cart-plus'></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    ))

  return (
    <Wrapper>
      <div className='content'>
        <div className='products'>{renderProducts}</div>
        <div className='pagination'>
          <Link to='/shopping-cart/products'>
            <button className={`${page === null && 'active'}`}>1</button>
          </Link>
          <Link to='/shopping-cart/products?page=2'>
            <button className={`${page === '2' && 'active'}`}>2</button>
          </Link>
        </div>
      </div>
      <Footer color='black' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  min-height: ${globalValues.main_body_height};
  overflow: auto;
  background-color: #f9f9f9;
  .content {
    padding-top: 2rem;
    margin-bottom: 4rem;
    .products {
      max-width: ${globalValues.navbar_content_max_width};
      margin-inline: auto;
      padding-inline: 3rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 3rem;
      @media (max-width: 880px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 490px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (max-width: ${globalValues.media_query_mobile_length}) {
        row-gap: 1rem;
      }
      .card {
        background-color: white;
        margin-inline: auto;
        border-radius: 10px;
        border: #c3c3c3 1px solid;
        width: 20rem;
        height: 27rem;
        @media (max-width: ${globalValues.media_query_mobile_length}) {
          row-gap: 1rem;
          width: 17rem;
        }
        @media (max-width: 490px) {
          width: 21rem;
        }
        .image {
          height: 15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #c3c3c3;
          transition: 0.5s ease;
          &:hover {
            opacity: 0.7;
            cursor: pointer;
            img {
              transform: scale(1.1);
            }
          }
          img {
            transition: inherit;
            height: 80%;
          }
        }
        .info {
          padding: 1.3rem 1rem 1rem;
          figcaption {
            height: 6rem;
            a {
              text-decoration: none;
              color: black;
              font-weight: 700;
              font-size: 1.1rem;
              line-height: 1.2;
              &:hover {
                text-decoration: underline;
              }
            }
            span {
              font-size: 1rem;
              margin-top: 0.5rem;
              display: block;
              font-weight: 500;
            }
          }

          div {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            button {
              cursor: pointer;
              background-color: black;
              color: white;
              font-weight: 600;
              font-size: inherit;
              border: none;
              border-radius: 5px;
              padding: 0.8rem 0.9rem;
              @media (max-width: ${globalValues.media_query_mobile_length}) {
                padding: 0.8rem 0.5rem;
                font-weight: 500;
              }
              @media (max-width: 490px) {
                padding: 0.9rem 1.3rem;
              }
              &:hover {
                cursor: pointer;
                background-color: #000000b0;
              }
              &:last-of-type {
                font-size: 0.9rem;
              }
              i {
                margin-right: 0.3rem;
              }
            }
          }
        }
      }
    }
    .pagination {
      margin-top: 3rem;
      width: 12rem;
      margin-inline: auto;
      display: flex;
      justify-content: space-evenly;
      a {
        button {
          padding: 0.8rem 1.5rem;
          border: 1px solid #c3c3c3;
          &:hover {
            cursor: pointer;
            background-color: #c3c3c3;
          }
        }
      }
    }
  }

  /* active link button */
  .active {
    border: 1px orange solid !important;
    background-color: white !important;
    color: orange !important;
  }

  ${globalValues.page_switch}
`
