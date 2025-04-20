import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed; /* alterado de absolute pra fixed pra cobrir bem a tela */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    color: #ff4d4d;
  }
`;
