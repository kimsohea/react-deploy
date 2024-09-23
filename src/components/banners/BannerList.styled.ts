import styled from "styled-components";

export const SwiperBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  min-width: 1200px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 5;

  button {
    display: flex;
    width: 25px;
    height: 25px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    cursor: pointer;
    pointer-events: initial;

    &.prev {
      transform: translateX(5px) rotate(-45deg);
    }

    &.next {
      transform: translateX(-5px) rotate(135deg);
    }
  }
`;

export const SwiperImg = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #f3f5f9;

  img {
    width: 100%;
    max-width: 1440px;
  }
`;

export const SubBnrSection = styled.section`
  width: 100%;

  .sub_bnr {
    max-width: 1440px;
    margin: 0 auto;
    .swiper-slide {
      figure {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        background-color: #f6f8fc;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .sub_bnr {
      width: 100%;

      .swiper-slide {
        width: 100%;
        img {
          position: relative;
          left: 25%;
          top: 0;
          width: 150%;
        }
      }
    }
  }
`;
