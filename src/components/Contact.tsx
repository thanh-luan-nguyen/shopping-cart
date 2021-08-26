import styled from 'styled-components'
import globalValues from '../utils/globalValues'

export default function Contact() {
  return (
    <ContactWrapper>
      <div className='content'>
        <h1>Say Hello! and keep in touch</h1>
        
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106479.69321901668!2d130.25778618451008!3d33.48861569491242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354194b90b65d01b%3A0x2067d40129c9339!2z44Om44OL44Kv44OtIOacqOOBruiRieODouODvOODq-api-acrOW6lw!5e0!3m2!1sja!2sjp!4v1629985640482!5m2!1sja!2sjp'
          width='600'
          height='450'
          loading='lazy'
        ></iframe>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  background-color: #f9f9f9;
  min-height: ${globalValues.main_body_height};
  /* overflow: auto; */
  .content {
    padding-top: 2rem;
    margin-bottom: 4rem;
  }
`
