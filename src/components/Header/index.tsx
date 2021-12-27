import React from 'react';
import Link from 'next/link';
import * as S from './styles';

import { useTheme } from 'styled-components';

import { Menu } from './Menu';
import { Options } from './Options';

function Header() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.ContainerLogo>
          <Link href="/">
            <a>
              <S.Logo>Seu Guru</S.Logo>
            </a>
          </Link>
        </S.ContainerLogo>

        <S.ContainerMenu>
          <Menu />
        </S.ContainerMenu>

        <S.ContainerOptions>
          <Options icon="/images/search.svg">pesquisar</Options>
          <Options icon="/images/user2.svg" color={theme.colors.secondary}>
            área do cliente
          </Options>
        </S.ContainerOptions>
      </S.Header>
    </S.Container>
  );
}

export { Header };
