import React from 'react';
import Image from 'next/image';
import * as S from './styles';

interface IOptions {
  icon: string;
  path?: string;
  color?: string;
  children?: React.ReactNode;
}

function Options({ color, icon, path, children }: IOptions) {
  return (
    <S.Container color={color}>
      <S.Icon>
        <Image src={icon} width={18} height={18} />
      </S.Icon>
      {children}
    </S.Container>
  );
}

export { Options };
