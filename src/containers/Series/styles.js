import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  padding: 0 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #FFFFFF;
    font-size: 50px;
    text-align: center;
    margin-top: 100px;

    /* Responsividade para tablets */
    @media (max-width: 768px) {
      font-size: 36px;
      margin-top: 64px;
    }

    /* Responsividade para celulares */
    @media (max-width: 480px) {
      font-size: 28px;
      margin-top: 48px;
    }
  }
`;

