import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  width: 100%;
  padding: 0 20px;
  z-index: 2;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px 20px;
    gap: 40px;
  }
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 80px;
    font-weight: 700;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 300px;
    border-radius: 30px;

    @media (max-width: 768px) {
      width: 220px;
    }

    @media (max-width: 480px) {
      width: 180px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
