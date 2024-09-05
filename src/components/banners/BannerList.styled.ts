import styled from "styled-components";

export const SwiperBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 1440px;
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
  margin: 0;
  background-color: #f3f5f9;
`;
