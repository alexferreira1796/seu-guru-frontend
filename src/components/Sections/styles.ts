import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerActivitieOne = styled.div`
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const ContainerActivitieTwo = styled.div`
  z-index: 2;
  position: relative;
`;

export const ContainerInformations = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 375px;
  margin-top: -82px;
  z-index: 1;

  display: flex;
`;

export const ContentInformations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 375px;

  max-width: 100%;
  width: 1124px;
  margin: 0 auto;

  margin-top: 135px;
`;

export const Icon = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 15px;
`;

export const Title = styled.h2`
  font-family: 'Eina-Semibold';
  font-size: 1.63em;
  line-height: 35px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Paragraph = styled.p`
  font-family: 'Graphik-Regular';
  font-size: 0.85em;
  line-height: 25px;
  text-align: justify;

  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  flex-grow: 0;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 1em;
  max-width: 38vw;
`;
