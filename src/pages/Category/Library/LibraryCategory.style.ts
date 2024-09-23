import styled from "styled-components";

export const LibSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;

  .lib_title {
    width: 1000px;
    margin: 0 auto 20px;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }

  .lib_post {
    width: 1000px;
    margin: 0 auto;

    li {
      height: 110px;

      &:not(:last-of-type) {
        margin-bottom: 30px;
      }

      a {
        display: flex;
        justify-content: space-between;
        word-break: keep-all;
        font-family: "Noto Sans KR", sans-serif;

        figure {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          margin: 0;
        }

        .tit {
          display: flex;
          flex-direction: column;
          row-gap: 5px;
          width: 150px;
          font-size: 1.4rem;
          font-weight: 500;

          span {
            font-weight: 300;
          }
        }

        .desc {
          width: 600px;
          font-size: 1.4rem;
          line-height: 2.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .lib_title{
      width: 100%;
      font-size: 1.6rem;
    }

    .lib_post {
      width: 100%;
      li {
        height: 12.5rem;
        
        &:not(:last-of-type) {
          margin-bottom: 2rem;
        }

        a {
          justify-content: center;
          flex-wrap: wrap;

          figure {
            width: 30%;

            img {
              height: 11rem;
              transform: translateY(-2rem);
            }
          }

          .tit {
            width: 60%;
            margin-right: 30%;
            row-gap: 0.1rem;

            strong {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            span {
              font-size: 1.2rem;
            }
          }

          .desc {
            display: -webkit-box;
            width: 60%;
            height: 9rem;
            margin-top: .5rem;
            overflow: hidden;
            font-size: 1.2rem;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
          }
        }
      }
    }
  }
`;

export const AladinTvSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;

  .aladin_tv_page {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    li {
      width:fit-content;
      height: 20px;
      background-color: transparent;
      opacity: 1;
      font-family: "Noto-Sans" sans-serif;
      
      button {
        font-size: 1.6rem;
        cursor: pointer;
      }

      &.swiper-pagination-bullet  {
        margin: 0 10px;

        &.swiper-pagination-bullet-active {
          position: relative;

          button {
            font-weight: 700;
          }

          &:before {
            position: absolute;
            bottom: -10px;
            width: 100%;
            height: 1.5px;
            background-color: #000;
            content: '';
          }
        }
      }
    }
  }

  .swiper {
    width: 1000px;
    margin: 0 auto;

    .swiper-slide {
      ul {
        display: flex;
        column-gap: 10px;

        li{
          width: calc(25% - (30px / 4));
          a {
            display: block;
            width: 100%;

            img {
              width: 100%;
            }

            p {
              margin-top: 10px;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    .aladin_tv_page {
      margin-bottom: 2rem;

      li {
        height: 2rem;
      
        button {
          display: -webkit-box;
          font-size: 1.2rem;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
          word-break: break-all;
          overflow: hidden;
        }

        &.swiper-pagination-bullet  {
          margin: 0 0.5rem;

          &.swiper-pagination-bullet-active {
            &:before {
              bottom: -.5rem;
            }
          }
        }
      }
    }

    .swiper {
      width: 100%;
      margin: 0 auto;

      .swiper-slide {
        ul {
          display: flex;
          justify-content: center;
          column-gap: 1rem;
          row-gap: 1rem;
          flex-wrap: wrap;

          li{
            width: calc(50% - 1.5rem);
            a {
              display: block;
              width: 100%;

              img {
                width: 100%;
              }

              p {
                display: -webkit-box;
                margin-top: 1rem;
                overflow: hidden;
                font-size: 1.2rem;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
`;