import styled from 'styled-components';

interface IPos {
  pos?: boolean;
}

export const Container = styled.div<IPos>`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1110px;
  margin: 0 auto;

  max-width: 100%;

  flex-direction: ${({ pos }) => (pos ? 'row-reverse' : 'row')};

  box-shadow: ${({ pos }) =>
    pos ? 'rgb(0 0 0 / 6%) 23px 21px 80px' : 'initial'};
  border-radius: ${({ pos }) => (pos ? '20px' : 'initial')};

  padding-top: ${({ pos }) => (pos ? '3rem' : 0)};
  padding-right: ${({ pos }) => (pos ? '3rem' : 0)};
  padding-bottom: ${({ pos }) => (pos ? '3rem' : 0)};

  @media screen and (max-width: 998px) {
    flex-direction: column;
    box-shadow: none;
    padding: 20px;
  }
`;

export const ContentLeft = styled.div`
  width: 50%;
  max-width: 100%;

  > image {
    max-width: 100%;
  }

  @media screen and (max-width: 998px) {
    width: 100%;
  }
`;

export const ContentRight = styled.div`
  width: 50%;

  @media screen and (max-width: 998px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-size: 3em;
  line-height: 61px;
  font-family: 'Eina-Semibold';
  margin-bottom: 1.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
    line-height: 25px;
  }
`;

export const Subtitle = styled.p`
  color: #474747;
  font-size: 1.2em;
  font-family: 'Graphik-Regular';
  margin-top: 1.5rem;

  @media screen and (max-width: 600px) {
    font-size: 1em;
    line-height: 25px;
  }
`;

export const Description = styled.p`
  color: #646464;
  font-family: 'Graphik-Regular';
  font-size: 0.87em;
  line-height: 28px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
