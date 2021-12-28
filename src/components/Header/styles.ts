import styled from 'styled-components';
import GuruLogo from '/public/images/SeuGuru.svg';

interface IHeader {
  scrollPage: boolean;
}

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  position: sticky;
  z-index: 1000;
  top: 0px;

  margin-bottom: -91px;
`;

export const Header = styled.header<IHeader>`
  width: 100%;
  height: 90px;
  background-color: ${({ scrollPage, theme }) =>
    scrollPage ? theme.colors.primary : 'trasparent'};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex: 1 0 190px;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.h1`
  background-image: url(${GuruLogo});
  font-size: 0;
  width: 176px;
  height: 53px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ContainerMenu = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  height: 90px;
  flex: 2 0 546px;
  padding: 0 60px 0 60px;
`;

export const ContainerOptions = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2em;
  flex: 1 0 282px;
`;
