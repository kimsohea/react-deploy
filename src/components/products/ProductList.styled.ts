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
