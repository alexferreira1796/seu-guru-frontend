import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: rgb(179 179 179 / 20%) 8.98649px 10.2703px 20.5405px,
    rgb(255 255 255 / 20%) 0px 0px 0px 0.2em;
  border-radius: 10px;
  font-size: 1em;
  font-family: 'Eina-Semibold';
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease 0s;
  width: 249px;
  height: 66px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
