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
`;

export const BoxLogo = styled.div``;

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

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
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
`;

export const BoxMenu = styled.div`
  li > a {
    font-size: 0.75em;
    font-family: 'Graphik-Regular';

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
