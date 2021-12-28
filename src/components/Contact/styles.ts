import styled from 'styled-components';

interface IContainer {
  image: string;
}

export const Container = styled.section<IContainer>`
  width: 100%;
  height: 600px;
  background-image: url(${({ image }) => image});
  background-size: cover, max(400px, 50%);
  background-color: rgb(248, 255, 221);
  background-position: left top, -150px 120px;
  background-repeat: repeat, no-repeat;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
`;

export const BoxContact = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 3em;
  font-family: 'Eina-Semibold';
  line-height: 61px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_dark};
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  text-align: center;
  line-height: 40px;
`;

export const BoxImage = styled.div`
  position: absolute;
  bottom: 0;
`;
