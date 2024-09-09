import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  min-width: 1200px;
  background-color: #f7f8fc;
  padding-top: 20px;
  overflow: hidden;

  .footer_wrap {
    width: 1200px;
    margin: 0 auto;

    * {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.7rem;
    }

    > ul {
      display: flex;
      justify-content: space-between;

      a {
        display: block;
        padding: 10px 20px;
        color: #000;
        font-size: 1.6rem;
      }

      > li {
        > ul {
          a {
            font-size: 1.4rem;
          }
        }
      }

      &.footer_mid {
        position: relative;
        padding: 10px 0px;
        margin: 25px 0 40px;

        &::before,
        &::after {
          position: absolute;
          top: 0;
          left: 50%;
          width: 100vw;
          min-width: 1200px;
          height: 1px;
          background-color: #93999b;
          transform: translateX(-50%);
          content: "";
        }

        &::after {
          top: initial;
          bottom: 0;
        }
      }

      &.footer_btm {
        li {
          display: flex;
          flex-direction: column;
          row-gap: 10px;

          p {
            font-size: 1.4rem;
          }

          &:nth-of-type(1) {
            width: 70%;
          }

          &:nth-of-type(2) {
            width: 30%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    min-width: initial;
    padding-top: 1rem;

    .footer_wrap {
      width: 100%;

      > ul {
        flex-wrap: wrap;

        li {
          width: 50%;
          height: 4rem;

          strong {
            display: block;
            width: 100%;
            height: 100%;

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              padding: 0;
              font-size: 1.4rem;
              text-align: center;
            }
          }
        }

        ul {
          display: none;
        }

        &.footer_mid {
          margin: 1.5rem 0 1rem;
        }

        &.footer_btm {
          li {
            height: auto;
            box-sizing: border-box;
            padding: 3rem 2rem;

            p {
              word-break: keep-all;
            }

            &:nth-of-type(1) {
              position: relative;
              width: 100%;

              &::before {
                position: absolute;
                left: 50%;
                bottom: 0;
                width: calc(100% - 4rem);
                height: 1px;
                background-color: #d9d9d9;
                transform: translateX(-50%);
                content: "";
              }
            }

            &:nth-of-type(2) {
              width: 100%;
              padding-bottom: 8rem;
            }
          }
        }
      }
    }
  }
`;
