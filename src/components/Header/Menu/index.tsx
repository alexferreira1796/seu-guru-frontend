import Link from 'next/link';
import * as S from './styles';

import { BsArrowDown } from 'react-icons/bs';

import { Menu as MenuLinks } from '../../../utils/menu';
function Menu() {
  return (
    <S.Container>
      <ul>
        {MenuLinks &&
          MenuLinks.map(({ name, path, icon, active }) => {
            const activeClass = active ? 'active' : '';
            return (
              <S.List key={name}>
                <Link href={path}>
                  <a>
                    {activeClass ? <span>{name}</span> : name}
                    {icon ? icon : ''}
                  </a>
                </Link>
              </S.List>
            );
          })}
      </ul>
    </S.Container>
  );
}

export { Menu };
