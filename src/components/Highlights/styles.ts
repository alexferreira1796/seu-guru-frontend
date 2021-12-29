import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 998px) {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-family: 'Eina-Semibold';
  font-size: 2.25em;
  color: ${({ theme }) => theme.colors.gray_dark};

  text-align: center;

  padding-top: 300px;

  @media screen and (max-width: 998px) {
    padding-top: 250px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.8em;
    padding-top: 20px;
  }
`;

export const ContentBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1110px;
  margin: 0 auto;
  margin-top: 140px;
  max-width: 100%;

  @media screen and (max-width: 998px) {
    flex-direction: column;
    margin-top: 20px;
  }

  @media screen and (max-width: 400px) {
    padding: 0 20px;
  }
`;
