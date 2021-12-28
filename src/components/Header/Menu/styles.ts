import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 90px;

    a {
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.2s ease-in-out;
      font-size: 0.9em;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 5px;
        width: 15px;
        height: 15px;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }

      > span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export const List = styled.li``;
