import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --base-color: #0b0b0b;
    --point-color: #5078e3;
    --base-fonts: 'Montserrat', 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif;
  }

  html,
  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    color: #202020;
    font-family: var(--base-fonts);
  }

  @media screen and (max-width: 640px) {
    body,
    html {
      font-size: 3.125vw;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
  }

  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }

  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }

  button {
    background-color: transparent;
  }

  fieldset,
  img {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  ol,
  ul {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  iframe {
    overflow: hidden;
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: top;
  }

  mark {
    background-color: transparent;
  }

  i {
    font-style: normal;
  }
`;

export default GlobalStyle;

export const Section = styled.section`
  position: relative;
  max-width: 110rem;
  margin: 0 auto;
  padding-top: 14rem;

  &.wide {
    width: 100%;
    max-width: 100%;

    .cts_blk {
      width: 110rem;
      margin: 0 auto;
    }
  }

  .cts_tit {
    h2 {
      display: inline-block;
      position: relative;
      color: var(--base-color);
      font-size: 6rem;
      font-weight: 700;
      text-indent: -0.2rem;
      line-height: 6rem;

      &:after {
        content: '';
        display: block;
        position: absolute;
        right: -2rem;
        bottom: 0.5rem;
        width: 1.4rem;
        height: 1.4rem;
        background-color: var(--point-color);
        border-radius: 50%;
      }
    }

    img,
    p {
      transition: all 0.75s ease;
    }

    &.motion-effect {
      img,
      p {
        opacity: 0;
        transform: translateY(-2rem);
      }
    }
  }

  .cts_list {
    display: flex;
  }

  @media screen and (max-width: 1080px) {
    max-width: initial;
    padding-left: 3%;
    padding-right: 3%;

    &.wide {
      width: initial;
      padding-left: 0;
      padding-right: 0;

      .cts_blk {
        width: initial;
      }
    }
  }

  @media screen and (max-width: 640px) {
    padding: 6rem 1.5rem 0;

    .cts_tit {
      h2 {
        font-size: 3rem;
        line-height: 3rem;

        &:after {
          width: 0.7rem;
          height: 0.7rem;
        }
      }

      p {
        font-size: 1.3rem;
        line-height: 2rem;
        margin-top: 1.7rem;
      }
    }
  }
`;
