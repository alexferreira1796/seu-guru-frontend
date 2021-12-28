import * as S from './styles';
import Image from 'next/image';
import { Button } from '../../Button';

interface IActivities {
  title: string;
  subtitle?: string;
  desc: string;
  path?: string;
  image: string;
  position?: boolean;
}

function Activities({
  title,
  subtitle,
  desc,
  path,
  image,
  position,
}: IActivities) {
  return (
    <S.Container pos={position}>
      <S.ContentLeft>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description>{desc}</S.Description>
        <Button title="Quero Gympass!" />
      </S.ContentLeft>

      <S.ContentRight>
        <Image src={image} width={525} height={397} />
      </S.ContentRight>
    </S.Container>
  );
}

export { Activities };
