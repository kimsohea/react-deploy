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
      position: relative;
      width: 40px;
      background: #dedfe4;
      cursor: pointer;

      &::before,
      &:after {
        position: absolute;
        transform: translate(-50%, -50%);
        content: "";
      }

      &:before {
        top: 45%;
        left: 45%;
        width: 30%;
        height: 30%;
        border: 2px solid #000;
        border-radius: 50%;
      }

      &:after {
        top: 65%;
        left: 65%;
        width: 25%;
        height: 2px;
        background-color: #000;
        transform: translate(-50%, -50%) rotate(45deg);
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
      padding: 0 10px;
      border: 0.25px solid #dedfe4;
      font-size: 1.4rem;
    }
  }
`;
