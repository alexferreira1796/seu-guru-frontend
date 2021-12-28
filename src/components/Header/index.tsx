import React from 'react';
import Link from 'next/link';
import * as S from './styles';

import { useTheme } from 'styled-components';

import { Menu } from './Menu';
import { Options } from './Options';

function Header() {
  const theme = useTheme();
  const [scroll, setScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    scrollElement();
  }, [scrollY]);

  function scrollElement(): void {
    window.addEventListener('scroll', () => {
      if (scrollY() >= 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  function scrollY() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  return (
    <S.Container>
      <S.Header scrollPage={scroll}>
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
          <Options icon="/images/search.svg" path="#">
            pesquisar
          </Options>
          <Options
            icon="/images/user2.svg"
            color={theme.colors.secondary}
            path="#"
          >
            área do cliente
          </Options>
        </S.ContainerOptions>
      </S.Header>
    </S.Container>
  );
}

export { Header };
