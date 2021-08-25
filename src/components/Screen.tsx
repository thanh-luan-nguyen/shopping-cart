import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { TOGGLE_CART_VISIBILITY } from '../features/cart_visibility'

export default function Screen({ visibility }: { visibility: boolean }) {
  const dispatch = useDispatch()
  return (
    <Wrapper
      visibility={visibility ? 1 : 0}
      onClick={() => {
        dispatch(TOGGLE_CART_VISIBILITY())
      }}
    ></Wrapper>
  )
}

const Wrapper = styled('div')<{ visibility: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0000007a;
  z-index: 100;
  margin-left: ${props => (props.visibility ? '0' : '-100vw')};
  transition: 0.5s ease-in-out;
  media {
  }
`
