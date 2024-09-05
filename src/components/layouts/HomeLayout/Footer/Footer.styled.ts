import styled from 'styled-components';

export const FooterWrap = styled.footer`
  min-width: 110rem;
  background-color: #eee;

  .footer_wrap {
    width: 110rem;
    display: flex;
    justify-content: space-between;
    padding: 4.5rem 0;
    margin: 0 auto;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
    min-width: initial;

    .footer_wrap {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  @media screen and (max-width: 640px) {
    .footer_wrap {
      padding: 2.5rem 2rem;
      box-sizing: border-box;
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
`;
