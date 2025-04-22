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
    color: #ffffff;
    font-size: 50px;
    text-align: center;
    margin-top: 100px; 

    @media (max-width: 768px) {
      font-size: 35.2px; 
      margin-top: 64px;
    }

    @media (max-width: 480px) {
      font-size: 28.8px;
      margin-top: 48px;
    }
  }
`;
