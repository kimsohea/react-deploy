import styled from "styled-components";

export const BookNavi = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #93999b;
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: center;
    column-gap: 5px;

    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        padding: 0 20px;
        font-size: 1.4rem;
        font-family: "Noto Sans" sans-serif;
      }
    }
  }
`;
