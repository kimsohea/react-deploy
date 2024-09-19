import styled from "styled-components";

export const SearchBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 20px auto 0px;
  background: #f7f8fb;
  padding: 30px 40px 40px 40px;

  .title {
    font-size: 2rem;
    font-weight: 700;
  }

  .info_btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    button {
      border-bottom: 1px solid #000;
      margin: 10px;
      font-size: 1.4rem;
    }
  }

  form {
    fieldset {
      display: flex;
      align-items: center;
    }

    option {
      cursor: pointer;
    }

    select,
    input,
    button {
      box-sizing: border-box;
      border: 0;
      background: #fff;
      height: 40px;
    }

    .search_btn {
      width: 40px;
      background: #dedfe4;
      cursor: pointer;

      &::before,
      &:after {
        content: "";
      }
    }

    #searchType {
      padding-right: 80px;
      border: 0.25px solid #dedfe4;
      border-right: 0;
      font-size: 1.4rem;
      cursor: pointer;
    }

    #searchKeyword {
      width: 400px;
      border: 0.25px solid #dedfe4;
    }
  }
`;
