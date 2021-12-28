import React from 'react';
import * as S from './styles';
import Image from 'next/image';

function Contact() {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <S.Container image="/images/background-footer.png">
      <S.BoxContact>
        <S.Title>Vamos lá?</S.Title>
        <S.Subtitle>
          Conta pro Guru: <strong>Qual é a sua profissão?</strong>
        </S.Subtitle>
        <S.Dropdown>
          <S.Input placeholder="Digite aqui..." />
          <S.Button onClick={() => setShow(!show)}>veja opções</S.Button>
        </S.Dropdown>

        <S.DropdownResults show={show} />
      </S.BoxContact>
      <S.BoxImage>
        <Image src="/images/guru-footer.svg" width={818} height={450} />
      </S.BoxImage>
    </S.Container>
  );
}

export { Contact };
