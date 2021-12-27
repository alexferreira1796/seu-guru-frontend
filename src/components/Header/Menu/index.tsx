import Link from 'next/link';
import * as S from './styles';

import { Menu as MenuLinks } from '../../../utils/menu';
function Menu() {
  return (
    <S.Container>
      {MenuLinks &&
        MenuLinks.map(({ name, path, icon, active }) => {
          const activeClass = active ? 'active' : '';
          return (
            <Link key={name} href={path}>
              <a>{activeClass ? <span>{name}</span> : name}</a>
            </Link>
          );
        })}
    </S.Container>
  );
}

export { Menu };
