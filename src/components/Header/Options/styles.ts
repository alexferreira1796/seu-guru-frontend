import styled from 'styled-components';

interface IColor {
  color?: string;
}

export const Container = styled.div<IColor>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  font-size: 1em;

  font-family: 'Eina-Semibold';
  line-height: 20px;
`;

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 46px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 15px;
`;
