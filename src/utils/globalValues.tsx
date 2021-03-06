import { css } from 'styled-components'

const globalValues = {
  media_query_mobile_length: '580px',
  navbar_content_max_width: '1400px',
  main_body_height: 'calc(100% - 6rem)',
  page_switch: css`
    animation: fadein 0.5s linear;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  button_hover_effect: css`
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      transition: 250ms ease;
    }
  `,
}

export default globalValues
