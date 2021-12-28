import * as S from './styles';
import Image from 'next/image';

import { Button } from '../Button';

function Banner() {
  return (
    <S.Container image="/images/background.png">
      <S.ContentImages>
        <S.ContainerImageOne image="/images/gympass.svg" />
        <S.ContainerImageTwo image="/images/ss.png" />

        <S.ContentTexts>
          <h2>Academias, estúdios e apps de bem-estar.</h2>
        </S.ContentTexts>

        <S.ContentFooter>
          <Image src="/images/gympass.png" width={164} height={31} />
          <Button title="Quero Gympass!" />
        </S.ContentFooter>
      </S.ContentImages>
    </S.Container>
  );
}

export { Banner };
