import styled from "styled-components";

export const ProdSection = styled.section`
  display: block;
  text-align: center;
`;

export const ProdTitle = styled.strong`
  display: block;
  text-align: center;
`;

export const ProdList = styled.ul`
  display: flex;
  width: 1000px;
  column-gap: 15px;
  margin: 0 auto;

  li {
    width: calc(25% - 5px);

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      margin: 0;
      overflow: hidden;
      background-color: #fff;

      img {
        width: 95%;
        height: 95%;
        object-fit: contain;
      }
    }
  }
`;

export const SwiperBtn = styled.div<{ className: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 1100px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 5;

  button {
    display: flex;
    width: 25px;
    height: 25px;
    border-top: 2px solid #93999b;
    border-left: 2px solid #93999b;
    cursor: pointer;
    pointer-events: initial;

    &.prev {
      transform: translateX(5px) rotate(-45deg);
    }

    &.next {
      transform: translateX(-5px) rotate(135deg);
    }
  }

  @media screen and (max-width: 640px) {
    top: 1.25rem;
    width: calc(100% - 4rem);

    button {
      position: relative;
      width: 4rem;
      height: 3rem;

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        left: 0;
        content: "";
      }

      &:before {
        width: 1rem;
        height: 1rem;
        border: 1px solid #93999b;
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform: rotate(-45deg)
          translate(calc(-50% + 0.5rem), calc(-50% + 0.5rem));
        transform-origin: left top;
      }

      &::after {
        width: 100%;
        height: 1px;
        background-color: #93999b;
        transform: translateY(-50%);
      }

      &.prev,
      &.next {
        transform: initial;
        border: initial;
      }

      &.next {
        transform: rotate(180deg);
      }
    }
  }
`;
