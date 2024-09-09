import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-width: 1200px;
  overflow: hidden;
  position: relative;
  /* background-color: #f6f6f6; */

  &.active {
    display: none;
  }

  @media screen and (max-width: 640px) {
    min-width: initial;
  }
`;
