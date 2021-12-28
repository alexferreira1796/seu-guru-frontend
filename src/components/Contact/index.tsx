import * as S from './styles';
import Image from 'next/image';

function Contact() {
  return (
    <S.Container image="/images/background-footer.png">
      <S.BoxContact>
        <S.Title>Vamos lá?</S.Title>
        <S.Subtitle>
          Conta pro Guru: <strong>Qual é a sua profissão?</strong>
        </S.Subtitle>
      </S.BoxContact>
      <S.BoxImage>
        <Image src="/images/guru-footer.svg" width={818} height={450} />
      </S.BoxImage>
    </S.Container>
  );
}

export { Contact };
