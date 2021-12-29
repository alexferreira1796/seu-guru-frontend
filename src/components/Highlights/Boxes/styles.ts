import styled from 'styled-components';

interface IColor {
  color: string;
}

export const Container = styled.section<IColor>`
  width: 325px;
  height: 424px;
  background-color: ${({ theme }) => theme.colors.white};

  border-bottom: 18px solid ${({ color }) => color};
  border-radius: 0px 0px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;

  @media screen and (max-width: 998px) {
    margin-bottom: 30px;
  }
`;

export const Flag = styled.div`
  width: 71px;
  height: 29px;
  background-color: ${({ color }) => color};

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  line-height: 29px;
  font-family: 'Eina-Semibold';

  font-size: 0.75em;

  border-radius: 5px;
  align-self: flex-start;
  margin-left: 20px;
`;

export const Icon = styled.div`
  width: 136px;
  height: 136px;
  border-radius: 68px;

  background-color: ${({ color }) => color};
  line-height: 136px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h4`
  font-size: 1.25em;
  color: ${({ theme }) => theme.colors.gray_dark};
  text-align: center;
  padding: 0 20px 0 20px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 0.87em;
  padding: 0 20px 0 20px;

  font-family: 'Graphik-Regular';
`;
