import React from 'react';
import Link from 'next/link';
import * as S from './styles';
import { Menu as Options } from '../../../utils/menu';

interface IMenuOptions {
  setOpen: Function;
}

function MenuOptions({ setOpen }: IMenuOptions) {
  return (
    <S.ListMenu>
      {Options &&
        Options.map(({ name, icon, path }) => {
          return (
            <S.List key={name}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </S.List>
          );
        })}
    </S.ListMenu>
  );
}

export default MenuOptions;
