import styled from 'styled-components';

export const ListMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  & li {
    margin-left: 40px;
  }
  @media screen and (max-width: 997px) {
    flex-direction: column;
    justify-content: flex-start;
    & li {
      margin-left: 0px;
    }
  }
`;

export const List = styled.li`
  a {
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.2s linear;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
  a.active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;
