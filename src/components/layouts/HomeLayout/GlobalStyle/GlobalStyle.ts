import styled, { createGlobalStyle } from "styled-components";

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
    color: #000;
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
    color: #000;
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
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;

  .title {
    display: block;
    width: 1000px;
    margin: 0 auto;
    font-size: 2rem;
  }

  .swiper_prodlist {
    width: 1000px;
    margin: 25px auto 0;
    letter-spacing: -0.25px;

    p {
      display: -webkit-box;
      overflow: hidden;
      font-family: "Noto Sans" sans-serif;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: keep-all;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      margin: 0;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #f3f4f7;
      box-sizing: border-box;

      img {
        width: 90%;
        height: 90%;
        object-fit: contain;
      }

      &.img_sq {
        height: 250px;
      }
    }

    .name {
      height: 48px;
      margin-top: 5px;
      font-size: 1.6rem;
      font-weight: 500;
    }

    .desc {
      height: 43px;
      margin-top: 10px;
      font-size: 1.4rem;
      font-weight: 300;
    }
  }

  .swiper_btnlist {
    .swiper-slide {
      display: flex;
    }
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 3rem;
    box-sizing: border-box;

    .title {
      width: 100%;
      padding: 0 1.5rem;
      box-sizing: border-box;
      font-size: 1.6rem;
      text-align: center;
    }

    .swiper_prodlist {
      width: calc(100% - 3rem);
      margin: 1rem 1.5rem 0;

      figure {
        height: 20rem;

        &.img_sq {
          height: 15rem;
        }
      }

      .desc {
        height: 3.5rem;
        margin-top: 1rem;
        font-size: 1.2rem;
      }

      .name {
        height: 4rem;
        margin-top: 0.5rem;
        font-size: 1.4rem;
      }
    }
  }
`;
