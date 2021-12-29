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
  position: relative;
  background-size: 100%;
  z-index: 3;

  @media screen and (max-width: 700px) {
    background-size: auto;
    padding: 20px;

    overflow: hidden;
  }
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

  @media screen and (max-width: 900px) {
    width: 100%;
    background-size: contain;
  }
  @media screen and (max-width: 400px) {
    top: 100px;
  }
`;

export const ContainerImageTwo = styled.div<IImage>`
  background-image: url(${({ image }) => image});
  width: 834px;
  height: 940px;
  background-repeat: no-repeat;

  position: absolute;
  z-index: 1;

  left: 50%;
  top: 20%;
  transform: translateX(-50%);

  @media screen and (max-width: 998px) {
    top: 15%;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const ContentTexts = styled.div`
  position: absolute;
  right: 0px;
  width: 700px;
  bottom: 15vw;
  z-index: 2;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Eina-Semibold';
    font-size: 1.36em;
  }

  @media screen and (max-width: 1368px) {
    width: 515px;
  }

  @media screen and (max-width: 998px) {
    bottom: 18vw;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    bottom: 50vw;
  }

  @media screen and (max-width: 400px) {
    bottom: 85vw;
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

  @media screen and (max-width: 1368px) {
    padding: 0px 80px 0 80px;
  }

  @media screen and (max-width: 700px) {
    img {
      display: none !important;
    }
    padding: 0;
    left: 50%;
    width: auto;
    transform: translateX(-50%);
    right: auto;
  }

  @media screen and (max-width: 400px) {
    bottom: 35vw;
  }
`;
