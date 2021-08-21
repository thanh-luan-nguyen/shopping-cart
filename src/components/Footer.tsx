import styled from 'styled-components'

export default function Footer({ color }: { color: string }) {
  return (
    <Wrapper color={color}>
      &copy; made by n.t.luan
      <a
        target='_blank'
        href='https://github.com/thanh-luan-nguyen/shopping-cart'
        rel='noreferrer'
      >
        <i className='fab fa-github text'></i>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-block: 0.5rem;
  text-align: center;
  color: ${props => props.color};
  font-weight: 800;
  i {
    color: ${props => props.color};
    transition: all ease 0.3s;
    margin-left: 0.4rem;
    &:hover {
      transform: translateY(-0.1rem);
    }
  }
`
