import * as S from './styles';
import Image from 'next/image';

interface IBoxes {
  icon: string;
  title: string;
  desc: string;
  step: number;
  color: string;
}

function Boxes({ icon, title, desc, step, color }: IBoxes) {
  return (
    <S.Container color={color}>
      <S.Flag color={color}>{step}</S.Flag>
      <S.Icon color={color}>
        <Image src={icon} width={60} height={60} />
      </S.Icon>
      <S.Title>{title}</S.Title>
      <S.Description>{desc}</S.Description>
    </S.Container>
  );
}

export { Boxes };
