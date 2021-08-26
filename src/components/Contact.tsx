import styled from 'styled-components'
import globalValues from '../utils/globalValues'
import Footer from './Footer'

export default function Contact() {
  return (
    <ContactWrapper>
      <div className='content'>
        <div className='title'>
          <h1>Say Hello! and keep in touch</h1>
          <p>
            Want to make an inquiry? Drop us a message. We love to answer
            quickly.
          </p>
        </div>
        <main>
          <form>
            <div className='name'>
              <div className='first'>
                <label htmlFor='first'>First Name</label>
                <input type='text' id='first' />
              </div>
              <div className='last'>
                <label htmlFor='last'>Last Name</label>
                <input type='text' id='last' />
              </div>
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className='message'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' />
            </div>
            <button>Send Message</button>
          </form>
          <div className='details'>
            <div className='info'>
              <h3>Contact Information</h3>
              <div className='address'>
                <i className='fas fa-map-marker-alt'></i>
                <span>198 West 21th Street, Suite 721 New York NY 10016</span>
              </div>
              <div className='email'>
                <i className='fas fa-envelope'></i>
                <span> shoptastic@domain.com</span>
              </div>
              <div className='phone'>
                <i className='fas fa-phone-alt'></i>
                <span>+123 456 7890</span>
              </div>
            </div>
            <iframe
              title='google map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106479.69321901668!2d130.25778618451008!3d33.48861569491242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354194b90b65d01b%3A0x2067d40129c9339!2z44Om44OL44Kv44OtIOacqOOBruiRieODouODvOODq-api-acrOW6lw!5e0!3m2!1sja!2sjp!4v1629985640482!5m2!1sja!2sjp'
              width='600'
              height='450'
              loading='lazy'
            ></iframe>
          </div>
        </main>
      </div>
      <Footer color='black' />
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  position: relative;
  background-color: #f9f9f9;
  min-height: ${globalValues.main_body_height};
  overflow: auto;
  .content {
    padding-top: 2rem;
    margin-bottom: 4rem;
    max-width: ${globalValues.navbar_content_max_width};
    margin-inline: auto;
    border: 1px red solid;
    .title {
      border: 1px green solid;
      text-align: center;
      h1 {
        font-size: 2rem;
        font-weight: 600;
      }
      p {
        color: #8899a8;
      }
    }
  }
`
