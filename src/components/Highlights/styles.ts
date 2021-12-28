import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const Title = styled.h2`
  font-family: 'Eina-Semibold';
  font-size: 2.25em;
  color: ${({ theme }) => theme.colors.gray_dark};

  text-align: center;

  padding-top: 250px;
`;

export const ContentBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
`;
