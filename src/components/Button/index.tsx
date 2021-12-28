import * as S from './styles';

interface IButton {
  title: string;
}

function Button({ title }: IButton) {
  return <S.Container>{title}</S.Container>;
}

export { Button };
