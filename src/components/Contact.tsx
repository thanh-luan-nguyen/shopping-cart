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
            <div className='input'>
              <div>
                <label htmlFor='first'>First Name</label>
                <input type='text' id='first' />
              </div>
              <div>
                <label htmlFor='last'>Last Name</label>
                <input type='text' id='last' />
              </div>
            </div>
            <div className='input'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className='input'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' />
            </div>
            <button>Send Message</button>
          </form>
          <aside>
            <h3>Contact Information</h3>
            <div className='info'>
              <i className='fas fa-map-marker-alt'></i>
              <span>198 West 21th Street, Suite 721 New York NY 10016</span>
            </div>
            <div className='info'>
              <i className='fas fa-envelope'></i>
              <span>shoptastic@domain.com</span>
            </div>
            <div className='info'>
              <i className='fas fa-phone-alt'></i>
              <span>+123 456 7890</span>
            </div>
            <iframe
              title='google map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106479.69321901668!2d130.25778618451008!3d33.48861569491242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354194b90b65d01b%3A0x2067d40129c9339!2z44Om44OL44Kv44OtIOacqOOBruiRieODouODvOODq-api-acrOW6lw!5e0!3m2!1sja!2sjp!4v1629985640482!5m2!1sja!2sjp'
              width='600'
              height='450'
              loading='lazy'
            ></iframe>
          </aside>
        </main>
      </div>
      <Footer color='black' />
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  position: relative;
  overflow: auto;
  background-color: #f9f9f9;
  min-height: ${globalValues.main_body_height};
  .content {
    margin-bottom: 4rem;
    padding-top: 2rem;
    max-width: ${globalValues.navbar_content_max_width};
    margin-inline: auto;
    .title {
      text-align: center;
      padding: 1rem;
      h1 {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }
      p {
        font-size: 1.5rem;
        color: #8899a8;
      }
    }
    main {
      display: flex;
      justify-content: space-around;
      margin-top: 3rem;
      font-size: 1.3rem;
      @media (max-width: ${globalValues.media_query_mobile_length}) {
        flex-flow: column;
        align-items: center;
      }

      form {
        width: 50%;
        margin-bottom: 4rem;
        @media (max-width: ${globalValues.media_query_mobile_length}) {
          width: 90%;
        }
        .input {
          padding-top: 1.5rem;
          &:first-of-type {
            display: flex;
            justify-content: space-between;
            & > * {
              width: 47%;
            }
          }
        }
        & {
          label {
            display: block;
            margin-bottom: 1rem;
            font-weight: 200;
          }
          input,
          textarea {
            width: 100%;
            border: none;
            outline: none;
            font-size: inherit;
            padding: 0.7rem;
            border-radius: 5px;
            &:focus {
              border: 1px solid #c7ffc7;
            }
          }
          textarea {
            height: 10rem;
          }
        }
        button {
          font-size: inherit;
          color: white;
          margin-top: 2.5rem;
          background-color: #b2d430;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          ${globalValues.button_hover_effect}
          @media (max-width: ${globalValues.media_query_mobile_length}) {
            width: 100%;
          }
        }
      }
      aside {
        width: 40%;
        padding-top: 1.5rem;
        @media (max-width: ${globalValues.media_query_mobile_length}) {
          width: 90%;
        }
        h3 {
          font-size: 1.7rem;
        }
        .info {
          font-weight: 200;
          display: flex;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          &:first-of-type {
            margin-top: 1.5rem;
          }
          i {
            width: 4rem;
            display: grid;
            place-items: center;
          }
          span {
            width: 20rem;
            @media (max-width: ${globalValues.media_query_mobile_length}) {
              width: unset;
            }
          }
        }
        iframe {
          height: 20rem;
          width: 100%;
        }
      }
    }
  }
`
