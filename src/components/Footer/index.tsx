import * as S from './styles';
import Image from 'next/image';
import Link from 'next/link';

import { Menu as MenuLinks } from '../../utils/menu';
import { Social } from '../../utils/social';

function Footer() {
  return (
    <S.Container>
      <S.BoxLogo>
        <Link href="/">
          <a>
            <Image src="/images/seuguru-footer.svg" width={176} height={53} />
          </a>
        </Link>

        <S.List>
          <li>
            <Link href="/#">
              <a>Política de privacidade</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>Termos {'&'} Condições</a>
            </Link>
          </li>
        </S.List>
      </S.BoxLogo>

      <S.BoxLinks>
        <S.BoxSocial>
          <S.List>
            {Social &&
              Social.map(({ name, path, icon }) => {
                return (
                  <li>
                    <Link key={name} href={path}>
                      <a>{icon}</a>
                    </Link>
                  </li>
                );
              })}
          </S.List>
        </S.BoxSocial>

        <S.BoxMenu>
          <S.List>
            {MenuLinks &&
              MenuLinks.map(({ name, path, icon, active }) => {
                const activeClass = active ? 'active' : '';
                return (
                  <li>
                    <Link key={name} href={path}>
                      <a>{activeClass ? <span>{name}</span> : name}</a>
                    </Link>
                  </li>
                );
              })}
          </S.List>
        </S.BoxMenu>
      </S.BoxLinks>
    </S.Container>
  );
}

export { Footer };
