import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';

interface IOptions {
  icon: string;
  path: string;
  color?: string;
  children?: React.ReactNode;
}

function Options({ color, icon, path, children }: IOptions) {
  return (
    <S.Container color={color}>
      <Link href={path}>
        <a>
          <S.Icon>
            <Image src={icon} width={18} height={18} alt="Icone" />
          </S.Icon>
          {children}
        </a>
      </Link>
    </S.Container>
  );
}

export { Options };
