import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  padding: 2vw 4vw 3vw;
  gap: 1em;
  border-top: 1px solid rgb(227, 227, 227);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 998px) {
    flex-direction: column;
  }
`;

export const BoxLogo = styled.div`
  @media screen and (max-width: 998px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  li > a {
    color: #929292;
    font-size: 1em;
    font-family: 'Eina-Semibold';
    margin-right: 30px;
    transition: all 0.3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      margin: 20px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 20px;

    a {
      margin-bottom: 20px;
      font-size: 1em;
    }
  }
`;

export const Icon = styled.span`
  transform: rotate(180deg);
  margin-left: 5px;
  width: 15px;
  height: 15px;
  svg {
    color: #929292;
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const BoxSocial = styled.div`
  align-self: flex-end;

  svg {
    font-size: 1.12em;
  }

  @media screen and (max-width: 998px) {
    align-self: center;
  }
`;

export const BoxMenu = styled.div`
  margin-top: 20px;
  li > a {
    font-size: 0.75em;
    font-family: 'Graphik-Regular';

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (max-width: 998px) {
    font-size: 1em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
