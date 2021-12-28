import styled from 'styled-components';

interface IImage {
  image: string;
}

export const Container = styled.div<IImage>`
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  background-repeat: no-repeat;

  background-size: 100%;
`;

export const ContentImages = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerImageOne = styled.div<IImage>`
  background-image: url(${({ image }) => image});
  width: 974px;
  height: 184px;
  background-repeat: no-repeat;
  margin: 0 auto;
  z-index: 0;

  position: absolute;

  left: 50%;
  transform: translateX(-50%);
`;

export const ContainerImageTwo = styled.div<IImage>`
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 940px;
  background-repeat: no-repeat;
  background-size: 100%;

  position: absolute;
  z-index: 1;

  left: 50%;
  top: 15%;
  transform: translateX(-50%);
`;

export const ContentTexts = styled.div`
  position: absolute;
  right: 0px;
  width: 600px;
  bottom: 15vw;
  z-index: 2;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Eina-Semibold';
    font-size: 1.36em;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 0px;
  width: 100%;
  bottom: 8vw;
  z-index: 2;

  padding: 0px 150px 0 150px;
`;
