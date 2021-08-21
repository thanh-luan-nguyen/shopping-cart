import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import globalValues from '../utils/globalValues'

export default function NavBar() {
  return (
    <Wrapper>
      <section>
        <Link to='/' className='brand'>
          Shoptastic
        </Link>

        <ul>
          <li>
            <NavLink exact to='/' activeClassName='selected'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/products' activeClassName='selected'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/contact' activeClassName='selected'>
              Contact
            </NavLink>
          </li>
          <li>
            <div className='cart'>
              <i className='fas fa-shopping-cart'></i>
            </div>
          </li>
        </ul>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: black;
  section {
    margin-inline: auto;
    max-width: ${globalValues.navbar_content_max_width};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    a.brand {
      font-family: 'Corben', cursive;
      font-weight: 700;
      font-size: 2.5rem;
      color: #46ffd3;
      text-decoration: none;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 27rem;
      li {
        a {
          color: white;
          text-decoration: none;
          font-size: 1.4rem;
          &:hover {
            color: #9b9b9b;
            /* text-shadow: 0 0 3px white; */
          }
        }
        .cart {
          height: 2.5rem;
          aspect-ratio: 1/1;
          background-color: white;
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: 0.1s ease-in-out;
          ${globalValues.button_hover_effect}
        }
      }
    }
  }

  /* navlink activeClassName */
  .selected {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -2.3rem;
      right: 0;
      width: 100%;
      height: 0.2rem;
      background-color: white;
    }
  } /* END */

  @media (max-width: ${globalValues.media_query_mobile_length}) {
    section {
      flex-direction: column;
      padding-block: 1.3rem;
    }
    ul {
      margin-top: 1.7rem;
    }
    .selected::after {
      bottom: -1.6rem;
    }
  }
`
